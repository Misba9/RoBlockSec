import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('roblocksec_cookie_consent');
    if (!consent) {
      // Small delay so it appears smoothly after page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('roblocksec_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('roblocksec_cookie_consent', 'essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50 pointer-events-auto"
        >
          <div className="glass-card p-6 rounded-3xl border border-brand-cyan/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden bg-brand-navy/90">
            {/* Background ambient glow */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-brand-purple/20 rounded-full blur-2xl pointer-events-none" />

            {/* Header / Dismiss */}
            <div className="flex items-start justify-between gap-4 mb-3 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Cookie size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Cookie & Privacy Preferences</h4>
                  <span className="text-[11px] font-mono text-brand-cyan/80 flex items-center gap-1">
                    <ShieldCheck size={12} /> DPDPA & GDPR Compliant
                  </span>
                </div>
              </div>
              <button 
                onClick={handleAcceptEssential} 
                className="text-gray-400 hover:text-white p-1 transition-colors"
                aria-label="Dismiss cookie notice"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body Text */}
            <p className="text-gray-300 text-xs leading-relaxed mb-5 relative z-10">
              We utilize essential and performance cookies to analyze web traffic, enhance platform security, and ensure an optimal browsing experience in accordance with our{' '}
              <Link to="/privacy" className="text-brand-cyan underline hover:text-white transition-colors">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/refund-policy" className="text-brand-cyan underline hover:text-white transition-colors">
                Refund Policy
              </Link>.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3 relative z-10">
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark font-display font-bold text-xs shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:brightness-110 transition-all text-center"
              >
                Accept All
              </button>
              <button
                onClick={handleAcceptEssential}
                className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-display font-semibold text-xs transition-all text-center"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
