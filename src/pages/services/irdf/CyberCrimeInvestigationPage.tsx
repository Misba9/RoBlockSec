import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { FileSearch, Target, Network, Scale, ShieldCheck } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const CyberCrimeInvestigationPage: React.FC = () => {
    const pageTitle = "Cyber Crime Investigation & Attribution";
    const pageDescription = "Investigating business email compromise (BEC), insider threats, ransomware extortion, financial cyber fraud, and adversary attribution.";

    const sections = [
        {
            title: "Financial Cyber Fraud & BEC Tracking",
            icon: Target,
            content: <p>Investigate complex wire fraud, CEO spoofing, Business Email Compromise (BEC), rogue vendor invoices, and unauthorized cryptocurrency transactions with end-to-end transaction tracing and communication forensics.</p>
        },
        {
            title: "Insider Threat & Data Exfiltration Inquiries",
            icon: FileSearch,
            content: <p>Trace unauthorized data downloads, USB peripheral usage, cloud storage exfiltration, and intellectual property theft by departing or compromised employees with indisputable timestamped digital trails.</p>
        },
        {
            title: "Threat Actor Attribution & OSINT",
            icon: Network,
            content: <p>Leverage advanced Open Source Intelligence (OSINT), dark web chatter analysis, infrastructure fingerprinting, and threat group TTP tracking to map attacks to known cybercriminal organizations and threat actors.</p>
        },
        {
            title: "Litigation & Law Enforcement Advisory",
            icon: Scale,
            content: <p>Provide technical support for law enforcement filings, police cyber cell complaints, arbitration testimony, and insurance claim validation with clear, jargon-free court reports.</p>
        },
        {
            title: "Brand Impersonation & Phishing Takedown",
            icon: ShieldCheck,
            content: <p>Identify typosquatting domains, phishing infrastructure impersonating your brand, and fraudulent mobile apps, coordinating swift global registrar takedowns.</p>
        },
    ];

    return (
        <ServiceSubPageLayout
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            heroTitle="Cyber Crime Investigation & Attribution"
            heroSubtitle="Relentless Pursuit, Forensic Accountability, and Threat Actor Attribution"
            sections={sections}
            faqData={FAQ_DATA['irdf-cyber-crime']}
            ctaText="Initiate Cyber Crime Investigation"
            serviceName="Cyber Crime Investigation & Attribution"
        />
    );
};

export default CyberCrimeInvestigationPage;
