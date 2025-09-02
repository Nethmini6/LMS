import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import AddBook from "./AddBook";

function BooksPage() {
  const [books, setBooks] = useState([]);

  // Load books when page mounts
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  // Add new book
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Delete book
  const handleDeleteBook = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/books/${id}`, { method: "DELETE" });
      setBooks((prevBooks) => prevBooks.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<BookList books={books} onDelete={handleDeleteBook} />}
      />
      <Route
        path="/add"
        element={<AddBook onAddBook={handleAddBook} />}
      />
    </Routes>
  );
}

export default BooksPage;
