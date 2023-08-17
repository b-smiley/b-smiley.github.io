import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.up = new THREE.Vector3(0,0,1);
  camera.lookAt(0,0,0);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }
    
    const loader = new GLTFLoader();
    loader.load('GameConsole.glb', (gltf) => {
      // Add the loaded model to the scene
      scene.add(gltf.scene);

      // Position the camera to view the model
      camera.position.set(0, 0, 5);

      // Set the background color of the scene
      renderer.setClearColor(0x333333);

      // Add some ambient light to the scene
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Start the animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    }, undefined, (error) => {
      // Handle any errors that occur during loading
      console.error(error);
    });

    return () => {
      // Clean up the scene when the component is unmounted
      // e.g., remove event listeners, dispose of objects, etc.
      scene.remove();
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
}

export default ThreeScene;