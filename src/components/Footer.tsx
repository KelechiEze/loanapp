import React from "react";
import { Bitcoin, Mail, Clock, MapPin, Facebook, Twitter, Linkedin, Instagram, Phone } from "lucide-react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-inner">
          <div className="footer-column footer-about">
            <div className="footer-brand">
              <span className="footer-logo">
                <Bitcoin size={20} />
              </span>
              <span className="footer-brand-text">
                <span className="footer-brand-line footer-bold">Pay</span>
                <span className="footer-brand-line">Coin</span>
              </span>
            </div>
            <p className="footer-description">
              Welcome to PayCoin loan company - we provide loans with competitive interest rates. You can easily provide documentation for your loans and receive quick approvals.
            </p>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <div className="contact-label">CALL ANYTIME</div>
                <div className="contact-value">+1 666 888 0000</div>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Our Service</a></li>
              <li><a href="#testimonials">Testimonial</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Latest News</h3>
            <div className="footer-news">
              <article className="news-item">
                <img src="/loan4.PNG" alt="Financial planning news" />
                <div>
                  <time className="news-date">December 21, 2024</time>
                  <h4 className="news-title">How to get approved for 90% loan amount</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Mail size={18} />
                <a href="mailto:needhelp@paycoin.com">needhelp@paycoin.com</a>
              </li>
              <li className="footer-contact-item">
                <Clock size={18} />
                <span>Mon - Sat 8:00 AM - 6:00 PM</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>80 Broklyn Golden Street, New York, USA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © Copyright 2025 by PayCoin. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook" className="social-link">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;