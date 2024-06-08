import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../services/api';
import ProductSearch from './ProductSearch';

const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        setError('Error fetching categories');
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list">
      <ProductSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
      />
      <h2>Categories with Products</h2>
      {searchTerm ? (
        searchResults.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} alt={product.title} style={{ width: '100px', height: 'auto' }} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ))
      ) : (
        categories.map(category => (
          <div key={category.id} className="category-card">
            <h3>{category.name}</h3>
            <div className="products-container">
              {category.products.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image_url} alt={product.title} style={{ width: '100px', height: 'auto' }} />
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p>Price: {product.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
