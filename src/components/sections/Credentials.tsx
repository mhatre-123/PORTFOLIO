import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolio';

export const Credentials: React.FC = () => {
  return (
    <section id="certifications" className="pt-32 pb-16 relative overflow-hidden bg-slate-50">
      {/* Large watermark text "CREDENTIALS" in the background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <span className="text-[12vw] font-black text-slate-200/30 tracking-[0.2em] uppercase leading-none">
          Credentials
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Custom Header matching the image layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="chip mb-4 bg-primary-50 text-primary-600 uppercase tracking-widest text-[10px] font-black px-4 py-1.5 rounded-full inline-block"
            >
              Verified Excellence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-sans font-black leading-tight text-slate-900"
            >
              Professional <span className="text-primary-500">Credentials</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1.5 mt-4 rounded-full bg-gradient-to-r from-primary-500 to-indigo-500"
            ></motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"
          >
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border border-primary-500/60"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-primary-500/60"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-primary-500/60"></span>
            </div>
            <span>Top Tier Recognition</span>
          </motion.div>
        </div>

        {/* Flex layout to wrap and center cards (3 in first row, 2 centered in second row) */}
        <div className="flex flex-wrap gap-8 justify-center">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="w-full md:w-[360px] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="border border-emerald-500/30 text-emerald-500 bg-emerald-500/10 px-3.5 py-1 rounded-full text-[9px] font-black tracking-widest uppercase">
                    View Cert
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-slate-800 mb-8 leading-snug group-hover:text-primary-600 transition-colors">
                  {cert.title}
                </h3>
              </div>
              
              <div className="pt-6 border-t border-slate-100 flex items-center">
                <span className="text-primary-500 font-black uppercase tracking-widest text-[10px] flex items-center gap-1 group-hover:text-primary-600 transition-colors">
                  Official Credentials <span className="ml-0.5 text-xs font-normal">&gt;</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom banner block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-5xl mx-auto mt-20 bg-[#0B1528] text-white py-6 px-12 rounded-[2rem] md:rounded-full flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl shadow-primary-950/20"
        >
          <span className="font-sans font-black italic text-lg tracking-wider text-white">
            Continual Advancement
          </span>
          <div className="hidden md:block h-6 w-px bg-white/10"></div>
          <p className="text-slate-400 text-xs md:text-sm font-semibold text-center md:text-right max-w-xl leading-relaxed">
            Dedicated to global excellence through specialized pedagogical and technical training.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
