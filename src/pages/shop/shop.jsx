import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Filter from "./filter";
import "./shop.css";

export const Shop = () => {
  const [sortedProducts, setSortedProducts] = useState(PRODUCTS);
  const [selectedSort, setSelectedSort] = useState("");

  const handleSort = (sortOption) => {
    setSelectedSort(sortOption);

    let sorted = [...PRODUCTS];
    if (sortOption === "price") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "ratings") {
      sorted = sorted.sort((a, b) => b.ratings - a.ratings); // Sort by ratings in descending order
    }

    setSortedProducts(sorted);
  };

  return (
    <div className="shop">
      <Filter handleSort={handleSort} />
      
      <div className="products">
        {sortedProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
