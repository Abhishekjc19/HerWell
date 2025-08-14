'use client'

import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const CycleAnalysisCard = () => {
  const [chartData, setChartData] = useState({
    labels: ['Cycle 1', 'Cycle 2', 'Cycle 3', 'Cycle 4', 'Cycle 5', 'Cycle 6', 'Cycle 7', 'Cycle 8', 'Cycle 9', 'Cycle 10'],
    datasets: [
      {
        label: '2024',
        data: [28, 26, 29, 27, 30, 28, 25, 29, 27, 28],
        borderColor: '#b06d82',
        backgroundColor: 'rgba(176, 109, 130, 0.1)',
        tension: 0.4,
      },
      {
        label: '2025',
        data: [27, 28, 26, 29, 27, 28, 30, 26, 28, 27],
        borderColor: '#e6c7d1',
        backgroundColor: 'rgba(230, 199, 209, 0.1)',
        tension: 0.4,
      },
    ],
  })

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#374151',
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 20,
        max: 35,
        ticks: {
          color: '#6b7280',
        },
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#6b7280',
        },
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
      },
    },
  }

  const stats = [
    { label: 'Shortest', value: '25 days', color: 'bg-green-100 text-green-800' },
    { label: 'Average', value: '27.5 days', color: 'bg-blue-100 text-blue-800' },
    { label: 'Longest', value: '30 days', color: 'bg-purple-100 text-purple-800' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Cycle Length Analysis</h3>
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </div>
      
      <div className="h-64 mb-4">
        <Line data={chartData} options={chartOptions} />
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} px-3 py-2 rounded-lg text-center`}>
            <p className="text-xs font-medium">{stat.label}</p>
            <p className="text-sm font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CycleAnalysisCard
