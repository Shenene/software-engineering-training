import { getAiResponse } from "../services/aiService.js";
import { getRelevantKnowledge } from "../services/knowledgeService.js";
import { createQuestionEmbedding } from "../services/embeddingServices.js";

// ---------------------------------- //

export async function askAi(req, res) {
  const { question } = req.body ?? {};

  if (!question) {
    return res.status(400).json({
      error: "A question is required",
    });
  }

  try {
    const questionEmbedding = await createQuestionEmbedding(question);

    const knowledge = await getRelevantKnowledge(questionEmbedding);

    // console.log("Retrieved knowledge:", knowledge);

    const answer = await getAiResponse(question, knowledge);

    res.status(200).json({
      answer: answer,
    });
  } catch (error) {
    console.error("AI Assistant error:", error);

    res.status(500).json({
      error: "The AI Assistant could not generate a response.",
    });
  }
}
