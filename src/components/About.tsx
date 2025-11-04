import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imagesRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about">
      <div className="about-inner">
        <div ref={imagesRef} className="about-images">
          <div className="about-image-wrapper about-image-1">
            <img src="/loan2.PNG" alt="Financial planning and calculation" />
          </div>
          <div className="about-image-wrapper about-image-2">
            <img src="/loan1.PNG" alt="Professional consultation meeting" />
            <div className="about-badge">
              TRUSTED COMPANY
            </div>
          </div>
        </div>

        <div ref={contentRef} className="about-content">
          <div className="about-label">Get To Know About Us</div>
          <h2 className="about-title">Few Words About Our Company</h2>
          <p className="about-text">
            PayCoin is a leading financial services provider committed to making loans accessible, transparent, and affordable. With over a decade of experience in the lending industry, we've helped thousands of individuals and businesses achieve their financial goals.
          </p>
          <p className="about-text">
            Our mission is to provide quick, secure, and hassle-free lending solutions with competitive interest rates. We believe in building long-term relationships with our clients through trust, transparency, and exceptional customer service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;