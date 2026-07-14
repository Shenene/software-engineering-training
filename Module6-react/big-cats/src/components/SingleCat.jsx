function SingleCat({ name, latinName, image }) {
  return (
    <article className="cat-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>{latinName}</p>
    </article>
  );
}

// ------------------- //

export default SingleCat;
