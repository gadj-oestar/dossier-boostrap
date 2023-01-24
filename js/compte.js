import * as THREE from'../node_modules/three/build/three.module.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { MapControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
 scene.background = new THREE.Color( 0xf5ebe0);
 const light = new THREE.PointLight( 0xffffff, 4, 200 );
 light.position.set( 0, 0,5 );
 scene.add(light);  
 
 

const loader = new FontLoader();


const geometri = new THREE.CylinderGeometry( 3, 3, 4  );
 const materialle = new THREE.MeshBasicMaterial( {color: 0x33202a} );
 const cylinder = new THREE.Mesh( geometri, materialle );
 
 scene.add( cylinder );
 const geometry = new THREE.CapsuleGeometry( 3, 3, 10, 8 );
 const material = new THREE.MeshBasicMaterial( {color:0xEE7224 } );
 const capsule = new THREE.Mesh( geometry, material );
 scene.add( capsule );


const aspect = window.innerWidth / window.innerHeight;
  const camera= new THREE.PerspectiveCamera(75,aspect, 1,5000);
  scene.add( camera );
  camera.position.setY(40)

  const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight );
 document.body.appendChild( renderer.domElement);


 function render(){
	renderer.render(scene,camera);
    requestAnimationFrame(render);

 }

 render();