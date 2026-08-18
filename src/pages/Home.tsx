// /pages/Home.tsx

import AboutSection from "../sections/About";
import ContactPage from "../sections/Contact";
import Footer from "../sections/Footer";
import HeroSection from "../sections/Hero";
import Services from "../sections/Services";
// import TestimonialSection from "../sections/Testimonials";
import "../App.css";
import TeamSlider from "../sections/TeamSlider";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Services />
      <AboutSection />
      <TeamSlider />
      {/* <TestimonialSection /> */}
      <ContactPage />
      <Footer />
    </main>
  );
};

export default Home;
