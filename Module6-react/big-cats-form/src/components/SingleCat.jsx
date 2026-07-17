function SingleCat({ id, name, latinName, image, onDeleteCat }) {
  return (
    <article className="cat-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>{latinName}</p>

      <button className="delete-cat-btn" type="button" onClick={() => onDeleteCat(id)}>
        Delete
      </button>
    </article>
  );
}

// ------------------- //

export default SingleCat;
