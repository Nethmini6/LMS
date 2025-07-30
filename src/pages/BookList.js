import React from 'react';
import { useNavigate } from 'react-router-dom';


function BookList({ books, onDelete, onAdd }) {
    const navigate = useNavigate();
    const handleAdd = () => {
    navigate('/add');
    };
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
            <button onClick={handleAdd} style={{ marginLeft: '30px' }}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
   );
}

export default BookList;
