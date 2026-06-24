import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { DEMO_TEAM } from '../constants';
import Button from '../components/ui/Button';

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
            <h2 className="text-3xl font-display font-bold text-white mb-8 border-l-4 border-brand-cyan pl-6">Founding Team</h2>
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
                  <div className="w-full h-80 bg-black/25 flex items-center justify-center overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
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

        {DEMO_TEAM.filter(m => m.category === 'new').length > 0 && (
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-8 border-l-4 border-brand-purple pl-6">Core Team</h2>
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {DEMO_TEAM.filter(m => m.category === 'new').map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group overflow-hidden rounded-[2rem] bg-brand-navy glowing-border text-center w-full sm:w-[280px]"
                >
                  <div className="w-full h-72 bg-black/25 flex items-center justify-center overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
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
