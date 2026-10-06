import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Database,
  FileText,
  Play,
  Quote,
  ShieldCheck
} from 'lucide-react';
import Button from '../components/ui/Button';
import PageRail from '../components/ui/PageRail';
import { CONTACT_PATH } from '../app/siteConfig';

const caseStudies = [
  {
    id: 'childcare',
    number: '01',
    client: 'A Childcare Center',
    category: 'Childcare / Google Local Services Ads',
    period: 'Jan. 28–Apr. 14, 2026',
    context:
      'A childcare center serving families searching for local care, including a community where many parents may qualify for childcare assistance.',
    summary:
      'Google Local Services Ads was used to generate high-intent childcare enquiries from families actively looking for local care.',
    metrics: [
      {
        value: '$2,915.59',
        label: 'LSA lead spend',
        detail: 'Documented campaign period'
      },
      {
        value: '49',
        label: 'Charged leads',
        detail: '44 phone · 5 message'
      },
      {
        value: '$59.51',
        label: 'Average CPL',
        detail: 'Per charged lead'
      }
    ],
    evidence: [
      'Three credited leads were excluded from cost calculations.',
      'The supplied report also showed 28+ additional leads that were not charged.',
      'Metrics are taken from Google Local Services Ads account reporting.'
    ],
    model: {
      assumptionTitle: 'Illustrative enrollment-value scenario',
      disclaimer:
        'This is an illustrative model, not recorded enrollment, tuition revenue, customer lifetime value, or actual return on ad spend. It should not be read as a guarantee of future results.',
      explanation:
        'The supplied analysis uses a $38,000 long-term tuition-value assumption per full-time enrollment. It applies assumed charged-lead-to-enrollment conversion scenarios to the 49 reported charged leads.',
      inputs: [
        ['Reported charged leads', '49'],
        ['Illustrative value input', '$38,000 per full-time enrollment'],
        ['Scenario conversion rates', '20%, 30%, and 40%'],
        [
          'Measurement boundary',
          'Long-term modeled value, not recorded revenue'
        ]
      ],
      scenarios: [
        ['20%', 'Approximately 10', 'Approximately $380,000'],
        ['30%', 'Approximately 15', 'Approximately $570,000'],
        ['40%', 'Approximately 20', 'Approximately $760,000']
      ],
      sources: [
        {
          label: 'Child Care Cost Finder — national daycare cost context',
          url: 'https://childcarecostfinder.com/guides/average-cost-of-daycare/'
        },
        {
          label: 'FinanceBuzz — childcare-cost ranges by care type',
          url: 'https://financebuzz.com/average-childcare-cost'
        }
      ],
      sourceNote:
        'These sources provide broad U.S. childcare-cost context only. They do not establish the childcare center’s tuition, enrollment duration, subsidy structure, retention, or revenue. Actual economics vary by program, child, market, capacity, and enrollment outcome.'
    }
  },
  {
    id: 'exterior-home-improvement',
    number: '02',
    client: 'An Exterior Home-Improvement Contractor',
    category: 'Exterior home improvement / Google Local Services Ads',
    period: 'Feb.–Apr. 2026 statements',
    context:
      'An exterior home-improvement contractor serving roofing, gutter, and siding demand through Google Local Services Ads.',
    summary:
      'Google Local Services Ads was used to generate qualified, charged enquiries for exterior home-improvement services.',
    metrics: [
      {
        value: '$5,382.82',
        label: 'Stated LSA spend',
        detail: 'Feb.–Apr. statements'
      },
      {
        value: '38',
        label: 'Qualified charged leads',
        detail: 'Credited and uncharged leads excluded'
      },
      {
        value: '$141.65',
        label: 'Average qualified CPL',
        detail: 'Per qualified charged lead'
      }
    ],
    evidence: [
      'Spend is calculated from supplied February, March, and April whole-month statements.',
      'The campaign dates described in the case study are Feb. 16–Apr. 14, 2026.',
      'Metrics are taken from Google Local Services Ads account reporting and supplied account analysis.'
    ],
    model: {
      assumptionTitle: 'Illustrative completed-job-value scenario',
      disclaimer:
        'This is an illustrative model, not recorded closed jobs, job revenue, average job value, customer lifetime value, or actual return on ad spend. It should not be read as a guarantee of future results.',
      explanation:
        'The supplied analysis uses an $11,650 blended completed-job-value assumption. It combines an assumed mix of roofing, gutter, and siding work with national price-range inputs, then applies assumed qualified-lead-to-close scenarios to 38 qualified charged leads.',
      inputs: [
        ['Reported qualified charged leads', '38'],
        ['Illustrative blended value input', '$11,650 per completed job'],
        ['Scenario close rates', '20%, 30%, and 40%'],
        [
          'Measurement boundary',
          'Modeled completed-job value, not recorded revenue'
        ]
      ],
      scenarios: [
        ['20%', 'Approximately 8', 'Approximately $93,200'],
        ['30%', 'Approximately 11', 'Approximately $128,150'],
        ['40%', 'Approximately 15', 'Approximately $174,750']
      ],
      sources: [
        {
          label: 'CurrentCost — roof and gutter replacement price-range context',
          url: 'https://currentcost.org/roof-gutter-replacement-cost-price-ranges-u-s-projects/'
        },
        {
          label: 'LatestCost — siding and gutters price-range context',
          url: 'https://latestcost.com/siding-gutters-cost/'
        },
        {
          label: 'Roof River City — gutter replacement price-range context',
          url: 'https://roofrivercity.com/gutter-replacement-cost/'
        }
      ],
      sourceNote:
        'These sources provide broad U.S. project-price context only. They do not establish the contractor’s actual service mix, close rate, completed-job value, margins, revenue, capacity, geography, or financial outcome.'
    }
  }
];

