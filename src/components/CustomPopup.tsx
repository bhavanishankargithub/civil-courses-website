import React, { useState, useEffect, type ReactNode } from "react";
import ReactDOM from "react-dom";
import "./CustomPopup.css";

interface CustomPopupProps {
  trigger: ReactNode;
  content: ReactNode;
}

const CustomPopup: React.FC<CustomPopupProps> = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const togglePopup = () => setIsOpen(!isOpen);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div onClick={togglePopup} className="custom-popup-trigger-unique12345">
        {trigger}
      </div>

      {isOpen &&
        ReactDOM.createPortal(
          <div
            className="custom-popup-modal-overlay-unique12345"
            onClick={closePopup}
          >
            <div
              className="custom-popup-modal-content-unique12345"
              onClick={(e) => e.stopPropagation()}
            >
              {content}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default CustomPopup;
