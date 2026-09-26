import useScrollAnimate from '../hooks/useScrollAnimate'

export default function About() {
  useScrollAnimate([])

  return (
    <>
{/* About Section — FULL STORY with Founder Passport */}
    <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div className="scroll-animate-left lg:sticky lg:top-28">
                    

                    {/* Larger contextual image below passport */}
                    <div className="mt-6 img-hover rounded-sm overflow-hidden">
                        <img src="/imagee5.jpeg" alt="Community work in Siaya County" className="w-full h-[550px] object-cover"/>
                    </div>
                </div>

                <div className="scroll-animate-right">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">About Us</span>
                    <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">
                        A Legacy of <span className="italic text-gold">Hopes, Compassion & Transformation</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-gold/40 mt-6"></div>

                    <p className="mt-6 text-gray-500 font-light leading-relaxed">
                        Nyadeje Hope Foundation was born from a deeply passionate journey of pain, resilience, love and compassion for vulnerable children in the society. The foundation was established by <strong className="text-natural-900 font-normal">Agnes Oduma</strong> — a widow, mother and social worker with over 30 years of working experience with vulnerable children and families in various Counties in Kenya.
                    </p>

                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        Growing up in a difficult environment after her parents separated, Agnes experienced firsthand the struggles that many children silently endure today — <strong className="text-natural-900 font-normal">poverty, emotional trauma, neglect and vulnerability to abuse</strong>. These painful experiences shaped her understanding of the challenges facing disadvantaged children and ignited a lifelong passion to protect, support and advocate for their rights.
                    </p>

                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        The foundation draws its name and inspiration from Agnes' late mother, <strong className="text-natural-900 font-normal">Jane Aoko Okuom</strong>, lovingly known as <em>Nyadeje</em> according to Luo cultural tradition. Nyadeje was a woman whose life was defined by sacrifice and compassion. Despite having little, she dedicated her life to helping orphans, needy children and struggling families within her communities. She sold local brew, cassava, maize and millet from her small farm just to ensure that children could attend school, have uniforms or receive basic needs. To her, no child deserved to be denied education because of poverty.
                    </p>

                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        While battling cancer stage 4, she continued to care for the vulnerable — including her step sister's grandchildren who had been orphaned after losing their mother to HIV-related complications. Her strength, selflessness and dedication to humanity remained unshaken until she passed on <strong className="text-natural-900 font-normal">13th December 2024</strong>. Her unwavering love for children became the foundation upon which Nyadeje Hope Foundation was built.
                    </p>

                    <div className="mt-8 p-6 bg-natural-50 border-l-2 border-gold rounded-r-sm">
                        <p className="font-serif italic text-natural-900 leading-relaxed">
                            "Every child deserves a chance to dream, to learn and become who God created them to be. Our mission is to stand beside the vulnerable and remind them that they are not forgotten."
                        </p>
                        <span className="block mt-3 text-[11px] uppercase tracking-[0.15em] text-gold">— Agnes Oduma, Founder</span>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-gold/40"></div>
                        <span className="text-[11px] uppercase tracking-[0.15em] text-gray-400 italic font-serif">"Nyadeje" — A name that means love</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="story" className="py-24 md:py-32 bg-natural-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto scroll-animate">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">Our Story</span>
                <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">
                    The Boy at the <span className="italic text-gold">School Gate</span>
                </h2>
                <div className="w-16 h-[1px] bg-gold/40 mt-6 mx-auto"></div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-2 scroll-animate-left img-hover rounded-sm overflow-hidden">
                    <img src="https://picsum.photos/seed/school-gate-children/700/900.jpg" alt="The moment that sparked it all" className="w-full h-[400px] lg:h-[500px] object-cover"/>
                </div>

                <div className="lg:col-span-3 scroll-animate-right">
                    <p className="text-gray-500 font-light leading-relaxed text-lg">
                        Nyadeje Hope Foundation was officially inspired into action after Agnes encountered a young boy sitting outside a school gate — he had been sent home over unpaid school fees.
                    </p>
                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        The child had torn uniforms and lacked the basic necessities to learn with dignity. That moment revealed a painful reality affecting many children across Siaya County — <strong className="text-natural-900 font-normal">children missing education not because they lack intelligence or dreams, but simply because they lack support</strong>.
                    </p>
                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        Upon asking why he was not in school, the boy explained that his school fees had not been paid. He went home, but his mother insisted that he go back to school — without money. The boy was an orphan; his father had died when he was barely a year old, and his mother had four other siblings to care for. He had a torn uniform and worn-out shoes.
                    </p>
                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        Visits to other primary schools around the village confirmed that the problems affecting needy children were similar — most lacked good school uniforms, bags and shoes. Some children walk barefoot to school because their guardians or parents cannot afford to buy shoes, and paying school fees remains an enormous challenge.
                    </p>
                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        These conditions have affected their learning in a negative way — sometimes they miss school entirely, which has contributed to a great drop in academic performance. Those who have torn uniforms, especially girls, have had their self-esteem deeply affected.
                    </p>

                    <div className="mt-8 p-6 bg-white border-l-2 border-gold rounded-r-sm">
                        <p className="font-serif italic text-natural-900 leading-relaxed">
                            "I survived what many children are going through today — poverty, emotional trauma, neglect and vulnerability to abuse. That survival gave me a calling — to be the voice of the voiceless, to stand where no one else would stand, and to ensure that no child in Siaya County is left behind."
                        </p>
                        <span className="block mt-3 text-[11px] uppercase tracking-[0.15em] text-gold">— Agnes Oduma, Founder</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

{/* Vision & Mission (moved here from the former Impact page) */}
    <section id="vision-mission" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/3 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto scroll-animate">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">Vision & Mission</span>
                <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">
                    Guided by <span className="italic text-gold">Purpose</span>
                </h2>
                <div className="w-16 h-[1px] bg-gold/40 mt-6 mx-auto"></div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="scroll-animate p-8 md:p-12 bg-natural-50 rounded-sm card-hover border border-transparent hover:border-gold/20">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                        <iconify-icon icon="ph:eye-bold" className="text-2xl text-gold"></iconify-icon>
                    </div>
                    <h3 className="font-serif text-2xl tracking-tight">Our Vision</h3>
                    <div className="w-10 h-[1px] bg-gold/40 mt-4"></div>
                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        To create a community where every child is valued, supported, and equipped to reach their full potential.
                    </p>
                </div>

                <div className="scroll-animate p-8 md:p-12 bg-natural-50 rounded-sm card-hover border border-transparent hover:border-gold/20" style={{transitionDelay: '0.15s'}}>
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                        <iconify-icon icon="ph:target-bold" className="text-2xl text-gold"></iconify-icon>
                    </div>
                    <h3 className="font-serif text-2xl tracking-tight">Our Mission</h3>
                    <div className="w-10 h-[1px] bg-gold/40 mt-4"></div>
                    <p className="mt-4 text-gray-500 font-light leading-relaxed">
                        Seeking to put God's love into action by providing education support, psychological support, and talent development to vulnerable children and advocating for their rights to achieve their full potential.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div className="mt-16 scroll-animate">
                <h3 className="font-serif text-2xl tracking-tight text-center mb-10">Our Core Values</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="value-card text-center p-5 border border-black/5 rounded-sm cursor-default">
                        <iconify-icon icon="ph:handshake-bold" className="text-2xl text-gold mb-3"></iconify-icon>
                        <span className="text-xs uppercase tracking-[0.1em] text-natural-900 font-normal">Non-Discrimination</span>
                    </div>
                    <div className="value-card text-center p-5 border border-black/5 rounded-sm cursor-default">
                        <iconify-icon icon="ph:heart-bold" className="text-2xl text-gold mb-3"></iconify-icon>
                        <span className="text-[11px] uppercase tracking-[0.1em] text-natural-900 font-normal leading-tight">Best Interest of the Child</span>
                    </div>
                    <div className="value-card text-center p-5 border border-black/5 rounded-sm cursor-default">
                        <iconify-icon icon="ph:cross-bold" className="text-2xl text-gold mb-3"></iconify-icon>
                        <span className="text-xs uppercase tracking-[0.1em] text-natural-900 font-normal">Christ Centered</span>
                    </div>
                    <div className="value-card text-center p-5 border border-black/5 rounded-sm cursor-default col-span-2 md:col-span-1">
                        <iconify-icon icon="ph:shield-check-bold" className="text-2xl text-gold mb-3"></iconify-icon>
                        <span className="text-[10px] uppercase tracking-[0.1em] text-natural-900 font-normal leading-tight">Responsive, Transparent & Accountable</span>
                    </div>
                    <div className="value-card text-center p-5 border border-black/5 rounded-sm cursor-default">
                        <iconify-icon icon="ph:plant-bold" className="text-2xl text-gold mb-3"></iconify-icon>
                        <span className="text-xs uppercase tracking-[0.1em] text-natural-900 font-normal">Sustainability</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Who We Help (moved here from the former Impact page) */}
    <section id="who-we-help" className="py-24 md:py-32 relative overflow-hidden bg-natural-900">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-40 h-40 border border-gold rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 border border-gold rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gold rounded-full"></div>
        </div>

        <div className="max-w-screen-xl mx-auto md:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto scroll-animate">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">Who We Help</span>
                <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight text-white">
                    Children Who Need Us <span className="italic text-gold-light">Most</span>
                </h2>
                <div className="w-16 h-[1px] bg-gold/40 mt-6 mx-auto"></div>
                <p className="mt-4 text-white/40 font-light leading-relaxed text-sm">
                    We believe that children deserve not only education but also love, protection, confidence and opportunity to discover their full potential — regardless of their background.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="scroll-animate p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                        <iconify-icon icon="ph:house-bold" className="text-lg text-gold"></iconify-icon>
                    </div>
                    <h4 className="text-white font-normal text-sm uppercase tracking-wide">Orphans & Vulnerable Children</h4>
                    <p className="mt-3 text-white/50 font-light text-sm leading-relaxed">
                        Children whose parents died from HIV-related complications or any other cause, left under the care of aging grandparents or relatives — whose socioeconomic status makes them vulnerable and open to exploitation and abuse.
                    </p>
                </div>

                <div className="scroll-animate p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-all duration-300 group" style={{transitionDelay: '0.1s'}}>
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                        <iconify-icon icon="ph:warning-bold" className="text-lg text-gold"></iconify-icon>
                    </div>
                    <h4 className="text-white font-normal text-sm uppercase tracking-wide">Children of Substance Abuse</h4>
                    <p className="mt-3 text-white/50 font-light text-sm leading-relaxed">
                        Children coming from an imbalanced family where alcohol and drug abuse have taken control of their parents' lives — and due to addiction, children are left without proper care.
                    </p>
                </div>

                <div className="scroll-animate p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-all duration-300 group" style={{transitionDelay: '0.2s'}}>
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                        <iconify-icon icon="ph:wallet-bold" className="text-lg text-gold"></iconify-icon>
                    </div>
                    <h4 className="text-white font-normal text-sm uppercase tracking-wide">Financially Unstable Families</h4>
                    <p className="mt-3 text-white/50 font-light text-sm leading-relaxed">
                        Children who have both parents, but they are financially unstable due to their health condition or an inadequate source of income — unable to provide for basic needs and education.
                    </p>
                </div>

                <div className="scroll-animate p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-all duration-300 group" style={{transitionDelay: '0.1s'}}>
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                        <iconify-icon icon="ph:person-arms-spread-bold" className="text-lg text-gold"></iconify-icon>
                    </div>
                    <h4 className="text-white font-normal text-sm uppercase tracking-wide">Single-Parent Households</h4>
                    <p className="mt-3 text-white/50 font-light text-sm leading-relaxed">
                        Children from single parents due to separation or divorce, where the parent left is unable to support them adequately — leaving gaps in both emotional and financial support.
                    </p>
                </div>

                <div className="scroll-animate p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-all duration-300 group" style={{transitionDelay: '0.2s'}}>
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                        <iconify-icon icon="ph:accessibility-bold" className="text-lg text-gold"></iconify-icon>
                    </div>
                    <h4 className="text-white font-normal text-sm uppercase tracking-wide">Children with Special Needs</h4>
                    <p className="mt-3 text-white/50 font-light text-sm leading-relaxed">
                        Children with special needs, including various forms of conditions such as autism, physical disability, and other challenges that require additional support, resources and understanding.
                    </p>
                </div>

                <div className="scroll-animate p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-all duration-300 group" style={{transitionDelay: '0.3s'}}>
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                        <iconify-icon icon="ph:shield-warning-bold" className="text-lg text-gold"></iconify-icon>
                    </div>
                    <h4 className="text-white font-normal text-sm uppercase tracking-wide">Abused or At-Risk Children</h4>
                    <p className="mt-3 text-white/50 font-light text-sm leading-relaxed">
                        Children who are at risk of being abused or have been abused — needing protection, psychological support, safe spaces and strong advocacy to ensure their rights are upheld.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
