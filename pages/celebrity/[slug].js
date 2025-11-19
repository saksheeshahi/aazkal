import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CommentSection from "../../components/CommentSection";
import InstagramEmbed from "../../components/InstagramEmbed";


// ⭐ Reusable Card Renderer for Shop Items
function renderShopCard(item, index, isOriginal = false) {
  const brand =
    item.link?.includes("myntra") ? "Myntra" :
    item.link?.includes("amazon") || item.link?.includes("amzn") ? "Amazon" :
    item.link?.includes("stockx") ? "StockX" :
    item.link?.includes("nykaa") ? "Nykaa" :
    item.link?.includes("ajio") ? "AJIO" : "Shop";

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative bg-white border border-pink-100 rounded-2xl shadow-sm flex flex-col overflow-hidden"
    >
      {/* IMAGE */}
      <div
        className={`relative w-full ${
          isOriginal ? "h-96" : "h-80"
        } bg-white overflow-hidden rounded-xl`}
      >
        {isOriginal ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-auto object-contain mx-auto"
          />
        ) : (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        )}

        <span
          className={`absolute top-3 left-3 ${
            isOriginal
              ? "bg-aazpink text-white"
              : "bg-pink-200 text-aazbrown"
          } text-xs font-semibold px-3 py-1 rounded-full shadow-md`}
        >
          {isOriginal ? "Original Bag" : "Similar Look"}
        </span>
      </div>

      {/* TEXT */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-aazbrown mb-1">
          {item.name}
        </h3>

        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-auto text-center bg-aazpink text-white py-2 rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Buy on {brand} →
        </a>
      </div>
    </motion.div>
  );
}



