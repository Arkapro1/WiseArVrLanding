"use client";

import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const team = [
  {
    name: "Charmi Dhanesha",
    role: "Co-Founder & CEO",
    bio: "Visionary leader with expertise in healthcare technology and aged care innovation.",
    image: "https://placehold.co/400x500/0077B6/ffffff?text=Charmi"
  },
  {
    name: "Moushmi Gupta",
    role: "Co-Founder & CTO",
    bio: "Technology pioneer driving AR/VR solutions for transformative healthcare training.",
    image: "https://placehold.co/400x500/0077B6/ffffff?text=Moushmi"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-wisecura-text">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-display mb-4 text-white"
          >
            Meet the Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            The visionaries behind Wise Cura.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <CardSpotlight 
                className="w-full max-w-sm h-auto"
                color="#0077B6"
                radius={400}
              >
                <div className="relative z-20">
                  <div className="w-20 h-20 rounded-full bg-wisecura-primary/20 mx-auto mb-6 overflow-hidden border-2 border-wisecura-primary/30">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-wisecura-secondary font-medium text-center mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-center text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
