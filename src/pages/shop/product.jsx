import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage, ratings } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ₹{price}</p>
        <p>Rating: {ratings}/5</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        <b>Add To Cart</b> {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};