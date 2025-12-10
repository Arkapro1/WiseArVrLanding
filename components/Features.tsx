"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Hands-on immersive learning",
  "Realistic AR/VR scenarios",
  "Remote training accessibility",
  "Cost-efficient workforce upskilling",
  "Immediate onboarding impact"
];

export default function Features() {
  return (
    <section className="py-24 bg-wisecura-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 text-wisecura-text">
            Why Providers Choose <span className="text-wisecura-primary">Wise Cura</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "#0077B6", color: "#ffffff" }}
              className="px-8 py-4 bg-white rounded-full border border-wisecura-border shadow-sm flex items-center gap-3 cursor-default transition-colors group"
            >
              <CheckCircle2 className="text-wisecura-primary group-hover:text-white transition-colors" size={20} />
              <span className="font-medium text-wisecura-text group-hover:text-white transition-colors">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
