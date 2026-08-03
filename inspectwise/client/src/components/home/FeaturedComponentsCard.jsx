import "./FeaturedComponentsCard.css";

function FeaturedComponentsCard() {
  return (
    <article className="dashboard-card featured-components-card">
      <h2 className="dashboard-card__heading">
        Featured Building Components
        <i className="bi bi-grid" aria-hidden="true"></i>
      </h2>

      <ul className="featured-components-card__list">
        <li>Bottom Plate</li>
        <li>Wall Bracing</li>
        <li>Window Flashing</li>
        <li>Roof Cladding</li>
      </ul>
    </article>
  );
}

// ---------------------------------- //

export default FeaturedComponentsCard;
