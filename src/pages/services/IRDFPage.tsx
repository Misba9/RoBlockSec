import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/ui/PageHero';
import { ALL_SERVICES, FAQ_DATA } from '../../constants';
import Button from '../../components/ui/Button';
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/shared/FAQ';

const IRDFPage: React.FC = () => {
  const service = ALL_SERVICES.find(s => s.slug === 'irdf-cyber-crime');
  if (!service) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <Helmet>
        <title>IRDF & Cyber Crime Investigation Services | Roblocksec</title>
        <meta 
          name="description" 
          content="Forensic-grade incident response, digital evidence recovery, chain of custody preservation, and comprehensive cyber crime investigation services by Roblocksec." 
        />
      </Helmet>
      <PageHero title={service.title} subtitle={service.description} />
      <div className="py-20 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold text-white light:text-light-text mb-4">
            Forensic Precision & Adversary Attribution
          </h2>
          <p className="text-gray-300 light:text-gray-600 text-lg">
            When security incidents occur or malicious activities are detected, our certified forensic examiners and cyber crime investigators reconstruct attack timelines, uncover root causes, preserve admissible digital evidence, and neutralize adversary footholds.
          </p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {service.subServices?.map((sub) => (
            <motion.div
              key={sub.slug}
              variants={itemVariants}
              className="h-full"
            >
              <div className="card-bg p-8 rounded-lg glowing-border h-full flex flex-col text-center items-center">
                <sub.icon className="w-16 h-16 text-brand-cyan light:text-brand-blue mb-4" />
                <h3 className="text-xl font-bold font-display text-white light:text-light-text mb-2">{sub.name}</h3>
                <div className="flex-grow"></div>
                <Button href={`/services/${service.slug}/${sub.slug}`} variant="outline" className="mt-6">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <FAQ items={FAQ_DATA['irdf-cyber-crime']} />
    </div>
  );
};

export default IRDFPage;
