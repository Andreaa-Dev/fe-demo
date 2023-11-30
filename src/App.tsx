import React from "react";

import Products from "./components/products/Products";
import UserRegister from "./components/users/UserRegister";
import UserLogIn from "./components/users/UserLogIn";
import CreateProduct from "./components/products/CreateProduct";

const App = () => {
  return (
    <div>
      <h1>Demo</h1>
      {/* <Products /> */}
      {/* <UserRegister /> */}
      <UserLogIn />
      <CreateProduct />
    </div>
  );
};

export default App;
