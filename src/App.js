import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import i18n from 'utils/i18next';

import Loader from './helpers/components/Loader/Loader';
import SEO from 'components/SEO/SEO';
const Layout = lazy(() => import('./helpers/components/Layout/Layout'));
const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('components/Hero/Hero'));
const CharacterUpgrade = lazy(() => import('./components/CharacterUpgrade/CharacterUpgrade'));
const WhoAreWe = lazy(() => import('components/WhoAreWe/WhoAreWe'));
const Features = lazy(() => import('components/Features/Features'));
const OurProducts = lazy(() => import('components/OurProducts/OurProducts'));
const Calculator = lazy(() => import('components/Calculator/Calculator'));
const WorkProcess = lazy(() => import('components/WorkProcess/WorkProcess'));
const Case = lazy(() => import('components/Case/Case'));
const ContactForm = lazy(() => import('components/ContactForm/ContactForm'));
const Clients = lazy(() => import('components/Clients/Clients'));
const Footer = lazy(() => import('components/Footer/Footer'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/en" element={<AppLayout lang="en" />} />
          <Route path="/ua" element={<AppLayout lang="ua" />} />
          <Route path="/ru" element={<AppLayout lang="ru" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

function AppLayout({ lang }) {
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <>
      <SEO currentLang={lang} />
      <Layout>
        <Header />
        <Hero />
        <CharacterUpgrade />
        <WhoAreWe />
        <Features />
      </Layout>
      <OurProducts />
      <Layout>
        <Calculator />
        <WorkProcess />
        <Case />
        <ContactForm />
        <Clients />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
