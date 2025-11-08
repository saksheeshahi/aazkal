import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CommentSection from "../../components/CommentSection";
import InstagramEmbed from "../../components/InstagramEmbed";

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
      logo: { "@type": "ImageObject", url: "https://www.aazkal.com/logo-bag.png" },
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
        <meta property="og:image" content={`https://www.aazkal.com/api/og/${post.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />

      {/* 🩰 Page Animation Wrapper */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto p-4 sm:p-6 mt-24 space-y-10"
      >
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-2 sm:mb-3" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex space-x-1 items-center">
            <li>
              <Link href="/" className="text-aazpink hover:underline">Home</Link>
              <span className="mx-1">›</span>
            </li>
            <li>
              <Link href="/#celebrity-looks" className="text-aazpink hover:underline">
                Celebrity Looks
              </Link>
              <span className="mx-1">›</span>
            </li>
            <li className="text-gray-700">{post.celebrityName}</li>
          </ol>
        </nav>

        {/* Title + Instagram Embed */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-pink-50">
          <h1 className="text-3xl sm:text-4xl font-bold text-aazbrown mb-2">{post.title}</h1>
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
                Embedded from {post.celebrityName}’s official Instagram — displayed under
                Instagram’s embed license.
              </motion.p>
            </div>
          )}

          {post.instagramCaption && (
            <blockquote className="text-aazbrown/80 italic border-l-4 border-aazpink pl-4 mt-4">
              “{post.instagramCaption}”
            </blockquote>
          )}
        </div>

        {/* Narrative */}
        <section className="bg-gradient-to-b from-[#FFF6F9] to-white rounded-2xl p-6 shadow-md border border-pink-100">
          <h2 className="text-2xl font-bold text-aazbrown mb-3">
            {post.celebrityName}’s {post.eventName} Look in {post.outfitHighlight}
          </h2>
          <p className="text-[15px] text-aazbrown/80 leading-relaxed mb-4">
            {post.celebrityName} dazzled at {post.eventName} wearing a stunning{" "}
            {post.outfitHighlight}. This look perfectly blends grace, color, and
            cultural beauty — ideal for festive inspiration.
          </p>
          <p className="text-[15px] text-aazbrown/80 leading-relaxed">
            Want to recreate this look? AazKal brings you inspired curations —
            sarees, jewelry, and accessories that channel {post.celebrityName}’s timeless elegance.
          </p>
        </section>

        {/* Gradient Divider */}
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
                <strong>{post.eventName}</strong> charm with these curated fashion pieces
                inspired by her <em>{post.outfitHighlight}</em> elegance.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {post.shopItems.map((item, index) => {
                  const brand =
                    item.link?.includes("myntra") ? "Myntra" :
                    item.link?.includes("amazon") ? "Amazon" :
                    item.link?.includes("ajio") ? "AJIO" : "Shop Now";

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
                    >
                      {/* Product Image with shimmer */}
                      <div className="relative w-full h-52 overflow-hidden">
                        <div className="absolute inset-0 shimmer" />
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          fetchpriority="low"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <span className="absolute top-3 left-3 bg-aazpink/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                          Bestseller
                        </span>
                      </div>

                      <div className="p-5 flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="text-lg font-semibold text-aazbrown mb-1 group-hover:text-aazpink text-center sm:text-left">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-snug mb-3 text-center sm:text-left">
                            {item.description}
                          </p>
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-aazpink text-white py-2 rounded-full font-semibold hover:bg-pink-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                        >
                          Buy on {brand} →
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

        <p className="text-xs text-gray-500 mt-6 text-center italic leading-relaxed max-w-2xl mx-auto">
          *AazKal is not affiliated with {post.celebrityName} or any represented brand.
          This content is shared under fair use for editorial and fashion inspiration purposes.*
        </p>

        {/* ✨ More Celebrity Looks */}
        <section className="mt-20 border-t border-gray-100 pt-12 pb-20 relative">
          <h2 className="text-3xl font-bold text-aazbrown mb-4 text-center">
            ✨ More Celebrity Looks
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm leading-relaxed">
            Explore more celebrity-inspired styles — from traditional grace to modern elegance.
            Each look tells a story of timeless fashion.
          </p>

          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth md:overflow-visible">
              <div className="flex md:grid md:grid-cols-3 gap-6 px-4 md:px-0 justify-center">
                {posts.filter((p) => p.slug !== post.slug).slice(0, 6).map((related, index) => (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative group bg-gradient-to-b from-[#FFF6F9] to-[#FFF] border border-pink-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex-shrink-0 w-72 md:w-auto snap-center"
                  >
                    <div className="overflow-hidden h-60 relative">
                      <img
                        src={related.heroImageUrl}
                        alt={related.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                      <Link
                        href={`/celebrity/${related.slug}`}
                        className="bg-aazpink text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:bg-pink-700 transition"
                      >
                        View Details →
                      </Link>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-aazbrown mb-2 group-hover:text-aazpink transition-colors text-center md:text-left">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2 text-center md:text-left">
                        {related.excerpt}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-aazpink to-transparent rounded-full"></div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
}

// ✅ Static Generation
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "celebrityPosts.json");
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dataDir = path.join(process.cwd(), "data");
  const posts = JSON.parse(fs.readFileSync(path.join(dataDir, "celebrityPosts.json"), "utf8"));
  const shopData = JSON.parse(fs.readFileSync(path.join(dataDir, "shopItems.json"), "utf8"));
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { notFound: true };
  const shopMatch = shopData.find((s) => s.slug === params.slug);
  post.shopItems = shopMatch ? shopMatch.items : [];
  return { props: { post, posts } };
}
