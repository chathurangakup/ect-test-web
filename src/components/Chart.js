import React from 'react';
import { Chart as ChartJS, ArcElement, LinearScale,
    PointElement,
    LineElement, Tooltip, Legend } from 'chart.js';





import { Line,Pie, Scatter } from 'react-chartjs-2';

ChartJS.register(ArcElement,LinearScale, PointElement, LineElement, Tooltip, Legend);


export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  export const optionsScatter = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


const Chart = ({ type, data }) => {
 
   
  
  // Render the chart based on the provided type and data
  const renderChart = () => {
    // Implement the logic to render the specific chart based on the type
    // You can use popular chart libraries like Chart.js or Recharts to render different types of charts
    // This is just a placeholder code, replace it with the actual chart rendering logic
    switch (type) {
      case 'line':
        return <div><Line options={options} data={data} /></div>;
      case 'pie':
        return <div style={{width:400, height: 400}}><Pie  data={data} /></div>;

      default:
        return null;
    }
  };

  return (
    <div className="chart-container">
      {renderChart()}
    </div>
  );
};

export default Chart;
