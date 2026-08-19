import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { buildingComponents, learningProgress } from "../../data/inspectionData";

import "./ContinueLearningCard.css";

// ---------------------------------- //

function ContinueLearningCard() {
  const navigate = useNavigate();

  const [completedTopics, setCompletedTopics] = useState(0);

  const [resumeComponentId, setResumeComponentId] = useState(learningProgress.resumeComponentId);

  // ----------------------------------

  useEffect(() => {
    const stageComponents = buildingComponents.filter((component) => component.stages.includes(learningProgress.currentStage));

    const savedInspections = stageComponents
      .map((component) => {
        const savedInspection = localStorage.getItem(`inspection-${component.id}`);

        if (!savedInspection) {
          return null;
        }

        return JSON.parse(savedInspection);
      })
      .filter(Boolean);

    const completedInspections = savedInspections.filter((inspection) => inspection.status === "Completed");

    setCompletedTopics(completedInspections.length);

    const inProgressInspections = savedInspections.filter((inspection) => inspection.status === "In Progress");

    inProgressInspections.sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));

    if (inProgressInspections.length > 0) {
      setResumeComponentId(inProgressInspections[0].componentId);
      return;
    }

    const firstIncompleteComponent = stageComponents.find((component) => !completedInspections.some((inspection) => inspection.componentId === component.id));

    if (firstIncompleteComponent) {
      setResumeComponentId(firstIncompleteComponent.id);
    }
  }, []);

  // ----------------------------------

  const totalTopics = buildingComponents.filter((component) => component.stages.includes(learningProgress.currentStage)).length;

  const progressPercentage = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;

  const resumeComponent = buildingComponents.find((component) => component.id === resumeComponentId);

  // ----------------------------------

  function handleContinueLearning() {
    navigate(`/explorer?stage=${learningProgress.currentStage}&component=${resumeComponentId}`);
  }

  // ---------------------------------- //

  return (
    <article className="dashboard-card continue-learning-card">
      <h2 className="dashboard-card__heading">
        Continue Learning
        <i className="bi bi-book" aria-hidden="true"></i>
      </h2>

      <h3>Current Module: {learningProgress.moduleTitle}</h3>

      <p>{resumeComponent ? `Continue learning about ${resumeComponent.name}.` : learningProgress.description}</p>

      <p>
        {completedTopics} of {totalTopics} topics completed
      </p>

      <div className="learning-progress" role="progressbar" aria-label={`${learningProgress.moduleTitle} progress`} aria-valuemin="0" aria-valuemax={totalTopics} aria-valuenow={completedTopics}>
        <div
          className="learning-progress__value"
          style={{
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>

      <button className="button button--secondary button--medium" type="button" onClick={handleContinueLearning}>
        Continue {learningProgress.currentStage}
      </button>
    </article>
  );
}

// ---------------------------------- //

export default ContinueLearningCard;
