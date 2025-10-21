import ImageCard from "./Image-card";
import "./hero.css";
import * as Lucide from "lucide-react";
import Navbar from "../components/Navbar";

export default function HeroSection() {
  return (
    <>
      <Navbar />

      <div id="home" className="hero-section-container">
        <div className="hero-main-content">
          <div className="hero-text-content">
            <h1 className="hero-heading">
              Pamper yourself with a soothing salon experience
            </h1>
            <p className="hero-description" style={{ marginTop: "20px" }}>
              Experience luxury hair care in the heart of London, Ontario.
              Professional styling, coloring, and treatments that transform.
            </p>
            <button
              className="primary-button"
              style={{ marginTop: "20px" }}
              onClick={() =>
                (window.location.href =
                  "https://book.squareup.com/appointments/8xsbok9njwyjuu/location/LEW3WR8VCBRG1/services")
              }
            >
              Book Appointment <Lucide.ArrowRight />
            </button>
          </div>

          <ImageCard />
        </div>
      </div>
    </>
  );
}
