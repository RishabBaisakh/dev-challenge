import React from "react";
import "./Navbar.css";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import { connect } from "react-redux";
import { setToken, setStocksData } from "../redux/actions";
import { Link } from "react-router-dom";
import { getAllSymbols } from "../redux/selectors";
import { useHistory } from "react-router-dom";

function Navbar({ setToken, setStacksData, links }) {
  const history = useHistory();

  const logout = () => {
    history.replace("/");
    setToken(null);
    setStocksData(null);
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <ShowChartIcon />
          <h1>STOCKAPP</h1>
        </Link>
      </div>
      <div className="navbar__right">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={`/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>

        <div className="navbar__rightLogout" onClick={logout}>
          <p>LOGOUT</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const links = getAllSymbols(state);
  return { links };
};

export default connect(mapStateToProps, { setToken, setStocksData })(Navbar);
