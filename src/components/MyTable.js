import React from "react";
import "./MyTable.css";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router-dom";

function MyTable({ title, data }) {
  const { id } = useParams();

  if (title !== "All") {
    title = id;
    data = data.filter((obj) => obj.symbol === id);
  }

  return (
    <div className="myTable">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.symbol}
                </TableCell>
                <TableCell align="right">{item.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.stocks.data };
};

export default connect(mapStateToProps)(MyTable);
