import ServicePageTemplate from '../components/services/ServicePageTemplate';

export default function WebsitesFunnelsPage() {
  return (
    <ServicePageTemplate
      category="Todd Marketing / Conversion Architecture"
      title="Websites and funnels built to move serious buyers toward action."
      description="Todd Marketing designs conversion paths that make the offer clearer, the next step easier, and the handoff into your CRM more useful."
      type="conversion"
      problems={[
        {
          title: 'Traffic arrives without a clear next step.',
          copy: 'Visitors can understand what you do and still leave because the page does not make the action, offer, or value obvious enough.'
        },
        {
          title: 'Campaign traffic lands on generic experiences.',
          copy: 'Paid traffic needs message match, focused context, and a conversion path designed for the reason that visitor clicked.'
        },
        {
          title: 'Lead capture loses the context sales teams need.',
          copy: 'Forms, calls, and bookings should pass source, service interest, and intent into the CRM instead of creating disconnected records.'
        }
      ]}
      deliverables={[
        {
          title: 'Conversion architecture',
          copy: 'Information hierarchy, page sequencing, CTA logic, and trust placement designed around the decision a buyer needs to make.'
        },
        {
          title: 'Websites and landing pages',
          copy: 'Custom website and campaign-page builds that connect positioning, offer clarity, responsive design, and practical conversion paths.'
        },
        {
          title: 'Offer and CTA systems',
          copy: 'Clearer service framing, page-level calls to action, form structure, booking pathways, and reduced decision friction.'
        },
        {
          title: 'CRM and tracking handoff',
          copy: 'Forms, calendars, call actions, source tracking, and lead context prepared to enter the right downstream system.'
        }
      ]}
      bestFit={[
        'Your existing website looks acceptable but does not create enough qualified actions.',
        'Paid traffic is being sent to pages that were not built for the campaign or offer.',
        'Your team cannot reliably connect a website action to the CRM, booking flow, or next owner.',
        'You need a stronger site before investing more aggressively in Google Ads, Meta, or Local Services Ads.'
      ]}
      mechanismTitle="From first click to an informed next step."
      mechanismCopy="Conversion architecture is not simply visual design. It connects a buyer’s reason for arriving, the clarity of the offer, the action they take, and the information your team receives afterward."
      mechanism={[
        {
          label: 'Intent arrives',
          detail: 'Traffic reaches the right page'
        },
        {
          label: 'Offer clarifies',
          detail: 'Value and proof reduce friction'
        },
        {
          label: 'Action happens',
          detail: 'Form, call, or booking is captured'
        },
        {
          label: 'Context transfers',
          detail: 'CRM receives usable lead detail'
        }
      ]}
      previous={{
        label: 'Explore the Growth System',
        to: '/ecosystem'
      }}
      next={{
        label: 'Explore Demand Generation',
        to: '/services/advertising'
      }}
    />
  );
}