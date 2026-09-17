import Image from "next/image";
import Link from "next/link";

import { instagramHref } from "../site-info";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
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
          <Link className="inline-link" href="/privacy">
            Privacy Policy
          </Link>
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
  );
}
