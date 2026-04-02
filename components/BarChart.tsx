'use client'

import React from 'react'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import { Bar } from 'react-chartjs-2';

Chart.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

export const BarChart = ({ data, options}: {data: any; options?: any}) => {
  return <Bar data={data} options={options}></Bar>;
};

