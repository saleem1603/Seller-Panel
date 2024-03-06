// AllCategory.jsx
import React, { useState } from 'react';

const AllCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected Category: ${selectedCategory}`);
    // Handle form submission logic here
  };

  return (
    <div className="all-category">
      <h2>All Category Section</h2>

      <form onSubmit={handleSubmit}>
        <label>
          All Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Add other category-related content here */}
    </div>
  );
};

export default AllCategory;
