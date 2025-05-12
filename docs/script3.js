import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

const container = document.getElementById("square");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enableRotate = false; 

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.5); 
dirLight.position.set(5, 5, 5);
scene.add(dirLight);
function createTextTexture(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = 'bold 24px sans-serif'; 
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.encoding = THREE.sRGBEncoding;
  return texture;
}

const materialOptions = {
  metalness: 0.2,  
  roughness: 0.7,
  transparent: true
};

const materials = [
  new THREE.MeshStandardMaterial({ map: createTextTexture('node.js'), ...materialOptions }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('three.js'), ...materialOptions }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('html'), ...materialOptions }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('css'), ...materialOptions }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('python'), ...materialOptions }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('ui/ux'), ...materialOptions }),
];

const geometry = new THREE.BoxGeometry(4.4, 4.4, 4.4);
const cube = new THREE.Mesh(geometry, materials);
cube.rotation.set(1, 0, 1);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += 0.005; 
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});
