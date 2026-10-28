'use client';

import { useEffect, useRef, useState } from 'react';
import { makeScene } from './GardenScene';

const clamp = (v:number) => Math.max(0, Math.min(1, v));
type OpeningState = { started:number; revealAt:number };

export default function Invitation(){
  const canvas=useRef<HTMLCanvasElement>(null);
  const ocean=useRef<HTMLIFrameElement>(null);
  const oceanReady=useRef(false);
  const opening=useRef<OpeningState>({started:0,revealAt:0});
  const [oceanVisible,setOceanVisible]=useState(false);
  const [allowOcean,setAllowOcean]=useState(false);
  const [loading,setLoading]=useState(true);
  const journey=useRef<HTMLElement>(null);
  const progress=useRef(0);
  const [phase,setPhase]=useState(0);
  const [fallback,setFallback]=useState(false);
  useEffect(()=>{
    const state=opening.current;
    state.started=performance.now();state.revealAt=0;
    let disposed=false;let finishTimer:ReturnType<typeof setTimeout>|undefined;
    const finish=()=>{if(disposed||state.revealAt)return;state.revealAt=performance.now();setLoading(false);if(oceanReady.current)setOceanVisible(true);};
    const ready=()=>{oceanReady.current=true;if(state.revealAt){setOceanVisible(true);return;}const remaining=Math.max(0,2800-(performance.now()-state.started));finishTimer=setTimeout(finish,remaining);};
    const receive=(event:MessageEvent)=>{if(event.origin===location.origin&&event.source===ocean.current?.contentWindow&&event.data?.type==='mommirror-ocean-ready')ready();};
    const onScroll=()=>{if(!journey.current)return;const rect=journey.current.getBoundingClientRect();progress.current=clamp(-rect.top/(rect.height-window.innerHeight));const p=progress.current;setPhase(p<.09?0:p<.42?1:p<.71?2:p<.86?3:4);};
    onScroll();window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('message',receive);
    let clean:undefined|(()=>void);
    try{if(canvas.current)clean=makeScene(canvas.current,()=>progress.current,()=>oceanReady.current,()=>state);}catch{setFallback(true);finish();}
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce)finishTimer=setTimeout(finish,350);else setAllowOcean(true);
    // A failed or unsupported ocean must never trap visitors on the loading screen.
    const timeout=setTimeout(finish,25000);
    const observer=new IntersectionObserver(entries=>{ocean.current?.contentWindow?.postMessage({type:'mommirror-ocean-visibility',active:entries[0].isIntersecting},location.origin)});
    if(journey.current)observer.observe(journey.current);
    return()=>{disposed=true;if(finishTimer)clearTimeout(finishTimer);clearTimeout(timeout);observer.disconnect();window.removeEventListener('scroll',onScroll);window.removeEventListener('message',receive);clean?.();};
  },[]);
  return <main className="mm-page">
    <section className="mm-journey" ref={journey} aria-label="An invitation from MomMirror">
      <div className="mm-stage">
        {allowOcean && <iframe ref={ocean} title="" aria-hidden="true" tabIndex={-1} className={`mm-ocean ${oceanVisible?'is-visible':''}`} src="/mommirror/ocean/index.html?preset=calm&float=0&scale=0.7&clouds=0.35&elev=25&yaw=160&pitch=-6" />}
        <div className={`mm-opening-backdrop ${loading?"is-loading":""}`} aria-hidden="true" />
        <canvas ref={canvas} aria-hidden="true" className="mm-canvas" />
        <div className="mm-top"><img src="/mommirror/wordmark.webp" alt="MomMirror" /></div>
        <div className={`mm-intro ${phase===0?'is-visible':''}`}><h1>There’s a little note<br/><em>waiting for you.</em></h1></div>
        <div className={`mm-scroll ${loading?"is-loading":""}`}><span>{phase===0?'SCROLL TO OPEN':'KEEP SCROLLING'}</span><i /></div>
        <div className={`mm-opening-status ${loading?"is-loading":""}`} role="status" aria-live="polite">{loading?"Preparing your note…":""}</div>
        {fallback && <div className="mm-fallback"><p>We made this app for you.</p><p>Together, we can make mental health support affordable, inclusive, and free from judgment. For all women. For all of us.</p><p>Find your strength, one calm day at a time. You don’t have to carry it alone.</p></div>}
      </div>
      <div className="mm-sr">We made this app for you. Support our cause and help us reach more women. Together, we can make mental health support affordable, inclusive, and free from judgment. For all women. For all of us. Find your strength, one calm day at a time. You don’t have to carry it alone.</div>
    </section>
    <section className="mm-download" id="download"><div className="mm-download-inner"><div className="mm-download-copy"><img className="mm-wordmark" src="/mommirror/wordmark.webp" alt="MomMirror"/><h2>Take a moment<br/><em>for you.</em></h2><p>Find your strength, one calm day at a time. You don’t have to carry it alone.</p><div className="mm-store-links"><a href="https://apps.apple.com/app/id6747117444" aria-label="Download MomMirror on the App Store"><img src="/mommirror/app-store-badge.svg" alt="Download on the App Store" /></a><a href="https://play.google.com/store/apps/details?id=com.picorn.mommirror" aria-label="Get MomMirror on Google Play"><img src="/mommirror/google-play-badge.png" alt="Get it on Google Play" /></a></div></div><div className="mm-qr-card"><img className="mm-app-icon" src="/mommirror/icon.png" alt=""/><img className="mm-qr" src="/mommirror/qr.svg" alt="QR code linking to this download page"/><strong>SCAN TO DOWNLOAD</strong></div></div><footer>Made with care, for all of us. <span>♡</span></footer></section>
  </main>;
}
