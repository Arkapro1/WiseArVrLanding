"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/getinTouch.png')",
          zIndex: 0 
        }}
      />
      
      <div className="container mx-auto px-6 relative" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold font-display mb-6 text-black">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-12">
              Ready to transform your aged-care training? Contact us for a demo or to learn more about our modules.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-300">
                <div className="w-10 h-10 rounded-full bg-wisecura-primary/10 flex items-center justify-center text-wisecura-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Us</p>
                  <p className="font-medium text-black">info@wisecura.com.au</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-300">
                <div className="w-10 h-10 rounded-full bg-wisecura-primary/10 flex items-center justify-center text-wisecura-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium text-black">Sydney, Australia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-gray-300 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all text-black placeholder:text-gray-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all text-black placeholder:text-gray-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-black">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all text-black placeholder:text-gray-500" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-black">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all text-black placeholder:text-gray-500" />
              </div>
              
              <button className="w-full py-4 bg-wisecura-text text-white rounded-xl font-bold hover:bg-wisecura-primary transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
