import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { VideoSection } from "@/components/home/VideoSection";
import { CollectionShowcase } from "@/components/home/CollectionShowcase";
import { FeaturesBar } from "@/components/home/FeaturesBar";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InstagramFeed } from "@/components/home/InstagramFeed";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesBar />
      <CategoriesSection />
      <FeaturedProducts />
      <VideoSection />
      <CollectionShowcase />
      <TestimonialsSection />
      <InstagramFeed />
    </Layout>
  );
};

export default Index;
