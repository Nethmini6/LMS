import React, { useState, useEffect } from "react";
import axios from "axios";
import AddBook from "./AddBook";

function BookList() {
  const [books, setBooks] = useState([]);

  // Fetch books from database
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books/list");
      setBooks(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch books");
    }
  };

  // Load books on page load
  useEffect(() => {
    fetchBooks();
  }, []);

  // Called after a new book is added
  const handleBookAdded = () => {
    fetchBooks(); // Refresh the list from database
  };

  return (
    <div>
      <h2>Book List</h2>
      <AddBook onBookAdded={handleBookAdded} />
      <ul>
        {books.length === 0 ? (
          <li>No books found</li>
        ) : (
          books.map((book) => (
            <li key={book._id}>
              {book.title} by {book.author} ({book.year})
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default BookList;
