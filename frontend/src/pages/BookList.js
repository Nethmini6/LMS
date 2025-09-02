const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

// Add new book
// POST http://localhost:5000/api/books/add
router.post("/add", async (req, res) => {
  try {
    const { title, author, date } = req.body;

    // Validate input
    if (!title || !author || !date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save new book to database
    const book = new Book({ title, author, date });
    await book.save();

    // Return the saved book to frontend
    res.status(201).json(book);
  } catch (err) {
    console.error("Error adding book:", err.message);
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Get all books
// GET http://localhost:5000/api/books/list
router.get("/list", async (req, res) => {
  try {
    const books = await Book.find().sort({ date: -1 }); // optional: latest first
    res.json(books);
  } catch (err) {
    console.error("Error fetching books:", err.message);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

module.exports = router;
