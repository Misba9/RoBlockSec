import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { DEMO_CAREERS } from '../constants';
import Button from '../components/ui/Button';
import { MapPin, Briefcase, ChevronDown, ChevronUp, UploadCloud } from 'lucide-react';

const JobListing: React.FC<{ job: typeof DEMO_CAREERS[0] }> = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-brand-navy glowing-border rounded-xl mb-2 sm:mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-2.5 sm:p-5 text-left flex justify-between items-center"
            >
                <div>
                    <h3 className="text-xs sm:text-base md:text-lg font-bold font-display text-white">{job.title}</h3>
                    <div className="flex items-center gap-2.5 text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1.5">
                        <span className="flex items-center gap-1"><MapPin size={11} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Briefcase size={11} /> {job.type}</span>
                    </div>
                </div>
                {isOpen ? <ChevronUp className="text-brand-cyan shrink-0" size={15} /> : <ChevronDown className="text-brand-cyan shrink-0" size={15} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-3 pb-3 sm:px-6 sm:pb-6 border-t border-brand-cyan/20">
                            <p className="text-gray-300 text-[10px] sm:text-sm mt-2 mb-2 sm:mt-3 sm:mb-3 leading-snug sm:leading-relaxed">{job.description}</p>
                            <h4 className="font-bold text-white text-[10px] sm:text-sm mb-1 sm:mb-1.5">Requirements:</h4>
                            <ul className="list-disc list-inside text-gray-400 text-[9px] sm:text-sm space-y-0.5 sm:space-y-1">
                                {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                            </ul>
                            <Button href="#apply-form" variant="primary" className="mt-2.5 sm:mt-4 text-[9px] sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4">Apply Now</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: 'Select Position to Apply For'
  });
  const [emailTouched, setEmailTouched] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const isEmailValid = validateEmail(formData.email);
  const showEmailError = emailTouched && formData.email !== '' && !isEmailValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid) {
      alert('Please enter a valid email address.');
      return;
    }
    if (formData.position === 'Select Position to Apply For' || !formData.position) {
      alert('Please select a position to apply for.');
      return;
    }
    const subject = `Job Application: ${formData.position} - ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APosition: ${formData.position}%0D%0A%0D%0APlease attach resume to this email.`;
    window.location.href = `mailto:hr@roblocksec.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
        <PageHero
            title="Join Our Mission"
            subtitle="Become part of an elite team dedicated to protecting the digital world."
        />
        <div className="py-8 sm:py-16 md:py-20 container mx-auto px-3 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center mb-10 sm:mb-20">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <h2 className="text-xl sm:text-3xl font-display font-bold text-white mb-2 sm:mb-4">Why Work at Roblocksec?</h2>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                        At Roblocksec, you're not just an employee; you're a defender at the forefront of cyber warfare. We foster a culture of continuous learning, innovation, and collaboration. We tackle the toughest challenges, invest in our people's growth, and provide the resources you need to make a real impact.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-brand-cyan text-xs sm:text-sm">
                        <li className="flex items-center gap-2">✓ Work on cutting-edge security projects</li>
                        <li className="flex items-center gap-2">✓ Generous professional development budget</li>
                        <li className="flex items-center gap-2">✓ Flexible remote work opportunities</li>
                        <li className="flex items-center gap-2">✓ Competitive salary and benefits</li>
                    </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <img src="/cyber-lab.jpg" alt="Roblocksec Team" className="rounded-xl shadow-xl shadow-brand-purple/20 h-[180px] sm:h-auto w-full object-cover" />
                </motion.div>
            </div>

            <h2 className="text-base sm:text-3xl font-display font-bold text-white text-center mb-4 sm:mb-12">Open Positions</h2>
            <div className="max-w-4xl mx-auto">
                {DEMO_CAREERS.map(job => <JobListing key={job.title} job={job} />)}
            </div>

            <div id="apply-form" className="max-w-4xl mx-auto mt-8 sm:mt-20 pt-6 sm:pt-12 border-t border-brand-cyan/20">
                <h2 className="text-base sm:text-3xl font-display font-bold text-white text-center mb-4 sm:mb-8">Apply Now</h2>
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
                        <div>
                            <input 
                              type="text" 
                              placeholder="Full Name" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full bg-brand-navy/70 border border-gray-600 rounded-lg sm:rounded-md px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan" 
                            />
                        </div>
                        <div>
                            <input 
                              type="email" 
                              placeholder="Email Address" 
                              required
                              value={formData.email}
                              onBlur={() => setEmailTouched(true)}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className={`w-full bg-brand-navy/70 border rounded-lg sm:rounded-md px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                                showEmailError 
                                  ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                                  : 'border-gray-600 focus:border-brand-cyan focus:ring-brand-cyan/20'
                              }`} 
                            />
                            {showEmailError && (
                              <p className="text-red-400 text-[11px] sm:text-xs mt-1 font-body text-left">
                                ⚠️ Please enter a valid email address.
                              </p>
                            )}
                        </div>
                    </div>
                    <select 
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                      className="w-full bg-brand-navy/70 border border-gray-600 rounded-lg sm:rounded-md px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan text-gray-300"
                    >
                        <option disabled>Select Position to Apply For</option>
                        {DEMO_CAREERS.map(job => <option key={job.title}>{job.title}</option>)}
                    </select>
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">Upload Your Resume</label>
                        <div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-600 px-4 py-6 sm:px-6 sm:py-10 hover:border-brand-cyan transition-colors">
                            <div className="text-center">
                                <UploadCloud className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" aria-hidden="true" />
                                <div className="mt-2 sm:mt-4 flex text-xs sm:text-sm leading-6 text-gray-400 justify-center">
                                    <p className="pl-1">Drag and drop, or <span className="text-brand-cyan cursor-pointer font-medium">click to upload</span></p>
                                </div>
                                <p className="text-[10px] sm:text-xs leading-5 text-gray-500">PDF, DOCX up to 10MB</p>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" variant="primary" className="w-full text-xs sm:text-base py-2.5 sm:py-3.5">Submit Application</Button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default CareersPage;
