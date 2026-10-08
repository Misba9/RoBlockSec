import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { ALL_SERVICES } from '../constants';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Tactical Cybersecurity Services | Roblocksec</title>
        <meta name="description" content="Explore Roblocksec's strategic security domains: Red Teaming, Blue Teaming, GRC, Digital Forensics, Product Development, and Academy Training." />
      </Helmet>

      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none z-0"></div>
      
      <PageHero 
        title="Tactical Services"
        subtitle="Next-generation cybersecurity matrices engineered for total digital dominance and defense."
      />

      <div className="py-8 sm:py-16 md:py-24 relative z-10 px-3 sm:px-6 md:px-12 lg:px-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-auto md:auto-rows-[380px]">
          {ALL_SERVICES.map((service, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div 
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className={`glass-card rounded-xl sm:rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-8 flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-500 relative overflow-hidden ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-15 group-hover:scale-110 transition-all duration-700 rotate-12 pointer-events-none">
                  <service.icon size={isLarge ? 220 : 160} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center mb-3 sm:mb-6 backdrop-blur-md border border-white/10 group-hover:bg-brand-cyan/20 transition-all duration-500">
                    <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-brand-cyan" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-display font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">{service.description}</p>
                </div>

                <div className="relative z-10 mt-4 sm:mt-6">
                  <Button href={`/services/${service.slug}`} variant="outline" className="rounded-full px-4 sm:px-6 py-2 sm:py-2.5 border-white/15 hover:border-brand-cyan group-hover:bg-brand-cyan/10 text-xs sm:text-sm">
                    Initialize <ArrowRight className="inline ml-1.5" size={14} />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

