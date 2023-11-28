


import React from "react";
import { Chart } from "chart.js/auto";

import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const LineChart =( {chartData}:any)=>{


  const barChartOptions:any = {
    responsive: true,
    maintainAspectRatio:true, // Set to true to maintain aspect ratio
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };
    return(
    
       <Line data={chartData} options={barChartOptions}  />
   
      
    )
}

export default LineChart