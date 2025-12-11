const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/books");

const app = express();
app.use(express.json());
app.use(cors()); // allow frontend requests

mongoose.connect("mongodb://localhost:27017/libraryDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/books", bookRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
