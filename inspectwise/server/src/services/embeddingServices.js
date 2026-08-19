import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

// ---------------------------------- //

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ---------------------------------- //

// Helper function
async function createEmbedding(text) {
  const response = await ai.models.embedContent({
    model: "gemini-embedding-2",
    contents: text,
    config: {
      outputDimensionality: 768,
    },
  });

  return response.embeddings[0].values;
}

// ---------------------------------- //

// Supabase knowledge
export async function createKnowledgeEmbedding(knowledgeItem) {
  const documentText = `
  title: ${knowledgeItem.topic} | text: Category: ${knowledgeItem.category}, ${knowledgeItem.content} Keywords: ${knowledgeItem.keywords} `;

  return createEmbedding(documentText);
}

// ---------------------------------- //

// User questions
export async function createQuestionEmbedding(question) {
  const queryText = `task: question answering | query: ${question}`;

  return createEmbedding(queryText);
}
