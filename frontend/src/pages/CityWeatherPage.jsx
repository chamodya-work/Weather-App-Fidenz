import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../context/WeatherContext";

const CityWeatherPage = () => {
  const { name } = useParams();
  const { weatherData } = useWeather();

  const city = weatherData?.list.find((c) => c.name === name);

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div className="app">
      <Navbar />
      <div className="weather-grid single">
        <WeatherCard city={city} />
      </div>
      <footer>2021 Fidenz Technologies</footer>
    </div>
  );
};

export default CityWeatherPage;
