'use client'

import React, { useEffect } from 'react'
import { useErrorHandler } from './shared/useErrorHandler'
import { useTranslations } from 'next-intl'

interface GlobalErrorHandlerProps {
  children: React.ReactNode
}

const GlobalErrorHandler: React.FC<GlobalErrorHandlerProps> = ({ children }) => {
  const t = useTranslations('globalErrorHandler')

  const { handleError } = useErrorHandler({
    onError: (error) => {
      console.error(t('caught'), error)
      
      // For context errors, we can try to recover gracefully
      if (error.message.includes('useContext') || error.message.includes('null')) {
        console.warn(t('contextErrorDetected'))
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
        console.warn(t('contextErrorConsole'), errorMessage)
        // Don't let context errors crash the app
        return
      }
      
      // Call original console.error for other errors
      originalError.apply(console, args)
    }

    return () => {
      console.error = originalError
    }
  }, [t])

  return <>{children}</>
}

export default GlobalErrorHandler
