import { lazy } from 'react';

import { useTranslation } from 'react-i18next';
import 'utils/i18next';
import Meta from 'components/Meta/Meta';

const Layout = lazy(() => import('helpers/components/Layout/Layout'));
const Header = lazy(() => import('components/Header/Header'));
const Hero = lazy(() => import('components/Hero/Hero'));
const CharacterUpgrade = lazy(() => import('components/CharacterUpgrade/CharacterUpgrade'));
const WhoAreWe = lazy(() => import('components/WhoAreWe/WhoAreWe'));
const Features = lazy(() => import('components/Features/Features'));
const OurProducts = lazy(() => import('components/OurProducts/OurProducts'));
const Calculator = lazy(() => import('components/Calculator/Calculator'));
const WorkProcess = lazy(() => import('components/WorkProcess/WorkProcess'));
const Case = lazy(() => import('components/Case/Case'));
const ContactForm = lazy(() => import('components/ContactForm/ContactForm'));
const Clients = lazy(() => import('components/Clients/Clients'));
const Footer = lazy(() => import('components/Footer/Footer'));

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Meta title={t('meta.title')} description={t('meta.description')} />
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

export default HomePage;
