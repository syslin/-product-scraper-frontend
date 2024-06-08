import React, { useState } from 'react';

const searchResults = (product) =>{

  return(
    <div key={product.id} className="product-card">
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p>Price: {product.price}</p>
  </div>
)
}

export default searchResults;
