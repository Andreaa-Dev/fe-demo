import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { url } from "../../common/common";

export default function UserRegister() {
  const [userInformation, setUserInformation] = useState({
    name: "",
    email: "",
    password: "",
  });

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    // get information from form
    setUserInformation({
      ...userInformation,
      [event.target.name]: event.target.value,
    });
  }

  const userUrl = `${url}/users/signup`;
  function registerHandler() {
    // send data to backend
    axios
      .post(userUrl, userInformation)
      .then((response) => {
        console.log(response, "res");
        if (response.status === 201) {
          alert("created!");
        }
        // const userResponse = response.user;
        // get user by email?
        // save in redux
        // navigate to the log in page
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data.message);
        }
      });
    // redux - dispatch action
  }
  return (
    <div>
      <h1>UserRegister</h1>
      <TextField
        name="name"
        id="standard-basic"
        label="name"
        variant="standard"
        onChange={onChangeHandler}
      />
      <TextField
        name="email"
        id="standard-basic"
        label="email"
        variant="standard"
        onChange={onChangeHandler}
      />

      <TextField
        name="password"
        id="standard-basic"
        label="password"
        variant="standard"
        onChange={onChangeHandler}
      />
      <Button onClick={registerHandler}>Register</Button>
    </div>
  );
}
