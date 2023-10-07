import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'; 

const CheckoutForm = ({ onCheckout }) => {
const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    cvv: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleBillingInputChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  };

  const handleCheckout = () => {
    onCheckout(paymentDetails, billingAddress); 
    navigate("/"); 
  };

  return (
    <div className="checkout-form">
      <h2>Payment Details</h2>
      <form>
        <div className="input-group">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handlePaymentInputChange}
          />
        </div>
        <div className="input-group">
          <label>Card Holder Name:</label>
          <input
            type="text"
            name="cardHolderName"
            value={paymentDetails.cardHolderName}
            onChange={handlePaymentInputChange}
          />
        </div>
        <div className="input-group">
          <label>Expiration Date:</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            onChange={handlePaymentInputChange}
          />
        </div>
        <div className="input-group">
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handlePaymentInputChange}
          />
        </div>
      </form>

      <h2>Billing Address</h2>
      <form>
        <div className="input-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={billingAddress.fullName}
            onChange={handleBillingInputChange}
          />
        </div>
        <div className="input-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={billingAddress.address}
            onChange={handleBillingInputChange}
          />
        </div>
        <div className="input-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={billingAddress.city}
            onChange={handleBillingInputChange}
          />
        </div>
        <div className="input-group">
          <label>Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={billingAddress.zipCode}
            onChange={handleBillingInputChange}
          />
        </div>
      </form>

      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default CheckoutForm;
