import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Statistics.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "99%", label: "We Approve Loans" },
  { value: "$90K", label: "Daily Payments" },
  { value: "8,900", label: "Happy Customers" },
  { value: "346", label: "Staff Members" }
];

const Statistics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      
      gsap.from(statItems, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="statistics">
      <div className="statistics-video-bg" aria-hidden="true">
        <div className="video-overlay" />
        <div className="video-play-button">
          <Play size={32} />
        </div>
      </div>

      <div className="statistics-content">
        <h2 className="statistics-title">We Can Give Best Facilities For Business</h2>
        <div ref={statsRef} className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
