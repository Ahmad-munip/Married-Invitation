import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Heart, Image, Send } from "lucide-react";

interface BottomNavProps {
  splashOpen: boolean;
}

const BottomNav = ({ splashOpen }: BottomNavProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Show nav when scrolling past splash
  useEffect(() => {
    if (splashOpen) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show when scrolled a bit past top
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Very simple active section detector based on scroll position
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      
      if (scrollY < height * 1.5) setActiveSection("hero");
      else if (scrollY < height * 3) setActiveSection("cerita");
      else if (scrollY < height * 4.5) setActiveSection("galeri");
      else setActiveSection("rsvp");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [splashOpen]);

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "cerita", icon: Heart, label: "Cerita" },
    { id: "galeri", icon: Image, label: "Galeri" },
    { id: "rsvp", icon: Send, label: "RSVP" },
  ];

  const scrollTo = (id: string) => {
    const height = window.innerHeight;
    let targetY = 0;
    
    if (id === "hero") targetY = height;
    else if (id === "cerita") targetY = height * 2.5;
    else if (id === "galeri") targetY = height * 3.8;
    else if (id === "rsvp") targetY = height * 5.5;

    window.scrollTo({ top: targetY, behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed top-1/2 -translate-y-1/2 right-4 md:right-8 z-[90]"
        >
          {/* Ornate card wrapper mimicking Love Story cards */}
          <div
            className="rounded-[16px] md:rounded-[20px] p-[2px] md:p-[3px] relative scale-90 md:scale-100 origin-right"
            style={{
              background: "linear-gradient(145deg, hsl(38 50% 80%), hsl(35 40% 74%))",
              boxShadow: "0 6px 24px hsl(30 30% 25% / 0.1), 0 2px 6px hsl(30 30% 25% / 0.06)",
            }}
          >
            <div
              className="rounded-[17px] relative overflow-hidden flex flex-col gap-2 p-2"
              style={{ background: "linear-gradient(170deg, hsl(38 45% 90%) 0%, hsl(35 40% 86%) 50%, hsl(33 38% 83%) 100%)" }}
            >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer group transition-colors duration-300"
                title={item.label}
              >
                {activeSection === item.id ? (
                  <motion.div
                    layoutId="nav-pill-vertical"
                    className="absolute inset-0 bg-gradient-to-br from-[hsl(40_90%_65%)] to-[hsl(35_65%_38%)] rounded-full shadow-[0_0_10px_hsl(40_72%_52%_/_0.5)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                ) : (
                  <div className="absolute inset-0 rounded-full border border-[hsl(30_40%_35%_/_0.2)] scale-[0.85] group-hover:scale-100 transition-transform duration-300" />
                )}
                <item.icon 
                  className={`w-5 h-5 z-10 transition-colors duration-300 ${
                    activeSection === item.id 
                      ? "text-primary-foreground" 
                      : "text-[hsl(30_40%_35%)] group-hover:text-[hsl(40_72%_52%)]"
                  }`} 
                />
              </button>
            ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomNav;
