import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import ContactForm from '../components/ui/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="Contact Us"
        subtitle="Let’s Secure Your Organization. Get in Touch Now."
      />
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">Contact Information</h2>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-cyan mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Email Us</h3>
                  <a href="mailto:info@roblocksec.com" className="text-gray-300 hover:text-brand-cyan transition">info@roblocksec.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-cyan mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Direct Phone</h3>
                  <a href="tel:+919347012418" className="text-gray-300 hover:text-brand-cyan transition">+91 93470 12418</a>
                </div>
              </div>

              {/* Hyderabad Office */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-brand-cyan/30 transition-all">
                <MapPin className="w-6 h-6 text-brand-cyan mt-1 shrink-0" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-white font-display">Hyderabad Office</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">Headquarters</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    103, Image Hospitals Ln, Pratap Nagar, Ameerpet, Nagarjuna Nagar colony, Yella Reddy Guda, Hyderabad, Telangana 500073
                  </p>
                </div>
              </div>

              {/* Puducherry Office */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-brand-purple/30 transition-all">
                <MapPin className="w-6 h-6 text-brand-purple mt-1 shrink-0" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-white font-display">Puducherry Office</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-purple/10 text-brand-purple border border-brand-purple/20">Regional Hub</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    eSales Technologies, 2, 1st and 2nd Floor, 19th Cross St, Avvai Nagar, Lawspet, Puducherry, 605008
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] overflow-hidden glowing-border relative h-[280px] w-full bg-brand-navy/30">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9942478544453!2d78.4414603749354!3d17.436067783459954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c8853b0001%3A0x28975878b408c02c!2sImage%20Hospitals!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Office Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
