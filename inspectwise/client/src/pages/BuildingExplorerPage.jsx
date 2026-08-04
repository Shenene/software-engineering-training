import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import PageHeader from "../components/common/PageHeader";
import { buildingComponents, inspectionStages } from "../data/inspectionData";

// -------------------------------------------------------------------------- //

function BuildingExplorerPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedComponentId, setSelectedComponentId] = useState("bottom-plate");

  const navigate = useNavigate();

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
        <div className="component-search-field">
          <label htmlFor="componentSearch">Search building components</label>

          <div className="component-search-field__input-wrapper">
            <i className="bi bi-search" aria-hidden="true"></i>

            <input id="componentSearch" name="componentSearch" type="search" placeholder="Search by component name" value={searchTerm} onChange={handleSearchChange} />
          </div>
        </div>

        <div className="inspection-stage-field">
          <label htmlFor="inspectionStage">Inspection Stage</label>

          <select id="inspectionStage" name="inspectionStage" value={selectedStage} onChange={handleStageChange}>
            <option value="">All inspection stages</option>

            {inspectionStages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </div>

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

                      {component.completed && <i className="bi bi-check" aria-label="Completed"></i>}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No components match the selected stage and search.</p>
          )}
        </section>

        <section className="selected-component">
          <h2>Selected Component</h2>

          {selectedComponent ? (
            <>
              <h3>{selectedComponent.name}</h3>

              <p>{selectedComponent.summary}</p>

              <p>
                <strong>Inspection stages:</strong> {selectedComponent.stages.join(", ")}
              </p>

              <button className="button button--primary button--medium" type="button" onClick={handleViewComponentDetails}>
                View Component Details
              </button>
            </>
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
