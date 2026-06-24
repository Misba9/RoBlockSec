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
    { label: 'Success Stories', href: '/blog' },
    { label: 'Meet the Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <footer className="bg-brand-navy border-t border-white/5 z-10 pt-16 pb-8 font-body">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Logo & Description Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-block">
              <img src="/RoBlockSec-01.png" alt="RoBlockSec Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Leading cybersecurity services and training provider. We engineer impenetrable digital fortresses and build the unbreakable foundation for visionary enterprises.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display font-bold text-white text-base tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="font-display font-bold text-white text-base tracking-wider uppercase mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-brand-cyan flex-shrink-0" />
                <a href="mailto:info@roblocksec.com" className="hover:text-brand-cyan transition-colors">
                  info@roblocksec.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-brand-cyan flex-shrink-0" />
                <a href="tel:+919347012418" className="hover:text-brand-cyan transition-colors">
                  +91 93470 12418
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Building2 size={18} className="text-brand-cyan flex-shrink-0" />
                <span>Roblocksec LLP</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-brand-cyan flex-shrink-0" />
                <span>Hyderabad, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 pt-2 border-t border-white/5">
                <User size={18} className="text-brand-cyan flex-shrink-0" />
                <Link to="/team" className="hover:text-brand-cyan transition-colors font-medium">
                  Know your Coach
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Follow Us Column */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-display font-bold text-white text-base tracking-wider uppercase mb-6">Legal</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-brand-cyan transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-brand-cyan transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-brand-cyan transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.label}
                    className="w-10 h-10 bg-white/5 hover:bg-brand-cyan hover:text-brand-dark text-gray-400 rounded-xl flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-brand-cyan"
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright line */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Roblocksec. All Rights Reserved.</p>
          <p className="text-xs text-gray-600">Secure. Standardized. Unmatched.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
