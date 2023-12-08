import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Products from "./components/products/Products";
import UserRegister from "./components/users/UserRegister";
import UserLogIn from "./components/users/UserLogIn";
import CreateProduct from "./components/products/CreateProduct";
import UserLogInGoogle from "./components/users/UserLogInGoogle";
import Home from "./components/home/Home";
import Landing from "./components/home/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import DashBoard from "./components/admin/DashBoard";
import { AppState } from "./redux/store";
import NavBar from "./components/navbar/NavBar";
import CartList from "./components/cart/CartList";
import OrderList from "./components/order/OrderList";

const App = () => {
  const user = useSelector((state: AppState) => state.usersReducer.user);
  return (
    <div>
      <UserLogInGoogle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/products" element={<Products />} />

        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogIn />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/order" element={<OrderList />} />

        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="createProduct"
          element={
            <ProtectedRoute user={user}>
              <CreateProduct />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="userList"
          element={
            <ProtectedRoute user={user}>
              <UserList />
            </ProtectedRoute>
          }
        /> */}

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
};

export default App;
