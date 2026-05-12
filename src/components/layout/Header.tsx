import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { NAV_LINKS, ALL_SERVICES } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'header-bg border-b border-brand-cyan/10 shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-cyan/30 rounded-lg blur-md group-hover:bg-brand-cyan/50 transition-all duration-300" />
            <Shield className="relative h-8 w-8 text-brand-cyan drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
          </div>
          <span className="text-xl font-display font-bold tracking-wider text-white">
            ROBLOC<span className="text-brand-cyan">K</span>SEC
          </span>
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
                <button
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200',
                    'text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5',
                  )}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform duration-200', servicesOpen && 'rotate-180')}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 glass-card rounded-xl py-2 overflow-hidden"
                    >
                      <div className="px-3 py-2">
                        <p className="text-[10px] font-mono tracking-widest text-brand-cyan/60 uppercase mb-1">
                          Our Services
                        </p>
                      </div>
                      {ALL_SERVICES.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5 transition-all duration-150"
                        >
                          <svc.icon size={15} className="text-brand-cyan/60 shrink-0" />
                          {svc.title}
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
                      ? 'text-brand-cyan bg-brand-cyan/8'
                      : 'text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5',
                  )
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="hidden md:flex items-center gap-3">
          <Button href="/careers" variant="ghost" className="text-sm">
            Careers
          </Button>
          <Button href="/contact" variant="primary" className="text-sm">
            Get a Quote
          </Button>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-brand-cyan transition-colors p-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden header-bg border-b border-brand-cyan/10"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200',
                      isActive
                        ? 'text-brand-cyan bg-brand-cyan/8'
                        : 'text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/careers"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200',
                    isActive ? 'text-brand-cyan' : 'text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5',
                  )
                }
              >
                Careers
              </NavLink>
              <div className="mt-3">
                <Button href="/contact" variant="primary" className="w-full" onClick={() => setIsOpen(false)}>
                  Get a Quote
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
