import React from "react";
import { ProductCart } from "../../types";

export default function CartItem({ cart }: { cart: ProductCart }) {
  // add logic to increase quantity here
  return (
    <div>
      {cart.name}
      {cart.quantity}
    </div>
  );
}
