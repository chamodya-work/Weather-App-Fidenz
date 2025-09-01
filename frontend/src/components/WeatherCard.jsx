import React from "react";
import moment from "moment";
import {
  WiDaySunny,
  WiCloud,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
  WiThunderstorm,
  WiDayCloudy,
} from "react-icons/wi";

const WeatherCard = ({ city }) => {
  const getIcon = (condition) => {
    const main = condition.toLowerCase();
    if (main.includes("clear")) return <WiDaySunny size={50} />;
    if (main.includes("few clouds")) return <WiDayCloudy size={50} />;
    if (main.includes("clouds")) return <WiCloudy size={50} />;
    if (main.includes("rain")) return <WiRain size={50} />;
    if (main.includes("snow")) return <WiSnow size={50} />;
    if (main.includes("mist") || main.includes("fog"))
      return <WiFog size={50} />;
    if (main.includes("thunder")) return <WiThunderstorm size={50} />;
    return <WiCloud size={50} />;
  };

  const getCardColor = (temp) => {
    if (temp < 0) return "#90ee90"; // Green for cold
    if (temp < 10) return "#add8e6"; // Blue for cool
    if (temp < 20) return "#ffcccb"; // Light red for mild
    return "#ffd700"; // Orange/gold for warm
  };

  const sunrise = moment.unix(city.sys.sunrise).format("h:mma");
  const sunset = moment.unix(city.sys.sunset).format("h:mma");
  const currentTime = moment.unix(city.dt).format("h:mma, MMM D");
  const windSpeed = city.wind.speed.toFixed(1);
  const windDeg = city.wind.deg;
  const visibilityKm = (city.visibility / 1000).toFixed(1);
  const condition = city.weather[0].description;

  return (
    <div
      className="weather-card"
      style={{ backgroundColor: getCardColor(city.main.temp) }}
    >
      <div className="card-header">
        <div>
          {city.name}, {city.sys.country}
        </div>
      </div>
      <div className="card-time">{currentTime}</div>
      <div className="card-condition">
        <div className="temp">{Math.round(city.main.temp)}°C</div>
      </div>
      <div class="weather-details">
        <div className="condition-text">
          {getIcon(condition)}
          {condition.charAt(0).toUpperCase() + condition.slice(1)}
        </div>
        <div className="min-max">
          Temp Min: {Math.round(city.main.temp_min)}°C
          <br />
          Temp Max: {Math.round(city.main.temp_max)}°C
        </div>
      </div>

      <div className="details">
        <div>Pressure: {city.main.pressure}hPa</div>
        <div>Humidity: {city.main.humidity}%</div>
        <div>Visibility: {visibilityKm}km</div>
        <div>
          {windSpeed}m/s {windDeg} Degree
        </div>
        <div>Sunrise: {sunrise}</div>
        <div>Sunset: {sunset}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
