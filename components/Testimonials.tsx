"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Wise Cura has the potential to completely transform our onboarding process. The VR module on Anesthesia is incredibly realistic.",
    author: "Dr. Palak Gupta",
    role: "MBBS, MD, Anesthesiologist",
    image: "/images/moshmi.jpeg"
  },
  {
    quote: "Having been in the Aged Care Industry for 30 years and having attended lots of different training sessions, I have not experienced the level of immersion which I felt doing the VR modules. The modules were super realistic, from the interactions with patients through the hand held devices to being able to move around the room to perform different tasks. The fundamental education prompts through the training also reinforced learnings. The module workflows were appropriate to 'real life' scenarios and visuals were effective. After a short adjustment period, I felt confident and comfortable to undertake and complete the training without issues. An effective and efficient way to undertake learning. I would highly recommend.",
    author: "Jodi N",
    role: "Aged Care Quality Assurance & Care Worker Training Leader",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "WiseCura VR based modules hold great potential for remote training and upskilling of Australia Aged Care Staff.",
    author: "Dr. Malav Trivedi",
    role: "Scientist, Australia",
    image: "https://i.pravatar.cc/150?img=11"
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
          {testimonials.map((t, i) => {
            const initials = t.author
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0])
              .join("")
              .toUpperCase();

            return (
            <motion.div 
              key={i}
              className="min-w-[350px] md:min-w-[450px] p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-wisecura-border shadow-glass hover:shadow-glass-hover transition-all duration-300"
            >
              <p className="text-xl font-medium text-wisecura-text mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-wisecura-primary/10 border border-wisecura-primary/30 flex items-center justify-center text-wisecura-primary font-bold">
                  {initials}
                </div>
                <div>
                  <h4 className="font-bold text-wisecura-text">{t.author}</h4>
                  <p className="text-sm text-wisecura-textLight">{t.role}</p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
