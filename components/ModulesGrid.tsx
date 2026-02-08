"use client";

import React, { SetStateAction } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const clinicalModules = [
  {
    id: 1,
    url: "https://cprclassesnearme.com/wp-content/uploads/2024/12/medical-students-practice-cpr-on-a-dummy-2024-06-13-16-57-01-utc-scaled.jpg?_t=1770576303374",
    title: "Urethral Catheterisation – Male",
    description:
      "Master male urinary catheter insertion and care through realistic VR simulations with haptic feedback.",
    tags: ["Clinical", "Procedure", "VR", "Hands-on"],
  },
  {
    id: 2,
    url: "https://sspark.genspark.ai/cfimages?u1=NHPfAdM3vKjxrLOc4xCMC2jltTjCtA9peAA%2BP5IvKjU0YPX3PPFCMRBOJEwIktc32CsS9GKJZI%2BrnWzqjqsat2Q%2FCusxCpBBtqwNJ8h8ZcCxz%2F1LwP0DuOgRW7SVk%2BmDD6n2H6n01PL%2BGOuYRR0E8wvD5tFC6faHB29UEKhOLLp6tT4ElU%2F1HMjcH60LzXJPkt962zPuifHrsFPgv0m%2B6g2p%2F6Q7&u2=iC6WUHoOh6FNFcid&width=512",
    title: "Urethral Catheterisation – Female",
    description:
      "Learn female urinary catheter insertion techniques with anatomically correct VR training.",
    tags: ["Clinical", "Procedure", "VR", "Anatomy"],
  },
  {
    id: 3,
    url: "https://sspark.genspark.ai/cfimages?u1=yN%2BBEKi%2BBxvR0HhsxA%2B5JlfED%2BqgrFQcrNzL67Pb3QIsiUCps1rFMQy0VtUALiOV49K%2FnLffl4%2FotRsDHM8XuGS1FkEs0m9MbxrdrorUqEE2u%2FzMH8nJXiLdmrfPCRTPzyhjyvFZeAUMXIn66R53wNZNNRwiXktiNtaX&u2=YB5DU8N9jWguwFtL&width=512",
    title: "Basic Wound Care",
    description:
      "Learn wound assessment, dressing techniques, and infection prevention in immersive scenarios.",
    tags: ["Clinical", "Dressing", "Assessment", "Care"],
  },
  {
    id: 4,
    url: "https://cprclassesnearme.com/wp-content/uploads/2023/08/medicine-student-doing-their-practice-hospital-2.jpg?_t=1770576303349",
    title: "Initial Patient Assessment",
    description:
      "Comprehensive patient assessment skills covering vital signs, history taking, and clinical examination.",
    tags: ["Clinical", "Assessment", "Vital Signs", "Examination"],
  },
  {
    id: 5,
    url: "https://sspark.genspark.ai/cfimages?u1=ZRVvN2Z0iiU1x0%2FeYmrWphekVF2PWrpizNsQjDn6M1Vr1I52qAKNQxYAH5w8pO5x0qZLH6ItmXO2r05JB1RF3Kk0HZo%2FKdcfdb84b7duonVi8NuRSO1ZwBBSHusgicV1zb%2FOp8RCLNObM9jWT9Fpzo1sTWzkDZqONWsxR8yMBlqIVNGOsxTm%2Fx%2FDqzudKl%2F%2BC1Um&u2=gOdBUyh8sMnmGaSb&width=512",
    title: "Basic Life Support",
    description:
      "Essential life-saving techniques including airway management, breathing support, and circulation assessment.",
    tags: ["Clinical", "Emergency", "BLS", "Life-saving"],
  },
];

