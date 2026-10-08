import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

// Email syntax validation
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Check if email is from a common public provider
const isPublicEmail = (email: string) => {
  const publicDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
    'aol.com', 'zoho.com', 'protonmail.com', 'live.com', 
    'icloud.com', 'mail.com', 'gmx.com', 'yandex.com'
  ];
  const domain = email.split('@')[1];
  return publicDomains.includes(domain?.toLowerCase());
};

const ContactForm: React.FC = () => {
  const [role, setRole] = useState<'organization' | 'student'>('organization');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    college: '',
    category: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  // Derive validation states
  const isEmailValid = validateEmail(formData.email);
  const isEmailPublic = isPublicEmail(formData.email);
  const showBusinessEmailWarning = role === 'organization' && emailTouched && isEmailValid && isEmailPublic;
  const showEmailError = emailTouched && formData.email !== '' && !isEmailValid;

  const handleRoleChange = (selectedRole: 'organization' | 'student') => {
    setRole(selectedRole);
    // Clear role-specific fields and reset status
    setFormData(prev => ({
      ...prev,
      organization: '',
      college: '',
      category: '',
      phone: ''
    }));
    setEmailTouched(false);
    setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmailValid) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    // Get the Web3Forms key from environment variables or use a default
    // Visit https://web3forms.com to get your free access key
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New ${role === 'organization' ? 'Organization' : 'Student'} Inquiry - RoBlockSec`,
          from_name: formData.name,
          role: role,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          organization: role === 'organization' ? formData.organization : 'N/A',
          college: role === 'student' ? formData.college : 'N/A',
          category: formData.category || 'General Inquiry',
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          college: '',
          category: '',
          message: ''
        });
        setEmailTouched(false);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your network connection.');
    }
  };

  const inputClasses = (hasError: boolean, hasWarning: boolean) => `
    w-full form-input border rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 transition-all bg-brand-navy/30 text-white font-body text-xs sm:text-sm placeholder-gray-500
    ${hasError 
      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
      : hasWarning 
        ? 'border-amber-500/50 focus:border-amber-500 focus:ring-amber-500/20' 
        : 'border-white/10 focus:border-brand-cyan focus:ring-brand-cyan/20'
    }
  `;

  return (
    <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-white/5 relative overflow-hidden">
      {/* Role Toggle Selector */}
      <div className="flex bg-black/40 p-1 rounded-full border border-white/5 relative overflow-hidden mb-4 sm:mb-6">
        <button
          type="button"
          onClick={() => handleRoleChange('organization')}
          className={`flex-1 py-1.5 sm:py-2.5 px-2 text-center rounded-full font-display font-semibold text-xs sm:text-sm transition-all z-10 ${
            role === 'organization' 
              ? 'text-brand-dark bg-brand-cyan shadow-[0_0_15px_rgba(0,255,255,0.3)]' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          🏢 Organization
        </button>
        <button
          type="button"
          onClick={() => handleRoleChange('student')}
          className={`flex-1 py-1.5 sm:py-2.5 px-2 text-center rounded-full font-display font-semibold text-xs sm:text-sm transition-all z-10 ${
            role === 'student' 
              ? 'text-brand-dark bg-brand-cyan shadow-[0_0_15px_rgba(0,255,255,0.3)]' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          🎓 Student / Academy
        </button>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8 sm:py-12"
          >
            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-brand-cyan/30">
              <span className="text-2xl sm:text-4xl">✨</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-display font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400 text-xs sm:text-base leading-relaxed max-w-md mx-auto mb-6">
              Thank you for reaching out. A security specialist from our team will get in touch with you shortly.
            </p>
            <Button onClick={() => setStatus('idle')} variant="outline" className="text-xs sm:text-sm py-2 sm:py-2.5">Send Another Message</Button>
          </motion.div>
        ) : (
          <motion.form
            key={role}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-3.5 sm:space-y-5"
          >
            {/* Common Name Field */}
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-300 font-display mb-1 sm:mb-1.5">
                Full Name <span className="text-brand-cyan">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={inputClasses(false, false)} 
                placeholder="John Doe" 
              />
            </div>

            {/* Email Field with Live Verification */}
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 font-display mb-1 sm:mb-1.5">
                {role === 'organization' ? 'Business Email' : 'Email Address'} <span className="text-brand-cyan">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onBlur={() => setEmailTouched(true)}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={inputClasses(showEmailError, showBusinessEmailWarning)} 
                placeholder={role === 'organization' ? 'you@company.com' : 'you@student.edu'} 
              />
              {showEmailError && (
                <p className="text-red-400 text-[11px] sm:text-xs mt-1 font-body">
                  ⚠️ Please enter a valid email address format.
                </p>
              )}
              {showBusinessEmailWarning && (
                <p className="text-amber-400 text-[11px] sm:text-xs mt-1 font-body">
                  💡 Tip: Please use a business domain email (e.g. name@company.com) for faster processing.
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-300 font-display mb-1 sm:mb-1.5">
                Phone Number {role === 'organization' && <span className="text-brand-cyan">*</span>}
              </label>
              <input 
                type="tel" 
                id="phone" 
                required={role === 'organization'}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className={inputClasses(false, false)} 
                placeholder="+91 98765 43210" 
              />
            </div>

            {/* Conditional Fields */}
            {role === 'organization' ? (
              <>
                <div>
                  <label htmlFor="organization" className="block text-xs sm:text-sm font-semibold text-gray-300 font-display mb-1 sm:mb-1.5">
                    Organization Name <span className="text-brand-cyan">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="organization" 
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    className={inputClasses(false, false)} 
                    placeholder="Your Company, Inc." 
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs sm:text-sm font-semibold text-gray-300 font-display mb-1 sm:mb-1.5">
                    Service Required <span className="text-brand-cyan">*</span>
                  </label>
                  <select
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className={`${inputClasses(false, false)} text-gray-300`}
                  >
                    <option value="" disabled>Select a cybersecurity service</option>
                    <option value="Red Teaming / VAPT">Red Teaming / VAPT</option>
                    <option value="Blue Teaming / SOC">Blue Teaming / SOC</option>
                    <option value="IRDF & Cyber Crime Investigation">IRDF & Cyber Crime Investigation</option>
                    <option value="GRC Services">Governance, Risk, and Compliance (GRC)</option>
                    <option value="Product Demo">Product Demo (Data Rakshak / BreachSimu / BountyLab / Darkweb Monitoring)</option>
                    <option value="Other">Other / Custom Inquiry</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="college" className="block text-xs sm:text-sm font-semibold text-gray-300 font-display mb-1 sm:mb-1.5">
                    College / Institution Name
                  </label>
                  <input 
                    type="text" 
                    id="college" 
                    value={formData.college}
                    onChange={(e) => setFormData({...formData, college: e.target.value})}
                    className={inputClasses(false, false)} 
                    placeholder="University of Technology" 
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs sm:text-sm font-semibold text-gray-300 font-display mb-1 sm:mb-1.5">
                    Inquiry Purpose <span className="text-brand-cyan">*</span>
                  </label>
                  <select
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className={`${inputClasses(false, false)} text-gray-300`}
                  >
                    <option value="" disabled>Select purpose of contact</option>
                    <option value="Course Curriculum">Course Enrollment & Curriculum</option>
                    <option value="Internship / Careers">Internships & Careers</option>
                    <option value="General Awareness">Cybersecurity Awareness Training</option>
                    <option value="Other">Other General Inquiry</option>
                  </select>
                </div>
              </>
            )}

            {/* Common Message Field */}
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-300 font-display mb-1 sm:mb-1.5">
                Requirements / Message <span className="text-brand-cyan">*</span>
              </label>
              <textarea 
                id="message" 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={inputClasses(false, false)} 
                placeholder={role === 'organization' ? 'Please describe your cybersecurity needs...' : 'How can we help you?'}
              ></textarea>
            </div>

            {/* Error Message Display */}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-body"
              >
                ⚠️ {errorMessage}
              </motion.div>
            )}

            {/* Submit Button */}
            <div>
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full text-xs sm:text-base py-2.5 sm:py-3.5"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></span>
                    Sending Securely...
                  </span>
                ) : 'Send Message'}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
