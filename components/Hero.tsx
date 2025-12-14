"use client";

import { motion } from "framer-motion";
import { getCloudinaryVideoUrl } from "@/lib/cloudinary";

function MaskedVideo({ className = "" }: { className?: string }) {
  const videoUrl = getCloudinaryVideoUrl(
    process.env.NEXT_PUBLIC_HERO_VIDEO_ID || 'sample',
    { quality: 'auto', format: 'auto' }
  );
  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        aspectRatio: '16/9',
        maskImage:
          "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
        WebkitMaskImage:
          "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/bg.png')",
          zIndex: 0 
        }}
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent md:from-white/70 md:via-white/40 md:to-transparent" style={{ zIndex: 1 }} />

      {/* Content Grid */}
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center" style={{ zIndex: 10 }}>
        
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <span className="px-3 sm:px-4 py-2 rounded-full bg-wisecura-primary text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg">
              Wise Cura
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 sm:mb-6 tracking-tight text-wisecura-text leading-tight"
          >
            Immersive AR/VR Training for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wisecura-primary to-wisecura-secondary">
              Australia's Aged-Care Workforce
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-black max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed"
          >
            Upskilling the future of care through immersive simulations. 
            Clinical precision meets futuristic training.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center lg:justify-start"
          >
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-wisecura-primary hover:bg-blue-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base">
              Book a Demo
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-wisecura-text border border-wisecura-border rounded-full font-bold transition-all shadow-sm hover:shadow-md text-sm sm:text-base">
              Explore Modules
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-md">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-black font-medium text-sm sm:text-base">
              <div className="flex text-wisecura-accent text-xs sm:text-base">★★★★★</div>
              <span>Trusted by 1000+ Providers</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Masked Video Component (Now visible on all screens) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center lg:justify-end items-center w-full order-1 lg:order-2 mb-6 lg:mb-0"
        >
          <MaskedVideo className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl" />
        </motion.div>
      </div>
      
      {/* Decorative Gradient at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-t from-wisecura-background to-transparent" style={{ zIndex: 20 }} />
    </section>
  );
}
