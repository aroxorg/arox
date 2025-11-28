"use client";

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Call to Action Section */}
      <div className="cta-section">
        <h2 className="cta-title">
          Ready to Transform
          <br />
          Your Look?
        </h2>
        <p className="cta-description">
          Get expert care for hair, nails, facials, and more — all tailored to
          your unique style.
          <br />
          Step into luxury and leave with confidence, no stress attached.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Start Now</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-links">
          <div className="link-column">
            <h3 className="column-title">Care Plans</h3>
          </div>

          <div className="link-column">
            <h3 className="column-title">Learn</h3>
          </div>

          <div className="link-column">
            <h3 className="column-title">About</h3>
          </div>

          <div className="link-column">
            <h3 className="column-title">Support</h3>
            {/* <a href="#" className="footer-link">
              FAQ's
            </a>
            <a href="#" className="footer-link">
              Contact Us
            </a> */}
          </div>
          {/* 
          <div className="link-column">
            <h3 className="column-title">Legal</h3>
            <a href="#" className="footer-link">
              Terms & Conditions
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Risk & Benefits
            </a>
            <a href="#" className="footer-link">
              Telehealth Consent
            </a>
            <a href="#" className="footer-link">
              Prescription Policy
            </a>
          </div> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2025 AROX All rights reserved.</p>
      </div>

      <style>{`
        .footer-container {
          // background: linear-gradient(135deg, #fff 0%, #fff 50%,  (--secondary-color) 100%);
          border-radius: 24px;
          padding: 60px 40px 30px;
          margin: 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .cta-section {
          text-align: center;
          margin-bottom: 80px;
        }

        .cta-title {
          font-size: 48px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 20px 0;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 16px;
          color: #666;
          margin: 0 0 40px 0;
          line-height: 1.5;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          align-items: center;
        }

        .btn-primary {
          background: var(--primary-color, #1a1a1a);
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .btn-primary:hover {
          background: var(--primary-hover, #fdfdfdff);
        }

        .btn-secondary {
          background: white;
          color: #374151;
          border: 1px solid #d1d5db;
          padding: 12px 32px;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .btn-secondary:hover {
          background: #f9fafb;
        }

        .footer-content {
          display: flex;
          gap: 80px;
          margin-bottom: 40px;
        }

        .footer-left {
          flex: 1;
          max-width: 400px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 40px;
        }

        .logo-icon {
          font-size: 24px;
          color: #1a1a1a;
        }

        .logo-text {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .newsletter-text {
          font-size: 16px;
          color: #1a1a1a;
          margin: 0 0 16px 0;
          font-weight: 500;
        }

        .newsletter-form {
          display: flex;
          gap: 0;
          margin-bottom: 16px;
        }

        .email-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px 0 0 8px;
          font-size: 14px;
          outline: none;
          background: white;
        }

        .email-input::placeholder {
          color: #9ca3af;
        }

        .submit-btn {
          background: #1a1a1a;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 0 8px 8px 0;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .submit-btn:hover {
          background: #374151;
        }

        .privacy-text {
          font-size: 12px;
          color: #6b7280;
          line-height: 1.4;
          margin: 0;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex: 2;
        }

        .link-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .column-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 8px 0;
        }

        .footer-link {
          font-size: 14px;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #374151;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
        }

        .copyright {
          font-size: 14px;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-container {
            margin: 20px;
            padding: 40px 20px 20px;
          }

          .cta-title {
            font-size: 32px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .footer-content {
            flex-direction: column;
            gap: 40px;
          }

          .footer-links {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
