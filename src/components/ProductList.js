import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/api';

const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div>
      <h2>Categories with Products</h2>
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.products.map(product => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
