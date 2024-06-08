import React, { useState } from 'react';
import { fetchProductSubmission } from '../services/api'; // Import the fetchProductSubmission function from api.js

const ProductSubmission = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchProductSubmission(url); // Call the fetchProductSubmission function with the URL
      console.log(response.message);
    } catch (error) {
      console.error('Error submitting URL:', error.message);
    }
    setUrl('');
  };

  return (
    <div>
      <h2>Submit Product URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Enter product URL"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductSubmission;
