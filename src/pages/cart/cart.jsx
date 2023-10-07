import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm"; 
import "./cart.css";


export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false); 

  const handleCheckoutClick = () => {
    setIsCheckingOut(true);
  };

  const handlePlaceOrder = (paymentDetails, billingAddress) => {
    checkout(paymentDetails, billingAddress);
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items:</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {isCheckingOut ? (
        <CheckoutForm onCheckout={handlePlaceOrder} />
      ) : totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ₹{totalAmount} </p>
          <button
            className="continue-shopping"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button className="checkout-button" onClick={handleCheckoutClick}>
            Checkout
          </button>
        </div>
      ) : (
        <h2> Empty :(</h2>
      )}
    </div>
  );
};
