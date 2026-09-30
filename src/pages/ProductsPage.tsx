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

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-cyan/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className={`w-20 h-20 rounded-2xl ${product.bgClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <product.icon className={`${product.colorClass} w-10 h-10`} />
                    </div>
                    {product.badge && (
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-400 text-base lg:text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {product.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className={`w-2 h-2 rounded-full shrink-0 ${product.dotClass}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  {product.link ? (
                    <Button href={product.link} variant="primary" target="_blank">Visit Platform</Button>
                  ) : (
                    <Button href="/contact" variant="primary">Request Demo</Button>
                  )}
                  <Button href="/contact" variant="outline">Learn More</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Vision Section */}
      <section className="py-24 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Engineering the Future of Defense</h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            Our product development team is constantly pushing the boundaries of what's possible in cybersecurity. We don't just build tools; we build intelligent ecosystems that adapt and evolve alongside the threats they defend against.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
