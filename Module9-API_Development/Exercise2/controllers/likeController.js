import Like from "../models/Like.js";

const createLike = async (req, res) => {
  try {
    const like = await Like.create(req.body);
    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createLike };
