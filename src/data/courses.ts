import type { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: '1',
    title: 'Structural Analysis Fundamentals',
    description: 'Master the principles of structural analysis and design',
    full_description: 'This comprehensive course covers the fundamental principles of structural analysis, including force systems, equilibrium, trusses, frames, and influence lines. Learn to analyze various structural systems and understand load distribution, deflections, and stability. Perfect for aspiring civil engineers and professionals looking to strengthen their foundation.',
    image_url: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 weeks',
    level: 'Intermediate',
    price: 299.99,
    topics: ['Force Systems', 'Truss Analysis', 'Frame Analysis', 'Deflection Calculation', 'Influence Lines'],
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Concrete Technology & Design',
    description: 'Learn modern concrete design techniques and mix optimization',
    full_description: 'Dive deep into concrete technology, from material properties to mix design and quality control. This course covers concrete composition, workability, strength testing, admixtures, durability, and reinforced concrete design principles. Includes practical case studies and real-world applications in construction projects.',
    image_url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '8 weeks',
    level: 'Beginner',
    price: 249.99,
    topics: ['Material Properties', 'Mix Design', 'Quality Control', 'Reinforcement Design', 'Durability'],
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Highway Engineering & Design',
    description: 'Design safe and efficient highway systems',
    full_description: 'Comprehensive training in highway engineering covering geometric design, pavement design, traffic engineering, and highway drainage. Learn about alignment design, sight distances, superelevation, intersection design, and modern highway planning techniques. Includes AutoCAD and design software tutorials.',
    image_url: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12 weeks',
    level: 'Advanced',
    price: 349.99,
    topics: ['Geometric Design', 'Pavement Design', 'Traffic Engineering', 'Highway Drainage', 'CAD Software'],
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Foundation Engineering',
    description: 'Expert guidance on soil mechanics and foundation design',
    full_description: 'Master foundation engineering with detailed coverage of soil properties, site investigation, shallow and deep foundations, retaining structures, and soil improvement techniques. Learn to design safe and economical foundations for various soil conditions and structural requirements.',
    image_url: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 weeks',
    level: 'Advanced',
    price: 329.99,
    topics: ['Soil Mechanics', 'Shallow Foundations', 'Deep Foundations', 'Retaining Walls', 'Site Investigation'],
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Construction Project Management',
    description: 'Lead construction projects from planning to completion',
    full_description: 'Learn essential project management skills for construction, including planning, scheduling, cost estimation, resource management, and quality control. Master tools like MS Project, Primavera P6, and understand contract administration, safety management, and stakeholder communication.',
    image_url: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '8 weeks',
    level: 'Intermediate',
    price: 279.99,
    topics: ['Project Planning', 'Cost Estimation', 'Scheduling', 'Risk Management', 'Quality Control'],
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    title: 'Water Resources Engineering',
    description: 'Design sustainable water management systems',
    full_description: 'Explore water resources engineering covering hydrology, hydraulics, water supply systems, drainage design, and flood management. Learn to design efficient water distribution networks, stormwater management systems, and understand environmental considerations in water projects.',
    image_url: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 weeks',
    level: 'Intermediate',
    price: 289.99,
    topics: ['Hydrology', 'Hydraulics', 'Water Supply', 'Drainage Systems', 'Flood Management'],
    created_at: new Date().toISOString()
  }
];
