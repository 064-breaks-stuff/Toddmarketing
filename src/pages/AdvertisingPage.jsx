import ServicePageTemplate from '../components/services/ServicePageTemplate';

export default function AdvertisingPage() {
  return (
    <ServicePageTemplate
      category="Todd Marketing / Demand Generation"
      title="High-intent local demand built around real buying signals."
      description="Todd Marketing aligns Google Ads, Local Services Ads, Google Business Profile visibility, landing experiences, CRM handoff, and reporting context to make demand useful."
      type="advertising"
      problems={[
        {
          title: 'Spend creates clicks but not enough usable opportunities.',
          copy: 'Campaign activity is not the goal. The goal is qualified attention that enters a conversion path your team can actually work.'
        },
        {
          title: 'Local demand channels are not assigned a clear role.',
          copy: 'Google Search, Local Services Ads, and Google Business Profile visibility each serve a different purpose. Without a clear role, message match and lead quality become harder to manage.'
        },
        {
          title: 'Ad performance is disconnected from downstream lead quality.',
          copy: 'A campaign can appear successful at the click or form level while producing opportunities that never reach a real sales-ready state.'
        }
      ]}
      deliverables={[
        {
          title: 'Channel and intent strategy',
          copy: 'Google Ads, Local Services Ads, and Google Business Profile visibility planning based on service priorities, market conditions, offer maturity, and buyer intent.'
        },
        {
          title: 'Offer and landing-page alignment',
          copy: 'Search messaging, local visibility, landing-page content, and calls to action designed to maintain a clear story from search to action.'
        },
        {
          title: 'Tracking architecture',
          copy: 'Event definitions, conversion planning, source context, and reporting structures that make campaign signals more useful after the click.'
        },
        {
          title: 'Lead-quality feedback loops',
          copy: 'Campaign optimization informed by CRM outcomes, response patterns, booking behavior, and the operational quality of leads—not vanity metrics alone.'
        }
      ]}
      bestFit={[
        'You need more qualified demand but want channel decisions based on local buying intent rather than generic media plans.',
        'Google Ads, Local Services Ads, or local visibility are producing activity without giving your team enough usable lead context.',
        'You need paid traffic, local search visibility, and landing pages to work as one system instead of being managed separately.',
        'You want reporting that connects campaign signals to downstream sales and operational outcomes.'
      ]}
      mechanismTitle="A better acquisition decision happens after the click."
      mechanismCopy="Demand generation works when Google Ads, Local Services Ads, local visibility, offer, landing page, tracking, and CRM handoff reinforce one another. Todd Marketing builds the path around the opportunity—not just the campaign."
      mechanism={[
        {
          label: 'Intent defined',
          detail: 'Choose the channel and local search role'
        },
        {
          label: 'Message aligned',
          detail: 'Match the offer to the search moment'
        },
        {
          label: 'Action captured',
          detail: 'Send demand into the right page'
        },
        {
          label: 'Outcome reviewed',
          detail: 'Use CRM context to improve demand'
        }
      ]}
      previous={{
        label: 'Explore Conversion Architecture',
        to: '/services/websites-funnels'
      }}
      next={{
        label: 'Explore Revenue Operations',
        to: '/services/crm-automation'
      }}
    />
  );
}