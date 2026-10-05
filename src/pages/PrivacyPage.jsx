import { Link } from 'react-router-dom';
import PageRail from '../components/ui/PageRail';

const effectiveDate = 'September 23, 2026';

export default function PrivacyPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <Link className="back-link back-link--light" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <p className="hero__eyebrow">Todd Marketing / Legal</p>

          <h1>Privacy Policy.</h1>

          <p>
            How Todd Marketing collects, uses,
            discloses, and protects personal information.
          </p>

          <p className="legal-hero__effective-date">
            Effective date: {effectiveDate}
          </p>
        </div>
      </section>

      <main className="legal-page">
        <div className="container">
          <div className="legal-page__layout">
            <aside className="legal-page__sidebar" aria-label="Privacy policy sections">
              <p>On this page</p>

              <a href="#overview">Overview</a>
              <a href="#information-collected">Information we collect</a>
              <a href="#how-we-use-information">How we use information</a>
              <a href="#communications">Email and SMS communications</a>
              <a href="#providers">Service providers</a>
              <a href="#cookies">Cookies and analytics</a>
              <a href="#retention">Retention and security</a>
              <a href="#your-rights">Your rights</a>
              <a href="#children">Children’s privacy</a>
              <a href="#contact">Contact us</a>
            </aside>

            <article className="legal-page__content">
              <section id="overview">
                <p className="section-label">01 / Overview</p>

                <h2>Our commitment to handling information responsibly.</h2>

                <p>
                  This Privacy Policy explains how Social 1st Marketing DBA
                  Todd Marketing (“Todd Marketing,” “we,” “us,” or “our”)
                  collects, uses, discloses, and protects personal information
                  when you visit our website, book a meeting, contact us, or
                  otherwise interact with our services.
                </p>

                <p>
                  Todd Marketing provides Wisconsin-originated growth
                  infrastructure for service businesses, serving clients across
                  the United States. This policy applies to personal
                  information collected through the Todd Marketing website and
                  related business communications.
                </p>
              </section>

              <section id="information-collected">
                <p className="section-label">02 / Information we collect</p>

                <h2>Information you choose to provide.</h2>

                <p>
                  We may collect personal information that you submit directly
                  to us, including through a calendar booking, email, phone
                  call, or other inquiry. Depending on the form or booking
                  type, this may include:
                </p>

                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company or business name</li>
                  <li>Service interest</li>
                  <li>Appointment preferences</li>
                  <li>Messages, questions, or other information you provide</li>
                </ul>

                <p>
                  We may also receive limited technical information generated
                  by your browser or device, such as internet protocol address,
                  browser type, device information, pages viewed, referring
                  page, and the date and time of an interaction.
                </p>
              </section>

              <section id="how-we-use-information">
                <p className="section-label">03 / How we use information</p>

                <h2>Information is used to operate and improve business interactions.</h2>

                <p>We may use personal information to:</p>

                <ul>
                  <li>Respond to inquiries and meeting requests</li>
                  <li>Schedule, confirm, remind, reschedule, or cancel appointments</li>
                  <li>Evaluate whether our services are a fit for your business</li>
                  <li>Provide requested services and manage client relationships</li>
                  <li>Send service-related communications and support messages</li>
                  <li>Send marketing communications when permitted by law and your consent</li>
                  <li>Maintain internal records, prevent misuse, and protect our rights</li>
                  <li>Comply with applicable legal obligations</li>
                </ul>
              </section>

              <section id="communications">
                <p className="section-label">04 / Email and SMS communications</p>

                <h2>You can control promotional communications.</h2>

                <p>
                  Todd Marketing may send booking confirmations, appointment
                  reminders, service-related messages, marketing emails, and
                  marketing SMS messages where permitted by law.
                </p>

                <p>
                  By providing your phone number and giving the required
                  consent, you may receive text messages from Todd Marketing.
                  Consent to receive marketing text messages is not a condition
                  of purchasing services. Message frequency may vary. Message
                  and data rates may apply.
                </p>

                <p>
                  To stop SMS messages from a Todd Marketing number, reply
                  <strong> STOP</strong>. For help with SMS messages, reply
                  <strong> HELP</strong> or contact us using the information in
                  this policy.
                </p>

                <p>
                  You may opt out of marketing emails by using the unsubscribe
                  link included in those emails. Opting out of marketing
                  communications does not prevent us from sending non-marketing
                  messages related to appointments, services, transactions, or
                  our ongoing business relationship.
                </p>
              </section>

              <section id="providers">
                <p className="section-label">05 / Service providers</p>

                <h2>We use providers to support the booking workflow.</h2>

                <p>
                  We use GoHighLevel as a booking and calendar provider. When
                  you use the embedded calendar or related booking flow,
                  GoHighLevel may process the information you submit to
                  schedule and manage your appointment, including confirmation
                  emails and SMS messages.
                </p>

                <p>
                  We may also use service providers that help us operate the
                  website, host business communications, maintain records, and
                  provide services. We share personal information with those
                  providers only as reasonably necessary for those purposes,
                  subject to appropriate contractual, operational, or legal
                  safeguards where applicable.
                </p>

                <p>
                  We do not sell personal information for money. We do not
                  knowingly rent or trade contact information to third parties
                  for their independent marketing purposes.
                </p>
              </section>

              <section id="cookies">
                <p className="section-label">06 / Cookies and analytics</p>

                <h2>Current website measurement practices.</h2>

                <p>
                  As of the effective date of this Privacy Policy, Todd
                  Marketing does not operate Google Analytics 4, Google Tag
                  Manager, Google Ads remarketing or conversion tags, Meta
                  Pixel, or Microsoft Clarity on this website.
                </p>

                <p>
                  We use Google Search Console to understand website presence
                  in Google Search. Google Search Console does not provide us
                  with direct, individually identifiable visitor profiles.
                </p>

                <p>
                  Third-party providers used within our website, including the
                  GoHighLevel booking calendar, may use cookies, local storage,
                  or similar technologies according to their own policies and
                  service functionality. Your browser settings may allow you to
                  manage some cookies or similar technologies.
                </p>

                <p>
                  If our measurement, advertising, or cookie practices change,
                  we will update this Privacy Policy and, where required,
                  provide appropriate notice or obtain consent.
                </p>
              </section>

              <section id="retention">
                <p className="section-label">07 / Retention and security</p>

                <h2>We retain information only for a legitimate business purpose.</h2>

                <p>
                  We retain personal information only for as long as reasonably
                  necessary to provide services, maintain records, meet legal
                  obligations, resolve disputes, and enforce agreements.
                </p>

                <p>
                  We use reasonable administrative, technical, and
                  organizational measures designed to protect personal
                  information. No method of transmission over the internet or
                  method of storage is completely secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section id="your-rights">
                <p className="section-label">08 / Your rights and choices</p>

                <h2>You may request access, correction, or deletion.</h2>

                <p>
                  Subject to applicable law, you may request access to, update,
                  correct, or delete personal information we hold about you. You
                  may also request information about how we use your personal
                  information.
                </p>

                <p>
                  To make a privacy request, contact
                  <a href="mailto:samuel.todd@toddmarketing.com">
                    samuel.todd@toddmarketing.com
                  </a>
                  . We may need to verify your identity before responding to a
                  request. Some information may be retained when necessary for
                  legal, recordkeeping, fraud-prevention, or other legitimate
                  purposes.
                </p>
              </section>

              <section id="children">
                <p className="section-label">09 / Children’s privacy</p>

                <h2>This website is not intended for young children.</h2>

                <p>
                  Todd Marketing’s website and services are intended for
                  business audiences. We do not knowingly collect personal
                  information from individuals under the age of 14. If you
                  believe that a person under 14 has provided personal
                  information to us, please contact us so we can take
                  appropriate action.
                </p>
              </section>

              <section id="changes">
                <p className="section-label">10 / Policy updates</p>

                <h2>We may update this policy when our practices change.</h2>

                <p>
                  We may update this Privacy Policy from time to time. When we
                  do, we will post the revised policy on this page and update
                  the effective date above. Your continued use of the website
                  after an updated policy is posted is subject to the revised
                  policy to the extent permitted by law.
                </p>
              </section>

              <section id="contact">
                <p className="section-label">11 / Contact us</p>

                <h2>Questions about privacy.</h2>

                <p>
                  For privacy questions or requests, contact Social 1st
                  Marketing DBA Todd Marketing:
                </p>

                <address>
                  <a href="mailto:samuel.todd@toddmarketing.com">
                    samuel.todd@toddmarketing.com
                  </a>
                  <br />
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
          previous={{ label: 'Return to Contact', to: '/contact' }}
          next={{ label: 'Terms of Use', to: '/terms' }}
        />
      </div>
    </>
  );
}