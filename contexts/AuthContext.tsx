'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (userData: any) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing authentication on app load
    const checkAuth = () => {
      const token = localStorage.getItem('herwell_token')
      if (token) {
        // In a real app, you'd validate the token with your backend
        // For demo purposes, we'll simulate a user
        setUser({
          id: '1',
          email: 'user@example.com',
          name: 'Demo User'
        })
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const token = 'demo_token_' + Date.now()
        localStorage.setItem('herwell_token', token)
        
        setUser({
          id: '1',
          email: email,
          name: email.split('@')[0]
        })
        
        resolve()
      }, 1000)
    })
  }

  const signup = async (userData: any) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const token = 'demo_token_' + Date.now()
        localStorage.setItem('herwell_token', token)
        
        setUser({
          id: '1',
          email: userData.email,
          name: `${userData.firstName} ${userData.lastName}`
        })
        
        resolve()
      }, 1500)
    })
  }

  const logout = () => {
    localStorage.removeItem('herwell_token')
    setUser(null)
    router.push('/login')
  }

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
