import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RewardsButton } from "@/components/rewards/RewardsButton";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <RewardsButton />
    </div>
  );
};
