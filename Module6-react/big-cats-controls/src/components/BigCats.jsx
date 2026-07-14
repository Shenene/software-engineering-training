import SingleCat from "./SingleCat.jsx";

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

function BigCats() {
  return (
    <section className="big-cats">
      <h1>Big Cats</h1>

      {/* Creating a single cat component */}
      <div>
        {cats.map((cat) => (
          <SingleCat key={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image} />
        ))}
      </div>
    </section>
  );
}

// ------------------- //

export default BigCats;