const careWorkerModules = [
  {
    id: 1,
    url: "https://sspark.genspark.ai/cfimages?u1=%2BrV%2BSrRIC4ftlCeIhqZIE41A9W3DqOqVQfWF0haxamQcWYjJiTqPUFQKwA11pxHCoN7Y8Fj%2FzaPcyeLS6WMIvTi74%2BPu02C9Ug8de45BGdiel0Ytkh0VcbbXk0iaMj2d0YOlU5vaLA%3D%3D&u2=COg%2FbMGGYDkNvm1N&width=512",
    title: "Medication Management",
    description:
      "Comprehensive training on medication prompting and management for all types of medications in aged care.",
    tags: ["Care Workers", "Medication", "Safety", "Compliance"],
  },
  {
    id: 2,
    url: "https://sspark.genspark.ai/cfimages?u1=EMp9aTiXSbMqKEYlhYYkZ8ZoSyaEcbxMXUCXmjq%2FFgjSr%2FTA6p8tPVWHFqvCRfN4gaHt%2BUUpFVItwKTNO4PXDn69pVHFXSoCDyJ3gJclRBi0gwokfpcsuDdsrT20ekRdpZoO0yFEyKK239hjd0CBPGyXvFU7t5JPFolHFjwiJAy2rpXbzUQI5l1irIgPWNw1NqYnOdTqD74C6KA%3D&u2=2D%2FEsGc0sTijXo2W&width=512",
    title: "Risk Assessment",
    description:
      "Learn to identify, assess, and manage various risks in aged care environments through VR scenarios.",
    tags: ["Care Workers", "Safety", "Assessment", "Prevention"],
  },
  {
    id: 3,
    url: "https://sspark.genspark.ai/cfimages?u1=mm1IhnjHeY%2B0K53MVEzIjZRi6ufc8p7XIlAFyJ9TfVqPQbMU7Wyfg0bJi259UuXKmUnDhQqMgmAPdD52yCi%2BACOpWojrfMq5ZeXN10bWTuTyUIdK1eKs%2BG3zz%2FSocYsI4ovPtNXe&u2=iYFsCD6GQx4wZXVa&width=512",
    title: "Infection Control",
    description:
      "Master infection prevention and control protocols essential for aged care facilities.",
    tags: ["Care Workers", "Infection Control", "PPE", "Hygiene"],
  },
  {
    id: 4,
    url: "https://sspark.genspark.ai/cfimages?u1=hAdHIgYREW%2Be%2BfR57r83zvMxn1Cn1rqfheP5%2BOno4jvy41MlSZRfmGR5ccMqCUNilVADmP95m%2BeZ0lPca5LWBlynxZaPC2I8V7aKyzxVZgmJfdTCO3atwuM5sYfWewANufaN4suVOLyHojULuVIV0NlLFOkz%2Bb7Tq351ohuSJIi5%2BCN0yG77KaYgIfC%2BgKY%3D&u2=b3mq77Mxti519YAw&width=512",
    title: "First Aid",
    description:
      "Comprehensive first aid training covering emergency response, injury assessment, and treatment protocols.",
    tags: ["Care Workers", "Emergency", "Response", "Treatment"],
  },
  {
    id: 5,
    url: "https://sspark.genspark.ai/cfimages?u1=giweWZ%2BgxdwL%2Fc%2FNn6EflEQpXyuhKsNiVd4R9jYPD6GbbFESBv%2FaM5tsMi8pShHBHXu4NeLLcsXcVk8mjY25gWc2CnNIg7ZBkT2A1RtDIYPtaw%3D%3D&u2=I%2Fz6CHpe6Kuitsvq&width=512",
    title: "CPR",
    description:
      "Practice life-saving CPR techniques with real-time feedback and performance metrics.",
    tags: ["Care Workers", "Emergency", "CPR", "Life-saving"],
  },
  {
    id: 6,
    url: "https://sspark.genspark.ai/cfimages?u1=sK7y35%2FArSKHamHsCB7YVSwxxQ8jqXRLySD7lI9C3y8c7RTnREiiU%2FtgyX3o9Mp%2FqZs4ISdxs4cQ%2Fy9%2BxL24FB1yX9hvowcrANLVhXjaAcDRuLvbEholSWehyDvKkNVtoqurkWcPwbPHoQ%3D%3D&u2=b6Cia30sg7idARrv&width=512",
    title: "Stroke Management",
    description:
      "Specialised training for recognising, responding to, and managing stroke incidents in aged care.",
    tags: ["Care Workers", "Emergency", "Stroke", "Neurology"],
  },
  {
    id: 7,
    url: "https://sspark.genspark.ai/cfimages?u1=DvIjs33%2FZa5mhdPDREu0772xPYX9nl%2BARvwcLDeS%2BeFpUZIbHDsqZvrQyHtsXkHbleeT2FDbamZcfrFoCz0HG9RA%2BM1nzEDRPM9TFla7NEdX0hFI%2BMTnxSz8YWK%2F7XE%3D&u2=2DAz6ykSflZzUTQ9&width=512",
    title: "Working with Dementia",
    description:
      "Experience patient-centred dementia care through empathetic VR interactions and communication training.",
    tags: ["Care Workers", "Dementia", "Communication", "Empathy"],
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
    <div className="w-fit mx-auto gap-2 flex pb-10 pt-6 overflow-x-auto">
      {items.slice(0, Math.min(items.length, 7)).map((item: Item, i: number) => {
        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl relative ${
              index === i ? "w-[500px]" : "w-[60px]"
            } h-[400px] shrink-0 transition-[width] ease-in-out duration-500 origin-center shadow-lg`}
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
  const [clinicalIndex, setClinicalIndex] = useState(2);
  const [careIndex, setCareIndex] = useState(2);

  return (
    <section id="modules" className="py-24 bg-wisecura-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-wisecura-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            Training Modules
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-wisecura-text">
            Immersive Learning Experiences
          </h2>
          <p className="text-wisecura-textLight max-w-2xl mx-auto">
            Replace face to face learning and reducing costs for providers.
          </p>
        </div>

        {/* Clinical Category */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-14 h-14 bg-wisecura-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-wisecura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold font-display text-wisecura-text">Clinical</h3>
            </div>
          </div>
          <Gallery items={clinicalModules} index={clinicalIndex} setIndex={setClinicalIndex} />
        </div>

        {/* Care Workers Category */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-14 h-14 bg-wisecura-secondary/10 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-wisecura-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold font-display text-wisecura-text">Care Workers</h3>
            </div>
          </div>
          <Gallery items={careWorkerModules} index={careIndex} setIndex={setCareIndex} />
        </div>
      </div>
    </section>
  );
}
