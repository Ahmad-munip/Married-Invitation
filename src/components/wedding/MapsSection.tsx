import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { SectionVine } from "./SectionDecorations";

const MapsSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden z-10">
      <div className="ambient-glow-warm" style={{ width: 300, height: 300, top: "0%", left: "-8%" }} />
      <div className="ambient-glow" style={{ width: 250, height: 250, bottom: "5%", right: "-6%" }} />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-3">Location</p>
          <h2 className="font-script text-5xl gradient-gold-text mb-4">Lokasi Acara</h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        <motion.div
          className="glass-strong rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.194741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding venue location"
          />
          <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-serif font-semibold text-foreground">The Grand Ballroom</p>
                <p className="font-sans-elegant text-xs text-muted-foreground">Jl. Cinta Abadi No. 88, Jakarta</p>
              </div>
            </div>
            <a
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold font-sans-elegant text-xs tracking-widest uppercase px-6 py-3 rounded-full text-primary-foreground inline-flex items-center gap-2"
            >
              <Navigation className="w-3 h-3" />
              Buka Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapsSection;
