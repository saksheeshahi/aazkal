import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF1493" />
        <meta name="author" content="AazKal" />

        {/* Site Verification Meta Tags (Google, Bing, Pinterest) */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
        {process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && (
          <meta
            name="msvalidate.01"
            content={process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION}
          />
        )}
        {process.env.NEXT_PUBLIC_PINTEREST_SITE_VERIFICATION && (
          <meta
            name="p:domain_verify"
            content={process.env.NEXT_PUBLIC_PINTEREST_SITE_VERIFICATION}
          />
        )}

        <meta property="og:image" content="/logo-bag.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AazKal" />
        <meta
          property="og:title"
          content="AazKal – Real Looks. Real People. Real Style."
        />
        <meta
          property="og:description"
          content="Discover, recreate, and celebrate celebrity-inspired looks with AazKal. India's premium fashion discovery platform."
        />

        <link rel="icon" href="/logo-bag.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-bag.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* sitemap and robots discoverability */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className="font-[Poppins] bg-[#FFF9FA] text-[#4B2E2B]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
