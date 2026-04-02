'use client'

import React from 'react'
import {
    Chart,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,

} from 'chart.js'
import { Line } from 'react-chartjs-2';



Chart.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
);

export const LineChart = ({ data, options}: {data: any; options?: any}) => {
    return <Line data={data} options={options}></Line>;
}