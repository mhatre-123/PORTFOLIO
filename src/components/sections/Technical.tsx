import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, PremiumCard } from '../ui/Section';
import { Code, Github, Sparkles } from 'lucide-react';
import { PROJECTS, SKILLS, CERTIFICATIONS, SUBJECTS_TAUGHT } from '../../data/portfolio';

export const Technical: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      {/* Projects Grid */}
      <div className="section-container">
        <SectionTitle 
          title="Digital Innovations" 
          subtitle="Recent Projects" 
          align="center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <PremiumCard className="h-full flex flex-col group p-0 overflow-hidden !rounded-[2.5rem]">
                <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-300 relative group-hover:scale-105 transition-transform duration-700">
                  <Code size={64} className="opacity-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-10 bg-white">
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{proj.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-grow">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(t => (
                      <span key={t} className="text-[10px] font-black uppercase tracking-tighter bg-primary-50 text-primary-600 px-3 py-1 rounded-full border border-primary-100/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills & Stats */}
      <div className="bg-slate-900 mt-32 py-32 overflow-hidden relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 border border-white/5 rounded-full"
        />
        
        <div className="section-container relative z-10">
          <SectionTitle 
            title="Professional Assets" 
            subtitle="Skills & Competencies" 
            align="left"
            light
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <motion.div 
                key={cat}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-2 h-8 bg-gradient-to-b from-primary-500 to-transparent"></div>
                   <h4 className="text-lg font-black text-white uppercase tracking-[0.2em]">{cat}</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map(item => (
                    <span key={item} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-slate-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Marquee-style or Grid */}
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
             <SectionTitle 
                title="Continuous Learning" 
                subtitle="Advancements & Certs" 
             />
             <div className="grid gap-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group transition-all"
                  >
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Sparkles size={20} />
                    </div>
                    <span className="font-bold text-slate-700">{cert}</span>
                  </motion.div>
                ))}
             </div>
          </div>
          
          <div className="bg-primary-600 rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Code size={200} />
             </div>
             <h3 className="text-3xl font-black mb-10 relative z-10">Expertise in Teaching</h3>
             <div className="flex flex-wrap gap-3 relative z-10">
                {SUBJECTS_TAUGHT.map(s => (
                  <span key={s} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl font-bold uppercase tracking-tighter text-sm hover:bg-white/20 transition-all cursor-crosshair">
                    {s}
                  </span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
