import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { AppState, useAppDispatch } from "../../redux/store";
import {
  addOne,
  fetchAllProductAsync,
} from "../../redux/reducers/productReducer";
import ProductItem from "./ProductItem";

export default function Products() {
  const products = useSelector(
    (state: AppState) => state.productsReducer.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProductAsync());
  }, [dispatch]);

  console.log("products list: ", products);
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}
