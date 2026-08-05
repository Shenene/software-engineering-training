// ⁡⁣⁣⁢Shared inspection data⁡
export const buildingComponents = [
  {
    id: "bottom-plate",
    name: "Bottom Plate",
    stages: ["Framing"],
    summary: "Supports wall framing and transfers structural loads to the concrete foundation.",
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
