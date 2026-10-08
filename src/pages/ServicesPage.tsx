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

      <div className="py-16 sm:py-24 md:py-32 relative z-10 px-4 sm:px-8 md:px-12 lg:px-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-auto md:auto-rows-[400px]">
          {ALL_SERVICES.map((service, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div 
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className={`glass-card rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-500 relative overflow-hidden ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-15 group-hover:scale-110 transition-all duration-700 rotate-12 pointer-events-none">
                  <service.icon size={isLarge ? 260 : 180} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 backdrop-blur-md border border-white/10 group-hover:bg-brand-cyan/20 transition-all duration-500">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-cyan" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">{service.description}</p>
                </div>

                <div className="relative z-10 mt-6 sm:mt-8">
                  <Button href={`/services/${service.slug}`} variant="outline" className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3 border-white/15 hover:border-brand-cyan group-hover:bg-brand-cyan/10 text-sm sm:text-base">
                    Initialize <ArrowRight className="inline ml-2" size={16} />
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

