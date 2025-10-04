import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import './CourseDetail.css';
import { Clock, Award, BookOpen, ArrowLeft, CheckCircle } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="course-detail-error">
        <h2>Course not found</h2>
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="course-detail-hero">
        <div className="course-detail-hero-overlay"></div>
        <img src={course.image_url} alt={course.title} className="course-detail-hero-image" />
        <div className="course-detail-hero-content">
          <button className="back-button" onClick={() => navigate('/')}>
            <ArrowLeft size={20} />
            Back to Courses
          </button>
          <div className="course-detail-badge">{course.level}</div>
          <h1 className="course-detail-hero-title">{course.title}</h1>
          <p className="course-detail-hero-description">{course.description}</p>
          <div className="course-detail-hero-meta">
            <div className="meta-item">
              <Clock size={20} />
              <span>{course.duration}</span>
            </div>
            <div className="meta-item">
              <Award size={20} />
              <span>{course.level}</span>
            </div>
            <div className="meta-item">
              <BookOpen size={20} />
              <span>{course.topics.length} Topics</span>
            </div>
          </div>
        </div>
      </div>

      <div className="course-detail-container">
        <div className="course-detail-content">
          <section className="course-section">
            <h2 className="section-title">Course Overview</h2>
            <p className="section-text">{course.full_description}</p>
          </section>

          <section className="course-section">
            <h2 className="section-title">What You'll Learn</h2>
            <div className="topics-grid">
              {course.topics.map((topic, index) => (
                <div key={index} className="topic-card">
                  <CheckCircle className="topic-icon" size={24} />
                  <span className="topic-text">{topic}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="course-section">
            <h2 className="section-title">Course Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <h3 className="detail-label">Duration</h3>
                <p className="detail-value">{course.duration}</p>
              </div>
              <div className="detail-item">
                <h3 className="detail-label">Level</h3>
                <p className="detail-value">{course.level}</p>
              </div>
              <div className="detail-item">
                <h3 className="detail-label">Topics Covered</h3>
                <p className="detail-value">{course.topics.length} Major Topics</p>
              </div>
              <div className="detail-item">
                <h3 className="detail-label">Certificate</h3>
                <p className="detail-value">Upon Completion</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="course-detail-sidebar">
          <div className="sidebar-card">
            <div className="price-section">
              <span className="price-label">Course Price</span>
              <span className="price-value">${course.price}</span>
            </div>
            <button className="enroll-button-large">
              Enroll Now
            </button>
            <div className="features-list">
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Lifetime Access</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Expert Instruction</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Certificate of Completion</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>24/7 Support</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Downloadable Resources</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetail;
