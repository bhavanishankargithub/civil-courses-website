type ScheduleItem = {
  whatWillYouLearn: string;
  outCome: string;
};

type WeekSchedule = {
  title: string;
  details: ScheduleItem[];
};

export type ScheduleArrayType = WeekSchedule[];

export const scheduleForCourse1: ScheduleArrayType = [
  {
    title: "Week 1 - Revit Foundations",
    details: [
      {
        whatWillYouLearn:
          "✅ Day 1: Introduction to Revit and BIM fundamentals, UI navigation, and project initiation.",
        outCome:
          "🎯 Outcome: Confidently open Revit, explore the interface, and set up your first project.",
      },
      {
        whatWillYouLearn:
          "✅ Day 2: Live doubt-solving and feedback on Day 1's assignment.",
        outCome:
          "🎯 Outcome: Clear understanding and improved quality of your first assignment.",
      },
      {
        whatWillYouLearn:
          "✅ Day 3: Project setup - grids, levels, linking CAD plans, creating worksets.",
        outCome:
          "🎯 Outcome: Build organized project foundations and manage linked files effectively.",
      },
      {
        whatWillYouLearn:
          "✅ Day 4: Feedback and clarifications on project setup.",
        outCome:
          "🎯 Outcome: Master workset creation and coordination fundamentals.",
      },
      {
        whatWillYouLearn:
          "✅ Day 5: Placing columns, walls, beams, and floors; understanding types vs instances.",
        outCome:
          "🎯 Outcome: Accurately model structural elements within worksets.",
      },
    ],
  },
  {
    title: "Week 2 - Family Creation & Site Modeling",
    details: [
      {
        whatWillYouLearn:
          "✅ Day 6: Create parametric L-shaped column families with parameters.",
        outCome: "🎯 Outcome: Build reusable and flexible family components.",
      },
      {
        whatWillYouLearn: "✅ Day 7: Family modeling feedback session.",
        outCome:
          "🎯 Outcome: Refine skills and correct family structure errors.",
      },
      {
        whatWillYouLearn:
          "✅ Day 8: Model combined footings, base plates, and in-place beams.",
        outCome:
          "🎯 Outcome: Model accurate foundation and stair-support structures.",
      },
      {
        whatWillYouLearn: "✅ Day 9: Assignment review and doubt solving.",
        outCome: "🎯 Outcome: Strengthen foundation modeling skills.",
      },
      {
        whatWillYouLearn:
          "✅ Day 10: Create site toposurface, modify contours, and add building pads.",
        outCome:
          "🎯 Outcome: Develop realistic site terrain and grading plans.",
      },
    ],
  },
  {
    title: "Week 3 - Concrete & Steel Modeling",
    details: [
      {
        whatWillYouLearn:
          "✅ Day 11: Concrete modeling — columns, pedestals, slabs, and framing bays.",
        outCome: "🎯 Outcome: Build detailed concrete structural systems.",
      },
      {
        whatWillYouLearn: "✅ Day 12: Feedback on concrete modeling.",
        outCome: "🎯 Outcome: Improve model accuracy and completeness.",
      },
      {
        whatWillYouLearn:
          "✅ Day 13: Core walls, mat foundations, ramps, and stairs.",
        outCome: "🎯 Outcome: Model complex core structures with stability.",
      },
      {
        whatWillYouLearn: "✅ Day 14: Assignment review and feedback.",
        outCome:
          "🎯 Outcome: Strong grasp of core structural modeling techniques.",
      },
      {
        whatWillYouLearn:
          "✅ Day 15: Steel framing — beams, braces, joists, and trusses.",
        outCome: "🎯 Outcome: Master steel frame modeling and connectivity.",
      },
    ],
  },
  {
    title: "Week 4 - Steel Connections & Rebar Detailing",
    details: [
      {
        whatWillYouLearn:
          "✅ Day 16: Model bolted, welded, and seated steel connections.",
        outCome:
          "🎯 Outcome: Achieve industry-standard detailing for steel members.",
      },
      {
        whatWillYouLearn: "✅ Day 17: Feedback on connection modeling.",
        outCome: "🎯 Outcome: Enhance precision and consistency in detailing.",
      },
      {
        whatWillYouLearn:
          "✅ Day 18: Rebar modeling — beams, columns, and slabs.",
        outCome:
          "🎯 Outcome: Add reinforcement accurately to major structural components.",
      },
      {
        whatWillYouLearn: "✅ Day 19: Assignment feedback and clarification.",
        outCome: "🎯 Outcome: Refine rebar accuracy and coordination.",
      },
      {
        whatWillYouLearn:
          "✅ Day 20: Rebar for walls and openings, offsets, couplers, and scheduling.",
        outCome:
          "🎯 Outcome: Generate precise BOQ and reinforcement schedules.",
      },
    ],
  },
  {
    title: "Week 5 - Documentation, BOQs & Visualization",
    details: [
      {
        whatWillYouLearn:
          "✅ Day 21: Create material takeoffs, quantity schedules, and BOQs.",
        outCome: "🎯 Outcome: Generate professional construction quantities.",
      },
      {
        whatWillYouLearn: "✅ Day 22: Live doubts and feedback on scheduling.",
        outCome:
          "🎯 Outcome: Build confidence in data accuracy and presentation.",
      },
      {
        whatWillYouLearn:
          "✅ Day 23: Develop 3D views, cameras, and templates.",
        outCome:
          "🎯 Outcome: Present your project in photorealistic perspectives.",
      },
      {
        whatWillYouLearn: "✅ Day 24: Assignment review.",
        outCome: "🎯 Outcome: Deliver clear visual documentation.",
      },
      {
        whatWillYouLearn:
          "✅ Day 25: Apply filters, overrides, and view customizations.",
        outCome:
          "🎯 Outcome: Create professional and visually clean project visuals.",
      },
    ],
  },
  {
    title: "Week 6 - Drawing Production & Documentation",
    details: [
      {
        whatWillYouLearn:
          "✅ Day 26: Add annotations, legends, spot elevations, callouts.",
        outCome: "🎯 Outcome: Produce detailed project drawings.",
      },
      {
        whatWillYouLearn: "✅ Day 27: Feedback on detailing assignments.",
        outCome: "🎯 Outcome: Improve clarity and drawing standards.",
      },
      {
        whatWillYouLearn: "✅ Day 28: Sheet management and PDF exports.",
        outCome: "🎯 Outcome: Deliver organized and presentable drawing sets.",
      },
      {
        whatWillYouLearn: "✅ Day 29: Doubt-solving session.",
        outCome:
          "🎯 Outcome: Ensure end-to-end mastery of documentation workflows.",
      },
      {
        whatWillYouLearn: "✅ Day 30: Wrap-up and final review.",
        outCome: "🎯 Outcome: Submit a complete professional project set.",
      },
    ],
  },
  {
    title: "Weeks 7 & 8 - Collaboration, Automation & Career Prep",
    details: [
      {
        whatWillYouLearn:
          "✅ Day 31: BIM Execution Plans, LOD, worksharing, and case studies.",
        outCome:
          "🎯 Outcome: Understand collaboration workflows used by top firms.",
      },
      {
        whatWillYouLearn: "✅ Day 32: Doubt session on BIM workflows.",
        outCome:
          "🎯 Outcome: Strengthen teamwork and model-sharing confidence.",
      },
      {
        whatWillYouLearn:
          "✅ Day 33: Navisworks coordination, Dynamo intro, guest sessions.",
        outCome:
          "🎯 Outcome: Automate tasks and integrate models for coordination.",
      },
      {
        whatWillYouLearn: "✅ Day 34: Feedback and knowledge consolidation.",
        outCome: "🎯 Outcome: Full readiness for real-world projects.",
      },
      {
        whatWillYouLearn:
          "✅ Day 35: Capstone project, portfolio building, and presentation.",
        outCome:
          "🎯 Outcome: Showcase your skills through a complete project portfolio.",
      },
      {
        whatWillYouLearn: "✅ Day 36: Final feedback and career guidance.",
        outCome: "🎯 Outcome: Confidently step into the professional world.",
      },
    ],
  },
];
