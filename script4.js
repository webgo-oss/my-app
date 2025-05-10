import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
const block=document.getElementById("cup-v");
const scenecup=new THREE.Scene();
const cameracup=new THREE.PerspectiveCamera(45, block.clientWidth / block.clientHeight, 0.1, 1000);
cameracup.position.set(0,2,10);
const renderercup=new THREE.WebGLRenderer({ antialias: true,alpha:true});
renderercup.setSize(block.clientWidth,block.clientHeight);
renderercup.setPixelRatio(window.devicePixelRatio);
block.appendChild(renderercup.domElement);
const ambientLight3 = new THREE.AmbientLight(0xffffff, 1.5);
scenecup.add(ambientLight3);
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight3.position.set(5, 10, 5);
scenecup.add(directionalLight3);
const manipulation=new OrbitControls(cameracup,renderercup.domElement);
manipulation.enableDamping=true;
manipulation.enableRotate=false;
manipulation.enableZoom=false;
const loader1=new GLTFLoader();
let mixer1;
loader1.load('models/cuphead.glb',(gltf)=>{
  const animate1=gltf.scene;
  animate1.scale.set(2,2,2);
  animate1.position.set(0,-2.5,0);
  animate1.rotation.set(0,-0.5,0);
  scenecup.add(animate1);
  mixer1=new THREE.AnimationMixer(animate1);
  const action1=mixer1.clipAction(gltf.animations[0]);
  action1.play();
  action1.timeScale = 2.0;
});
const clock1=new THREE.Clock();
const looop=()=>{
  requestAnimationFrame(looop);
  const delta1=clock1.getDelta();
   if(mixer1) mixer1.update(delta1);
  manipulation.update();
  renderercup.render(scenecup,cameracup);
}
looop();
window.addEventListener("resize",function(){
  cameracup.aspect=block.clientWidth/block.clientHeight;
  cameracup.updateProjectionMatrix();
  renderercup.setSize(block.clientWidth,block.clientHeight)
});