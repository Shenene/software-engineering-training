import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import PageHeader from "../components/common/PageHeader";
import { buildingComponents, inspectionStages } from "../data/inspectionData";

import buildingCutaway from "../images/building-cutaway.svg";

import "./BuildingExplorerPage.css";

// -------------------------------------------------------------------------- //

function BuildingExplorerPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const [selectedComponentId, setSelectedComponentId] = useState(() => {
    const componentFromUrl = searchParams.get("component");

    const componentExists = buildingComponents.some((component) => component.id === componentFromUrl);
    return componentExists ? componentFromUrl : "bottom-plate";
  });

  const [completedComponentIds, setCompletedComponentIds] = useState([]);

  const stageFromUrl = searchParams.get("stage");

  const selectedStage = inspectionStages.includes(stageFromUrl) ? stageFromUrl : "";

  const filteredComponents = buildingComponents.filter((component) => {
    const matchesStage = selectedStage === "" || component.stages.includes(selectedStage);

    const matchesSearch = component.name.toLowerCase().includes(searchTerm.trim().toLowerCase());

    return matchesStage && matchesSearch;
  });

  const selectedComponent = buildingComponents.find((component) => component.id === selectedComponentId);

  useEffect(() => {
    const selectedComponentIsVisible = filteredComponents.some((component) => component.id === selectedComponentId);

    if (!selectedComponentIsVisible) {
      setSelectedComponentId(filteredComponents[0]?.id ?? "");
    }
  }, [filteredComponents, selectedComponentId]);

  useEffect(() => {
    const completedIds = buildingComponents
      .filter((component) => {
        const savedInspection = localStorage.getItem(`inspection-${component.id}`);

        if (!savedInspection) {
          return false;
        }

        const inspectionData = JSON.parse(savedInspection);

        return inspectionData.status === "Completed";
      })
      .map((component) => component.id);

    setCompletedComponentIds(completedIds);
  }, []);

  // -------------------------------------------

  function handleStageChange(event) {
    const newStage = event.target.value;

    if (newStage === "") {
      setSearchParams({});
    } else {
      setSearchParams({
        stage: newStage,
      });
    }
  }

  // -------------------------------------------

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // -------------------------------------------

  function handleComponentSelect(componentId) {
    setSelectedComponentId(componentId);
  }

  // -------------------------------------------

  function handleViewComponentDetails() {
    if (!selectedComponent) {
      return;
    }

    // -------------------------------------------

    navigate(`/explorer/${selectedComponent.id}`);
  }

  // -------------------------------------------------------------------------- //

  return (
    <section className="building-explorer-page">
      <PageHeader
        title="Building Explorer"
        breadcrumbs={[
          {
            label: "Building Explorer",
          },
        ]}
      />

      <div className="building-explorer-content">
        <div className="building-explorer-toolbar">
          <div className="component-search-field">
            <label htmlFor="componentSearch">Search building components</label>

            <div className="component-search-field__input-wrapper">
              <i className="bi bi-search" aria-hidden="true"></i>

              <input id="componentSearch" name="componentSearch" type="search" placeholder="Search by component name" value={searchTerm} onChange={handleSearchChange} />
            </div>
          </div>

          <div className="inspection-stage-field">
            <label htmlFor="inspectionStage">Inspection Stage</label>

            <div className="inspection-stage-field__select-wrapper">
              <select id="inspectionStage" name="inspectionStage" value={selectedStage} onChange={handleStageChange}>
                <option value="">All inspection stages</option>

                {inspectionStages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>

              <i className="inspection-stage-field__chevron bi bi-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="building-explorer-main-grid">
          <section className="building-illustration-card" aria-label="Interactive building illustration">
            <div className="building-illustration-card__image-wrapper">
              <img className="building-illustration-card__image" src={buildingCutaway} alt="Cutaway illustration of a residential building" />

              {buildingComponents
                .filter((component) => component.hotspot)
                .map((component) => {
                  const isSelected = component.id === selectedComponentId;

                  const isAvailable = filteredComponents.some((filteredComponent) => filteredComponent.id === component.id);

                  return (
                    <button
                      key={component.id}
                      className={`building-hotspot ${isSelected ? "building-hotspot--selected" : ""}
                        ${!isAvailable ? "building-hotspot--disabled" : ""}
                      `}
                      type="button"
                      style={{
                        top: component.hotspot.top,
                        left: component.hotspot.left,
                      }}
                      onClick={() => handleComponentSelect(component.id)}
                      aria-label={`Select ${component.name}`}
                      aria-pressed={isSelected}
                      disabled={!isAvailable}
                    >
                      <span className="building-hotspot__label">{component.name}</span>
                    </button>
                  );
                })}
            </div>
          </section>

          <section className="explorer-component-list">
            <h2>Component List</h2>

            {filteredComponents.length > 0 ? (
              <ul className="explorer-component-list__items">
                {filteredComponents.map((component) => {
                  const isSelected = component.id === selectedComponentId;

                  return (
                    <li key={component.id}>
                      <button className={`explorer-component-list__button ${isSelected ? "selected" : ""}`} type="button" onClick={() => handleComponentSelect(component.id)} aria-pressed={isSelected}>
                        <span>{component.name}</span>

                        {completedComponentIds.includes(component.id) && <i className="bi bi-check-circle-fill" aria-label="Completed"></i>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No components match the selected stage and search.</p>
            )}
          </section>
        </div>

        <section className="selected-component">
          <h2>Selected Component</h2>

          {selectedComponent ? (
            <div className="selected-component__content">
              <div className="selected-component__details">
                <h3>{selectedComponent.name}</h3>

                <p>{selectedComponent.summary}</p>

                <button className="button button--primary button--medium" type="button" onClick={handleViewComponentDetails}>
                  View Component Details
                </button>
              </div>

              <div className="selected-component__stage">
                <h3>Inspection Stages</h3>

                <p>{selectedComponent.stages.join(", ")}</p>
              </div>
            </div>
          ) : (
            <p>Select a component to view its information.</p>
          )}
        </section>
      </div>
    </section>
  );
}

// -------------------------------------------------------------------------- //

export default BuildingExplorerPage;
