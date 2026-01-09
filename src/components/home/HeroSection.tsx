import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-craftsman-molding-a-piece-of-clay-22352-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="inline-block text-xs uppercase tracking-luxury text-gold mb-6 border border-gold/30 px-4 py-2 rounded-full">
            Luxury Living Awaits
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 max-w-4xl"
        >
          Artistry for Your{" "}
          <span className="text-gold italic">Sacred Space</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10"
        >
          Discover handcrafted divine idols and exquisite home decor 
          that bring blessings and elegance to every corner
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/category/god-idols"
            className="bg-gold hover:bg-gold-dark text-primary-foreground px-10 py-4 rounded-sm uppercase text-sm tracking-luxury transition-all hover:shadow-2xl hover:shadow-gold/20"
          >
            Explore Divine Collection
          </a>
          <a
            href="/new-arrivals"
            className="border border-gold/50 hover:border-gold text-foreground hover:text-gold px-10 py-4 rounded-sm uppercase text-sm tracking-luxury transition-colors"
          >
            New Arrivals
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-gold transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};
