// pages/_app.js
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import AIStylist from "../components/AIStylist";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // e.g. G-XXXXXXXXXX

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!GA_ID) return;

    const handleRouteChange = (url) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", GA_ID, { page_path: url });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />

      {/* Google Analytics (GA4) - only injected if NEXT_PUBLIC_GA_ID set */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: false });
            `}
          </Script>
        </>
      )}

      <Component {...pageProps} />
      <AIStylist />
    </>
  );
}
