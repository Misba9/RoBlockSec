import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { DEMO_CAREERS } from '../constants';
import Button from '../components/ui/Button';
import { MapPin, Briefcase, ChevronDown, ChevronUp, UploadCloud } from 'lucide-react';

const JobListing: React.FC<{ job: typeof DEMO_CAREERS[0] }> = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-brand-navy glowing-border rounded-lg mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 text-left flex justify-between items-center"
            >
                <div>
                    <h3 className="text-xl font-bold font-display text-white">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                        <span className="flex items-center gap-2"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-2"><Briefcase size={14} /> {job.type}</span>
                    </div>
                </div>
                {isOpen ? <ChevronUp className="text-brand-cyan" /> : <ChevronDown className="text-brand-cyan" />}
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
                        <div className="px-6 pb-6 border-t border-brand-cyan/20">
                            <p className="text-gray-300 mt-4 mb-4">{job.description}</p>
                            <h4 className="font-bold text-white mb-2">Requirements:</h4>
                            <ul className="list-disc list-inside text-gray-400 space-y-1">
                                {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                            </ul>
                            <Button href="#apply-form" variant="primary" className="mt-6">Apply Now</Button>
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
        <div className="py-20 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <h2 className="text-3xl font-display font-bold text-white mb-4">Why Work at Roblocksec?</h2>
                    <p className="text-gray-300 mb-4">
                        At Roblocksec, you're not just an employee; you're a defender at the forefront of cyber warfare. We foster a culture of continuous learning, innovation, and collaboration. We tackle the toughest challenges, invest in our people's growth, and provide the resources you need to make a real impact.
                    </p>
                    <ul className="space-y-2 text-brand-cyan">
                        <li className="flex items-center gap-2">✓ Work on cutting-edge security projects</li>
                        <li className="flex items-center gap-2">✓ Generous professional development budget</li>
                        <li className="flex items-center gap-2">✓ Flexible remote work opportunities</li>
                        <li className="flex items-center gap-2">✓ Competitive salary and benefits</li>
                    </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <img src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0d1117/8957e5?text=Our+Team" alt="Roblocksec Team" className="rounded-lg shadow-2xl shadow-brand-purple/20" />
                </motion.div>
            </div>

            <h2 className="text-3xl font-display font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="max-w-4xl mx-auto">
                {DEMO_CAREERS.map(job => <JobListing key={job.title} job={job} />)}
            </div>

            <div id="apply-form" className="max-w-4xl mx-auto mt-20 pt-12 border-t border-brand-cyan/20">
                <h2 className="text-3xl font-display font-bold text-white text-center mb-8">Apply Now</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <input 
                              type="text" 
                              placeholder="Full Name" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full bg-brand-navy/70 border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan" 
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
                              className={`w-full bg-brand-navy/70 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                                showEmailError 
                                  ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                                  : 'border-gray-600 focus:border-brand-cyan focus:ring-brand-cyan/20'
                              }`} 
                            />
                            {showEmailError && (
                              <p className="text-red-400 text-xs mt-2 font-body text-left">
                                ⚠️ Please enter a valid email address.
                              </p>
                            )}
                        </div>
                    </div>
                    <select 
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                      className="w-full bg-brand-navy/70 border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan text-gray-400"
                    >
                        <option disabled>Select Position to Apply For</option>
                        {DEMO_CAREERS.map(job => <option key={job.title}>{job.title}</option>)}
                    </select>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Upload Your Resume</label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-600 px-6 py-10 hover:border-brand-cyan transition-colors">
                            <div className="text-center">
                                <UploadCloud className="mx-auto h-12 w-12 text-gray-500" aria-hidden="true" />
                                <div className="mt-4 flex text-sm leading-6 text-gray-400">
                                    <p className="pl-1">Drag and drop, or <span className="text-brand-cyan cursor-pointer">click to upload</span></p>
                                </div>
                                <p className="text-xs leading-5 text-gray-500">PDF, DOCX up to 10MB</p>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" variant="primary" className="w-full text-lg">Submit Application</Button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default CareersPage;
