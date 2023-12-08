import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "../../redux/store";
import { fetchAllOrdersByUserIdAsync } from "../../redux/reducers/orderReducer";

export default function OrderList() {
  const orders = useSelector((state: AppState) => state.ordersReducer.orders);

  const dispatch = useAppDispatch();
  // should fetch user again to get user Id
  // store local storage
  const userId = "656edbfc9e00de06b2591089";

  useEffect(() => {
    dispatch(fetchAllOrdersByUserIdAsync(userId));
  }, [dispatch, userId]);

  console.log(orders, "order");
  return <div>OrderList</div>;
}
