"use client";

import { Canvas } from "@react-three/fiber";
import { Box, Line } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function ServerNode({ position }: { position: [number, number, number] }) {
  const ref = useRef<any>();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={ref} args={[0.5, 0.5, 0.5]} position={position}>
      <meshStandardMaterial color="#0A6CFF" wireframe />
    </Box>
  );
}

export default function Infrastructure() {
  return (
    <section className="py-24 bg-neoversine-navy relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Enterprise-Grade <br />
            <span className="text-neoversine-blue">Infrastructure</span>
          </h2>
          <p className="text-lg text-neoversine-white/70 mb-8">
            Built on a global mesh of high-performance GPU clusters. 
            Zero-latency streaming, military-grade security, and infinite scalability.
          </p>
          
          <div className="space-y-6">
            {[
              { label: "Global Edge Network", val: "50+ Regions" },
              { label: "Uptime Guarantee", val: "99.99%" },
              { label: "Security Compliance", val: "HIPAA / GDPR" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-white/60">{stat.label}</span>
                <span className="text-xl font-mono text-neoversine-cyan">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="h-[500px] bg-black/20 rounded-2xl overflow-hidden border border-white/5 relative">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ServerNode position={[-1.5, 0, 0]} />
            <ServerNode position={[0, 1.5, 0]} />
            <ServerNode position={[1.5, 0, 0]} />
            <ServerNode position={[0, -1.5, 0]} />
            {/* Connecting lines would go here */}
          </Canvas>
          <div className="absolute bottom-4 right-4 text-xs font-mono text-white/30">
            SYSTEM_STATUS: OPTIMAL
          </div>
        </div>
      </div>
    </section>
  );
}
