require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use('/api', weatherRoutes);

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});