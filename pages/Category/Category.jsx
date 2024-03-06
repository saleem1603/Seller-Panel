  
import React, { useState } from "react";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Selected Category: ${selectedCategory}`);
  };

  return (
    <div className="category">
      <h2 class="category1">Category Section</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Choose Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="homeFurniture">Home & Furniture</option>
            <option value="books">Books</option>

            {/* Add*/}
          </select>
        </label>
        <button type="uniqueButtonType" class="custom-button">
          Submit
        </button>
      </form>

    </div>
  );
};

export default Category;
