import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Index;
