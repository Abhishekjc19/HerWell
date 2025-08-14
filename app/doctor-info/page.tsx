'use client'

import Navigation from '@/components/Navigation'
import { Users, Calendar, MessageCircle, Star, MapPin, Phone, Mail } from 'lucide-react'

const DoctorInfo = () => {
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Doctor Info</h1>
            <p className="text-gray-600">Connect with trusted healthcare professionals</p>
          </div>

          {/* Coming Soon Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 card-hover">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctor Info</h2>
              <p className="text-lg text-gray-600 mb-6">
                Find information about gynecologists and nutritionists. This feature is coming soon!
              </p>
              
              {/* Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Find Doctors</h3>
                  <p className="text-sm text-gray-600">Browse verified gynecologists and specialists</p>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Book Appointments</h3>
                  <p className="text-sm text-gray-600">Schedule consultations online</p>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Expert Consultations</h3>
                  <p className="text-sm text-gray-600">Get professional health advice</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Doctor Profiles (Coming Soon) */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Healthcare Professionals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sample Doctor 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-primary-600 mb-2">Gynecologist & Obstetrician</p>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(4.9/5)</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>Women's Health Center, Downtown</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>dr.sarah@healthcenter.com</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Available for appointments
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Doctor 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Dr. Maria Rodriguez</h3>
                    <p className="text-sm text-green-600 mb-2">Nutritionist & Wellness Coach</p>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(4.8/5)</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>Wellness Nutrition Clinic</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>(555) 987-6543</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>dr.maria@wellness.com</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Online consultations available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Be the first to know when our doctor consultation feature launches. 
                Get early access and exclusive benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorInfo
