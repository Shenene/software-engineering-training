import "./InspectionStagesCard.css";

// ---------------------------------- //

function InspectionStagesCard() {
  return (
    <article className="dashboard-card inspection-stages-card">
      <h2 className="dashboard-card__heading">
        Inspection Stages
        <i className="bi bi-boxes" aria-hidden="true"></i>
      </h2>

      <ul className="inspection-stages-card__list">
        <li>Underslab Plumbing</li>
        <li>Foundation / Block</li>
        <li>Slab</li>
        <li>Sub-floor</li>
        <li>Framing</li>
        <li>Pre-Cladding / Wrap</li>
        <li>Cladding</li>
        <li>Pre-line Plumbing</li>
        <li>Postline</li>
        <li>Waterproofing</li>
        <li>Drainage</li>
        <li>Final</li>
      </ul>
    </article>
  );
}

// ---------------------------------- //

export default InspectionStagesCard;
