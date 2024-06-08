import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductSubmission from './components/ProductSubmission';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/submit">Submit Product</Link>
          </li>
          <li>
            <Link to="/">Product List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/submit" element={<ProductSubmission />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
