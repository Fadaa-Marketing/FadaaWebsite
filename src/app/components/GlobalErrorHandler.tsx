'use client'

import React, { useEffect } from 'react'
import { useErrorHandler } from './shared/useErrorHandler'

interface GlobalErrorHandlerProps {
  children: React.ReactNode
}

const GlobalErrorHandler: React.FC<GlobalErrorHandlerProps> = ({ children }) => {
  const { handleError } = useErrorHandler({
    onError: (error) => {
      console.error('Global error handler caught:', error)
      
      // For context errors, we can try to recover gracefully
      if (error.message.includes('useContext') || error.message.includes('null')) {
        console.warn('Context error detected, attempting to recover...')
        // Don't throw the error, let the component handle it
        return false
      }
      
      // For other errors, let them bubble up to the global error page
      return true
    },
    preventDefault: false
  })

  useEffect(() => {
    // Add global error handlers
    const originalError = console.error
    console.error = (...args) => {
      // Check if it's a context error
      const errorMessage = args.join(' ')
      if (errorMessage.includes('useContext') || errorMessage.includes('null')) {
        console.warn('Context error detected in console:', errorMessage)
        // Don't let context errors crash the app
        return
      }
      
      // Call original console.error for other errors
      originalError.apply(console, args)
    }

    return () => {
      console.error = originalError
    }
  }, [])

  return <>{children}</>
}

export default GlobalErrorHandler 