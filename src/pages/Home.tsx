import Hero from "../components/Hero";
import CoursesSection from "../components/CoursesSection";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "./Home.css";
import CustomPopup from "../components/CustomPopup";
import ContactUsForm from "../components/ContactUsForm";
import WhatsapIcon from "../assets/whatsAppIcon.svg";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <CoursesSection />
      <Footer />
      <CustomPopup
        trigger={
          <div className="whatsAppIcon">
            <img
              src={WhatsapIcon}
              alt="whatsapp"
              className="whatsAppIconImage"
            />
          </div>
        }
        content={<ContactUsForm />}
        position="top center"
        triggerType="click"
      />
    </div>
  );
};

export default Home;
