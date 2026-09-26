export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254725435344?text=Hello%20Nyadeje%20Hope%20Foundation%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BD5A] transition-all duration-300"
      title="Chat on WhatsApp"
    >
      <iconify-icon icon="logos:whatsapp-icon" className="text-2xl"></iconify-icon>
    </a>
  )
}
