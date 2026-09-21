import ServicePageTemplate from '../components/services/ServicePageTemplate';

export default function CrmAutomationPage() {
  return (
    <ServicePageTemplate
      category="Todd Marketing / Revenue Operations"
      title="CRM and automation that keep opportunity moving after it arrives."
      description="Todd Marketing connects GoHighLevel or your existing CRM with n8n workflows, routing logic, follow-up systems, booking steps, and visibility that help teams act with context."
      type="automation"
      problems={[
        {
          title: 'Leads arrive without clear ownership.',
          copy: 'A lead is not useful if the right person does not know it exists, what it needs, or how quickly a next step should happen.'
        },
        {
          title: 'Follow-up depends on inconsistent manual effort.',
          copy: 'When response, nurture, reminders, and reactivation rely entirely on memory, opportunity leaks from the system after acquisition has already been paid for.'
        },
        {
          title: 'CRM data exists but cannot explain what happened.',
          copy: 'Disconnected tags, pipelines, sources, and workflow states make it difficult to see whether an opportunity was routed, worked, booked, or lost.'
        }
      ]}
      deliverables={[
        {
          title: 'CRM architecture',
          copy: 'GoHighLevel planning, implementation support, or integration with an existing CRM around the real stages your sales and operations teams use.'
        },
        {
          title: 'n8n workflow orchestration',
          copy: 'Workflow design that connects lead sources, forms, calendars, communication tools, and internal systems without unnecessary manual handling.'
        },
        {
          title: 'Routing and follow-up',
          copy: 'Lead assignment, qualification logic, response triggers, reminders, missed-call recovery, nurture, reactivation, and escalation paths.'
        },
        {
          title: 'Booking and visibility',
          copy: 'Calendar workflows, pipeline checkpoints, source tagging, operational reporting, and a clearer view of what happened after the lead entered the system.'
        }
      ]}
      bestFit={[
        'Your team is generating leads but response speed, routing, and follow-up are inconsistent.',
        'You use GoHighLevel or another CRM but need the structure and automation to reflect how your business actually works.',
        'Lead sources, forms, calendars, and internal notifications are disconnected from one another.',
        'You need a practical way to see which opportunities were routed, worked, booked, nurtured, or lost.'
      ]}
      mechanismTitle="Every lead deserves a clear, intelligent next step."
      mechanismCopy="Revenue operations turns demand into an owned process. It preserves where the opportunity came from, assigns it correctly, activates the right follow-up, and gives the team visibility into the next action."
      mechanism={[
        {
          label: 'Lead enters',
          detail: 'Source and service context captured'
        },
        {
          label: 'CRM organizes',
          detail: 'Contact, pipeline, and ownership established'
        },
        {
          label: 'Workflow activates',
          detail: 'Routing and follow-up happen on time'
        },
        {
          label: 'Team acts',
          detail: 'Booking and outcome stay visible'
        }
      ]}
      previous={{
        label: 'Explore Demand Generation',
        to: '/services/advertising'
      }}
      next={{
        label: 'Book a Growth Systems Audit',
        to: '/contact'
      }}
    />
  );
}