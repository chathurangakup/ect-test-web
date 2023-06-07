import React, { useState } from "react";
import "./Home.css"; // Add custom CSS styles for Home component
import upload from "../assests/upload.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Chart from "../components/Chart";

import CustomButton from "../components/CustomButton/CustomButton";



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {

  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },

};

const chartData = [
  // Data for the charts
  // Example data for each chart
  { type: 'line', data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Chart 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "red",
      },
      {
        label: "Chart 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "blue",
      },
    ],

   } },
  { type: 'pie', data :{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  
},
  { type: 'line', data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Chart 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "red",
      },
      {
        label: "Chart 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "blue",
      },
    ],

   } },
  { type: 'line',  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Chart 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "red",
      },
      {
        label: "Chart 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "blue",
      },
    ],

   }  },
  { type: 'line', data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Chart 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "red",
      },
      {
        label: "Chart 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "blue",
      },
    ],

   } },
];


const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Chart 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "red",
    },
    {
      label: "Chart 2",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: "blue",
    },
  ],
};
const Home = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [buttonclick, setButtonClick] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImages(() => [imageUrl]);
  };

  const handleClick = () => {
    setButtonClick(true);
  };

  return (
    <div>
      <div className="home-container">
        <div className="content-container">
          {buttonclick == false ? (
            <div className="content-container-uploadimg">
              <div className="uploaded-images">
                {uploadedImages.map((imageUrl, index) => (
                  <div className="uploaded-image-container" key={index}>
                    <img
                      src={imageUrl}
                      alt={`Uploaded ${index + 1}`}
                      className="uploaded-image"
                    />
                  </div>
                ))}
              </div>
              <p>choose ecg file to click this button</p>
              <div className="button-container">
                <label htmlFor="image-upload" className="button-label">
                  <img src={upload} alt="Button" className="button-image" />
                </label>

                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>
              {uploadedImages.length != 0 ? (
                <div className="button-upload">
                  <CustomButton onClick={handleClick}>Upload ECG</CustomButton>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="charts-container">
              {chartData.map((chart, index) => (
                <div className="chart-item" key={index}>
                  <Chart type={chart.type} data={chart.data} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
