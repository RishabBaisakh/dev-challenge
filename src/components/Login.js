import React from "react";
import "./Login.css";
import { getAuthenticationToken } from "../auth";
import { connect } from "react-redux";
import { setToken } from "../redux/actions";

function Login({ setToken }) {
  const signIn = () => {
    setToken(getAuthenticationToken());
  };

  return (
    <div className="login">
      <h1>Thinking about your next investment?</h1>
      <h3>Want to see what the market looks like today?</h3>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default connect(null, { setToken })(Login);
