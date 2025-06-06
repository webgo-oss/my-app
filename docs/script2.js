   import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js'; 
    import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js'; 
    import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js'; 
    import { MeshoptDecoder } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/libs/meshopt_decoder.module.js';

const scene1 = new THREE.Scene();
const container1 = document.getElementById("box");

const camera1 = new THREE.PerspectiveCamera(45, container1.clientWidth / container1.clientHeight, 0.1, 1000);
camera1.position.set(0, 3, 9);

const renderer1 = new THREE.WebGLRenderer({ alpha: true });
renderer1.setSize(container1.clientWidth, container1.clientHeight);
renderer1.setPixelRatio(window.devicePixelRatio);
container1.appendChild(renderer1.domElement);

const ambientLight1 = new THREE.AmbientLight(0xffffff, 1.5);
scene1.add(ambientLight1);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(5, 10, 5);
scene1.add(directionalLight1);
const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder); 

let mixer;
loader.load('bmo_cute__model_3d__free_download-v2.glb', (gltf) => {
  const model = gltf.scene;
  model.scale.set(1.5, 1.5, 1.5);
  model.position.set(0, -2.5, 0);
  model.rotation.set(0, 9.8, 0);
  scene1.add(model);

  mixer = new THREE.AnimationMixer(model);
  const action = mixer.clipAction(gltf.animations[0]);
  action.play();
});

const controls = new OrbitControls(camera1, renderer1.domElement);
controls.enableDamping = true;
controls.enableRotate = false;
controls.enableZoom = false;

const clock = new THREE.Clock();
function loop() {
  requestAnimationFrame(loop);
  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);
  controls.update();
  renderer1.render(scene1, camera1);
}
loop();

window.addEventListener("resize", function () {
  camera1.aspect = container1.clientWidth / container1.clientHeight;
  camera1.updateProjectionMatrix();
  renderer1.setSize(container1.clientWidth, container1.clientHeight);
});
