import Image from "next/image";

const phoneDisplay = "(662) 328-7570";
const phoneHref = "tel:+16623287570";
const textHref = "sms:+16623287570";
const businessEmail = "Protechglassworks@gmail.com";
const emailHref = `mailto:${businessEmail}?subject=Quote%20Request`;
const addressStreet = "25 Crescent Drive";
const addressCityState = "Columbus, MS 39705";
const address = `${addressStreet}, ${addressCityState}`;
const mapHref = "https://maps.google.com/?q=25+Crescent+Drive,+Columbus,+MS+39705";
const mapEmbedSrc = "https://www.google.com/maps?q=25+Crescent+Drive,+Columbus,+MS+39705&output=embed";
const instagramHref = "https://www.instagram.com/protechglass.columbus/";

const serviceGroups = ["Auto", "Residential", "Business"];

const offerings = [
  {
    title: "Windshield Repair & Replacement",
    category: "Auto",
    image: "/hero-photos/09-windshield-replacement.jpg",
    description:
      "Chip repair and windshield replacement for daily drivers, work trucks, and fleet vehicles.",
  },
  {
    title: "Auto Glass Replacement",
    category: "Auto",
    image: "/hero-photos/10-auto-glass-replacement.webp",
    description:
      "Side glass, back glass, and specialty vehicle glass replaced with clean fitment.",
  },
  {
    title: "Residential Window Glass",
    category: "Residential",
    image: "/hero-photos/11-residential-window-glass.jpg",
    description:
      "Home window repairs and replacements for cracked, broken, or fogged panes.",
  },
  {
    title: "Storefront & Business Glass",
    category: "Commercial",
    image: "/hero-photos/08-storefront-glass.jpg",
    description:
      "Commercial glass replacement and storefront installation for local businesses.",
  },
  {
    title: "Shower Door Installation",
    category: "Residential",
    image: "/hero-photos/12-shower-door-installation.jpg",
    description:
      "Clean shower glass installation measured to your exact opening.",
  },
  {
    title: "Bullet Resistant & Shatter Proof Solutions",
    category: "Security",
    image: "/hero-photos/07-shatter-resistant-glass.jpg",
    description:
      "Security-focused glass options for homes, storefronts, and specialty projects.",
  },
  {
    title: "Custom Glass & Glass Cutting",
    category: "Custom",
    image: "/hero-photos/04-glass-cutting.jpg",
    description:
      "Custom patterned glass and precision cutting for specialty projects.",
  },
  {
    title: "Heavy Equipment Glass",
    category: "Equipment",
    image: "/hero-photos/13-heavy-equipment-glass.webp",
    description:
      "Replacement glass for machinery, equipment, and demanding work applications.",
  },
];

const processSteps = [
  {
    title: "Call, Text, or Email",
    description:
      "Reach out with your glass need and include photos if available for faster quoting.",
  },
  {
    title: "Receive Your Estimate",
    description:
      "You get clear pricing and project details with straightforward communication.",
  },
  {
    title: "Repair or Replacement",
    description:
      "Work is completed with attention to fit, safety, and clean finish.",
  },
];

const serviceAreas = [
  "Columbus, MS",
  "New Hope",
  "Caledonia",
  "Steens",
  "Starkville",
  "West Point",
  "Lowndes County",
  "Nearby Mississippi communities",
];

const whyChooseItems = [
  {
    title: "Clear Quotes",
    description: "Straight answers before work starts, with no pressure or surprise add-ons.",
  },
  {
    title: "Clean Installations",
    description: "Careful fitment, cleanup, and finish across vehicle, home, and business jobs.",
  },
  {
    title: "Local Columbus Service",
    description: "A nearby team serving Columbus and surrounding Mississippi communities.",
  },
  {
    title: "One Glass Team",
    description: "Auto glass, residential windows, storefronts, and security glass in one place.",
  },
];

const locationTrustItems = [
  {
    title: "Local Service",
    description: "Based in Columbus and serving nearby communities.",
  },
  {
    title: "Fast Response",
    description: "Call or text for scheduling and quick quote follow-up.",
  },
  {
    title: "Full-Service Glass",
    description: "Auto, residential, and commercial work from one team.",
  },
];

