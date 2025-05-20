import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-logo">Кінотеатр</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;
