import type { Course } from "../types/course";
import ETBSCourse from "../assets/etbsCourseImage.jpg";
import AutoCadCourseImg from "../assets/autocadCourseImage.jpg";
import RevitCourseImage from "../assets/revitCourseImage.jpg";

export const courses: Course[] = [
  {
    id: "1",
    title: "Revit Structure — Professional Course for Civil Engineers",
    description:
      "Upskill, earn & save! Check availability & scholarships: 9027771731 📲.",
    full_description:
      "The Revit Structural Program by ReviNXT Academy is a 2+1 month live training designed for civil engineers to move beyond AutoCAD and master 3D structural modelling in Revit. Through real project-based learning, you'll model and detail complete structures — from a G+7 concrete building to a steel warehouse. Every session is practical, mentor-led, and focused on real construction workflows. By the end, you'll have a professional portfolio and the confidence to deliver structural projects with precision and speed.",
    image_url: RevitCourseImage,
    duration: "8+4 weeks",
    level: "Hands on", ///      Remove
    strikedPrice: 21000,
    price: 17999,
    topics: [
      "Revit Foundations",
      "Family Creation",
      "Structural Modeling",
      "Rebar Detailing",
      "Industry Workflows",
    ],
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "AutoCAD Professional Course for Civil Engineers",
    description:
      "Master 2D drafting and detailing skills essential for every civil engineer.",
    full_description:
      "Comprehensive training in highway engineering covering geometric design, pavement design, traffic engineering, and highway drainage. Learn about alignment design, sight distances, superelevation, intersection design, and modern highway planning techniques. Includes AutoCAD and design software tutorials.",
    image_url: AutoCadCourseImg,
    duration: "4+4 weeks",
    level: "Hands on",
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
    level: "Hands on",
    strikedPrice: 21000,
    price: 17999,
    topics: [
      "Material Properties",
      "Mix Design",
      "Quality Control",
      "Reinforcement Design",
      "Durability",
    ],
    created_at: new Date().toISOString(),
  },
  // {
  //   id: "4",
  //   title: "Foundation Engineering",
  //   description: "Expert guidance on soil mechanics and foundation design",
  //   full_description:
  //     "Master foundation engineering with detailed coverage of soil properties, site investigation, shallow and deep foundations, retaining structures, and soil improvement techniques. Learn to design safe and economical foundations for various soil conditions and structural requirements.",
  //   image_url:
  //     "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   duration: "10 weeks",
  //   level: "Advanced",
  //   strikedPrice: 500,
  //   price: 329.99,
  //   topics: [
  //     "Soil Mechanics",
  //     "Shallow Foundations",
  //     "Deep Foundations",
  //     "Retaining Walls",
  //     "Site Investigation",
  //   ],
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   id: "5",
  //   title: "Construction Project Management",
  //   description: "Lead construction projects from planning to completion",
  //   full_description:
  //     "Learn essential project management skills for construction, including planning, scheduling, cost estimation, resource management, and quality control. Master tools like MS Project, Primavera P6, and understand contract administration, safety management, and stakeholder communication.",
  //   image_url:
  //     "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   duration: "8 weeks",
  //   level: "Intermediate",
  //   strikedPrice: 500,
  //   price: 279.99,
  //   topics: [
  //     "Project Planning",
  //     "Cost Estimation",
  //     "Scheduling",
  //     "Risk Management",
  //     "Quality Control",
  //   ],
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   id: "6",
  //   title: "Water Resources Engineering",
  //   description: "Design sustainable water management systems",
  //   full_description:
  //     "Explore water resources engineering covering hydrology, hydraulics, water supply systems, drainage design, and flood management. Learn to design efficient water distribution networks, stormwater management systems, and understand environmental considerations in water projects.",
  //   image_url:
  //     "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   duration: "10 weeks",
  //   level: "Intermediate",
  //   strikedPrice: 500,
  //   price: 289.99,
  //   topics: [
  //     "Hydrology",
  //     "Hydraulics",
  //     "Water Supply",
  //     "Drainage Systems",
  //     "Flood Management",
  //   ],
  //   created_at: new Date().toISOString(),
  // },
];
