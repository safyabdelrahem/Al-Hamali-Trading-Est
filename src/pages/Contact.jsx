import React from 'react'
import { MessageCircle, Mail, MapPin, Phone, ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { COMPANY_INFO } from '../data/mockData'

const Contact = () => {
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const isAr = lang === 'ar'

    return (
        <div className="bg-brand-muted min-h-screen pt-40 pb-24 lg:pb-32 overflow-hidden relative">
            {/* Decorative Blob */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-24">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-brand-accent mb-8 font-bold tracking-widest uppercase text-xs">
                            <Phone size={16} />
                            {t('nav.contact')}
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-brand-primary mb-8 font-display tracking-tight leading-none">{t('contact.title')}</h1>
                        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            {t('contact.desc')}
                        </p>
                        <div className="w-24 h-2 bg-brand-accent mx-auto mt-12 rounded-full"></div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                        {/* Contact Details Grid */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: Phone, label: t('contact.phone'), value: COMPANY_INFO.whatsapp, dir: 'ltr' },
                                { icon: Mail, label: t('contact.email'), value: COMPANY_INFO.email, dir: 'ltr' },
                                { icon: MapPin, label: t('contact.address'), value: COMPANY_INFO.address[lang] || COMPANY_INFO.address.ar, full: true }
                            ].map((item, idx) => (
                                <div key={idx} className={`bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm card-hover flex flex-col justify-between ${item.full ? 'sm:col-span-2' : ''}`}>
                                    <div className="w-16 h-16 bg-brand-muted text-brand-accent rounded-2xl flex items-center justify-center mb-10">
                                        <item.icon size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{item.label}</h3>
                                        <p className={`text-2xl font-bold text-brand-primary font-display break-words ${item.dir === 'ltr' ? 'ltr:text-left rtl:text-right' : ''}`} dir={item.dir}>
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Premium WhatsApp CTA */}
                        <div className="lg:col-span-5 relative group">
                            <div className="absolute inset-0 bg-brand-primary rounded-[4rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                            <div className="relative h-full bg-brand-primary p-12 lg:p-16 rounded-[4rem] text-white flex flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 text-white/5 -z-0">
                                    <MessageCircle size={280} strokeWidth={0.5} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-12 animate-pulse">
                                        <MessageCircle size={56} className="text-brand-whatsapp" />
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight font-display">{t('contact.chat_title')}</h2>
                                    <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                                        {t('contact.chat_desc')}
                                    </p>
                                </div>

                                <a
                                    href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp w-full py-6 text-2xl justify-center shadow-2xl shadow-green-500/30 group"
                                >
                                    {t('buttons.start_conversation')}
                                    <ArrowRight size={28} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
