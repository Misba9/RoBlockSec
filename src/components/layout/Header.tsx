import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Shield, ExternalLink } from 'lucide-react';
import { NAV_LINKS, ALL_SERVICES } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isOpen
          ? 'header-bg border-b border-brand-cyan/15 shadow-[0_4px_32px_rgba(0,0,0,0.6)]'
          : 'bg-gradient-to-b from-brand-dark/90 via-brand-dark/60 to-transparent border-b border-transparent',
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group relative z-10">
          <img 
            src="/RoBlockSec-01.png" 
            alt="RoBlockSec Logo" 
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.key === 'services' ? (
              <div
                key={link.key}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200',
                    location.pathname.startsWith('/services')
                      ? 'text-brand-cyan bg-brand-cyan/10'
                      : 'text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5',
                  )}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform duration-200', servicesOpen && 'rotate-180')}
                  />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 glass-card rounded-xl py-2 overflow-hidden shadow-2xl border border-brand-cyan/20"
                    >
                      <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between">
                        <p className="text-[10px] font-mono tracking-widest text-brand-cyan/70 uppercase">
                          Our Security Verticals
                        </p>
                        <Link to="/services" className="text-[11px] text-gray-400 hover:text-brand-cyan flex items-center gap-0.5">
                          All <ChevronRight size={12} />
                        </Link>
                      </div>
                      {ALL_SERVICES.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5 transition-all duration-150"
                        >
                          <svc.icon size={15} className="text-brand-cyan/70 shrink-0" />
                          <span className="truncate">{svc.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.key}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200',
                    isActive
                      ? 'text-brand-cyan bg-brand-cyan/10 shadow-[0_0_15px_rgba(232,80,0,0.15)]'
                      : 'text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5',
                  )
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        {/* CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Button href="/careers" variant="ghost" className="text-sm py-2 px-4">
            Careers
          </Button>
          <Button href="/contact" variant="primary" className="text-sm py-2 px-5">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-gray-200 hover:text-brand-cyan p-2.5 rounded-xl border border-white/10 bg-white/5 active:scale-95 transition-all flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} className="text-brand-cyan" /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden header-bg border-b border-brand-cyan/20 shadow-[0_16px_40px_rgba(0,0,0,0.9)]"
          >
            <div className="px-4 py-5 flex flex-col gap-1.5 max-h-[calc(100vh-70px)] overflow-y-auto no-scrollbar">
              {/* Home */}
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between',
                    isActive
                      ? 'text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20'
                      : 'text-gray-200 hover:text-brand-cyan hover:bg-white/5',
                  )
                }
              >
                <span>Home</span>
                <ChevronRight size={16} className="opacity-40" />
              </NavLink>

              {/* About */}
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between',
                    isActive
                      ? 'text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20'
                      : 'text-gray-200 hover:text-brand-cyan hover:bg-white/5',
                  )
                }
              >
                <span>About</span>
                <ChevronRight size={16} className="opacity-40" />
              </NavLink>

              {/* Collapsible Services Accordion on Mobile */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3">
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-base font-semibold transition-colors flex-1',
                      location.pathname.startsWith('/services') ? 'text-brand-cyan' : 'text-gray-200 hover:text-brand-cyan'
                    )}
                  >
                    Services
                  </Link>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-brand-cyan hover:bg-white/5 transition-colors"
                    aria-label="Toggle Services list"
                  >
                    <ChevronDown
                      size={18}
                      className={cn('transition-transform duration-200 text-brand-cyan', mobileServicesOpen && 'rotate-180')}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-3 pb-3 pt-1 flex flex-col gap-1 border-t border-white/5"
                    >
                      {ALL_SERVICES.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/10 transition-colors"
                        >
                          <svc.icon size={16} className="text-brand-cyan/80 shrink-0" />
                          <span className="truncate">{svc.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products */}
              <NavLink
                to="/products"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between',
                    isActive
                      ? 'text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20'
                      : 'text-gray-200 hover:text-brand-cyan hover:bg-white/5',
                  )
                }
              >
                <span>Products</span>
                <ChevronRight size={16} className="opacity-40" />
              </NavLink>

              {/* Insights */}
              <NavLink
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between',
                    isActive
                      ? 'text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20'
                      : 'text-gray-200 hover:text-brand-cyan hover:bg-white/5',
                  )
                }
              >
                <span>Insights & Research</span>
                <ChevronRight size={16} className="opacity-40" />
              </NavLink>

              {/* Team */}
              <NavLink
                to="/team"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between',
                    isActive
                      ? 'text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20'
                      : 'text-gray-200 hover:text-brand-cyan hover:bg-white/5',
                  )
                }
              >
                <span>Team</span>
                <ChevronRight size={16} className="opacity-40" />
              </NavLink>

              {/* Careers */}
              <NavLink
                to="/careers"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between',
                    isActive
                      ? 'text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20'
                      : 'text-gray-200 hover:text-brand-cyan hover:bg-white/5',
                  )
                }
              >
                <span>Careers</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">Hiring</span>
              </NavLink>

              {/* Action Buttons in Mobile Drawer */}
              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  className="w-full text-center justify-center py-3.5 text-base font-bold shadow-[0_0_20px_rgba(232,80,0,0.3)]" 
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote / Contact
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

