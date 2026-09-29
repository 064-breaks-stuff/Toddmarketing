import { Link } from 'react-router-dom';
import PageRail from '../components/ui/PageRail';

const effectiveDate = 'September 23, 2026';

export default function TermsPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <Link className="back-link back-link--light" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <p className="hero__eyebrow">Todd Marketing / Legal</p>

          <h1>Terms of Use.</h1>

          <p>
            The terms that govern your use of the Todd Marketing website and
            related business communications.
          </p>

          <p className="legal-hero__effective-date">
            Effective date: {effectiveDate}
          </p>
        </div>
      </section>

      <main className="legal-page">
        <div className="container">
          <div className="legal-page__layout">
            <aside className="legal-page__sidebar" aria-label="Terms of use sections">
              <p>On this page</p>

              <a href="#acceptance">Acceptance</a>
              <a href="#website-purpose">Website purpose</a>
              <a href="#no-professional-advice">No professional advice</a>
              <a href="#service-engagements">Service engagements</a>
              <a href="#acceptable-use">Acceptable use</a>
              <a href="#intellectual-property">Intellectual property</a>
              <a href="#third-party-services">Third-party services</a>
              <a href="#disclaimers">Disclaimers</a>
              <a href="#liability">Liability</a>
              <a href="#governing-law">Governing law</a>
              <a href="#contact">Contact us</a>
            </aside>

            <article className="legal-page__content">
              <section id="acceptance">
                <p className="section-label">01 / Acceptance</p>

                <h2>Using this website means you accept these terms.</h2>

                <p>
                  These Terms of Use (“Terms”) govern your access to and use of
                  the Todd Marketing website, booking calendar, and related
                  online interactions. The website is operated by Social 1st
                  Marketing DBA Todd Marketing (“Todd Marketing,” “we,” “us,”
                  or “our”).
                </p>

                <p>
                  By accessing or using this website, you agree to these Terms
                  and our Privacy Policy. If you do not agree, do not use the
                  website or booking tools.
                </p>
              </section>

              <section id="website-purpose">
                <p className="section-label">02 / Website purpose</p>

                <h2>The site provides information about our services.</h2>

                <p>
                  Todd Marketing provides growth infrastructure services for
                  businesses, including conversion architecture, demand
                  generation, CRM implementation, automation, and related
                  strategic and operational services.
                </p>

                <p>
                  The website is intended to describe our capabilities, provide
                  educational or informational material, and allow prospective
                  clients to inquire about or book a conversation. The website
                  does not itself offer products or services for direct online
                  purchase.
                </p>
              </section>

              <section id="no-professional-advice">
                <p className="section-label">03 / No professional advice</p>

                <h2>Website content is general information.</h2>

                <p>
                  Content on this website is provided for general informational
                  purposes only. It is not legal, tax, financial, medical, or
                  other professional advice. You should consult qualified
                  professionals before making decisions based on information
                  presented on this website.
                </p>

                <p>
                  Marketing, advertising, website, automation, and CRM outcomes
                  depend on many factors outside Todd Marketing’s control,
                  including offer quality, market conditions, budget, sales
                  process, operational follow-through, third-party platforms,
                  and client implementation.
                </p>
              </section>

              <section id="service-engagements">
                <p className="section-label">04 / Service engagements</p>

                <h2>Client work begins under a separate written agreement.</h2>

                <p>
                  A request for information, a discovery call, a booked audit,
                  or use of this website does not create a client relationship,
                  partnership, joint venture, employment relationship, or
                  agency relationship.
                </p>

                <p>
                  Todd Marketing provides client services only under a separate
                  signed written agreement that identifies the applicable
                  scope, fees, deliverables, responsibilities, timelines,
                  intellectual-property terms, confidentiality provisions, and
                  other engagement-specific conditions.
                </p>

                <p>
                  If there is a conflict between these Terms and a signed client
                  agreement, the signed client agreement controls with respect
                  to that client engagement.
                </p>
              </section>

              <section id="acceptable-use">
                <p className="section-label">05 / Acceptable use</p>

                <h2>Use the site lawfully and respectfully.</h2>

                <p>You agree not to:</p>

                <ul>
                  <li>Use the website in violation of applicable law or regulation</li>
                  <li>Attempt to gain unauthorized access to the website, systems, or accounts</li>
                  <li>Interfere with the website’s operation, security, or availability</li>
                  <li>Transmit harmful code, spam, or deceptive content</li>
                  <li>Use automated systems to scrape, index, or extract site content without written permission</li>
                  <li>Impersonate another person or misrepresent your identity or affiliation</li>
                  <li>Use booking tools to submit false, misleading, abusive, or unauthorized information</li>
                </ul>

                <p>
                  We may restrict or terminate access to the website when we
                  reasonably believe these Terms have been violated or when
                  necessary to protect the website, our business, or other users.
                </p>
              </section>

              <section id="intellectual-property">
                <p className="section-label">06 / Intellectual property</p>

                <h2>Our brand and site content remain protected.</h2>

                <p>
                  The Todd Marketing name, logos, design system, website
                  content, graphics, copy, layout, visual materials, and other
                  materials on this website are owned by or licensed to Social
                  1st Marketing DBA Todd Marketing and are protected by
                  applicable intellectual-property laws.
                </p>

                <p>
                  You may view the website for your personal or internal
                  business use. You may not reproduce, distribute, modify,
                  display, create derivative works from, or commercially exploit
                  website materials without our prior written permission,
                  except as permitted by applicable law.
                </p>
              </section>

              <section id="third-party-services">
                <p className="section-label">07 / Third-party services</p>

                <h2>Third-party tools operate under their own terms.</h2>

                <p>
                  The website may include or rely on third-party services,
                  including GoHighLevel for calendar booking and appointment
                  management. Your use of third-party services may be subject
                  to their own terms, privacy policies, availability, and
                  practices.
                </p>

                <p>
                  Todd Marketing is not responsible for third-party sites,
                  services, content, policies, or outages. We encourage you to
                  review applicable third-party terms and privacy policies
                  before using their services.
                </p>
              </section>

              <section id="disclaimers">
                <p className="section-label">08 / Disclaimers</p>

                <h2>The website is provided as available.</h2>

                <p>
                  To the maximum extent permitted by law, the website and its
                  content are provided on an “as is” and “as available” basis,
                  without warranties of any kind, whether express, implied, or
                  statutory. This includes, without limitation, warranties of
                  merchantability, fitness for a particular purpose, title,
                  non-infringement, accuracy, availability, and security.
                </p>

                <p>
                  We do not warrant that the website will be uninterrupted,
                  error-free, secure, current, complete, or free of harmful
                  components. We may modify, suspend, or discontinue any part
                  of the website at any time.
                </p>
              </section>

              <section id="liability">
                <p className="section-label">09 / Limitation of liability</p>

                <h2>Our liability is limited as permitted by law.</h2>

                <p>
                  To the maximum extent permitted by applicable law, Todd
                  Marketing and its owners, officers, employees, contractors,
                  and representatives will not be liable for any indirect,
                  incidental, special, consequential, exemplary, or punitive
                  damages, or for any loss of profits, revenue, data, goodwill,
                  business opportunity, or other intangible losses arising from
                  or related to your use of, or inability to use, the website.
                </p>

                <p>
                  Nothing in these Terms excludes or limits liability that
                  cannot be excluded or limited under applicable law.
                </p>
              </section>

              <section id="governing-law">
                <p className="section-label">10 / Governing law</p>

                <h2>Wisconsin law governs these Terms.</h2>

                <p>
                  These Terms are governed by the laws of the State of
                  Wisconsin, without regard to its conflict-of-law principles.
                  Any dispute arising from or relating to these Terms or the
                  website will be subject to the jurisdiction of the state or
                  federal courts located in Wisconsin, unless applicable law
                  requires otherwise.
                </p>
              </section>

              <section id="changes">
                <p className="section-label">11 / Changes to these Terms</p>

                <h2>We may update these Terms.</h2>

                <p>
                  We may revise these Terms from time to time. Updated Terms
                  will be posted on this page with a revised effective date.
                  Your continued use of the website after an update is posted
                  constitutes acceptance of the revised Terms to the extent
                  permitted by law.
                </p>
              </section>

              <section id="contact">
                <p className="section-label">12 / Contact us</p>

                <h2>Questions about these Terms.</h2>

                <p>
                  Contact Social 1st Marketing DBA Todd Marketing with questions
                  about these Terms:
                </p>

                <address>
                  <a href="mailto:samuel.todd@social1stmarketing.com">
                    samuel.todd@social1stmarketing.com
                  </a>
                  <br />
                  <a href="mailto:samuel.todd@toddmarketing.net">
                    samuel.todd@toddmarketing.net
                  </a>
                  <br />
                  <a href="tel:+19207578076">920-757-8076</a>
                  <br />
                  Wisconsin-originated; serving clients across the United States
                </address>
              </section>
            </article>
          </div>
        </div>
      </main>

      <div className="container">
        <PageRail
          previous={{ label: 'Privacy Policy', to: '/privacy' }}
          next={{ label: 'Return to Contact', to: '/contact' }}
        />
      </div>
    </>
  );
}