import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, PremiumCard } from '../ui/Section';
import { GraduationCap, Briefcase } from 'lucide-react';
import { EDUCATION, EXPERIENCE } from '../../data/portfolio';

export const Career: React.FC = () => {
  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-2 gap-20">
        <div id="education" className="scroll-mt-24">
          <SectionTitle 
            title="Academic Journey" 
            subtitle="Educational Foundation" 
          />
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:via-slate-200 before:to-transparent">
            {EDUCATION.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 ring-8 ring-slate-50 z-10">
                  <GraduationCap className="text-primary-600" size={20} />
                </div>
                <div className="glass p-8 rounded-3xl hover:border-primary-300 transition-all group">
                  <span className="text-primary-600 font-bold bg-primary-50 px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest mb-4 inline-block">
                    {edu.year}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 leading-snug group-hover:text-primary-600 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-600 font-semibold mb-4">{edu.institute}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-grow bg-slate-100"></div>
                    <span className="text-primary-700 font-black text-sm whitespace-nowrap">Result: {edu.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="experience" className="scroll-mt-24">
          <SectionTitle 
            title="Professional Impact" 
            subtitle="Work Experience" 
          />
          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <PremiumCard className="relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-primary-100 transition-colors pointer-events-none">
                    <Briefcase size={64} className="opacity-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="chip bg-slate-900 text-white font-mono text-[10px]">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary-600 font-bold mb-6">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-2">
                       {exp.subjects.map(s => (
                         <span key={s} className="bg-slate-50 border border-slate-100 text-slate-500 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-tight group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                           {s}
                         </span>
                       ))}
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
