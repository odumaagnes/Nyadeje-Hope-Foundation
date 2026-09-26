import { useState } from 'react'
import { useToast } from '../context/ToastContext'

// Mirrors the original copyToClipboard(text, btnElement) behavior: copies
// text, shows the shared toast, and briefly swaps the button's own label
// to "Copied!" before reverting.
export default function CopyButton({ text, className, children }) {
  const { copyToClipboard } = useToast()
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    copyToClipboard(text, () => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button onClick={handleClick} className={className}>
      {copied ? (
        <>
          <iconify-icon icon="ph:check-bold" className="text-xs"></iconify-icon> Copied!
        </>
      ) : (
        children
      )}
    </button>
  )
}
