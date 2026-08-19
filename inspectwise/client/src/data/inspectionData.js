// ⁡⁣⁣⁢Shared inspection data⁡
export const buildingComponents = [
  {
    id: "bottom-plate",
    name: "Bottom Plate",
    stages: ["Framing"],
    summary: "Supports wall framing and transfers structural loads to the concrete foundation.",

    overview: "Bottom plate proprietary post-fixed anchors to be installed within 150mm of each end of the bottom plate and to be spaced at a maximum of 900mm centres, or 600mm centres when external walls are on concrete slab edges formed with masonry header blocks.",

    treatment: "SG8 and H1.2 treated timber",

    commonIssues: ["Inadequate moisture barriers and protection", "Incorrect structural fixings or anchors", "End-of-plate fixings positioned too far away", "Unsupported slab overhangs"],

    references: {
      standard: "NZS 3604:2011 Timber-framed buildings",
      clauses: ["B1 Structure", "B2 Durability", "E2 External Moisture", "E3 Internal Moisture", "F2 Hazardous Building Materials"],
    },

    checklistItems: [
      {
        id: "dpc-installed",
        title: "DPC Installed",
        description: "Check that an appropriate damp-proof course or approved bottom plate protection system is installed. Synthetic Plastic DPC (Damp proof Course) OR Bitumen DPC OR a Hiandri Bottom Plate Packer System.",
      },
      {
        id: "timber-treatment",
        title: "Timber Treatment",
        description: "Confirm the bottom plate has the correct timber treatment for its location and exposure conditions.",
      },
      {
        id: "anchor-bolts",
        title: "M12 Anchor Bolts",
        description: "Check that the required anchor bolts or approved proprietary fixings are installed correctly.",
      },
      {
        id: "bolt-spacing",
        title: "Bolt Spacing",
        description: "Confirm anchor bolts or proprietary fixings are positioned and spaced in accordance with the requirements.",
      },
      {
        id: "washer-fitted",
        title: "Washer Fitted",
        description: "Check that suitable washers are fitted where required and that fixings are properly secured.",
      },
    ],

    featured: true,
    completed: false,
    hotspot: { top: "84%", left: "51%" },
  },
  {
    id: "top-plate",
    name: "Top Plate",
    stages: ["Framing"],
    summary: "Connects the tops of wall studs, distributes loads and provides support for ceiling joists, rafters or roof trusses.",
    featured: false,
    completed: false,
    hotspot: { top: "26%", left: "36%" },
  },
  {
    id: "lintels",
    name: "Lintels",
    stages: ["Framing"],
    summary: "Horizontal structural members installed above openings such as doors and windows to transfer loads to the supporting framing.",
    featured: false,
    completed: true,
    hotspot: { top: "57%", left: "46%" },
  },
  {
    id: "window-flashing",
    name: "Window Flashing",
    stages: ["Pre-Cladding / Wrap", "Cladding", "Final"],
    summary: "Directs water away from window openings and helps prevent moisture from entering the building.",
    featured: true,
    completed: false,
    hotspot: { top: "35%", left: "29%" },
  },
  {
    id: "wall-bracing",
    name: "Wall Bracing",
    stages: ["Framing", "Postline"],
    summary: "Provides resistance against horizontal wind and earthquake loads.",
    featured: true,
    completed: true,
    hotspot: { top: "52%", left: "25%" },
  },
  {
    id: "roof-trusses",
    name: "Roof Trusses",
    stages: ["Framing"],
    summary: "Support the roof structure and transfer roof loads to the building's load-bearing walls.",
    featured: false,
    completed: true,
    hotspot: { top: "15%", left: "57%" },
  },
  {
    id: "roof-cladding",
    name: "Roof Cladding",
    stages: ["Cladding", "Final"],
    summary: "Forms the external weather-resistant covering of the roof.",
    featured: true,
    completed: false,
    hotspot: { top: "18%", left: "68%" },
  },
];

// --------------------------------------------------------------------

// ⁡⁣⁣⁢Inspection stages⁡
export const inspectionStages = ["Underslab Plumbing", "Foundation / Block", "Slab", "Sub-floor", "Framing", "Pre-Cladding / Wrap", "Cladding", "Pre-line Plumbing", "Postline", "Waterproofing", "Drainage", "Final"];

// --------------------------------------------------------------------

// ⁡⁣⁣⁢Continue Learning progress⁡
export const learningProgress = {
  currentStage: "Framing",
  moduleTitle: "Framing Inspection",
  description: "Continue learning about wall framing, bracing and bottom-plate connections.",
  completedTopics: 3,
  totalTopics: 5,
  resumeComponentId: "bottom-plate",
};
