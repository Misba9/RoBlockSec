import { ShieldCheck, Smartphone, Globe, BrainCircuit, Bot, FileCheck, Search, Server, Users, GraduationCap, Target, Shield, HeartHandshake, Lightbulb, Code, ShieldQuestion, Briefcase, Building, Eye, LifeBuoy } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about', key: 'about', label: 'About' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/products', key: 'products', label: 'Products' },
  { href: '/blog', key: 'blog', label: 'Insights' },
  { href: '/team', key: 'team', label: 'Team' },
  // { href: '/contact', key: 'contact', label: 'Contact' },
];

export const ALL_SERVICES = [
  {
    slug: 'red-teaming',
    title: 'Red Teaming (VAPT)',
    description: 'Simulating real-world attacks to identify and mitigate vulnerabilities before they are exploited.',
    icon: Target,
    subServices: [
      { slug: 'web-application-security', name: 'Web Application Security', icon: Globe },
      { slug: 'mobile-application-security', name: 'Mobile Application Security', icon: Smartphone },
      { slug: 'network-security', name: 'Network Security', icon: Server },
      { slug: 'iot-security', name: 'IoT Security', icon: Bot },
      { slug: 'ai-ml-security', name: 'AI/ML Security', icon: BrainCircuit },
      { slug: 'blockchain-audit', name: 'Blockchain Audit', icon: ShieldCheck },
    ]
  },
  {
    slug: 'blue-teaming',
    title: 'Blue Teaming',
    description: '24/7 proactive defense, threat hunting, and incident response to protect your digital assets.',
    icon: Shield,
     subServices: [
      { slug: '24-7-security-monitoring', name: '24/7 Security Monitoring & IR', icon: Eye },
      { slug: 'threat-intelligence', name: 'Threat Intelligence & Hunting', icon: Search },
      { slug: 'edr-xdr-management', name: 'EDR/XDR Management', icon: Smartphone },
      { slug: 'incident-response-retainer', name: 'Incident Response Retainer', icon: LifeBuoy },
    ]
  },
  {
    slug: 'grc-services',
    title: 'GRC Services',
    description: 'Aligning your security posture with business objectives through governance, risk, and compliance.',
    icon: FileCheck,
    subServices: [
      { slug: 'governance', name: 'Governance', icon: Building },
      { slug: 'risk-management', name: 'Risk Management', icon: ShieldQuestion },
      { slug: 'compliance', name: 'Compliance', icon: Briefcase },
    ]
  },
  {
    slug: 'product-development',
    title: 'Cybersecurity Product Development',
    description: 'Building custom, AI-driven security tools and platforms to automate and enhance your defenses.',
    icon: Code,
  },
  {
    slug: 'training',
    title: 'Training & Awareness',
    description: 'Empowering your team with the knowledge and skills to defend against modern cyber threats.',
    icon: GraduationCap,
  }
];

export const STATS = [
    { value: 500, label: 'Penetration Tests', suffix: '+' },
    { value: 99, label: 'Client Trust', suffix: '%' },
    { value: 7, label: 'Monitoring', prefix: '24/' },
    { value: 10, label: 'Years of Expertise', suffix: '+' },
];

export const CORE_VALUES = [
    { title: 'Integrity', description: 'We operate with unwavering honesty and ethical principles.', icon: HeartHandshake },
    { title: 'Innovation', description: 'We pioneer new technologies and strategies to stay ahead of threats.', icon: Lightbulb },
    { title: 'Proactivity', description: 'We anticipate and neutralize threats before they can cause harm.', icon: ShieldCheck },
    { title: 'Trust', description: 'We build lasting partnerships based on transparency and reliability.', icon: Users },
];

export const TIMELINE_MILESTONES = [
    { year: '2024', event: 'Roblocksec Founded' },
    { year: '2025', event: 'Launched 24/7 SOC Services' },
    { year: '2026', event: 'Launching Data Rakshak & BreachSimu', link: 'https://datarakshak.in/' },
    { year: '2026', event: 'Launched CTF & Bug Bounty Platform' },
];

