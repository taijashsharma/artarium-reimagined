import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Brass Ganesha Idol",
    price: 4999,
    originalPrice: 6499,
    image: "https://images.unsplash.com/photo-1609941145996-7ed32b4c96f8?auto=format&fit=crop&w=600&q=80",
    category: "God Idols",
    isNew: true,
  },
  {
    id: 2,
    name: "Copper Diya Set",
    price: 1299,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?auto=format&fit=crop&w=600&q=80",
    category: "Pooja Items",
    isNew: true,
  },
  {
    id: 3,
    name: "Marble Krishna Statue",
    price: 8999,
    originalPrice: 11999,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    category: "God Idols",
    isNew: true,
  },
  {
    id: 4,
    name: "Antique Brass Lamp",
    price: 2499,
    originalPrice: 3299,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=600&q=80",
    category: "Decor",
    isNew: false,
  },
  {
    id: 5,
    name: "Wooden Wall Frame",
    price: 3499,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    category: "Wall Art",
    isNew: true,
  },
  {
    id: 6,
    name: "Silver Plated Puja Thali",
    price: 2199,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=600&q=80",
    category: "Pooja Items",
    isNew: false,
  },
  {
    id: 7,
    name: "Terracotta Vase Set",
    price: 1899,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80",
    category: "Decor",
    isNew: true,
  },
  {
    id: 8,
    name: "Handpainted Durga Idol",
    price: 12999,
    originalPrice: 15999,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    category: "God Idols",
    isNew: true,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-luxury text-gold mb-2 block">
              Curated For You
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              New Arrivals
            </h2>
          </div>
          <Link
            to="/new-arrivals"
            className="mt-4 md:mt-0 text-gold hover:text-gold-light uppercase text-sm tracking-luxury transition-colors hover-gold-underline"
          >
            View All
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-sm aspect-square bg-secondary/50 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* New Badge */}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-gold text-primary-foreground text-xs uppercase tracking-luxury px-3 py-1 rounded-full">
                      New
                    </span>
                  )}
                  
                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <button className="w-10 h-10 bg-background/90 hover:bg-gold rounded-full flex items-center justify-center text-foreground hover:text-primary-foreground transition-colors">
                      <Heart size={18} />
                    </button>
                    <button className="w-10 h-10 bg-background/90 hover:bg-gold rounded-full flex items-center justify-center text-foreground hover:text-primary-foreground transition-colors">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                  
                  {/* Quick Shop Button */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button className="w-full bg-gold hover:bg-gold-dark text-primary-foreground py-3 rounded-sm uppercase text-xs tracking-luxury transition-colors">
                      Quick Shop
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="font-display text-lg text-foreground group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-medium">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-muted-foreground text-sm line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
