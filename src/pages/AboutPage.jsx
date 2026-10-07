import { Link } from 'react-router-dom';
import { Play, ArrowUpRight } from 'lucide-react';
import Button from '../components/ui/Button';
import PageRail from '../components/ui/PageRail';
import { CONTACT_PATH } from '../app/siteConfig';
import samuelToddPortrait from '../images/samuel-todd-founder.jpeg';

const bookingUrl =
  'https://api.leadconnectorhq.com/widget/booking/3QmePKKqRKrOVCL5shcI';

const founderVideoUrl =
  'https://youtu.be/ctXLUlwbZjY?si=oHy__BKjxsGzapbk';

const operatingModelImageUrl = `${import.meta.env.BASE_URL}brand/1.png`;

export default function AboutPage() {
  return (
    <>
      <section className="interior-hero about-hero">
        <div className="container">
          <Link className="back-link back-link--light" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <p className="hero__eyebrow">Todd Marketing / About</p>

          <h1>
            Growth gets stronger when the system behind it is built to hold.
          </h1>

          <p>
            Todd Marketing helps service businesses connect conversion
            architecture, demand generation, and revenue operations into a
            system that can support sustainable growth.
          </p>
        </div>
      </section>

      <section className="about-founder">
        <div className="container">
          <div className="about-founder__grid">
            <div className="about-founder__portrait-wrap">
              <img
                className="about-founder__portrait"
                src={samuelToddPortrait}
                alt="Samuel Todd, Founder of Todd Marketing"
              />

              <div className="about-founder__portrait-label">
                <span>Samuel Todd</span>
                <span>Founder / Todd Marketing</span>
              </div>
            </div>

            <div className="about-founder__content">
              <p className="section-label">Founder-led by design</p>

              <h2>
                Practical growth infrastructure for businesses ready to build
                beyond isolated tactics.
              </h2>

              <p className="about-founder__role">
                Samuel Todd
                <span>Founder, Todd Marketing</span>
              </p>

              <blockquote>
                <p>
                  “My personal mission is to help every single one of my
                  clients build robust systems across growth, traffic generation
                  and automations that fuel sustainable business growth.”
                </p>
              </blockquote>

              <p className="about-founder__body-copy">
                The work starts by finding the point where momentum is being
                lost—between traffic and the page, the page and the lead, or
                the lead and the operational next step. Then the system is
                designed around what the business actually needs to sustain
                progress.
              </p>

              <div className="about-founder__actions">
                <Button to={CONTACT_PATH}>
                  Book a Growth Systems Audit
                </Button>

                <a
                  className="about-founder__video-link"
                  href={founderVideoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="about-founder__video-icon">
                    <Play size={14} fill="currentColor" aria-hidden="true" />
                  </span>

                  Watch Samuel’s introduction

                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="container">
          <div className="about-principles__intro">
            <p className="section-label">The operating model</p>

            <h2>
              Built for the connections between acquisition, conversion, and
              follow-through.
            </h2>

            <div className="about-principles__image-wrap">
              <img
                className="about-principles__image"
                src={operatingModelImageUrl}
                alt="Inbound-lead automation workflow connecting a form submission to contact creation and a welcome email."
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="about-principles__grid">
            <article>
              <span>01</span>
              <h3>Build the system before scaling the pressure.</h3>
              <p>
                More traffic cannot solve a weak offer path, unclear next step,
                or broken operational handoff.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Connect every layer to the business outcome.</h3>
              <p>
                Website, advertising, CRM, automation, and reporting should
                reinforce one another instead of operating as separate tools.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Make the next action clear and usable.</h3>
              <p>
                The best system is one that makes it easier for buyers and
                teams to know what happens next, who owns it, and why it
                matters.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-direct-contact">
        <div className="container">
          <div>
            <p className="section-label">Direct conversation</p>

            <h2>
              Bring the current system. We will identify the practical next
              move.
            </h2>

            <p>
              Use the audit to discuss your growth, traffic, conversion, CRM,
              or automation constraints directly with Todd Marketing.
            </p>
          </div>

          <div className="about-direct-contact__actions">
            <Button to={CONTACT_PATH}>
              Book a Growth Systems Audit
            </Button>

            <a
              className="about-direct-contact__external"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open booking in a new tab
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'Review the Results Methodology', to: '/results' }}
          next={{ label: 'Book a Growth Systems Audit', to: '/contact' }}
        />
      </div>
    </>
  );
}