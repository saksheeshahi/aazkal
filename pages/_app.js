import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useEffect } from "react";
import AIStylist from "../components/AIStylist";


export default function App({ Component, pageProps }) {
useEffect(() => {
const handleRouteChange = (url) => {
if (typeof window !== 'undefined' && window.gtag) {
window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, { page_path: url });
}
};
if (typeof window !== 'undefined') {
window.addEventListener("routeChangeComplete", handleRouteChange);
}
return () => {
if (typeof window !== 'undefined') {
window.removeEventListener("routeChangeComplete", handleRouteChange);
}
};
}, []);


return (
<>
<DefaultSeo {...SEO} />
<Component {...pageProps} />
<AIStylist />
</>
);
}