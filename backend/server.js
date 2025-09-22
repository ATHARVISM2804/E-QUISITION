import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Replace with your deployed Apps Script Web App URL
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxxdaJ8vht3o8hmv_TgUUvNQw1ySoq8b-ohPY8-jDj6wd8oxQqnBV9MoYar85EYxhR7Lw/exec";

// API route to fetch Google Sheet data
app.get("/api/sheet-data", async (req, res) => {
  try {
    const response = await fetch(GOOGLE_SHEET_URL); // native fetch
    if (!response.ok) {
      throw new Error(`Google Script error: ${response.statusText}`);
    }

    const data = await response.json();

    // Optional: format the data into objects (first row = headers)
    const [headers, ...rows] = data;
    const formatted = rows.map(row =>
      headers.reduce((obj, header, i) => {
        obj[header] = row[i] || "";
        return obj;
      }, {})
    );

    res.json({
      success: true,
      data: formatted,
    });
  } catch (err) {
    console.error("Error fetching sheet:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching data from Google Sheet",
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