const reviewItems = [
  {
    reviewer: "Deborah Smith",
    time: "4 months ago",
    summary:
      "Steven arrived very shortly after her windshield was hit, and she described the service as prompt and professional.",
    detail: "Windshield repair",
  },
  {
    reviewer: "Jasmine Jones",
    time: "2 months ago",
    summary:
      "She knew the estimate before drop-off, and her total windshield replacement was finished before lunch.",
    detail: "Windshield replacement",
  },
  {
    reviewer: "Timmy Chancey",
    time: "3 months ago",
    summary: "Great price, great job, and in and out in no time.",
    detail: "Fast service",
  },
  {
    reviewer: "LR Killpack",
    time: "10 months ago",
    summary:
      "Helpful, informative windshield repair and replacement work from someone they trust completely.",
    detail: "Trusted work",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="site-root" id="top">
      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#top" aria-label="Pro-Tech Glass home">
            <Image
              src="/IMG_5050.png"
              alt="Pro-Tech Glass mark"
              width={928}
              height={925}
              className="brand-mark-image"
              priority
            />
            <span className="brand-copy">
              <span className="brand-title">PRO-TECH GLASS</span>
              <span className="brand-subtitle">AUTO • RESIDENTIAL • BUSINESS</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#why-us">Why Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#coverage">Coverage</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="header-cta"
            href={phoneHref}
            data-analytics-event="phone_click"
            data-analytics-label="Header phone button"
          >
            {phoneDisplay}
          </a>
        </div>
      </header>

      <main>
        <section className="section hero">
          <div className="hero-video-wrap" aria-hidden="true">
            <video
              className="hero-video"
              src="/protech-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          <div className="container hero-content">
            <div className="hero-copy reveal">
              <p className="section-kicker">Columbus, Mississippi</p>
              <h1 className="hero-title">
                Glass Repair &amp; Replacement in Columbus, MS
              </h1>
              <p className="lead">
                Auto, residential, and commercial glass service with fast
                scheduling, clean installs, and security-focused glass options.
              </p>

              <div className="service-pill-row">
                {[...serviceGroups, "Bullet Resistant"].map((group) => (
                  <span className="service-pill" key={group}>
                    {group}
                  </span>
                ))}
              </div>

              <div className="action-row">
                <a
                  className="button button-primary"
                  href={phoneHref}
                  data-analytics-event="phone_click"
                  data-analytics-label="Hero call button"
                >
                  Call {phoneDisplay}
                </a>
                <a
                  className="button button-secondary"
                  href={textHref}
                  data-analytics-event="text_quote_click"
                  data-analytics-label="Hero text quote button"
                >
                  Text for a Quote
                </a>
                <a className="button button-secondary" href="#services">
                  View Services
                </a>
              </div>
            </div>

            <div className="hero-contact-bar reveal delay-1">
              <Image
                src="/IMG_5050.png"
                alt="Pro-Tech Glass mark"
                width={928}
                height={925}
                className="hero-contact-logo"
              />
              <div className="hero-contact-details">
                <p>Quick Contact</p>
                <div>
                  <a
                    href={phoneHref}
                    data-analytics-event="phone_click"
                    data-analytics-label="Hero quick contact phone"
                  >
                    {phoneDisplay}
                  </a>
                  <a
                    href={emailHref}
                    data-analytics-event="email_click"
                    data-analytics-label="Hero quick contact email"
                  >
                    {businessEmail}
                  </a>
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-analytics-event="directions_click"
                    data-analytics-label="Hero quick contact address"
                  >
                    {address}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="stat-grid">
              <article className="stat-card reveal delay-1">
                <h2>Vehicle Glass</h2>
                <p>Windshield repair, replacement, and ADAS-related services.</p>
              </article>
              <article className="stat-card reveal delay-2">
                <h2>Home Glass</h2>
                <p>Window glass repairs, replacements, and shower door installs.</p>
              </article>
              <article className="stat-card reveal delay-3">
                <h2>Business Glass</h2>
                <p>Storefront installation and commercial replacement work.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section choose-section" id="why-us">
          <div className="container">
            <div className="choose-header">
              <p className="section-kicker">Why Choose Us</p>
              <h2>Built for clear answers, clean work, and local service.</h2>
            </div>

            <div className="choose-grid">
              {whyChooseItems.map((item, index) => (
                <article
                  className="choose-card reveal"
                  key={item.title}
                  style={{ animationDelay: `${0.1 + 0.05 * index}s` }}
                >
                  <span className="choose-number">{`0${index + 1}`}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="container reviews-wrap">
            <div className="reviews-header">
              <p className="section-kicker">Reviews</p>
              <h2>Google review highlights from local glass customers.</h2>
              <p>
                Recent Google reviewers mention prompt service, clear pricing,
                fast turnaround, and quality windshield repair and replacement.
              </p>
            </div>

            <div className="reviews-grid">
              {reviewItems.map((review, index) => (
                <article
                  className="review-card reveal"
                  key={review.reviewer}
                  style={{ animationDelay: `${0.08 * index}s` }}
                >
                  <div className="review-rating" aria-label="Google rating: 5 out of 5 stars">
                    <span className="review-stars" aria-hidden="true">
                      ★★★★★
                    </span>
                    <span>Google 5.0</span>
                  </div>
                  <p>{review.summary}</p>
                  <div>
                    <span>{review.reviewer}</span>
                    <small>{`${review.detail} • ${review.time}`}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-surface" id="services">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <p className="section-kicker">Services</p>
                <h2 className="section-title">Glass work for vehicles, homes, and businesses.</h2>
              </div>
              <p className="section-intro">
                From broken windshields to storefront glass and security-focused
                solutions, Pro-Tech Glass handles the work with clear communication.
              </p>
            </div>

            <div className="service-grid">
              {offerings.map((service, index) => (
                <article
                  className="service-card reveal"
                  key={service.title}
                  style={{ animationDelay: `${0.06 * index}s` }}
                >
                  <div className="service-media">
                    <Image
                      src={service.image}
                      alt=""
                      width={700}
                      height={500}
                      className="service-image"
                    />
                    <span className="service-category">{service.category}</span>
                  </div>
                  <div className="service-card-body">
                    <span className="service-index">{`0${index + 1}`}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-cta-band" aria-label="Request glass service">
          <div className="container service-cta-wrap">
            <div>
              <p>Need glass replaced?</p>
              <h2>Call or text Pro-Tech Glass today.</h2>
            </div>
            <div className="service-cta-actions">
              <a
                className="button button-primary"
                href={phoneHref}
                data-analytics-event="phone_click"
                data-analytics-label="Service CTA call button"
              >
                Call {phoneDisplay}
              </a>
              <a
                className="button button-dark"
                href={textHref}
                data-analytics-event="text_quote_click"
                data-analytics-label="Service CTA text quote button"
              >
                Text for a Quote
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <p className="section-kicker">How It Works</p>
            <h2 className="section-title">Simple process from quote to install.</h2>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article
                  className="process-card reveal"
                  key={step.title}
                  style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                >
                  <span className="step-number">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-surface" id="coverage">
          <div className="container coverage-grid">
            <div>
              <p className="section-kicker">Coverage</p>
              <h2 className="section-title">
                Serving Columbus, MS and surrounding communities.
              </h2>
              <p className="coverage-copy">
                If you are nearby and do not see your town listed, call or text to
                confirm availability.
              </p>
              <a
                className="button button-primary"
                href={textHref}
                data-analytics-event="text_quote_click"
                data-analytics-label="Coverage check availability button"
              >
                Check Availability
              </a>
            </div>

            <div className="chip-wrap">
              {serviceAreas.map((area) => (
                <span className="chip" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-surface location-section" id="location">
          <div className="container">
            <div className="line-heading">
              <span aria-hidden="true" />
              <h2>Our Columbus Location</h2>
              <span aria-hidden="true" />
            </div>

            <div className="location-stack">
              <div className="location-meta reveal">
                <p className="location-business">Pro-Tech Glass</p>
                <address className="location-address">
                  <span>{addressStreet}</span>
                  <span>{addressCityState}</span>
                </address>
              </div>

              <p className="location-callout reveal delay-1">
                Call{" "}
                <a
                  className="location-call-link"
                  href={phoneHref}
                  data-analytics-event="phone_click"
                  data-analytics-label="Location call link"
                >
                  {phoneDisplay}
                </a>{" "}
                now for fast, local service.
              </p>

              <div className="map-frame-wrap reveal delay-2">
                <iframe
                  title="Map to Pro-Tech Glass in Columbus, Mississippi"
                  src={mapEmbedSrc}
                  className="map-frame"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="location-actions reveal delay-2">
                <a
                  className="button button-primary"
                  href={mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="directions_click"
                  data-analytics-label="Location get directions button"
                >
                  Get Directions
                </a>
              </div>

              <div className="location-trust-grid reveal delay-3">
                {locationTrustItems.map((item) => (
                  <article className="location-trust-card" key={item.title}>
                    <p className="location-trust-title">{item.title}</p>
                    <p className="location-trust-copy">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-wrap">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Call, text, or email to get started.</h2>
              <p className="contact-copy">
                Share your vehicle details or property address and include photos to
                speed up pricing.
              </p>
            </div>

            <div className="contact-list">
              <a
                className="contact-item"
                href={phoneHref}
                data-analytics-event="phone_click"
                data-analytics-label="Contact call card"
              >
                <span>Call</span>
                <strong>{phoneDisplay}</strong>
              </a>
              <a
                className="contact-item"
                href={textHref}
                data-analytics-event="text_quote_click"
                data-analytics-label="Contact text card"
              >
                <span>Text</span>
                <strong>{phoneDisplay}</strong>
              </a>
              <a
                className="contact-item"
                href={emailHref}
                data-analytics-event="email_click"
                data-analytics-label="Contact email card"
              >
                <span>Email</span>
                <strong>{businessEmail}</strong>
              </a>
              <a
                className="contact-item"
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="directions_click"
                data-analytics-label="Contact address card"
              >
                <span>Address</span>
                <strong>{address}</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div className="footer-brand">
            <Image
              src="/IMG_5050.png"
              alt="Pro-Tech Glass mark"
              width={928}
              height={925}
              className="footer-logo"
            />
            <p>{`© ${year} Pro-Tech Glass. All rights reserved.`}</p>
          </div>
          <div className="footer-links">
            <a
              className="inline-link"
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              @protechglass.columbus
            </a>
            <a className="inline-link" href="https://protechglasscolumbus.com">
              protechglasscolumbus.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
