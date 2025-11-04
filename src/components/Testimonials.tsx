import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Happy Client",
    rating: 5,
    text: "PayCoin made getting a business loan incredibly easy. The process was transparent, fast, and the rates were competitive. Highly recommended for anyone looking for reliable financial services.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    rating: 5,
    text: "I secured a property loan through PayCoin and couldn't be happier. Their customer service team was exceptional and guided me through every step of the process with professionalism.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Happy Client",
    rating: 4,
    text: "The education loan I received helped me pursue my dream degree abroad. PayCoin's flexible repayment options and low interest rates made it possible for me to focus on my studies.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    }
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={sectionRef} id="testimonials" className="testimonials">
      <div className="testimonials-bg-pattern" aria-hidden="true" />
      
      <div className="testimonials-inner">
        <div className="testimonials-badge">Default title Client Feedback</div>
        <h2 className="testimonials-title">Customers Testimonials</h2>

        <div className="testimonials-container">
          <button
            className="testimonial-nav testimonial-nav-left"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div ref={cardRef} className="testimonial-card">
            <div className="testimonial-avatars">
              {testimonials.map((t, idx) => (
                <img
                  key={idx}
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  className={`testimonial-avatar ${idx === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>

            <h3 className="testimonial-name">{currentTestimonial.name}</h3>
            <p className="testimonial-role">{currentTestimonial.role}</p>
            <p className="testimonial-text">{currentTestimonial.text}</p>

            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < currentTestimonial.rating ? 'star-filled' : 'star-empty'}
                  fill={i < currentTestimonial.rating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
          </div>

          <button
            className="testimonial-nav testimonial-nav-right"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`testimonial-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
