"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <section className="py-24 bg-gradient-to-b from-neoversine-navy to-black relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
          The <span className="text-neoversine-cyan">Living Dashboard</span>
        </h2>
        <p className="text-xl text-white/60">Not just data. Actionable intelligence.</p>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl shadow-2xl"
        >
          {/* Mock Dashboard UI */}
          <div className="grid grid-cols-12 gap-6 h-[600px]">
            {/* Sidebar */}
            <div className="col-span-2 hidden md:flex flex-col gap-4 border-r border-white/5 pr-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-full bg-white/5 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            
            {/* Main Content */}
            <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
              <div className="h-64 w-full bg-gradient-to-br from-neoversine-blue/10 to-transparent rounded-xl border border-white/5 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://placehold.co/800x400/0a6cff/ffffff?text=Analytics+Graph')] bg-cover opacity-20" />
                <h3 className="text-lg font-bold mb-2">Performance Metrics</h3>
                <div className="text-4xl font-mono text-neoversine-blue">98.4%</div>
              </div>
              <div className="grid grid-cols-2 gap-6 flex-1">
                <div className="bg-white/5 rounded-xl border border-white/5 p-4">
                  <div className="h-full w-full flex items-center justify-center text-white/20">Widget A</div>
                </div>
                <div className="bg-white/5 rounded-xl border border-white/5 p-4">
                  <div className="h-full w-full flex items-center justify-center text-white/20">Widget B</div>
                </div>
              </div>
            </div>
            
            {/* AI Chat Panel */}
            <div className="col-span-12 md:col-span-3 bg-black/20 rounded-xl border border-white/5 p-4 flex flex-col">
              <div className="text-sm font-bold text-neoversine-purple mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neoversine-purple animate-pulse" />
                AI Assistant
              </div>
              <div className="flex-1 space-y-4 overflow-hidden">
                <div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-xs text-white/70">
                  Analyzing trainee performance patterns...
                </div>
                <div className="bg-neoversine-purple/20 p-3 rounded-lg rounded-tr-none text-xs text-white ml-auto max-w-[80%]">
                  Show me the latest VR session stats.
                </div>
                <div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-xs text-white/70">
                  Session #402 completed. Score: 92/100. Empathy rating improved by 15%.
                </div>
              </div>
              <div className="mt-4 h-10 bg-white/5 rounded-lg border border-white/10" />
            </div>
          </div>
        </motion.div>
        
        {/* Glow effect behind dashboard */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neoversine-blue/20 blur-[100px] -z-10 pointer-events-none" />
      </div>
    </section>
  );
}
