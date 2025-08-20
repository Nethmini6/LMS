import React, { useState } from 'react';

function AddBook({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {  // <-- add async here
    e.preventDefault();
    if (title.trim() && author.trim() && date) {
      try {
        const res = await fetch("http://localhost:5000/api/books/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, author, date }),
        });

        const data = await res.json();
        console.log("Book added:", data);

        // Clear input fields
        setTitle('');
        setAuthor('');
        setDate('');

        alert("Book added successfully!");

        // Optional: Call parent function to update book list
        if (onAddBook) onAddBook(data);

      } catch (err) {
        console.error("Error adding book:", err);
        alert("Failed to add book. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
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
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
