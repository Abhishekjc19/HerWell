'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock } from 'lucide-react'

const PregnancyRiskCard = () => {
  const [daysRemaining, setDaysRemaining] = useState(6)
  const [progress, setProgress] = useState(80) // 80% progress

  const expectedStart = new Date()
  expectedStart.setDate(expectedStart.getDate() + daysRemaining)
  
  const expectedEnd = new Date(expectedStart)
  expectedEnd.setDate(expectedEnd.getDate() + 5)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Next Period Prediction</h3>
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <Calendar className="w-4 h-4 text-primary-600" />
        </div>
      </div>
      
      {/* Semi-circular Progress Gauge */}
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32">
          {/* Background circle */}
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#b06d82"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 50}`}
              strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{daysRemaining}</div>
              <div className="text-xs text-gray-500">days</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Date predictions */}
      <div className="space-y-3">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Expected Start</span>
            <span className="text-sm font-medium text-gray-800">{formatDate(expectedStart)}</span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Expected End</span>
            <span className="text-sm font-medium text-gray-800">{formatDate(expectedEnd)}</span>
          </div>
        </div>
      </div>
      
      {/* Risk Level Indicator */}
      <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-green-800">Low Risk</span>
        </div>
        <p className="text-xs text-green-600 mt-1">
          Your cycle appears regular. Continue tracking for optimal health insights.
        </p>
      </div>
    </div>
  )
}

export default PregnancyRiskCard
