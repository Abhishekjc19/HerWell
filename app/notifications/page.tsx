'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { Bell, Calendar, Pill, CheckCircle, Clock } from 'lucide-react'

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'Next Appointment: Thu Aug 14 2025',
      time: '8/14/2025, 4:02:08 PM',
      isRead: false
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'Next Appointment:',
      time: '8/14/2025, 4:02:07 PM',
      isRead: false
    },
    {
      id: 3,
      type: 'medication',
      title: 'Medication Reminder',
      message: 'Medication Reminder: Gjvnbbvvh',
      time: '8/14/2025, 4:02:06 PM',
      isRead: false
    }
  ])

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return <Calendar className="w-5 h-5 text-blue-600" />
      case 'medication':
        return <Pill className="w-5 h-5 text-green-600" />
      default:
        return <Bell className="w-5 h-5 text-gray-600" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'appointment':
        return 'border-l-blue-500 bg-blue-50'
      case 'medication':
        return 'border-l-green-500 bg-green-50'
      default:
        return 'border-l-gray-500 bg-gray-50'
    }
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your health reminders and appointments</p>
          </div>

          {/* Notifications Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Your Notifications</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {notifications.filter(n => !n.isRead).length} unread
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {notifications.length === 0 ? (
                <div className="text-center py-8">
                  <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border-l-4 transition-all ${
                      notification.isRead 
                        ? 'border-l-gray-300 bg-gray-50 opacity-75' 
                        : getTypeColor(notification.type)
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="flex-shrink-0 mt-1">
                          {getIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-sm font-semibold text-gray-800">
                              {notification.title}
                            </h3>
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            {notification.message}
                          </p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{notification.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {!notification.isRead && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="px-3 py-1 bg-primary-600 text-white text-xs rounded-md hover:bg-primary-700 transition-colors flex items-center space-x-1"
                          >
                            <CheckCircle className="w-3 h-3" />
                            <span>Mark as Read</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Notification Settings */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Appointment Reminders</p>
                    <p className="text-xs text-gray-500">Get notified before appointments</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Medication Reminders</p>
                    <p className="text-xs text-gray-500">Reminders for medications and supplements</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Period Predictions</p>
                    <p className="text-xs text-gray-500">Notifications for upcoming periods</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Health Tips</p>
                    <p className="text-xs text-gray-500">Weekly wellness tips and insights</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
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

export default Notifications
