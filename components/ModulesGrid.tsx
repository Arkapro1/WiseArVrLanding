"use client";

import { motion } from "framer-motion";
import { Activity, Heart, Brain, Stethoscope, Pill, Users, Zap, ShieldCheck } from "lucide-react";

const clinicalModules = [
  { title: "Catheterisation", icon: Activity },
  { title: "Basic Life Support (BLS)", icon: Heart },
  { title: "Wound Care", icon: Stethoscope },
  { title: "Infection Control", icon: ShieldCheck },
];

const practiceModules = [
  { title: "Medication Prompting", icon: Pill },
  { title: "Dementia Care", icon: Brain },
  { title: "CPR Training", icon: Zap },
  { title: "First Aid", icon: Users },
];

function ModuleCard({ title, Icon, index }: { title: string, Icon: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(0, 119, 182, 0.15)" }}
      className="bg-white rounded-2xl p-6 border border-wisecura-border shadow-sm cursor-pointer group transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-wisecura-secondary/20 flex items-center justify-center text-wisecura-primary mb-4 group-hover:bg-wisecura-primary group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-wisecura-text group-hover:text-wisecura-primary transition-colors">{title}</h3>
      <p className="text-sm text-wisecura-textLight mt-2">Interactive VR simulation module.</p>
    </motion.div>
  );
}

export default function ModulesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 text-wisecura-text">Training Modules</h2>
          <p className="text-wisecura-textLight max-w-2xl mx-auto">Comprehensive library of clinical and practice skills designed for the modern aged-care workforce.</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-wisecura-text mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-wisecura-primary rounded-full" />
            Clinical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicalModules.map((mod, i) => (
              <ModuleCard key={i} title={mod.title} Icon={mod.icon} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-wisecura-text mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-wisecura-accent rounded-full" />
            Aged-Care Practice Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceModules.map((mod, i) => (
              <ModuleCard key={i} title={mod.title} Icon={mod.icon} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
