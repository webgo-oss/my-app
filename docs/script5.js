import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
const block1=document.getElementById("ball");
const scenecup1=new THREE.Scene();
const cameracup1=new THREE.PerspectiveCamera(45, block1.clientWidth / block1.clientHeight, 0.1, 1000);
cameracup1.position.set(0,2,10);
const renderercup1=new THREE.WebGLRenderer({ antialias: true,alpha:true});
renderercup1.setSize(block1.clientWidth,block1.clientHeight);
renderercup1.setPixelRatio(window.devicePixelRatio);
block1.appendChild(renderercup1.domElement);
const ambientLight31 = new THREE.AmbientLight(0xffffff, 10);
scenecup1.add(ambientLight31);
const directionalLight31 = new THREE.DirectionalLight(0xffffff,20);
directionalLight31.position.set(0, 80,0);
scenecup1.add(directionalLight31);
const manipulation1=new OrbitControls(cameracup1,renderercup1.domElement);
manipulation1.enableDamping=true;
manipulation1.enableRotate=false;
manipulation1.enableZoom=false;
const loader12=new GLTFLoader();
let mixer12;
loader12.load('metallic_fluidity.glb',(gltf)=>{
  const animate12=gltf.scene;
  animate12.scale.set(2.7,2.7,2.7);
  animate12.position.set(0,0,0);
  animate12.rotation.set(0,0,0);
  scenecup1.add(animate12);
  mixer12=new THREE.AnimationMixer(animate12);
  const action12=mixer12.clipAction(gltf.animations[0]);
  action12.play();
});
const clock12=new THREE.Clock();
const loopp=()=>{
  requestAnimationFrame(loopp);
  const delta12=clock12.getDelta();
   if(mixer12) mixer12.update(delta12);
  manipulation1.update();
  renderercup1.render(scenecup1,cameracup1);
}
loopp();
window.addEventListener("resize",function(){
  cameracup1.aspect=block1.clientWidth/block1.clientHeight;
  cameracup1.updateProjectionMatrix();
  renderercup1.setSize(block1.clientWidth,block1.clientHeight)
});