import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import Seo from './Seo';
import HomePage from '../pages/HomePage';
import EcosystemPage from '../pages/EcosystemPage';
import ServicesPage from '../pages/ServicesPage';
import WebsitesFunnelsPage from '../pages/WebsitesFunnelsPage';
import AdvertisingPage from '../pages/AdvertisingPage';
import CrmAutomationPage from '../pages/CrmAutomationPage';
import ProcessPage from '../pages/ProcessPage';
import ResultsPage from '../pages/ResultsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';
import TermsPage from '../pages/TermsPage';
import NotFoundPage from '../pages/NotFoundPage';

const footerWithoutGrowthCtaRoutes = [
  '/',
  '/ecosystem',
  '/services',
  '/process',
  '/results',
];

function AppShell() {
  const { pathname } = useLocation();

  const lightHeaderRoutes = ['/contact'];

  const darkMode = !lightHeaderRoutes.includes(pathname);

  const normalizedPathname = pathname.replace(/\/+$/, '') || '/';

  const showGrowthCta =
    !footerWithoutGrowthCtaRoutes.includes(normalizedPathname);

  return (
    <div className={darkMode ? 'app-shell app-shell--dark' : 'app-shell'}>
      <ScrollToTop />
      <Seo />
      <Header darkMode={darkMode} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/websites-funnels"
            element={<WebsitesFunnelsPage />}
          />
          <Route path="/services/advertising" element={<AdvertisingPage />} />
          <Route
            path="/services/crm-automation"
            element={<CrmAutomationPage />}
          />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer showGrowthCta={showGrowthCta} />
    </div>
  );
}

export default function App() {
  return <AppShell />;
}