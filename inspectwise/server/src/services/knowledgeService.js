import { supabase } from "./supabaseClient.js";

// ---------------------------------- //

export async function getInspectionKnowledge() {
  const { data, error } = await supabase.from("inspection_knowledge").select("id, created_at, topic, category, content, keywords");

  if (error) {
    throw error;
  }

  return data;
}

// ----------------------

export async function getRelevantKnowledge(questionEmbedding) {
  const { data, error } = await supabase.rpc("match_inspection_knowledge", {
    query_embedding: questionEmbedding,
    match_threshold: 0.5,
    match_count: 2,
  });

  if (error) {
    throw error;
  }

  return data;
}
