import React from 'react';

function BookList({ books, onDelete }) {
  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? <p>No books available.</p> : null}
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <button onClick={() => onDelete(book.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
