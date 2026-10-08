import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHero from '../../components/ui/PageHero';
import { FAQ_DATA } from '../../constants';
import FAQ from '../../components/shared/FAQ';
import Button from '../../components/ui/Button';
import { Code, BrainCircuit, Bot, Users } from 'lucide-react';

const ProductDevelopmentPage: React.FC = () => {
  const pageTitle = "Cybersecurity Product Development & Research";
  const pageDescription = "Partner with us to build custom cybersecurity tools, leverage AI-driven threat detection, and conduct cutting-edge research into emerging threats.";

  const sections = [
    {
      icon: Code,
      title: 'Custom Tool & Platform Development',
      description: 'We design and build bespoke security solutions from the ground up. Whether you need a specialized automation script, a custom security dashboard, or a full-fledged security platform, our developers can create tools that integrate seamlessly into your workflow and solve your unique challenges.'
    },
    {
      icon: BrainCircuit,
      title: 'AI-Driven Threat Detection Systems',
      description: 'Our R&D lab is at the forefront of applying machine learning to cybersecurity. We develop predictive models that can identify novel threats, detect anomalous behavior in real-time, and automate the triage of security alerts with high accuracy, reducing noise for your security team.'
    },
    {
      icon: Bot,
      title: 'Zero-Day & Vulnerability Research',
      description: 'We have a dedicated team that proactively researches new vulnerabilities in widely used software and hardware. Our goal is to discover and responsibly disclose zero-day threats, contributing to the security of the broader digital ecosystem while providing our clients with advanced warning.'
    },
    {
      icon: Users,
      title: 'Collaboration & Partnerships',
      description: 'We believe in the power of collaboration. We partner with academic institutions, open-source projects, and other security firms to share knowledge and advance the state of the art in cybersecurity. We are always open to new research partnerships.'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>{pageTitle} | Roblocksec</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <PageHero title="Product Development & Research" subtitle="Building the Future of Cybersecurity, Today." />
      
      <div className="py-8 sm:py-16 md:py-20 container mx-auto px-3 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center mb-8 sm:mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <h2 className="text-xl sm:text-3xl font-display font-bold text-white light:text-light-text mb-2 sm:mb-4">Innovation in Defense</h2>
                <p className="text-gray-300 light:text-gray-600 mb-3 sm:mb-4 text-xs sm:text-base leading-relaxed">
                    At Roblocksec, we don't just use security tools—we build them. Our research and development arm is dedicated to creating the next generation of cybersecurity solutions. We turn groundbreaking ideas into practical, powerful tools that give our clients a decisive advantage over adversaries.
                </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <img src="/rd-lab.jpg" alt="Roblocksec Research Lab" className="rounded-xl sm:rounded-2xl shadow-xl shadow-brand-purple/20 border border-white/10 object-cover w-full h-[180px] sm:h-[300px] md:h-[380px]" />
            </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-8">
            {sections.map((section, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-bg p-3 sm:p-6 md:p-8 rounded-xl glowing-border flex flex-col sm:flex-row items-start gap-2 sm:gap-6"
                >
                    <section.icon className="w-5 h-5 sm:w-12 sm:h-12 text-brand-cyan light:text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="text-xs sm:text-xl font-bold font-display text-white light:text-light-text mb-1 sm:mb-2">{section.title}</h3>
                        <p className="text-gray-400 light:text-gray-600 text-[9px] sm:text-sm leading-snug sm:leading-relaxed">{section.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
        <div className="text-center mt-6 sm:mt-16">
            <Button href="/contact" variant="primary" className="text-xs sm:text-base py-2 sm:py-3.5 px-4 sm:px-8">Partner With Us for Research</Button>
        </div>
      </div>
      
      <FAQ items={FAQ_DATA['product-development']} />
    </div>
  );
};

export default ProductDevelopmentPage;
