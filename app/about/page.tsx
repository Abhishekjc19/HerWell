'use client'

import Navigation from '@/components/Navigation'
import { Heart, Calendar, Activity, MessageCircle, Mail, Star, Users, Shield } from 'lucide-react'

const AboutUs = () => {
  const features = [
    {
      title: 'Pregnancy & Postpartum Tracker',
      description: 'Monitor fetal development with weekly updates and receive personalized postpartum recovery tips and reminders.',
      icon: Heart,
      color: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'Menopause Insights',
      description: 'Track perimenopause and menopause symptoms over time. Get expert-backed advice on hormone balance and lifestyle changes.',
      icon: Activity,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Period & Menstrual Health Tracker',
      description: 'Predict your next period and track cycle irregularities. Get timely reminders to stay prepared for your cycle.',
      icon: Calendar,
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'IVF & Fertility Tracker',
      description: 'Track your ovulation and fertility window with precision. Log your IVF cycle progress and check according to your embryo transfer.',
      icon: Activity,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Smart Notifications & Reminders',
      description: 'Receive personalized alerts for upcoming periods, ovulation, fertility windows, and doctor visits.',
      icon: MessageCircle,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'A compassionate, 24/7 assistant to answer your health-related queries. Covers menstruation, pregnancy, postpartum care, fertility, and menopause.',
      icon: MessageCircle,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: 'Weekly Wellness Newsletter',
      description: 'Stay informed with expert advice on reproductive health, self-care, fitness, and mental well-being.',
      icon: Mail,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Doctor\'s Information (Coming Soon!)',
      description: 'We\'re working on a feature that will allow you to connect with trusted gynecologists and healthcare professionals for expert consultations and appointment booking.',
      icon: Users,
      color: 'bg-gray-100 text-gray-600'
    }
  ]

  const stats = [
    { label: 'Women Supported', value: '10,000+', icon: Users },
    { label: 'Health Tips Shared', value: '50,000+', icon: Heart },
    { label: 'Cycles Tracked', value: '100,000+', icon: Calendar },
    { label: 'AI Conversations', value: '25,000+', icon: MessageCircle }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <p className="text-xl text-primary-600 font-medium">PREDICT. PLAN. PROSPER - SMARTER WOMEN'S HEALTH</p>
              <Star className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Welcome to HerWell, your all-in-one Maternal and Menstrual Health Companion. 
              We support you through every stage of your health journey - from cycle tracking to pregnancy, motherhood, and beyond.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 card-hover">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide a Safe, Inclusive, and Scientifically-backed Platform that prioritizes women's health and well-being. 
                We cover everything from Menstruation, Pregnancy, Postpartum Recovery, Fertility, Menopause, and Reproductive Health.
              </p>
              <p className="text-lg text-gray-600">
                We offer personalized Tracking, Expert Insights, and a Community-driven Space for informed health decisions.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">✨ What HerWell Offers</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 card-hover text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <p className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">
                At HerWell, we believe that your health journey deserves care, precision, and compassion. 
                From the first period to motherhood and beyond, we're here to make every phase smoother, healthier, and more empowering.
              </p>
              <p className="text-xl font-semibold text-primary-600">
                Your Health. Your Journey. Your HerWell.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 card-hover">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
              <p className="text-gray-600 mb-6">
                We're a dedicated team of healthcare professionals, developers, and women's health advocates 
                committed to creating the best possible experience for our users.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Healthcare Experts</h3>
                  <p className="text-sm text-gray-600">Gynecologists, nutritionists, and wellness specialists</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Activity className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Technology Team</h3>
                  <p className="text-sm text-gray-600">AI specialists and software engineers</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Community Support</h3>
                  <p className="text-sm text-gray-600">Dedicated support and community managers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
