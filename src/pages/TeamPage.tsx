import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { DEMO_TEAM } from '../constants';
import Button from '../components/ui/Button';

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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <PageHero 
        title="Our Team"
        subtitle="Meet the elite cybersecurity professionals protecting the digital world."
      />
      <div className="py-20 container mx-auto px-6">
        {DEMO_TEAM.filter(m => m.category === 'founding').length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold text-white mb-8 border-l-4 border-brand-cyan pl-6">Founding Directorate</h2>
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {DEMO_TEAM.filter(m => m.category === 'founding').map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group overflow-hidden rounded-[2rem] bg-brand-navy glowing-border text-center w-full sm:w-[320px]"
                >
                  <div className="w-full h-80 bg-white flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-navy2 to-brand-dark flex flex-col items-center justify-center relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 border border-brand-cyan/35 flex items-center justify-center shadow-[0_0_20px_rgba(232,80,0,0.15)] relative">
                          <span className="text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                            {getInitials(member.name)}
                          </span>
                          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-cyan animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-xl font-bold font-display text-white">{member.name}</h3>
                    <p className="text-brand-cyan text-sm">{member.role}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h4 className="text-lg font-bold text-white">Specialization</h4>
                    <p className="text-brand-cyan text-center">{member.specialization}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {DEMO_TEAM.filter(m => m.category === 'vanguard').length > 0 && (
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-8 border-l-4 border-brand-purple pl-6">Nexalith Vanguard</h2>
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {DEMO_TEAM.filter(m => m.category === 'vanguard').map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group overflow-hidden rounded-[2rem] bg-brand-navy glowing-border text-center w-full sm:w-[280px]"
                >
                  <div className="w-full h-72 bg-white flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-navy2 to-brand-dark flex flex-col items-center justify-center relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 border border-brand-cyan/35 flex items-center justify-center shadow-[0_0_20px_rgba(232,80,0,0.15)] relative">
                          <span className="text-xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                            {getInitials(member.name)}
                          </span>
                          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-xl font-bold font-display text-white">{member.name}</h3>
                    <p className="text-brand-cyan text-sm">{member.role}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h4 className="text-lg font-bold text-white">Specialization</h4>
                    <p className="text-brand-cyan text-center">{member.specialization}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        <div className="text-center mt-20">
          <Button href="/careers" variant="primary" className="text-xl">
            Join Our Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
