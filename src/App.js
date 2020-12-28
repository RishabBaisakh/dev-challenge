import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import { setStocksData } from "./redux/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Table from "./components/MyTable";

function App({ auth, setStocksData }) {
  useEffect(() => {
    if (auth.token != null) {
      (async () => {
        const res = await fetch(
          "http://api.marketstack.com/v1/eod/2020-12-09?access_key=aa8f23728ea519f5821f43a6f4c68603&symbols=AAPL,TSLA,NFLX"
        );
        const resJSON = await res.json();

        const data = resJSON.data;
        setStocksData(data);
      })();
    }
  }, [auth.token]);

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
              <Chart title="All" />
              <Table title="All" />
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

export default connect(mapStateToProps, { setStocksData })(App);
