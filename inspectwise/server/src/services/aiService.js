import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

// ---------------------------------- //

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ---------------------------------- //

export async function getAiResponse(question, knowledge) {
  const knowledgeContext = knowledge
    .map(
      (item) => `
  Topic: ${item.topic}
  Category: ${item.category}
  Content: ${item.content}
  Keywords: ${item.keywords}`,
    )
    .join("\n");

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",

    contents: `InspectWise training knowledge:

    ${knowledgeContext}

    User question: ${question}
   `,

    config: {
      systemInstruction: `
      You are InspectWise AI, an educational assistant for trainee building inspectors in New Zealand.
      
      Answer questions only in context of residential building inspections, construction components, inspection stages, and relevant New Zealand building practices.
      
      Keep answers concise and beginner-friendly.

      Prefer approximately 2 to 4 short paragraphs.

      Do not use Markdown formatting.
      Do not use headings with # symbols.
      Do not use ** bold markers.
      Do not use bullet-point Markdown unless really necessary.

      Use plain text that can be displayed directly inside a web application.

      If a question is unrelated to building inspection or construction training, politely explain that InspectWise AI is focused on building inspection training.
      
      Do not present your response as a substitue for the current New Zealand Building Code, standards, manufacturers specifications, or professional advice.
      
      Where appropriate, remind the learner to verify requirements against current New Zealand regulations and standards. 
         `,
    },
  });

  return response.text;
}
