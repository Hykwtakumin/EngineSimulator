// import * as THREE from "three";
// import { OrbitControls } from "three-orbitcontrols-ts";
//
// console.log("compiled with parcel!!");
//
// // サイズを指定
// const width = 960;
// const height = 540;
//
// // レンダラーを作成
// const renderer = new THREE.WebGLRenderer({
//     canvas: document.getElementById("canvas") as HTMLCanvasElement,
// });
// renderer.setSize(width, height);
//
// // シーンを作成
// const scene = new THREE.Scene();
//
// // カメラを作成
// const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
// camera.position.set(0, 0, 1000);
//
// // カメラコントローラーを作成
// const controls = new OrbitControls(camera);
//
// // 形状とマテリアルからメッシュを作成します
// const mesh = new THREE.Mesh(
//     new THREE.BoxGeometry(300, 300, 300),
//     new THREE.MeshNormalMaterial());
// scene.add(mesh);
//
// tick();
//
// // 毎フレーム時に実行されるループイベントです
// function tick() {
//     // レンダリング
//     renderer.render(scene, camera);
//     requestAnimationFrame(tick);
// }

// import * as THREE from 'three';
// let scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// let renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
// let geometry = new THREE.BoxGeometry( 1, 1, 1 );
// let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// let cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
// camera.position.z = 5;
// let animate = function () {
//     requestAnimationFrame( animate );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render( scene, camera );
// };
// animate();