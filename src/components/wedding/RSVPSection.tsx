import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send } from "lucide-react";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nama: "", kehadiran: "hadir", jumlah: "1", ucapan: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-3">Confirmation</p>
          <h2 className="font-script text-5xl gradient-gold-text mb-4">RSVP</h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div>
                <label className="block font-sans-elegant text-xs tracking-widest uppercase text-muted-foreground mb-2">Nama</label>
                <input
                  type="text"
                  required
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 font-serif text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Nama lengkap"
                />
              </div>

              <div>
                <label className="block font-sans-elegant text-xs tracking-widest uppercase text-muted-foreground mb-2">Kehadiran</label>
                <select
                  value={form.kehadiran}
                  onChange={(e) => setForm({ ...form, kehadiran: e.target.value })}
                  className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 font-serif text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                >
                  <option value="hadir">Hadir</option>
                  <option value="tidak">Tidak Hadir</option>
                  <option value="ragu">Masih Ragu</option>
                </select>
              </div>

              <div>
                <label className="block font-sans-elegant text-xs tracking-widest uppercase text-muted-foreground mb-2">Jumlah Tamu</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={form.jumlah}
                  onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
                  className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 font-serif text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block font-sans-elegant text-xs tracking-widest uppercase text-muted-foreground mb-2">Ucapan & Doa</label>
                <textarea
                  rows={4}
                  value={form.ucapan}
                  onChange={(e) => setForm({ ...form, ucapan: e.target.value })}
                  className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 font-serif text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-gold font-sans-elegant text-sm tracking-widest uppercase py-4 rounded-lg text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Kirim RSVP
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="glass-strong rounded-2xl p-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6 glow-gold-strong">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-script text-3xl gradient-gold-text mb-3">Terima Kasih!</h3>
              <p className="font-serif text-muted-foreground">Konfirmasi kehadiran Anda telah kami terima.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPSection;
