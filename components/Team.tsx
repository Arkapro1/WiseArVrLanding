"use client";

import { motion, AnimatePresence } from "framer-motion";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { useState } from "react";

const team = [
  {
    name: "Moushmi Gupta",
    role: "Co-Founder & CTO",
    initials: "MG",
    image: "/images/moshmi.jpeg",
    linkedIn: "https://www.linkedin.com/in/moushmi-gupta-84a565b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    bio: `At Wise Cura, Moushmi leads the technology vision and product development, designing immersive AR/VR training simulations, overseeing platform architecture, and translating clinical learning needs into scalable digital solutions. She is deeply passionate about applying cutting-edge innovation to transform healthcare training and workforce capability.

Moushmi is an accomplished technologist with over a decade of deep expertise spanning DNA-related semiconductor systems, advanced hardware engineering (FPGAs), digital electronics, and immersive technologies such as AR/VR. She has led R&D initiatives at global technology leaders including Xilinx and Cypress Semiconductor.`
  }
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      className="py-24 relative"
      style={{
        backgroundImage: "url('/images/image copy 2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
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
              className="relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] rounded-xl bg-black/20 transition-all duration-300 hover:border-wisecura-primary/50 hover:shadow-lg hover:shadow-wisecura-primary/20">
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

                  <EvervaultCard image={member.image} text={member.initials} />

                  <h3 className="text-white mt-4 text-xl font-bold flex items-center gap-2">
                    {member.name}
                    <svg 
                      className="w-5 h-5 text-[#0A66C2]" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </h3>
                  <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-wisecura-secondary px-3 py-1">
                    {member.role}
                  </p>
                </div>
              </a>

              {/* Bio Popup on Hover */}
              <AnimatePresence>
                {hoveredIndex === i && member.bio && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[400px] max-w-[90vw] z-50 pointer-events-none"
                  >
                    <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-wisecura-primary/30 rounded-2xl p-6 shadow-2xl shadow-wisecura-primary/10">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 border-l border-t border-wisecura-primary/30 rotate-45"></div>
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
