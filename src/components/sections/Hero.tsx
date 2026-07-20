import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight, BookOpen, GraduationCap, Brain } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative lg:h-screen lg:min-h-[700px] flex items-center pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden bg-white">
      {/* Background Ambience - Subtle Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(14,165,233,0.08)_0%,transparent_100%)]"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-50/50 blur-[120px] rounded-full -z-10 animate-pulse"></div>

      <div className="section-container !py-0 lg:!py-16 relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 order-2 lg:order-1 mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-1 bg-primary-500 rounded-full"></span>
              <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-xs">Assistant Professor</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight leading-[0.95] mb-8 text-slate-900">
              Chaitali <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
                Hitesh Mhatre
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 sm:px-5 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                <GraduationCap className="text-primary-600" size={20} />
                <span className="text-xs sm:text-base lg:text-lg font-bold text-slate-800">Computer Engineering</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 sm:px-5 sm:py-2.5 bg-primary-600 text-white shadow-xl shadow-primary-500/20 rounded-2xl">
                <GraduationCap size={18} />
                <span className="text-xs sm:text-base lg:text-lg font-bold">PHD in IT - Pursuing in NMIMS</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 sm:px-5 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                <BookOpen className="text-primary-600" size={18} />
                <span className="text-xs sm:text-base lg:text-lg font-bold text-slate-800">Research Scholar</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed mb-10 font-medium">
              Specializing in <span className="text-slate-900 font-bold">Machine Learning</span>, 
              <span className="text-slate-900 font-bold ml-1">Data Science</span>, and 
              <span className="text-slate-900 font-bold ml-1">Blockchain</span>. 
              Bridging academic excellence with industrial innovation.
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.a 
                href="https://drive.google.com/file/d/1LQKH6_6U9Q932Y273ygIOjKR_plvD2Dr/view"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4.5 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-slate-900/20 group hover:bg-primary-600 transition-all duration-300"
              >
                <FileText size={22} /> 
                Download CV
              </motion.a>
              
              <a 
                href="#about"
                className="px-10 py-4.5 rounded-2xl border-2 border-slate-100 font-bold text-slate-700 hover:border-primary-500 hover:text-primary-600 transition-all flex items-center gap-3 group bg-white shadow-sm"
              >
                View Portfolio <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[320px] lg:max-w-[420px]"
          >
            {/* Image Frame - Large and Premium */}
            <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-slate-200 lg:rotate-2">
              <img 
                src="https://i.ibb.co/84znx33W/chaitalimhatre.jpg" 
                alt="Chaitali Hitesh Mhatre"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-3xl backdrop-blur-2xl bg-white/80 border-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <Brain size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600 mb-1">Current Research</p>
                      <p className="text-base font-black text-slate-900 leading-none">AIML</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Decorative elements */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary-50 rounded-full -z-10 animate-pulse opacity-60"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-50 rounded-full -z-10 animate-float opacity-60"></div>
            
            {/* Floating Stats or Tags */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute hidden lg:flex -left-10 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 z-20 items-center gap-3"
            >
              <div className="w-2 h-8 bg-primary-500 rounded-full"></div>
              <span className="font-bold text-slate-700 uppercase tracking-tighter">AI Expert</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
