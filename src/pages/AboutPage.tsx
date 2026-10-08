import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { CORE_VALUES, TIMELINE_MILESTONES } from '../constants';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <Helmet>
        <title>About Us | Roblocksec Cybersecurity</title>
        <meta name="description" content="Discover Roblocksec's mission, vision, core values, and journey as a premier cybersecurity consulting and training enterprise." />
      </Helmet>

      <PageHero 
        title="About Roblocksec"
        subtitle="At Roblocksec, we protect digital ecosystems with intelligence, innovation, and integrity."
      />

      <section className="py-8 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-xl sm:text-3xl font-display font-bold text-white mb-2 sm:mb-4">Our Mission &amp; Vision</h2>
              <p className="text-brand-cyan font-semibold text-sm sm:text-lg mb-2 sm:mb-4">To make digital security accessible, automated, and adaptive.</p>
              <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
                Founded by a team of elite cybersecurity veterans, Roblocksec was born from a shared passion for solving complex security challenges. We saw a world becoming increasingly interconnected, yet dangerously vulnerable. Our mission is to provide proactive, intelligence-driven security solutions that empower organizations to innovate fearlessly and operate with confidence in the digital age. We envision a future where robust security is not a barrier, but an enabler of progress.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src="/cyber-lab.jpg" alt="Roblocksec Cyber Lab" className="rounded-xl sm:rounded-2xl shadow-xl shadow-brand-cyan/20 border border-white/10 object-cover w-full h-[180px] sm:h-[320px] md:h-[380px]" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 md:py-20 bg-brand-navy/50">
        <div className="container mx-auto px-3 sm:px-6 text-center">
          <h2 className="text-xl sm:text-3xl font-display font-bold text-white mb-6 sm:mb-12">Our Core Values</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {CORE_VALUES.map(value => (
              <motion.div key={value.title} variants={itemVariants} className="bg-brand-navy p-3.5 sm:p-6 rounded-xl sm:rounded-2xl glowing-border flex flex-col items-center text-center">
                <value.icon className="w-7 h-7 sm:w-12 sm:h-12 text-brand-cyan mb-2 sm:mb-4" />
                <h3 className="text-sm sm:text-xl font-bold text-white font-display">{value.title}</h3>
                <p className="text-gray-300 mt-1 sm:mt-2 text-[11px] sm:text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-6">
          <h2 className="text-xl sm:text-3xl font-display font-bold text-white text-center mb-8 sm:mb-16">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Center Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-brand-cyan/30 -translate-x-1/2"></div>
            
            {/* Mobile Left Timeline line */}
            <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-brand-cyan/30"></div>

            {TIMELINE_MILESTONES.map((item, index) => (
              <div key={item.year} className="relative mb-6 sm:mb-16 last:mb-0">
                {/* Desktop alternating layout */}
                <div className="hidden md:flex items-center min-h-[100px]">
                  {index % 2 === 0 ? (
                    // Left side content for even indices
                    <>
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.5 }}
                        className="w-1/2 pr-8 text-right"
                      >
                        <p className="text-lg font-bold font-display text-white">
                          {item.event}
                          {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-brand-cyan hover:underline text-sm font-normal">
                              View Project
                            </a>
                          )}
                        </p>
                      </motion.div>
                      <div className="w-1/2 flex justify-start items-center">
                        <div className="z-10 flex items-center justify-center w-24 h-10 rounded-md bg-brand-cyan shadow-lg shadow-brand-cyan/50">
                          <p className="text-brand-dark font-bold font-mono">{item.year}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Right side content for odd indices
                    <>
                      <div className="w-1/2 flex justify-end items-center">
                        <div className="z-10 flex items-center justify-center w-24 h-10 rounded-md bg-brand-cyan shadow-lg shadow-brand-cyan/50">
                          <p className="text-brand-dark font-bold font-mono">{item.year}</p>
                        </div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.5 }}
                        className="w-1/2 pl-8 text-left"
                      >
                        <p className="text-lg font-bold font-display text-white">
                          {item.event}
                          {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-brand-cyan hover:underline text-sm font-normal">
                              View Project
                            </a>
                          )}
                        </p>
                      </motion.div>
                    </>
                  )}
                </div>
                
                {/* Mobile clean left-aligned timeline card layout */}
                <div className="md:hidden flex items-start gap-3 pl-1">
                  <div className="z-10 flex-shrink-0 flex items-center justify-center w-12 h-7 rounded-md bg-brand-cyan shadow-md shadow-brand-cyan/30 mt-0.5">
                    <p className="text-brand-dark font-bold font-mono text-[10px]">{item.year}</p>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.4 }}
                    className="glass-card p-3 rounded-lg border border-white/10 flex-1"
                  >
                    <p className="text-xs font-bold font-display text-white">
                      {item.event}
                    </p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-1 text-brand-cyan hover:underline text-[11px] font-semibold">
                        View Project &rarr;
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

