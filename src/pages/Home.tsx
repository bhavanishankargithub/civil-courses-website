import Hero from "../components/Hero";
import CoursesSection from "../components/CoursesSection";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "./Home.css";
import CustomPopup from "../components/CustomPopup";
import ContactUsForm from "../components/ContactUsForm";
import WhatsapIcon from "../assets/whatsAppIcon.svg";
import PhoneIcon from "../assets/phoneIcon.jpg";
import { OWNER_WHATSAPP_NUMBER } from "../data/config";

const Home = () => {
  return (
    <div>
      <Hero />
      <CoursesSection />
      <Carousel />
      <Footer />
      <div className="whatsAppAndPhoneIcon">
        <a href={`tel:${OWNER_WHATSAPP_NUMBER}`} aria-label="Call us">
          <img
            src={PhoneIcon}
            alt="whatsapp"
            className="whatsAppIconImage phoneIconImage"
          />
        </a>
        <CustomPopup
          trigger={
            <img
              src={WhatsapIcon}
              alt="whatsapp"
              className="whatsAppIconImage"
            />
          }
          content={<ContactUsForm />}
        />
      </div>
    </div>
  );
};

export default Home;
