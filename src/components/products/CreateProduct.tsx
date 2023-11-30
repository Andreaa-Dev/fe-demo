import axios from "axios";
import React, { useState } from "react";
import { url } from "../../common/common";
import { TextField } from "@mui/material";

const productUrl = `${url}/products` as string;

export default function CreateProduct() {
  const [newProduct, setNewProduct] = useState({ name: "", price: 1 });

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    // get product information
    setNewProduct({ ...newProduct, name: event.target.value });
  }

  const productUrl = `${url}/products`;

  function createProductHandler() {
    // send data to backend

    const token = localStorage.getItem("userToken");
    axios
      .post(productUrl, newProduct, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response, "res");
        if (response.status === 201) {
          alert("created");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data.message);
        }
      });
  }
  return (
    <div>
      <h1> Create new product</h1>
      <TextField
        name="name"
        id="standard-basic"
        label="name"
        variant="standard"
        onChange={onChangeHandler}
      />
      <button onClick={createProductHandler}> Create new product </button>
    </div>
  );
}
