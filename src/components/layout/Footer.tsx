import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { SiGooglescholar, SiResearchgate } from 'react-icons/si';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-sans font-black mb-6">
              Chaitali Hitesh <span className="text-primary-400">Mhatre</span>
            </h2>
            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
              Assistant Professor dedicated to advancing Computer Engineering through innovative teaching and impactful research in AI and Data Science.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary-400">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              {["About", "Education", "Research", "Projects"].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 scale-0 group-hover:scale-100 transition-transform"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary-400">Professional Only</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Linkedin size={20} />, label: "LinkedIn" },
                { icon: <SiGooglescholar size={20} />, label: "Scholar" },
                { icon: <SiResearchgate size={20} />, label: "ResearchGate" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-slate-300 hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 Chaitali Hitesh Mhatre. Built with React & Tailwind v4.
          </p>
          <div className="flex gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary-400">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
