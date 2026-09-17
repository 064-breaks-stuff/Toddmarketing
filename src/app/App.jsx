import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import HomePage from '../pages/HomePage';
import EcosystemPage from '../pages/EcosystemPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import ServicesPage from '../pages/ServicesPage';
import ProcessPage from '../pages/ProcessPage';
import ResultsPage from '../pages/ResultsPage';
import AboutPage from '../pages/AboutPage';

function AppShell() {
  const { pathname } = useLocation();

  const darkRoutes =
    pathname === '/' ||
    pathname === '/ecosystem' ||
    pathname === '/services' ||
    pathname === '/process' ||
    pathname === '/results' ||
    pathname === '/about';

  return (
    <div className={darkRoutes ? 'app-shell app-shell--dark' : 'app-shell'}>
      <ScrollToTop />
      <Header darkMode={darkRoutes} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return <AppShell />;
}