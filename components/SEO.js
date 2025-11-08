import Head from "next/head";

export default function SEO({ title, description, image = "/logo-bag.png", url }) {
  const fullTitle = title ? `${title} | AazKal` : "AazKal — Real Looks. Real People. Real Style.";
  const fullDesc = description || "Discover and recreate celebrity-inspired looks that celebrate individuality.";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content="AazKal" />
    </Head>
  );
}
