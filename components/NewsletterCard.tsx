'use client'

import { useState } from 'react'
import { Mail, Send, Heart, Activity, Calendar, BookOpen } from 'lucide-react'

const NewsletterCard = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const newsletterTopics = [
    { id: 'fertility', name: 'Fertility & Pregnancy', icon: Heart, color: 'bg-pink-100 text-pink-600' },
    { id: 'cycle', name: 'Cycle Tracking', icon: Calendar, color: 'bg-blue-100 text-blue-600' },
    { id: 'wellness', name: 'Wellness Tips', icon: Activity, color: 'bg-green-100 text-green-600' },
    { id: 'nutrition', name: 'Nutrition Guide', icon: BookOpen, color: 'bg-purple-100 text-purple-600' },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && selectedTopics.length > 0) {
      setIsSubscribed(true)
      // Here you would typically send the data to your backend
      console.log('Subscribing:', { email, topics: selectedTopics })
    }
  }

  const toggleTopic = (topicId: string) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    )
  }

  if (isSubscribed) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Welcome to HerWell!</h3>
          <p className="text-gray-600 mb-4">
            You've successfully subscribed to our newsletter. We'll send you personalized health insights and tips based on your interests.
          </p>
          <div className="bg-primary-50 p-4 rounded-lg">
            <p className="text-sm text-primary-700">
              Your first newsletter will arrive in your inbox within 24 hours.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Mail className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Subscribe to Our Newsletter</h3>
        <p className="text-gray-600">
          Get the latest fertility health news, tips, and research delivered directly to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubscribe} className="space-y-6">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        {/* Topic Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Choose your interests (select all that apply):
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {newsletterTopics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => toggleTopic(topic.id)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedTopics.includes(topic.id)
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${topic.color} rounded-full flex items-center justify-center`}>
                    <topic.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{topic.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-primary-800 mb-2">What you'll receive:</h4>
          <ul className="text-xs text-primary-700 space-y-1">
            <li>• Weekly personalized health insights</li>
            <li>• Expert-backed fertility and wellness tips</li>
            <li>• Latest research on women's health</li>
            <li>• Exclusive content and resources</li>
          </ul>
        </div>

        {/* Subscribe Button */}
        <button
          type="submit"
          disabled={!email || selectedTopics.length === 0}
          className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>Subscribe to Newsletter</span>
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Unsubscribe at any time. Read our{' '}
          <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  )
}

export default NewsletterCard
