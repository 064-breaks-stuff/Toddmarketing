import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import PageRail from '../components/ui/PageRail';
import { CONTACT_PATH } from '../app/siteConfig';

const services = [
  {
    id: 'demand-generation',
    number: '01',
    eyebrow: 'Visibility & demand',
    title: 'Generate high-intent local demand.',
    summary:
      'Bring the right people into the system through Google Search, Local Services Ads, local visibility, and campaign pages built to turn intent into a usable inquiry.',
    problem:
      'You need more qualified demand, but you do not want activity that creates clicks without creating useful opportunities.',
    includes: [
      'Google Ads and search-intent campaign management',
      'Local Services Ads strategy and operational support',
      'Google Business Profile visibility support',
      'Service and location-specific landing pages',
      'Call, form, and source-tracking foundations'
    ],
    clientReceives: [
      'A channel plan built around where high-intent customers search',
      'Campaign and landing-page alignment around a specific conversion goal',
      'A clearer view of which acquisition signals are producing usable leads'
    ],
    systems: [
      'Google Ads',
      'Local Services Ads',
      'Google Business Profile',
      'Landing pages',
      'Tracking'
    ],
    bestFit:
      'Businesses that need more qualified local demand and want acquisition connected to the conversion path and lead follow-up.',
    cta: 'Build My Demand System',
    diagram: 'demand'
  },
  {
    id: 'demand-capture',
    number: '02',
    eyebrow: 'Conversion',
    title: 'Turn local search intent into a clear next step.',
    summary:
      'Make it easier for high-intent prospects to find the business, understand the offer, call, submit, book, or start a conversation without unnecessary friction.',
    problem:
      'You are already getting attention, but too much demand leaks because the profile, website, landing page, calls, forms, and response path are disconnected.',
    includes: [
      'Google Business Profile optimization and conversion readiness',
      'Website and landing-page conversion paths',
      'Offer, proof, CTA, call, and form structure',
      'Service-specific lead-capture experiences',
      'Lead-response workflow planning'
    ],
    clientReceives: [
      'A more direct path from local search to action',
      'Focused conversion experiences for services, locations, and campaigns',
      'Lead details structured for a useful CRM handoff'
    ],
    systems: [
      'Google Business Profile',
      'Website',
      'Landing pages',
      'Calls and forms',
      'Lead capture'
    ],
    bestFit:
      'Businesses with existing traffic or local visibility that are not converting enough of that attention into conversations, calls, or booked opportunities.',
    cta: 'See What’s Missing in My Lead Flow',
    diagram: 'capture'
  },
  {
    id: 'crm-automation',
    number: '03',
    eyebrow: 'Follow-up & growth',
    title: 'Connect marketing, follow-up, reputation, and reporting.',
    summary:
      'Use GoHighLevel and connected workflows to make every lead easier to route, respond to, nurture, book, review, reactivate, and understand.',
    problem:
      'Leads arrive, but ownership, response speed, booking, follow-up, reputation, and reporting depend too heavily on manual effort or disconnected tools.',
    includes: [
      'GoHighLevel CRM and pipeline architecture',
      'Lead routing and speed-to-lead workflows',
      'Appointment, nurture, and reactivation automation',
      'Review-request and reputation workflows',
      'Visibility into lead source, status, and next action'
    ],
    clientReceives: [
      'A lead process with clearer ownership and fewer missed handoffs',
      'Automated follow-up that supports the team rather than replacing it',
      'Pipeline and reporting context that connects marketing activity to outcomes'
    ],
    systems: [
      'GoHighLevel',
      'Pipelines',
      'Automation',
      'Review requests',
      'Reporting'
    ],
    bestFit:
      'Businesses that need their marketing, lead response, sales follow-up, reputation, and customer lifecycle activity to operate as one connected system.',
    cta: 'Connect My Marketing and Follow-Up',
    diagram: 'automation'
  }
];

function DiagramFrame({ label, children, variant }) {
  return (
    <div
      className={`services-diagram services-diagram--${variant}`}
      aria-hidden="true"
    >
      <div className="services-diagram__grid" />
      <div className="services-diagram__label">{label}</div>
      {children}
    </div>
  );
}

