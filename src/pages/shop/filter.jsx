import React, { useState } from "react";

const Filter = ({ handleSort }) => {
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSort(value);
    handleSort(value,selectedSort ); 
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
    handleSort(selectedSort, value); 
  };

  return (
    <div className="filter">
      <div className="sort">Sort By: </div>
      <select className="select-sort" value={selectedSort} onChange={handleSortChange}>
      <option value="sort-random">Random</option>
        <option className="sort-price" value="price">Price</option>
        <option className="sort-ratings"value="ratings">Ratings</option>
      </select>
      <div className="category">Category:</div>
      <select className="category-sort" value={selectedCategory} onChange={handleCategoryChange}>
        <option className="sort-all" value="">All</option>
        <option className="sort-decor" value="Home Decor">Home Decor</option>
        <option className="sort-utensils" value="Utensils">Utensils</option>
        <option className="sort-fashion" value="Fashion">Fashion</option>
      </select>
    </div>
  );
};

export default Filter;
