import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/Section';
import { Brain, Database, Shield, Cpu, Code2, Globe } from 'lucide-react';

const EXPERTISE = [
  { icon: <Brain size={24} />, title: "Machine Learning", desc: "Advanced predictive modeling and classification systems." },
  { icon: <Database size={24} />, title: "Data Mining", desc: "Extracting patterns from complex datasets for insight." },
  { icon: <Shield size={24} />, title: "Blockchain", desc: "Decentralized architectures and secure ledger technologies." },
  { icon: <Cpu size={24} />, title: "Deep Learning", desc: "Neural networks for computer vision and medical imaging." },
  { icon: <Code2 size={24} />, title: "Python Expertise", desc: "High-performance scripting and algorithmic development." },
  { icon: <Globe size={24} />, title: "Web Intelligence", desc: "Modern full-stack systems and automated data processing." },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-900 text-white overflow-hidden py-16 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]"></div>
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-4">
            {EXPERTISE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-6 rounded-3xl group hover:bg-primary-600 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-primary-500/10 text-primary-400 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-white mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed group-hover:text-primary-100 transition-colors uppercase tracking-wider">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <SectionTitle 
            title="Professional Vision & Expertise" 
            subtitle="Who I Am" 
            light
          />
          <div className="space-y-6 text-xl text-slate-300 leading-relaxed font-medium">
            <p>
              As an <span className="text-white font-bold">Assistant Professor</span> in Computer Engineering and a <span className="text-white font-bold">Ph.D. Scholar at NMIMS</span>, 
              my focus lies at the intersection of academic rigors and technological innovation.
            </p>
            <p className="bg-primary-500/10 p-6 rounded-3xl border-l-8 border-primary-500 italic text-primary-200">
              "My mission is to advance the fields of AI and Blockchain while empowering the next 
              generation of engineers with practical, research-driven knowledge."
            </p>
            <p>
              I specialize in developing intelligent systems for medical diagnostics, specifically 
              Melanoma classification, and exploring decentralized solutions for resource management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
