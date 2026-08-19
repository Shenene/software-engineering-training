import { getInspectionKnowledge } from "../services/knowledgeService.js";

// ---------------------------------- //

export async function getKnowledge(req, res) {
  try {
    const knowledge = await getInspectionKnowledge();

    res.status(200).json({
      knowledge: knowledge,
    });
  } catch (error) {
    console.error("Supabase error:", error);

    res.status(500).json({
      error: "Could not retrieve inspection knowledge.",
    });
  }
}
