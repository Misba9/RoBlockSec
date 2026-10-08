import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, FileText, AlertTriangle, CheckCircle2 } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-gray-300">
      <Helmet>
        <title>Terms & Conditions | Roblocksec</title>
        <meta 
          name="description" 
          content="Review the terms, conditions, and legal service agreements for Roblocksec cybersecurity services and platforms." 
        />
      </Helmet>

      <PageHero 
        title="Terms & Conditions" 
        subtitle="Standard Terms of Service and Authorized Engagement Protocols." 
      />

      <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-16 md:py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] border border-white/5 space-y-6 sm:space-y-10 text-xs sm:text-base"
        >
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing our website, purchasing cybersecurity services, or utilizing platforms engineered by <strong>Roblocksec LLP</strong>, you agree to be bound by these Terms & Conditions, all applicable laws, and relevant regulatory mandates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-3">2. Authorization & Rules of Engagement for Security Testing</h2>
            <p className="leading-relaxed mb-3">
              For all offensive security services, Red Teaming, and Penetration Testing (VAPT):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients must explicitly possess lawful authority and ownership over the target domains, IP ranges, and cloud assets submitted for evaluation.</li>
              <li>A formal signed Rules of Engagement (RoE) document must precede any intrusive assessment.</li>
              <li>Roblocksec operates strictly within defined assessment windows to prevent unintended denial-of-service or disruption to client business functions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-3">3. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              All proprietary source code, vulnerability taxonomies, custom exploit payloads, brand assets, logos, and curriculum materials remain the exclusive intellectual property of Roblocksec LLP. Client audit deliverables and customized security reports become the confidential property of the client upon receipt of full payment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-3">4. Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall Roblocksec LLP or its directors, employees, or partners be liable for indirect, incidental, special, or consequential damages resulting from unauthorized third-party intrusions, software bugs discovered during assessments, or misuse of testing tools outside authorized scopes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-3">5. Governing Law & Jurisdiction</h2>
            <p className="leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad / Puducherry, India.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
