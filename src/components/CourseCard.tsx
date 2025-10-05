import { useNavigate } from "react-router-dom";
import "./CourseCard.css";
import { Clock, Award, BookOpen } from "lucide-react";
import type { Course } from "../types/course";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate(`/course/${course.id}`);
  };

  const handleEnroll = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="course-card">
      <div className="course-card-image-wrapper">
        <img
          src={course.image_url}
          alt={course.title}
          className="course-card-image"
        />
        <div className="course-card-overlay">
          <span className="course-card-level">{course.level}</span>
        </div>
      </div>
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-description">{course.description}</p>

        <div className="course-card-meta">
          <div className="course-card-meta-item">
            <Clock className="course-card-icon" size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="course-card-meta-item">
            <Award className="course-card-icon" size={16} />
            <span>{course.level}</span>
          </div>
          <div className="course-card-meta-item">
            <BookOpen className="course-card-icon" size={16} />
            <span>{course.topics.length} Topics</span>
          </div>
        </div>

        <div className="course-card-price">
          <span className="price-amount striked-price-amount">₹{course.strikedPrice}</span>
          <span className="price-amount">₹{course.price}</span>
        </div>

        <div className="course-card-actions">
          <button
            className="course-card-button know-more"
            onClick={handleKnowMore}
          >
            Know More
          </button>
          <button
            className="course-card-button enroll-now"
            onClick={handleEnroll}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
