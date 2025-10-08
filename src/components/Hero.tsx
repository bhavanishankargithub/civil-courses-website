import "./Hero.css";
import Navbar from "./Navbar";
import Logo from "../assets/logo.jpg";
import CustomPopup from "./CustomPopup";
import ContactUsForm from "./ContactUsForm";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="hero-brand">ReviNXT Academy</span>
            </h1>
            <p className="hero-subtitle">
              Master modern civil engineering tools through live, hands-on
              training - bridging college learning to real-world skills.
            </p>
            <p className="hero-description">
              With real project-based learning, freelancing opportunities, and a
              supportive community, ReviNXT is more than a learning platform -
              it's a career transformation hub for engineers ready to thrive in
              the modern construction world.
            </p>
            <div className="hero-cta">
              <button className="hero-button primary">Explore Courses</button>
              <CustomPopup
                trigger={
                  <button className="hero-button book-free-session-button secondary">
                    Book Your Free 1:1 Counselling Session
                  </button>
                }
                content={<ContactUsForm />}
              />
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <img
                src={Logo}
                alt="ReviNXT Academy Logo"
                className="hero-logo"
              />
            </div>
          </div>
        </div>
      </section>
      <Animation />
    </>
  );
};

export default Hero;

const Animation = () => {
  return (
    <div className="animationArea">
      <ul className="animationCircles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
