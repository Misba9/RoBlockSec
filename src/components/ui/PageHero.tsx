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
    <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 md:pt-44 md:pb-24 overflow-hidden bg-brand-dark min-h-[35vh] sm:min-h-[45vh] md:min-h-[55vh] flex items-center border-b border-white/5">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-cyan/5 to-transparent pointer-events-none" />
      <motion.div style={{ y: y1 }} className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-brand-cyan/15 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-brand-purple/15 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-6 sm:gap-8 xl:gap-12 w-full">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-[7rem] font-display font-black text-white uppercase tracking-tight sm:tracking-tighter leading-[1.02] sm:leading-[0.88] break-words"
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl border-l-2 sm:border-l-4 border-brand-purple pl-4 sm:pl-6 md:pl-8 py-1 sm:py-2"
        >
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 font-body font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;

