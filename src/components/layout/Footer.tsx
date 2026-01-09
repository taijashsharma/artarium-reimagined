import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-display text-3xl text-foreground mb-4">
              Join the <span className="text-gold">Chirag</span> Family
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Subscribe for exclusive offers, new arrivals, and 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-dark text-primary-foreground px-8 py-3 rounded-sm uppercase text-sm tracking-luxury transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-display text-3xl text-gold">Chirag</h2>
              <span className="text-xs uppercase tracking-luxury text-muted-foreground">
                Enterprises
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Curating timeless pieces of art and decor that transform houses into homes. 
              Handcrafted with passion, delivered with love.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-luxury text-foreground mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link to="/new-arrivals" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                New Arrivals
              </Link>
              <Link to="/category/god-idols" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                God Idols
              </Link>
              <Link to="/category/decor" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                Home Decor
              </Link>
              <Link to="/category/gifting" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                Gifting
              </Link>
              <Link to="/rewards" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                Rewards Program
              </Link>
            </nav>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm uppercase tracking-luxury text-foreground mb-6">
              Customer Care
            </h4>
            <nav className="space-y-3">
              <Link to="/contact" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/shipping" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                Shipping Policy
              </Link>
              <Link to="/returns" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                Returns & Exchanges
              </Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/track-order" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                Track Your Order
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-luxury text-foreground mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  123, Artisan Street, Craft District<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:hello@chiragenterprises.com" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  hello@chiragenterprises.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs">
              © 2024 Chirag Enterprises. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-gold transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-gold transition-colors text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
