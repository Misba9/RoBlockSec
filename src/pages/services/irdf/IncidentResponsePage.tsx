import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { ShieldAlert, Zap, Lock, RefreshCw, CheckCircle2 } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const IncidentResponsePage: React.FC = () => {
    const pageTitle = "Rapid Incident Containment & Triage";
    const pageDescription = "Emergency rapid-response containment, threat actor eviction, ransomware isolation, and business continuity restoration.";

    const sections = [
        {
            title: "Immediate Threat Containment",
            icon: ShieldAlert,
            content: <p>When a security incident strikes, minutes matter. Our incident responders rapidly isolate affected network segments, sever malicious C2 channels, revoke compromised tokens, and halt lateral movement before catastrophic impact occurs.</p>
        },
        {
            title: "Live Crisis Triage & Scoping",
            icon: Zap,
            content: <p>Determine the exact blast radius of the intrusion across hybrid cloud, on-premise endpoints, identity providers (IdPs), and email systems to identify every compromised asset without disrupting unaffected business operations.</p>
        },
        {
            title: "Adversary Eviction & Hardening",
            icon: Lock,
            content: <p>Execute coordinated remediation protocols to purge web shells, backdoor scheduled tasks, rogue domain admins, and persistence hooks across your directory infrastructure simultaneously to prevent adversary re-entry.</p>
        },
        {
            title: "Safe Business Recovery",
            icon: RefreshCw,
            content: <p>Guide IT and security teams through verified restoration from golden images and immutable backups, implementing enhanced telemetry and custom detection rules before returning systems to production.</p>
        },
        {
            title: "Post-Incident Governance & Lessons Learned",
            icon: CheckCircle2,
            content: <p>Deliver in-depth root cause analysis (RCA), executive debriefings, regulatory breach notification guidelines (such as CERT-In & DPDPA compliance), and actionable defensive hardening roadmaps.</p>
        },
    ];

    return (
        <ServiceSubPageLayout
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            heroTitle="Rapid Incident Containment & Triage"
            heroSubtitle="Stopping Intrusions in Their Tracks and Restoring Operational Integrity"
            sections={sections}
            faqData={FAQ_DATA['irdf-cyber-crime']}
            ctaText="Request Emergency Incident Support"
            serviceName="Incident Response & Rapid Containment"
        />
    );
};

export default IncidentResponsePage;
