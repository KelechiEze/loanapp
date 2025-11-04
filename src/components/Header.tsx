import React, { useState, useEffect } from "react";
import { Bitcoin, Menu, X } from "lucide-react";
import "./Header.css";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Close menu on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        {/* Brand Logo */}
        <a
          href="#home"
          className="header-brand"
          aria-label="PayCoin home"
          onClick={handleLinkClick}
        >
          <span className="header-logo">
            <Bitcoin size={22} aria-hidden="true" />
          </span>
          <span className="header-brand-text" aria-hidden="true">
            <span className="header-brand-line header-bold">Pay</span>
            <span className="header-brand-line">Coin</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav" aria-label="Primary navigation">
          <a href="#home" className="header-link" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" className="header-link" onClick={handleLinkClick}>
            About
          </a>
          <a href="#services" className="header-link" onClick={handleLinkClick}>
            Services
          </a>
          <a
            href="#why-choose-us"
            className="header-link"
            onClick={handleLinkClick}
          >
            Why Us
          </a>
          <a
            href="#testimonials"
            className="header-link"
            onClick={handleLinkClick}
          >
            Testimonials
          </a>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          {/* Desktop Sign In Button */}
          <a
            href="https://paycoin-dashboard.netlify.app/"
            className="header-signin desktop-signin"
            aria-label="Sign in to PayCoin dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIGN IN
          </a>

          {/* Mobile Sign In Button - Visible only on mobile */}
          <a
            href="https://paycoin-dashboard.netlify.app/"
            className="header-signin mobile-signin"
            aria-label="Sign in to PayCoin dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIGN IN
          </a>

          {/* Hamburger Menu Button */}
          <button
            className="header-burger"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (without SIGN IN) */}
      <div
        id="mobile-menu"
        className={`header-mobile ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <a href="#home" className="header-mobile-link" onClick={handleLinkClick}>
          Home
        </a>
        <a href="#about" className="header-mobile-link" onClick={handleLinkClick}>
          About
        </a>
        <a
          href="#services"
          className="header-mobile-link"
          onClick={handleLinkClick}
        >
          Services
        </a>
        <a
          href="#why-choose-us"
          className="header-mobile-link"
          onClick={handleLinkClick}
        >
          Why Us
        </a>
        <a
          href="#testimonials"
          className="header-mobile-link"
          onClick={handleLinkClick}
        >
          Testimonials
        </a>
      </div>
    </header>
  );
};

export default Header;