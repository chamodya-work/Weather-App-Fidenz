const fs = require('fs');

let cityCodes = [];
try {
  const data = fs.readFileSync('cities.json', 'utf8'); 
  const json = JSON.parse(data);
  cityCodes = json.List.map(item => item.CityCode);
} catch (err) {
  console.error('Error loading cities.json:', err);
}

module.exports = { cityCodes };