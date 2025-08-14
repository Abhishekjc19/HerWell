'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle, CheckCircle, Clock, Activity } from 'lucide-react'

const IrregularityCard = () => {
  const [prediction, setPrediction] = useState<string | null>(null)
  const [confidence, setConfidence] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    // Simulate AI analysis
    setIsAnalyzing(true)
    const timer = setTimeout(() => {
      const predictions = [
        { text: 'Regular Cycle', confidence: 85, status: 'good' },
        { text: 'Slight Irregularity', confidence: 65, status: 'warning' },
        { text: 'No Data Available', confidence: 0, status: 'none' }
      ]
      
      const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)]
      setPrediction(randomPrediction.text)
      setConfidence(randomPrediction.confidence)
      setIsAnalyzing(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const getStatusColor = () => {
    if (!prediction) return 'bg-gray-100 text-gray-600'
    if (prediction === 'Regular Cycle') return 'bg-green-100 text-green-800'
    if (prediction === 'Slight Irregularity') return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  const getStatusIcon = () => {
    if (!prediction) return <Clock className="w-6 h-6" />
    if (prediction === 'Regular Cycle') return <CheckCircle className="w-6 h-6" />
    if (prediction === 'Slight Irregularity') return <AlertTriangle className="w-6 h-6" />
    return <Activity className="w-6 h-6" />
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Predicted Irregularity Condition</h3>
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <Activity className="w-4 h-4 text-primary-600" />
        </div>
      </div>
      
      {/* Main Prediction Display */}
      <div className="text-center mb-6">
        {isAnalyzing ? (
          <div className="space-y-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
            <p className="text-sm text-gray-600">Analyzing your cycle data...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className={`w-24 h-24 ${getStatusColor()} rounded-full mx-auto flex items-center justify-center`}>
              {getStatusIcon()}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 mb-1">
                {prediction || 'No Data'}
              </p>
              {confidence > 0 && (
                <p className="text-sm text-gray-600">
                  Confidence: {confidence}%
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Analysis Details */}
      <div className="space-y-3">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Based on latest symptoms and cycle data</p>
          <p className="text-xs text-gray-500">
            According to your inputs, your cycle condition is predicted as {prediction || 'N/A'}
          </p>
        </div>
        
        {/* AI Insights */}
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <p className="text-sm font-medium text-blue-800 mb-2">AI Insights:</p>
          <ul className="text-xs text-blue-700 space-y-1">
            {prediction === 'Regular Cycle' && (
              <>
                <li>• Your cycle length is within normal range (25-35 days)</li>
                <li>• Consistent patterns suggest good hormonal balance</li>
                <li>• Continue tracking for optimal health monitoring</li>
              </>
            )}
            {prediction === 'Slight Irregularity' && (
              <>
                <li>• Minor variations detected in cycle length</li>
                <li>• Consider stress management and sleep quality</li>
                <li>• Monitor for 2-3 more cycles before concern</li>
              </>
            )}
            {(!prediction || prediction === 'No Data Available') && (
              <>
                <li>• Insufficient data for accurate prediction</li>
                <li>• Track your next 2-3 cycles for better analysis</li>
                <li>• Log symptoms and cycle dates regularly</li>
              </>
            )}
          </ul>
        </div>
        
        {/* Recommendations */}
        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <p className="text-sm font-medium text-green-800 mb-2">Recommendations:</p>
          <ul className="text-xs text-green-700 space-y-1">
            <li>• Track your cycle consistently for 3 months</li>
            <li>• Log symptoms, mood, and energy levels</li>
            <li>• Maintain a healthy lifestyle with regular exercise</li>
            <li>• Consider consulting a healthcare provider if concerned</li>
          </ul>
        </div>
      </div>
      
      {/* Action Button */}
      <button className="w-full mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
        Update Cycle Data
      </button>
    </div>
  )
}

export default IrregularityCard
