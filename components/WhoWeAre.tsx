"use client";

import { motion } from "framer-motion";
import CardStack from "./CardStack";

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
              Wise Cura is an AR/VR-powered training platform helping Australia's aged-care workforce upskill through immersive simulations. 
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
            className="relative min-h-[450px] flex items-center justify-center"
          >
            <CardStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
