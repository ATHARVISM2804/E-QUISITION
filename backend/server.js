import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Replace with your MongoDB URI (use env var in production!)
const MONGO_URI = "mongodb+srv://atharvgolait_db_user:fPfiZMA5pGFRc6Mk@cluster0.zmk4wlz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middleware
app.use(cors("https://e-quisition.onrender.com"));
app.use(express.json()); // Parse JSON body

// MongoDB connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Schema & Model
const FormSchema = new mongoose.Schema(
  {
    name: String,
    rollNo: String,
    branch: String,
  },
  { timestamps: true }
);

const FormEntry = mongoose.model("FormEntry", FormSchema);

// ➡️ Route to handle form submission (POST)
app.post("/submit", async (req, res) => {
  try {
    const { name, rollNo, branch } = req.body;

    if (!name || !rollNo || !branch) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const entry = new FormEntry({ name, rollNo, branch });
    await entry.save();

    res.json({ success: true, message: "Form submitted successfully!" });
  } catch (err) {
    console.error("❌ Error saving form:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ➡️ Route to fetch all submissions (GET)
app.get("/data", async (req, res) => {
  try {
    const entries = await FormEntry.find().sort({ createdAt: -1 });
    res.json({ success: true, data: entries });
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
