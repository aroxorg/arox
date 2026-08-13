// import Image from "next/image"
import {
  Globe,
  PlayIcon as Run,
  NotebookIcon as Lotus,
  CheckSquare,
  ArrowRight,
  Square,
} from "lucide-react";
import "./about.css";

// import Link from "next/link"

export default function AboutSection() {
  return (
    <>
      <section className="yoga-section">
        <div className="yoga-subtitle">What we offer</div>
        <h2 className="yoga-heading">Our extensive pedicure services</h2>

        <div className="yoga-content-gridx">
          <div className="yoga-main-imagex lefter">
            <div className="innerServ">
              <h4>Classic Hardware Pedicure</h4>
              <p>
                The perfect choice for those who value comfort, hygiene, and
                flawless results. Using a modern machine with built-in vacuum
                suction, the dry technique allows for a safe and gentle
                treatment without soaking. Your feet feel smooth and refreshed,
                while your nails look neat, healthy, and polished for longer.
              </p>
            </div>
          </div>

          <div className="yoga-main-imagex mid">
            <div className="innerServ">
              <h4>Pedicure with Podology Elements</h4>
              <p>
                For those who want not only beautiful but also healthy feet. We
                carefully and professionally treat cracks, thickened or
                problematic nails, and provide care for nails affected by
                fungus. This pedicure combines aesthetics with a therapeutic
                approach, bringing back lightness, comfort, and confidence in
                every step
              </p>
            </div>
          </div>
          <div className="yoga-main-imagex righter">
            <div className="innerServ">
              <h4>Unibrace Corrective System</h4>
              <p>
                Unibrace is an advanced solution for correcting ingrown and
                problematic nails. It gently lifts the nail edges, relieves
                pressure on the skin, and reduces discomfort. Over time, the
                nail grows into a healthier, natural shape, restoring comfort
                while walking. Unibrace offers an effective, non-surgical way to
                treat nail problems and bring ease back to every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>Luxury hair treatments for a radiant glow</h2>

          <p>
            Discover a blissful escape through our premium salon services,
            designed to rejuvenate your style and renew your confidence
          </p>

          <div className="about-Buttons">
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.fresha.com/book-now/arox-beauty-exahgy1l/services?lid=3165445&share=true&pId=3062317")
              }
              className="primary-button"
            >
              Book Now <ArrowRight />
            </button>
            <button className="secondary-button">
              Learn More <Square />
            </button>
          </div>

          <div className="about-image">
            {/* <Image
                            src="/images/about-image.jpg"
                            alt="About Us"
                            width={400}
                            height={600}
                            className="about-main-image"
                        /> */}
          </div>
        </div>
      </section>

      <section className="yoga-section">
        <div className="yoga-subtitle">Why us</div>
        <h2 className="yoga-heading">
          Feel the magic of gentle hair rejuvenation
        </h2>

        <div className="yoga-content-grid">
          <div className="yoga-features-left">
            <div className="feature-item">
              <div className="icon-wrapper">
                <Globe />
              </div>
              <h3>Unlimited Session</h3>
              <p>No limits. Request as much as you need, anytime you want</p>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper">
                <Lotus />
              </div>
              <h3>Custom Styling</h3>
              <p>
                Looks tailored to your unique features and personality, for a
                style that’s perfectly you.
              </p>
            </div>
          </div>

          <div className="yoga-main-image"></div>

          <div className="yoga-features-right">
            <div className="feature-item">
              <div className="icon-wrapper">
                <Run />
              </div>
              <h3>Premium Care</h3>
              <p>
                Receive top-tier treatments delivered promptly, so you can enjoy
                luxury without the wait.
              </p>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper">
                <CheckSquare />
              </div>
              <h3>Quality Assurance</h3>
              <p>
                Every service meets our highest standards, ensuring flawless
                results every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
