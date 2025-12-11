const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

// Add a new book
router.post("/add", async (req, res) => {
  try {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const book = new Book({ title, author, year });
    await book.save();

    res.status(201).json(book); // return saved book
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Get all books
router.get("/list", async (req, res) => {
  try {
    const books = await Book.find().sort({ year: -1 });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

module.exports = router;
