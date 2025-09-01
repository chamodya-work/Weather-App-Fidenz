import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WeatherPage from "./pages/WeatherPage";
import CityWeatherPage from "./pages/CityWeatherPage";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/city/:name" element={<CityWeatherPage />} />
        </Routes>
      ) : (
        <LoginPage />
      )}
    </Router>
  );
};

export default App;
