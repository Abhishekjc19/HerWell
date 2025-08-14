'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart, Droplets, Coffee, Bed, Utensils, Activity } from 'lucide-react'

const HealthTipsCard = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0)

  const healthTips = [
    {
      title: 'Menstrual Phase Care',
      tips: [
        'Use a heating pad to ease cramps',
        'Stay hydrated to reduce bloating',
        'Choose iron-rich foods like lentils',
        'Rest and get enough sleep',
        'Wear comfy clothing',
        'Avoid caffeine if feeling anxious',
        'Track your flow and symptoms'
      ],
      icon: Heart,
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Fertility & Ovulation',
      tips: [
        'Track your basal body temperature',
        'Monitor cervical mucus changes',
        'Use ovulation predictor kits',
        'Maintain a healthy weight',
        'Reduce stress through meditation',
        'Get regular exercise',
        'Consider prenatal vitamins'
      ],
      icon: Activity,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Pregnancy Wellness',
      tips: [
        'Take folic acid supplements',
        'Stay active with prenatal yoga',
        'Eat small, frequent meals',
        'Stay hydrated throughout the day',
        'Get adequate sleep and rest',
        'Avoid raw fish and unpasteurized dairy',
        'Attend regular prenatal checkups'
      ],
      icon: Heart,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Postpartum Recovery',
      tips: [
        'Rest when your baby sleeps',
        'Stay hydrated and eat nutritious meals',
        'Practice gentle pelvic floor exercises',
        'Accept help from family and friends',
        'Monitor your emotional health',
        'Gradually return to exercise',
        'Attend postpartum checkups'
      ],
      icon: Bed,
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const currentTip = healthTips[currentTipIndex]

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % healthTips.length)
  }

  const prevTip = () => {
    setCurrentTipIndex((prev) => (prev - 1 + healthTips.length) % healthTips.length)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Menstrual Phase Care</h3>
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <Heart className="w-4 h-4 text-primary-600" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Illustration Section */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Background circle */}
            <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
              {/* Woman illustration placeholder */}
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-primary-600" />
                </div>
                <p className="text-sm text-primary-700 font-medium">Health & Wellness</p>
              </div>
            </div>
            
            {/* Floating health icons */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Droplets className="w-4 h-4 text-red-600" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Utensils className="w-4 h-4 text-green-600" />
            </div>
            <div className="absolute top-1/2 -left-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Bed className="w-4 h-4 text-blue-600" />
            </div>
            <div className="absolute top-1/2 -right-2 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <Activity className="w-4 h-4 text-yellow-600" />
            </div>
          </div>
        </div>
        
        {/* Tips Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-800">{currentTip.title}</h4>
            <div className="flex space-x-2">
              <button
                onClick={prevTip}
                className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-primary-600" />
              </button>
              <button
                onClick={nextTip}
                className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-primary-600" />
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            {currentTip.tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 ${currentTip.color} rounded-full mt-2 flex-shrink-0`}></div>
                <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          
          {/* AI Recommendation */}
          <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                <Activity className="w-3 h-3 text-white" />
              </div>
              <p className="text-sm font-medium text-primary-800">AI Recommendation</p>
            </div>
            <p className="text-xs text-primary-700">
              Based on your current cycle phase, these tips are personalized to help you feel your best. 
              Remember to listen to your body and adjust as needed.
            </p>
          </div>
        </div>
      </div>
      
      {/* Progress Indicator */}
      <div className="mt-6 flex justify-center space-x-2">
        {healthTips.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTipIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentTipIndex ? 'bg-primary-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HealthTipsCard
