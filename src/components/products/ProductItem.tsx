import React from "react";
import { useDispatch } from "react-redux";

import { Product } from "../../types";
import * as CartActions from "../../redux/reducers/cartReducer";

export default function ProductItem({ product }: { product: Product }) {
  const dispatch = useDispatch();

  function addToCartHandler(product: Product) {
    const productOrder = { ...product, quantity: 1 };
    dispatch(CartActions.addProductToCart(productOrder));
  }
  return (
    <div>
      <p> {product.name}</p>
      <button onClick={() => addToCartHandler(product)}> Buy</button>
    </div>
  );
}
