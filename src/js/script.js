//imports
import * as THREE from 'three';
import { OrbitControls } from 'three-addons'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const Bowlurl = new URL('../bowl.gltf', import.meta.url);
//init renderer/scene /camera/lights
//3d model loader
const loader = new GLTFLoader();
const scene = new THREE.Scene();
//camera
//##########################################
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 500);//camera config
camera.position.set(0, 0, 15);//camera position
camera.lookAt(0, 0, 0);//camera rotation
//###########################################
//lights
//const light = new THREE.PointLight(0xFFE0BD, 2, 1000);
const sun = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
//renderer and linking it to the html
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setClearColor(0xEEEEEE); //background color

const geometry = new THREE.BoxGeometry(1, 1, 1);//init the box MESH"Fruits" 




//const axesHelper = new THREE.AxesHelper(15);
//axesHelper.setColors(0x00ff00, 0x0000ff, 0xff0000)
//scene.add(axesHelper);

//const cameraHelper = new THREE.CameraHelper(camera);
//const controls = new OrbitControls(camera, renderer.domElement);
//scene.add(cameraHelper);
//camera.rotation.set(2,0,1)
//game variables
let bowl;//the bowl model
let counter = 0;//the score counter
let lives = 3;//player lives starting from 3
let game_on = 1;//to check if the game is on or not
timer = 0;//time counter

//scene.add(light);
scene.add(sun);

const cubearray = new Array();//array to iterate over cubes
let n = 0;





function createcube() {
  console.log(Math.floor(Math.random() * 16777215).toString(16));
  let material = new THREE.MeshPhongMaterial({ color: Math.random() * (16777215) });
  let cube = new THREE.Mesh(geometry, material);
  px = (Math.random() * (10 - -10) + -10);
  cube.position.set(px, 10, 0);
  scene.add(cube);
  cubearray.push(cube);
  n++;
}


//this function is called to render every frame during runtime and to adjust screensize in case something changed
function render() {
  if (timer > 250 && game_on == 1) {
    timer = 0;
    createcube();
  }
  if (n > 0) {
    cubearray.forEach((element, index) => {
      element.position.y -= 0.01;
      if (element.position.y < -5) {
        cubearray.splice(index, 1);
        scene.remove(element);
        element.geometry.dispose();
        element.material.dispose();
        if ((bowl.scene.position.x + 1) > element.position.x && element.position.x > (bowl.scene.position.x - 1))
          counter++;
        else
          lives--;
        document.querySelector('#score').innerHTML = `Score : ${counter}`
        document.querySelector('#lives').innerHTML = `Lives : ${lives}`
        if (lives == 0) {
          if (window.confirm(`Want to play again?`))
            window.location.reload();
          else
            game_on = 0;
        }

      }
    });
  }


  timer++;//increment timer


  //window resizing
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}


//bowl controls left and right using A and D with space limit from 11 to -11 on the x axis 
document.addEventListener('keypress', (event) => {
  if (event.key == 'a' && bowl.scene.position.x > -11) {
    bowl.scene.position.x -= 0.2
  }
  else if (event.key == 'd' && bowl.scene.position.x < 11) {
    bowl.scene.position.x += 0.2
  }
}, false);



//load the bowl made by us on the blender to threejs using the url at the start of script
loader.load(
  // resource URL
  Bowlurl.href,
  // called when the resource is loaded
  function (gltf) {
    bowl = gltf;
    scene.add(gltf.scene);

    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
    bowl.scene.position.y -= 5

  },
  // called while loading is progressing
  function (xhr) {

    console.log((xhr.loaded / xhr.total * 100) + '% loaded');

  },
  // called when loading has errors
  function (error) {

    console.log('An error happened');

  }
);

//function to check if we need to resize the screen pixels height and width
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}


//to start requestion animation frame loop like while(1)
requestAnimationFrame(render);