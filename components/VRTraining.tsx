"use client";

import { motion } from "framer-motion";

export default function VRTraining() {
  return (
    <section className="py-24 bg-neoversine-navy relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Immersive <span className="text-neoversine-gold">VR Training</span>
              </h2>
              <p className="text-lg text-neoversine-white/70 mb-8">
                Step into a photorealistic aged-care facility. Practice complex procedures, 
                handle emergencies, and develop soft skills with virtual patients that react emotionally.
              </p>
              <ul className="space-y-4">
                {["Gesture-based controls", "Anatomical overlays", "Real-time feedback", "Multi-user scenarios"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neoversine-white/80">
                    <span className="w-2 h-2 rounded-full bg-neoversine-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src="https://placehold.co/1920x1080/0a0f1a/d8c296?text=VR+Training+Simulation" 
                alt="VR Training" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="px-3 py-1 bg-neoversine-gold/20 text-neoversine-gold text-xs font-bold rounded-full border border-neoversine-gold/30 backdrop-blur-md">
                  LIVE DEMO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
