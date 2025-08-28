'use client'

import { useEffect, useCallback } from 'react'

interface ErrorHandlerOptions {
  onError?: (error: Error) => void
  preventDefault?: boolean
}

export const useErrorHandler = (options: ErrorHandlerOptions = {}) => {
  const { onError, preventDefault = false } = options

  const handleError = useCallback((error: Error) => {
    console.error('Error caught by useErrorHandler:', error)
    
    if (onError) {
      onError(error)
    }
    
    if (preventDefault) {
      // Prevent the error from bubbling up
      return false
    }
    
    // Let the error bubble up to the global error boundary
    return true
  }, [onError, preventDefault])

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason)
      handleError(new Error(event.reason?.message || 'Promise rejected'))
    }

    const handleErrorEvent = (event: ErrorEvent) => {
      console.error('Global error event:', event.error)
      handleError(event.error || new Error(event.message))
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleErrorEvent)

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleErrorEvent)
    }
  }, [handleError])

  return { handleError }
} 