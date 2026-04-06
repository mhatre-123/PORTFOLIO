import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/Section';
import { Search, Award, ExternalLink, ArrowUpRight } from 'lucide-react';
import { RESEARCH, PATENTS } from '../../data/portfolio';

export const Research: React.FC = () => {
  return (
    <section id="research" className="bg-slate-900 text-white overflow-hidden py-32">
      <div className="section-container relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]"></div>
        
        <div className="grid lg:grid-cols-5 gap-20 items-start relative z-10">
          <div className="lg:col-span-3">
            <SectionTitle 
              title="Pushing Boundaries Through Research" 
              subtitle="Scholarly Contributions" 
              light
            />
            
            <div className="space-y-10">
              {RESEARCH.map((res, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/[0.08] transition-all duration-500"
                >
                  <div className="absolute top-8 right-8 w-14 h-14 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={24} />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-400">
                      <Search size={24} />
                    </div>
                    <span className="text-primary-400 font-bold uppercase tracking-[0.2em] text-xs">Featured Publication</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black mb-8 leading-tight group-hover:text-primary-300 transition-colors">
                    "{res.title}"
                  </h3>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3">
                       <Award className="text-primary-500" size={20} />
                       <span className="text-slate-400 font-medium">{res.journal}</span>
                    </div>
                    <a href={res.link} className="inline-flex items-center gap-2 text-white font-bold hover:text-primary-400 transition-colors ml-auto">
                      Access Paper <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black mb-12 flex items-center gap-4">
               <span className="w-10 h-1px bg-primary-500"></span>
               Innovative Patents
            </h2>
            <div className="grid gap-6">
              {PATENTS.map((patent, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/5 flex items-start gap-6 group hover:border-primary-500/50 transition-all"
                >
                  <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-500/20 group-hover:rotate-12 transition-transform">
                    <Award size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold leading-tight group-hover:text-primary-400 transition-colors">
                      {patent.title}
                    </h4>
                    <p className="mt-4 text-slate-500 text-sm font-bold uppercase tracking-widest">Patent Granted</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
