import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import PricingSection from "../components/PricingSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // SEO updates
    document.title = "PayCoin - Your Trusted Loan & Financial Services Partner";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get instant loan approvals with PayCoin. Competitive rates, transparent terms, and exceptional service for personal, business, property, and education loans."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <PricingSection />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;