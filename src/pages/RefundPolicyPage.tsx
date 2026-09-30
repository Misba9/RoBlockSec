import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, RefreshCw, AlertCircle, FileText, Mail, Phone, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-gray-300">
      <Helmet>
        <title>Refund Policy | Roblocksec</title>
        <meta 
          name="description" 
          content="Learn about Roblocksec's official refund and cancellation policy for cybersecurity services, training programs, and SaaS software licenses." 
        />
      </Helmet>

      <PageHero 
        title="Refund & Cancellation Policy" 
        subtitle="Transparent, fair, and standardized guidelines for all our clients, learners, and partners." 
      />

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-12"
        >
          {/* Section 1: Introduction */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <FileText size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white">1. Overview</h2>
            </div>
            <p className="leading-relaxed">
              At <strong className="text-white">Roblocksec LLP</strong>, we are committed to delivering enterprise-grade cybersecurity solutions, offensive security assessments, digital forensic investigations, and industry-standard training. This Refund Policy outlines the terms and conditions governing refund requests, service cancellations, and course withdrawals across our service lines.
            </p>
          </div>

          {/* Section 2: Professional Cybersecurity Services */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white">2. Cybersecurity Consulting & VAPT Engagements</h2>
            </div>
            <div className="space-y-4 leading-relaxed">
              <p>
                Professional security services (including <strong>Red Teaming, Web/Mobile/Network VAPT, Cloud Audits, and IRDF Forensics</strong>) involve dedicated allocation of certified security researchers and laboratory environments.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-white">Before Project Initiation:</strong> If a cancellation notice is submitted in writing at least 7 business days prior to the agreed assessment kick-off date, a full refund (less administrative/banking processing fees) will be granted.</li>
                <li><strong className="text-white">Active Engagements:</strong> Once reconnaissance, penetration testing, or forensic discovery has commenced, fees paid are non-refundable due to the proprietary labor and reporting completed.</li>
                <li><strong className="text-white">Service Retainers (SOC & Incident Response):</strong> Monthly/quarterly retainer subscriptions are non-refundable once the billing cycle has begun; however, clients may cancel upcoming renewal cycles with 30 days written notice.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Training & Certification Programs */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <RefreshCw size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white">3. Training & Certification Bootcamps</h2>
            </div>
            <div className="space-y-4 leading-relaxed">
              <p>
                For individual students and corporate teams enrolled in our educational offerings:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-white">Withdrawal &gt; 5 Days Before Batch Start:</strong> Eligible for a <strong>100% refund</strong> or free transfer to a future scheduled cohort.</li>
                <li><strong className="text-white">Withdrawal Within 5 Days Before Batch Start:</strong> Eligible for a <strong>75% refund</strong> or one-time batch transfer.</li>
                <li><strong className="text-white">After Batch Commencement:</strong> No refunds are issued after access to course materials, private Discord/Slack arenas, or lab VM environments has been provisioned.</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Product Subscriptions (Data Rakshak, BreachSimu, BountyLab) */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Clock size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white">4. SaaS Products & Platform Licenses</h2>
            </div>
            <div className="space-y-4 leading-relaxed">
              <p>
                Subscriptions for our proprietary software tools (including Data Rakshak, BreachSimu, BountyLab, and Darkweb Sentinel):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-white">14-Day Satisfaction Guarantee:</strong> For new software license purchases, if you encounter technical discrepancies that our support team cannot resolve, you are entitled to a full refund within 14 days of purchase.</li>
                <li><strong className="text-white">Subscription Renewals:</strong> You can cancel auto-renewal at any time via your account portal prior to the renewal date.</li>
              </ul>
            </div>
          </div>

          {/* Section 5: How to Request a Refund */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="text-brand-cyan" size={22} />
              <h3 className="text-xl font-display font-bold text-white">How to Submit a Refund Request</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              To request a refund or cancellation, please email our finance and billing department with your invoice number, registered email, and reason for cancellation:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="text-brand-cyan" size={18} />
                <a href="mailto:info@roblocksec.com" className="text-brand-cyan hover:underline">info@roblocksec.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brand-cyan" size={18} />
                <span>+91 93470 12418</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              *Approved refunds are credited back to the original method of payment within 5–7 business days.
            </p>
          </div>

          <div className="text-center pt-6">
            <Button href="/contact" variant="primary">Contact Support & Billing</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
