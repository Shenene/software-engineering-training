"use strict";

// -------------------------------------------------------- //
// ⁡⁣⁡⁣⁢⁢geonetService.js⁡⁡⁡
// -------------------------------------------------------- //

import "dotenv/config";

// ----------------------------------------------------- //

const fetchGeoNetEarthquakes = async () => {
  const response = await fetch(process.env.GEONET_API_URL, {
    headers: {
      Accept: "application/vnd.geo+json;version=2",
    },
  });

  if (!response.ok) {
    throw new Error(`GeoNet API request failed with status ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data.features)) {
    throw new Error("Unexpected GeoNet API response format.");
  }

  // ----------------------------------------------
  // ⁡⁢⁢⁣--- Map ---⁡
  const earthquakes = data.features.map((feature) => {
    const { properties, geometry } = feature;

    const [longitude, latitude] = geometry.coordinates;

    return {
      publicId: properties.publicID,
      eventTime: properties.time,
      depthKm: properties.depth,
      magnitude: properties.magnitude,
      mmi: properties.mmi ?? null,
      locality: properties.locality,
      quality: properties.quality,
      latitude,
      longitude,
    };
  });

  return earthquakes;
};

// ----------------------------------------------------- //

export { fetchGeoNetEarthquakes };
