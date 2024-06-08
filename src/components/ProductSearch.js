import React, { useState, useEffect } from 'react';
import { searchProducts } from '../services/api';

const ProductSearch = ({ searchTerm, setSearchTerm, setSearchResults }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleSearch = async () => {
      if (searchTerm) {
        setLoading(true);
        try {
          const data = await searchProducts(searchTerm);
          setSearchResults(data);
          setLoading(false);
        } catch (error) {
          setError('Error searching products');
          setLoading(false);
          console.error('Error searching products:', error);
        }
      } else {
        setSearchResults([]);
      }
    };

    const timeout = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm, setSearchResults]);

  return (
    <div>
      <h2>Search Products</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default ProductSearch;
