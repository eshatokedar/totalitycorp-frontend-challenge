import React, { useState } from "react";

const Filter = ({ handleSort }) => {
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSort(value);
    handleSort(value); // Pass the selected sort option to the parent component
  };

  return (
    <div className="filter">
      <label>Sort By:</label>
      <select value={selectedSort} onChange={handleSortChange}>
        <option value="">Select</option>
        <option value="category">Category</option>
        <option value="price">Price</option>
        <option value="ratings">Ratings</option>
      </select>
    </div>
  );
};

export default Filter;
