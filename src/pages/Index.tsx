import { useTheme } from "@/hooks/useTheme";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  // Enable automatic dark mode based on system preference
  useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
