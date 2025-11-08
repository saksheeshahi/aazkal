import fs from "fs";
import path from "path";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPost({ post, related }) {
  if (!post) return <div>Not Found</div>;

  const canonicalUrl = `https://www.aazkal.com/blog/${post.slug}`;

  // ✅ Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [post.image],
    author: { "@type": "Organization", name: "AazKal" },
    publisher: {
      "@type": "Organization",
      name: "AazKal",
      logo: { "@type": "ImageObject", url: "https://www.aazkal.com/logo-bag.png" }
    },
    datePublished: post.date,
    description: post.excerpt
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aazkal.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aazkal.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl }
    ]
  };

  return (
    <>
      <Head>
        <title>{post.title} | AazKal Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto p-6 pt-28">
        {/* ✨ Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-md mb-10"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[420px] object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* ✨ Breadcrumb + Meta */}
        <div className="text-sm text-gray-500 mb-3 flex flex-wrap items-center justify-center gap-1">
          <Link href="/" className="text-aazpink hover:underline">
            Home
          </Link>
          <span>›</span>
          <Link href="/blog" className="text-aazpink hover:underline">
            Blog
          </Link>
          <span>›</span>
          <span className="text-gray-700">{post.title}</span>
        </div>

        {/* ✨ Title & Metadata */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-aazbrown text-center mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {post.title}
        </motion.h1>

        <p className="text-sm text-gray-500 text-center mb-10">
          {post.category} • {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* ✨ Article Content */}
        <article className="prose prose-lg mx-auto text-aazbrown/90 leading-relaxed">
          {post.content.split("\n").map((para, i) => (
            <p key={i} className="mb-5">
              {para}
            </p>
          ))}
        </article>

        {/* ✨ Ethical Disclosure */}
        <p className="text-xs text-gray-500 italic text-center mt-10">
          *AazKal is not affiliated with any celebrity or brand.  
          This article is for inspiration and educational purposes only.*
        </p>

        {/* ✨ Related Posts */}
        {related?.length > 0 && (
          <section className="mt-20 border-t border-pink-100 pt-10">
            <h2 className="text-2xl font-bold text-aazbrown mb-6 text-center">
              You Might Also Like
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block rounded-xl overflow-hidden shadow-md bg-gradient-to-b from-[#FFF6F9] to-white border border-pink-100 hover:-translate-y-1 hover:shadow-lg transition duration-300"
                >
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 text-left">
                    <h3 className="text-lg font-semibold text-aazbrown mb-1">
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {r.category} • {r.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

// ✅ Generate static paths from JSON
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "blogPosts.json");
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

// ✅ Fetch single + related
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "blogPosts.json");
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const post = posts.find((p) => p.slug === params.slug);
  const related = posts.filter((p) => p.slug !== params.slug).slice(0, 2);
  return { props: { post, related } };
}
