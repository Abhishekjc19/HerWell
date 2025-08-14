'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import CycleAnalysisCard from '@/components/CycleAnalysisCard'
import PregnancyRiskCard from '@/components/PregnancyRiskCard'
import MenstrualPhasesCard from '@/components/MenstrualPhasesCard'
import IrregularityCard from '@/components/IrregularityCard'
import HealthTipsCard from '@/components/HealthTipsCard'
import NewsletterCard from '@/components/NewsletterCard'
import { Calendar, TrendingUp, Activity, Heart, Bell, Mail } from 'lucide-react'

export default function Home() {
  const [currentDate] = useState(new Date())

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 fade-in">
              Welcome to HerWell
            </h1>
            <p className="text-xl text-primary-600 mb-8 max-w-3xl mx-auto">
              PREDICT. PLAN. PROSPER - SMARTER WOMEN'S HEALTH
            </p>
          </div>
        </section>

        {/* Main Dashboard Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            {/* Top Row - Cycle Analysis and Pregnancy Risk */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <CycleAnalysisCard />
              <PregnancyRiskCard />
            </div>

            {/* Middle Row - Menstrual Phases and Irregularity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <MenstrualPhasesCard />
              <IrregularityCard />
            </div>

            {/* Bottom Row - Health Tips */}
            <div className="mb-8">
              <HealthTipsCard />
            </div>

            {/* Newsletter Section */}
            <div className="mb-8">
              <NewsletterCard />
            </div>

            {/* Feature Highlights */}
            <section className="text-center py-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Small Changes. Big Impact.
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                HerWell provides a simple but structured approach to track your cycles, pregnancy and postpartum wellness.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { icon: Calendar, title: 'Cycle Awareness', color: 'bg-primary-100' },
                  { icon: Heart, title: 'Pregnancy Guide', color: 'bg-secondary-100' },
                  { icon: Activity, title: 'Postpartum Recovery', color: 'bg-primary-100' },
                  { icon: TrendingUp, title: 'Data Insights', color: 'bg-secondary-100' },
                  { icon: Mail, title: 'Monthly Newsletter', color: 'bg-primary-100' },
                  { icon: Bell, title: 'Love & Support', color: 'bg-secondary-100' },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`${feature.color} p-4 rounded-lg card-hover cursor-pointer`}
                  >
                    <feature.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{feature.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-800">HerWell</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Your personalized health companion for every stage of womanhood.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/period-tracker" className="hover:text-primary-600">Period Tracker</a></li>
                  <li><a href="/doctor-info" className="hover:text-primary-600">Doctor Info</a></li>
                  <li><a href="/notifications" className="hover:text-primary-600">Notifications</a></li>
                  <li><a href="/profile" className="hover:text-primary-600">Profile</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Get Updates</h3>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Join our community for health tips and updates.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                Made with ❤️ & care for women's health 2025.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
