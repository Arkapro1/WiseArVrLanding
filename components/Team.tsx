"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Charmi Dhanesha",
    role: "Co-Founder & CEO",
    image: "https://placehold.co/400x500/f8f9fa/1e293b?text=Charmi" // Placeholder as requested
  },
  {
    name: "Moushmi Gupta",
    role: "Co-Founder & CTO",
    image: "https://placehold.co/400x500/f8f9fa/1e293b?text=Moushmi" // Placeholder as requested
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-wisecura-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 text-wisecura-text">Meet the Team</h2>
          <p className="text-wisecura-textLight">The visionaries behind Wise Cura.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-white/90 backdrop-blur-sm border-t border-white/50">
                <h3 className="text-xl font-bold text-wisecura-text">{member.name}</h3>
                <p className="text-wisecura-primary font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
