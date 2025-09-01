const axios = require('axios');
const NodeCache = require('node-cache');
const { cityCodes } = require('../utils/loadCities');

const cache = new NodeCache({ stdTTL: 300 }); // 5 minutes TTL
const apiKey = process.env.OPENWEATHER_API_KEY;

const getWeather = async () => {
  const cachedData = cache.get('weather');
  if (cachedData) {
    return cachedData;
  }

  try {
    const weatherList = [];
    for (const code of cityCodes) {
      const url = `https://api.openweathermap.org/data/2.5/weather?id=${code}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      weatherList.push(response.data);
    }
    const formattedData = { cnt: weatherList.length, list: weatherList };
    cache.set('weather', formattedData);
    return formattedData;
  } catch (error) {
    console.error('Error fetching individual weather data:', error.message, error.response?.data);
    throw error;
  }
};

module.exports = { getWeather };