// ⭐ MAIN COMPONENT
export default function CelebrityPage({ post, posts }) {
  if (!post) return <div>Not found</div>;

  const canonicalUrl = `https://www.aazkal.com/celebrity/${post.slug}`;
  const siteName = "AazKal";

  const seoTitle = `${post.title} | ${post.celebrityName} ${post.eventName} Look | ${siteName}`;
  const seoDesc = `${post.celebrityName}’s ${post.eventName} look in ${post.outfitHighlight}. ${post.excerpt}`;
  const seoKeywords =
    post.keywords ||
    `${post.celebrityName} look, ${post.eventName}, ${post.outfitHighlight}, celebrity fashion, AazKal`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [post.heroImageUrl],
    author: { "@type": "Organization", name: siteName },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: "https://www.aazkal.com/logo-bag.png",
      },
    },
    description: seoDesc,
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={seoDesc} />
        <meta
          property="og:image"
          content={`https://www.aazkal.com/api/og/${post.slug}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />

      {/* MAIN CONTENT */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto p-4 sm:p-6 mt-24 space-y-10"
      >
        {/* Breadcrumb */}
        <nav
          className="text-sm text-gray-500 mb-2 sm:mb-3"
          aria-label="Breadcrumb"
        >
          <ol className="list-none p-0 inline-flex space-x-1 items-center">
            <li>
              <Link href="/" className="text-aazpink hover:underline">
                Home
              </Link>
              <span className="mx-1">›</span>
            </li>
            <li>
              <Link
                href="/#celebrity-looks"
                className="text-aazpink hover:underline"
              >
                Celebrity Looks
              </Link>
              <span className="mx-1">›</span>
            </li>
            <li className="text-gray-700">{post.celebrityName}</li>
          </ol>
        </nav>

        {/* Title */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-pink-50">
          <h1 className="text-3xl sm:text-4xl font-bold text-aazbrown mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            {post.celebrityName} • {post.eventName}
          </p>

          {post.instagramUrl && (
            <div className="flex flex-col items-center justify-center mt-6">
              <div className="w-full max-w-[540px] mx-auto shadow-md rounded-lg overflow-hidden border border-pink-100 bg-white">
                <InstagramEmbed url={post.instagramUrl} />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-xs text-gray-500 italic mt-3 text-center max-w-xs leading-relaxed"
              >
                Embedded from {post.celebrityName}’s official Instagram — under
                Instagram’s embed license.
              </motion.p>
            </div>
          )}
        </div>

        {/* Narrative */}
        <section className="bg-gradient-to-b from-[#FFF6F9] to-white rounded-2xl p-6 shadow-md border border-pink-100">
          <h2 className="text-2xl font-bold text-aazbrown mb-3">
            {post.celebrityName}’s {post.eventName} Look in{" "}
            {post.outfitHighlight}
          </h2>
          <p className="text-[15px] text-aazbrown/80 leading-relaxed mb-4">
            {post.celebrityName} dazzled at {post.eventName} wearing a stunning{" "}
            {post.outfitHighlight}. This look blends elegance, class, and
            modern style — perfect for festive inspiration.
          </p>
        </section>

        {/* Divider */}
        <div className="relative my-10 flex justify-center">
          <div className="w-1 h-20 bg-gradient-to-b from-pink-200 via-aazpink to-transparent rounded-full"></div>
        </div>




        {/* 🛍️ SHOP THIS LOOK */}
<section
  id="shop"
  className="bg-gradient-to-b from-[#FFF6F9] to-white rounded-2xl shadow-md border border-pink-100 p-8 scroll-mt-32"
>
  <h2 className="text-3xl font-bold text-aazbrown mb-6 text-center">
    🛍️ Shop This Look
  </h2>

  {post.shopItems?.length ? (
    <>
      <p className="text-sm text-gray-700 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
        Recreate <strong>{post.celebrityName}</strong>’s{" "}
        <strong>{post.eventName}</strong> charm with these curated fashion
        pieces inspired by her <em>{post.outfitHighlight}</em> elegance.
      </p>

      {/* ⭐ 3 Cards per row on Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {post.shopItems.map((item, index) => {
          const brand =
            item.link?.includes("myntra") ? "Myntra" :
            item.link?.includes("amazon") || item.link?.includes("amzn") ? "Amazon" :
            item.link?.includes("stockx") ? "StockX" :
            item.link?.includes("ajio") ? "AJIO" :
            item.link?.includes("nykaa") ? "Nykaa" :
            "Shop Now";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-pink-100 rounded-2xl shadow-sm transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl"
            >
              {/* 🔥 Product Image */}
              <div className="relative w-full h-80 overflow-hidden bg-white rounded-b-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* ⭐ Badge based on JSON tag */}
  <span className="absolute top-3 left-3 bg-aazpink/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
    {item.tag === "original"
      ? "Original Look"
      : "Similar Look"}
  </span>
              </div>

              {/* Text Section */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-aazbrown mb-2 text-left">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug mb-4 text-left">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-aazpink text-white py-2 rounded-ull font-semibold hover:bg-pink-700 hover:shadow-md transition-all duration-300"
                >
                  Buy on {item.brand} →
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  ) : (
    <p className="text-center text-aazbrown/70 italic py-10">
      👗 This look’s inspired pieces are being curated. Check back soon!
    </p>
  )}

  <div className="mt-12 flex justify-center">
    <div className="w-24 h-1 bg-gradient-to-r from-aazpink/70 to-transparent rounded-full"></div>
  </div>
</section>




        {/* Comments */}
        <section className="bg-white/60 backdrop-blur-md rounded-2xl border border-gray-100 p-6 shadow-sm">
          <CommentSection celebritySlug={post.slug} />
        </section>
      </motion.main>

      <Footer />
    </>
  );
}



// ⭐ Static Generation (Option A version)
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "celebrityPosts.json");
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dataDir = path.join(process.cwd(), "data");
  const posts = JSON.parse(
    fs.readFileSync(path.join(dataDir, "celebrityPosts.json"), "utf8")
  );
  const shopData = JSON.parse(
    fs.readFileSync(path.join(dataDir, "shopItems.json"), "utf8")
  );

  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { notFound: true };

  const shopMatch = shopData.find((s) => s.slug === params.slug);
  post.shopItems = shopMatch ? shopMatch.items : [];

  return { props: { post, posts } };
}
