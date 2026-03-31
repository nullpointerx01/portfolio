import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import "./styles/ParticleField.css";

const PARTICLE_COUNT = 2500;
const RADIUS = 10;
const REPULSION_RADIUS = 2.5;
const REPULSION_FORCE = 0.5;

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();

  // Create initial particle positions
  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const originalPositions = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Random spread across viewport
      const x = (Math.random() - 0.5) * RADIUS * 2;
      const y = (Math.random() - 0.5) * RADIUS * 2;
      const z = (Math.random() - 0.5) * 4;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }

    return { positions, originalPositions };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Convert mouse (-1 to 1) to world coordinates matching the particle spread space
    const targetX = (mouse.x * viewport.width) / 2;
    const targetY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;

      let x = positionsArray[idx];
      let y = positionsArray[idx + 1];
      const z = positionsArray[idx + 2];

      const origX = originalPositions[idx];
      const origY = originalPositions[idx + 1];

      // Calculate distance to mouse
      const dx = x - targetX;
      const dy = y - targetY;
      const distSq = dx * dx + dy * dy;

      if (distSq < REPULSION_RADIUS * REPULSION_RADIUS) {
        // Repel
        const dist = Math.sqrt(distSq);
        const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
        
        // Push away from mouse
        x += (dx / dist) * force * REPULSION_FORCE;
        y += (dy / dist) * force * REPULSION_FORCE;
      } else {
        // Gently return to original position
        x += (origX - x) * 0.05;
        y += (origY - y) * 0.05;
      }

      // Add gentle floating motion using time
      const time = state.clock.getElapsedTime();
      x += Math.sin(time + origY) * 0.005;
      y += Math.cos(time + origX) * 0.005;

      positionsArray[idx] = x;
      positionsArray[idx + 1] = y;
      positionsArray[idx + 2] = z;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#22d3ee" // Cyan accent color
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const ParticleField = () => {
  return (
    <div className="particle-field-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleField;
