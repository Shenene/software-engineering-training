import "./ContinueLearningCard.css";

// ---------------------------------- //

function ContinueLearningCard() {
  return (
    <article className="dashboard-card continue-learning-card">
      <h2 className="dashboard-card__heading">
        Continue Learning
        <i className="bi bi-book" aria-hidden="true"></i>
      </h2>

      <h3>Current Module: Framing Inspection</h3>
      <p>Continue learning about wall framing, bracing and bottom-late connections.</p>

      <p>3 of 5 topics completed</p>

      <div className="learning-progress" role="progressbar" aria-label="Framing inspection progress" aria-valuemin="0" aria-valuemax="5" aria-valuenow="3">
        <div className="learning-progress-value"></div>
      </div>

      <button className="button button--secondary button--medium" type="button">
        Continue Framing
      </button>
    </article>
  );
}

// ---------------------------------- //

export default ContinueLearningCard;
