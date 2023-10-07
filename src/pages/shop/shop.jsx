import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Filter from "./filter";
import "./shop.css";
import UncontrolledExample from "./banner";

export const Shop = () => {
  const [sortedProducts, setSortedProducts] = useState(PRODUCTS);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSort = (sortOption, categoryOption) => {
    setSelectedSort(sortOption);
    setSelectedCategory(categoryOption);

    let filteredAndSorted = [...PRODUCTS];

    // Filter by category
    if (categoryOption) {
      filteredAndSorted = filteredAndSorted.filter(
        (product) => product.category === categoryOption
      );
    }

    // Sort by selected sort option
    if (sortOption === "price") {
      filteredAndSorted = filteredAndSorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "ratings") {
      filteredAndSorted = filteredAndSorted.sort((a, b) => b.ratings - a.ratings);
    }

    setSortedProducts(filteredAndSorted);
  };

  return (
    <div className="shop">
      <div className="hero-banner">
        <UncontrolledExample />
      </div>
      <Filter handleSort={handleSort} />

      <div className="products">
        {sortedProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
