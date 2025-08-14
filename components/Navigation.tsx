'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Heart, MessageCircle, LogOut } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { logout } = useAuth()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Period Tracker', href: '/period-tracker' },
    { name: 'Doctor Info', href: '/doctor-info' },
    { name: 'Notifications', href: '/notifications' },
    { name: 'Profile', href: '/profile' },
    { name: 'About Us', href: '/about' },
    { name: 'Newsletter', href: '/newsletter' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-primary-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-xl font-bold">HerWell</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-500 text-white'
                      : 'text-white hover:bg-primary-500 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={logout}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-500 hover:text-white transition-colors duration-200 flex items-center space-x-1"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-600">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary-500 text-white'
                    : 'text-white hover:bg-primary-500 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                logout()
                setIsMenuOpen(false)
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary-500 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}


    </nav>
  )
}

export default Navigation
