const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

// Add new book
router.post("/add", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.json({ message: "Book added successfully", book });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all books
router.get("/list", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
