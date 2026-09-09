const getExternalPost = async (req, res) => {
  try {
    const id = req.params.id;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getExternalPost };
