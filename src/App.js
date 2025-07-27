import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';
import Navbar from './components/Navbar'; // ✅ New import
import './App.css';

function App() {
   const [books, setBooks] = useState([
     { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' }
     ]);

 const addBook = (book) => {
   setBooks([...books, { ...book, id: Date.now() }]);
   };

 const deleteBook = (id) => {
   setBooks(books.filter(book => book.id !== id));
 };

 return (
   <>
     <Navbar /> {/* ✅ Appears on all pages */}
       <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook onAddBook={addBook} />} />
            <Route path="/list" element={<BookList books={books} onDelete={deleteBook} />} />
          </Routes>
       </div>
  </>
  );
}

export default App;

