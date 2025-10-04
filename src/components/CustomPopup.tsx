// import React, { useState } from "react";
// import "./CustomPopup.css";

// type Position =
//   | "top left"
//   | "top center"
//   | "top right"
//   | "bottom left"
//   | "bottom center"
//   | "bottom right";

// interface CustomPopupProps {
//   trigger: React.ReactNode;
//   content: React.ReactNode;
//   triggerType?: "hover" | "click";
//   position?: Position;
// }

// const CustomPopup: React.FC<CustomPopupProps> = ({
//   trigger,
//   content,
//   triggerType = "hover",
//   position = "top center",
// }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleMouseEnter = () => {
//     if (triggerType === "hover") setIsVisible(true);
//   };
//   const handleMouseLeave = () => {
//     if (triggerType === "hover") setIsVisible(false);
//   };
//   const handleClick = () => {
//     if (triggerType === "click") setIsVisible((prev) => !prev);
//   };

//   return (
//     <div
//       className="custom-popup-container-unique12345"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onClick={handleClick}
//     >
//       <div className="custom-popup-trigger-unique12345">{trigger}</div>
//       {isVisible && (
//         <div
//           className={`custom-popup-content-unique12345 custom-popup-position-${position
//             .replace(" ", "-")
//             .replace(" ", "-")}`}
//         >
//           {content}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomPopup;




import React, { useState, useEffect, type ReactNode } from "react";
import classNames from "classnames";
import "./CustomPopup.css";

type Position =
  | "top left"
  | "top center"
  | "top right"
  | "bottom left"
  | "bottom center"
  | "bottom right";

interface CustomPopupProps {
  trigger: ReactNode;
  content: ReactNode;
  position?: Position;
  triggerType?: "hover" | "click";
}

const CustomPopup: React.FC<CustomPopupProps> = ({
  trigger,
  content,
  position = "top center",
  triggerType = "hover",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle Esc key close for modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);
  const closePopup = () => setIsOpen(false);

  if (triggerType === "click") {
    return (
      <>
        <div className="custom-popup-trigger-unique12345" onClick={toggleOpen}>
          {trigger}
        </div>

        {isOpen && (
          <div className="custom-popup-modal-overlay-unique12345" onClick={closePopup}>
            <div
              className="custom-popup-modal-content-unique12345"
              onClick={(e) => e.stopPropagation()}
            >
              {content}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="custom-popup-container-unique12345">
      <div
        className="custom-popup-trigger-unique12345"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          className={classNames(
            "custom-popup-content-unique12345",
            `custom-popup-${position.replace(" ", "-")}-unique12345`
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default CustomPopup;
