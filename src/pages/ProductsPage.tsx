import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, Award, Eye, ShieldAlert, Target } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { Helmet } from 'react-helmet-async';

const products = [
  {
    title: 'Data Rakshak',
    badge: 'Enterprise Privacy Suite',
    description: 'A comprehensive data protection and privacy management platform designed to help organizations secure their sensitive information and comply with global data regulations (DPDPA, GDPR, HIPAA).',
    icon: Database,
    link: 'https://datarakshak.in/',
    features: ['Automated Data Discovery', 'DPDPA & GDPR Compliance', 'Risk Assessment Engine', 'Audit-Ready Reporting'],
    colorClass: 'text-brand-cyan',
    bgClass: 'bg-brand-cyan/10',
    borderClass: 'border-brand-cyan/30',
    dotClass: 'bg-brand-cyan'
  },
  {
    title: 'BreachSimu',
    badge: 'Adversary Simulation',
    description: 'Advanced Breach and Attack Simulation (BAS) platform that enables organizations to continuously test their security posture against the latest real-world threat vectors and ransomware playbooks.',
    icon: Zap,
    features: ['Automated Red Teaming', 'Adversary Emulation', 'Multi-Vector Validation', 'Actionable Remediation Guidance'],
    colorClass: 'text-brand-purple',
    bgClass: 'bg-brand-purple/10',
    borderClass: 'border-brand-purple/30',
    dotClass: 'bg-brand-purple'
  },
  {
    title: 'BountyLab',
    badge: 'Crowdsourced Security & CTF',
    description: 'A next-generation Bug Bounty and Vulnerability Coordination arena enabling enterprises to run private bug bounty programs, engage elite ethical hackers, and host competitive CTF challenge labs.',
    icon: Award,
    features: ['Managed Bug Bounty Programs', 'Vulnerability Triage & Validation', 'CTF Training Arenas', 'Hacker Leaderboards & Payouts'],
    colorClass: 'text-brand-cyan',
    bgClass: 'bg-brand-cyan/10',
    borderClass: 'border-brand-cyan/30',
    dotClass: 'bg-brand-cyan'
  },
  {
    title: 'Darkweb Monitoring Tool',
    badge: 'Threat Intelligence Engine',
    description: 'Continuous deep and dark web surveillance platform that proactively searches underground forums, paste sites, and threat actor markets for stolen corporate credentials, leaked databases, and brand impersonation.',
    icon: Eye,
    features: ['24/7 Dark Web Scanning', 'Compromised Credential Alerts', 'Data Leak & Dump Detection', 'Executive Identity Protection'],
    colorClass: 'text-brand-purple',
    bgClass: 'bg-brand-purple/10',
    borderClass: 'border-brand-purple/30',
    dotClass: 'bg-brand-purple'
  }
];

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <Helmet>
        <title>Our Products | Data Rakshak, BreachSimu, BountyLab & Darkweb Monitoring | Roblocksec</title>
        <meta name="description" content="Explore Roblocksec's proprietary cybersecurity platforms: Data Rakshak, BreachSimu, BountyLab Bug Bounty platform, and Darkweb Threat Monitoring Tool." />
      </Helmet>

      <PageHero 
        title="Our Products" 
        subtitle="Innovation-driven security tools engineered for the modern threat landscape." 
      />

      <section className="py-6 sm:py-16 px-2.5 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-white/5 hover:border-brand-cyan/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-2 sm:mb-6 flex-wrap">
                    <div className={`w-7 h-7 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl ${product.bgClass} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <product.icon className={`${product.colorClass} w-3.5 h-3.5 sm:w-7 sm:h-7`} />
                    </div>
                    {product.badge && (
                      <span className="text-[8px] sm:text-xs font-mono px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-right">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs sm:text-2xl lg:text-3xl font-display font-bold text-white mb-1 sm:mb-3">{product.title}</h3>
                  <p className="text-gray-300 text-[10px] sm:text-sm lg:text-base mb-2.5 sm:mb-6 leading-snug sm:leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2.5 mb-3 sm:mb-6">
                    {product.features.map(feature => (
                      <li key={feature} className="flex items-center gap-1.5 text-gray-300 text-[9px] sm:text-sm">
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full shrink-0 ${product.dotClass}`}></div>
                        <span className="truncate sm:whitespace-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-4 pt-2 sm:pt-4 border-t border-white/5">
                  {product.link ? (
                    <Button href={product.link} variant="primary" target="_blank" className="text-center justify-center py-1.5 sm:py-2.5 text-[9px] sm:text-sm">Visit Platform</Button>
                  ) : (
                    <Button href="/contact" variant="primary" className="text-center justify-center py-1.5 sm:py-2.5 text-[9px] sm:text-sm">Request Demo</Button>
                  )}
                  <Button href="/contact" variant="outline" className="text-center justify-center py-1.5 sm:py-2.5 text-[9px] sm:text-sm">Learn More</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Vision Section */}
      <section className="py-8 sm:py-16 bg-black/30 border-y border-white/5 px-4 sm:px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 sm:mb-6">Engineering the Future of Defense</h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Our product development team is constantly pushing the boundaries of what's possible in cybersecurity. We don't just build tools; we build intelligent ecosystems that adapt and evolve alongside the threats they defend against.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

