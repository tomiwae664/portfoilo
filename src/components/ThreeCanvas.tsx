import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  interactive?: boolean;
  density?: 'high' | 'medium' | 'subtle';
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  interactive = true,
  density = 'high',
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06050e, 0.0018);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Floating TorusKnot
    const torusGeometry = new THREE.TorusKnotGeometry(16, 4.5, 120, 24);
    const torusMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      emissive: 0x2e1065,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    torusKnot.position.set(25, 5, -10);
    mainGroup.add(torusKnot);

    // 2. Secondary Geometry - Wireframe Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(12, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x083344,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(-35, -15, 5);
    mainGroup.add(icosahedron);

    // 3. Floating Particles Field
    const particleCount = density === 'high' ? 1200 : density === 'medium' ? 700 : 350;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x8b5cf6); // Purple
    const color2 = new THREE.Color(0x06b6d4); // Cyan
    const color3 = new THREE.Color(0xec4899); // Pink

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 260;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 260;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 260;

      const mixVal = Math.random();
      const pColor = mixVal < 0.4 ? color1 : mixVal < 0.7 ? color2 : color3;
      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    mainGroup.add(particleSystem);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 4, 200);
    pointLight1.position.set(40, 40, 50);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 3, 200);
    pointLight2.position.set(-40, -40, 30);
    scene.add(pointLight2);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate geometries
      torusKnot.rotation.x = elapsedTime * 0.25;
      torusKnot.rotation.y = elapsedTime * 0.35;

      icosahedron.rotation.x = elapsedTime * -0.15;
      icosahedron.rotation.y = elapsedTime * 0.2;

      particleSystem.rotation.y = elapsedTime * 0.04;
      particleSystem.rotation.x = elapsedTime * 0.02;

      // Parallax Camera Shift
      camera.position.x = mouseX * 12;
      camera.position.y = -mouseY * 12;
      camera.lookAt(scene.position);

      // Light response
      pointLight1.position.x = 40 + mouseX * 30;
      pointLight1.position.y = 40 + mouseY * 30;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      torusGeometry.dispose();
      torusMaterial.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive, density]);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
    />
  );
};
