import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { COMPANY_INFO } from '../data/mockData'

const Footer = () => {
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const isAr = lang === 'ar'

    return (
        <footer className="bg-brand-primary text-white pt-32 pb-12 overflow-hidden relative transition-colors duration-700">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-24">
                    <div className="md:col-span-5 space-y-10">
                        <h3 className="text-4xl font-black font-display tracking-tight text-white">
                            {COMPANY_INFO.name[lang] || COMPANY_INFO.name.ar}
                        </h3>
                        <p className="text-xl text-white/60 leading-relaxed max-w-md">
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-white/40">{t('sections.how_it_works')}</h4>
                        <ul className="space-y-6">
                            <li><Link to="/" className="text-xl font-bold hover:text-brand-accent transition-colors">{t('nav.home')}</Link></li>
                            <li><Link to="/category/cars" className="text-xl font-bold hover:text-brand-accent transition-colors">{t('nav.cars')}</Link></li>
                            <li><Link to="/articles" className="text-xl font-bold hover:text-brand-accent transition-colors">{t('nav.articles')}</Link></li>
                            <li><Link to="/category/cameras" className="text-xl font-bold hover:text-brand-accent transition-colors">{isAr ? 'الكاميرات' : 'Cameras'}</Link></li>
                            <li><Link to="/category/computers" className="text-xl font-bold hover:text-brand-accent transition-colors">{isAr ? 'الكمبيوترات' : 'Computers'}</Link></li>
                            <li><Link to="/policy" className="text-xl font-bold hover:text-brand-accent transition-colors">{t('nav.policy')}</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-white/40">{t('contact.info')}</h4>
                        <ul className="space-y-8">
                            <li className="flex flex-col gap-2">
                                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{t('contact.address')}</span>
                                <span className="text-xl font-bold">{COMPANY_INFO.address[lang] || COMPANY_INFO.address.ar}</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{t('contact.email')}</span>
                                <span className="text-xl font-bold">{COMPANY_INFO.email}</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{t('contact.phone')}</span>
                                <span dir="ltr" className="text-xl font-bold rtl:text-right">{COMPANY_INFO.whatsapp}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-semibold uppercase tracking-widest">
                    <div>&copy; {new Date().getFullYear()} {COMPANY_INFO.name[lang] || COMPANY_INFO.name.ar}</div>
                    <div className="flex gap-8">
                        <Link to="/policy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/policy" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
