"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Add blur/background if past 50px
      setIsScrolled(scrollTop > 50);

      // Hide on scroll down, show on scroll up
      if (scrollTop > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          padding: 0px 16px;
          right: 0;
          z-index: 999999000; 
          transition: transform 0.3s ease, backdrop-filter 0.3s ease, background 0.3s ease;
          backdrop-filter: ${isScrolled ? "blur(10px)" : "none"};
          background: ${
            isScrolled ? "rgba(255, 255, 255, 0.43)" : "transparent"
          };
          transform: ${isHidden ? "translateY(-100%)" : "translateY(0)"};
        }

        .nav-container {
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: space-between;
          justify-items: center;
          max-width: 1200px;
          margin: 0 auto;
          height: 100px;
          position: relative;
          // background: blue;
        }

        .logo { 
 position: absolute;
 top: 20px;  

  font-size: 20px;
  font-weight: 600;  
  // background-color: red;
  background-image: url('logo.png');
  background-size: contain;    /* scale image to fit */
  background-repeat: no-repeat;
  background-position: center;
  height: 60px; 
  width: 100px;
  color: #000;
  text-decoration: none;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: #374151;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #000;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .primary-button {
          background: #000;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 24px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .primary-button:hover {
          background: #374151;
          transform: translateY(-1px);
        }

        .breadcrumb-menu{
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links,
          .nav-actions {
            display: none;
          }

          .breadcrumb-menu{
            display: flex;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <div
            style={{
              // background: "orange",
              display: "flex",
              justifyContent: "bottom",
              alignItems: "left",
              alignSelf: "left",
              width: "100px",
              height: "100%",
              alignContent: "center",
              position: "relative",
            }}
          >
            <a
              href="/"
              className="logo"
              style={{ display: "block", verticalAlign: "middle" }}
            >
              {/* <img style={{ width: "80px" }} src="/src/assets/images/logo.png" /> */}
            </a>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link">
                About us
              </a>
            </li>
            <li>
              <a href="#testimony" className="nav-link">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact us
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="primary-button">Book Now</button>
          </div>

          <div className="breadcrumb-menu">
            <button onClick={() => setShowSideNav(true)} aria-label="Open menu">
              <span style={{ fontSize: 22, fontWeight: 700 }}>☰</span>
            </button>
          </div>
        </div>
      </nav>

      {showSideNav && (
        <div className="sidenav-overlay" onClick={() => setShowSideNav(false)}>
          <aside
            style={{
              position: "fixed",
              top: "0",
              right: 0,
              bottom: 0,
              width: "260px",
              height: "100%",
              background: "#fff",
              boxShadow: "0 0 16px rgba(0,0,0,0.12)",
              zIndex: 999999999999,
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              transition: "transform 0.3s ease",
            }}
          >
            <button
              style={{
                alignSelf: "flex-end",
                background: "none",
                border: "none",
                fontSize: 24,
                color: "grey",
                cursor: "pointer",
              }}
              onClick={() => setShowSideNav(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <a
              href="#about"
              className="nav-link"
              onClick={() => setShowSideNav(false)}
            >
              About us
            </a>
            <a
              href="#testimony"
              className="nav-link"
              onClick={() => setShowSideNav(false)}
            >
              Testimonials
            </a>
            <a
              href="#services"
              className="nav-link"
              onClick={() => setShowSideNav(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setShowSideNav(false)}
            >
              Contact us
            </a>
            <a
              className="primary-button"
              style={{
                marginTop: "auto",
                display: "inline-block",
                textAlign: "center",
                textDecoration: "none",
              }}
              href="https://www.fresha.com/book-now/arox-beauty-exahgy1l/services?lid=3165445&share=true&pId=3062317"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </aside>
        </div>
      )}
    </>
  );
}
