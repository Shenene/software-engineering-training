import { learningProgress } from "../../data/inspectionData";
import "./ContinueLearningCard.css";

// ---------------------------------- //

function ContinueLearningCard() {
  const progressPercentage = (learningProgress.completedTopics / learningProgress.totalTopics) * 100;

  return (
    <article className="dashboard-card continue-learning-card">
      <h2 className="dashboard-card__heading">
        Continue Learning
        <i className="bi bi-book" aria-hidden="true"></i>
      </h2>

      <h3>Current Module: {learningProgress.moduleTitle}</h3>

      <p>{learningProgress.description}</p>

      <p>
        {learningProgress.completedTopics} of {learningProgress.totalTopics} topics completed
      </p>

      <div className="learning-progress" role="progressbar" aria-label={`${learningProgress.moduleTitle} progress`} aria-valuemin="0" aria-valuemax={learningProgress.totalTopics} aria-valuenow={learningProgress.completedTopics}>
        <div className="learning-progress__value" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <button className="button button--secondary button--medium" type="button">
        Continue {learningProgress.currentStage}
      </button>
    </article>
  );
}

// ---------------------------------- //

export default ContinueLearningCard;
