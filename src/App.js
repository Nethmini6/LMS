import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';
import Navbar from './components/Navbar'; // ✅ New import
import Login from './pages/login'; // ✅ Import the login page
import './App.css';

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login']; // Hide navbar on login page

   /*const [books, setBooks] = useState([
     { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' }
     ]);

 const addBook = (book) => {
   setBooks([...books, { ...book, id: Date.now() }]);
   };

 const deleteBook = (id) => {
   setBooks(books.filter(book => book.id !== id)); }; */

 return (
   <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />} {/* ✅ Appears on all pages */}
       <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<AddBook onAddBook={addBook} />} />
            <Route path="/list" element={<BookList books={books} onDelete={deleteBook} />} />
          </Routes>
       </div>
  </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

