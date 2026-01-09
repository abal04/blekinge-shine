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

  console.log({
    service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });

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
