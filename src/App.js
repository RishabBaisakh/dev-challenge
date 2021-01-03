import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import { setStocksData } from "./redux/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Table from "./components/MyTable";
import getStocksData from "./marketstack";
import PropTypes from "prop-types";

function App({ auth, setStocksData }) {
  useEffect(() => {
    if (auth.token != null) {
      getStocksData().then((response) => {
        setStocksData(response);
      });
    }
  }, [auth.token, setStocksData]);

  return (
    <div className="app">
      {auth.token != null ? (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/:id">
              <Chart title="" />
              <Table title="" />
            </Route>
            <Route path="/">
              <Chart />
              <Table />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Login />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.token };
};

App.propTypes = {
  token: PropTypes.string,
};

export default connect(mapStateToProps, { setStocksData })(App);
