const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api/books", require("./routes/books"));
app.use("/api/auth", require("./routes/auth"));

// Home route
app.get("/", (req, res) => {
  res.send("📚 Library Management Backend Running...");
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
