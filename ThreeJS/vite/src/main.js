import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Ensure the canvas element exists
const canvas = document.getElementById("canvas");

if (!canvas) {
  console.error("Canvas element not found in the HTML!");
} else {
  // Create the scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#F0F0F0");

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Dodecahedron object
  const geometry = new THREE.DodecahedronGeometry();
  const material = new THREE.MeshLambertMaterial({
    color: "#468585", // Color
    emissive: "#468585", // Emissive color
  });
  const dodecahedron = new THREE.Mesh(geometry, material);

  // Box object
  const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
  const boxMaterial = new THREE.MeshLambertMaterial({
    color: "#B4B4B3", // Color
    emissive: "#B4B4B3", // Emissive color
  });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.y = -1.5;

  // Add objects to the scene
  scene.add(dodecahedron);
  scene.add(box);

  // Lighting
  const light = new THREE.SpotLight(0x006769, 100);
  light.position.set(1, 1, 1);
  scene.add(light);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // Render the scene
  // renderer.render(scene, camera);

  // Add OrbitalControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom=true;
  controls.enablePan=true;

// Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the objects for demonstration
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.x += 0.005;
    // box.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
  }

  // Start the animation loop
  animate();
}


// window resize

window.addEventListener('resize',()=>{
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectMatrix();
  renderer.setSize(Window.innerWidth,window.innerWidth)

})