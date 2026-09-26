import { useToast } from '../context/ToastContext'

export default function Toast() {
  const { toast } = useToast()
  const icon = toast.type === 'check' ? 'ph:check-circle-bold' : toast.type === 'error' ? 'ph:x-circle-bold' : 'ph:info-bold'

  return (
    <div id="toast" className={`toast fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-natural-900 text-white px-6 py-4 rounded-sm shadow-2xl flex items-center gap-3 border border-gold/20 ${toast.show ? 'show' : ''}`}>
      <iconify-icon icon={icon} className="text-gold text-lg" id="toastIcon"></iconify-icon>
      <span id="toastMessage" className="text-sm font-light">{toast.message}</span>
    </div>
  )
}
