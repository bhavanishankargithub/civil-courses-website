import "./Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Navbar/>
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="hero-brand">ReviNxt Academy</span>
            </h1>
            <p className="hero-subtitle">
              Transform Your Career with Expert-Led Civil Engineering Courses
            </p>
            <p className="hero-description">
              Master the skills you need to excel in structural design,
              construction management, and infrastructure development. Join
              thousands of engineers advancing their careers with our
              comprehensive, industry-focused curriculum.
            </p>
            <div className="hero-cta">
              <button className="hero-button primary">Explore Courses</button>
              <button className="hero-button book-free-session-button secondary">Book Your Free 1:1 Counselling Session</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <img
                src="/logo.jpg"
                alt="ReviNxt Academy Logo"
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
