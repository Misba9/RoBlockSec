import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { Fingerprint, HardDrive, ShieldCheck, CheckSquare, Search } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const DigitalForensicsPage: React.FC = () => {
    const pageTitle = "Digital Forensics & Artifact Recovery";
    const pageDescription = "Certified digital forensics, volatile memory dumps, bit-stream disk imaging, and court-admissible evidentiary reporting.";

    const sections = [
        {
            title: "Bit-Stream Disk & Memory Acquisition",
            icon: HardDrive,
            content: <p>We perform forensically sound bit-by-bit physical and logical imaging of workstations, cloud instances, database volumes, and mobile devices using write-blocking hardware and cryptographic hashing (SHA-256) to ensure zero data alteration.</p>
        },
        {
            title: "Volatile Artifact & RAM Analysis",
            icon: Fingerprint,
            content: <p>Extract unencrypted cryptographic keys, injected DLLs, terminated memory processes, command histories, and live network sockets directly from volatile memory (RAM) before power-cycling or evidence destruction can occur.</p>
        },
        {
            title: "Strict Chain of Custody (ISO 27037)",
            icon: ShieldCheck,
            content: <p>Every artifact is logged and preserved in accordance with ISO/IEC 27037 standards. Our chain of custody documentation ensures all extracted digital proof is completely admissible in courtrooms and corporate legal arbitrations.</p>
        },
        {
            title: "Log Reconstruction & Anti-Forensics Bypass",
            icon: Search,
            content: <p>Recover wiped event logs, deleted shadow copies, altered registry hives, Prefetch artifacts, and MFT records to reconstruct adversary timelines even after deliberate attempts by attackers to conceal their tracks.</p>
        },
        {
            title: "Key Deliverables",
            icon: CheckSquare,
            content: <p>Comprehensive forensic examination report, cryptographic evidence manifests, visual attack timeline reconstruction, and executive briefing ready for legal counsel and cyber insurance underwriters.</p>
        },
    ];

    return (
        <ServiceSubPageLayout
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            heroTitle="Digital Forensics & Evidence Recovery"
            heroSubtitle="Uncovering Immutable Digital Truth Through Deep Forensic Investigation"
            sections={sections}
            faqData={FAQ_DATA['irdf-cyber-crime']}
            ctaText="Engage Digital Forensics Team"
            serviceName="Digital Forensics & Artifact Recovery"
        />
    );
};

export default DigitalForensicsPage;
