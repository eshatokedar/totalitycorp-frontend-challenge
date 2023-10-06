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
      <div className="sort">Sort By: </div>
      <select className="select-sort" value={selectedSort} onChange={handleSortChange}>
      <option value="sort-random">Random</option>
        <option className="sort-price" value="price">Price</option>
        <option className="sort-ratings"value="ratings">Ratings</option>
      </select>
    </div>
  );
};

export default Filter;
