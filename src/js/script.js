import * as THREE from 'three';

const renderer =new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff);
const scene= new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const light = new THREE.PointLight( 0xFFE0BD, 2, 1000 );
const sun=new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0,0,0)
document.body.appendChild( renderer.domElement );
camera.position.set(0,10,0);
//camera.rotation.set(0,0,0);
camera.lookAt(0,0,0); 
//camera.rotation.set(0,90,0);





scene.add( cube );
scene.add(light);
scene.add(sun);

renderer.render(scene,camera);
console.log(sun)
y=4
function render()
{
    cube.position.z-=0.01;
//    cube.position.x-=0.01;
    requestAnimationFrame(render);
    renderer.render(scene,camera);
}
requestAnimationFrame(render);