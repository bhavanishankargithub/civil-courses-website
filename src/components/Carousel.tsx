import { useState, useEffect } from "react";
import "./Carousel.css";
import LiveClasses from "../assets/liveInteractiveClasses.png";
import IndustryRelevantCurriculum from "../assets/industryRelevantCurriculum.jpg";
import LearnFromIndustryProfessionals from "../assets/learnFromIndustryProfessionals.jpg";
import ProjectBasedLearning from "../assets/projectBasedLearning.png";
import DedicatedDoubtSolving from "../assets/dedicatedDoubtSolving.png";
import ExpertSupport from "../assets/expertSupport.png";
import CertificateOfCompletion from "../assets/certificationComplete.png";

const inspiringImages = [
  {
    url: LiveClasses,
    title: "🎯 100% Live & Interactive Classes",
    description:
      "Experience real-time learning with expert mentors — no pre-recorded videos, no passive watching.",
  },
  {
    url: IndustryRelevantCurriculum,
    title: "🏗 Industry-Relevant Curriculum",
    description:
      "Learn the exact skills top companies are hiring for — practical, hands-on, and aligned with real-world industry needs, not unnecessary theory.",
  },
  {
    url: LearnFromIndustryProfessionals,
    title: "👨‍🏫 Learn from Industry Professionals",
    description:
      "Get trained by working professionals who use Revit daily in their projects — learn real hacks, technical workflows, and best practices from the field.",
  },
  {
    url: ProjectBasedLearning,
    title: "🧩 Project-Based Learning",
    description:
      "Every module includes practical projects so you can apply what you learn, build confidence, and gain real-world experience.",
  },
  {
    url: DedicatedDoubtSolving,
    title: "💬 Dedicated Doubt Solving & Feedback",
    description:
      "Get personalized feedback on assignments and live doubt-solving sessions to ensure your learning stays on track.",
  },
  {
    url: ExpertSupport,
    title: "📞 1:1 Expert Support",
    description:
      "Still stuck somewhere? Drop a message on our chat support — we’ll schedule a one-on-one session with a subject matter expert if needed.",
  },
  {
    url: CertificateOfCompletion,
    title: "🎓 Certificate of Completion",
    description:
      "Receive a certificate that validates your skills and adds weight to your resume.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % inspiringImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? inspiringImages.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % inspiringImages.length);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-header">
          <h2 className="carousel-title">What Makes ReviNXT Stand Out?</h2>
          <p className="carousel-subtitle">
            Live, practical, and project-based learning designed to make every
            civil engineer industry-ready!
          </p>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-button prev" onClick={goToPrevious}>
            ‹
          </button>

          <div className="carousel-slides">
            {inspiringImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="carousel-image"
                />
                <div className="carousel-content">
                  <h3 className="carousel-slide-title">{image.title}</h3>
                  <p className="carousel-slide-description">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={goToNext}>
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {inspiringImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
