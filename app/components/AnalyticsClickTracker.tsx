"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>,
    ) => void;
  }
}

export function AnalyticsClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>("a[data-analytics-event]");

      if (!link || !window.gtag) {
        return;
      }

      window.gtag("event", link.dataset.analyticsEvent || "link_click", {
        event_category: "engagement",
        event_label: link.dataset.analyticsLabel || link.textContent?.trim() || "",
        link_url: link.href,
      });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
