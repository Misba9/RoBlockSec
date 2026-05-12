import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHero from '../../components/ui/PageHero';
import { FAQ_DATA } from '../../constants';
import FAQ from '../../components/shared/FAQ';
import Button from '../../components/ui/Button';
import { ShieldAlert, Activity, Search, Code, FileText, CheckSquare } from 'lucide-react';

const TrainingPage: React.FC = () => {
  const pageTitle = "Cybersecurity Training & Certifications";
  const pageDescription = "Advance your career with RoblockSec Career Craft Academy's professional certification programmes.";

  const courses = [
    {
      icon: ShieldAlert,
      title: 'Offensive Security Specialist',
      duration: '45 Days',
      mode: 'Live Practical',
      description: 'Master ethical hacking, red teaming, and advanced penetration testing. Learn to think and act like a real-world attacker to secure critical infrastructure.',
      highlights: ['Web App Pentesting', 'Network Security', 'Exploit Development', 'Real-world CTFs'],
      pdf: '/01_Offensive_Security_Specialist.pdf'
    },
    {
      icon: Activity,
      title: 'Certified SOC Analyst',
      duration: '45 Days',
      mode: 'Hands-on Lab',
      description: 'Become a frontline defender. Learn threat hunting, incident response, SIEM management, and active defense strategies to protect enterprise networks.',
      highlights: ['SIEM / SOAR', 'Threat Intelligence', 'Log Analysis', 'Incident Handling'],
      pdf: '/02_Certified_SOC_Analyst.pdf'
    },
    {
      icon: Search,
      title: 'Cyber Crime Investigation & Digital Forensics',
      duration: '60 Hours',
      mode: 'Theory & Practical',
      description: "India's most comprehensive digital forensics programme. Combines forensic science, Indian cyber law (IT Act, BNS), OSINT, and court-ready reporting.",
      highlights: ['Disk Forensics', 'OSINT Analysis', 'Cyber Law', 'Court-ready Evidence'],
      pdf: '/03_Cyber_Crime_Investigation_Digital_Forensics.pdf'
    },
    {
      icon: Code,
      title: 'Cyber Product Development',
      duration: '30 Days',
      mode: 'Daily Modules',
      description: 'The only programme that integrates product thinking, full-stack engineering, and cybersecurity. Learn to build secure applications where security is baked in from day one.',
      highlights: ['DevSecOps', 'Secure Coding', 'API Security', 'Full-stack Engineering'],
      pdf: '/04_Cyber_Product_Development.pdf'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>{pageTitle} | Roblocksec</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <PageHero title="Career Craft Academy" subtitle="Professional Cybersecurity Certification Programmes" />
      
      <div className="py-20 container mx-auto px-6 relative">
        <div className="absolute inset-0 cyber-grid-bg opacity-30 z-0 pointer-events-none"></div>
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="text-4xl font-display font-bold text-white mb-6">Our Flagship Courses</h2>
            <p className="text-gray-300 text-lg">
                We bridge the gap between academic theory and industry reality. Download our brochures to explore the curriculum and start your journey.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button href="/Roblocksec_Brochure.pdf" variant="primary" className="gap-2">
                <FileText size={18} /> Download Master Brochure
              </Button>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {courses.map((course, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-8 rounded-2xl glowing-border relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl group-hover:bg-brand-purple/20 transition-all"></div>
                    <div className="flex items-start gap-6 relative z-10 flex-col lg:flex-row">
                        <div className="p-4 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                          <course.icon className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold font-display text-white mb-4">{course.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="cyber-tag">{course.duration}</span>
                              <span className="cyber-tag-purple">{course.mode}</span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">{course.description}</p>
                            
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                              {course.highlights.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                  <CheckSquare size={14} className="text-brand-cyan shrink-0" /> {item}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                              <Button href={course.pdf} variant="primary" className="flex-1 text-center justify-center" target="_blank">View Curriculum</Button>
                              <Button href="/contact" variant="outline" className="flex-1 text-center justify-center">Enroll Now</Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
      
      <FAQ items={FAQ_DATA['training']} />
    </div>
  );
};

export default TrainingPage;
