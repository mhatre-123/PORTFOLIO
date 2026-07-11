import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/Section';
import { Code, Eye, Car, ShieldAlert, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PROJECTS, SKILLS, SUBJECTS_TAUGHT } from '../../data/portfolio';

const PROJECT_THEMES = [
  {
    icon: <Eye className="w-6 h-6" />,
    colorClass: "text-blue-600 bg-blue-50/80 border-blue-100",
    badgeClass: "bg-blue-50/50 text-blue-600 border-blue-100/50"
  },
  {
    icon: <Car className="w-6 h-6" />,
    colorClass: "text-indigo-600 bg-indigo-50/80 border-indigo-100",
    badgeClass: "bg-indigo-50/50 text-indigo-600 border-indigo-100/50"
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    colorClass: "text-rose-600 bg-rose-50/80 border-rose-100",
    badgeClass: "bg-rose-50/50 text-rose-600 border-rose-100/50"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    colorClass: "text-emerald-600 bg-emerald-50/80 border-emerald-100",
    badgeClass: "bg-emerald-50/50 text-emerald-600 border-emerald-100/50"
  }
];

export const Technical: React.FC = () => {
  return (
    <section id="projects" className="bg-white pt-20 pb-0">
      {/* Projects Grid */}
      <div className="section-container !pt-0">
        <SectionTitle 
          title="Digital Innovations" 
          subtitle="Recent Projects" 
          align="center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((proj, idx) => {
            const theme = PROJECT_THEMES[idx % PROJECT_THEMES.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col justify-between group transition-all duration-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-250/50 hover:border-primary-200 relative overflow-hidden"
              >
                {/* Hover Arrow Icon */}
                <div className="absolute top-6 right-6 text-slate-400 group-hover:text-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight size={20} />
                </div>

                <div>
                  {/* Colored Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:rotate-6 ${theme.colorClass}`}>
                    {theme.icon}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-black text-slate-800 mt-6 mb-3 leading-snug group-hover:text-primary-600 transition-colors">
                    {proj.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                {/* Tech Badges at the bottom */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100/80">
                  {proj.tech.map(t => (
                    <span 
                      key={t} 
                      className={`text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badgeClass}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
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

          {/* Integrated Expertise in Teaching Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-indigo-600 rounded-[2.5rem] p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary-950/50 mt-16"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Code size={150} />
            </div>
            <h3 className="text-2xl font-black mb-6 relative z-10">Expertise in Teaching</h3>
            <div className="flex flex-wrap gap-2.5 relative z-10">
              {SUBJECTS_TAUGHT.map(s => (
                <span key={s} className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-2xl font-bold uppercase tracking-tight text-xs hover:bg-white/20 transition-all cursor-crosshair">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
