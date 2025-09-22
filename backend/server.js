// Simple Express server for registration backend
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors(["https://e-quisition.vercel.app/",'http://localhost:5173']));
app.use(express.json());

// In-memory storage for registered users
let registrations = [];

// POST /register - Add a new registration
app.post('/register', (req, res) => {
  const { name, email, otherField } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  registrations.push({ name, email, otherField });
  res.status(201).json({ message: 'Registration successful' });
});

// GET /e-quisition-data - Get all registrations
app.get('/e-quisition-data', (req, res) => {
  res.json(registrations);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
