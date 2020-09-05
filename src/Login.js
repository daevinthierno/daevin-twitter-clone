import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    console.log("click");
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="data:image/png;base64,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" />
        <h1>Sign in to Daevin Twitter</h1>
        <p>Join our community</p>
        <Button onClick={signIn}>sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
