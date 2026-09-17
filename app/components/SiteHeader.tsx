import Image from "next/image";
import Link from "next/link";

import { phoneDisplay, phoneHref } from "../site-info";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link className="brand" href="/#top" aria-label="Pro-Tech Glass home">
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
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/#why-us">Why Us</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#coverage">Coverage</Link>
          <Link href="/#contact">Contact</Link>
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
  );
}
