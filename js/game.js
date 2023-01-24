import * as THREE from'../node_modules/three/build/three.module.js';
import { MapControls } from 'three/addons/controls/OrbitControls.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';



const scene = new THREE.Scene();
 scene.background = new THREE.Color( 0x606c38);
 const light = new THREE.PointLight( 0xffffff, 4, 200 );
 const ambiant_light = new THREE.AmbientLight( 0x404040,1.6 ); // soft white light
scene.add( ambiant_light );
 light.position.set( 0, 30,20 );
 scene.add(light);  
 function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
 for(let i = 0; i < 2000;i++) {
    let compteur =Math.floor( Math.random()*(5-1)+1);
    if(compteur===1){
        const geometry = new THREE.BoxGeometry( 5, 5, 6 );
        const material = new THREE.MeshMatcapMaterial( {color: 0x2b9348} );
        const cube = new THREE.Mesh( geometry, material );
        cube.position.set(
            getRandomArbitrary(-90, 90), 
            getRandomArbitrary(-90, 90) ,
            getRandomArbitrary(-90, 90)

           )

        scene.add( cube );} 
    if(compteur===3){
        const geometry = new THREE.IcosahedronGeometry( 2, 3, 23 );
const material = new THREE.MeshPhongMaterial( { color: 0xc6291, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material );
  mesh.position.set(
    getRandomArbitrary(-70, 70), 
    getRandomArbitrary(-70, 70) ,
    getRandomArbitrary(-70, 70)

   )
scene.add( mesh );
    }
    if(compteur===4){
        const geometry = new THREE.TorusKnotGeometry( 20, 3, 100, 16 );
        const material = new THREE.MeshLambertMaterial( { color: 0xffff00, } );
        const torusKnot = new THREE.Mesh( geometry, material );
        torusKnot.scale.set(0.1,0.1,0.1);
        torusKnot.position.set(
          getRandomArbitrary(-70, 70), 
          getRandomArbitrary(-70, 70) ,
          getRandomArbitrary(-70, 70)

           )

            scene.add(torusKnot);
    }
 }
 //camera,
  const aspect = window.innerWidth / window.innerHeight;
  const camera= new THREE.PerspectiveCamera(75,aspect, 1,5000);
  scene.add( camera );
  camera.position.setY(100)


//render
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight );
 document.body.appendChild( renderer.domElement);

 const controls = new MapControls( camera, renderer.domElement );
 controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
				controls.dampingFactor = 0.05;

				controls.screenSpacePanning = false;

				controls.minDistance = 100;
				controls.maxDistance = 500;


let scoreVerif = false;
let score =0;
let win1=false;
let win2=false;
let win3=false;
let win4=false;
let end = document.getElementById("end");



  
 function render() {
   
  controls.update();

  if( !win1 && (camera.position.x < capsule.position.x+10 && camera.position.x > capsule.position.x-10) && (camera.position.y< capsule.position.y+10 &&camera.position.y> capsule.position.y-10) && (camera.position.z< capsule.position.z+10 && camera.position.z > capsule.position.z-10)) {
    score+=10;
    temps+=10;
    win1=true;
    scene.remove(capsule);

    document.getElementById("scorevalue").innerText=score +'/40';

}
if( !win2 &&(camera.position.x < cone.position.x+10 && camera.position.x >cone.position.x-10) && (camera.position.y< cone.position.y+10 &&camera.position.y> cone.position.y-10) && (camera.position.z< cone.position.z+10 && camera.position.z > cone.position.z-10)) {
  scene.remove(cone);
  score+=10;
  temps+=10;
  win2=true;
  document.getElementById("scorevalue").innerText=score +'/40'
}
if( !win3 &&(camera.position.x < cylinder.position.x+10 && camera.position.x >cylinder.position.x-10) && (camera.position.y< cylinder.position.y+10 &&camera.position.y> cylinder.position.y-10) && (camera.position.z< cylinder.position.z+10 && camera.position.z > cylinder.position.z-10)) {
  scene.remove(cylinder);
  score+=10;
  temps+=10;
  win3=true;
  document.getElementById("scorevalue").innerText=score+'/40'
}

if( !win4 &&(camera.position.x < octa.position.x+10 && camera.position.x >octa.position.x-10) && (camera.position.y< octa.position.y+10 &&camera.position.y> octa.position.y-10) && (camera.position.z< octa.position.z+10 && camera.position.z >octa.position.z-10)) {
  scene.remove(octa);
  score+=10;
  temps+=10;
  win4=true;
  document.getElementById("scorevalue").innerText=score+'/40'
}

if(score ===40 && scoreVerif === false){
  scoreVerif = true;
   }

    renderer.render(scene,camera);
    requestAnimationFrame(render);
 }

 

console.log(score);
     
 let geometry = new THREE.CapsuleGeometry( 3, 3, 10, 8 );
   let material = new THREE.MeshMatcapMaterial( {color:0xEE7224 } );
  let capsule = new THREE.Mesh( geometry, material );
    capsule.position.set(
      getRandomArbitrary(-70, 70), 
            getRandomArbitrary(-70, 70) ,
            getRandomArbitrary(-70, 70)
       )
       scene.add( capsule );
   

    const geometrie = new THREE.ConeGeometry( 3, 10, 32 );
    const materiale = new THREE.MeshMatcapMaterial( {color: 0xd4d700} );
    const cone = new THREE.Mesh( geometrie, materiale );
   cone.position.set(
    getRandomArbitrary(-70, 70), 
    getRandomArbitrary(-70, 70) ,
    getRandomArbitrary(-70, 70)

     )
    scene.add( cone );

    const geometri = new THREE.CylinderGeometry( 3, 3, 4  );
const materialle = new THREE.MeshMatcapMaterial( {color: 0xffd6e0} );
const cylinder = new THREE.Mesh( geometri, materialle );
cylinder.position.set(
  getRandomArbitrary(-70, 70), 
  getRandomArbitrary(-70, 70) ,
  getRandomArbitrary(-70, 70)

   )
scene.add( cylinder );
const Geometri = new THREE.OctahedronGeometry( 3, 3, 4  );
const Materialle = new THREE.MeshMatcapMaterial( {color: 0x5660099} );
const octa = new THREE.Mesh( Geometri, Materialle );
octa.position.set(
  getRandomArbitrary(-70, 70), 
  getRandomArbitrary(-70, 70) ,
  getRandomArbitrary(-70, 70)

   )
scene.add( octa );



 render();
 var temps=60;
 const time =document.getElementById("timervalue");

function decrement(){
  const interval = setInterval(function(){
    temps=temps-1
    time.innerText=temps+"S";
    if(temps===0){
      clearInterval(interval);
    controls.enabled=false;

    }
   },1000);
}

let welcome = document.getElementsByClassName("welcome");

welcome[0].addEventListener('click', function(event){
  event.preventDefault();
  this.style.display="none";
})

decrement();




 
