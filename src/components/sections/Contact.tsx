import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/Section';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <div className="grid lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2">
          <SectionTitle 
            title="Start a Conversation" 
            subtitle="Contact Information" 
          />
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
            Open for research partnerships, academic sessions, and technical consultancy. Reach out across any platform.
          </p>

          <div className="space-y-6">
            {[
              { icon: <Mail />, label: "Email", val: "patilchaitali1333@gmail.com", color: "text-primary-600 bg-primary-50" },
              { icon: <Phone />, label: "Phone", val: "+91 8329779633", color: "text-indigo-600 bg-indigo-50" },
              { icon: <MapPin />, label: "Location", val: "Vasai East, Maharashtra", color: "text-rose-600 bg-rose-50" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 glass rounded-3xl group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                   <p className="text-lg font-black text-slate-900">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-12 rounded-[3.5rem] bg-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -mr-16 -mt-16"></div>
            
            <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
              <MessageSquare className="text-primary-500" /> Send a Message
            </h3>
            
            <form className="grid md:grid-cols-2 gap-8" onSubmit={e => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1 text-[10px]">Your Name</label>
                <input 
                  type="text" 
                  className="w-full h-16 px-6 bg-slate-50 border-2 border-transparent focus:border-primary-500 focus:bg-white rounded-2xl outline-none transition-all font-bold text-slate-700"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1 text-[10px]">Email Address</label>
                <input 
                  type="email" 
                  className="w-full h-16 px-6 bg-slate-50 border-2 border-transparent focus:border-primary-500 focus:bg-white rounded-2xl outline-none transition-all font-bold text-slate-700"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1 text-[10px]">Your Message</label>
                <textarea 
                  rows={5}
                  className="w-full p-6 bg-slate-50 border-2 border-transparent focus:border-primary-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="btn-premium w-full text-white text-lg flex items-center justify-center gap-4">
                   Deliver Message <Send size={24} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
