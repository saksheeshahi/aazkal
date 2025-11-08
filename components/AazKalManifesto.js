import { motion } from "framer-motion";

export default function AazKalManifesto() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden bg-gradient-to-b from-[#FFFDFE] via-[#FFF8FA] to-[#FFF5F8]">
      {/* Subtle glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,220,235,0.3),_transparent_65%)]" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-aazbrown mb-8 leading-tight">
          The AazKal Manifesto
        </h2>

        {/* Poetic body */}
        <p className="text-lg md:text-xl text-aazbrown/90 leading-relaxed font-light max-w-3xl mx-auto mb-8">
          We don’t sell clothes — we celebrate <strong>stories</strong>.  
          <br />
          AazKal was born to remind the world that style isn’t about labels,  
          it’s about <strong>identity</strong>, <strong>confidence</strong>, and  
          the courage to be <em>real</em>.
        </p>

        <p className="text-base md:text-lg text-aazbrown/80 leading-relaxed max-w-2xl mx-auto mb-8 italic">
          Every reel we share, every creator we feature,  
          is a story of <strong>ordinary women doing extraordinary things</strong>.  
          We use real people, real locations, and real emotions —  
          to show that beauty doesn’t live in filters,  
          it lives in <em>you</em>.
        </p>

        {/* Divider */}
        <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-aazpink to-transparent my-10"></div>

        <p className="text-base md:text-lg text-aazbrown/80 leading-relaxed font-light max-w-3xl mx-auto">
          From sarees to shoes, from glow to grace —  
          AazKal curates not just a <strong>look</strong>, but a <strong>feeling</strong>.  
          We build confidence, not comparison.  
          And in doing so, we help women everywhere  
          step into the light of who they already are.
        </p>
      </motion.div>
    </section>
  );
}
