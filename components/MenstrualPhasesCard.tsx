'use client'

import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const MenstrualPhasesCard = () => {
  const [currentPhase, setCurrentPhase] = useState('Luteal Phase')

  const chartData = {
    labels: ['Menstrual', 'Follicular', 'Ovulation', 'Luteal'],
    datasets: [
      {
        data: [5, 6, 5, 12], // Days for each phase
        backgroundColor: [
          '#ef4444', // Red for menstrual
          '#3b82f6', // Blue for follicular
          '#10b981', // Green for ovulation
          '#f59e0b', // Orange for luteal
        ],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#374151',
          font: {
            size: 11,
          },
          padding: 15,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed} days`;
          }
        }
      }
    },
  }

  const phases = [
    {
      name: 'Menstrual',
      days: 'Day 1-5',
      description: 'Period phase',
      color: '#ef4444',
      symptoms: ['Cramps', 'Fatigue', 'Mood changes']
    },
    {
      name: 'Follicular',
      days: 'Day 6-11',
      description: 'Pre-ovulation',
      color: '#3b82f6',
      symptoms: ['Energy boost', 'Clear skin', 'Good mood']
    },
    {
      name: 'Ovulation',
      days: 'Day 12-16',
      description: 'Fertile window',
      color: '#10b981',
      symptoms: ['High energy', 'Increased libido', 'Cervical mucus']
    },
    {
      name: 'Luteal',
      days: 'Day 17-28',
      description: 'Post-ovulation',
      color: '#f59e0b',
      symptoms: ['PMS symptoms', 'Breast tenderness', 'Food cravings']
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Menstrual Cycle Phases</h3>
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Chart */}
        <div className="h-48">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
        
        {/* Phase Details */}
        <div className="space-y-3">
          <div className="text-center p-3 bg-primary-50 rounded-lg">
            <p className="text-sm text-gray-600">Current Phase</p>
            <p className="text-lg font-semibold text-primary-600">{currentPhase}</p>
          </div>
          
          <div className="space-y-2">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg border-l-4 transition-colors ${
                  currentPhase === phase.name
                    ? 'bg-primary-50 border-primary-500'
                    : 'bg-gray-50 border-gray-200'
                }`}
                style={{ borderLeftColor: phase.color }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{phase.name}</p>
                    <p className="text-xs text-gray-500">{phase.days}</p>
                  </div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: phase.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Current Phase Tips */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm font-medium text-blue-800 mb-1">Current Phase Tips:</p>
        <p className="text-xs text-blue-600">
          {currentPhase === 'Luteal Phase' && 'Focus on self-care and gentle exercise. Consider magnesium supplements for PMS symptoms.'}
          {currentPhase === 'Menstrual' && 'Rest well, stay hydrated, and use heating pads for cramps.'}
          {currentPhase === 'Follicular' && 'Great time for high-intensity workouts and trying new activities.'}
          {currentPhase === 'Ovulation' && 'Peak energy levels - perfect for social activities and important tasks.'}
        </p>
      </div>
    </div>
  )
}

export default MenstrualPhasesCard
