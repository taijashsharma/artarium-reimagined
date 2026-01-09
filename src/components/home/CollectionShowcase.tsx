import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    id: 1,
    title: "Sacred Ganesha",
    subtitle: "Lord of New Beginnings",
    image: "https://images.unsplash.com/photo-1609941145996-7ed32b4c96f8?auto=format&fit=crop&w=1200&q=80",
    href: "/collection/ganesha",
  },
  {
    id: 2,
    title: "Divine Krishna",
    subtitle: "The Supreme Personality",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    href: "/collection/krishna",
  },
];

export const CollectionShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-luxury text-gold mb-4 block">
            Featured Collections
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Divine Masterpieces
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link
                to={collection.href}
                className="group block relative overflow-hidden rounded-sm aspect-[4/3]"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <span className="text-xs uppercase tracking-luxury text-gold/80 mb-2">
                    {collection.subtitle}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                    {collection.title}
                  </h3>
                  <span className="inline-block border border-gold/50 hover:border-gold hover:bg-gold hover:text-primary-foreground text-foreground px-8 py-3 rounded-sm uppercase text-sm tracking-luxury transition-all">
                    Explore Collection
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
