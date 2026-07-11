import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-16">
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
              {["About", "Education", "Research", "Certifications", "Projects"].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 scale-0 group-hover:scale-100 transition-transform"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 flex justify-center items-center">
          <p className="text-slate-500 text-sm font-medium text-center">
            © 2026 Chaitali Hitesh Mhatre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
