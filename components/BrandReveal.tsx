"use client";

import { motion } from "framer-motion";

export default function BrandReveal() {
  return (
    <section className="py-24 bg-neoversine-navy relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Why <span className="text-neoversine-blue">Neoversine</span>?
            </h2>
            <p className="text-lg text-neoversine-white/70 mb-8 leading-relaxed">
              We merge high-fidelity VR simulation with advanced AI agents to create 
              the most realistic medical training environment ever built. 
              Experience patient interactions that feel real, with consequences that matter.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "AI Agents", desc: "Adaptive patient behavior" },
                { title: "Haptic VR", desc: "Tactile feedback systems" },
                { title: "Real-time", desc: "Zero-latency rendering" },
                { title: "Certified", desc: "Medically accurate data" }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-neoversine-cyan font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-neoversine-blue/20 to-neoversine-purple/20 border border-white/10 flex items-center justify-center"
          >
            {/* Placeholder for 3D Brand Element */}
            <div className="absolute inset-0 bg-[url('https://placehold.co/800x600/0a0f1a/59f4ff?text=Neoversine+Brand+Reveal')] bg-cover bg-center opacity-50 mix-blend-overlay" />
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-neoversine-cyan shadow-[0_0_30px_rgba(89,244,255,0.3)] flex items-center justify-center bg-black/40 backdrop-blur-md">
                <span className="text-4xl font-bold text-white">N</span>
              </div>
              <p className="text-neoversine-cyan tracking-widest uppercase text-sm">System Online</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
