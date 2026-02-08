"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/getinTouch.png')",
          zIndex: 0 
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4 sm:mb-6 text-black">Get in Touch</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-md mx-auto lg:mx-0">
              Ready to transform your aged-care training? Contact us for a demo or to learn more about our modules.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-wisecura-primary/10 flex items-center justify-center text-wisecura-primary flex-shrink-0">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-gray-600">Email Us</p>
                  <p className="font-medium text-black text-sm sm:text-base">office@wisecura.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-wisecura-primary/10 flex items-center justify-center text-wisecura-primary flex-shrink-0">
                  <MapPin size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-gray-600">Location</p>
                  <p className="font-medium text-black text-sm sm:text-base">Sydney, Australia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/40 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-300 shadow-lg">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-black">First Name</label>
                  <input type="text" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all text-black placeholder:text-gray-500 text-sm sm:text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-black">Last Name</label>
                  <input type="text" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all text-black placeholder:text-gray-500 text-sm sm:text-base" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-black">Email</label>
                <input type="email" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all text-black placeholder:text-gray-500 text-sm sm:text-base" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-black">Message</label>
                <textarea rows={4} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all text-black placeholder:text-gray-500 text-sm sm:text-base resize-none" />
              </div>
              
              <button className="w-full py-3 sm:py-4 bg-wisecura-text text-white rounded-lg sm:rounded-xl font-bold hover:bg-wisecura-primary transition-colors text-sm sm:text-base">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
