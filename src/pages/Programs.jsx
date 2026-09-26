import useScrollAnimate from '../hooks/useScrollAnimate'

export default function Programs() {
  useScrollAnimate([])

  return (
    <>
{/* Programs / What We Do */}
    <section id="programs" className="py-24 md:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto scroll-animate">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">Our Programs</span>
                <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">
                    What We <span className="italic text-gold">Do</span>
                </h2>
                <div className="w-16 h-[1px] bg-gold/40 mt-6 mx-auto"></div>
                <p className="mt-6 text-gray-500 font-light leading-relaxed">
                    Today the foundation exists to restore hope, dignity and opportunity to vulnerable children through education support, psychosocial support and emotional care, advocacy for their rights, and community empowerment programs.
                </p>
            </div>

            <div className="mt-16 space-y-0">
                <div className="scroll-animate group border-t border-black/10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-natural-50 transition-colors duration-300 px-4 -mx-4 rounded-sm">
                    <div className="md:col-span-1">
                        <span className="font-serif text-3xl text-gold/40 group-hover:text-gold transition-colors duration-300">01</span>
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight">Education Support</h4>
                    </div>
                    <div className="md:col-span-5">
                        <p className="text-gray-500 font-light leading-relaxed">
                            Enhancing smooth learning for at least 100 needy pupils by providing uniforms, shoes, and school bags. Paying school fees for at least 20 students in various secondary schools yearly.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                        <iconify-icon icon="ph:graduation-cap-bold" className="text-3xl text-gold/30 group-hover:text-gold transition-colors duration-300"></iconify-icon>
                    </div>
                </div>

                <div className="scroll-animate group border-t border-black/10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-natural-50 transition-colors duration-300 px-4 -mx-4 rounded-sm" style={{transitionDelay: '0.1s'}}>
                    <div className="md:col-span-1">
                        <span className="font-serif text-3xl text-gold/40 group-hover:text-gold transition-colors duration-300">02</span>
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight">Psychological & Emotional Care</h4>
                    </div>
                    <div className="md:col-span-5">
                        <p className="text-gray-500 font-light leading-relaxed">
                            Providing psychological support and emotional care to children who have experienced trauma, neglect, or abuse — helping them heal and build resilience for the future.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                        <iconify-icon icon="ph:heart-bold" className="text-3xl text-gold/30 group-hover:text-gold transition-colors duration-300"></iconify-icon>
                    </div>
                </div>

                <div className="scroll-animate group border-t border-black/10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-natural-50 transition-colors duration-300 px-4 -mx-4 rounded-sm" style={{transitionDelay: '0.2s'}}>
                    <div className="md:col-span-1">
                        <span className="font-serif text-3xl text-gold/40 group-hover:text-gold transition-colors duration-300">03</span>
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight">Rights Awareness & Advocacy</h4>
                    </div>
                    <div className="md:col-span-5">
                        <p className="text-gray-500 font-light leading-relaxed">
                            Empowering children to know their rights and the actions to take when their rights have been violated — giving them a voice and the courage to use it.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                        <iconify-icon icon="ph:megaphone-bold" className="text-3xl text-gold/30 group-hover:text-gold transition-colors duration-300"></iconify-icon>
                    </div>
                </div>

                <div className="scroll-animate group border-t border-black/10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-natural-50 transition-colors duration-300 px-4 -mx-4 rounded-sm" style={{transitionDelay: '0.3s'}}>
                    <div className="md:col-span-1">
                        <span className="font-serif text-3xl text-gold/40 group-hover:text-gold transition-colors duration-300">04</span>
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight">Talent Development Camps</h4>
                    </div>
                    <div className="md:col-span-5">
                        <p className="text-gray-500 font-light leading-relaxed">
                            Holding talent development camps during holidays where children are taught and nurtured in different fields like art, music, technology, and more.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                        <iconify-icon icon="ph:palette-bold" className="text-3xl text-gold/30 group-hover:text-gold transition-colors duration-300"></iconify-icon>
                    </div>
                </div>

                <div className="scroll-animate group border-t border-b border-black/10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-natural-50 transition-colors duration-300 px-4 -mx-4 rounded-sm" style={{transitionDelay: '0.4s'}}>
                    <div className="md:col-span-1">
                        <span className="font-serif text-3xl text-gold/40 group-hover:text-gold transition-colors duration-300">05</span>
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight">Community Empowerment</h4>
                    </div>
                    <div className="md:col-span-5">
                        <p className="text-gray-500 font-light leading-relaxed">
                            Organizing parents' engagement forums in the community — training and sensitizing parents on good parenting, substance abuse, child abuse prevention, and health talks.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                        <iconify-icon icon="ph:users-three-bold" className="text-3xl text-gold/30 group-hover:text-gold transition-colors duration-300"></iconify-icon>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Our Objectives (moved here from the former Impact page) */}
    <section id="objectives" className="py-24 md:py-32 bg-natural-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto scroll-animate">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">Our Objectives</span>
                <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">
                    Building a <span className="italic text-gold">Brighter Future</span>
                </h2>
                <div className="w-16 h-[1px] bg-gold/40 mt-6 mx-auto"></div>
                <p className="mt-6 text-gray-500 font-light leading-relaxed">
                    These are the concrete goals that guide every effort of Nyadeje Hope Foundation — measurable, meaningful, and rooted in the real needs of the children we serve.
                </p>
            </div>

            <div className="mt-16 space-y-0">
                <div className="scroll-animate objective-item border-t border-black/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start px-4 -mx-4 rounded-sm">
                    <div className="md:col-span-1 flex-shrink-0">
                        <div className="obj-number w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center transition-all duration-400">
                            <span className="font-serif text-lg text-gold">1</span>
                        </div>
                    </div>
                    <div className="md:col-span-11">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight text-natural-900">Enhance Smooth Learning for Needy Pupils</h4>
                        <p className="mt-3 text-gray-500 font-light leading-relaxed max-w-3xl">
                            Enhancing smooth learning for at least <strong className="text-natural-900 font-normal">100 needy pupils yearly</strong> by buying uniforms, shoes, and school bags, and paying fees for at least <strong className="text-natural-900 font-normal">20 students in various secondary schools yearly</strong> — removing the barriers that keep children out of the classroom.
                        </p>
                    </div>
                </div>

                <div className="scroll-animate objective-item border-t border-black/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start px-4 -mx-4 rounded-sm" style={{transitionDelay: '0.1s'}}>
                    <div className="md:col-span-1 flex-shrink-0">
                        <div className="obj-number w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center transition-all duration-400">
                            <span className="font-serif text-lg text-gold">2</span>
                        </div>
                    </div>
                    <div className="md:col-span-11">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight text-natural-900">Restore Dignity & Build Self-Esteem</h4>
                        <p className="mt-3 text-gray-500 font-light leading-relaxed max-w-3xl">
                            Creating a conducive environment that enables a learner to have high self-esteem by ensuring that they dress well while in school — because every child deserves to feel confident, respected, and equal among their peers.
                        </p>
                    </div>
                </div>

                <div className="scroll-animate objective-item border-t border-black/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start px-4 -mx-4 rounded-sm" style={{transitionDelay: '0.2s'}}>
                    <div className="md:col-span-1 flex-shrink-0">
                        <div className="obj-number w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center transition-all duration-400">
                            <span className="font-serif text-lg text-gold">3</span>
                        </div>
                    </div>
                    <div className="md:col-span-11">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight text-natural-900">Empower Children to Know Their Rights</h4>
                        <p className="mt-3 text-gray-500 font-light leading-relaxed max-w-3xl">
                            Empowering children to know their rights and to know the actions to be taken when their rights have been violated — equipping them with knowledge and courage to speak up and seek help when they need it most.
                        </p>
                    </div>
                </div>

                <div className="scroll-animate objective-item border-t border-black/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start px-4 -mx-4 rounded-sm" style={{transitionDelay: '0.3s'}}>
                    <div className="md:col-span-1 flex-shrink-0">
                        <div className="obj-number w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center transition-all duration-400">
                            <span className="font-serif text-lg text-gold">4</span>
                        </div>
                    </div>
                    <div className="md:col-span-11">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight text-natural-900">Nurture Talent Through Holiday Camps</h4>
                        <p className="mt-3 text-gray-500 font-light leading-relaxed max-w-3xl">
                            Holding talent development camps during the holidays, where children can be taught and nurtured in different fields like <strong className="text-natural-900 font-normal">art, music, technology</strong>, and more — helping them discover their God-given abilities beyond the classroom.
                        </p>
                    </div>
                </div>

                <div className="scroll-animate objective-item border-t border-b border-black/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start px-4 -mx-4 rounded-sm" style={{transitionDelay: '0.4s'}}>
                    <div className="md:col-span-1 flex-shrink-0">
                        <div className="obj-number w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center transition-all duration-400">
                            <span className="font-serif text-lg text-gold">5</span>
                        </div>
                    </div>
                    <div className="md:col-span-11">
                        <h4 className="font-serif text-xl md:text-2xl tracking-tight text-natural-900">Engage & Educate Parents in the Community</h4>
                        <p className="mt-3 text-gray-500 font-light leading-relaxed max-w-3xl">
                            Organizing parents' engagement forums in the community where parents will be trained and sensitized on <strong className="text-natural-900 font-normal">good parenting, substance abuse, child abuse, and health talks</strong> — because transforming a child's life starts with strengthening the family around them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Location Section */}
    <section id="location" className="py-24 md:py-32 bg-natural-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="scroll-animate-left">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">Where We Work</span>
                    <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">Siaya County, <span className="italic text-gold">Kenya</span></h2>
                    <div className="w-16 h-[1px] bg-gold/40 mt-6"></div>
                    <p className="mt-6 text-gray-500 font-light leading-relaxed">Our foundation operates in Siaya County, working closely with schools, non-state actors in the area, and other government entities to identify and support the most vulnerable children in our community.</p>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-white rounded-sm border border-black/5"><div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0"><iconify-icon icon="ph:map-pin-bold" className="text-gold"></iconify-icon></div><div><span className="text-sm font-normal text-natural-900">Rarieda Sub-County</span><p className="text-xs text-gray-400 mt-0.5">Primary area of operations</p></div></div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-sm border border-black/5"><div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0"><iconify-icon icon="ph:map-pin-bold" className="text-gold"></iconify-icon></div><div><span className="text-sm font-normal text-natural-900">Bondo Sub-County</span><p className="text-xs text-gray-400 mt-0.5">Expanding reach and impact</p></div></div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-sm border border-black/5"><div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0"><iconify-icon icon="ph:map-pin-bold" className="text-gold"></iconify-icon></div><div><span className="text-sm font-normal text-natural-900">Ugenya Sub-County</span><p className="text-xs text-gray-400 mt-0.5">Growing our community presence</p></div></div>
                    </div>
                </div>
                <div className="scroll-animate-right img-hover rounded-sm overflow-hidden">
                    <img src="/imagee2.jpeg" alt="Siaya County landscape" className="w-full h-[400px] lg:h-[550px] object-cover"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
