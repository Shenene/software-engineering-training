import { inspectionStages } from "../../data/inspectionData";
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
        {inspectionStages.map((stage) => (
          <li key={stage}>{stage}</li>
        ))}
      </ul>
    </article>
  );
}

// ---------------------------------- //

export default InspectionStagesCard;
