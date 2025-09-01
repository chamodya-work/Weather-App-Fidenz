import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchWeather = async () => {
        try {
          const token = await getAccessTokenSilently();
          const response = await axios.get("/api/weather", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setWeatherData(response.data);
        } catch (error) {
          console.error("Error fetching weather:", error);
        }
      };
      fetchWeather();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <WeatherContext.Provider value={{ weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
