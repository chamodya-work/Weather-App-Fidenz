const express = require('express');
const { getWeather } = require('../services/weatherService');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/weather', authMiddleware, async (req, res) => {
  try {
    const data = await getWeather();
    res.json(data);
  } catch (error) {
    console.error('Error in weather route:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

module.exports = router;