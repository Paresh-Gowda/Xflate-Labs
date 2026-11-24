import { useEffect, useRef } from "react";
import * as THREE from "three";

function ThreeHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      1,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.75)
    );
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // Main 3D group
    const group = new THREE.Group();
    scene.add(group);

    // Particle sphere
    const particleCount = 1800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorA = new THREE.Color("#48a7ff");
    const colorB = new THREE.Color("#d9efff");

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      const radius = 1.05 + Math.random() * 0.16;

      positions[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

      positions[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 2] =
        radius * Math.cos(phi);

      const mixed = colorA.clone().lerp(
        colorB,
        Math.random() * 0.65
      );

      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const particleGeometry = new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );

    group.add(particles);

    // Central translucent sphere
    const coreGeometry = new THREE.SphereGeometry(
      0.72,
      48,
      48
    );

    const coreMaterial = new THREE.MeshBasicMaterial({
      color: "#328cff",
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    });

    const core = new THREE.Mesh(
      coreGeometry,
      coreMaterial
    );

    group.add(core);

    // Orbital rings
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: "#75bdff",
      transparent: true,
      opacity: 0.55,
    });

    const ringOne = new THREE.Mesh(
      new THREE.TorusGeometry(1.48, 0.008, 8, 180),
      ringMaterial
    );

    ringOne.rotation.x = 1.1;
    ringOne.rotation.y = 0.25;
    group.add(ringOne);

    const ringTwo = new THREE.Mesh(
      new THREE.TorusGeometry(1.65, 0.006, 8, 180),
      new THREE.MeshBasicMaterial({
        color: "#b5dcff",
        transparent: true,
        opacity: 0.32,
      })
    );

    ringTwo.rotation.x = 0.35;
    ringTwo.rotation.y = 1.1;
    ringTwo.rotation.z = 0.5;
    group.add(ringTwo);

    // Floating light points
    const lightPoints = new THREE.Group();

    for (let i = 0; i < 3; i++) {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.035, 16, 16),
        new THREE.MeshBasicMaterial({
          color: "#ffffff",
        })
      );

      const angle = (i / 3) * Math.PI * 2;

      dot.position.set(
        Math.cos(angle) * 1.48,
        Math.sin(angle) * 0.65,
        0
      );

      lightPoints.add(dot);
    }

    group.add(lightPoints);

    // Responsive sizing
    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.position.z = width < 400 ? 5.8 : 5;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    // Mouse interaction
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();

      targetY =
        ((event.clientX - rect.left) / rect.width - 0.5) * 0.45;

      targetX =
        ((event.clientY - rect.top) / rect.height - 0.5) * 0.35;
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    container.addEventListener(
      "pointermove",
      handlePointerMove
    );

    container.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    // Animation
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      if (!reducedMotion) {
        group.rotation.y +=
          (targetY - group.rotation.y) * 0.025 + 0.0015;

        group.rotation.x +=
          (targetX - group.rotation.x) * 0.025;

        particles.rotation.y = elapsed * 0.055;
        particles.rotation.x = Math.sin(elapsed * 0.25) * 0.08;

        ringOne.rotation.z += 0.0018;
        ringTwo.rotation.z -= 0.0012;

        core.rotation.y = -elapsed * 0.08;

        lightPoints.rotation.y = elapsed * 0.35;
        lightPoints.rotation.z = elapsed * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();

      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      container.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      particleGeometry.dispose();
      particleMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringOne.geometry.dispose();
      ringTwo.geometry.dispose();
      ringMaterial.dispose();
      ringTwo.material.dispose();

      lightPoints.children.forEach((dot) => {
        dot.geometry.dispose();
        dot.material.dispose();
      });

      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="three-hero-canvas" />;
}

export default ThreeHero;
