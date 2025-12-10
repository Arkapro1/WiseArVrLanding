"use client";

import { motion } from "framer-motion";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

const team = [
  {
    name: "Charmi Dhanesha",
    role: "Co-Founder & CEO",
    initials: "CD"
  },
  {
    name: "Moushmi Gupta",
    role: "Co-Founder & CTO",
    initials: "MG"
  }
];

export default function Team() {
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
            >
              <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] rounded-xl bg-black/20">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

                <EvervaultCard text={member.initials} />

                <h3 className="text-white mt-4 text-xl font-bold">
                  {member.name}
                </h3>
                <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-wisecura-secondary px-3 py-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
