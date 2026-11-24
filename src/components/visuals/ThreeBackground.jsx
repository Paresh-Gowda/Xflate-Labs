import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      1,
      0.1,
      100
    );

    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.5)
    );

    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Main animated environment
    const world = new THREE.Group();
    scene.add(world);

    // Particle configuration
    const PARTICLE_COUNT = 95;
    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 17,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 4
        ),

        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.004
        ),

        phase: Math.random() * Math.PI * 2,
        pulse: 0.5 + Math.random() * 0.5,
      });
    }

    // Particle rendering
    const particlePositions = new Float32Array(
      PARTICLE_COUNT * 3
    );

    const particleGeometry = new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: "#4b91ff",
      size: 0.065,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particleMesh = new THREE.Points(
      particleGeometry,
      particleMaterial
    );

    world.add(particleMesh);

    // Dynamic connecting network
    const MAX_LINES =
      (PARTICLE_COUNT * (PARTICLE_COUNT - 1)) / 2;

    const linePositions = new Float32Array(
      MAX_LINES * 6
    );

    const lineGeometry = new THREE.BufferGeometry();

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: "#78adff",
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const network = new THREE.LineSegments(
      lineGeometry,
      lineMaterial
    );

    world.add(network);

    // Floating orbital structures
    const orbitalGroup = new THREE.Group();
    world.add(orbitalGroup);

    const createOrbit = (radius, thickness, color, opacity) => {
      const geometry = new THREE.TorusGeometry(
        radius,
        thickness,
        8,
        120
      );

      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        depthWrite: false,
      });

      return new THREE.Mesh(geometry, material);
    };

    const orbitOne = createOrbit(
      2.1, 0.009, "#5a9cff", 0.20
    );

    orbitOne.rotation.set(0.9, 0.4, 0.3);
    orbitalGroup.add(orbitOne);

    const orbitTwo = createOrbit(
      2.8, 0.006, "#9d8cff", 0.15
    );

    orbitTwo.rotation.set(1.5, 0.8, 0.7);
    orbitalGroup.add(orbitTwo);

    const orbitThree = createOrbit(
      1.45, 0.005, "#6ccfff", 0.13
    );

    orbitThree.rotation.set(0.3, 1.2, 0.5);
    orbitalGroup.add(orbitThree);

    // Glowing orbit nodes
    const orbitNodes = new THREE.Group();
    orbitalGroup.add(orbitNodes);

    for (let i = 0; i < 5; i++) {
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 16, 16),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? "#4b9dff" : "#a18cff",
        })
      );

      const angle = (i / 5) * Math.PI * 2;

      node.position.set(
        Math.cos(angle) * 2.1,
        Math.sin(angle) * 0.9,
        Math.sin(angle * 2) * 0.5
      );

      orbitNodes.add(node);
    }

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();

      mouseX =
        ((event.clientX - rect.left) / rect.width - 0.5) * 2;

      mouseY =
        ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    container.addEventListener(
      "pointermove",
      handlePointerMove
    );

    container.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    // Responsive dimensions
    let bounds = { x: 8, y: 5 };

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);

      const viewHeight =
        2 *
        Math.tan(
          THREE.MathUtils.degToRad(camera.fov / 2)
        ) *
        camera.position.z;

      bounds = {
        x: (viewHeight * camera.aspect) / 2,
        y: viewHeight / 2,
      };
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    // Animation
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const clock = new THREE.Clock();
    const smoothMouse = new THREE.Vector2(0, 0);

    let animationFrame;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth mouse response
      smoothMouse.x +=
        (mouseX - smoothMouse.x) * 0.025;

      smoothMouse.y +=
        (mouseY - smoothMouse.y) * 0.025;

      if (!reducedMotion) {
        // Move particles independently
        particles.forEach((particle, i) => {
          const p = particle.position;

          p.x += particle.velocity.x;
          p.y += particle.velocity.y;
          p.z += particle.velocity.z;

          p.y += Math.sin(
            time * 0.7 + particle.phase
          ) * 0.0015;

          // Wrap particles around viewport
          if (p.x > bounds.x + 1) p.x = -bounds.x - 1;
          if (p.x < -bounds.x - 1) p.x = bounds.x + 1;

          if (p.y > bounds.y + 1) p.y = -bounds.y - 1;
          if (p.y < -bounds.y - 1) p.y = bounds.y + 1;

          if (p.z > 2.5) p.z = -2.5;
          if (p.z < -2.5) p.z = 2.5;

          const offset = i * 3;

          particlePositions[offset] = p.x;
          particlePositions[offset + 1] = p.y;
          particlePositions[offset + 2] = p.z;
        });

        // Update particles
        particleGeometry.attributes.position.needsUpdate = true;

        // Rebuild connections dynamically
        let lineCount = 0;
        const connectionDistance = 2.15;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          for (let j = i + 1; j < PARTICLE_COUNT; j++) {
            const a = particles[i].position;
            const b = particles[j].position;

            const distance = a.distanceTo(b);

            if (distance < connectionDistance) {
              const offset = lineCount * 6;

              linePositions[offset] = a.x;
              linePositions[offset + 1] = a.y;
              linePositions[offset + 2] = a.z;

              linePositions[offset + 3] = b.x;
              linePositions[offset + 4] = b.y;
              linePositions[offset + 5] = b.z;

              lineCount++;
            }
          }
        }

        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.setDrawRange(0, lineCount * 2);

        // Slowly rotating orbital system
        orbitalGroup.rotation.y = time * 0.12;
        orbitalGroup.rotation.x =
          Math.sin(time * 0.22) * 0.12;

        orbitOne.rotation.z += 0.001;
        orbitTwo.rotation.x += 0.0007;
        orbitThree.rotation.y += 0.0012;

        // Gentle breathing effect
        orbitalGroup.scale.setScalar(
          1 + Math.sin(time * 0.65) * 0.035
        );

        particleMaterial.opacity =
          0.62 + Math.sin(time * 1.4) * 0.12;

        lineMaterial.opacity =
          0.16 + Math.sin(time * 0.8) * 0.055;
      }

      // Mouse-driven depth and parallax
      world.rotation.y +=
        (smoothMouse.x * 0.10 - world.rotation.y) * 0.035;

      world.rotation.x +=
        (-smoothMouse.y * 0.07 - world.rotation.x) * 0.035;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
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

      lineGeometry.dispose();
      lineMaterial.dispose();

      orbitalGroup.traverse((object) => {
        if (object.isMesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });

      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="three-background"
      aria-hidden="true"
    />
  );
}
