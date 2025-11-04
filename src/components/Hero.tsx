import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  // Background slider images - add your actual image paths here
  const backgroundImages = [
    "/server.jpg",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80",
  ];

  useEffect(() => {
    // Mark first load as complete after component mounts
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 100);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [backgroundImages.length]);

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      {/* Background image slider */}
      <div className="hero-bg-slider" aria-hidden="true">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''} ${index === 0 && isFirstLoad ? 'first-load' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Diagonal blue overlays */}
      <div className="hero-diagonal-overlay" aria-hidden="true">
        <div className="hero-diagonal-layer-1" />
        <div className="hero-diagonal-layer-2" />
        <div className="hero-dots-pattern" />
      </div>

      <div className="hero-inner">
        <article className="hero-copy">
          <div className="hero-badge">
            Aimley and Secure Payment Proccess
          </div>
          <h1 id="hero-heading" className="hero-title">
            <span>Unlock Instant</span>
            <span className="hero-title-break">Crypto Loans Today!</span>
          </h1>
          <p className="hero-sub">
            Use your crypto as collateral and get cash in minutes — no credit
            checks, no delays. Experience fast, secure, and borderless lending powered
            by blockchain technology.
          </p>
          <div className="hero-ctas">
            <a
              href="https://paycoin-dashboard.netlify.app/"
              className="hero-cta"
              aria-label="Get started"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET STARTED <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </article>

        <div className="hero-status">
        </div>
      </div>
    </section>
  );
};

export default Hero;