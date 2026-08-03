import { buildingComponents } from "../../data/inspectionData";
import "./FeaturedComponentsCard.css";

// ---------------------------------- //

function FeaturedComponentsCard() {
  const featuredComponents = buildingComponents.filter((component) => component.featured);

  return (
    <article className="dashboard-card featured-components-card">
      <h2 className="dashboard-card__heading">
        Featured Building Components
        <i className="bi bi-grid" aria-hidden="true"></i>
      </h2>

      <ul className="featured-components-card__list">
        {featuredComponents.map((component) => (
          <li key={component.id}>{component.name}</li>
        ))}
      </ul>
    </article>
  );
}

// ---------------------------------- //

export default FeaturedComponentsCard;
