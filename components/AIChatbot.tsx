'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Heart,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Calendar,
  Activity
} from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'suggestion' | 'analysis'
  suggestions?: string[]
  analysis?: {
    type: 'irregularity' | 'tip' | 'prediction'
    confidence: number
    details: string
  }
}

const healthTips = [
  "Stay hydrated! Drinking 8-10 glasses of water daily can help regulate your cycle.",
  "Regular exercise can help reduce PMS symptoms and improve overall menstrual health.",
  "Consider tracking your symptoms to identify patterns and triggers.",
  "A balanced diet rich in iron and vitamins can support menstrual health.",
  "Stress management techniques like meditation may help regulate your cycle.",
  "Getting 7-9 hours of sleep can positively impact hormonal balance.",
  "Consider speaking with a healthcare provider about any concerning symptoms.",
  "Track your basal body temperature for better fertility awareness."
]

const irregularityPatterns = [
  {
    pattern: "irregular periods",
    symptoms: ["varying cycle lengths", "missed periods", "unpredictable timing"],
    possibleCauses: ["stress", "hormonal imbalance", "PCOS", "thyroid issues"],
    recommendations: ["track symptoms", "reduce stress", "consult healthcare provider"]
  },
  {
    pattern: "heavy bleeding",
    symptoms: ["excessive flow", "frequent pad changes", "fatigue"],
    possibleCauses: ["fibroids", "hormonal imbalance", "endometriosis"],
    recommendations: ["monitor flow", "iron-rich diet", "medical consultation"]
  },
  {
    pattern: "severe cramps",
    symptoms: ["debilitating pain", "back pain", "nausea"],
    possibleCauses: ["endometriosis", "fibroids", "adenomyosis"],
    recommendations: ["heat therapy", "pain management", "medical evaluation"]
  }
]

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your HerWell AI assistant. I can help you track your health, predict irregularities, and provide personalized tips. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
      suggestions: [
        "Track my period",
        "Check for irregularities", 
        "Get health tips",
        "Predict next period"
      ]
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = async (userMessage: string): Promise<Message> => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

    // Analyze for irregularity patterns
    const irregularityMatch = irregularityPatterns.find(pattern => 
      lowerMessage.includes(pattern.pattern) || 
      pattern.symptoms.some(symptom => lowerMessage.includes(symptom))
    )

    if (irregularityMatch) {
      return {
        id: Date.now().toString(),
        text: `I've analyzed your symptoms and detected a potential pattern related to ${irregularityMatch.pattern}.`,
        sender: 'bot',
        timestamp: new Date(),
        type: 'analysis',
        analysis: {
          type: 'irregularity',
          confidence: 0.85,
          details: `Based on your description, this could be related to: ${irregularityMatch.possibleCauses.join(', ')}. I recommend: ${irregularityMatch.recommendations.join(', ')}.`
        },
        suggestions: ["Track symptoms", "Schedule appointment", "Learn more"]
      }
    }

    // Health tips responses
    if (lowerMessage.includes('tip') || lowerMessage.includes('advice') || lowerMessage.includes('help')) {
      const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)]
      return {
        id: Date.now().toString(),
        text: randomTip,
        sender: 'bot',
        timestamp: new Date(),
        type: 'suggestion',
        suggestions: ["More tips", "Track my health", "Ask about symptoms"]
      }
    }

    // Period tracking responses
    if (lowerMessage.includes('period') || lowerMessage.includes('cycle') || lowerMessage.includes('track')) {
      return {
        id: Date.now().toString(),
        text: "I can help you track your menstrual cycle! Based on typical patterns, your next period might be in 14-28 days. Would you like me to help you set up tracking?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'analysis',
        analysis: {
          type: 'prediction',
          confidence: 0.75,
          details: "This is based on average cycle length. For more accurate predictions, I'll need to learn your specific patterns."
        },
        suggestions: ["Start tracking", "View calendar", "Set reminders"]
      }
    }

    // Default response
    return {
      id: Date.now().toString(),
      text: "I understand you're asking about your health. I can help you track your cycle, identify patterns, and provide personalized recommendations. What specific aspect would you like to focus on?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
      suggestions: ["Track symptoms", "Get health tips", "Check irregularities", "Learn about phases"]
    }
  }

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    try {
      const botResponse = await generateResponse(text)
      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      console.error('Error generating response:', error)
    } finally {
      setIsTyping(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">HerWell AI Assistant</h3>
                    <p className="text-xs opacity-90">Powered by AI</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start space-x-2 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        {message.sender === 'bot' && (
                          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}
                        {message.sender === 'user' && (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-gray-600" />
                          </div>
                        )}
                        
                        <div className={`rounded-2xl px-4 py-2 ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                          
                          {/* Analysis Display */}
                          {message.analysis && (
                            <div className="mt-2 p-2 bg-white bg-opacity-20 rounded-lg">
                              <div className="flex items-center text-xs mb-1">
                                {message.analysis.type === 'irregularity' && <AlertCircle className="w-3 h-3 mr-1" />}
                                {message.analysis.type === 'tip' && <Lightbulb className="w-3 h-3 mr-1" />}
                                {message.analysis.type === 'prediction' && <TrendingUp className="w-3 h-3 mr-1" />}
                                <span className="font-medium">
                                  {message.analysis.type === 'irregularity' && 'Irregularity Detected'}
                                  {message.analysis.type === 'tip' && 'Health Tip'}
                                  {message.analysis.type === 'prediction' && 'Prediction'}
                                </span>
                                <span className="ml-auto">{(message.analysis.confidence * 100).toFixed(0)}% confidence</span>
                              </div>
                              <p className="text-xs opacity-90">{message.analysis.details}</p>
                            </div>
                          )}
                          
                          <div className="text-xs opacity-70 mt-1">
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>

                      {/* Suggestions */}
                      {message.suggestions && message.sender === 'bot' && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-xs bg-white border border-primary-200 text-primary-600 px-3 py-1 rounded-full hover:bg-primary-50 transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Ask me anything about your health..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    disabled={isTyping}
                  />
                  <button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
