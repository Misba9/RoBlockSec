import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { DEMO_CASE_STUDIES } from '../constants';
import Button from '../components/ui/Button';

const CaseStudiesPage: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

  return (
    <div>
        <PageHero
            title="Case Studies"
            subtitle="See how we've helped organizations like yours overcome their biggest security challenges."
        />
        <div className="py-6 sm:py-16 md:py-20">
            <motion.div
                className="container mx-auto px-3 sm:px-6 grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {DEMO_CASE_STUDIES.map((study, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-brand-navy rounded-xl overflow-hidden glowing-border group flex flex-col"
                    >
                        <div className="relative">
                            <img src={study.image} alt={study.title} className="w-full h-24 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute top-2 right-2 bg-brand-cyan/80 text-brand-dark text-[8px] sm:text-xs font-bold uppercase px-1.5 py-0.5 rounded">{study.category}</div>
                        </div>
                        <div className="p-2.5 sm:p-6 flex flex-col flex-grow">
                            <h3 className="text-xs sm:text-xl font-bold font-display text-white mb-2 line-clamp-2">{study.title}</h3>
                            <div className="flex-grow"></div>
                            <Button href="#" variant="secondary" className="w-full text-[9px] sm:text-sm py-1.5 sm:py-2.5">Read Case Study</Button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  );
};

export default CaseStudiesPage;
