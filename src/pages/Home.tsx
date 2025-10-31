import Hero from "../components/Hero";
import CoursesSection from "../components/CoursesSection";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "./Home.css";
import { useCallback, useRef } from "react";
import WhatsapAndPhone from "../components/WhatsapAndPhone";

const Home = () => {
  const coursesSectionRef = useRef<HTMLDivElement | null>(null);
  const handleExploreClick = useCallback(() => {
    coursesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <Hero handleExploreClick={handleExploreClick} />
      <CoursesSection coursesSectionRef={coursesSectionRef}/>
      <Carousel />
      <Footer />
      <WhatsapAndPhone />
    </div>
  );
};

export default Home;
