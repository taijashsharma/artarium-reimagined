import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Shield, RefreshCcw, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹2,999",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure transactions",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "7-day return policy",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Handcrafted excellence",
  },
];

export const FeaturesBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-16 bg-secondary/30 border-y border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <feature.icon className="w-8 h-8 mx-auto mb-4 text-gold" />
              <h4 className="font-display text-lg text-foreground mb-1">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
