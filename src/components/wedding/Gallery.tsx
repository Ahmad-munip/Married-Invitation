import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import FloralFrame from "./FloralFrame";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden z-10">
      <FloralFrame positions={["top-left", "top-right", "bottom-left", "bottom-right"]} size="sm" />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={8} />

      <div className="ambient-glow" style={{ width: 300, height: 300, top: "5%", left: "-5%" }} />
      <div className="ambient-glow" style={{ width: 250, height: 250, bottom: "10%", right: "-5%" }} />

      {[
        { left: "5%", top: "40%", size: 14 },
        { left: "90%", top: "30%", size: 10 },
        { left: "50%", top: "85%", size: 12 },
      ].map((orb, i) => (
        <motion.div key={`orb-${i}`} className="absolute rounded-full pointer-events-none"
          style={{ left: orb.left, top: orb.top, width: orb.size, height: orb.size, background: "radial-gradient(circle, hsl(40 80% 60% / 0.35), transparent)", boxShadow: "0 0 12px hsl(40 72% 52% / 0.2)" }}
          animate={{ y: [-8, 8, -8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }} />
      ))}

      <div className="max-w-5xl mx-auto relative">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-3">Moments</p>
          <h2 className="font-script text-5xl md:text-6xl gradient-gold-text mb-4">Gallery</h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group relative"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              onClick={() => setSelected(img)}
              whileHover={{ y: -4 }}
            >
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              {/* Gold gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(180deg, transparent 40%, hsl(40 72% 52% / 0.25) 100%)" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 40px hsl(40 72% 52% / 0.15)" }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <button className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors" onClick={() => setSelected(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img src={selected} alt="Gallery preview" className="max-w-full max-h-[85vh] rounded-xl object-contain"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
