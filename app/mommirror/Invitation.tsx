'use client';

import { useEffect, useRef, useState } from 'react';
import { makeScene } from './GardenScene';
import { copy, type Locale } from './copy';

type OpeningState = { started:number; revealAt:number; sequenceAt:number };

// Time in seconds mapped onto the scene's poses. The written message has
// nineteen seconds of its own and a generous hold before the card turns over.
const beats: [number, number][] = [[0,0],[2,0],[5,.16],[7,.30],[9,.40],[12,.54],[14,.61],[33,.76],[39,.78],[42,.84]];
function progressAt(seconds:number) {
  for (let i=1;i<beats.length;i++) {
    const [end,value]=beats[i], [start,previous]=beats[i-1];
    if(seconds<end) return previous+(value-previous)*Math.max(0,(seconds-start)/(end-start));
  }
  return .84;
}

export default function Invitation({locale='en'}:{locale?:Locale}){
  const text=copy[locale];
  const canvas=useRef<HTMLCanvasElement>(null);
  const ocean=useRef<HTMLIFrameElement>(null);
  const oceanReady=useRef(false);
  const opening=useRef<OpeningState>({started:0,revealAt:0,sequenceAt:0});
  const [oceanVisible,setOceanVisible]=useState(false);
  const [allowOcean,setAllowOcean]=useState(false);
  const [loading,setLoading]=useState(true);
  const [intro,setIntro]=useState(true);
  const journey=useRef<HTMLElement>(null);
  const [fallback,setFallback]=useState(false);
  useEffect(()=>{
    const state=opening.current;
    state.started=performance.now();state.revealAt=0;state.sequenceAt=0;
    let disposed=false, sceneReady=false, oceanSettled=false;
    let finishTimer:ReturnType<typeof setTimeout>|undefined;
    let introTimer:ReturnType<typeof setTimeout>|undefined;
    const finish=()=>{
      if(disposed||state.revealAt||!sceneReady||!oceanSettled)return;
      const remaining=Math.max(0,2800-(performance.now()-state.started));
      finishTimer=setTimeout(()=>{
        if(disposed||state.revealAt)return;
        state.revealAt=performance.now();state.sequenceAt=state.revealAt+3000;
        setLoading(false);if(oceanReady.current)setOceanVisible(true);
        introTimer=setTimeout(()=>setIntro(false),6200);
      },remaining);
    };
    const receive=(event:MessageEvent)=>{
      if(event.origin===location.origin&&event.source===ocean.current?.contentWindow&&event.data?.type==='mommirror-ocean-ready'){
        oceanReady.current=true;oceanSettled=true;
        if(state.revealAt)setOceanVisible(true);else finish();
      }
    };
    window.addEventListener('message',receive);
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let clean:undefined|(()=>void);
    try {
      if(canvas.current) clean=makeScene(canvas.current,()=>reduce?.84:state.sequenceAt?progressAt((performance.now()-state.sequenceAt)/1000):0,()=>oceanReady.current,()=>state,locale,()=>{sceneReady=true;finish();});
    } catch {setFallback(true);sceneReady=true;}
    if(reduce){oceanSettled=true;finish();} else setAllowOcean(true);
    // If WebGL is unavailable, reveal the complete garden rather than leaving a loader forever.
    const timeout=setTimeout(()=>{oceanSettled=true;if(!sceneReady){setFallback(true);sceneReady=true;}finish();},18000);
    const observer=new IntersectionObserver(entries=>{ocean.current?.contentWindow?.postMessage({type:'mommirror-ocean-visibility',active:entries[0].isIntersecting},location.origin)});
    if(journey.current)observer.observe(journey.current);
    return()=>{disposed=true;if(finishTimer)clearTimeout(finishTimer);if(introTimer)clearTimeout(introTimer);clearTimeout(timeout);observer.disconnect();window.removeEventListener('message',receive);clean?.();};
  },[locale]);
  const replay=()=>{opening.current.sequenceAt=performance.now();setIntro(true);setTimeout(()=>setIntro(false),2000);journey.current?.scrollIntoView({behavior:'smooth'});};
  return <main className="mm-page" lang={locale}>
    <section className="mm-journey" ref={journey} aria-label={text.label}>
      <div className="mm-stage">
        {allowOcean && <iframe ref={ocean} title="" aria-hidden="true" tabIndex={-1} className={`mm-ocean ${oceanVisible?'is-visible':''}`} src="/mommirror/ocean/index.html?preset=calm&float=0&scale=0.6&clouds=0.35&elev=25&yaw=160&pitch=-6" />}
        <div className={`mm-opening-backdrop ${loading?'is-loading':''}`} aria-hidden="true" />
        <canvas ref={canvas} aria-hidden="true" className="mm-canvas" style={fallback?{visibility:'hidden'}:undefined} />
        <div className="mm-top"><img src="/mommirror/wordmark.webp" alt="MomMirror" /></div>
        <div className={`mm-intro ${intro?'is-visible':''}`}><h1>{text.heading[0]}<br/><em>{text.heading[1]}</em></h1></div>
        <div className={`mm-scroll ${loading?'is-loading':''}`}><a href="#download">{text.discover}</a><i /></div>
        <div className={`mm-opening-status ${loading?'is-loading':''}`} role="status" aria-live="polite">{loading?text.loading:''}</div>
        {fallback && <div className="mm-fallback"><p>{text.front.join(' ')}</p><p>{text.reassurance}</p></div>}
      </div>
      <div className="mm-sr">{text.front.join(' ')} {text.reassurance}</div>
    </section>
    <section className="mm-download" id="download"><div className="mm-download-inner"><div className="mm-download-copy"><img className="mm-wordmark" src="/mommirror/wordmark.webp" alt="MomMirror"/><h2>{text.title[0]}<br/><em>{text.title[1]}</em></h2><p>{text.reassurance}</p><div className="mm-store-links"><a href="https://apps.apple.com/app/id6747117444" aria-label={text.apple}><img src={locale==='fr'?'/mommirror/app-store-badge-fr.svg':'/mommirror/app-store-badge.svg'} alt={text.apple} /></a><a href="https://play.google.com/store/apps/details?id=com.picorn.mommirror" aria-label={text.google}><img src={locale==='fr'?'/mommirror/google-play-badge-fr.png':'/mommirror/google-play-badge.png'} alt={text.google} /></a></div><button className="mm-replay" onClick={replay}>{text.replay} ↗</button></div></div><footer>{text.footer} <span>♡</span></footer></section>
  </main>;
}
