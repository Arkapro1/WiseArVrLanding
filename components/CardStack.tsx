"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Specification {
  label: string;
  value: string;
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  specs: Specification[];
}

const products: Product[] = [
  {
    id: "vr-training",
    title: "VR Training",
    subtitle: "Immersive Learning",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80",
    specs: [
      { label: "Modules", value: "20+" },
      { label: "Scenarios", value: "100+" },
      { label: "Feedback", value: "Real-time" },
      { label: "Access", value: "24/7" },
    ],
  },
  {
    id: "clinical-skills",
    title: "Clinical Skills",
    subtitle: "Hands-on Practice",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&auto=format&fit=crop&q=80",
    specs: [
      { label: "Procedures", value: "50+" },
      { label: "Accuracy", value: "98%" },
      { label: "Certified", value: "Yes" },
      { label: "Support", value: "Expert" },
    ],
  },
  {
    id: "dementia-care",
    title: "Dementia Care",
    subtitle: "Empathetic Training",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    specs: [
      { label: "Approach", value: "Patient-first" },
      { label: "Techniques", value: "Modern" },
      { label: "Empathy", value: "Core" },
      { label: "Rating", value: "5-Star" },
    ],
  },
  {
    id: "emergency",
    title: "Emergency",
    subtitle: "Critical Response",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=80",
    specs: [
      { label: "Response", value: "Instant" },
      { label: "Protocols", value: "Updated" },
      { label: "Drills", value: "Regular" },
      { label: "Readiness", value: "100%" },
    ],
  },
];

interface CardProps {
  product: Product;
  index: number;
  totalCards: number;
  isExpanded: boolean;
}

const Card = ({ product, index, totalCards, isExpanded }: CardProps) => {
  const centerOffset = (totalCards - 1) * 5;
  const defaultX = index * 10 - centerOffset;
  const defaultY = index * 2;
  const defaultRotate = index * 1.5;
  const defaultScale = 1;

  const cardWidth = 280;
  const cardOverlap = 200;
  const totalExpandedWidth = cardWidth + (totalCards - 1) * (cardWidth - cardOverlap);
  const expandedCenterOffset = totalExpandedWidth / 2;

  const spreadX = index * (cardWidth - cardOverlap) - expandedCenterOffset + cardWidth / 2;
  const spreadY = 0;
  const spreadRotate = index * 5 - (totalCards - 1) * 2.5;
  const spreadScale = 1;

  return (
    <motion.div
      initial={{
        x: defaultX,
        y: defaultY,
        rotate: defaultRotate,
        scale: defaultScale,
      }}
      animate={{
        x: isExpanded ? spreadX : defaultX,
        y: isExpanded ? spreadY : defaultY,
        rotate: isExpanded ? spreadRotate : defaultRotate,
        scale: isExpanded ? spreadScale : defaultScale,
        zIndex: totalCards - index,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
        mass: 0.8,
        restDelta: 0.001,
        restSpeed: 0.001,
      }}
      className={cn(
        "absolute inset-0 rounded-2xl p-5 w-full",
        "bg-white/90 backdrop-blur-xl",
        "border border-gray-200/60",
        "shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        "hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]",
        "transition-all duration-500 ease-out",
        "transform-gpu overflow-hidden"
      )}
      style={{
        maxWidth: "280px",
        transformStyle: "preserve-3d",
        perspective: "2000px",
        left: "50%",
        marginLeft: "-140px",
        transform: isExpanded
          ? ""
          : `
              translateY(${index * 10}px)
              translateX(${index * 1}px)
              rotate(${index * 3}deg)
              scale(${1 - index * 0.02})
            `,
        zIndex: products.length - index,
      }}
    >
      {/* Inner Card */}
      <div className="absolute inset-1 rounded-xl bg-gray-50/50 backdrop-blur-sm border border-gray-100" />

      <div className="relative z-10">
        {/* Specs Grid */}
        <dl className="mb-3 grid grid-cols-4 gap-2 justify-center">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="text-[10px] backdrop-blur-sm flex flex-col items-start text-left"
            >
              <dd className="font-medium text-wisecura-primary w-full text-left">
                {spec.value}
              </dd>
              <dt className="text-gray-500 mb-0.5 w-full text-left">
                {spec.label}
              </dt>
            </div>
          ))}
        </dl>

        <div
          className={cn(
            "aspect-[16/11] w-full overflow-hidden rounded-lg",
            "bg-gray-100",
            "transition-transform duration-300 ease-out",
            "group-hover:scale-[1.02]",
            "border border-gray-200/50",
            "shadow-inner"
          )}
        >
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

        <div className="mt-3">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-left">
              {product.title}
            </h2>
            <span className="block text-xl font-semibold tracking-tight text-wisecura-primary text-left">
              {product.subtitle}
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-500 text-left">
            Experience clinical training reimagined with immersive technology
          </p>
        </div>
      </div>
    </motion.div>
  );
};

interface CardStackProps {
  className?: string;
}

export default function CardStack({ className }: CardStackProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <button
      className={cn(
        "relative mx-auto cursor-pointer",
        "min-h-[380px] w-full max-w-[90vw]",
        "md:max-w-[1000px]",
        "appearance-none bg-transparent border-0 p-0",
        "flex items-center justify-center mb-4",
        className
      )}
      onClick={handleToggle}
      aria-label="Toggle card stack"
      type="button"
    >
      {products.map((product, index) => (
        <Card
          key={product.id}
          product={product}
          index={index}
          totalCards={products.length}
          isExpanded={isExpanded}
        />
      ))}
    </button>
  );
}
