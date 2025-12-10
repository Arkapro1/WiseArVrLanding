"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame } from "@react-three/fiber";

function Particles(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#B600F8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function AIBrain() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Particles />
        </Canvas>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-bold font-display mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neoversine-purple to-neoversine-cyan">
          Neoversine AI Brain
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Neural architecture that learns from every interaction.
        </p>
      </div>
    </section>
  );
}
