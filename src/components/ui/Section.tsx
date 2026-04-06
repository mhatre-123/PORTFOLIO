import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left', light = false }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`chip mb-4 ${light ? 'bg-white/10 text-primary-200' : 'bg-primary-50 text-primary-600'}`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-sans font-bold leading-tight ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className={i === title.split(' ').length - 1 ? 'text-primary-500' : ''}>
            {word}{' '}
          </span>
        ))}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-1.5 mt-4 rounded-full bg-gradient-to-r from-primary-500 to-indigo-500 ${align === 'center' ? 'mx-auto' : ''}`}
      ></motion.div>
    </div>
  );
};

export const PremiumCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass rounded-3xl p-8 card-hover ${className}`}
  >
    {children}
  </motion.div>
);
