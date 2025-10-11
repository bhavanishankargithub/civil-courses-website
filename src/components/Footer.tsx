import { INSTAGRAM_LINK, LINKEDIN_LINK } from "../data/config";
import "./Footer.css";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <Building2 size={32} />
              <span>ReviNXT Academy</span>
            </div>
            <p className="footer-description">
              Empowering civil engineers with world-class education and
              industry-leading expertise. Build your future with us.
            </p>
            <div className="footer-social">
              <a className="social-link">
                <Facebook size={20} />
              </a>
              <a className="social-link">
                <Twitter size={20} />
              </a>
              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">All Courses</a>
              </li>
              <li>
                <a href="#">Instructors</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Career Guide</a>
              </li>
              <li>
                <a href="#">Study Materials</a>
              </li>
              <li>
                <a href="#">Certifications</a>
              </li>
              <li>
                <a href="#">Student Portal</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin size={18} />
                <span>123 Engineering Plaza, Tech City, TC 12345</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+91 9027771731</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>info@revinxt.academy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; 2025 ReviNXT Academy. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
