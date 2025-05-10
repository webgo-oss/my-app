import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

const container = document.getElementById("square");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom=false;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

function createTextTexture(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = 'bold 50px Fredoka One';
  ctx.fillStyle = '#000000'; 
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.encoding = THREE.sRGBEncoding;
  texture.needsUpdate = true;
  return texture;
}

const materials = [
  new THREE.MeshStandardMaterial({ map: createTextTexture('node.js'), metalness: 0.6, roughness: 0.3, transparent: true }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('three.js'), metalness: 0.6, roughness: 0.3, transparent: true }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('html'), metalness: 0.6, roughness: 0.3, transparent: true }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('css'), metalness: 0.6, roughness: 0.3, transparent: true }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('python'), metalness: 0.6, roughness: 0.3, transparent: true }),
  new THREE.MeshStandardMaterial({ map: createTextTexture('ui/ux'), metalness: 0.6, roughness: 0.3, transparent: true }),
];

const geometry = new THREE.BoxGeometry(4.4, 4.4, 4.4);
const cube = new THREE.Mesh(geometry, materials);
cube.rotation.set(1, 0, 1);
cube.position.set(0, 0, 0);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});
