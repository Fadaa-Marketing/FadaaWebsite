'use client'

import { useEffect, useCallback } from 'react'
import { useTranslations } from 'next-intl'

interface ErrorHandlerOptions {
  onError?: (error: Error) => void
  preventDefault?: boolean
}

export const useErrorHandler = (options: ErrorHandlerOptions = {}) => {
  const { onError, preventDefault = false } = options
  const t = useTranslations('error')

  const handleError = useCallback((error: Error) => {
    console.error(t('errorCaught'), error)
    
    if (onError) {
      onError(error)
    }
    
    if (preventDefault) {
      return false
    }
    return true
  }, [onError, preventDefault, t])

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error(t('unhandledRejection'), event.reason)
      handleError(new Error(event.reason?.message || t('promiseRejected')))
    }

    const handleErrorEvent = (event: ErrorEvent) => {
      console.error(t('globalError'), event.error)
      handleError(event.error || new Error(event.message))
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleErrorEvent)

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleErrorEvent)
    }
  }, [handleError, t])

  return { handleError }
}
