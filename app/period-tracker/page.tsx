'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { Calendar, Edit, Trash2, Plus } from 'lucide-react'

const PeriodTracker = () => {
  const [activeTab, setActiveTab] = useState('track')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [periodHistory, setPeriodHistory] = useState([
    { id: 1, startDate: '2025-08-14', endDate: '2025-08-18' },
    { id: 2, startDate: '2025-07-17', endDate: '2025-07-21' },
    { id: 3, startDate: '2025-06-20', endDate: '2025-06-24' },
  ])

  const handleTrackPeriod = () => {
    if (startDate) {
      const newPeriod = {
        id: Date.now(),
        startDate,
        endDate: endDate || '',
      }
      setPeriodHistory([newPeriod, ...periodHistory])
      setStartDate('')
      setEndDate('')
    }
  }

  const handleDelete = (id: number) => {
    setPeriodHistory(periodHistory.filter(period => period.id !== id))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Period Tracker</h1>
            <p className="text-gray-600">Track your menstrual cycle and monitor your health</p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
              {[
                { id: 'track', label: 'Track Period' },
                { id: 'irregularity', label: 'Irregularity Detection' },
                { id: 'medication', label: 'Medication Reminder' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Track Period Tab */}
            {activeTab === 'track' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Period Start Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Period End Date (optional)
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleTrackPeriod}
                  disabled={!startDate}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Track Period</span>
                </button>

                {/* Period History */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Period History</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {periodHistory.map((period) => (
                      <div
                        key={period.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-800">
                            Start: {formatDate(period.startDate)}
                          </span>
                          {period.endDate && (
                            <span className="text-sm text-gray-600">
                              End: {formatDate(period.endDate)}
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(period.id)}
                            className="p-1 text-red-600 hover:bg-red-100 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Irregularity Detection Tab */}
            {activeTab === 'irregularity' && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Irregularity Detection</h3>
                  <p className="text-gray-600 mb-4">
                    Our AI analyzes your cycle patterns to detect irregularities and provide personalized insights.
                  </p>
                  <button className="bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                    Analyze My Cycle
                  </button>
                </div>
              </div>
            )}

            {/* Medication Reminder Tab */}
            {activeTab === 'medication' && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Medication Reminders</h3>
                  <p className="text-gray-600 mb-4">
                    Set up reminders for medications, supplements, and health appointments.
                  </p>
                  <button className="bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                    Set Up Reminders
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Additional Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Cycle Length</h3>
                <p className="text-2xl font-bold text-primary-600">28 days</p>
                <p className="text-sm text-gray-500">Average cycle length</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Next Period</h3>
                <p className="text-2xl font-bold text-green-600">6 days</p>
                <p className="text-sm text-gray-500">Expected start date</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Ovulation</h3>
                <p className="text-2xl font-bold text-blue-600">Day 14</p>
                <p className="text-sm text-gray-500">Fertile window</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeriodTracker
