import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { AppState, useAppDispatch } from "../../redux/store";
import {
  addOne,
  fetchAllProductAsync,
} from "../../redux/reducers/productReducer";

export default function Products() {
  const products = useSelector((state: AppState) => state.productReducer);
  const dispatch = useAppDispatch();

  const onAddNew = () => {
    dispatch(
      addOne({
        id: "wdfsdfsd",
        price: 50,
        title: "sdfsdf",
        description: "sdfsd",
      })
    );
  };
  useEffect(() => {
    dispatch(fetchAllProductAsync());
  }, [dispatch]);

  console.log("products list: ", products);
  return (
    <div>
      <button onClick={onAddNew}>Add new product</button>
    </div>
  );
}