function ModelDisclosure({ study }) {
  const [isOpen, setIsOpen] = useState(false);
  const disclosureId = useId();
  const buttonId = `${disclosureId}-button`;
  const panelId = `${disclosureId}-panel`;

  return (
    <div className="results-model">
      <button
        className={`results-model__toggle ${isOpen ? 'is-open' : ''}`}
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={isOpen ? panelId : undefined}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>
          <small>Scenario analysis</small>
          <strong>Review modeled opportunity</strong>
        </span>

        {isOpen ? (
          <ChevronUp size={20} strokeWidth={1.7} aria-hidden="true" />
        ) : (
          <ChevronDown size={20} strokeWidth={1.7} aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          className="results-model__panel"
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
        >
          <div className="results-model__notice">
            <ShieldCheck size={19} strokeWidth={1.7} aria-hidden="true" />
            <p>{study.model.disclaimer}</p>
          </div>

          <div className="results-model__intro">
            <p className="results-model__eyebrow">Model explanation</p>
            <h4>{study.model.assumptionTitle}</h4>
            <p>{study.model.explanation}</p>
          </div>

          <div className="results-model__grid">
            <div className="results-model__inputs">
              <p className="results-model__eyebrow">Model inputs</p>

              <dl>
                {study.model.inputs.map(([term, definition]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{definition}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="results-model__scenario-wrap">
              <p className="results-model__eyebrow">Illustrative scenarios</p>

              <div className="results-model__table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Assumed close rate</th>
                      <th scope="col">Illustrative completed clients</th>
                      <th scope="col">Illustrative long-term value</th>
                    </tr>
                  </thead>

                  <tbody>
                    {study.model.scenarios.map(
                      ([closeRate, completedClients, value]) => (
                        <tr key={closeRate}>
                          <td>{closeRate}</td>
                          <td>{completedClients}</td>
                          <td>{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="results-model__sources">
            <p className="results-model__eyebrow">Model inputs and sources</p>

            <ul>
              {study.model.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{source.label}</span>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <p className="results-model__source-note">
              {study.model.sourceNote}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResultsPage() {
  return (
    <>
      <section className="interior-hero interior-hero--results">
        <div className="container">
          <Link className="back-link back-link--light" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <p className="hero__eyebrow">Todd Marketing / Results</p>

          <h1>
            Proof deserves
            <span> context.</span>
          </h1>

          <p>
            Documented account evidence comes first. Where opportunity is
            modeled, the assumptions, sources, and limits stay visible.
          </p>
        </div>
      </section>

      <section className="results-intro-section">
        <div className="container results-intro-section__inner">
          <div>
            <p className="section-label">Evidence before claims</p>
            <h2>Lead data is useful when the measurement boundary is clear.</h2>
          </div>

          <div>
            <p>
              These case studies distinguish reported platform data from
              illustrative business scenarios. Spend, lead counts, lead type,
              and cost per lead are shown as account-reported metrics. Modeled
              opportunity is kept separate so assumptions are never confused
              with recorded client revenue.
            </p>

            <a className="results-intro-section__jump" href="#case-studies">
              Review documented case studies
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="results-case-studies" id="case-studies">
        <div className="container">
          <div className="results-section-heading">
            <p className="section-label">Documented LSA evidence</p>
            <h2>Two local-demand systems, measured in context.</h2>
          </div>

          <div className="results-case-studies__list">
            {caseStudies.map((study) => (
              <article className="results-case-study" key={study.id}>
                <header className="results-case-study__header">
                  <div>
                    <p className="results-case-study__number">{study.number}</p>
                    <p className="results-case-study__category">
                      {study.category}
                    </p>
                  </div>

                  <p className="results-case-study__period">
                    <span>Measurement period</span>
                    {study.period}
                  </p>
                </header>

                <div className="results-case-study__top">
                  <div className="results-case-study__title">
                    <h3>{study.client}</h3>
                    <p>{study.context}</p>
                  </div>

                  <div className="results-case-study__summary">
                    <p className="results-case-study__eyebrow">
                      What the account evidence shows
                    </p>
                    <p>{study.summary}</p>
                  </div>
                </div>

                <div className="results-case-study__metrics">
                  {study.metrics.map((metric) => (
                    <div className="results-metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                      <small>{metric.detail}</small>
                    </div>
                  ))}
                </div>

                <div className="results-case-study__evidence">
                  <p className="results-case-study__eyebrow">
                    Reporting notes
                  </p>

                  <ul>
                    {study.evidence.map((item) => (
                      <li key={item}>
                        <CircleCheck
                          size={16}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ModelDisclosure study={study} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results-standard-section">
        <div className="container results-standard-section__inner">
          <div>
            <p className="section-label">The evidence standard</p>
            <h2>Every number needs a definition.</h2>
          </div>

          <div className="results-standard-section__items">
            <article>
              <Database size={20} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3>Direct account reporting</h3>
                <p>
                  Spend, charged or qualified lead counts, lead type, and cost
                  per lead are shown only when they come from the documented
                  account reporting period.
                </p>
              </div>
            </article>

            <article>
              <FileText size={20} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3>Clear attribution boundary</h3>
                <p>
                  Channel, timeframe, metric definition, and exclusions stay
                  visible so an enquiry is not mistaken for a booking, closed
                  job, enrollment, or revenue event.
                </p>
              </div>
            </article>

            <article>
              <ShieldCheck size={20} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3>Models are not outcomes</h3>
                <p>
                  Where a scenario uses benchmarks and assumptions, it is
                  presented separately from account evidence and never framed
                  as a client result.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="results-proof-slots-section">
        <div className="container">
          <div className="results-section-heading">
            <p className="section-label">Proof library in progress</p>
            <h2>Approved client proof will expand here.</h2>
            <p>
              These are intentional replacement slots. They do not represent
              testimonials, endorsements, or video assets until approved client
              material is added.
            </p>
          </div>

          <div className="results-proof-slots">
            <article className="results-proof-slot">
              <Quote size={23} strokeWidth={1.5} aria-hidden="true" />

              <p className="results-proof-slot__status">
                Written testimonial slot
              </p>

              <h3>Approved client testimonial pending.</h3>

              <p>
                Replace this block only with an approved anonymous quotation,
                industry-only attribution, and the related system or service.
                Do not include client names, company names, or identifying
                details.
              </p>

              <span className="results-proof-slot__code-note">
                Internal replacement zone
              </span>
            </article>

            <article className="results-proof-slot">
              <Play size={23} strokeWidth={1.5} aria-hidden="true" />

              <p className="results-proof-slot__status">
                Video testimonial slot
              </p>

              <h3>Client video testimonial pending consent and production.</h3>

              <p>
                Replace this block only after an approved anonymized video
                asset, publication permission, accessible captions, and a
                transcript are available. Use industry-only attribution and
                exclude client names, company names, logos, and recognizable
                identifiers from the asset, captions, and transcript.
              </p>

              <span className="results-proof-slot__code-note">
                Internal replacement zone
              </span>
            </article>
          </div>
        </div>
      </section>

      <section className="interior-cta-section results-cta-section">
        <div className="container">
          <p className="section-label">Start with the system</p>
          <h2>Build a local lead system that can be measured beyond the click.</h2>
          <p>
            We can fix a single missing handoff, but the strongest measurement
            comes from connecting visibility, conversion, follow-up, and
            reporting around the same customer journey.
          </p>
          <Button to={CONTACT_PATH}>Plan Your Local Growth System</Button>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'Review the Process', to: '/process' }}
          next={{ label: 'About Todd Marketing', to: '/about' }}
        />
      </div>
    </>
  );
}