import React, { useEffect, useRef } from "react";
import { Car, Heart, Home, Briefcase, GraduationCap, CreditCard } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Car,
    title: "Car Loan",
    description: "Get your dream car with our low-interest car loans. Flexible repayment terms up to 7 years with minimal documentation."
  },
  {
    icon: Heart,
    title: "Wedding Loan",
    description: "Make your special day memorable with our wedding loans. Quick approval with competitive rates for your celebration."
  },
  {
    icon: Home,
    title: "Property Loan",
    description: "Own your dream home with our affordable property loans. Up to 90% financing with flexible tenure options."
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Grow your business with our customized business loans. Quick processing for small and medium enterprises."
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    description: "Invest in your future with our education loans. Cover tuition fees and living expenses for domestic and international studies."
  },
  {
    icon: CreditCard,
    title: "Personal Loan",
    description: "Get instant personal loans for any purpose. No collateral required with attractive interest rates and fast disbursement."
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      
      if (cards && cards.length > 0) {
        gsap.set(cards, { opacity: 1, y: 0 }); // Set initial visible state
        
        gsap.from(cards, {
          y: 80,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="services">
      <div className="services-bg-shape" aria-hidden="true" />
      
      <div className="services-inner">
        <div className="services-header">
          <div className="services-badge">Our Great Services</div>
          <h2 className="services-title">A Quick, Secure & Transparent Process</h2>
        </div>

        <div ref={cardsRef} className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={index} className="service-card">
                <div className="service-icon">
                  <Icon size={28} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
