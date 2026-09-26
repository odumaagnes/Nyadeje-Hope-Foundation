import useScrollAnimate from '../hooks/useScrollAnimate'
import CopyButton from '../components/CopyButton'

export default function Donate() {
  useScrollAnimate([])

  return (
    <>
{/* Donate Section */}
    <section id="donate" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/3 to-transparent pointer-events-none"></div>

        <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto scroll-animate">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">Make a Difference</span>
                <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">
                    Support Our <span className="italic text-gold">Children</span>
                </h2>
                <div className="w-16 h-[1px] bg-gold/40 mt-6 mx-auto"></div>
                <p className="mt-6 text-gray-500 font-light leading-relaxed">
                    Our model of operation is pinned on transparency and value for resources. Every resource we get will be directed to our beneficiaries and operations.
                </p>
            </div>
            

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="scroll-animate donation-card p-8 bg-white rounded-sm">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                        <iconify-icon icon="ph:money-bold" className="text-2xl text-gold"></iconify-icon>
                    </div>
                    <h4 className="font-serif text-xl tracking-tight">Financial Support</h4>
                    <div className="w-10 h-[1px] bg-gold/30 mt-3"></div>
                    <p className="mt-4 text-gray-500 font-light text-sm leading-relaxed">
                        Any individual or entity that wishes to partner with us can reach out through our number or email. Financial support can be for one single element of our programs, an entire program, or multiple programs.
                    </p>
                    <div className="mt-6 space-y-3">
                        <div className="p-3 bg-natural-50 rounded-sm">
                            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 block">M-Pesa</span>
                            <span className="text-sm font-normal text-natural-900 mt-1 block">0725 435 344</span>
                            <CopyButton text="0725435344" className="mt-1 text-[10px] uppercase tracking-wider text-gold hover:text-gold-dark transition-colors cursor-pointer flex items-center gap-1">
                                <iconify-icon icon="ph:copy" className="text-xs"></iconify-icon> Copy Number
                            </CopyButton>
                        </div>
                        <div className="p-3 bg-natural-50 rounded-sm">
                            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 block">Equity Bank</span>
                            <span className="text-sm font-normal text-natural-900 mt-1 block">1040197512071</span>
                            <span className="text-xs text-gray-400 block mt-0.5">Nyadeje Hope Foundation</span>
                        </div>
                    </div>
                </div>

                <div className="scroll-animate donation-card p-8 bg-white rounded-sm" style={{transitionDelay: '0.15s'}}>
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                        <iconify-icon icon="ph:package-bold" className="text-2xl text-gold"></iconify-icon>
                    </div>
                    <h4 className="font-serif text-xl tracking-tight">Material Donations</h4>
                    <div className="w-10 h-[1px] bg-gold/30 mt-3"></div>
                    <p className="mt-4 text-gray-500 font-light text-sm leading-relaxed">
                        We accept and welcome donations that are in line with our programs. Your in-kind contributions directly reach the children who need them most.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">School Uniforms</span>
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">Clothes</span>
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">Shoes</span>
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">Foodstuffs</span>
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">Books</span>
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">School Bags</span>
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">Sanitary Towels</span>
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">Inner Wears</span>
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">Laptops</span>
                        <span className="px-3 py-1.5 bg-natural-50 text-[10px] uppercase tracking-wider text-natural-900 rounded-sm border border-black/5">Projectors</span>

                    </div>
                </div>

                <div className="scroll-animate donation-card p-8 bg-white rounded-sm" style={{transitionDelay: '0.3s'}}>
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                        <iconify-icon icon="ph:graduation-cap-bold" className="text-2xl text-gold"></iconify-icon>
                    </div>
                    <h4 className="font-serif text-xl tracking-tight">Capacity Building</h4>
                    <div className="w-10 h-[1px] bg-gold/30 mt-3"></div>
                    <p className="mt-4 text-gray-500 font-light text-sm leading-relaxed">
                        We are open to getting support from a capacity-building and training perspective. Any intervention that can build the skills and knowledge of our staff and beneficiaries is welcome and encouraged.
                    </p>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3">
                            <iconify-icon icon="ph:check-circle-bold" className="text-gold flex-shrink-0"></iconify-icon>
                            <span className="text-sm text-gray-500 font-light">Skills training for staff</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <iconify-icon icon="ph:check-circle-bold" className="text-gold flex-shrink-0"></iconify-icon>
                            <span className="text-sm text-gray-500 font-light">Beneficiary empowerment programs</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <iconify-icon icon="ph:check-circle-bold" className="text-gold flex-shrink-0"></iconify-icon>
                            <span className="text-sm text-gray-500 font-light">Organizational development support</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <iconify-icon icon="ph:check-circle-bold" className="text-gold flex-shrink-0"></iconify-icon>
                            <span className="text-sm text-gray-500 font-light">Volunteer & mentorship opportunities</span>
                        </div>
                    </div>
                </div>
            </div>
             <div className="scroll-animate donation-card p-8 bg-white rounded-sm" style={{transitionDelay: '0.3s'}}>
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                        <iconify-icon icon="ph:graduation-cap-bold" className="text-2xl text-gold"></iconify-icon>
                    </div>
                    <h4 className="font-serif text-xl tracking-tight">Sponsoring program</h4>
                    <div className="w-10 h-[1px] bg-gold/30 mt-3"></div>
                    <p className="mt-4 text-gray-500 font-light text-sm leading-relaxed">
                        This is open to all well wishers both from <strong>local and international</strong>
                    </p>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3">
                            <iconify-icon icon="ph:check-circle-bold" className="text-gold flex-shrink-0"></iconify-icon>
                            <span className="text-sm text-gray-500 font-light">Sponsor a child, saves lives</span>
                        </div>
                       
                    </div>
                </div>

            <div className="mt-16 scroll-animate text-center p-10 md:p-16 bg-natural-900 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-20 -right-20 w-80 h-80 border border-gold rounded-full"></div>
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-gold rounded-full"></div>
                </div>
                <div className="relative z-10">
                    <iconify-icon icon="ph:heart-bold" className="text-4xl text-gold mb-4"></iconify-icon>
                    <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight">Your Support Changes Lives</h3>
                    <p className="mt-3 text-white/50 font-light max-w-xl mx-auto">
                        Whether through finances, materials, skills or sponsorships — every contribution helps a child stay in school, build confidence, and dream bigger.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:0725435344" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white text-xs uppercase tracking-[0.15em] font-normal hover:bg-gold-dark transition-colors duration-300 rounded-sm">
                            <iconify-icon icon="ph:phone-bold"></iconify-icon> Call Us
                        </a>
                        <CopyButton text="0725435344" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.15em] font-normal hover:bg-white/10 transition-colors duration-300 rounded-sm">
                            <iconify-icon icon="ph:copy"></iconify-icon> Copy M-Pesa Number
                        </CopyButton>
                        <a href="https://wa.me/254725435344?text=Hello%20Nyadeje%20Hope%20Foundation%2C%20I%20would%20like%20to%20support%20your%20work." target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-xs uppercase tracking-[0.15em] font-normal hover:bg-[#20BD5A] transition-colors duration-300 rounded-sm">
                            <iconify-icon icon="logos:whatsapp-icon"></iconify-icon> WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Mother's Tribute */}
    <section id="memory" className="py-24 md:py-32 bg-natural-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="scroll-animate-left order-2 lg:order-1">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">In Loving Memory</span>
                    <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">
                        Remembering <span className="italic text-gold">Nyadeje</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-gold/40 mt-6"></div>
                    <p className="mt-6 text-gray-500 font-light leading-relaxed">
                        <strong className="text-natural-900 font-normal">Jane Aoko Okuom</strong> — lovingly known as Nyadeje "<strong className="text-natural-900 font-normal">Minji - A mother to many</strong>" according to Luo cultural tradition — was a woman whose life was defined by sacrifice and compassion. Despite having little, she dedicated her life to helping orphans, needy children and struggling families within her communities.
                    </p>
                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        She sold local brew, cassava, maize and millet from her small farm just to ensure that children could attend school, have uniforms or receive basic needs. To her, no child deserved to be denied education because of poverty.
                    </p>
                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        While battling cancer stage 4, she continued to care for the vulnerable — including her step sister's grandchildren who had been orphaned after losing their mother to HIV-related complications. Her strength, selflessness and dedication to humanity remained unshaken until she passed on <strong className="text-natural-900 font-normal">13th December 2024</strong>.
                    </p>
                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        Nyadeje Hope Foundation is more than an organization — it is a continuation of a legacy built on sacrifice, faith and humanity. Her unwavering love for children became the foundation upon which this work stands.
                    </p>
                    <div className="mt-8 p-5 bg-white border border-gold/20 rounded-sm">
                        <p className="font-serif italic text-natural-900 leading-relaxed">
                            "She gave everything she had — every last shilling, every last grain — just so a child could have a chance. This foundation is her legacy living on."
                        </p>
                    </div>
                </div>

                <div className="scroll-animate-right img-hover rounded-sm overflow-hidden order-1 lg:order-2">
                    <img src="/imagee4.jpeg" alt="In memory of Nyadeje - Jane Aoko Okuom" className="w-full h-[450px] lg:h-[580px] object-cover"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