function DemandGenerationDiagram() {
  return (
    <DiagramFrame variant="demand" label="Local visibility and demand flow">
      <div className="services-demand-map">
        <div className="services-demand-map__source services-demand-map__source--search">
          <span>01</span>
          <strong>Google Search</strong>
          <small>High-intent demand</small>
        </div>

        <div className="services-demand-map__source services-demand-map__source--gbp">
          <span>02</span>
          <strong>Google Business Profile</strong>
          <small>Local discovery</small>
        </div>

        <div className="services-demand-map__source services-demand-map__source--lsa">
          <span>03</span>
          <strong>Local Services Ads</strong>
          <small>Service-area intent</small>
        </div>

        <span className="services-demand-map__connector services-demand-map__connector--one" />
        <span className="services-demand-map__connector services-demand-map__connector--two" />
        <span className="services-demand-map__connector services-demand-map__connector--three" />

        <div className="services-demand-map__filter">
          <span>Fit filter</span>
          <strong>Offer + location + intent</strong>
          <small>Channel and message align before the opportunity enters.</small>
        </div>

        <span className="services-demand-map__connector services-demand-map__connector--four" />

        <div className="services-demand-map__outcome">
          <span>Conversion signal</span>
          <strong>Qualified local opportunity</strong>

          <div>
            <i />
            Call
          </div>

          <div>
            <i />
            Form
          </div>

          <div>
            <i />
            Booking
          </div>
        </div>
      </div>

      <div className="services-diagram__footer">
        <span>Visibility</span>
        <span>Demand fit</span>
        <span>Opportunity context</span>
      </div>
    </DiagramFrame>
  );
}

function DemandCaptureDiagram() {
  return (
    <DiagramFrame variant="capture" label="Search-to-conversion path">
      <div className="services-capture-map">
        <div className="services-capture-map__entry services-capture-map__entry--gbp">
          <span>01</span>
          <strong>GBP</strong>
          <small>Local discovery</small>
        </div>

        <div className="services-capture-map__entry services-capture-map__entry--website">
          <span>02</span>
          <strong>Website</strong>
          <small>Offer clarity</small>
        </div>

        <div className="services-capture-map__entry services-capture-map__entry--landing">
          <span>03</span>
          <strong>Landing page</strong>
          <small>Focused action</small>
        </div>

        <span className="services-capture-map__connector services-capture-map__connector--one" />
        <span className="services-capture-map__connector services-capture-map__connector--two" />
        <span className="services-capture-map__connector services-capture-map__connector--three" />

        <div className="services-capture-map__decision">
          <span>Clear next step</span>
          <strong>Call · Form · Booking · Chat</strong>
          <small>One action with less friction and stronger intent.</small>
        </div>

        <div className="services-capture-map__handoff">
          <span>CRM-ready handoff</span>
          <strong>Source + service interest + contact detail</strong>
        </div>
      </div>

      <div className="services-diagram__footer">
        <span>Local discovery</span>
        <span>Proof before action</span>
        <span>Capture ready</span>
      </div>
    </DiagramFrame>
  );
}

function AutomationDiagram() {
  return (
    <DiagramFrame
      variant="automation"
      label="Lead lifecycle and reputation loop"
    >
      <div className="services-lifecycle">
        <div className="services-lifecycle__track">
          <div className="services-lifecycle__step services-lifecycle__step--lead">
            <span>01</span>
            <strong>New lead</strong>
            <small>Source captured</small>
          </div>

          <span className="services-lifecycle__connector" />

          <div className="services-lifecycle__step services-lifecycle__step--response">
            <span>02</span>
            <strong>Respond</strong>
            <small>Owner assigned</small>
          </div>

          <span className="services-lifecycle__connector" />

          <div className="services-lifecycle__step services-lifecycle__step--nurture">
            <span>03</span>
            <strong>Nurture</strong>
            <small>Follow-up active</small>
          </div>

          <span className="services-lifecycle__connector" />

          <div className="services-lifecycle__step services-lifecycle__step--booked">
            <span>04</span>
            <strong>Booked</strong>
            <small>Outcome visible</small>
          </div>
        </div>

        <div className="services-lifecycle__loop">
          <span>Customer loop</span>

          <div>
            <strong>Review request</strong>
            <i />
            <strong>Reactivation</strong>
            <i />
            <strong>Reporting</strong>
          </div>
        </div>

        <div className="services-lifecycle__monitor">
          <span>System visibility</span>

          <div>
            <small>Lead owner</small>
            <strong>Assigned</strong>
          </div>

          <div>
            <small>Next action</small>
            <strong>Active</strong>
          </div>

          <div>
            <small>Outcome</small>
            <strong>Tracked</strong>
          </div>
        </div>
      </div>

      <div className="services-diagram__footer services-diagram__footer--ink">
        <span>Ownership clear</span>
        <span>Reputation active</span>
        <span>Reporting visible</span>
      </div>
    </DiagramFrame>
  );
}

