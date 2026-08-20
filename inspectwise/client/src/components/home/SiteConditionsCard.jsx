import "./SiteConditionsCard.css";

import { useWeather } from "../../hooks/useWeather";

// ---------------------------------- //

function getWeatherDescription(code) {
  if (code === 0) return "Clear";
  if (code <= 3) return "Cloudy";
  if (code <= 50) return "Foggy";
  if (code <= 70) return "Rain";
  if (code <= 80) return "Rain showers";
  if (code >= 90) return "Thunderstorm";

  return "Current conditions";
}

function SiteConditionsCard() {
  const { weather, isLoading, error, refreshWeather } = useWeather();

  const isCaution = weather?.weather_code >= 45;

  const weatherDescription = weather ? getWeatherDescription(weather.weather_code) : "";

  return (
    <article className="dashboard-card site-conditions-card">
      <h2 className="dashboard-card__heading">
        Site Inspection Conditions
        <i className="bi bi-cloud-drizzle" aria-hidden="true"></i>
      </h2>

      <div className="site-conditions-card__content">
        <div>
          <h3>Auckland</h3>

          {isLoading && <p>Loading conditions...</p>}

          {error && <p>{error}</p>}

          {weather && (
            <>
              <p>{Math.round(weather.temperature_2m)}&deg;C</p>
              <p>{weatherDescription}</p>
              <p>Wind: {Math.round(weather.wind_speed_10m)}km/h</p>
              <p>Humidity: {weather.relative_humidity_2m}%</p>
            </>
          )}

          {/* <p>17&deg;C</p>
          <p>Light rain</p>
          <p>Wind: 18km/h</p>
          <p>Humidity: 71%</p> */}
        </div>

        <div>
          <h3>Inspection Status</h3>

          <p className={`status-badge ${isCaution ? "status-caution" : "status-suitable"}`}>
            <i className={`bi ${isCaution ? "bi-exclamation-triangle" : "bi-check-circle"}`} aria-hidden="true"></i>
            <span>{isCaution ? "Caution" : "Suitable"}</span>
          </p>

          <p>{isCaution ? "Weather conditions may affect visibility or site safety." : "Current weather conditions are suitable for inspection activities."}</p>
        </div>
      </div>

      <button className="button button--secondary button--medium" type="button" onClick={refreshWeather} disabled={isLoading}>
        {isLoading ? "Refreshing..." : "Refresh Conditions"}
      </button>
    </article>
  );
}

// ---------------------------------- //

export default SiteConditionsCard;
