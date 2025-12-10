"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Wise Cura has completely transformed our onboarding process. The VR modules are incredibly realistic.",
    author: "Sarah Jenkins",
    role: "Clinical Director, Aged Care Plus",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The staff engagement levels have skyrocketed. They actually look forward to training sessions now.",
    author: "Michael Chen",
    role: "Operations Manager, Sunrise Living",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "A game-changer for remote training. We can ensure consistent quality of care across all our facilities.",
    author: "Emma Thompson",
    role: "Head of L&D, CareFirst",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "The dementia care module provided insights that traditional training simply cannot convey.",
    author: "David Wilson",
    role: "Senior Nurse, Harmony Homes",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold font-display text-wisecura-text text-center">What Our Partners Say</h2>
      </div>

      <motion.div ref={carousel} className="cursor-grab overflow-hidden px-6">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              className="min-w-[350px] md:min-w-[450px] p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-wisecura-border shadow-glass hover:shadow-glass-hover transition-all duration-300"
            >
              <p className="text-xl font-medium text-wisecura-text mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-wisecura-text">{t.author}</h4>
                  <p className="text-sm text-wisecura-textLight">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
