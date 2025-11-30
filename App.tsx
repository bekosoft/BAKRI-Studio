import React from 'react';
import { LayoutProvider } from './components/LayoutContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BrandIdentity from './components/BrandIdentity';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-brand-dark dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <BrandIdentity />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LayoutProvider>
      <AppContent />
    </LayoutProvider>
  );
};

export default App;