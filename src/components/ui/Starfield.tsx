import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedGrid = ({ gridColor = '#00ffd1', speed = 0.5 }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    // Fog color determines the "fade out" distance in the distance
    scene.fog = new THREE.Fog(0x000000, 10, 90); 

    // Camera placed low looking forward
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.set(0, 5, 15); 
    camera.lookAt(0, 0, -50);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Create the Grid Helper
    const gridSize = 200;
    const gridDivisions = 80;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, gridColor, gridColor);
    
    // Try adding transparency to the grid lines for a subtler look
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.5;

    scene.add(gridHelper);

    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Animate grid movement. Modulo (%) creates the infinite loop illusion.
      // The divisor (2.5) needs to match gridSize / gridDivisions
      gridHelper.position.z = (elapsedTime * speed * 10) % 2.5;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [gridColor, speed]);

  return <div ref={mountRef} className="w-full h-full absolute top-0 left-0 bg-black" />;
};

export default AnimatedGrid;