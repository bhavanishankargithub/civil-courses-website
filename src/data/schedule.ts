export type ScheduleDetail = {
  title: string;
  details: string[];
  outcome: string;
};

export const scheduleArrRevitCourse: ScheduleDetail[] = [
  {
    title: 'Week 1 - Revit Foundations',
    details: [
      'Introduction to Revit and BIM fundamentals, UI navigation, and project initiation.',
      'Project setup — grids, levels, linking CAD plans, creating worksets.',
      'Placing columns, walls, beams, and floors; understanding types vs instances.'
    ],
    outcome:
      '🎯 Outcome: Gain complete confidence in starting projects, managing worksets, and modeling essential structural elements in Revit.'
  },
  {
    title: 'Week 2 - Family Creation & Site Modeling',
    details: [
      'Create parametric L-shaped column families with parameters.',
      'Model combined footings, base plates, and in-place beams.',
      'Create site toposurface, modify contours, and add building pads.'
    ],
    outcome:
      '🎯 Outcome: Develop the ability to build flexible parametric families and create realistic site models with accurate grading.'
  },
  {
    title: 'Week 3 - Concrete & Steel Modeling',
    details: [
      'Concrete modeling — columns, pedestals, slabs, and framing bays.',
      'Core walls, mat foundations, ramps, and stairs.',
      'Steel framing — beams, braces, joists, and trusses.'
    ],
    outcome:
      '🎯 Outcome: Master both concrete and steel structure modeling for real-world building frameworks.'
  },
  {
    title: 'Week 4 - Steel Connections & Rebar Detailing',
    details: [
      'Model bolted, welded, and seated steel connections.',
      'Rebar modeling — beams, columns, and slabs.',
      'Rebar for walls and openings, offsets, couplers, and scheduling.'
    ],
    outcome:
      '🎯 Outcome: Achieve industry-level expertise in steel connection detailing and reinforcement scheduling.'
  },
  {
    title: 'Week 5 - Documentation, BOQs & Visualization',
    details: [
      'Create material takeoffs, quantity schedules, and BOQs.',
      'Develop 3D views, cameras, and templates.',
      'Apply filters, overrides, and view customizations.'
    ],
    outcome:
      '🎯 Outcome: Learn to generate precise BOQs and present photorealistic, professional project visuals.'
  },
  {
    title: 'Week 6 - Drawing Production & Documentation',
    details: [
      'Add annotations, legends, spot elevations, and callouts.',
      'Sheet management and PDF exports.',
      'Wrap-up and final review.'
    ],
    outcome:
      '🎯 Outcome: Produce well-documented, organized, and presentation-ready drawing sets aligned with professional standards.'
  },
  {
    title: 'Weeks 7 & 8 - Collaboration, Automation & Career Prep',
    details: [
      'BIM Execution Plans, LOD, worksharing, and case studies.',
      'Navisworks coordination, Dynamo intro, and guest sessions.',
      'Capstone project, portfolio building, and presentation.'
    ],
    outcome:
      '🎯 Outcome: Collaborate effectively, automate tasks, and build a standout portfolio ready for the professional world.'
  },
  {
    title: '🎓 Bonus Month - Part-Time Freelancing Opportunity',
    details: [
      'Work on a real client project under mentorship — independently develop a complete Revit Structural model.'
    ],
    outcome:
      '🎯 Outcome: Apply your skills on live projects, meet deadlines, and gain freelancing experience before stepping into your career.'
  }
];



export const autoCadScheduleArr: ScheduleDetail[] = [
  {
    title: 'Week 1 - AutoCAD Fundamentals & Drawing Tools',
    details: [
      'Interface, Workspaces & Coordinate Systems',
      'Basic Drawing Tools - Line, Circle, Polygon, Ellipse, Polyline',
      'Modify Tools (Part 1) - Move, Copy, Rotate, Trim, Offset, Fillet, Chamfer'
    ],
    outcome:
      '🎯 Outcome: Build complete geometric drawings with precision using Draw & Modify commands.'
  },
  {
    title: 'Week 2 - Accuracy, Layers & Object Properties',
    details: [
      'Advanced Modify Tools - Stretch, Scale, Array, Break, Join, Lengthen',
      'Layer Creation & Management - Color, Linetype, Lineweight, Freeze, Lock',
      'Selection & Property Tools - Quick Select, Match Properties, Select Similar'
    ],
    outcome:
      '🎯 Outcome: Organize complex drawings using proper layer systems and maintain clean, professional CAD standards.'
  },
  {
    title: 'Week 3 - Annotation, Blocks & Hatching',
    details: [
      'Text & Dimensions - Styles, DIMSCALE, DIMSTYLE',
      'Blocks & Attributes - Create, Edit, Insert, and Add Dynamic Attributes',
      'Hatch & Gradient Tools - Represent materials, patterns, and fills'
    ],
    outcome:
      '🎯 Outcome: Produce fully annotated, block-based drawings ready for presentation and sheet setup.'
  },
  {
    title: 'Week 4 - Layouts, Plotting & Final Project',
    details: [
      'Model vs Paper Space',
      'Creating Layouts & Viewports with Scales',
      'Plotting Setup - CTB/STB, Title Blocks, PDF Exports',
      'Final 2D Project Submission'
    ],
    outcome:
      '🎯 Outcome: Generate professionally plotted CAD sheets with layouts, title blocks, and precise scaling.'
  },
  {
    title: '🎓 Bonus Month - Part-Time Freelancing Opportunity',
    details: [
      'Work on a real client project under expert mentorship',
      'Independently develop a complete AutoCAD project model/drawing',
      'Learn client communication, deadlines & professional workflow'
    ],
    outcome:
      '🎯 Outcome: Apply your AutoCAD skills on live client projects, gain real freelancing experience, and build your portfolio before entering the industry.'
  }
];