export const DEMO_CASE_STUDIES = [
    { title: 'Reduced Attack Surface by 90% for Banking Client', category: 'Fintech', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0d1117/00ffff?text=Case+Study' },
    { title: 'Secured 10M+ Mobile App Users for E-commerce Firm', category: 'E-commerce', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0d1117/8957e5?text=Case+Study' },
    { title: 'Prevented Major Ransomware Attack via 24/7 SOC', category: 'Healthcare', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0d1117/1f6feb?text=Case+Study' },
    { title: 'Achieved Full GDPR Compliance in Record Time', category: 'SaaS', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0d1117/238636?text=Case+Study' },
];

export const DEMO_TEAM = [
    { name: 'Roshan kappala', role: 'Founder and CEO', image: 'roshan.png', specialization: 'AI in Cybersecurity', category: 'founding' },
    { name: 'Kishore Poonamalle', role: 'Co-Founder', image: 'https://placehold.co/400x400/0d1117/ffffff?text=K.P', specialization: 'Governance, Risk & Compliance (GRC)', category: 'founding' },
    { name: 'Anudha Poonamalle', role: 'Co-Founder', image: 'https://placehold.co/400x400/0d1117/ffffff?text=A.P', specialization: 'Cyber Operations & Strategy', category: 'founding' },
    { name: 'Mano Sundhar', role: 'Co-Founder', image: 'https://placehold.co/400x400/0d1117/ffffff?text=M.S', specialization: 'Security Research & R&D', category: 'founding' }
];

export const DEMO_BLOG_POSTS = [
    { 
      title: 'The Rise of AI in Phishing Attacks: A Deep Dive', 
      category: 'Threat Intelligence', 
      image: '/blog-ai-phishing.png',
      excerpt: 'Threat actors are now leveraging generative AI to create highly convincing phishing emails at scale. We break down the techniques and show you how to adapt your defenses.',
      date: 'October 26, 2025' 
    },
    { 
      title: 'Zero-Day Exploit: Deconstructing the "LogForge" Vulnerability', 
      category: 'Red Teaming', 
      image: '/blog-zero-day.png',
      excerpt: 'Our research team discovered a critical zero-day vulnerability in a popular logging library. This is the technical breakdown of our findings and the responsible disclosure process.',
      date: 'October 15, 2025' 
    },
    { 
      title: 'Building a Resilient Security Culture: A CISO\'s Guide', 
      category: 'GRC Updates', 
      image: '/blog-security-culture.png',
      excerpt: 'Beyond technology, your people are your greatest asset. This guide provides actionable steps for CISOs to foster a proactive and resilient security culture across the organization.',
      date: 'September 30, 2025' 
    },
    { 
      title: 'Post-Quantum Cryptography: Protecting Data for the Next Decade', 
      category: 'Cyber Trends', 
      image: '/blog-quantum.png',
      excerpt: 'The quantum threat to modern cryptography is real. We explore the timeline, the risks, and the steps organizations should be taking now to prepare.',
      date: 'November 12, 2025' 
    },
    { 
      title: 'Introducing Data Rakshak: The Future of Data Privacy', 
      category: 'Product Updates', 
      image: '/blog-data-rakshak.png',
      excerpt: 'We are proud to announce the launch of Data Rakshak, our comprehensive platform for data protection and regulatory compliance.',
      date: 'November 05, 2025' 
    },
    {
      title: 'Launching Our CTF & Bug Bounty Platform: Hunt, Hack, Win',
      category: 'Product Updates',
      image: '/blog-ctf.png',
      excerpt: 'RoBlockSec is proud to launch its own CTF (Capture The Flag) & Bug Bounty platform in 2026 — a competitive arena for security researchers, students, and professionals to sharpen skills, discover real vulnerabilities, and earn rewards.',
      date: 'January 15, 2026'
    },
];

export const DEMO_CAREERS = [
    { 
        title: 'Penetration Testing Consultant', 
        location: 'Remote', 
        type: 'Full-time', 
        description: 'As a Penetration Testing Consultant, you will lead complex red team engagements, simulate advanced adversaries, and help our clients identify and mitigate critical vulnerabilities in their applications and networks.',
        requirements: ['5+ years in offensive security', 'Expertise in web, mobile, and network VAPT', 'Proficiency in scripting (Python, PowerShell)', 'OSCP, OSCE, or equivalent certification preferred'] 
    },
    { 
        title: 'Security Operations Consultant', 
        location: 'Remote', 
        type: 'Full-time', 
        description: 'Join our 24/7 Security Operations Center to investigate and respond to complex security alerts. You will serve as an escalation point, perform threat hunting, and contribute to the continuous improvement of our detection capabilities.',
        requirements: ['3+ years in a SOC environment', 'Strong understanding of SIEM, EDR, and network analysis tools', 'Experience with incident response procedures', 'GIAC certifications (GCIH, GCFA) are a plus'] 
    },
    { 
        title: 'Cybersecurity GRC Consultant', 
        location: 'Remote', 
        type: 'Full-time', 
        description: 'Help our clients build and mature their security programs by providing expert guidance on governance, risk management, and compliance. You will conduct risk assessments, develop security policies, and prepare clients for audits.',
        requirements: ['4+ years in GRC consulting', 'Deep knowledge of frameworks like ISO 27001, NIST, and PCI DSS', 'Excellent communication and client-facing skills', 'CISA, CISM, or CRISC certification highly desirable'] 
    },
    // Internship positions
    { 
        title: 'VAPT (Vulnerability Assessment and Penetration Testing) Intern', 
        location: 'Remote', 
        type: 'Internship', 
        description: 'Work alongside our elite red team to conduct vulnerability assessments and penetration testing on client systems. You will gain hands-on experience with industry-standard tools and methodologies while contributing to real-world security engagements.',
        requirements: ['Currently pursuing a degree in Cybersecurity, Computer Science, or related field', 'Basic understanding of networking concepts', 'Familiarity with security tools (Burp Suite, Nmap, Metasploit)', 'Strong problem-solving skills and attention to detail'] 
    },
    { 
        title: 'SOC (Security Operations Center) Intern', 
        location: 'Remote', 
        type: 'Internship', 
        description: 'Support our 24/7 Security Operations Center by analyzing security alerts, investigating potential threats, and assisting with incident response activities. You will gain practical experience with SIEM, EDR, and other security monitoring tools.',
        requirements: ['Currently pursuing a degree in Cybersecurity, Computer Science, or related field', 'Basic understanding of security concepts and threats', 'Familiarity with log analysis', 'Ability to work in a fast-paced environment'] 
    },
    { 
        title: 'GRC (Governance, Risk, and Compliance) Intern', 
        location: 'Remote', 
        type: 'Internship', 
        description: 'Assist our GRC team in developing security policies, conducting risk assessments, and supporting compliance initiatives. You will gain exposure to various frameworks and standards while contributing to client security programs.',
        requirements: ['Currently pursuing a degree in Cybersecurity, Business, or related field', 'Basic understanding of risk management concepts', 'Strong written and verbal communication skills', 'Detail-oriented with excellent organizational skills'] 
    },
    { 
        title: 'Cybersecurity Development (Sec Dev) Intern', 
        location: 'Remote', 
        type: 'Internship', 
        description: 'Join our product development team to build custom security tools and solutions. You will work on projects involving automation, threat intelligence, and security platform development using modern technologies.',
        requirements: ['Currently pursuing a degree in Computer Science, Software Engineering, or related field', 'Proficiency in at least one programming language (Python, JavaScript, Go)', 'Basic understanding of cybersecurity concepts', 'Experience with version control systems (Git)'] 
    },
    { 
        title: 'CTF (Capture The Flag) Developer Intern', 
        location: 'Remote', 
        type: 'Internship', 
        description: 'Design and develop cybersecurity challenges for our training platform and competitive events. You will create realistic scenarios that help security professionals and students develop their skills in a controlled environment.',
        requirements: ['Currently pursuing a degree in Cybersecurity, Computer Science, or related field', 'Experience with CTF platforms or challenge creation', 'Knowledge of web, binary, or crypto vulnerabilities', 'Creative problem-solving skills'] 
    },
];

export const FAQ_DATA = {
  'red-teaming': [
    { q: 'What is the main goal of Red Teaming?', a: 'The primary goal is to simulate a real-world cyberattack to test an organization\'s defensive capabilities and identify vulnerabilities before malicious actors can exploit them.' },
    { q: 'How long does a typical VAPT engagement take?', a: 'The duration varies depending on the scope, but a standard web application assessment can take anywhere from one to four weeks.' },
  ],
  'blue-teaming': [
    { q: 'What does 24/7 monitoring actually involve?', a: 'It involves continuous analysis of security alerts from various sources (SIEM, EDR, etc.) by our SOC analysts to detect, triage, and respond to threats in real-time, any time of day.' },
    { q: 'Is a retainer necessary for incident response?', a: 'While not mandatory, a retainer guarantees you priority access to our expert team during a crisis, significantly reducing response time and potential damage.' },
  ],
  'grc-services': [
    { q: 'Which compliance standards do you cover?', a: 'We have expertise in a wide range of standards, including ISO 27001, PCI DSS, HIPAA, GDPR, SOC 2, and more. We tailor our approach to your specific industry and regulatory needs.' },
    { q: 'How does GRC benefit my business?', a: 'Effective GRC aligns your security program with business objectives, reduces risk, ensures regulatory compliance, and builds trust with customers and stakeholders.' },
  ],
  'product-development': [
    { q: 'Can you build a tool for our specific needs?', a: 'Absolutely. We specialize in developing custom cybersecurity tools and platforms tailored to unique organizational challenges and workflows.' },
  ],
  'training': [
    { q: 'Who is the target audience for your training?', a: 'We offer a wide range of programs, from technical deep-dives for developers and security professionals to general awareness training for all employees.' },
  ],
};

export const COMPLIANCE_LOGOS = [
    { name: 'ISO 27001', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x60/ffffff/000000?text=ISO+27001' },
    { name: 'GDPR', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x60/ffffff/000000?text=GDPR' },
    { name: 'HIPAA', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x60/ffffff/000000?text=HIPAA' },
    { name: 'PCI DSS', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x60/ffffff/000000?text=PCI+DSS' },
    { name: 'DPDPA 2023', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x60/ffffff/000000?text=DPDPA+2023' },
    { name: 'DPDPA 2025', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x60/ffffff/000000?text=DPDPA+2025' },
    { name: 'SOC 2', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x60/ffffff/000000?text=SOC+2' },
];
