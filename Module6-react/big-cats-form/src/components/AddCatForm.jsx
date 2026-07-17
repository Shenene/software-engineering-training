import { useState } from "react";

// ------------------- //

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  // Button - Submit Function
  function handleSubmit(event) {
    event.preventDefault();

    //  If the field is empty after trimming, then do nothing further
    const trimmedName = name.trim();
    const trimmedLatinName = latinName.trim();
    const trimmedImage = image.trim();

    if (!trimmedName || !trimmedLatinName || !trimmedImage) {
      return;
    }

    // New cat object
    const newCat = {
      id: crypto.randomUUID(),
      name: trimmedName,
      latinName: trimmedLatinName,
      image: trimmedImage,
    };

    onAddCat(newCat);

    setName("");
    setLatinName("");
    setImage("");
  }

  // --------------------------------------------------------------------------------------------

  return (
    <form className="add-cat-form" onSubmit={handleSubmit}>
      <h2>Add a New Cat</h2>

      <label htmlFor="name">Cat name</label>
      <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />

      <label htmlFor="latinName">Latin name</label>
      <input id="latinName" type="text" value={latinName} onChange={(event) => setLatinName(event.target.value)} />

      <label htmlFor="image">Image path</label>
      <input id="image" type="text" value={image} onChange={(event) => setImage(event.target.value)} />

      <button className="btn-submit" type="submit">
        Add Cat
      </button>
    </form>
  );
}

// ------------------- //

export default AddCatForm;
