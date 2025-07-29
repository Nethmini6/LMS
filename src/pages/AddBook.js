import React, { useState } from 'react';

function AddBook({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim() && date) {
      onAddBook({ title, author, date});
      setTitle('');
      setAuthor('');
      setDate('');
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
