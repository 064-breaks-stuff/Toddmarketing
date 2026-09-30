const ANALYTICS_EVENT_NAME = 'todd-marketing:analytics';

export const ANALYTICS_EVENTS = {
  CTA_CLICK: 'cta_click',
  SERVICE_PANEL_VIEW: 'service_panel_view',
  SERVICE_ANCHOR_VIEW: 'service_anchor_view',
  GROWTH_SYSTEM_VIEW: 'growth_system_view',
  HOW_IT_WORKS_VIEW: 'how_it_works_view',
  RESULTS_CASE_STUDY_VIEW: 'results_case_study_view',
  RESULTS_MODEL_OPENED: 'results_model_opened',
  CONTACT_VIEW: 'contact_view',
  CALENDAR_IFRAME_LOADED: 'calendar_iframe_loaded',
  CALENDAR_FALLBACK_CLICKED: 'calendar_fallback_clicked',
  BOOKING_COMPLETED: 'booking_completed'
};

function getPageContext() {
  if (typeof window === 'undefined') {
    return {};
  }

  return {
    page_path: `${window.location.pathname}${window.location.hash}`,
    page_title: document.title,
    page_url: window.location.href
  };
}

function removeUndefinedValues(payload) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined)
  );
}

export function trackEvent(eventName, properties = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = removeUndefinedValues({
    event_name: eventName,
    ...getPageContext(),
    ...properties
  });

  window.dispatchEvent(
    new CustomEvent(ANALYTICS_EVENT_NAME, {
      detail: payload
    })
  );

  if (import.meta.env.DEV) {
    console.info('[Todd Marketing analytics]', payload);
  }
}

export function trackPageView(routeMetadata = {}) {
  trackEvent('page_view', {
    route_name: routeMetadata.routeName,
    page_title: routeMetadata.title,
    page_description: routeMetadata.description
  });
}

export function createCtaTrackingProps({
  label,
  location,
  serviceContext,
  caseStudy
}) {
  return removeUndefinedValues({
    cta_label: label,
    cta_location: location,
    service_context: serviceContext,
    case_study: caseStudy
  });
}