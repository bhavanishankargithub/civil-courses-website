import type { Course } from "../types/course";
import ETBSCourse from "../assets/etbsCourseImage.jpg";
import AutoCadCourseImg from "../assets/autocadCourseImage.jpg";
import RevitCourseImage from "../assets/revitCourseImage.jpg";
import { scheduleForCourse1 } from "./schedule";

export const courses: Course[] = [
  {
    id: "1",
    title: "Revit Structure — Professional Course for Civil Engineers",
    description:
      "🚀 Scholarship, Freelancing & Installment Options - Check Now!",
    full_description:
      "The Revit Structural Program by ReviNXT Academy is a 2+1 month live training designed for civil engineers to move beyond AutoCAD and master 3D structural modelling in Revit. Through real project-based learning, you'll model and detail complete structures — from a G+7 concrete building to a steel warehouse. Every session is practical, mentor-led, and focused on real construction workflows. By the end, you'll have a professional portfolio and the confidence to deliver structural projects with precision and speed.",
    image_url: RevitCourseImage,
    duration: "2+1 Months",
    level: "Limited Seats", ///      Remove
    strikedPrice: 21000,
    price: 19999,
    topics: [
      "Revit Foundations",
      "Family Creation",
      "Structural Modeling",
      "Rebar Detailing",
      "Industry Workflows",
    ],
    created_at: new Date().toISOString(),
    schedule: scheduleForCourse1,
  },
  {
    id: "3",
    title: "AutoCAD Professional Course for Civil Engineers",
    description:
      "🚀 Scholarship, Freelancing & Installment Options - Check Now!",
    full_description:
      "Comprehensive training in highway engineering covering geometric design, pavement design, traffic engineering, and highway drainage. Learn about alignment design, sight distances, superelevation, intersection design, and modern highway planning techniques. Includes AutoCAD and design software tutorials.",
    image_url: AutoCadCourseImg,
    duration: "1+1 Month",
    level: "Limited Seats",
    strikedPrice: 8000,
    price: 4999,
    topics: [
      "Geometric Design",
      "Pavement Design",
      "Traffic Engineering",
      "Highway Drainage",
      "CAD Software",
    ],
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "ETABS & STAAD Pro Professional Course",
    description: "Under Research and Development",
    full_description:
      "Dive deep into concrete technology, from material properties to mix design and quality control. This course covers concrete composition, workability, strength testing, admixtures, durability, and reinforced concrete design principles. Includes practical case studies and real-world applications in construction projects.",
    image_url: ETBSCourse,
    duration: "8 weeks",
    level: "Limited Seats",
    strikedPrice: 21000,
    price: 19999,
    topics: [
      "Material Properties",
      "Mix Design",
      "Quality Control",
      "Reinforcement Design",
      "Durability",
    ],
    created_at: new Date().toISOString(),
  },
];
