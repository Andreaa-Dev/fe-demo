import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import CartItem from "./CartItem";
import axios from "axios";
import { url } from "../../common/common";

export default function CartList() {
  const cartItems = useSelector((state: AppState) => state.cartsReducer.carts);

  // get productId => backend
  const orderItems = cartItems.map((item) => ({
    productId: item._id,
    quantity: item.quantity,
  }));

  const token = localStorage.getItem("userToken");
  const orderUrl = `${url}/orders`;
  function checkOutHandler() {
    // send to backend to create an order
    axios
      .post(
        orderUrl,
        { orderItems },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response, "res");
        if (response.status === 200) {
          alert("order is created successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>CartList</h1>
      {cartItems.map((cart) => (
        <CartItem cart={cart} />
      ))}
      <button onClick={() => checkOutHandler()}> Buy</button>
    </div>
  );
}
