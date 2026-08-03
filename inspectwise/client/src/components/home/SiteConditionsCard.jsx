import "./SiteConditionsCard.css";

// ---------------------------------- //

function SiteConditionsCard() {
  return (
    <article className="dashboard-card site-conditions-card">
      <h2 className="dashboard-card__heading">
        Site Inspection Conditions
        <i className="bi bi-cloud-drizzle" aria-hidden="true"></i>
      </h2>

      <div className="site-conditions-card__content">
        <div>
          <h3>Auckland</h3>

          <p>17&deg;C</p>
          <p>Light rain</p>
          <p>Wind: 18km/h</p>
          <p>Humidity: 71%</p>
        </div>

        <div>
          <h3>Inspection Status</h3>

          <p className="status-badge status-caution">
            <i className="bi bi-exclamation-triangle" aria-hidden="true"></i>
            <span>Caution</span>
          </p>

          <p>Wet conditions may reduce visibility and increase slip hazards.</p>
        </div>
      </div>

      <button className="button button--secondary button--medium" type="button">
        Refresh Conditions
      </button>
    </article>
  );
}

// ---------------------------------- //

export default SiteConditionsCard;
