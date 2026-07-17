import SingleCat from "./SingleCat.jsx";
import AddCatForm from "./AddCatForm.jsx";
import { useState } from "react";

// ------------------- //

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "/images/cat-1.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image: "/images/cat-2.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "/images/cat-3.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "/images/cat-4.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image: "/images/cat-5.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "/images/cat-6.jpg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "/images/cat-7.jpg",
  },
];

// --------------------------------------------------------------------------------------------

// ⁡⁣⁢⁢F u n c t i o n s⁡

function BigCats() {
  const [currentCats, setCurrentCats] = useState(cats);

  // ------------------------------------

  // Add Cat
  function handleAddCat(newCat) {
    setCurrentCats([...currentCats, newCat]);
  }

  // ------------------------------------

  // Delete Cat
  function handleDeleteCat(id) {
    const remainingCats = currentCats.filter((cat) => cat.id !== id);
    setCurrentCats(remainingCats);
  }

  // ------------------------------------

  // Sort Cats
  function handleSortCats() {
    const sortedCats = [...currentCats].sort((catA, catB) => catA.name.localeCompare(catB.name));

    setCurrentCats(sortedCats);
  }

  // ------------------------------------

  // Reverse Cats List
  function handleReverseCats() {
    const reversedCats = [...currentCats].reverse();

    setCurrentCats(reversedCats);
  }

  // ------------------------------------

  // Filter Panthera Cats
  function handleFilterPanthera() {
    const pantheraCats = cats.filter((cat) => cat.latinName.startsWith("Panthera"));

    setCurrentCats(pantheraCats);
  }

  // ------------------------------------

  // Reset Cats List
  function handleResetCats() {
    setCurrentCats(cats);
  }

  // --------------------------------------------------------------------------------------------

  return (
    <section className="big-cats">
      <h1>Big Cats</h1>

      <div className="big-cats-layout">
        <AddCatForm onAddCat={handleAddCat} />

        <div className="big-cats-content">
          <div className="big-cats-controls">
            <button type="button" onClick={handleSortCats}>
              Sort Alphabetically
            </button>

            <button type="button" onClick={handleReverseCats}>
              Reverse List
            </button>

            <button type="button" onClick={handleFilterPanthera}>
              Show Panthera Cats
            </button>

            <button type="button" onClick={handleResetCats}>
              Reset List
            </button>
          </div>
          {/* Creating a single cat component */}
          <div className="cat-list">
            {currentCats.map((cat) => (
              <SingleCat key={cat.id} id={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image} onDeleteCat={handleDeleteCat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ------------------- //

export default BigCats;
