import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import * as UserActions from "../../redux/reducers/userReducer";

import { url } from "../../common/common";

export default function UserLogInGoogle() {
  const userUrl = `${url}/users/login-google`;
  const dispatch = useDispatch();

  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          axios
            .post(userUrl, { id_token: credentialResponse.credential })
            .then((response) => {
              if (response.status === 200) {
                localStorage.setItem("userToken", response.data.accessToken);
                dispatch(UserActions.getUserInformation(response.data.user));
              }
            })
            .catch((error) => {
              if (error.response.status === 400) {
                alert(error.response.data.message);
              }
            });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <p> log in with google</p>
    </div>
  );
}