function ServiceDiagram({ type }) {
  if (type === 'demand') {
    return <DemandGenerationDiagram />;
  }

  if (type === 'capture') {
    return <DemandCaptureDiagram />;
  }

  return <AutomationDiagram />;
}

export default function ServicesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(services[0]);

  const activeIndex = services.findIndex(
    (service) => service.id === activeService.id
  );

  useEffect(() => {
    const hashId = location.hash.replace('#', '');
    const matchingService = services.find((service) => service.id === hashId);

    if (!matchingService || matchingService.id === activeService.id) {
      return;
    }

    setActiveService(matchingService);

    window.requestAnimationFrame(() => {
      document
        .getElementById('service-detail')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash, activeService.id]);

  const selectService = (service) => {
    setActiveService(service);
    navigate(`/services#${service.id}`, { replace: true });

    window.requestAnimationFrame(() => {
      document
        .getElementById('service-detail')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <>
      <section className="services-hero">
        <div className="container">
          <Link className="back-link back-link--light" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <div className="services-hero__layout">
            <div>
              <p className="hero__eyebrow">Todd Marketing / Services</p>

              <h1>
                Build the connected system behind your local growth.
              </h1>

              <p>
                Todd Marketing helps quality service businesses get found,
                convert demand, follow up, build reputation, and report on
                outcomes—without treating every channel, page, lead, and
                customer interaction as a separate problem.
              </p>
            </div>

            <div className="services-hero__system-note">
              <span>Preferred engagement</span>

              <strong>
                Visibility → Demand → Conversion → Follow-Up → Reputation →
                Reporting
              </strong>

              <p>
                We can solve a single gap. But businesses that want sustainable
                growth are best served by a connected system built across
                visibility, demand, conversion, follow-up, reputation, and
                reporting.
              </p>
            </div>
          </div>

          <Button to={CONTACT_PATH}>Plan My Local Growth System</Button>
        </div>
      </section>

      <section className="services-starting-point">
        <div className="container">
          <div className="services-starting-point__intro">
            <p className="section-label">Start with the real constraint</p>

            <h2>
              You do not need to choose a disconnected deliverable before you
              understand what is limiting the system.
            </h2>
          </div>

          <div className="services-starting-point__grid">
            <button
              className={
                activeService.id === 'demand-generation'
                  ? 'services-starting-point__card is-active'
                  : 'services-starting-point__card'
              }
              type="button"
              onClick={() => selectService(services[0])}
            >
              <span>01</span>
              <strong>You need more qualified demand.</strong>
              <small>
                Build the local visibility and acquisition path that creates
                useful opportunities.
              </small>
              <ChevronRight size={19} aria-hidden="true" />
            </button>

            <button
              className={
                activeService.id === 'demand-capture'
                  ? 'services-starting-point__card is-active'
                  : 'services-starting-point__card'
              }
              type="button"
              onClick={() => selectService(services[1])}
            >
              <span>02</span>
              <strong>You have leads, but demand is leaking.</strong>
              <small>
                Make it easier for searchers and visitors to take the next
                step.
              </small>
              <ChevronRight size={19} aria-hidden="true" />
            </button>

            <button
              className={
                activeService.id === 'crm-automation'
                  ? 'services-starting-point__card is-active'
                  : 'services-starting-point__card'
              }
              type="button"
              onClick={() => selectService(services[2])}
            >
              <span>03</span>
              <strong>
                You need marketing, follow-up, and reputation connected.
              </strong>
              <small>
                Give every lead and customer a clear owner, next step, and
                visible outcome.
              </small>
              <ChevronRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section
        className="services-switcher"
        aria-label="Todd Marketing services"
      >

        <div
          className="services-switcher__anchor"
          id="demand-generation"
          aria-hidden="true"
        />
        <div
          className="services-switcher__anchor"
          id="demand-capture"
          aria-hidden="true"
        />
        <div
          className="services-switcher__anchor"
          id="crm-automation"
          aria-hidden="true"
        />

        <div className="container">
          <div
            className="services-switcher__tabs"
            role="tablist"
            aria-label="Service categories"
          >
            {services.map((service) => (
              <button
                aria-controls="service-detail"
                aria-selected={activeService.id === service.id}
                className={
                  activeService.id === service.id
                    ? 'services-switcher__tab is-active'
                    : 'services-switcher__tab'
                }
                id={`${service.id}-tab`}
                key={service.id}
                onClick={() => selectService(service)}
                role="tab"
                tabIndex={activeService.id === service.id ? 0 : -1}
                type="button"
              >
                <span>{service.number}</span>
                {service.eyebrow}
              </button>
            ))}
          </div>

          <article
            aria-labelledby={`${activeService.id}-tab`}
            className="services-detail"
            id="service-detail"
            role="tabpanel"
            tabIndex="-1"
          >

            <div className="services-detail__head">
              <div>
                <p className="section-label">
                  {activeService.number} / {activeService.eyebrow}
                </p>

                <h2>{activeService.title}</h2>

                <p>{activeService.summary}</p>
              </div>

              <span className="services-detail__counter">
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(services.length).padStart(2, '0')}
              </span>
            </div>

            <div className="services-detail__diagram-wrap">
              <ServiceDiagram type={activeService.diagram} />
            </div>

            <div className="services-detail__context">
              <p className="section-label">The business problem</p>
              <p>{activeService.problem}</p>
            </div>

            <div className="services-detail__grid">
              <div>
                <p className="services-detail__label">What is included</p>

                <ul className="services-detail__list">
                  {activeService.includes.map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="services-detail__label">What you receive</p>

                <ul className="services-detail__list">
                  {activeService.clientReceives.map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="services-detail__fit">
                <p className="services-detail__label">Best fit when</p>
                <p>{activeService.bestFit}</p>

                <div className="services-detail__systems">
                  {activeService.systems.map((system) => (
                    <span key={system}>{system}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="services-detail__action">
              <div>
                <p className="section-label">
                  Choose the right starting point
                </p>
                <p>
                  We can solve a single gap. But businesses that want
                  sustainable growth are best served by a connected system
                  built across visibility, demand, conversion, follow-up,
                  reputation, and reporting.
                </p>
              </div>

              <Button to={CONTACT_PATH}>{activeService.cta}</Button>
            </div>
          </article>
        </div>
      </section>

      <section className="services-integrated-system">
        <div className="container">
          <div className="services-integrated-system__intro">
            <p className="section-label">Why connected systems win</p>

            <h2>
              A stronger result is rarely created by one channel operating
              alone.
            </h2>

            <p>
              Visibility, demand generation, conversion paths, GoHighLevel
              follow-up, review requests, and reporting become more useful when
              the handoff between every stage is designed on purpose.
            </p>
          </div>

          <div className="services-integrated-system__map">
            <div>
              <span>01</span>
              <strong>Get found</strong>
              <small>GBP · Google Ads · LSAs · local search</small>
            </div>

            <i aria-hidden="true" />

            <div>
              <span>02</span>
              <strong>Convert demand</strong>
              <small>Website · landing pages · calls · forms</small>
            </div>

            <i aria-hidden="true" />

            <div>
              <span>03</span>
              <strong>Follow up and grow</strong>
              <small>GoHighLevel · reviews · automation · reporting</small>
            </div>
          </div>

          <Link className="services-integrated-system__link" to="/ecosystem">
            Explore the complete growth system
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="services-page-cta">
        <div className="container">
          <div>
            <p className="section-label">Build from the constraint</p>
            <h2>Plan the system behind your next stage of growth.</h2>
          </div>

          <Button to={CONTACT_PATH}>Plan My Local Growth System</Button>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'Explore the Growth System', to: '/ecosystem' }}
          next={{ label: 'How Todd Marketing Works', to: '/process' }}
        />
      </div>
    </>
  );
}