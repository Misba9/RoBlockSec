import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollToTop from './components/layout/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));

// Main Service Pages
const RedTeamingPage = lazy(() => import('./pages/services/RedTeamingPage'));
const BlueTeamingPage = lazy(() => import('./pages/services/BlueTeamingPage'));
const GRCPage = lazy(() => import('./pages/services/GRCPage'));
const IRDFPage = lazy(() => import('./pages/services/IRDFPage'));
const ProductDevelopmentPage = lazy(() => import('./pages/services/ProductDevelopmentPage'));
const TrainingPage = lazy(() => import('./pages/services/TrainingPage'));

// Red Teaming Sub-Pages
const WebAppSecurityPage = lazy(() => import('./pages/services/red-teaming/WebAppSecurityPage'));
const MobileAppSecurityPage = lazy(() => import('./pages/services/red-teaming/MobileAppSecurityPage'));
const NetworkSecurityPage = lazy(() => import('./pages/services/red-teaming/NetworkSecurityPage'));
const IoTSecurityPage = lazy(() => import('./pages/services/red-teaming/IoTSecurityPage'));
const AIMLSecurityPage = lazy(() => import('./pages/services/red-teaming/AIMLSecurityPage'));
const BlockchainAuditPage = lazy(() => import('./pages/services/red-teaming/BlockchainAuditPage'));

// Blue Teaming Sub-Pages
const SecurityMonitoringPage = lazy(() => import('./pages/services/blue-teaming/SecurityMonitoringPage'));
const ThreatIntelligencePage = lazy(() => import('./pages/services/blue-teaming/ThreatIntelligencePage'));
const EDRManagementPage = lazy(() => import('./pages/services/blue-teaming/EDRManagementPage'));
const IncidentResponseRetainerPage = lazy(() => import('./pages/services/blue-teaming/IncidentResponseRetainerPage'));

// IRDF Sub-Pages
const DigitalForensicsPage = lazy(() => import('./pages/services/irdf/DigitalForensicsPage'));
const IncidentResponsePage = lazy(() => import('./pages/services/irdf/IncidentResponsePage'));
const CyberCrimeInvestigationPage = lazy(() => import('./pages/services/irdf/CyberCrimeInvestigationPage'));
const MalwareAnalysisPage = lazy(() => import('./pages/services/irdf/MalwareAnalysisPage'));

// GRC Sub-Pages
const GovernancePage = lazy(() => import('./pages/services/grc-services/GovernancePage'));
const RiskManagementPage = lazy(() => import('./pages/services/grc-services/RiskManagementPage'));
const CompliancePage = lazy(() => import('./pages/services/grc-services/CompliancePage'));


const App: React.FC = () => {
  return (
    <MainLayout>
      <ScrollToTop />
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/products" element={<ProductsPage />} />

          {/* Main Service Routes */}
          <Route path="/services/red-teaming" element={<RedTeamingPage />} />
          <Route path="/services/blue-teaming" element={<BlueTeamingPage />} />
          <Route path="/services/grc-services" element={<GRCPage />} />
          <Route path="/services/irdf-cyber-crime" element={<IRDFPage />} />
          <Route path="/services/product-development" element={<ProductDevelopmentPage />} />
          <Route path="/services/training" element={<TrainingPage />} />

          {/* Red Teaming Sub-Routes */}
          <Route path="/services/red-teaming/web-application-security" element={<WebAppSecurityPage />} />
          <Route path="/services/red-teaming/mobile-application-security" element={<MobileAppSecurityPage />} />
          <Route path="/services/red-teaming/network-security" element={<NetworkSecurityPage />} />
          <Route path="/services/red-teaming/iot-security" element={<IoTSecurityPage />} />
          <Route path="/services/red-teaming/ai-ml-security" element={<AIMLSecurityPage />} />
          <Route path="/services/red-teaming/blockchain-audit" element={<BlockchainAuditPage />} />

          {/* Blue Teaming Sub-Routes */}
          <Route path="/services/blue-teaming/24-7-security-monitoring" element={<SecurityMonitoringPage />} />
          <Route path="/services/blue-teaming/threat-intelligence" element={<ThreatIntelligencePage />} />
          <Route path="/services/blue-teaming/edr-xdr-management" element={<EDRManagementPage />} />
          <Route path="/services/blue-teaming/incident-response-retainer" element={<IncidentResponseRetainerPage />} />

          {/* IRDF Sub-Routes */}
          <Route path="/services/irdf-cyber-crime/digital-forensics" element={<DigitalForensicsPage />} />
          <Route path="/services/irdf-cyber-crime/incident-response" element={<IncidentResponsePage />} />
          <Route path="/services/irdf-cyber-crime/cyber-crime-investigation" element={<CyberCrimeInvestigationPage />} />
          <Route path="/services/irdf-cyber-crime/malware-analysis" element={<MalwareAnalysisPage />} />
        
          {/* GRC Sub-Routes */}
          <Route path="/services/grc-services/governance" element={<GovernancePage />} />
          <Route path="/services/grc-services/risk-management" element={<RiskManagementPage />} />
          <Route path="/services/grc-services/compliance" element={<CompliancePage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default App;
