import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import "./CourseDetail.css";
import { Clock, Award, BookOpen, ArrowLeft, CheckCircle } from "lucide-react";
import { sendWhatsappMessage } from "../data/helper";
import { useLayoutEffect, useRef, useState } from "react";
import type { ScheduleDetail } from "../data/schedule";
import DownArrowIcon from "../assets/downArrowIcon.svg";

const whatMakesUsDifferentData = [
  {
    emoji: "🎯",
    title: "100% Live & Interactive Classes",
    description:
      "Experience real-time learning with expert mentors - no pre-recorded videos, no passive watching.",
  },
  {
    emoji: "🏗️",
    title: "Industry-Driven Curriculum",
    description:
      "Focus on the exact Revit skills recruiters ask for. Learn the exact skills top companies are hiring for - practical, hands-on, and aligned with real-world industry needs, not unnecessary theory.",
  },
  {
    emoji: "👨‍🏫",
    title: "Learn from Industry Professionals",
    description:
      "Get trained by working professionals who use Revit daily in their projects - learn real hacks, technical workflows, and best practices from the field. Get insider techniques, shortcuts, and site realities from people who design and build every day.",
  },
  {
    emoji: "🧩",
    title: "Project-Based Learning",
    description:
      "Every module includes practical projects so you can apply what you learn, build confidence, and gain real-world experience.",
  },
  {
    emoji: "💬",
    title: "Dedicated Doubt Solving & Feedback",
    description:
      "Get personalized feedback on assignments and live doubt-solving sessions to ensure your learning stays on track.",
  },
  {
    emoji: "📞",
    title: "1:1 Expert Support",
    description:
      "Still stuck somewhere? Drop a message on our chat support - we’ll schedule a one-on-one session with a subject matter expert if needed.",
  },
  {
    emoji: "🎓",
    title: "Certificate of Completion",
    description:
      "Receive an industry-recognized certificate that validates your skills and adds weight to your resume.",
  },
  {
    emoji: "💼",
    title: "Paid Freelancing Opportunity",
    description:
      "Where students are provided the opportunity to deliver the work and get paid.",
  },
  {
    emoji: "🎓",
    title: "Gurukul Connect",
    description:
      "Top performers will be having the TA opportunities at ReviNXT Community...And much more!",
  },
];

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendCheckAvailabilityWhatsappMessage = () => {
    sendWhatsappMessage(
      "Hi ReviNXT! I'd like to check if seats, scholarships, freelancing opportunities, and installment options are available!",
    );
  };

  if (!course) {
    return (
      <div className="course-detail-error">
        <h2>Course not found</h2>
        <button onClick={() => navigate("/")}>Return to Home</button>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="course-detail-hero">
        <div className="course-detail-hero-overlay"></div>
        <img
          src={course.image_url}
          alt={course.title}
          className="course-detail-hero-image"
        />
        <div className="course-detail-hero-content">
          <button className="back-button" onClick={() => navigate("/")}>
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

          {/* <section className="course-section">
            <h2 className="section-title">What You'll Learn</h2>
            <div className="topics-grid">
              {course.topics.map((topic, index) => (
                <div key={index} className="topic-card">
                  <CheckCircle className="topic-icon" size={24} />
                  <span className="topic-text">{topic}</span>
                </div>
              ))}
            </div>
          </section> */}

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
                <p className="detail-value">
                  {course.topics.length} Major Topics
                </p>
              </div>
              <div className="detail-item">
                <h3 className="detail-label">Certificate</h3>
                <p className="detail-value">Upon Completion</p>
              </div>
            </div>
          </section>

          {course.schedule && (
            <section>
              <>
                <h2 className="section-title">Course Schedule</h2>
                <CourseSchedule schedule={course.schedule} />
              </>
            </section>
          )}

          <section className="course-section">
            <h2 className="section-title">What Makes Us Different?</h2>
            <div className="what-makes-us-different-content">
              {whatMakesUsDifferentData.map((item, index) => (
                <div className="detail-item" key={index}>
                  <h3 className="detail-label what-makes-us-different-label">
                    <CheckCircle className="topic-icon" size={24} />{" "}
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="course-detail-sidebar">
          <div className="sidebar-card-container">
            <div className="sidebar-card">
              <div className="price-section">
                <span className="price-label">Course Price</span>
                <span className="price-value">₹{course.price}</span>
              </div>
              <button className="enroll-button-large">Enroll Now</button>
              <div className="features-list">
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>100% Live Sessions</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>Dedicated Doubt Support</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>Project-Based Learning</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>Certificate of Completion</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>Paid Freelancing & TA Roles</span>
                </div>
              </div>
            </div>
            <div className="sidebar-card">
              <div className="price-section">
                <span className="check-availability-label">
                  Check Scholarship Seat Availability
                </span>
              </div>
              <div className="features-list">
                <div className="feature-item">
                  <span className="unlock-now-label">Unlock:</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>Paid Freelancing Opportunity</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>Easy Installment Option</span>
                </div>
              </div>
              <button
                className="enroll-button-large check-availability-button"
                onClick={sendCheckAvailabilityWhatsappMessage}
              >
                → Check Now
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetail;

type CourseScheduleProps = {
  schedule: ScheduleDetail[];
};

const CourseSchedule = ({ schedule }: CourseScheduleProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="course-schedule-container">
      {schedule.map((week, index) => (
        <div key={index} className="course-schedule-week">
          <div
            className="course-schedule-week-header"
            onClick={() => toggleExpand(index)}
          >
            <span className="course-schedule-week-title">{week.title}</span>
            <span
              className={`course-schedule-toggle-icon ${
                expandedIndex === index ? "rotate-icon" : ""
              }`}
            >
              <img
                src={DownArrowIcon}
                alt="Down Arrow"
                width={25}
                height={25}
              />
            </span>
          </div>

          <ExpandableSection isExpanded={expandedIndex === index}>
            <div className="course-schedule-details">
              {week.details.map((detail, idx) => (
                <div key={idx} className="course-schedule-detail-item">
                  <CheckCircle className="topic-icon" size={24} />{" "}
                  <p className="course-schedule-what-learn">{detail}</p>
                </div>
              ))}
              <p className="course-schedule-outcome">{week.outcome}</p>
            </div>
          </ExpandableSection>
        </div>
      ))}
    </div>
  );
};

type ExpandableSectionProps = {
  isExpanded: boolean;
  children: React.ReactNode;
};

const ExpandableSection = ({
  isExpanded,
  children,
}: ExpandableSectionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useLayoutEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isExpanded]);

  return (
    <div
      ref={contentRef}
      className={`course-schedule-expandable ${
        isExpanded ? "expanded" : "collapsed"
      }`}
      style={{ maxHeight: height }}
    >
      <div className="course-schedule-expandable-inner">{children}</div>
    </div>
  );
};
