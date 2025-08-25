import "../styles/index.css";

import Script from "next/script";

export const metadata = {
  title: "AMM/ video agency v.2.0",
  description:
    "Animation and Video Production Agency for Businesses – Order a Custom Video",
  metadataBase: new URL("https://ammagency.com.ua"),
  alternates: {
    canonical: "/en",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Tag manager & Chat */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`!function(e, t, a, n, s) {
                e[n] = e[n] || [],
                e[n].push({
                    "gtm.start": (new Date).getTime(),
                    event: "gtm.js"
                });
                var o = t.getElementsByTagName(a)[0]
                  , c = t.createElement(a);
                c.async = !0,
                c.src = "https://www.googletagmanager.com/gtm.js?id=GTM-W6GFXZKP",
                o.parentNode.insertBefore(c, o)
            }(window, document, "script", "dataLayer"),
            function(e, t, a, n, s, o, c) {
                e.SalesdepAIObject = s,
                e[s] = e[s] || function() {
                    (e[s].q = e[s].q || []).push(arguments)
                }
                ,
                e[s].l = 1 * new Date,
                o = t.createElement(a),
                c = t.getElementsByTagName(a)[0],
                o.async = !0,
                o.defer = !0,
                o.src = "https://account.salesdep.ai/sdk/salesdep.js",
                c.parentNode.insertBefore(o, c)
            }(window, document, "script", 0, "onLoadSalesdepAi"),
            onLoadSalesdepAi = function(e) {
                e(144, {
                    locale: "uk"
                })
            }`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6GFXZKP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Netlify forms */}
        <form
          name="modalForm"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="name" />
          <input type="number" name="phone" />
          <input type="email" name="email" />
        </form>
        <form
          name="contactForm"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="name" />
          <input type="number" name="phone" />
          <input type="email" name="email" />
        </form>

        {children}
      </body>
    </html>
  );
}
