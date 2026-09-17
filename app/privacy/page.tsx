import type { Metadata } from "next";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  addressCityState,
  addressStreet,
  businessEmail,
  phoneDisplay,
  phoneHref,
  textDisplay,
  textHref,
} from "../site-info";

const emailContactHref = `mailto:${businessEmail}`;

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Pro-Tech Glass" },
  description:
    "Privacy Policy and SMS Terms of Service for Pro-Tech Glass in Columbus, Mississippi, covering the information we collect, how we use it, and our text messaging program.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="site-root" id="top">
      <SiteHeader />

      <main>
        <section className="section legal-section">
          <div className="container">
            <h1 className="section-title legal-title">
              Pro-Tech Glass, LLC — Privacy Policy &amp; SMS Terms
            </h1>

            <div className="legal-stack">
              <div className="legal-doc">
                <div className="line-heading">
                  <span aria-hidden="true" />
                  <h2 id="privacy-policy">Privacy Policy</h2>
                  <span aria-hidden="true" />
                </div>

                <div className="legal-prose">
                  <p className="legal-effective">
                    <strong>Effective Date:</strong> September 17, 2026
                  </p>

                  <p>
                    Pro-Tech Glass, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                    operates protechglasscolumbus.com. This policy explains what information we
                    collect, how we use it, and the choices you have.
                  </p>

                  <h3>Information We Collect</h3>

                  <p>
                    <strong>Information you give us directly.</strong> When you call, text, or
                    email us to request a quote or schedule service, we collect the information you
                    choose to share. This typically includes your name, phone number, email
                    address, service address or vehicle details, and any photos or descriptions of
                    the glass work you need.
                  </p>

                  <p>
                    <strong>Information collected automatically.</strong> When you visit our
                    website, certain information is collected automatically, including your IP
                    address, browser type, device type, pages viewed, time spent on the site, and
                    the site you came from. We also track which contact buttons are clicked — for
                    example, whether a visitor tapped the call, text, or email link — so we can
                    understand how people reach us.
                  </p>

                  <h3>How We Use Your Information</h3>

                  <p>We use the information we collect to:</p>

                  <ul>
                    <li>Respond to your quote requests and questions</li>
                    <li>
                      Schedule, perform, and follow up on glass repair and replacement service
                    </li>
                    <li>Send you estimates, appointment details, and service updates</li>
                    <li>Keep records of work performed</li>
                    <li>Understand how our website is used so we can improve it</li>
                  </ul>

                  <h3>Text Messaging</h3>

                  <p>
                    If you text us — including by tapping a &quot;Text for a Quote&quot; link on our
                    website — we will use your mobile number to respond to your request and
                    communicate with you about your service.
                  </p>

                  <p className="legal-callout">
                    <strong>
                      Mobile information will not be shared with third parties or affiliates for
                      marketing or promotional purposes. All of the above categories exclude text
                      messaging originator opt-in data and consent; this information will not be
                      shared with any third parties.
                    </strong>
                  </p>

                  <p>
                    If you wish to be removed from receiving future communications, you can opt out
                    by texting <strong>STOP</strong>.
                  </p>

                  <p>
                    Full details about our text messaging program are in the{" "}
                    <a className="inline-link" href="#sms-terms">
                      SMS Terms section below
                    </a>
                    .
                  </p>

                  <h3>How We Share Information</h3>

                  <p>
                    We do not sell your personal information. We share it only in these limited
                    situations:
                  </p>

                  <ul>
                    <li>
                      <strong>Service providers.</strong> Companies that help us operate our
                      business — such as our website host, our text messaging provider, and our
                      analytics providers — may process information on our behalf. They are
                      permitted to use it only to provide services to us.
                    </li>
                    <li>
                      <strong>Legal requirements.</strong> We may disclose information if required
                      by law, subpoena, or court order, or to protect the safety and rights of our
                      customers, our employees, or the public.
                    </li>
                  </ul>

                  <p>
                    As stated above, text messaging opt-in data and consent are never shared with
                    any third party for any purpose.
                  </p>

                  <h3>Analytics and Cookies</h3>

                  <p>
                    Our website uses Google Analytics and Vercel Analytics to understand how
                    visitors use the site. These services use cookies and similar technologies to
                    collect usage data. Information collected by Google Analytics is governed by
                    Google&apos;s privacy policy; information collected by Vercel Analytics is
                    governed by Vercel&apos;s privacy policy.
                  </p>

                  <p>
                    Our location page includes an embedded Google Map. Loading that map may allow
                    Google to set cookies and collect information about your visit. Clicking our
                    Instagram link will take you to a site operated by Meta, which has its own
                    privacy practices.
                  </p>

                  <p>
                    Most browsers let you block or delete cookies through their settings. Blocking
                    cookies will not prevent you from using our website.
                  </p>

                  <h3>Data Retention</h3>

                  <p>
                    We keep customer and service information as long as needed to complete the work,
                    honor any warranty, and meet our record-keeping and tax obligations. We keep
                    website analytics data according to the default retention settings of the
                    analytics services we use.
                  </p>

                  <h3>Children&apos;s Privacy</h3>

                  <p>
                    Our website and services are directed to adults. We do not knowingly collect
                    personal information from children under 13. If you believe a child has provided
                    us with personal information, contact us and we will delete it.
                  </p>

                  <h3>Your Choices</h3>

                  <p>
                    You may ask us what information we have about you, ask us to correct it, or ask
                    us to delete it by contacting us at the phone number or email address below. You
                    may stop receiving text messages at any time by replying STOP.
                  </p>

                  <h3>Changes to This Policy</h3>

                  <p>
                    We may update this policy from time to time. The revised version will be posted
                    on this page with a new effective date.
                  </p>

                  <h3>Contact Us</h3>

                  <address className="legal-contact">
                    <strong>Pro-Tech Glass, LLC</strong>
                    <span>{addressStreet}</span>
                    <span>{addressCityState}</span>

                    <span className="legal-contact-details">
                      <span>
                        Phone:{" "}
                        <a
                          className="inline-link"
                          href={phoneHref}
                          data-analytics-event="phone_click"
                          data-analytics-label="Privacy policy phone link"
                        >
                          {phoneDisplay}
                        </a>
                      </span>
                      <span>
                        Text:{" "}
                        <a
                          className="inline-link"
                          href={textHref}
                          data-analytics-event="text_click"
                          data-analytics-label="Privacy policy text link"
                        >
                          {textDisplay}
                        </a>
                      </span>
                      <span>
                        Email:{" "}
                        <a
                          className="inline-link"
                          href={emailContactHref}
                          data-analytics-event="email_click"
                          data-analytics-label="Privacy policy email link"
                        >
                          {businessEmail}
                        </a>
                      </span>
                    </span>
                  </address>
                </div>
              </div>

              <div className="legal-doc">
                <div className="line-heading">
                  <span aria-hidden="true" />
                  <h2 id="sms-terms">SMS Terms of Service</h2>
                  <span aria-hidden="true" />
                </div>

                <div className="legal-prose">
                  <p>
                    <strong>Pro-Tech Glass, LLC</strong> operates a text messaging program for
                    customer service and scheduling.
                  </p>

                  <h3>Program Description</h3>

                  <p>
                    When you text Pro-Tech Glass, LLC — including by tapping a &quot;Text for a
                    Quote&quot; link on our website — you may receive messages related to your
                    request. These include quote and estimate information, appointment scheduling
                    and confirmations, service reminders and follow-ups, and answers to questions
                    you have asked us.
                  </p>

                  <h3>Message Frequency</h3>

                  <p>Message frequency varies and depends on your conversation with us.</p>

                  <h3>Cost</h3>

                  <p>
                    Message and data rates may apply for any messages sent to you from us and to us
                    from you. If you have questions about your text plan or data plan, it is best to
                    contact your wireless provider.
                  </p>

                  <h3>How to Opt Out</h3>

                  <p>
                    You can cancel the SMS service at any time. Just text <strong>STOP</strong>.
                    After you send the SMS message &quot;STOP&quot; to us, we will send you an SMS
                    message to confirm that you have been unsubscribed. After this, you will no
                    longer receive SMS messages from us. If you want to join again, just text us as
                    you did the first time and we will start sending SMS messages to you again.
                  </p>

                  <h3>How to Get Help</h3>

                  <p>
                    If you are experiencing issues with the messaging program, you can reply with
                    the keyword <strong>HELP</strong> for more assistance, or you can get help
                    directly at{" "}
                    <a
                      className="inline-link"
                      href={emailContactHref}
                      data-analytics-event="email_click"
                      data-analytics-label="SMS terms help email link"
                    >
                      {businessEmail}
                    </a>{" "}
                    or{" "}
                    <a
                      className="inline-link"
                      href={phoneHref}
                      data-analytics-event="phone_click"
                      data-analytics-label="SMS terms help phone link"
                    >
                      {phoneDisplay}
                    </a>
                    .
                  </p>

                  <h3>Carrier Liability</h3>

                  <p>Carriers are not liable for delayed or undelivered messages.</p>

                  <h3>Privacy</h3>

                  <p>
                    If you have any questions regarding privacy, please read our{" "}
                    <a className="inline-link" href="#privacy-policy">
                      Privacy Policy
                    </a>{" "}
                    above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
