



import React from "react";
import { Chart } from "chart.js/auto";

import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";




Chart.register(CategoryScale);

const DoughnutChart =({chartData}:any)=>{

  const barChartOptions:any = {
    responsive: true,
    maintainAspectRatio:true, 
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    cutout: 100,
  };
    return(
      <Doughnut data={chartData} options={barChartOptions}  />
    )
}

export default DoughnutChart;