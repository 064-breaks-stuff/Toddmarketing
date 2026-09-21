import ServicePageTemplate from '../components/services/ServicePageTemplate';

export default function AdvertisingPage() {
  return (
    <ServicePageTemplate
      category="Todd Marketing / Demand Generation"
      title="Paid demand built around intent—not activity for activity’s sake."
      description="Todd Marketing aligns Google Ads, Meta Ads, and Local Services Ads with the offer, landing experience, CRM handoff, and reporting context needed to make demand useful."
      type="advertising"
      problems={[
        {
          title: 'Spend creates clicks but not enough usable opportunities.',
          copy: 'Campaign activity is not the goal. The goal is qualified attention that enters a conversion path your team can actually work.'
        },
        {
          title: 'Channel decisions are made without buyer-intent context.',
          copy: 'Google Search, Meta, and Local Services Ads have different jobs. Using them without a clear role creates weak message match and unclear performance.'
        },
        {
          title: 'Ad performance is disconnected from downstream lead quality.',
          copy: 'A campaign can appear successful at the click or form level while producing opportunities that never reach a real sales-ready state.'
        }
      ]}
      deliverables={[
        {
          title: 'Channel and intent strategy',
          copy: 'Google Ads, Meta Ads, and Local Services Ads planning based on service priorities, market conditions, offer maturity, and buyer intent.'
        },
        {
          title: 'Offer and message alignment',
          copy: 'Ad messaging, creative direction, landing-page content, and calls to action designed to maintain a clear story from impression to action.'
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
        'You need more qualified demand but want channel decisions based on intent rather than generic media plans.',
        'Google Ads, Meta Ads, or LSAs are producing activity without giving your team enough usable lead context.',
        'You need paid traffic and landing pages to work as one system instead of being managed separately.',
        'You want reporting that connects campaign signals to downstream sales and operational outcomes.'
      ]}
      mechanismTitle="A better media decision happens after the click."
      mechanismCopy="Demand generation works when the channel, message, offer, page, tracking, and CRM handoff reinforce one another. Todd Marketing builds the path around the campaign—not just the campaign itself."
      mechanism={[
        {
          label: 'Intent defined',
          detail: 'Choose the channel and audience role'
        },
        {
          label: 'Message aligned',
          detail: 'Match the offer to the moment'
        },
        {
          label: 'Action captured',
          detail: 'Send traffic into the right page'
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