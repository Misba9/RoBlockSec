import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/ui/PageHero';
import { ALL_SERVICES, FAQ_DATA } from '../../constants';
import Button from '../../components/ui/Button';
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/shared/FAQ';

const RedTeamingPage: React.FC = () => {
  const service = ALL_SERVICES.find(s => s.slug === 'red-teaming');
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
        <title>Red Teaming (VAPT) Services | Roblocksec</title>
        <meta name="description" content="Simulate real-world cyberattacks with Roblocksec's expert Red Teaming and VAPT services. Uncover vulnerabilities in your web apps, mobile apps, network, and more." />
      </Helmet>
      <PageHero title={service.title} subtitle={service.description} />
      <div className="py-8 sm:py-16 md:py-20 container mx-auto px-3 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-xl sm:text-3xl font-display font-bold text-white light:text-light-text mb-2 sm:mb-4">Our Offensive Security Domains</h2>
            <p className="text-gray-300 light:text-gray-600 text-xs sm:text-base leading-relaxed">We provide a holistic approach to vulnerability assessment and penetration testing, covering every critical component of your digital infrastructure. Explore our specialized services to see how we can fortify your defenses.</p>
        </div>
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
              <div className="card-bg p-4 sm:p-6 rounded-xl glowing-border h-full flex flex-col text-center items-center">
                <sub.icon className="w-10 h-10 sm:w-14 sm:h-14 text-brand-cyan light:text-brand-blue mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-bold font-display text-white light:text-light-text mb-2">{sub.name}</h3>
                <div className="flex-grow"></div>
                <Button href={`/services/${service.slug}/${sub.slug}`} variant="outline" className="mt-4 text-xs sm:text-sm py-2 px-4">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <FAQ items={FAQ_DATA['red-teaming']} />
    </div>
  );
};

export default RedTeamingPage;
