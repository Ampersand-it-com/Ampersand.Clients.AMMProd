"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export function useLocalizedPath() {
  const { lang } = useParams();
  const pathname = usePathname();

  // переход на страницу внутри текущего языка
  function toPage(slug) {
    return `/${lang}${slug.startsWith("/") ? slug : "/" + slug}`;
  }

  // смена языка (оставляем ту же страницу, но меняем сегмент)
  function toLocale(newLocale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || "/";
  }

  function getCleanPath() {
    const segments = pathname.split("/");
    segments.splice(0, 2);
    return segments.join("/") || "/";
  }

  return { lang, toPage, toLocale, getCleanPath };
}

export function LocalizedLink({ href, children, ...props }) {
  const { toPage } = useLocalizedPath();
  return (
    <Link href={toPage(href)} {...props}>
      {children}
    </Link>
  );
}
