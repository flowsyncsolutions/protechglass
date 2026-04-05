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
    description:
      "Chip repair and full windshield replacement for a wide range of vehicles.",
  },
  {
    title: "ADAS Recalibration Support",
    description:
      "Post-windshield service calibration support for camera-based safety systems.",
  },
  {
    title: "Auto Glass Replacement",
    description:
      "Side and back glass replacement with careful cleanup and secure installation.",
  },
  {
    title: "Home Window Glass Repair",
    description:
      "Residential glass repairs and replacements for cracked, broken, or fogged panes.",
  },
  {
    title: "Shower Door Installation",
    description:
      "Clean, modern shower glass installation measured to your exact opening.",
  },
  {
    title: "Storefront & Business Glass",
    description:
      "Commercial glass replacement and storefront installation for local businesses.",
  },
  {
    title: "Heavy Equipment Glass",
    description:
      "Replacement glass for heavy machinery and work equipment applications.",
  },
  {
    title: "Custom Glass & Glass Cutting",
    description:
      "Custom patterned glass and precision cutting for specialty projects.",
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

const highlightItems = [
  "Auto glass",
  "Residential windows",
  "Storefront glass",
  "Call or text for quotes",
];

const heroPhotoSeed = [
  {
    src: "/glass-tech-1.jpg",
    alt: "Technician repairing windshield glass on a vehicle",
  },
  {
    src: "/glass-tech-2.jpg",
    alt: "Windshield repair tools and resin setup",
  },
  {
    src: "/glass-tech-3.jpg",
    alt: "Windshield repair tool positioned on auto glass",
  },
  {
    src: "/glass-tech-4.jpg",
    alt: "Windshield resin bridge tool setup for repair",
  },
  {
    src: "/glass-tech-5.jpg",
    alt: "Automotive glass chip repair in progress",
  },
];

const heroPhotoPositions = [
  "50% 50%",
  "38% 48%",
  "64% 42%",
  "30% 56%",
  "72% 46%",
  "45% 38%",
  "58% 60%",
  "40% 40%",
  "66% 54%",
  "34% 45%",
];

const heroPhotos = Array.from({ length: 20 }, (_, index) => {
  const base = heroPhotoSeed[index % heroPhotoSeed.length];

  return {
    ...base,
    position: heroPhotoPositions[index % heroPhotoPositions.length],
  };
});

const trustHighlights = [
  {
    title: "No-Hassle Service",
    description: "Clear quotes, direct communication, and no pressure.",
  },
  {
    title: "Customer-First Support",
    description: "Local technicians who walk you through the right option.",
  },
];

const whyChooseItems = [
  {
    title: "Workmanship Warranty",
    points: ["Our repair and replacement services are backed by our workmanship warranty."],
  },
  {
    title: "Personal Attention",
    points: [
      "You get updates throughout the job.",
      "We explain your options before any work starts.",
    ],
  },
  {
    title: "Local Pro-Tech Values",
    points: ["Industry-focused service quality, value, and reliability for Columbus families and businesses."],
  },
  {
    title: "You Are Valued",
    points: [
      "We prioritize your timeline and safety.",
      "Mobile and on-site options are available for many jobs.",
    ],
  },
  {
    title: "Auto, Residential, Commercial",
    points: ["One team for windshield service, home windows, storefronts, and specialty glass work."],
  },
  {
    title: "Fast Response Times",
    points: ["Call or text and we can quickly discuss your project and next available scheduling window."],
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
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#coverage">Coverage</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-cta" href={phoneHref}>
            {phoneDisplay}
          </a>
        </div>
      </header>

      <main>
        <section className="section hero">
          <div className="container hero-grid">
            <div className="reveal">
              <p className="section-kicker">Columbus, Mississippi</p>
              <h1 className="hero-title">
                Glass Repair &amp; Replacement in Columbus, MS
              </h1>
              <p className="lead">
                Auto, residential, and commercial glass service with fast
                scheduling and clean installs.
              </p>

              <div className="service-pill-row">
                {serviceGroups.map((group) => (
                  <span className="service-pill" key={group}>
                    {group}
                  </span>
                ))}
              </div>

              <div className="action-row">
                <a className="button button-primary" href={phoneHref}>
                  Call {phoneDisplay}
                </a>
                <a className="button button-secondary" href={textHref}>
                  Text for a Quote
                </a>
                <a className="button button-secondary" href="#services">
                  View Services
                </a>
              </div>
            </div>

            <aside className="hero-aside reveal delay-1">
              <div className="hero-slideshow" aria-label="Glass repair slideshow">
                {heroPhotos.map((photo, index) => (
                  <figure
                    className="hero-slide"
                    key={`${photo.src}-${index}`}
                    style={{ animationDelay: `${index * 5}s` }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={1280}
                      height={853}
                      className="hero-photo"
                      style={{ objectPosition: photo.position }}
                    />
                  </figure>
                ))}
              </div>

              <div className="hero-panel">
                <Image
                  src="/IMG_5050.png"
                  alt="Pro-Tech Glass symbol"
                  width={928}
                  height={925}
                  className="panel-logo"
                />
                <p className="panel-kicker">Quick Contact</p>
                <ul className="panel-list">
                  {highlightItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="hero-link" href={emailHref}>
                  {businessEmail}
                </a>
                <a
                  className="hero-link"
                  href={mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address}
                </a>
                <p className="owner-note">Owner: Steven Good</p>
              </div>
            </aside>
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
            <div className="line-heading">
              <span aria-hidden="true" />
              <h2>Why Choose Pro-Tech Glass</h2>
              <span aria-hidden="true" />
            </div>

            <div className="trust-grid">
              {trustHighlights.map((item, index) => (
                <article
                  className="trust-item reveal"
                  key={item.title}
                  style={{ animationDelay: `${0.08 * index}s` }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="choose-grid">
              {whyChooseItems.map((item, index) => (
                <article
                  className="choose-card reveal"
                  key={item.title}
                  style={{ animationDelay: `${0.1 + 0.05 * index}s` }}
                >
                  <h3>{item.title}</h3>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-surface" id="services">
          <div className="container">
            <p className="section-kicker">Services</p>
            <h2 className="section-title">Full-service glass work built around your needs.</h2>

            <div className="service-grid">
              {offerings.map((service, index) => (
                <article
                  className="service-card reveal"
                  key={service.title}
                  style={{ animationDelay: `${0.06 * index}s` }}
                >
                  <span className="service-index">{`0${index + 1}`}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
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
              <a className="button button-primary" href={textHref}>
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
                <a className="location-call-link" href={phoneHref}>
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
              <a className="contact-item" href={phoneHref}>
                <span>Call</span>
                <strong>{phoneDisplay}</strong>
              </a>
              <a className="contact-item" href={textHref}>
                <span>Text</span>
                <strong>{phoneDisplay}</strong>
              </a>
              <a className="contact-item" href={emailHref}>
                <span>Email</span>
                <strong>{businessEmail}</strong>
              </a>
              <a
                className="contact-item"
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
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
