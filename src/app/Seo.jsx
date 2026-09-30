import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

const CANONICAL_ORIGIN = 'https://toddmarketing.net';
const DEFAULT_IMAGE = `${CANONICAL_ORIGIN}/brand/todd-marketing-og.jpg`;

const defaultMetadata = {
  routeName: 'Home',
  title: 'Todd Marketing | Growth Infrastructure for Service Businesses',
  description:
    'Todd Marketing connects local visibility, Google Ads, Local Services Ads, conversion paths, GoHighLevel follow-up, reputation, and reporting for service businesses.',
  image: DEFAULT_IMAGE,
  type: 'website'
};

const metadataByPath = {
  '/': defaultMetadata,
  '/services': {
    routeName: 'Services',
    title: 'Local Growth Systems | Todd Marketing',
    description:
      'Explore connected local growth systems for demand generation, demand capture, CRM, automation, reputation, tracking, and reporting.'
  },
  '/services/websites-funnels': {
    routeName: 'Conversion Architecture',
    title: 'Conversion Architecture | Todd Marketing',
    description:
      'Build websites, landing pages, calls to action, booking paths, and CRM handoffs that move serious buyers toward action.'
  },
  '/services/advertising': {
    routeName: 'Demand Generation',
    title:
      'Google Ads, Local Services Ads & Local Visibility | Todd Marketing',
    description:
      'Build high-intent local demand through Google Ads, Local Services Ads, Google Business Profile visibility, landing experiences, and lead-quality context.'
  },
  '/services/crm-automation': {
    routeName: 'CRM & Automation',
    title: 'GoHighLevel CRM & Automation | Todd Marketing',
    description:
      'Connect GoHighLevel, CRM workflows, routing, follow-up, booking, review requests, reactivation, and reporting around the customer journey.'
  },
  '/ecosystem': {
    routeName: 'Growth System',
    title: 'The Todd Marketing Growth System | Todd Marketing',
    description:
      'See how local visibility, demand generation, conversion, follow-up, reputation, and reporting connect into one growth system.'
  },
  '/process': {
    routeName: 'How It Works',
    title: 'How Todd Marketing Works | Growth System Process',
    description:
      'Understand the five-stage Todd Marketing process for assessing, prioritizing, building, launching, and improving connected local growth systems.'
  },
  '/results': {
    routeName: 'Results',
    title: 'Local Lead System Case Studies | Todd Marketing',
    description:
      'Review documented Local Services Ads case studies with clear measurement boundaries, account evidence, and transparent modeled-scenario context.'
  },
  '/about': {
    routeName: 'About',
    title: 'About Todd Marketing | Growth Infrastructure',
    description:
      'Learn about Todd Marketing’s founder-led approach to connected growth infrastructure for service businesses.'
  },
  '/contact': {
    routeName: 'Contact',
    title: 'Book a Growth Infrastructure Audit | Todd Marketing',
    description:
      'Plan a Growth Infrastructure Audit to identify the constraint limiting local demand, conversion, follow-up, reputation, or reporting.'
  },
  '/privacy': {
    routeName: 'Privacy Policy',
    title: 'Privacy Policy | Todd Marketing',
    description:
      'Read the Todd Marketing Privacy Policy.'
  },
  '/terms': {
    routeName: 'Terms of Use',
    title: 'Terms of Use | Todd Marketing',
    description:
      'Read the Todd Marketing Terms of Use.'
  }
};

function getMetadata(pathname) {
  return {
    ...defaultMetadata,
    ...(metadataByPath[pathname] || {
      routeName: 'Page Not Found',
      title: 'Page Not Found | Todd Marketing',
      description:
        'The page you requested could not be found. Return to Todd Marketing to explore connected local growth systems.'
    })
  };
}

function setMetaContent(selector, content) {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute('content', content);
  }
}

function setCanonicalUrl(canonicalUrl) {
  const canonicalLink = document.head.querySelector('link[rel="canonical"]');

  if (canonicalLink) {
    canonicalLink.setAttribute('href', canonicalUrl);
  }
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getMetadata(pathname);
    const canonicalUrl = `${CANONICAL_ORIGIN}${pathname}`;

    document.title = metadata.title;

    setCanonicalUrl(canonicalUrl);

    setMetaContent('meta[name="description"]', metadata.description);

    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[property="og:image"]', metadata.image || DEFAULT_IMAGE);
    setMetaContent('meta[property="og:type"]', metadata.type || 'website');

    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);
    setMetaContent(
      'meta[name="twitter:image"]',
      metadata.image || DEFAULT_IMAGE
    );

    trackPageView({
      routeName: metadata.routeName,
      title: metadata.title,
      description: metadata.description
    });
  }, [pathname]);

  return null;
}