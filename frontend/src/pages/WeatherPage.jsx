import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../context/WeatherContext";

const WeatherPage = () => {
  const { weatherData } = useWeather();

  return (
    <div className="app">
      <Navbar />
      {weatherData && (
        <div className="weather-grid">
          {weatherData.list.map((city) => (
            <Link key={city.id} to={`/city/${city.name}`}>
              <WeatherCard city={city} />
            </Link>
          ))}
        </div>
      )}
      <footer>2021 Fidenz Technologies</footer>
    </div>
  );
};

export default WeatherPage;
