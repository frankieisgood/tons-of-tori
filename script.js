var scene = new THREE.Scene();

const fov = 45;
const aspect = window.innerWidth/window.innerHeight;
const near = 0.1;
const far = 1000;
var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
camera.position.set(0, 0, 40)

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#000000");
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
var material = new THREE.MeshBasicMaterial( { color: "#ff006e", transparent: true, opacity: ".8" } );
var torus = new THREE.Mesh( geometry, material );

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
scene.add(light);
scene.add(light.target);

scene.add( torus );

var render = function () {
  requestAnimationFrame( render );
  torus.rotation.x += 0.01;
  renderer.render(scene, camera);
};

render();