import React, { useEffect, useRef } from "react";
import { CheckCircle2, Zap, Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhyChooseUs.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Zap,
    title: "Quick Payment Process",
    description: "Get instant loan approvals with our streamlined digital process. Funds transferred within 24 hours."
  },
  {
    icon: Shield,
    title: "Safe & Secure Process",
    description: "Bank-level encryption and security measures to protect your personal and financial information."
  },
  {
    icon: CheckCircle2,
    title: "No Prepayment Fees",
    description: "Close your loan early without any additional charges or penalties. Complete flexibility in repayment."
  }
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });

      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-choose-us" className="why-choose-us">
      <div className="why-choose-us-inner">
        <div ref={imageRef} className="why-choose-us-image-wrapper">
          <div className="why-choose-us-dots-pattern" aria-hidden="true" />
          <div className="why-choose-us-image">
            <img src="/loan3.PNG" alt="Team collaboration and professional service" />
            <div className="why-choose-us-award">
              <Shield size={24} />
              <div>
                <div className="award-percent">58%</div>
                <div className="award-label">Award Winning</div>
              </div>
            </div>
          </div>
          <div className="why-choose-us-shape" aria-hidden="true" />
        </div>

        <div ref={contentRef} className="why-choose-us-content">
          <div className="why-choose-us-badge">Company Introduction</div>
          <h2 className="why-choose-us-title">
            A Quick, Secure And <span className="text-highlight">Transparent</span> Process
          </h2>
          <p className="why-choose-us-subtitle">
            Leverage Agile Frameworks To Provide Robust Level Overviews.
          </p>
          <p className="why-choose-us-description">
            PayCoin provides easy and secure loans with competitive interest rates. We offer different types of credit options including personal, home, business, wedding, and education loans.
          </p>

          <div className="why-choose-us-features">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="why-feature-card">
                  <div className="why-feature-icon">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="why-feature-title">{feature.title}</h3>
                    <p className="why-feature-description">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;