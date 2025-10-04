import { courses } from '../data/courses';
import CourseCard from './CourseCard';
import './CoursesSection.css';

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="courses-container">
        <div className="courses-header">
          <h2 className="courses-title">Our Featured Courses</h2>
          <p className="courses-subtitle">
            Explore our comprehensive range of civil engineering courses designed by industry experts
          </p>
        </div>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={course.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
