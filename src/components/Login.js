import React from "react";
import "./Login.css";
import { getAuthenticationToken } from "../auth";
import { connect } from "react-redux";
import { setToken } from "../redux/actions";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import PropTypes from "prop-types";

function Login({ setToken }) {
  const signIn = () => {
    setToken(getAuthenticationToken());
  };

  return (
    <div className="login">
      <ShowChartIcon />
      <h1>Thinking about your next investment?</h1>
      <h3>Want to see what the market looks like?</h3>
      <button onClick={signIn}>Sign in to StockApp</button>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func,
};

export default connect(null, { setToken })(Login);
