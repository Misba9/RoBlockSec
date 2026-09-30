import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Lock, Eye, FileCheck } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-gray-300">
      <Helmet>
        <title>Privacy Policy | DPDPA & GDPR Compliant | Roblocksec</title>
        <meta 
          name="description" 
          content="Roblocksec Privacy Policy compliant with India's Digital Personal Data Protection Act (DPDPA 2023) and global GDPR standards." 
        />
      </Helmet>

      <PageHero 
        title="Privacy Policy" 
        subtitle="Uncompromising commitment to user privacy, data governance, and regulatory compliance." 
      />

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="text-brand-cyan" size={24} />
              <h2 className="text-2xl font-display font-bold text-white">1. Data Protection Commitment</h2>
            </div>
            <p className="leading-relaxed">
              Roblocksec LLP respects the privacy of our visitors, clients, and partners. This policy describes how we collect, process, store, and safeguard personal data in compliance with India’s <strong>Digital Personal Data Protection Act (DPDPA 2023)</strong> and the <strong>General Data Protection Regulation (GDPR)</strong>.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-brand-purple" size={24} />
              <h2 className="text-2xl font-display font-bold text-white">2. Information We Collect</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Contact & Inquiry Information:</strong> Name, business email, phone number, organization name, and service preferences submitted through our contact forms.</li>
              <li><strong className="text-white">Technical & Usage Telemetry:</strong> IP addresses, browser types, operating systems, and anonymous interaction metrics used exclusively for DDoS mitigation and performance optimization.</li>
              <li><strong className="text-white">Security Assessment Data:</strong> All vulnerability findings, log samples, and system configs shared during security audits are encrypted with AES-256 and treated as strictly confidential under non-disclosure agreements (NDAs).</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Lock className="text-brand-cyan" size={24} />
              <h2 className="text-2xl font-display font-bold text-white">3. How We Use & Protect Data</h2>
            </div>
            <p className="leading-relaxed mb-3">
              We never sell, lease, or monetize your personal information. Data collected is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver requested cybersecurity consulting, VAPT reports, and training materials.</li>
              <li>Authenticate users on our CTF & Bug Bounty platforms (BountyLab).</li>
              <li>Prevent unauthorized attacks, fraud, and brute-force intrusions against our servers.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <FileCheck className="text-emerald-400" size={24} />
              <h2 className="text-2xl font-display font-bold text-white">4. Your Data Rights</h2>
            </div>
            <p className="leading-relaxed">
              Under DPDPA and GDPR, you have the right to request access to, correction of, or complete erasure of your stored personal data. To exercise any of these rights, contact our Data Protection Officer at <a href="mailto:info@roblocksec.com" className="text-brand-cyan hover:underline">info@roblocksec.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
