import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  Building2, 
  MapPin, 
  User 
} from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/roblocksec/',
      label: 'LinkedIn'
    },
    { 
      icon: Youtube, 
      href: 'https://youtube.com/@roshankappala?si=wVdfYSdYwdLIsLi6',
      label: 'YouTube'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/roblocksec?igsh=bzRibnd1cTZnam5j',
      label: 'Instagram'
    }
  ];

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Our Products', href: '/products' },
    { label: 'Insights & Research', href: '/blog' },
    { label: 'Meet the Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <footer className="bg-brand-navy border-t border-white/5 z-10 pt-8 sm:pt-14 pb-6 font-body">
      <div className="container mx-auto px-3 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 text-left">
          
          {/* Logo & Description Column */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-2.5 sm:gap-5">
            <Link to="/" className="inline-block">
              <img src="/RoBlockSec-01.png" alt="RoBlockSec Logo" className="h-6 sm:h-9 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-[10px] sm:text-sm leading-relaxed max-w-sm">
              Leading cybersecurity services and training provider. We engineer impenetrable digital fortresses and build the unbreakable foundation for visionary enterprises.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display font-bold text-white text-[10px] sm:text-sm tracking-wider uppercase mb-2 sm:mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-1.5 sm:gap-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-400 hover:text-brand-cyan transition-colors text-[10px] sm:text-sm py-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Follow Us Column */}
          <div className="flex flex-col gap-3 sm:gap-6">
            <div>
              <h3 className="font-display font-bold text-white text-[10px] sm:text-sm tracking-wider uppercase mb-2 sm:mb-5">Legal</h3>
              <ul className="flex flex-col gap-1.5 sm:gap-2.5 text-[10px] sm:text-sm">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-brand-cyan transition-colors py-0.5 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-brand-cyan transition-colors py-0.5 inline-block">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-gray-400 hover:text-brand-cyan transition-colors py-0.5 inline-block">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-white text-[9px] sm:text-xs tracking-wider uppercase mb-1.5 sm:mb-3">Follow Us</h3>
              <div className="flex gap-1.5 sm:gap-2.5">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.label}
                    className="w-7 h-7 sm:w-10 sm:h-10 bg-white/5 hover:bg-brand-cyan hover:text-brand-dark text-gray-400 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-brand-cyan"
                  >
                    <link.icon size={13} className="sm:hidden" />
                    <link.icon size={15} className="hidden sm:block" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Us Column */}
          <div className="col-span-2 lg:col-span-1 border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
            <h3 className="font-display font-bold text-white text-[10px] sm:text-sm tracking-wider uppercase mb-2 sm:mb-5">Contact Us</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3.5 text-[10px] sm:text-sm">
              <li className="flex items-center gap-1.5 sm:gap-2.5 text-gray-400">
                <Mail size={12} className="text-brand-cyan shrink-0" />
                <a href="mailto:info@roblocksec.com" className="hover:text-brand-cyan transition-colors truncate">
                  info@roblocksec.com
                </a>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2.5 text-gray-400">
                <Phone size={12} className="text-brand-cyan shrink-0" />
                <a href="tel:+919347012418" className="hover:text-brand-cyan transition-colors">
                  +91 93470 12418
                </a>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2.5 text-gray-400">
                <MapPin size={12} className="text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block text-[10px] sm:text-sm">Hyderabad:</span>
                  <span className="text-[9px] sm:text-xs text-gray-400">Ameerpet, 500073</span>
                </div>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2.5 text-gray-400">
                <MapPin size={12} className="text-brand-purple shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block text-[10px] sm:text-sm">Puducherry:</span>
                  <span className="text-[9px] sm:text-xs text-gray-400">Lawspet, 605008</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright line */}
        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[11px] sm:text-xs text-gray-400 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Roblocksec. All Rights Reserved.</p>
          <p className="text-[10px] sm:text-xs text-gray-500">Secure. Standardized. Unmatched.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

