import { Link, useParams } from "react-router-dom";

import PageHeader from "../components/common/PageHeader";
import { buildingComponents } from "../data/inspectionData";

import bottomPlateImage from "../images/bottom-plate.jpg";

import "./ComponentDetailsPage.css";

// ---------------------------------- //

// Image
const componentImages = {
  "bottom-plate": bottomPlateImage,
};

// ---------------------------------- //

function ComponentDetailsPage() {
  const { componentId } = useParams();

  const component = buildingComponents.find((buildingComponent) => buildingComponent.id === componentId);

  // Fallback page if the URL contains an invalid component ID
  if (!component) {
    return (
      <section className="component-details-page">
        <PageHeader
          title="Component Not Found"
          breadcrumbs={[
            {
              label: "Building Explorer",
              path: "/explorer",
            },
            {
              label: "Component Not Found",
            },
          ]}
        />

        <div className="component-details-content">
          <p>The requested building component could not be found.</p>

          <Link className="button button--secondary button--medium" to="/explorer">
            Back to Building Explorer
          </Link>
        </div>
      </section>
    );
  }

  const componentImage = componentImages[component.id];

  // ----------------------------------

  return (
    <section className="component-details-page">
      <PageHeader
        title="Component Details"
        breadcrumbs={[
          {
            label: "Building Explorer",
            path: "/explorer",
          },
          {
            label: component.name,
          },
        ]}
      />

      <div className="component-details-content">
        <div className="component-details-introduction">
          <div>
            <h2>{component.stages[0]} Inspection</h2>
            <p>{component.name}</p>
          </div>

          <Link className="button button--primary button--medium" to={`/explorer/${component.id}/checklist`}>
            Open Inspection Checklist
          </Link>
        </div>

        <div className="component-details-grid">
          <article className="component-details-card component-details-image-card">{componentImage ? <img className="component-details-image" src={componentImage} alt={`${component.name} installed as part of timber wall framing`} /> : <p className="component-details-image-placeholder">A component image will be added soon.</p>}</article>

          <article className="component-details-card component-details-overview">
            <h2>Overview</h2>

            <p>{component.overview ?? component.summary}</p>

            {component.treatment && <p>{component.treatment}</p>}
          </article>

          <article className="component-details-card component-details-issues">
            <h2>Common Issues</h2>

            {component.commonIssues?.length > 0 ? (
              <ul>
                {component.commonIssues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            ) : (
              <p>Detailed common issues will be added soon</p>
            )}
          </article>

          <article className="component-details-card component-details-references">
            <h2>Building Code / References</h2>
            {component.references ? (
              <>
                <h3>Standard</h3>
                <p>{component.references.standard}</p>

                <h3>Building Code Clauses</h3>
                <ul>
                  {component.references.clauses.map((clause) => (
                    <li key={clause}>{clause}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>Detailed references will be added soon</p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------- //

export default ComponentDetailsPage;
