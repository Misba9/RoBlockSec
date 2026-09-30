import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ParticlesBackground from '../shared/ParticlesBackground';
import Breadcrumbs from '../ui/Breadcrumbs';
import GlobalContact from '../shared/GlobalContact';
import CookieBanner from '../ui/CookieBanner';
import { useTheme } from '../../context/ThemeProvider';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className="relative flex flex-col min-h-screen">
      {theme === 'dark' && <ParticlesBackground />}
      <Header />
      <Breadcrumbs />
      <main className="flex-grow z-10">{children}</main>
      <GlobalContact />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default MainLayout;
