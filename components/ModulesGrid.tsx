"use client";

import React, { SetStateAction } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format",
    title: "Catheterisation",
    description:
      "Master urinary catheter insertion and care through realistic VR simulations with haptic feedback.",
    tags: ["Clinical", "Procedure", "VR", "Hands-on"],
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format",
    title: "Wound Care",
    description:
      "Learn wound assessment, dressing techniques, and infection prevention in immersive scenarios.",
    tags: ["Clinical", "Dressing", "Assessment", "Care"],
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format",
    title: "Dementia Care",
    description:
      "Experience patient-centered dementia care through empathetic VR interactions and communication training.",
    tags: ["Aged-Care", "Empathy", "Communication", "Support"],
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format",
    title: "CPR Training",
    description:
      "Practice life-saving CPR techniques with real-time feedback and performance metrics.",
    tags: ["Emergency", "Life-saving", "BLS", "Critical"],
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1200&auto=format",
    title: "First Aid",
    description:
      "Comprehensive first aid training covering emergency response, injury assessment, and treatment protocols.",
    tags: ["Emergency", "Response", "Assessment", "Treatment"],
  },
];

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

type Item = {
  id: number;
  url: string;
  title: string;
  description: string;
  tags?: string[];
};

interface GalleryProps {
  items: Item[];
  setIndex: React.Dispatch<SetStateAction<number>>;
  index: number;
}

function Gallery({ items, setIndex, index }: GalleryProps) {
  return (
    <div className="w-fit mx-auto gap-2 flex pb-20 pt-10">
      {items.slice(0, 5).map((item: Item, i: number) => {
        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl relative ${
              index === i ? "w-[500px]" : "w-[60px]"
            } h-[450px] shrink-0 transition-[width] ease-in-out duration-500 origin-center shadow-lg`}
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            onMouseEnter={() => {
              setIndex(i);
            }}
          >
            <motion.img
              src={item?.url}
              className={`${
                index === i ? "cursor-default" : "cursor-pointer"
              } w-full rounded-2xl h-full object-cover`}
              alt={item.title}
            />
            <AnimatePresence mode="wait">
              {index === i && (
                <motion.article
                  variants={article}
                  initial="hidden"
                  animate="show"
                  className="absolute flex rounded-2xl flex-col justify-end h-full top-0 p-4 space-y-2 overflow-hidden bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                >
                  <motion.h1
                    variants={article}
                    className="text-2xl font-bold text-white"
                  >
                    {item?.title}
                  </motion.h1>
                  <motion.p
                    variants={article}
                    className="leading-relaxed text-white/90 text-sm"
                  >
                    {item?.description}
                  </motion.p>
                  <motion.div variants={article} className="flex gap-2 flex-wrap pt-2">
                    {item.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </motion.article>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ModulesGrid() {
  const [index, setIndex] = useState(2);

  return (
    <section className="py-24 bg-wisecura-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-wisecura-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            Training Modules
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-wisecura-text">
            Immersive Learning Experiences
          </h2>
          <p className="text-wisecura-textLight max-w-2xl mx-auto">
            Comprehensive library of clinical and practice skills designed for the modern aged-care workforce.
          </p>
        </div>

        <Gallery items={items} index={index} setIndex={setIndex} />
      </div>
    </section>
  );
}
