import * as THREE from "three";

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// Add a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.z = 5;

// Create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshDepthMaterial({
  color: "#468585", // Cube color
  emissive: "#468585", // Emissive color (requires MeshStandardMaterial)
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add lighting
const light = new THREE.DirectionalLight(0x9cdba6, 1); // Color and intensity
light.position.set(1, 1, 1);
scene.add(light);

// Setup the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add responsiveness
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for demonstration
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Start animation
animate();
