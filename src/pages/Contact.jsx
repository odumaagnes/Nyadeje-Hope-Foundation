import { useRef, useState } from 'react'
import useScrollAnimate from '../hooks/useScrollAnimate'
import { useToast } from '../context/ToastContext'

export default function Contact() {
  useScrollAnimate([])
  const { showToast } = useToast()
  const formRef = useRef(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const emailValue = form.querySelector('input[name="email"]').value
    form.querySelector('input[name="_replyto"]').value = emailValue

    setSubmitting(true)
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        showToast('Message sent successfully! We will get back to you soon.', 'check')
        form.reset()
      } else {
        showToast('Something went wrong. Please try WhatsApp instead.', 'error')
      }
    } catch (error) {
      showToast('Connection error. Please try WhatsApp instead.', 'error')
    }
    setSubmitting(false)
  }

  return (
    <>
{/* Contact Section */}
    <section id="contact" className="py-24 md:py-32 bg-natural-900">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div className="scroll-animate-left">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-green-400 font-bold">Get in Touch</span>
                    <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight text-white">
                        Let's Connect & <span className="italic text-gold-light">Partner</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-gold/40 mt-6"></div>
                    <p className="mt-6 text-green-400 font-light leading-relaxed">
                        For anyone who wishes to partner with us, they can do so through our number or email. Whether you want to donate, volunteer, partner, or simply learn more — we'd love to hear from you.
                    </p>

                    <div className="mt-10 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <iconify-icon icon="ph:phone-bold" className="text-blue-400"></iconify-icon>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block">Phone</span>
                                <a href="tel:0725435344" className="text-white hover:text-gold transition-colors duration-300 mt-1 block">0725 435 344</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <iconify-icon icon="logos:whatsapp-icon" className="text-lg"></iconify-icon>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block">WhatsApp</span>
                                <a href="https://wa.me/254725435344?text=Hello%20Nyadeje%20Hope%20Foundation%2C%20I%20would%20like%20to%20get%20in%20touch." target="_blank" className="text-white hover:text-[#25D366] transition-colors duration-300 mt-1 block">Chat with us on WhatsApp</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <iconify-icon icon="ph:envelope-bold" className="text-blue-400"></iconify-icon>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block">Email</span>
                                <a href="mailto:odumaagnes3@gmail.com" className="text-white hover:text-gold transition-colors duration-300 mt-1 block">odumaagnes3@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <iconify-icon icon="ph:bank-bold" className="text-blue-400"></iconify-icon>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block">Equity Bank</span>
                                <span className="text-white mt-1 block">A/C No: 1040197512071</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <iconify-icon icon="ph:map-pin-bold" className="text-blue-400"></iconify-icon>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block">Location</span>
                                <span className="text-white mt-1 block">Siaya County, Kenya</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-animate-right">
                    <form id="contactForm" ref={formRef} action="https://formspree.io/f/xwpkvqwp" method="POST" className="space-y-5" onSubmit={handleSubmit}>
                        <input type="text" name="_gotcha" style={{display: 'none'}}/>
                        <input type="hidden" name="_replyto" value=""/>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block mb-2">First Name</label>
                                <input type="text" name="first_name" required className="w-full bg-white border border-white/10 px-4 py-3 text-black text-sm font-light rounded-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder:text-black/40 italic" placeholder="First name"/>
                            </div>
                            <div>
                                <label className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block mb-2">Last Name</label>
                                <input type="text" name="last_name" required className="w-full bg-white border border-white/10 px-4 py-3 text-black text-sm font-light rounded-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder:text-black/40 italic" placeholder="Second Name"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block mb-2">Email Address</label>
                            <input type="email" name="email" required className="w-full bg-white border border-white/10 px-4 py-3 text-black text-sm font-light rounded-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder:text-black/40 italic" placeholder="Email"/>
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block mb-2">Phone Number</label>
                            <input type="tel" name="phone" className="w-full bg-white border border-white/10 px-4 py-3 text-black text-sm font-light rounded-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder:text-black/40 italic" placeholder="+254 7XX XXX XXX"/>
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block mb-2">I'd Like To...</label>
                            <select name="interest" required className="w-full bg-white border border-white/10 px-4 py-3 text-black text-sm font-light rounded-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer">
                                <option value="" className="bg-white">Select an option</option>
                                <option value="Make a Donation" className="bg-white">Make a Donation</option>
                                <option value="Volunteer" className="bg-white">Volunteer</option>
                                <option value="Become a Partner" className="bg-white">Become a Partner</option>
                                <option value="Donate Materials" className="white">Donate Materials</option>
                                <option value="Capacity Building" className="bg-white">Offer Capacity Building</option>
                                <option value="Get More Information" className="bg-white">Get More Information</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-[0.15em] text-green-400 font-bold block mb-2">Message</label>
                            <textarea rows="4" name="message" className="w-full bg-white border border-white/10 px-4 py-3 text-black text-sm font-light rounded-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder:text-black/40 italic resize-none" placeholder="Tell us how you'd like to help..."></textarea>
                        </div>
                        <button type="submit" id="submitBtn" disabled={submitting} className="w-full px-8 py-4 bg-gold text-green-400 font-bold text-white text-xs uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300 rounded-sm flex items-center justify-center gap-2">
                            <span id="submitText">{submitting ? 'Sending...' : 'Send Message'}</span>
                            <iconify-icon icon={submitting ? 'ph:spinner' : 'ph:arrow-right-bold'} className={submitting ? 'text-sm animate-spin' : 'text-sm'} id="submitIcon"></iconify-icon>
                        </button>
                    </form>

                    <div className="mt-5 text-center">
                        <span className="text-white/20 text-xs">or reach out directly</span>
                        <a href="https://wa.me/254725435344?text=Hello%20Nyadeje%20Hope%20Foundation%2C%20I%20would%20like%20to%20get%20in%20touch%20about%20your%20programs." target="_blank" className="inline-flex items-center gap-2 mt-2 text-[#25D366] hover:text-[#20BD5A] text-xs uppercase tracking-wider transition-colors">
                            <iconify-icon icon="logos:whatsapp-icon" className="text-base"></iconify-icon> Send a WhatsApp Message
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
