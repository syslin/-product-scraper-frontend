import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductSubmission from './components/ProductSubmission';
import ProductList from './components/ProductList';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/submit">Scrape Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Product List</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/submit" element={<ProductSubmission />} />     
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
