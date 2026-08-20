import axios from "axios";
import { useEffect, useState } from "react";

// ---------------------------------- //

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchWeather() {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude: -36.8485,
          longitude: 174.7635,
          timezone: "Pacific/Auckland",
          wind_speed_unit: "kmh",
          current: "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,precipitation",
        },
      });

      setWeather(response.data.current);
    } catch (error) {
      console.error("Weather API error:", error);
      setError("Could not load current weather conditions.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  // ---------------------------------- //

  return {
    weather,
    isLoading,
    error,
    refreshWeather: fetchWeather,
  };
}
