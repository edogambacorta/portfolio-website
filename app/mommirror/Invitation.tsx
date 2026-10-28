'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const clamp = (v:number) => Math.max(0, Math.min(1, v));
const step = (a:number,b:number,v:number) => { const t=clamp((v-a)/(b-a)); return t*t*(3-2*t); };
const mix = (a:number,b:number,t:number) => a+(b-a)*t;

function makeScene(canvas: HTMLCanvasElement, getProgress: () => number) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true, powerPreference:'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xfce8e7, .035);
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 100); camera.position.set(0, 1.1, 12.8); camera.lookAt(0, .55, 0);
  scene.add(new THREE.HemisphereLight(0xfff8f5, 0xa2ac78, 2.2));
  const sun = new THREE.DirectionalLight(0xfff0e3, 2.4); sun.position.set(-4, 8, 8); scene.add(sun);
  const mat = (color: THREE.ColorRepresentation, roughness=1) => new THREE.MeshStandardMaterial({color,roughness,side:THREE.DoubleSide});
  const green=mat('#60864e'), leaf=mat('#7fa964'), pink=mat('#f3b8b4'), pinkDark=mat('#d8938e'), cream=mat('#fffaf3');
  const sphere=new THREE.SphereGeometry(1,16,12);
  const petalGeo=new THREE.SphereGeometry(1, 14, 10);
  const cylinder=(radius:number,height:number, material:THREE.Material) => new THREE.Mesh(new THREE.CylinderGeometry(radius,radius*.8,height,8),material);
  function leafAt(parent:THREE.Object3D,x:number,y:number,z:number,scale:number,angle:number) {
    const m=new THREE.Mesh(sphere,leaf); m.scale.set(scale*.35,scale,scale*.12); m.position.set(x,y,z); m.rotation.z=angle; parent.add(m);
  }
  function flower(parent:THREE.Object3D, x:number, z:number, height:number, color:string, size:number, petals=7) {
    const group=new THREE.Group(); group.position.set(x,-2.5,z); parent.add(group);
    const stem=cylinder(.025,height,green); stem.position.y=height/2; stem.rotation.z=.04; group.add(stem);
    leafAt(group,-.13,height*.43,0,size*.7,-.9); leafAt(group,.14,height*.62,0,size*.65,.9);
    const head=new THREE.Group(); head.position.y=height; group.add(head);
    const pm=mat(color); for(let i=0;i<petals;i++){const a=i*Math.PI*2/petals;const p=new THREE.Mesh(petalGeo,pm);p.scale.set(size*.28,size*.62,size*.12);p.position.set(Math.sin(a)*size*.48,Math.cos(a)*size*.48,0);p.rotation.z=-a;head.add(p);}
    const center=new THREE.Mesh(sphere,mat('#e3a94d'));center.scale.setScalar(size*.22);center.position.z=size*.13;head.add(center);
    return group;
  }
  // A layered meadow, built from individual stems, leaves, petals and grasses.
  const garden=new THREE.Group(); scene.add(garden);
  let seed=48; const rand=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};
  const grassMat=[mat('#88a96b'),mat('#a8c587'),mat('#c6d9a4')];
  for(let i=0;i<250;i++){const x=(rand()-.5)*23,z=(rand()-.5)*7-2,h=.25+rand()*1.2;const blade=cylinder(.012,h,grassMat[i%3]);blade.position.set(x,-2.48+h/2,z);blade.rotation.z=(rand()-.5)*.38;garden.add(blade);}
  const colors=['#f6d46c','#fff8ec','#edb3bb','#d2b9da','#fae8a0'];
  for(let i=0;i<66;i++){const x=(rand()-.5)*21,z=(rand()-.5)*6-2,h=.35+rand()*1.2; flower(garden,x,z,h,colors[i%colors.length],.12+rand()*.12,6);}
  flower(garden,-5.4,-.8,2.15,'#f8d15d',.43); flower(garden,-3.5,-1,1.65,'#fffbeb',.39); flower(garden,4.7,-1,2.05,'#edb5bd',.5); flower(garden,6,-2,1.7,'#fffaf4',.32);
  // Pink cloud banks are clusters of soft three-dimensional forms.
  const clouds=new THREE.Group();scene.add(clouds); const cloudMats=[mat('#f8d6d3'),mat('#f9dedb'),mat('#f7d1d0')];
  for(let c=0;c<10;c++){const g=new THREE.Group();const side=c%2?1:-1;g.position.set(side*(3.8+rand()*6),1.4+rand()*4,-5-rand()*5);g.scale.setScalar(.55+rand()*.8);for(let j=0;j<11;j++){const puff=new THREE.Mesh(sphere,cloudMats[(j+c)%3]);puff.position.set((j-5)*.48,Math.sin(j*.8)*.14+rand()*.3,rand()*.3);puff.scale.set(.62+rand()*.35,.38+rand()*.34,.45);g.add(puff);}clouds.add(g);}
  const env=new THREE.Group();scene.add(env);
  const body=new THREE.Mesh(new THREE.BoxGeometry(4.7,3,.12),pink);env.add(body);
  // The flower and ribbon are dimensional objects, attached to the front face.
  const rose=new THREE.Group();rose.position.set(-.15,.1,.13);rose.rotation.z=.4;env.add(rose);
  const roseStem=cylinder(.035,2.2,green);roseStem.position.y=-.35;rose.add(roseStem);leafAt(rose,-.19,-.3,0,.45,-.9);leafAt(rose,.19,.12,0,.38,.9);
  const roseHead=new THREE.Group();roseHead.position.set(0,.85,.1);rose.add(roseHead);
  const roseColors=['#ffd6d0','#f8c2bc','#f3ada9'];
  for(let ring=0;ring<3;ring++){for(let j=0;j<7;j++){const a=j*Math.PI*2/7+ring*.45;const p=new THREE.Mesh(petalGeo,mat(roseColors[ring]));p.scale.set(.19+ring*.045,.30+ring*.05,.08);p.position.set(Math.sin(a)*(.06+ring*.065),Math.cos(a)*(.06+ring*.065),ring*.035);p.rotation.z=-a;roseHead.add(p);}}
  const ribbonMat=mat('#f9d0ce');for(const s of [-1,1]){const loop=new THREE.Mesh(new THREE.TorusGeometry(.19,.038,8,24),ribbonMat);loop.position.set(s*.2,-.35,.15);loop.scale.set(1,.65,1);loop.rotation.z=s*.38;rose.add(loop);const tail=new THREE.Mesh(new THREE.BoxGeometry(.08,.65,.025),ribbonMat);tail.position.set(s*.15,-.72,.13);tail.rotation.z=s*.35;rose.add(tail);} const knot=new THREE.Mesh(sphere,ribbonMat);knot.scale.set(.1,.1,.07);knot.position.set(0,-.35,.18);rose.add(knot);
  function triangle(points:number[], material:THREE.Material){const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(points,3));geometry.computeVertexNormals();return new THREE.Mesh(geometry,material);}
  // Seams and hinged flap live on the envelope's reverse face.
  const back=triangle([-2.35,-1.5,-.075, 2.35,-1.5,-.075, 0,.22,-.076],pinkDark); env.add(back);
  const flap=new THREE.Group();flap.position.set(0,1.5,-.08);env.add(flap);
  flap.add(triangle([-2.35,0,0, 2.35,0,0, 0,-1.65,-.02],mat('#efb2af')));
  const cardCanvas=document.createElement('canvas');cardCanvas.width=1200;cardCanvas.height=820;
  const ctx=cardCanvas.getContext('2d')!; const texture=new THREE.CanvasTexture(cardCanvas);texture.colorSpace=THREE.SRGBColorSpace;
  const card=new THREE.Group();scene.add(card);
  const cardBody=new THREE.Mesh(new THREE.BoxGeometry(4.5,3.075,.055),cream);card.add(cardBody);
  const front=new THREE.Mesh(new THREE.PlaneGeometry(4.5,3.075),new THREE.MeshBasicMaterial({map:texture})); front.position.z=.031;card.add(front);
  const backCanvas=document.createElement('canvas');backCanvas.width=1200;backCanvas.height=820;const bc=backCanvas.getContext('2d')!;
  bc.fillStyle='#fffaf5';bc.fillRect(0,0,1200,820);bc.textAlign='center';bc.fillStyle='#4b343e';bc.font='76px Allura, cursive';bc.fillText('Find your strength,',600,320);bc.fillText('one calm day at a time.',600,425);bc.font='62px Allura, cursive';bc.fillText('You don’t have to carry it alone.',600,550);
  const backTex=new THREE.CanvasTexture(backCanvas);backTex.colorSpace=THREE.SRGBColorSpace;const backCard=new THREE.Mesh(new THREE.PlaneGeometry(4.5,3.075),new THREE.MeshBasicMaterial({map:backTex}));backCard.position.z=-.031;backCard.rotation.y=Math.PI;card.add(backCard);
  function drawCard(reveal:number){
    ctx.fillStyle='#fff8f4';ctx.fillRect(0,0,1200,820);
    const grad=ctx.createLinearGradient(0,0,0,820);grad.addColorStop(0,'#fce6e5');grad.addColorStop(.7,'#fff9f4');grad.addColorStop(1,'#edf3d8');ctx.fillStyle=grad;ctx.fillRect(0,0,1200,820);
    // Small painted meadow on the card; the surrounding garden remains 3D.
    for(let i=0;i<54;i++){let x=(i*127)%1200, h=35+(i*83)%100;ctx.strokeStyle=i%2?'#9abb82':'#c0d69a';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x,820);ctx.quadraticCurveTo(x+12,820-h/2,x+((i%3)-1)*18,820-h);ctx.stroke();if(i%3===0){ctx.fillStyle=['#f6c2c2','#f8d367','#fffdf2'][i%3];ctx.beginPath();ctx.arc(x+((i%3)-1)*18,820-h,7,0,Math.PI*2);ctx.fill();}}
    ctx.textAlign='center';ctx.fillStyle='#73545b';ctx.font='24px Georgia';ctx.fillText('A LITTLE NOTE FOR YOU',600,105);
    const lines=['We made this app for you.','Support our cause and help us','reach more women.','Together, we can make mental health','support affordable, inclusive,','and free from judgment.','For all women. For all of us.'];
    ctx.font='76px Allura, cursive';ctx.fillStyle='#30262c';
    lines.forEach((line,i)=>{const progress=clamp(reveal*lines.length-i);ctx.save();const w=ctx.measureText(line).width;ctx.beginPath();ctx.rect(600-w/2-8,145+i*68,w*progress+8,80);ctx.clip();ctx.lineWidth=1.4;ctx.strokeStyle="#30262c";ctx.strokeText(line,600,205+i*68);ctx.fillText(line,600,205+i*68);ctx.restore();});texture.needsUpdate=true;
  }
  drawCard(0);
  document.fonts.load("62px Allura").then(()=>{ if(!disposed){ drawCard(lastReveal < 0 ? 0 : lastReveal); bc.fillStyle="#fffaf5";bc.fillRect(0,0,1200,820);bc.textAlign="center";bc.fillStyle="#4b343e";bc.font="76px Allura, cursive";bc.fillText("Find your strength,",600,320);bc.fillText("one calm day at a time.",600,425);bc.font="62px Allura, cursive";bc.fillText("You don’t have to carry it alone.",600,550);backTex.needsUpdate=true;} });
  let lastReveal=-1;let frame=0;
  function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.z=w/h<.8?17.4:12.8;camera.updateProjectionMatrix();}
  window.addEventListener('resize',resize);resize();
  let disposed=false;
  function animate(){if(disposed)return;frame=requestAnimationFrame(animate);const p=getProgress();const now=window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:performance.now()*.001;
    const enter=step(.01,.16,p),turn=step(.17,.30,p),open=step(.31,.41,p),rise=step(.41,.53,p),backTurn=step(.72,.80,p),exit=step(.86,.96,p);
    env.position.set(0,mix(-1.5,-.25,enter)+Math.sin(now*.7)*.045,mix(-5,0,enter));env.rotation.set(.03,Math.PI*turn,Math.sin(now*.4)*.025);env.scale.setScalar(mix(.8,1,enter)*(1-exit*.85));flap.rotation.x=-Math.PI*open;
    card.visible=p>.36 && p<.98;card.position.set(0,mix(-.45,1.0,rise)+exit*3.3,mix(-.55,2.4,rise));card.rotation.set(0,Math.PI*backTurn,0);card.scale.setScalar(1-exit*.5);
    const reveal=step(.51,.71,p);if(Math.abs(reveal-lastReveal)>.004){drawCard(reveal);lastReveal=reveal;}
    garden.rotation.z=Math.sin(now*.22)*.003;clouds.position.x=Math.sin(now*.12)*.14;
    renderer.render(scene,camera);
  }
  animate();
  return ()=>{disposed=true;cancelAnimationFrame(frame);window.removeEventListener('resize',resize);scene.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();const materials=Array.isArray(o.material)?o.material:[o.material];materials.forEach(m=>m.dispose());}});texture.dispose();backTex.dispose();renderer.dispose();};
}

export default function Invitation(){
  const canvas=useRef<HTMLCanvasElement>(null);const journey=useRef<HTMLElement>(null);const progress=useRef(0);const [phase,setPhase]=useState(0);const [fallback,setFallback]=useState(false);
  useEffect(()=>{const onScroll=()=>{if(!journey.current)return;const rect=journey.current.getBoundingClientRect();progress.current=clamp(-rect.top/(rect.height-window.innerHeight));const p=progress.current;setPhase(p<.09?0:p<.42?1:p<.71?2:p<.86?3:4);};onScroll();window.addEventListener('scroll',onScroll,{passive:true});let clean:undefined|(()=>void);try{if(canvas.current)clean=makeScene(canvas.current,()=>progress.current);}catch{setFallback(true);}return()=>{window.removeEventListener('scroll',onScroll);clean?.();};},[]);
  return <main className="mm-page">
    <section className="mm-journey" ref={journey} aria-label="An invitation from MomMirror">
      <div className="mm-stage">
        <canvas ref={canvas} aria-hidden="true" className="mm-canvas" />
        <div className="mm-top"><img src="/mommirror/wordmark.webp" alt="MomMirror" /><a href="#download">Skip to download <span>↗</span></a></div>
        <div className={`mm-intro ${phase===0?'is-visible':''}`}><span className="mm-eyebrow">A LITTLE SOMETHING FOR YOU</span><h1>A moment<br /><em>just for you.</em></h1><p>There’s a little note waiting for you.</p></div>
        <div className={`mm-caption ${phase===1?'is-visible':''}`}>A little note, made with love.</div>
        <div className={`mm-caption mm-caption-bottom ${phase===2?'is-visible':''}`}>A message for all of us.</div>
        <div className={`mm-caption mm-caption-bottom ${phase===3?'is-visible':''}`}>A gentle reminder, just for you.</div>
        <div className="mm-scroll"><span>{phase===0?'SCROLL TO OPEN':'KEEP SCROLLING'}</span><i /></div>
        {fallback && <div className="mm-fallback"><p>We made this app for you.</p><p>Together, we can make mental health support affordable, inclusive, and free from judgment. For all women. For all of us.</p><p>Find your strength, one calm day at a time. You don’t have to carry it alone.</p></div>}
      </div>
      <div className="mm-sr">We made this app for you. Support our cause and help us reach more women. Together, we can make mental health support affordable, inclusive, and free from judgment. For all women. For all of us. Find your strength, one calm day at a time. You don’t have to carry it alone.</div>
    </section>
    <section className="mm-download" id="download"><div className="mm-download-inner"><div className="mm-download-copy"><span className="mm-eyebrow">A LITTLE SPACE FOR YOU</span><img className="mm-wordmark" src="/mommirror/wordmark.webp" alt="MomMirror"/><h2>Take a moment<br/><em>for you.</em></h2><p>Find your strength, one calm day at a time. You don’t have to carry it alone.</p><div className="mm-store-links"><a href="https://apps.apple.com/app/id6747117444" aria-label="Download MomMirror on the App Store"><svg className="mm-store-icon" viewBox="0 0 24 28" aria-hidden="true"><path fill="currentColor" d="M19.7 14.9c0-3 2.5-4.5 2.6-4.5-1.4-2-3.5-2.3-4.3-2.3-1.8-.2-3.6 1.1-4.5 1.1-.9 0-2.3-1.1-3.9-1-2 .1-3.9 1.2-4.9 3-2.1 3.6-.5 9 1.5 12 1 1.5 2.1 3.1 3.6 3 1.4-.1 2-1 3.8-1s2.3 1 3.9 1c1.6 0 2.5-1.5 3.5-3 1.1-1.7 1.6-3.3 1.6-3.4-.1 0-2.9-1.1-2.9-4.9zM16.9 6.2c.8-1 1.4-2.5 1.2-3.9-1.2 0-2.8.9-3.6 1.9-.8.9-1.5 2.4-1.3 3.8 1.4.1 2.8-.7 3.7-1.8z"/></svg><span><small>Download on the</small><strong>App Store</strong></span></a><a href="https://play.google.com/store/apps/details?id=com.picorn.mommirror" aria-label="Get MomMirror on Google Play"><svg className="mm-play-icon" viewBox="0 0 24 28" aria-hidden="true"><path fill="#63d6bf" d="M1 1v26l13-13z"/><path fill="#f6d15f" d="M14 14l4-4 5 3c1 .6 1 1.4 0 2l-5 3z"/><path fill="#74b8f1" d="M1 1l17 9-4 4z"/><path fill="#f07982" d="M1 27l17-9-4-4z"/></svg><span><small>GET IT ON</small><strong>Google Play</strong></span></a></div></div><div className="mm-qr-card"><img className="mm-app-icon" src="/mommirror/icon.png" alt=""/><img className="mm-qr" src="/mommirror/qr.svg" alt="QR code linking to this download page"/><strong>SCAN TO DOWNLOAD</strong><span>Or choose your app store</span></div></div><footer>Made with care, for all of us. <span>♡</span></footer></section>
  </main>;
}
