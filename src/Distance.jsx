import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './index.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  color: "#FFFFFF",
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Distance (km)',
      position: 'bottom',
      color: 'white',
    },
  },
  scales: {
    y:{
      border: {
        color: '#FFFFFF'
      },
      ticks: {
        color: '#FFFFFF'
      },
      grid: {
        drawTicks: false,
      }
    },
    x:{
      border: {
        color: '#FFFFFF'
      },
      ticks: {
        color: '#FFFFFF'
      },
      grid: {
        drawTicks: false,
      }
    }
  },
  borderColor: "#FFFFFF"
};

const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const data = {
  labels,
  datasets: [
    {
      label: 'Speed (km/hr)',
      data: [0, 11, 12, 13, 13, 14, 13, 11, 10, 9, 15],
      borderColor: 'rgb(255, 93, 239)',
      backgroundColor: 'rgba(255, 93, 239, 0.5)',
    },
    {
      label: 'Incline ( ˚ )',
      data: [11, 10, 9, 9, 12, 20, 24, 22, 20, 20, 22],
      borderColor: 'rgb(255, 239, 93)',
      backgroundColor: 'rgba(255, 239, 93, 0.5)',
    },
  ],
};

export function Distance() {

  return (
    <div className="stat-graph">
      <Line options={options} data={data}/>;
    </div>
  )
}
