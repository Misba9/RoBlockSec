import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Zap, Server, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { STATS } from '../constants';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {

  return (
    <div className="overflow-hidden relative bg-brand-dark min-h-screen">
      <Helmet>
        <title>Roblocksec | Future Cybersecurity</title>
        <meta name="description" content="Roblocksec: Leading cybersecurity firm specializing in Red Teaming, Blue Teaming, GRC, and Cybersecurity Product Development. Defend. Detect. Secure." />
      </Helmet>

      {/* Minimal grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,80,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,80,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:64px_64px] pointer-events-none" />

      {/* Spatial Hero Section */}
      <section className="relative min-h-auto md:min-h-[90vh] flex items-center px-3 sm:px-8 md:px-12 lg:px-24 pt-12 sm:pt-20 md:pt-32 pb-6 sm:pb-16">
        <div className="w-full grid lg:grid-cols-12 gap-5 lg:gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 z-10"
          >
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 mb-2.5 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-[9px] sm:text-xs font-mono text-brand-cyan tracking-wider uppercase font-semibold">Est. 2024 · Hyderabad, India</span>
            </div>

            <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.05] sm:leading-[0.9] tracking-tight break-words">
              <span className="text-white">Nexalith</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-orange-400 to-brand-purple">
                Prime.
              </span>
            </h1>

            <p className="mt-2 sm:mt-4 max-w-lg text-[11px] sm:text-sm md:text-base text-gray-300 font-body leading-relaxed">
              The unbreakable foundation of next-gen cyber &mdash; GRC, IoT, OT, OffSec, DevSec, forensics &amp; beyond. First. Strongest. Unmatched.
            </p>
            
            <div className="mt-4 sm:mt-8 flex flex-row items-center gap-2 sm:gap-4 flex-wrap">
              <Button href="/contact" variant="primary" className="text-[11px] sm:text-base py-2 px-3.5 sm:py-3.5 sm:px-7 rounded-full shadow-[0_0_20px_rgba(232,80,0,0.3)] hover:shadow-[0_0_35px_rgba(232,80,0,0.5)] transition-all font-bold">
                Initiate Protocol
              </Button>
              <Button href="/services" variant="outline" className="text-[11px] sm:text-base py-2 px-3 sm:py-3.5 sm:px-6 rounded-full border-white/20 hover:bg-white/5 font-semibold">
                Explore Grid <ArrowRight className="ml-1 inline-block" size={12} />
              </Button>
            </div>

            {/* Classic Mini Deck: 3-column structured overview on mobile */}
            <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 lg:hidden">
              <Link to="/services" className="glass-card p-2 rounded-lg border border-brand-cyan/20 flex flex-col items-center text-center hover:border-brand-cyan/50 transition-all">
                <Shield className="text-brand-cyan w-3.5 h-3.5 mb-1" />
                <span className="text-[10px] font-bold text-white leading-tight">Services</span>
                <span className="text-[8px] font-mono text-gray-400">6 Verticals</span>
              </Link>
              <Link to="/products" className="glass-card p-2 rounded-lg border border-brand-purple/20 flex flex-col items-center text-center hover:border-brand-purple/50 transition-all">
                <Zap className="text-brand-purple w-3.5 h-3.5 mb-1" />
                <span className="text-[10px] font-bold text-white leading-tight">Products</span>
                <span className="text-[8px] font-mono text-gray-400">4 Platforms</span>
              </Link>
              <Link to="/services/training" className="glass-card p-2 rounded-lg border border-orange-500/20 flex flex-col items-center text-center hover:border-orange-500/50 transition-all">
                <Lock className="text-orange-400 w-3.5 h-3.5 mb-1" />
                <span className="text-[10px] font-bold text-white leading-tight">Academy</span>
                <span className="text-[8px] font-mono text-orange-400 font-semibold">Live Labs</span>
              </Link>
            </div>
          </motion.div>

          {/* Animated Desktop Cards */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-3.5 justify-center">

            {/* Services Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card rounded-xl border border-brand-cyan/20 p-4 hover:border-brand-cyan/50 transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                  <Shield className="text-brand-cyan" size={14} />
                </div>
                <span className="text-[11px] font-mono text-brand-cyan/70 uppercase tracking-widest font-bold">Services</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Red Teaming', 'Blue Teaming', 'GRC', 'IoT Security', 'OT Security', 'DevSecOps', 'Digital Forensics', 'Threat Intel'].map((s) => (
                  <span key={s} className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-gray-300 group-hover:border-brand-cyan/30 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Products Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="glass-card rounded-xl border border-brand-purple/20 p-4 hover:border-brand-purple/50 transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                  <Zap className="text-brand-purple" size={14} />
                </div>
                <span className="text-[11px] font-mono text-brand-purple/70 uppercase tracking-widest font-bold">Products</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { name: 'Data Rakshak', tag: 'Data Privacy Platform' },
                  { name: 'BreachSimu', tag: 'Attack Simulation' },
                  { name: 'BountyLab & CTF', tag: 'Bug Bounty · 2026' },
                ].map((p) => (
                  <div key={p} className="flex items-center justify-between">
                    <span className="text-xs text-white font-medium">{p.name}</span>
                    <span className="text-[10px] text-gray-400">{p.tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Courses Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="glass-card rounded-xl border border-orange-500/20 p-4 hover:border-orange-500/40 transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Lock className="text-orange-400" size={14} />
                </div>
                <span className="text-[11px] font-mono text-orange-400/80 uppercase tracking-widest font-bold">Courses</span>
                <span className="ml-auto text-[9px] px-1.5 py-0.2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold">Live</span>
              </div>
              <div className="space-y-1.5">
                {[
                  'Offensive Security Specialist',
                  'Certified SOC Analyst',
                  'Cyber Crime Investigation & DF',
                  'Cyber Product Development',
                ].map((c) => (
                  <div key={c} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-orange-400/70" />
                    <span className="text-[11px] text-gray-300">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Asymmetric Bento Box Services - Classic 2-column mobile structure */}
      <section className="py-6 sm:py-16 md:py-24 relative z-10 px-3 sm:px-8 md:px-12 lg:px-24 overflow-hidden">
         <div className="mb-4 sm:mb-12 relative">
            <h2 className="hidden sm:block text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-display font-black text-white opacity-5 uppercase tracking-widest absolute -top-8 sm:-top-10 lg:-top-20 left-2 sm:left-4 lg:left-10 select-none pointer-events-none truncate max-w-full">
              Capabilities
            </h2>
            <h2 className="text-base sm:text-2xl md:text-4xl font-display font-bold text-white relative z-10 border-l-2 sm:border-l-3 border-brand-cyan pl-2.5 sm:pl-4">Strategic Verticals</h2>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-5 auto-rows-auto md:auto-rows-[300px]">
            {/* Bento Item 1: Large Span */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2 md:col-span-2 md:row-span-2 glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-3.5 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-brand-cyan/50 transition-all duration-300"
            >
               <div className="absolute top-0 right-0 p-3 sm:p-8 opacity-5 sm:opacity-10 group-hover:opacity-15 transition-all duration-500 pointer-events-none">
                 <Shield className="w-20 h-20 sm:w-48 sm:h-48" />
               </div>
               <div className="relative z-10">
                 <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brand-cyan/20 flex items-center justify-center mb-2.5 sm:mb-5 border border-brand-cyan/30">
                   <Shield className="text-brand-cyan w-4 h-4 sm:w-6 sm:h-6"/>
                 </div>
                 <h3 className="text-sm sm:text-2xl md:text-3xl font-display font-bold text-white mb-1.5 sm:mb-3">Offensive Security Operations</h3>
                 <p className="text-gray-300 text-[11px] sm:text-sm md:text-base max-w-md leading-relaxed">Military-grade red teaming and simulated adversarial engagements to expose critical vulnerabilities before they are exploited.</p>
               </div>
               <div className="relative z-10 mt-3 sm:mt-6">
                 <Button href="/services/red-teaming" variant="outline" className="rounded-full px-3 py-1 sm:px-6 sm:py-2.5 text-[10px] sm:text-sm">
                   Explore Protocol
                 </Button>
               </div>
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="col-span-1 glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-6 flex flex-col justify-between group hover:border-brand-purple/50 transition-all duration-300"
            >
               <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-2 sm:mb-4">
                 <Lock className="text-brand-purple w-3.5 h-3.5 sm:w-5 sm:h-5" />
               </div>
               <div>
                 <h3 className="text-xs sm:text-lg font-display font-bold text-white mb-1">Zero Trust</h3>
                 <p className="text-gray-300 text-[10px] sm:text-xs leading-snug">Assume breach. Authenticate everything continuously.</p>
               </div>
            </motion.div>

            {/* Bento Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-1 glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-6 flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-300"
            >
               <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg bg-brand-cyan/20 flex items-center justify-center mb-2 sm:mb-4">
                 <Zap className="text-brand-cyan w-3.5 h-3.5 sm:w-5 sm:h-5" />
               </div>
               <div>
                 <h3 className="text-xs sm:text-lg font-display font-bold text-white mb-1">Incident Response</h3>
                 <p className="text-gray-300 text-[10px] sm:text-xs leading-snug">Sub-second threat neutralization &amp; forensics.</p>
               </div>
            </motion.div>
            
            {/* Bento Item 4: Wide Span */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="col-span-2 md:col-span-2 lg:col-span-2 glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-3.5 sm:p-6 flex flex-row items-center justify-between group overflow-hidden relative border-brand-purple/30 hover:border-brand-purple/60 transition-all duration-300 gap-3 sm:gap-4"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent pointer-events-none"></div>
               <div className="relative z-10 max-w-sm">
                 <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-1.5 sm:mb-2.5 border border-brand-purple/30">
                   <Server className="text-brand-purple w-3.5 h-3.5 sm:w-5 sm:h-5"/>
                 </div>
                 <h3 className="text-xs sm:text-xl font-display font-bold text-white mb-1">Cyber Product Dev</h3>
                 <p className="text-gray-300 text-[10px] sm:text-sm leading-snug">Secure by design engineering protocols for next-gen products.</p>
               </div>
               <Server className="text-white/5 w-12 h-12 sm:w-28 sm:h-28 relative z-10 group-hover:scale-105 transition-transform duration-500 shrink-0" />
            </motion.div>
         </div>
      </section>

      {/* Abstract Stats Section - 4-col mini desktop layout on mobile */}
      <section className="py-6 sm:py-14 md:py-20 relative z-10 overflow-hidden bg-black/40 backdrop-blur-md border-y border-white/5">
        <div className="container mx-auto px-3 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-l-2 border-brand-cyan/30 pl-2.5 sm:pl-5 py-0.5 sm:py-2 relative group"
              >
                <div className="absolute left-[-2px] top-0 h-0 w-[2px] bg-brand-cyan group-hover:h-full transition-all duration-300"></div>
                <h3 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-0.5">
                  <AnimatedCounter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </h3>
                <p className="text-brand-cyan font-mono uppercase tracking-wider text-[9px] sm:text-xs font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

