import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X, Star, Award, Trophy } from "lucide-react";

export const RewardsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gold hover:bg-gold-dark text-primary-foreground p-4 rounded-full shadow-2xl transition-colors"
      >
        <Gift size={24} />
        <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
          ★
        </span>
      </motion.button>

      {/* Rewards Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 right-6 z-50 w-80 bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-gold-dark via-gold to-gold-light p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="text-center">
                  <Gift size={40} className="mx-auto mb-3 text-primary-foreground" />
                  <h3 className="font-display text-2xl text-primary-foreground mb-1">
                    Chirag Rewards
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Earn points with every purchase
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Points Display */}
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <p className="text-muted-foreground text-xs uppercase tracking-luxury mb-1">
                    Your Points
                  </p>
                  <p className="text-4xl font-display text-gold">0</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Sign in to see your points
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-luxury text-foreground">
                    Member Benefits
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <Star size={16} className="text-gold" />
                      <span className="text-muted-foreground">Earn 1 point per ₹10 spent</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Award size={16} className="text-gold" />
                      <span className="text-muted-foreground">Birthday special 2x points</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Trophy size={16} className="text-gold" />
                      <span className="text-muted-foreground">Exclusive member-only offers</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gold hover:bg-gold-dark text-primary-foreground py-3 rounded-sm uppercase text-sm tracking-luxury transition-colors">
                  Join Now - It's Free
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
