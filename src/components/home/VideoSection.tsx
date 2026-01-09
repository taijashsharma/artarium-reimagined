import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
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
            src="https://assets.mixkit.co/videos/preview/mixkit-golden-buddha-statue-in-smoke-4783-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-luxury text-gold mb-6 block">
            Our Promise
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 max-w-4xl mx-auto leading-tight">
            Bringing <span className="text-gold italic">Divine Energy</span> 
            <br />to Every Home
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Every piece in our collection is handcrafted by skilled artisans, 
            carrying forward centuries of tradition while embracing modern aesthetics.
            We believe that sacred objects should be as beautiful as the blessings they bring.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <p className="font-display text-5xl text-gold mb-2">500+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-luxury">Handcrafted Pieces</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border" />
            <div className="text-center">
              <p className="font-display text-5xl text-gold mb-2">50+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-luxury">Master Artisans</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border" />
            <div className="text-center">
              <p className="font-display text-5xl text-gold mb-2">10K+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-luxury">Happy Customers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
