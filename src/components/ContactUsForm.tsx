import React, { useState, type FormEvent } from "react";
import "./ContactUsForm.css";
import { OWNER_WHATSAPP_NUMBER } from "../data/config";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  course: string;
}

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
📩 *New Contact Form Submission*
---------------------------------
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
📝 *Subject:* ${formData.course}
  `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* <div className="form-close-arrow-container">
          <h1 className="form-close-arrow">←</h1>
        </div> */}
        <h2 className="form-title">Contact Us</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="course"
            placeholder="Course / Interest"
            value={formData.course}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;

// Course/Interest Dropdown Options

// AutoCAD

// Revit Structure

// ETABS / STAAD Pro

// Revit MEPF

// Civil 3D

// Revit Architecture

// Primavera

// Navisworks

// BIM

// Other Course (please specify)
