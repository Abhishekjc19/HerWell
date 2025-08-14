'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { User, Mail, Calendar, FileText, Save } from 'lucide-react'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'Aish',
    email: 'electricworld672@gmail.com',
    medicalHistory: '',
    menstrualHistory: '',
    trackingPurpose: 'period'
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically save to backend
    console.log('Profile updated:', formData)
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">User Profile</h1>
            <p className="text-gray-600">Manage your personal and health information</p>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tracking Purpose */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  You are using for:
                </label>
                <select
                  value={formData.trackingPurpose}
                  onChange={(e) => handleInputChange('trackingPurpose', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100"
                >
                  <option value="period">Period Tracking</option>
                  <option value="pregnancy">Pregnancy</option>
                  <option value="fertility">Fertility</option>
                  <option value="menopause">Menopause</option>
                  <option value="general">General Health</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100"
                  />
                  <User className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email:
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100"
                  />
                  <Mail className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Medical History */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical History:
                </label>
                <div className="relative">
                  <textarea
                    value={formData.medicalHistory}
                    onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                    disabled={!isEditing}
                    placeholder="e.g., Allergies, past surgeries, chronic conditions..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 resize-none"
                  />
                  <FileText className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Menstrual History */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Menstrual History:
                </label>
                <div className="relative">
                  <textarea
                    value={formData.menstrualHistory}
                    onChange={(e) => handleInputChange('menstrualHistory', e.target.value)}
                    disabled={!isEditing}
                    placeholder="e.g., Average cycle length, last period date, any irregularities..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 resize-none"
                  />
                  <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Submit Button */}
              {isEditing && (
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Update Profile</span>
                </button>
              )}
            </form>
          </div>

          {/* Additional Profile Sections */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Health Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Health Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Average Cycle Length</span>
                  <span className="text-sm font-medium text-gray-800">28 days</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Last Period</span>
                  <span className="text-sm font-medium text-gray-800">Aug 14, 2025</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Next Period</span>
                  <span className="text-sm font-medium text-gray-800">Sep 11, 2025</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Ovulation Day</span>
                  <span className="text-sm font-medium text-gray-800">Aug 28, 2025</span>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Email Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Push Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Newsletter</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Data Sharing</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
