import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { copy, type Locale } from './copy';

const clamp=(v:number)=>Math.max(0,Math.min(1,v));
const ease=(a:number,b:number,v:number)=>{const t=clamp((v-a)/(b-a));return t*t*(3-2*t);};
const mix=(a:number,b:number,t:number)=>a+(b-a)*t;

// Every stem, leaf and petal is shaped here, as geometry rather than a flat garden image.
export function makeScene(canvas:HTMLCanvasElement,getProgress:()=>number, hasOcean:()=>boolean, opening:()=>{started:number;revealAt:number},locale:Locale,onReady:()=>void){
 const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,matchMedia('(max-width: 700px)').matches?1.15:1.5)); renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.12;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
 const scene=new THREE.Scene();scene.fog=new THREE.FogExp2('#f9e5df',.026);
 // Render the invitation separately, with its own depth buffer, so the meadow
 // cannot pass through it while the flap still occludes the rising card.
 const invitationScene=new THREE.Scene();renderer.autoClear=false;
 const camera=new THREE.PerspectiveCamera(36,1,.1,100);camera.position.set(0,1.5,14.5);camera.lookAt(0,0,0);
 const ambient=new THREE.HemisphereLight('#ffe5e1','#80976c',2);scene.add(ambient);invitationScene.add(ambient.clone());
 const sun=new THREE.DirectionalLight('#fff0ed',2.1);sun.position.set(-5,8,9);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-5;sun.shadow.camera.right=5;sun.shadow.camera.top=5;sun.shadow.camera.bottom=-5;sun.shadow.bias=-.0003;sun.shadow.radius=4;scene.add(sun);invitationScene.add(sun.clone());
 const fill=new THREE.DirectionalLight('#f9c8c3',.7);fill.position.set(6,4,-4);scene.add(fill);invitationScene.add(fill.clone());
 let seed=41261;const random=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646};
 const materials:THREE.Material[]=[];const geometries:THREE.BufferGeometry[]=[];
 const mat=(color:THREE.ColorRepresentation,extra:Partial<THREE.MeshStandardMaterialParameters>={})=>{const m=new THREE.MeshStandardMaterial({color,roughness:.87,side:THREE.DoubleSide,...extra});materials.push(m);return m};
 const green=mat('#658b4f'),leafMat=mat('#71995b'),leafLight=mat('#94b275'),pink=mat('#efb8b3'),pinkEdge=mat('#df9f9b'),paper=mat('#fffaf2');
 const addMesh=(g:THREE.BufferGeometry,m:THREE.Material,parent:THREE.Object3D)=>{const o=new THREE.Mesh(g,m);parent.add(o);return o};
 function track<T extends THREE.BufferGeometry>(g:T){geometries.push(g);return g}
 const ball=track(new THREE.SphereGeometry(1,14,10));
 // A gently cupped, tapered surface: enough curvature for highlights to travel across each petal.
 function organic(length:number,width:number,cup:number,tip:number){
   const vertices:number[]=[],uvs:number[]=[],indices:number[]=[];const rows=14,cols=8;
   for(let j=0;j<=rows;j++){const v=j/rows;const outline=Math.pow(Math.sin(Math.PI*v),.65)*(1+tip*(v-.5));for(let i=0;i<=cols;i++){const u=i/cols*2-1;vertices.push(u*width*.5*outline,v*length,Math.sin(Math.PI*v)*cup+u*u*outline*cup*.7);uvs.push(i/cols,v);}}
   for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const a=j*(cols+1)+i,b=a+cols+1;indices.push(a,b,a+1,b,b+1,a+1)}
   const g=track(new THREE.BufferGeometry());g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();return g;
 }
 const leafGeo=organic(.62,.27,.055,-.15),bladeGeo=organic(1,.065,.025,-.3);
 const daisyPetal=organic(.47,.15,.045,-.18),cupPetal=organic(.38,.27,.10,.15),rosePetal=organic(.43,.48,.05,.18),lavenderPetal=organic(.14,.09,.03,.1);
 function tube(points:THREE.Vector3[],radius:number,m:THREE.Material,parent:THREE.Object3D){return addMesh(track(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),12,radius,6,false)),m,parent)}
 function leafOn(parent:THREE.Object3D,y:number,side:number,scale:number,z=0){const l=addMesh(leafGeo,random()>.35?leafMat:leafLight,parent);l.position.set(0,y,z);l.rotation.set(.12,side*.2,side*(.9+random()*.3));l.scale.setScalar(scale);}
 const garden=new THREE.Group();scene.add(garden);
 // The sloping ground fills the foreground and gives the flowers a place to grow.
 let texturesReady:()=>void=()=>{};const texturesLoaded=new Promise<void>(resolve=>{texturesReady=resolve});const manager=new THREE.LoadingManager(texturesReady);const loader=new THREE.TextureLoader(manager);const groundMaterial=mat('#a4bd85');const gardenMaterials:THREE.Material[]=[groundMaterial];const meadowGround=loader.load('/mommirror/ground-meadow.webp',texture=>{texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(18,6);groundMaterial.map=texture;groundMaterial.color.set('#e3efd4');groundMaterial.needsUpdate=true;});const ground=addMesh(track(new THREE.PlaneGeometry(90,30,1,1)),groundMaterial,garden);ground.rotation.x=-Math.PI/2;ground.position.set(0,-2.55,7);
 // Crossed textured cards are placed in depth, following the woodland reference's
 // near-vegetation approach. The focal envelope and flowers remain 3D meshes.
 const foliageTextures=['meadow-long','flowers-yellow','flowers-purple'].map(name=>{const t=loader.load('/mommirror/'+name+'.webp');t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),8);return t});
 const patchGeo=track(new THREE.PlaneGeometry(2.4,2.4,1,4));patchGeo.translate(0,1.2,0);const patchWind={value:0};
 const patches:THREE.InstancedMesh[]=[];for(let type=0;type<3;type++){const foliageMat=new THREE.MeshStandardMaterial({color:'#effff2',map:foliageTextures[type],side:THREE.DoubleSide,alphaTest:.45,roughness:1});foliageMat.onBeforeCompile=shader=>{shader.uniforms.patchTime=patchWind;shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nuniform float patchTime;').replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed.x += sin(patchTime * 0.75 + instanceMatrix[3].x * 0.6 + instanceMatrix[3].z * 0.4) * 0.045 * uv.y;');};materials.push(foliageMat);gardenMaterials.push(foliageMat);
 for(let cross=0;cross<2;cross++){const mesh=new THREE.InstancedMesh(patchGeo,foliageMat,150);garden.add(mesh);patches.push(mesh);}}
 const patchDummy=new THREE.Object3D();for(let type=0;type<3;type++){for(let i=0;i<150;i++){const x=(random()-.5)*27,z=mix(-7.8,11.5,random()),scale=.38+random()*.5,yaw=random()*Math.PI;for(let cross=0;cross<2;cross++){patchDummy.position.set(x,-2.53,z);patchDummy.rotation.set(0,yaw+cross*Math.PI/2,0);patchDummy.scale.set(scale,scale*(.7+random()*.25),scale);patchDummy.updateMatrix();patches[type*2+cross].setMatrixAt(i,patchDummy.matrix);}}patches[type*2].instanceMatrix.needsUpdate=true;patches[type*2+1].instanceMatrix.needsUpdate=true;}

 // Thousands of fine blades are instanced so the meadow stays light on phones.
 const grassMaterial=mat('#88a76b');gardenMaterials.push(grassMaterial);const count=2500;const grass=new THREE.InstancedMesh(bladeGeo,grassMaterial,count);garden.add(grass);const dummy=new THREE.Object3D();
 for(let i=0;i<count;i++){const x=(random()-.5)*28,z=mix(-7.8,11,random()),h=.28+random()*.7;dummy.position.set(x,-2.54,z);dummy.rotation.set((random()-.5)*.3,random()*Math.PI,(random()-.5)*.45);dummy.scale.set(.55+random()*.55,h,.8);dummy.updateMatrix();grass.setMatrixAt(i,dummy.matrix);grass.setColorAt(i,new THREE.Color().setHSL(.23+random()*.07,.24+random()*.18,.42+random()*.22));}grass.instanceMatrix.needsUpdate=true;if(grass.instanceColor)grass.instanceColor.needsUpdate=true;
 // A layered, advected noise sky and animated, displaced sea inspired by the
 // atmosphere and water techniques in the two referenced rendering projects.
 const skyUniforms={uTime:{value:0}};
 const skyMaterial=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:skyUniforms,vertexShader:`varying vec3 vDirection; void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`
 varying vec3 vDirection; uniform float uTime;
 float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float noise3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 float fbm(vec3 p){float f=0.;f+=.57*noise3(p);p=p*2.03+1.7;f+=.28*noise3(p);p=p*2.07+2.3;f+=.15*noise3(p);return f;}
 void main(){vec3 d=normalize(vDirection-cameraPosition);float h=max(d.y,0.);vec3 sky=mix(vec3(.98,.88,.86),vec3(.94,.78,.80),smoothstep(0.,.8,h));gl_FragColor=vec4(sky,1.);}`});materials.push(skyMaterial);const sky=addMesh(track(new THREE.SphereGeometry(80,32,16)),skyMaterial,scene);sky.renderOrder=-10;
 // The envelope has a fine paper grain, overlapping folds, a ribbon and a sculpted rose.
 const paperCanvas=document.createElement('canvas');paperCanvas.width=256;paperCanvas.height=256;const pc=paperCanvas.getContext('2d')!;pc.fillStyle='#f2c0bb';pc.fillRect(0,0,256,256);for(let i=0;i<3500;i++){const v=Math.floor(220+random()*35);pc.fillStyle=`rgba(${v},${v-18},${v-21},${random()*.12})`;pc.fillRect(random()*256,random()*256,1+random()*2,1);}for(let i=0;i<750;i++){const x=random()*256,y=random()*256;pc.strokeStyle=i%2?'rgba(255,247,241,.11)':'rgba(160,100,95,.07)';pc.lineWidth=.35;pc.beginPath();pc.moveTo(x,y);pc.lineTo(x+2+random()*9,y+(random()-.5)*2);pc.stroke();}const paperTexture=new THREE.CanvasTexture(paperCanvas);paperTexture.colorSpace=THREE.SRGBColorSpace;paperTexture.wrapS=paperTexture.wrapT=THREE.RepeatWrapping;paperTexture.repeat.set(2,1.3);
 const envelopeMaterial=mat('#fff7f2',{map:paperTexture,bumpMap:paperTexture,bumpScale:.018});const env=new THREE.Group();invitationScene.add(env);addMesh(track(new RoundedBoxGeometry(4.7,3,.12,4,.035)),envelopeMaterial,env);
 function triangle(points:number[],m:THREE.Material){const g=track(new THREE.BufferGeometry());g.setAttribute('position',new THREE.Float32BufferAttribute(points,3));g.computeVertexNormals();return new THREE.Mesh(g,m)}
 env.children[0].receiveShadow=true;
 // The folded paper panels meet at one point, with fine seams and the same
 // grain as the envelope rather than two overlapping, contrasting triangles.
 const pocketMat=mat('#f6e7e0',{map:paperTexture,bumpMap:paperTexture,bumpScale:.012});
 const flapMat=mat('#fff0e9',{map:paperTexture,bumpMap:paperTexture,bumpScale:.012});
 env.add(triangle([-2.32,-1.47,-.076,2.32,-1.47,-.076,0,-.15,-.076],pocketMat));
 const seamMat=new THREE.LineBasicMaterial({color:'#a96d69',transparent:true,opacity:.48});materials.push(seamMat);
 function seam(points:number[],parent:THREE.Object3D){const g=track(new THREE.BufferGeometry());g.setAttribute('position',new THREE.Float32BufferAttribute(points,3));parent.add(new THREE.Line(g,seamMat));}
 seam([-2.31,-1.46,-.083,0,-.15,-.083,2.31,-1.46,-.083],env);
 const flap=new THREE.Group();flap.position.set(0,1.5,-.085);env.add(flap);flap.add(triangle([-2.32,0,0,2.32,0,0,0,-1.65,-.012],flapMat));
 seam([-2.31,-.02,-.018,0,-1.65,-.025,2.31,-.02,-.018],flap);
 const rose=new THREE.Group();rose.position.set(-.2,-.05,.13);rose.rotation.z=.4;env.add(rose);
 tube([new THREE.Vector3(0,-1.1,0),new THREE.Vector3(.03,-.1,0),new THREE.Vector3(0,.76,.03)],.027,green,rose);leafOn(rose,-.45,-1,.8,.01);leafOn(rose,.1,1,.65,.01);
 const blossom=new THREE.Group();blossom.position.set(0,.74,.08);rose.add(blossom);
 const roseMats=[mat('#fce1d9',{emissive:'#f3b9b6',emissiveIntensity:.18}),mat('#f9c8c2',{emissive:'#efa9aa',emissiveIntensity:.18}),mat('#f1aaa9',{emissive:'#f2b5b4',emissiveIntensity:.18}),mat('#eaa0a3',{emissive:'#f0afaf',emissiveIntensity:.18})];
 for(let ring=4;ring>=0;ring--){const n=ring<2?5:7;for(let j=0;j<n;j++){const a=j*Math.PI*2/n+ring*.5+(random()-.5)*.14;const pivot=new THREE.Group();pivot.rotation.z=-a;pivot.position.set(Math.sin(a)*ring*.027,Math.cos(a)*ring*.027,(4-ring)*.055);blossom.add(pivot);const petal=addMesh(rosePetal,roseMats[(ring+j)%roseMats.length],pivot);petal.rotation.x=.08+(4-ring)*.16;petal.rotation.y=(random()-.5)*.12;petal.scale.set(.85+random()*.22,1+random()*.15,1).multiplyScalar(.42+ring*.13);}}
 rose.traverse(o=>{if(o instanceof THREE.Mesh)o.castShadow=true});const ribbon=mat('#f9d8d3',{metalness:.05,roughness:.5});for(const side of [-1,1]){const loop=addMesh(track(new THREE.TorusGeometry(.19,.028,8,30)),ribbon,rose);loop.position.set(side*.19,-.45,.16);loop.scale.set(1,.65,1);loop.rotation.z=side*.35;const tail=addMesh(track(new THREE.BoxGeometry(.085,.7,.02)),ribbon,rose);tail.position.set(side*.14,-.83,.14);tail.rotation.z=side*.33;}const knot=addMesh(ball,ribbon,rose);knot.position.set(0,-.45,.2);knot.scale.set(.09,.08,.04);
 // The supplied artwork is used as printed detail on the card, with lettering drawn separately.
 const cardCanvas=document.createElement('canvas');cardCanvas.width=1200;cardCanvas.height=820;const ctx=cardCanvas.getContext('2d')!;const cardTexture=new THREE.CanvasTexture(cardCanvas);cardTexture.colorSpace=THREE.SRGBColorSpace;
 const artwork=new Image();artwork.src='/mommirror/card-art-no-butterfly.webp';const icon=new Image();icon.src='/mommirror/icon.png';let lastReveal=0;let disposed=false;const imageReady=(image:HTMLImageElement)=>image.decode().catch(()=>{});Promise.all([texturesLoaded,imageReady(artwork),imageReady(icon),document.fonts.load('76px Allison')]).then(()=>{if(!disposed){drawCard(lastReveal);drawBack();requestAnimationFrame(()=>requestAnimationFrame(()=>{if(!disposed)onReady()}));}});
 function drawCard(reveal:number){ctx.fillStyle='#fff7f3';ctx.fillRect(0,0,1200,820);const grad=ctx.createLinearGradient(0,0,0,820);grad.addColorStop(0,'#fbe6e5');grad.addColorStop(.68,'#fff9f5');grad.addColorStop(1,'#e8efd9');ctx.fillStyle=grad;ctx.fillRect(0,0,1200,820);if(artwork.complete&&artwork.naturalWidth){ctx.drawImage(artwork,0,artwork.naturalHeight*.575,artwork.naturalWidth,artwork.naturalHeight*.425,0,485,1200,335);}if(icon.complete&&icon.naturalWidth){ctx.save();ctx.beginPath();ctx.roundRect(556,35,88,88,20);ctx.clip();ctx.drawImage(icon,556,35,88,88);ctx.restore();}ctx.textAlign='center';ctx.fillStyle='#382c30';ctx.font='78px Allison, cursive';const lines=copy[locale].front; if(locale==='fr')ctx.font='72px Allison, cursive';const widths=lines.map(line=>ctx.measureText(line).width+16);const total=widths.reduce((a,b)=>a+b,0);let written=reveal*total;lines.forEach((line,i)=>{const w=widths[i]-16,p=clamp(written/widths[i]);written-=widths[i];ctx.save();ctx.beginPath();ctx.rect(600-w/2-8,102+i*(locale==='fr'?67:54),w*p+8,78);ctx.clip();ctx.lineWidth=1.2;ctx.strokeStyle='#382c30';ctx.strokeText(line,600,164+i*(locale==='fr'?67:54));ctx.fillText(line,600,164+i*(locale==='fr'?67:54));ctx.restore();});cardTexture.needsUpdate=true;}
 artwork.onload=()=>{if(!disposed)drawCard(lastReveal)};icon.onload=()=>{if(!disposed)drawCard(lastReveal)};
 const reverseCanvas=document.createElement('canvas');reverseCanvas.width=1200;reverseCanvas.height=820;const rc=reverseCanvas.getContext('2d')!;const reverseTexture=new THREE.CanvasTexture(reverseCanvas);reverseTexture.colorSpace=THREE.SRGBColorSpace;
 function drawBack(){rc.fillStyle='#fffaf5';rc.fillRect(0,0,1200,820);rc.textAlign='center';rc.fillStyle='#47343a';rc.strokeStyle='#47343a';rc.lineWidth=1.5;rc.font='98px Allison, cursive';for(const [i,text] of copy[locale].back.entries()){const y=300+i*115;rc.strokeText(text,600,y);rc.fillText(text,600,y)}reverseTexture.needsUpdate=true;}
 const card=new THREE.Group();invitationScene.add(card);addMesh(track(new THREE.BoxGeometry(4.5,3.075,.055)),paper,card);const front=addMesh(track(new THREE.PlaneGeometry(4.5,3.075)),new THREE.MeshBasicMaterial({map:cardTexture}),card);materials.push(front.material as THREE.Material);front.position.z=.031;const back=addMesh(track(new THREE.PlaneGeometry(4.5,3.075)),new THREE.MeshBasicMaterial({map:reverseTexture}),card);materials.push(back.material as THREE.Material);back.position.z=-.031;back.rotation.y=Math.PI;
 drawCard(0);drawBack();document.fonts.load('76px Allison').then(()=>{if(!disposed){drawCard(lastReveal);drawBack()}});
 function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.z=w/h<.8?Math.max(17.4,2.4+4.5/(2*Math.tan(Math.PI/10)*(w/h)*.82)):14.5;camera.lookAt(0,0,0);camera.updateProjectionMatrix();}window.addEventListener('resize',resize);resize();
 let frame=0,lastFrame=0;let inView=true;const visibility=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting});visibility.observe(canvas);const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let startingAngle=Math.PI;
 // Keep vegetation fully opaque and fade the finished landscape as one layer.
 // The envelope is rendered afterward, above the reveal veil.
 const veilScene=new THREE.Scene();const veilCamera=new THREE.OrthographicCamera(-1,1,1,-1,0,2);veilCamera.position.z=1;const veilMaterial=new THREE.MeshBasicMaterial({color:'#fbe8e5',transparent:true,depthTest:false,depthWrite:false,toneMapped:false});materials.push(veilMaterial);veilScene.add(new THREE.Mesh(track(new THREE.PlaneGeometry(2,2)),veilMaterial));
 function animate(){if(disposed)return;frame=requestAnimationFrame(animate);const clock=performance.now();if(document.hidden||!inView||clock-lastFrame<32)return;lastFrame=clock;const p=getProgress(),state=opening(),elapsed=(clock-state.started)/1000,now=reduce?0:clock*.001;const arriving=state.revealAt?ease(0,3,(clock-state.revealAt)/1000):0;
 const enter=ease(.01,.16,p),turn=ease(.17,.30,p),open=ease(.30,.40,p),extract=ease(.41,.54,p),present=ease(.54,.61,p),backTurn=ease(.78,.84,p),exit=ease(.91,.99,p);
 const normalY=mix(-.2,-.45,enter)-present*.85+Math.sin(now*.7)*.035,normalZ=mix(-6,0,enter)-present*.8,normalScale=mix(.68,1,enter)*(1-present*.16)*(1-exit*.85);
 if(!state.revealAt)startingAngle=reduce?0:Math.PI*(1-ease(.25,2.45,elapsed));
 env.visible=true;env.position.set(0,mix(-.8,normalY,arriving),mix(.3,normalZ,arriving));env.rotation.set(.025,mix(startingAngle,Math.PI*turn,arriving),Math.sin(now*.4)*.014*arriving);env.scale.setScalar(mix(.9,normalScale,arriving));
 flap.rotation.x=-Math.PI*open*arriving;flap.position.z=mix(-.085,.28,open*arriving);
 card.visible=arriving>.99&&p>.40&&p<.99;const extractedY=env.position.y+mix(.04,3.1,extract);card.position.set(0,mix(extractedY,.9,present)+exit*3.3,mix(-.18,2.4,present));card.rotation.set(0,Math.PI*backTurn,0);card.scale.setScalar(1-exit*.5);
 const reveal=clamp((p-.61)/.15);if(Math.abs(reveal-lastReveal)>.0025){lastReveal=reveal;drawCard(reveal)}
 veilMaterial.opacity=1-arriving;sky.visible=arriving>0&&!hasOcean();patchWind.value=now;skyUniforms.uTime.value=now;renderer.clear();renderer.render(scene,camera);if(arriving<1)renderer.render(veilScene,veilCamera);renderer.clearDepth();renderer.render(invitationScene,camera);}

 animate();return()=>{disposed=true;cancelAnimationFrame(frame);visibility.disconnect();window.removeEventListener('resize',resize);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());meadowGround.dispose();foliageTextures.forEach(t=>t.dispose());paperTexture.dispose();cardTexture.dispose();reverseTexture.dispose();renderer.dispose();};
}
