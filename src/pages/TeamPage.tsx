import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { DEMO_TEAM } from '../constants';
import Button from '../components/ui/Button';
import { Helmet } from 'react-helmet-async';

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
};

const TeamPage: React.FC = () => {
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
        <title>Our Leadership & Cybersecurity Team | Roblocksec</title>
        <meta name="description" content="Meet the leadership, security leads, and researchers defending our clients at Roblocksec." />
      </Helmet>

      <PageHero 
        title="Our Team"
        subtitle="Meet the elite cybersecurity professionals protecting the digital world."
      />
      <div className="py-6 sm:py-16 md:py-20 container mx-auto px-2.5 sm:px-6">
        {DEMO_TEAM.filter(m => m.category === 'founding').length > 0 && (
          <div className="mb-8 sm:mb-16">
            <h2 className="text-base sm:text-3xl font-display font-bold text-white mb-3 sm:mb-8 border-l-3 sm:border-l-4 border-brand-cyan pl-2.5 sm:pl-6">Founding Directorate</h2>
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {DEMO_TEAM.filter(m => m.category === 'founding').map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group overflow-hidden rounded-xl sm:rounded-2xl bg-brand-navy glowing-border flex flex-col w-full max-w-full sm:max-w-[320px]"
                >
                  <div className="w-full h-32 sm:h-60 bg-brand-navy2/60 flex items-center justify-center overflow-hidden relative">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-contain p-1.5 sm:p-2" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-navy2 to-brand-dark flex flex-col items-center justify-center relative">
                        <div className="w-10 h-10 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 border border-brand-cyan/35 flex items-center justify-center shadow-[0_0_20px_rgba(232,80,0,0.15)] relative">
                          <span className="text-sm sm:text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                            {getInitials(member.name)}
                          </span>
                          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-cyan animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-2 sm:p-5 bg-gradient-to-t from-black/90 to-black/60 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs sm:text-lg font-bold font-display text-white leading-tight">{member.name}</h3>
                      <p className="text-brand-cyan text-[10px] sm:text-sm font-semibold mt-0.5 leading-tight">{member.role}</p>
                    </div>
                    {member.specialization && (
                      <div className="mt-1.5 sm:mt-2.5 pt-1.5 sm:pt-2.5 border-t border-white/10">
                        <span className="text-[8px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Specialization</span>
                        <span className="text-[9px] sm:text-xs text-gray-200 mt-0.5 block leading-tight">{member.specialization}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {DEMO_TEAM.filter(m => m.category === 'vanguard').length > 0 && (
          <div className="mb-8 sm:mb-16">
            <h2 className="text-base sm:text-3xl font-display font-bold text-white mb-3 sm:mb-8 border-l-3 sm:border-l-4 border-brand-purple pl-2.5 sm:pl-6">Nexalith Vanguard</h2>
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {DEMO_TEAM.filter(m => m.category === 'vanguard').map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group overflow-hidden rounded-xl sm:rounded-2xl bg-brand-navy glowing-border-purple flex flex-col w-full max-w-full sm:max-w-[320px]"
                >
                  <div className="w-full h-32 sm:h-60 bg-brand-navy2/60 flex items-center justify-center overflow-hidden relative">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-contain p-1.5 sm:p-2" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-navy2 to-brand-dark flex flex-col items-center justify-center relative">
                        <div className="w-10 h-10 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 border border-brand-purple/35 flex items-center justify-center shadow-[0_0_20px_rgba(123,63,160,0.15)] relative">
                          <span className="text-sm sm:text-xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                            {getInitials(member.name)}
                          </span>
                          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-purple animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-2 sm:p-5 bg-gradient-to-t from-black/90 to-black/60 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs sm:text-lg font-bold font-display text-white leading-tight">{member.name}</h3>
                      <p className="text-brand-purple2 text-[10px] sm:text-sm font-semibold mt-0.5 leading-tight">{member.role}</p>
                    </div>
                    {member.specialization && (
                      <div className="mt-1.5 sm:mt-2.5 pt-1.5 sm:pt-2.5 border-t border-white/10">
                        <span className="text-[8px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Specialization</span>
                        <span className="text-[9px] sm:text-xs text-gray-200 mt-0.5 block leading-tight">{member.specialization}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {DEMO_TEAM.filter(m => m.category === 'intern').length > 0 && (
          <div className="mt-8 sm:mt-16">
            <h2 className="text-base sm:text-3xl font-display font-bold text-white mb-3 sm:mb-8 border-l-3 sm:border-l-4 border-brand-cyan pl-2.5 sm:pl-6">Interns</h2>
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {DEMO_TEAM.filter(m => m.category === 'intern').map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group overflow-hidden rounded-xl sm:rounded-2xl bg-brand-navy glowing-border flex flex-col w-full max-w-full sm:max-w-[320px]"
                >
                  <div className="w-full h-32 sm:h-60 bg-brand-navy2/60 flex items-center justify-center overflow-hidden relative">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-contain p-1.5 sm:p-2" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-navy2 to-brand-dark flex flex-col items-center justify-center relative">
                        <div className="w-10 h-10 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 border border-brand-cyan/35 flex items-center justify-center shadow-[0_0_20px_rgba(232,80,0,0.15)] relative">
                          <span className="text-sm sm:text-xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                            {getInitials(member.name)}
                          </span>
                          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-cyan animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-2 sm:p-5 bg-gradient-to-t from-black/90 to-black/60 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs sm:text-lg font-bold font-display text-white leading-tight">{member.name}</h3>
                      <p className="text-brand-cyan text-[10px] sm:text-sm font-semibold mt-0.5 leading-tight">{member.role}</p>
                    </div>
                    {member.specialization && (
                      <div className="mt-1.5 sm:mt-2.5 pt-1.5 sm:pt-2.5 border-t border-white/10">
                        <span className="text-[8px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Specialization</span>
                        <span className="text-[9px] sm:text-xs text-gray-200 mt-0.5 block leading-tight">{member.specialization}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        <div className="text-center mt-8 sm:mt-16">
          <Button href="/careers" variant="primary" className="text-xs sm:text-base px-5 py-2 sm:px-8 sm:py-3">
            Join Our Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;

