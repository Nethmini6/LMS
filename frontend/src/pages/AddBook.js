import React, { useState } from "react";
import axios from "axios";

function AddBook({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend
      await axios.post("http://localhost:5000/api/books/add", {
        title,
        author,
        year
      });

      // Notify parent to refresh list from DB
      onBookAdded();

      // Clear form fields
      setTitle("");
      setAuthor("");
      setYear("");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to add book. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
