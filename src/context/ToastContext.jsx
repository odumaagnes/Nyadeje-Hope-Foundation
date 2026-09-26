import { createContext, useCallback, useContext, useRef, useState } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ message: 'Copied to clipboard!', type: 'check', show: false })
  const timeoutRef = useRef(null)

  const showToast = useCallback((message, type = 'check') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setToast({ message, type, show: true })
    timeoutRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, show: false }))
    }, 3500)
  }, [])

  const copyToClipboard = useCallback((text, onCopied) => {
    const done = () => {
      showToast('Copied to clipboard: ' + text, 'check')
      if (onCopied) {
        onCopied()
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        try { document.execCommand('copy') } catch (e) { /* noop */ }
        document.body.removeChild(textArea)
        done()
      })
    } else {
      done()
    }
  }, [showToast])

  return (
    <ToastContext.Provider value={{ toast, showToast, copyToClipboard }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
