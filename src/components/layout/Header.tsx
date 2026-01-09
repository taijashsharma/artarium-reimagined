import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Decor",
    href: "/category/decor",
    subcategories: ["Figurines", "Candle Holders", "Vases", "Book Ends"],
  },
  {
    name: "God Idols",
    href: "/category/god-idols",
    subcategories: ["Ganesha", "Krishna", "Shiva", "Hanuman", "Durga"],
  },
  {
    name: "Kitchenware",
    href: "/category/kitchenware",
    subcategories: ["Brass Utensils", "Copper Items", "Serving Ware"],
  },
  {
    name: "Wall Art",
    href: "/category/wall-art",
    subcategories: ["Metal Art", "Wooden Art", "Traditional", "Modern"],
  },
  {
    name: "Gifting",
    href: "/category/gifting",
    subcategories: ["Corporate Gifts", "Wedding Gifts", "Festival Gifts"],
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        {/* Top announcement bar */}
        <div className="bg-primary/10 py-2 px-4 text-center">
          <p className="text-xs tracking-luxury uppercase text-gold">
            Free Shipping on Orders Above ₹2,999 • Handcrafted with Love
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-sm uppercase tracking-wide-luxury text-foreground/80 hover:text-gold transition-colors hover-gold-underline"
              >
                Home
              </Link>
              <Link
                to="/new-arrivals"
                className="text-sm uppercase tracking-wide-luxury text-foreground/80 hover:text-gold transition-colors hover-gold-underline"
              >
                New Arrivals
              </Link>
            </nav>

            {/* Logo */}
            <Link to="/" className="flex flex-col items-center">
              <h1 className="font-display text-2xl md:text-3xl font-semibold text-gold">
                Chirag
              </h1>
              <span className="text-[10px] uppercase tracking-luxury text-foreground/60">
                Enterprises
              </span>
            </Link>

            {/* Right Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/collections"
                className="text-sm uppercase tracking-wide-luxury text-foreground/80 hover:text-gold transition-colors hover-gold-underline"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-sm uppercase tracking-wide-luxury text-foreground/80 hover:text-gold transition-colors hover-gold-underline"
              >
                About
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-foreground/80 hover:text-gold transition-colors">
                <Search size={20} />
              </button>
              <button className="text-foreground/80 hover:text-gold transition-colors">
                <User size={20} />
              </button>
              <button className="relative text-foreground/80 hover:text-gold transition-colors">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Category Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-12 pb-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  to={category.href}
                  className="flex items-center gap-1 text-xs uppercase tracking-luxury text-foreground/70 hover:text-gold transition-colors py-2"
                >
                  {category.name}
                  <ChevronDown size={12} className={`transition-transform ${activeCategory === category.name ? 'rotate-180' : ''}`} />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeCategory === category.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-card border border-border rounded-sm shadow-xl min-w-[200px] py-4"
                    >
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          to={`${category.href}/${sub.toLowerCase().replace(" ", "-")}`}
                          className="block px-6 py-2 text-sm text-foreground/70 hover:text-gold hover:bg-secondary/50 transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="pt-32 px-6">
              <nav className="space-y-6">
                <Link
                  to="/"
                  className="block text-2xl font-display text-foreground hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/new-arrivals"
                  className="block text-2xl font-display text-foreground hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  New Arrivals
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="block text-2xl font-display text-foreground hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  to="/about"
                  className="block text-2xl font-display text-foreground hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
