'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { Mail, Send, BookOpen, Heart, Activity, Calendar } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      console.log('Newsletter subscription:', email)
    }
  }

  const newsletterArticles = [
    {
      id: 1,
      title: 'Nutrition Tips For Pregnancy',
      published: '4/14/2025',
      excerpt: 'Discover the essential nutrients your body needs during pregnancy. Learn about folate, iron, and omega-3 fatty acids that support your baby\'s development. Get meal plans and recipes designed for expectant mothers.',
      category: 'Pregnancy',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding Your Menstrual Cycle',
      published: '4/10/2025',
      excerpt: 'A comprehensive guide to the four phases of your menstrual cycle. Learn how to track your cycle effectively and understand what your body is telling you during each phase.',
      category: 'Cycle Health',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Fertility Awareness Methods',
      published: '4/7/2025',
      excerpt: 'Explore natural family planning methods and fertility awareness techniques. Understand your fertile window and how to optimize your chances of conception.',
      category: 'Fertility',
      readTime: '6 min read'
    }
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Fertility Health Newsletter</h1>
            <p className="text-lg text-gray-600">Stay informed with expert advice and the latest in women's health</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Article */}
              <div className="bg-white rounded-lg shadow-lg p-6 card-hover mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-primary-600 font-medium">Featured Article</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Nutrition Tips For Pregnancy
                </h2>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>Published: 4/14/2025</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover the essential nutrients your body needs during pregnancy. Learn about folate, iron, and omega-3 fatty acids that support your baby's development. Get meal plans and recipes designed for expectant mothers.
                </p>
                
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Read More</span>
                </button>
              </div>

              {/* Recent Articles */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Articles</h3>
                
                {newsletterArticles.slice(1).map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-lg p-6 card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="w-8 h-8 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {article.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Published: {article.published}</span>
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Newsletter Subscription */}
              <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 text-sm">
                    Get the latest fertility health news, tips, and research delivered directly to your inbox.
                  </p>
                </div>

                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Subscribe</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Welcome!</h3>
                    <p className="text-gray-600 text-sm">
                      You've successfully subscribed to our newsletter. Check your inbox for the latest updates.
                    </p>
                  </div>
                )}
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Pregnancy', icon: Heart, count: 12 },
                    { name: 'Fertility', icon: Activity, count: 8 },
                    { name: 'Cycle Health', icon: Calendar, count: 15 },
                    { name: 'Nutrition', icon: BookOpen, count: 10 },
                    { name: 'Wellness', icon: Heart, count: 6 }
                  ].map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <category.icon className="w-4 h-4 text-primary-600" />
                        <span className="text-sm text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Topics</h3>
                <div className="space-y-2">
                  {[
                    'Prenatal Vitamins Guide',
                    'Ovulation Tracking Methods',
                    'PCOS Management',
                    'Menstrual Cycle Phases',
                    'Fertility Diet Tips',
                    'Pregnancy Exercise'
                  ].map((topic, index) => (
                    <div key={index} className="text-sm text-primary-600 hover:text-primary-700 cursor-pointer py-1">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
