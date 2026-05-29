"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/i18n/config";

/**
 * Resolve the default locale from the current host.
 *
 * The same static build is served from several domains (e.g. ammagency.no and
 * ammagency.com.ua). Since the site is statically exported there is no server /
 * middleware to read Accept-Language, so the locale is derived from the hostname
 * on the client instead.
 */
export function localeFromHost(hostname = "") {
  const host = hostname.toLowerCase();

  if (host.endsWith(".no")) return "no";
  if (host.endsWith(".ua")) return "en"; // covers ammagency.com.ua

  return defaultLocale;
}

/**
 * Client-side redirect from a locale-less passthrough route (e.g. "/" or
 * "/cases") to the locale-prefixed route that matches the current domain.
 *
 * @param {{ path?: string }} props - sub-path after the locale, no trailing
 *   slash (e.g. "" for the root, "/cases" for the cases page).
 */
export default function LocaleRedirect({ path = "" }) {
  useEffect(() => {
    const locale = localeFromHost(window.location.hostname);
    window.location.replace(`/${locale}${path}/`);
  }, [path]);

  return null;
}
