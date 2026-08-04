// Shared inspection data

export const buildingComponents = [
  {
    id: "bottom-plate",
    name: "Bottom Plate",
    stages: ["Framing"],
    summary: "Supports wall framing and transfers structural loads to the concrete foundation.",
    featured: true,
    completed: false,
  },
  {
    id: "wall-bracing",
    name: "Wall Bracing",
    stages: ["Framing", "Postline"],
    summary: "Provides resistance against horizontal wind and earthquake loads.",
    featured: true,
    completed: true,
  },
  {
    id: "window-flashing",
    name: "Window Flashing",
    stages: ["Pre-Cladding / Wrap", "Cladding"],
    summary: "Helps direct water away from window openings and prevent moisture entry.",
    featured: true,
    completed: false,
  },
  {
    id: "roof-cladding",
    name: "Roof Cladding",
    stages: ["Cladding"],
    summary: "Forms the external weatherproof covering of the roof.",
    featured: true,
    completed: false,
  },
];

export const inspectionStages = ["Underslab Plumbing", "Foundation / Block", "Slab", "Sub-floor", "Framing", "Pre-Cladding / Wrap", "Cladding", "Pre-line Plumbing", "Postline", "Waterproofing", "Drainage", "Final"];

export const learningProgress = {
  currentStage: "Framing",
  moduleTitle: "Framing Inspection",
  description: "Continue learning about wall framing, bracing and bottom-plate connections.",
  completedTopics: 3,
  totalTopics: 5,
  resumeComponentId: "bottom-plate",
};
