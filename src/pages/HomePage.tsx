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

      {/* 10-Years Ahead Spatial Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-[100vh] flex items-center px-4 sm:px-8 md:px-12 lg:px-24 pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-mono text-brand-cyan tracking-wider uppercase font-semibold">Est. 2024 · Hyderabad, India</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.95] sm:leading-[0.88] tracking-tight break-words">
              <span className="text-white">Nexalith</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-orange-400 to-brand-purple">
                Prime.
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base text-gray-300 font-body leading-relaxed">
              The unbreakable foundation of next-gen cyber — GRC, IoT, OT, OffSec, DevSec, forensics &amp; beyond. First. Strongest. Unmatched.
            </p>
            
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Button href="/contact" variant="primary" className="text-base sm:text-lg py-3.5 sm:py-4 px-8 rounded-full shadow-[0_0_30px_rgba(232,80,0,0.3)] hover:shadow-[0_0_50px_rgba(232,80,0,0.5)] transition-all text-center justify-center">
                Initiate Protocol
              </Button>
              <Button href="/services" variant="outline" className="text-base sm:text-lg py-3.5 sm:py-4 px-8 rounded-full border-white/20 hover:bg-white/5 text-center justify-center">
                Explore Grid <ArrowRight className="ml-2 inline-block" size={18} />
              </Button>
            </div>

            {/* Mobile-Friendly Quick Highlights Deck (Visible on mobile/tablet, hidden on desktop) */}
            <div className="mt-10 grid grid-cols-3 gap-2.5 sm:gap-4 lg:hidden">
              <Link to="/services" className="glass-card p-3 sm:p-4 rounded-xl border border-brand-cyan/20 flex flex-col items-center text-center hover:border-brand-cyan/50 transition-all">
                <Shield className="text-brand-cyan w-5 h-5 mb-1.5" />
                <span className="text-xs font-bold text-white">Services</span>
                <span className="text-[10px] text-gray-400 mt-0.5">6 Verticals</span>
              </Link>
              <Link to="/products" className="glass-card p-3 sm:p-4 rounded-xl border border-brand-purple/20 flex flex-col items-center text-center hover:border-brand-purple/50 transition-all">
                <Zap className="text-brand-purple w-5 h-5 mb-1.5" />
                <span className="text-xs font-bold text-white">Products</span>
                <span className="text-[10px] text-gray-400 mt-0.5">4 Platforms</span>
              </Link>
              <Link to="/services/training" className="glass-card p-3 sm:p-4 rounded-xl border border-orange-500/20 flex flex-col items-center text-center hover:border-orange-500/50 transition-all">
                <Lock className="text-orange-400 w-5 h-5 mb-1.5" />
                <span className="text-xs font-bold text-white">Academy</span>
                <span className="text-[10px] text-orange-400 font-semibold mt-0.5">Live Labs</span>
              </Link>
            </div>
          </motion.div>

          {/* Animated Desktop Cards — Services / Products / Courses */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 justify-center pt-10">

            {/* Services Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card rounded-2xl border border-brand-cyan/20 p-5 hover:border-brand-cyan/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                  <Shield className="text-brand-cyan" size={16} />
                </div>
                <span className="text-xs font-mono text-brand-cyan/70 uppercase tracking-widest font-bold">Services</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Red Teaming', 'Blue Teaming', 'GRC', 'IoT Security', 'OT Security', 'DevSecOps', 'Digital Forensics', 'Threat Intel'].map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-gray-300 group-hover:border-brand-cyan/30 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Products Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="glass-card rounded-2xl border border-brand-purple/20 p-5 hover:border-brand-purple/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                  <Zap className="text-brand-purple" size={16} />
                </div>
                <span className="text-xs font-mono text-brand-purple/70 uppercase tracking-widest font-bold">Products</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Data Rakshak', tag: 'Data Privacy Platform' },
                  { name: 'BreachSimu', tag: 'Attack Simulation' },
                  { name: 'BountyLab & CTF', tag: 'Bug Bounty · 2026' },
                ].map((p) => (
                  <div key={p.name} className="flex items-center justify-between">
                    <span className="text-sm text-white font-medium">{p.name}</span>
                    <span className="text-xs text-gray-400">{p.tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Courses Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass-card rounded-2xl border border-orange-500/20 p-5 hover:border-orange-500/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Lock className="text-orange-400" size={16} />
                </div>
                <span className="text-xs font-mono text-orange-400/80 uppercase tracking-widest font-bold">Courses</span>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold">Live</span>
              </div>
              <div className="space-y-2">
                {[
                  'Offensive Security Specialist',
                  'Certified SOC Analyst',
                  'Cyber Crime Investigation & DF',
                  'Cyber Product Development',
                ].map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400/70" />
                    <span className="text-xs text-gray-300">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Asymmetric Bento Box Services */}
      <section className="py-16 sm:py-24 md:py-32 relative z-10 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden">
         <div className="mb-12 sm:mb-16 md:mb-20 relative">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-display font-black text-white opacity-5 uppercase tracking-widest absolute -top-8 sm:-top-10 lg:-top-20 left-2 sm:left-4 lg:left-10 select-none pointer-events-none truncate max-w-full">
              Capabilities
            </h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white relative z-10 border-l-4 border-brand-cyan pl-4 sm:pl-6">Strategic Verticals</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 auto-rows-auto md:auto-rows-[320px]">
            {/* Bento Item 1: Large Span */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:col-span-2 md:row-span-2 glass-card rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-brand-cyan/50 transition-all duration-500"
            >
               <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-5 sm:opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                 <Shield size={200} className="w-40 h-40 sm:w-60 sm:h-60" />
               </div>
               <div className="relative z-10">
                 <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-cyan/20 flex items-center justify-center mb-6 sm:mb-8 border border-brand-cyan/30">
                   <Shield className="text-brand-cyan w-6 h-6 sm:w-8 sm:h-8"/>
                 </div>
                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 sm:mb-6">Offensive Security Operations</h3>
                 <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md leading-relaxed">Military-grade red teaming and simulated adversarial engagements to expose critical vulnerabilities before they are exploited.</p>
               </div>
               <div className="relative z-10 mt-6 sm:mt-8">
                 <Button href="/services/red-teaming" variant="outline" className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                   Explore Protocol
                 </Button>
               </div>
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between group hover:border-brand-purple/50 transition-all duration-500"
            >
               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-6">
                 <Lock className="text-brand-purple w-5 h-5 sm:w-6 sm:h-6" />
               </div>
               <div>
                 <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 sm:mb-3">Zero Trust Architecture</h3>
                 <p className="text-gray-300 text-xs sm:text-sm">Assume breach. Authenticate everything continuously.</p>
               </div>
            </motion.div>

            {/* Bento Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-500"
            >
               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-cyan/20 flex items-center justify-center mb-6">
                 <Zap className="text-brand-cyan w-5 h-5 sm:w-6 sm:h-6" />
               </div>
               <div>
                 <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 sm:mb-3">Incident Response &amp; Forensics</h3>
                 <p className="text-gray-300 text-xs sm:text-sm">Sub-second threat neutralization &amp; deep courtroom-ready forensics.</p>
               </div>
            </motion.div>
            
            {/* Bento Item 4: Wide Span */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-2 glass-card rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between group overflow-hidden relative border-brand-purple/30 hover:border-brand-purple/60 transition-all duration-500 gap-6"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent pointer-events-none"></div>
               <div className="relative z-10 max-w-sm">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4 sm:mb-6 border border-brand-purple/30">
                   <Server className="text-brand-purple w-5 h-5 sm:w-6 sm:h-6"/>
                 </div>
                 <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 sm:mb-3">Cyber Product Dev</h3>
                 <p className="text-gray-300 text-sm sm:text-base">Secure by design engineering protocols for next-gen products.</p>
               </div>
               <Server className="text-white/5 w-24 h-24 sm:w-36 sm:h-36 relative z-10 group-hover:scale-110 transition-transform duration-700 shrink-0 self-end sm:self-center" />
            </motion.div>
         </div>
      </section>

      {/* Abstract Stats Section */}
      <section className="py-16 sm:py-24 md:py-32 relative z-10 overflow-hidden bg-black/40 backdrop-blur-md border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-brand-cyan/30 pl-4 sm:pl-6 md:pl-8 py-2 sm:py-4 relative group"
              >
                <div className="absolute left-[-2px] top-0 h-0 w-[2px] bg-brand-cyan group-hover:h-full transition-all duration-500"></div>
                <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 sm:mb-4">
                  <AnimatedCounter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </h3>
                <p className="text-brand-cyan font-mono uppercase tracking-wider sm:tracking-[0.2em] text-[11px] sm:text-xs md:text-sm font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

