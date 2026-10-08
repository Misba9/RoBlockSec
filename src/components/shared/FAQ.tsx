import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section className="py-8 sm:py-16 md:py-20 page-bg">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container mx-auto px-3 sm:px-6">
        <h2 className="text-base sm:text-3xl font-display font-bold text-white light:text-light-text text-center mb-4 sm:mb-12">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-2 sm:space-y-4">
          {items.map((item, index) => (
            <div key={index} className="glowing-border card-bg rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-2.5 sm:p-6 text-left flex justify-between items-center"
              >
                <h3 className="text-xs sm:text-lg font-semibold text-white light:text-light-text pr-2.5">{item.q}</h3>
                {activeIndex === index ? <ChevronUp className="text-brand-cyan light:text-brand-blue shrink-0" size={15} /> : <ChevronDown className="text-brand-cyan light:text-brand-blue shrink-0" size={15} />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 sm:px-6 sm:pb-6 text-gray-300 light:text-gray-600 text-[10px] sm:text-sm leading-snug sm:leading-relaxed">
                      <p>{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
