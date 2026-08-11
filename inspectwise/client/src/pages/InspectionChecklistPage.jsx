import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import PageHeader from "../components/common/PageHeader";
import { buildingComponents } from "../data/inspectionData";
import AppModal from "../components/common/AppModal";

import "./InspectionChecklistPage.css";

// ---------------------------------- //

function InspectionChecklistPage() {
  // ⁡⁣⁢⁢--- useParams ---⁡
  const { componentId } = useParams();
  // console.log("componentId:", componentId);

  const navigate = useNavigate();

  // ⁡⁣⁢⁢--- Find component ---⁡
  const component = buildingComponents.find((buildingComponent) => buildingComponent.id === componentId);
  // console.log("component", component);

  // ⁡⁣⁢⁢--- State ---⁡
  const [openItemId, setOpenItemId] = useState(component?.checklistItems?.[0]?.id ?? "");

  const [inspectionResults, setInspectionResults] = useState({});

  const [itemNotes, setItemNotes] = useState({});

  const [inspectionNotes, setInspectionNotes] = useState("");

  const [isSaved, setIsSaved] = useState(false);

  const [modalType, setModalType] = useState("");

  // -------------------------------------------

  // --- ⁡⁣⁢⁢Load saved inspection⁡ ---

  useEffect(() => {
    if (!component) {
      return;
    }

    const savedInspection = localStorage.getItem(`inspection-${component.id}`);

    if (!savedInspection) {
      return;
    }

    const inspectionData = JSON.parse(savedInspection);

    setInspectionResults(inspectionData.results ?? {});
    setItemNotes(inspectionData.itemNotes ?? {});
    setInspectionNotes(inspectionData.inspectionNotes ?? "");

    setIsSaved(true);
  }, [component?.id]);

  // -------------------------------------------

  // ⁡⁣⁢⁢--- Not found ---⁡
  if (!component) {
    return (
      <section className="inspection-checklist-page">
        <PageHeader
          title="Checklist Not Found"
          breadcrumbs={[
            {
              label: "Building Explorer",
              path: "/explorer",
            },
            {
              label: "Checklist Not Found",
            },
          ]}
        />

        <div className="inspection-checklist-content">
          <p>The requested inspection checklist could not be found.</p>

          <Link className="button button--secondary button--medium" to="/explorer">
            Back to Building Explorer
          </Link>
        </div>
      </section>
    );
  }

  // -------------------------------------------

  // ⁡⁣⁢⁢--- Functions ---⁡
  // Accordion
  function handleAccordionToggle(itemId) {
    setOpenItemId((currentOpenItemId) => (currentOpenItemId === itemId ? "" : itemId));
  }

  // Results
  function handleResultChange(itemId, result) {
    setInspectionResults((currentResults) => ({
      ...currentResults,
      [itemId]: result,
    }));

    setIsSaved(false);
  }

  // Item Notes
  function handleItemNotesChange(itemId, notes) {
    setItemNotes((currentItemNotes) => ({ ...currentItemNotes, [itemId]: notes }));

    setIsSaved(false);
  }

  // Overall inspection notes
  function handleInspectionNotesChange(event) {
    setInspectionNotes(event.target.value);

    setIsSaved(false);
  }

  // Clear Selection
  function handleClearResult(itemId) {
    setInspectionResults((currentResults) => {
      const updatedResults = { ...currentResults };

      delete updatedResults[itemId];

      return updatedResults;
    });

    setIsSaved(false);
  }

  // Save
  function handleSaveInspection() {
    const inspectionData = {
      componentId: component.id,
      stage: component.stages[0],
      status: overallStatus,
      results: inspectionResults,
      itemNotes: itemNotes,
      inspectionNotes: inspectionNotes,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(`inspection-${component.id}`, JSON.stringify(inspectionData));

    setIsSaved(true);
    setModalType("saved");
  }

  function handleBackToComponent() {
    if (hasUnsavedChanges) {
      setModalType("leave");
      return;
    }

    navigate(`/explorer/${component.id}`);
  }

  function handleConfirmLeave() {
    setModalType("");
    navigate(`/explorer/${component.id}`);
  }

  function handleCloseModal() {
    setModalType("");
  }

  // -------------------------------------------

  // ⁡⁣⁢⁢--- Derived values ---⁡
  const completedCount = Object.keys(inspectionResults).length;
  const passCount = Object.values(inspectionResults).filter((result) => result === "pass").length;
  const failCount = Object.values(inspectionResults).filter((result) => result === "fail").length;
  const naCount = Object.values(inspectionResults).filter((result) => result === "na").length;
  const totalChecklistItems = component.checklistItems?.length ?? 0;
  const hasStarted = Object.keys(inspectionResults).length > 0 || Object.keys(itemNotes).length > 0 || inspectionNotes.trim() !== "";
  const overallStatus = completedCount === totalChecklistItems && totalChecklistItems > 0 ? "Completed" : hasStarted ? "In Progress" : "Not Started";
  const hasUnsavedChanges = !isSaved && (Object.keys(inspectionResults).length > 0 || Object.keys(itemNotes).length > 0 || inspectionNotes.trim() !== "");

  // ---------------------------------- //

  return (
    <section className="inspection-checklist-page">
      <PageHeader
        title={`${component.stages[0]} Inspection Checklist`}
        breadcrumbs={[
          {
            label: "Inspection Checklist",
          },
          {
            label: component.stages[0],
          },
        ]}
      />

      <div className="inspection-checklist-content">
        {/* ⁡⁣⁢⁡⁣⁢⁢--- Inspection Information ---⁡⁡⁡ */}

        <section className="inspection-information-card">
          <h2>Inspection Information</h2>

          <dl className="inspection-information-list">
            <div>
              <dt>Stage</dt>
              <dd>{component.stages[0]}</dd>
            </div>

            <div>
              <dt>Component</dt>
              <dd>{component.name}</dd>
            </div>

            <div>
              <dt>Status</dt>
              <dd>{overallStatus}</dd>
            </div>
          </dl>
        </section>

        {/* ⁡⁣⁢⁡⁣⁢⁢--- Checklist Items ---⁡⁡⁡ */}

        <section className="inspection-checklist-card">
          {component.checklistItems?.length > 0 ? (
            <div className="inspection-checklist-items">
              {component.checklistItems.map((item) => {
                const isOpen = openItemId === item.id;

                return (
                  <article className={`inspection-checklist-item ${isOpen ? "inspection-checklist-item--open" : ""}`} key={item.id}>
                    <button className="inspection-checklist-item__toggle" type="button" onClick={() => handleAccordionToggle(item.id)} aria-expanded={isOpen} aria-controls={`checklist-content-${item.id}`}>
                      <i className={`bi ${isOpen ? "bi-chevron-down" : "bi-chevron-right"}`} aria-hidden="true"></i>

                      <span>{item.title}</span>
                    </button>

                    {isOpen && (
                      <div className="inspection-checklist-item__content" id={`checklist-content-${item.id}`}>
                        <p>{item.description}</p>

                        <fieldset className="inspection-result-options">
                          <legend className="visually-hidden">Inspection result for {item.title}</legend>

                          <label>
                            <input type="radio" name={`result-${item.id}`} value="pass" checked={inspectionResults[item.id] === "pass"} onChange={() => handleResultChange(item.id, "pass")} />
                            <span>Pass</span>
                          </label>

                          <label>
                            <input type="radio" name={`result-${item.id}`} value="fail" checked={inspectionResults[item.id] === "fail"} onChange={() => handleResultChange(item.id, "fail")} />
                            <span>Fail</span>
                          </label>

                          <label>
                            <input type="radio" name={`result-${item.id}`} value="na" checked={inspectionResults[item.id] === "na"} onChange={() => handleResultChange(item.id, "na")} />
                            <span>N/A</span>
                          </label>

                          <button className="inspection-result-clear" type="button" onClick={() => handleClearResult(item.id)} disabled={!inspectionResults[item.id]}>
                            Clear Selection
                          </button>
                        </fieldset>

                        <div className="inspection-item-notes">
                          <label htmlFor={`notes-${item.id}`}>Notes</label>

                          <textarea id={`notes-${item.id}`} name={`notes-${item.id}`} rows="3" value={itemNotes[item.id] ?? ""} onChange={(event) => handleItemNotesChange(item.id, event.target.value)}></textarea>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <p>A detailed checklist has not yet been added for this component.</p>
          )}
        </section>

        {/* ⁡⁣⁢⁣⁡⁣⁢⁢--- Inspection Notes ---⁡⁡ */}

        <section className="inspection-notes-card">
          <h2>Inspection Notes</h2>

          <label className="visually-hidden" htmlFor="inspectionNotes">
            Overall inspection notes
          </label>

          <textarea id="inspectionNotes" name="inspectionNotes" rows="6" value={inspectionNotes} onChange={handleInspectionNotesChange}></textarea>
        </section>

        {/* ⁡⁣⁢⁡⁣⁢⁢--- Inspection Summary ---⁡⁡ */}

        <section className="inspection-summary-card">
          <h2>Inspection Summary</h2>

          <dl className="inspection-summary-list">
            <div>
              <dt>Progress</dt>
              <dd>
                {completedCount} / {totalChecklistItems} Completed
              </dd>
            </div>

            <div>
              <dt>Pass</dt>
              <dd>{passCount}</dd>
            </div>

            <div>
              <dt>Fail</dt>
              <dd>{failCount}</dd>
            </div>

            <div>
              <dt>N/A</dt>
              <dd>{naCount}</dd>
            </div>

            <div>
              <dt>Overall Status</dt>
              <dd>{overallStatus}</dd>
            </div>
          </dl>
        </section>

        {/* ⁡⁣⁢⁢--- Actions ---⁡ */}

        <div className="inspection-checklist-actions">
          <button className="button button--primary button--medium" type="button" onClick={handleSaveInspection}>
            Save Inspection
          </button>

          <button className="button button--secondary button--medium" type="button" onClick={handleBackToComponent}>
            Back to Component
          </button>
        </div>
      </div>

      {/* ⁡⁣⁢⁢--- Modal ---⁡ */}

      {modalType === "saved" && <AppModal type="success" title="Inspection Saved" message="Your inspection information has been saved successfully." confirmText="OK" onConfirm={handleCloseModal} onCancel={handleCloseModal} />}

      {modalType === "leave" && <AppModal type="warning" title="Unsaved Inspection" message="You have unsaved inspection information. If you leave this page, your changes will be lost." confirmText="Leave Without Saving" cancelText="Stay on Page" onConfirm={handleConfirmLeave} onCancel={handleCloseModal} showCancel={true} />}
    </section>
  );
}

// ---------------------------------- //

export default InspectionChecklistPage;
