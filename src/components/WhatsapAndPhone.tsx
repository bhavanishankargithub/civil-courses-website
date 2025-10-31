import CustomPopup from "../components/CustomPopup";
import ContactUsForm from "../components/ContactUsForm";
import WhatsapIcon from "../assets/whatsAppIcon.svg";
import PhoneIcon from "../assets/phoneIcon2.jpg";
import { OWNER_WHATSAPP_NUMBER } from "../data/config";
import "./WhatsapAndPhone.css";

const WhatsapAndPhone = () => {
  return (
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
          <img src={WhatsapIcon} alt="whatsapp" className="whatsAppIconImage" />
        }
        content={<ContactUsForm />}
      />
    </div>
  );
};

export default WhatsapAndPhone;
