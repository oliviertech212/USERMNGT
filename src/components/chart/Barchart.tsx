

import React from "react";
import { Chart } from "chart.js/auto";

import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";




Chart.register(CategoryScale);

const BarChart =({chartData}:any)=>{

  const barChartOptions:any = {
    responsive: true,
    maintainAspectRatio:true, 
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };
    return(
      <Bar data={chartData} options={barChartOptions}  />
    )
}

export default BarChart;