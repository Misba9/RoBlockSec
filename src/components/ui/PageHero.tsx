import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative pt-16 pb-8 sm:pt-28 sm:pb-14 md:pt-36 md:pb-20 overflow-hidden bg-brand-dark border-b border-white/5">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-cyan/5 to-transparent pointer-events-none" />
      <motion.div style={{ y: y1 }} className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-brand-cyan/15 blur-[90px] rounded-full mix-blend-screen pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-brand-purple/15 blur-[90px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-10 w-full">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tight leading-tight sm:leading-[0.92] break-words"
          >
            {title.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                <span className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan to-brand-blue" : ""}>
                  {word}
                </span>{' '}
              </React.Fragment>
            ))}
          </motion.h1>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg border-l-2 sm:border-l-3 border-brand-purple pl-3 sm:pl-5 py-0.5"
        >
          <p className="text-xs sm:text-sm md:text-base text-gray-300 font-body font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;

