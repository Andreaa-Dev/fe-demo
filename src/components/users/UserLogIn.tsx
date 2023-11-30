import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

import { url } from "../../common/common";

export default function UserLogIn() {
  const [userInput, setUserInput] = useState({ email: "", password: "" });

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    // get user input
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  }

  const userUrl = `${url}/users/login`;
  function logInHandler() {
    // send request to backend
    axios
      .post(userUrl, userInput)
      .then((response) => {
        console.log(response, "res");
        if (response.status === 200) {
          //navigate user profile page
          const token = response.data.accessToken;
          localStorage.setItem("userToken", token);
          // setTimeout()
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
    // handler in redux
  }
  return (
    <div>
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
      <Button onClick={logInHandler}>Log in</Button>
    </div>
  );
}
