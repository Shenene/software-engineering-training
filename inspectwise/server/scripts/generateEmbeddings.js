import { supabaseAdmin } from "../src/services/supabaseAdminClient.js";
import { createKnowledgeEmbedding } from "../src/services/embeddingServices.js";

// ---------------------------------- //

async function generateEmbeddings() {
  console.log("Starting InspectWise embedding generation...");

  const { data: knowledgeItems, error } = await supabaseAdmin.from("inspection_knowledge").select("*");

  if (error) {
    throw error;
  }

  for (const knowledgeItem of knowledgeItems) {
    console.log(`Creating embedding for: ${knowledgeItem.topic}`);

    const embedding = await createKnowledgeEmbedding(knowledgeItem);

    const { error: updateError } = await supabaseAdmin
      .from("inspection_knowledge")
      .update({
        embedding: embedding,
      })
      .eq("id", knowledgeItem.id);

    if (updateError) {
      throw updateError;
    }

    console.log(`Saved embedding for: ${knowledgeItem.topic}`);
  }

  console.log("All InspectWise embeddings have been generated.");
}

// ---------------------------------- //

generateEmbeddings().catch((error) => {
  console.error("Embedding generation failed:", error);
});
