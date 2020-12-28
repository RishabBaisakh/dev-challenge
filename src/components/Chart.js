import React from "react";
import "./Chart.css";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Chart({ title, data }) {
  const { id } = useParams();

  if (title !== "All") {
    title = id;
    data = data.filter((obj) => obj.symbol === id);
  }

  let chartData = {
    labels: [],
    datasets: [
      {
        label: "High",
        data: [],
        backgroundColor: "rgba(20, 157, 220, 0.486)",
      },
      {
        label: "Low",
        data: [],
        backgroundColor: "rgba(0, 128, 0, 0.486)",
      },
    ],
  };

  data?.forEach((item) => {
    chartData.labels.push(item.symbol);
    chartData.datasets[0].data.push(item.high);
    chartData.datasets[1].data.push(item.low);
  });

  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: `${title} Data`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "right",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.stocks.data };
};

export default connect(mapStateToProps)(Chart);
