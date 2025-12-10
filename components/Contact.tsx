"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold font-display mb-6 text-wisecura-text">Get in Touch</h2>
            <p className="text-lg text-wisecura-textLight mb-12">
              Ready to transform your aged-care training? Contact us for a demo or to learn more about our modules.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-wisecura-background border border-wisecura-border">
                <div className="w-10 h-10 rounded-full bg-wisecura-primary/10 flex items-center justify-center text-wisecura-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-wisecura-textLight">Email Us</p>
                  <p className="font-medium text-wisecura-text">info@wisecura.com.au</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-wisecura-background border border-wisecura-border">
                <div className="w-10 h-10 rounded-full bg-wisecura-primary/10 flex items-center justify-center text-wisecura-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-wisecura-textLight">Location</p>
                  <p className="font-medium text-wisecura-text">Sydney, Australia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-wisecura-background p-8 rounded-3xl border border-wisecura-border shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wisecura-text">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-wisecura-border bg-white focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wisecura-text">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-wisecura-border bg-white focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-wisecura-text">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-wisecura-border bg-white focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-wisecura-text">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-wisecura-border bg-white focus:outline-none focus:ring-2 focus:ring-wisecura-primary/20 transition-all" />
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
