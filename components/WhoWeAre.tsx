"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Torus } from "@react-three/drei";

function AbstractShape() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Torus args={[1, 0.3, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#90E0EF" roughness={0.1} metalness={0.1} transparent opacity={0.6} />
      </Torus>
    </Float>
  );
}

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-wisecura-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-wisecura-primary font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-wisecura-text">
              Empowering Care Through <br />
              <span className="text-wisecura-primary">Immersive Technology</span>
            </h2>
            <p className="text-lg text-wisecura-textLight mb-8 leading-relaxed">
              Wise Cura is an AR/VR-powered training platform helping Australia’s aged-care workforce upskill through immersive simulations. 
              We bridge the gap between theoretical knowledge and practical application, providing a safe environment to master critical skills.
            </p>
            
            <div className="p-6 rounded-2xl bg-white shadow-glass border border-wisecura-border">
              <p className="text-wisecura-text italic">
                "Our mission is to elevate the standard of care by making high-quality, hands-on training accessible to every aged-care provider."
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-wisecura-secondary/20 to-white border border-white shadow-xl"
          >
            <div className="absolute inset-0 z-0">
               <Canvas>
                 <ambientLight intensity={1} />
                 <pointLight position={[10, 10, 10]} />
                 <AbstractShape />
               </Canvas>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 bg-white/80 backdrop-blur-md border-t border-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-wisecura-primary/10 flex items-center justify-center text-wisecura-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-wisecura-text">Clinical Precision</h4>
                  <p className="text-sm text-wisecura-textLight">Verified by medical experts</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
