import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Shield, ShoppingBag, Package, Truck, CheckCircle2, Zap, Monitor, Camera, Car, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { COMPANY_INFO } from '../data/mockData'

const Home = () => {
    const { t, i18n } = useTranslation()
    const isAr = i18n.language === 'ar'

    return (
        <div className="overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white">
            {/* Hero Section - Pure Minimalist High-End */}
            <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-primary">
                {/* Sophisticated Mesh Background (No Photos) */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-800/50 blur-[120px] rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-white/[0.03] [mask-image:radial-gradient(white,transparent)] pointer-events-none"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto space-y-12">
                        {/* Elite Tag */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-blue-400 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase">{t('home_hero.elite_tag')}</span>
                        </div>

                        {/* Master Title */}
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
                            {t('home_hero.title_1')} <br />
                            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                {t('home_hero.title_2')}
                            </span>
                        </h1>

                        {/* Narrative Subtitle */}
                        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            {t('home_hero.subtitle')}
                        </p>

                        {/* Action Hub */}
                        <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 justify-center pt-8">
                            <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/40 flex items-center justify-center gap-4 group">
                                {t('home_hero.cta_primary')}
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                            </Link>
                            <Link to="/articles" className="px-12 py-5 rounded-[2rem] bg-white/[0.02] border border-white/[0.1] text-white font-bold text-xl hover:bg-white/[0.05] transition-all text-center backdrop-blur-sm">
                                {t('home_hero.cta_secondary')}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Scroll Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto"></div>
                </div>
            </section>

            {/* Trading Ecosystem - Pure Card Design */}
            <section id="sectors" className="py-40 bg-white">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-32 space-y-8 animate-in fade-in duration-700">
                        <div className="inline-block text-blue-600 font-black tracking-[0.4em] uppercase text-xs bg-blue-50 px-4 py-2 rounded-lg">
                            {t('home_sectors.tag')}
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black text-brand-primary leading-tight tracking-tighter">
                            {t('home_sectors.title')}
                        </h2>

                        <p className="text-xl text-slate-500 font-medium">
                            {t('home_sectors.subtitle')}
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: t('home_sectors.auto.title'), icon: Car, desc: t('home_sectors.auto.desc') },
                            { title: t('home_sectors.tech.title'), icon: Monitor, desc: t('home_sectors.tech.desc') },
                            { title: t('home_sectors.imaging.title'), icon: Camera, desc: t('home_sectors.imaging.desc') }
                        ].map((sector, i) => (
                            <div
                                key={i}
                                className="group p-12 rounded-[3rem] bg-slate-50 border border-slate-100 
                    hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 
                    transition-all duration-700 relative overflow-hidden"
                            >
                                {/* Content */}
                                <div className="relative z-10">
                                    <div
                                        className="w-20 h-20 rounded-3xl bg-white shadow-xl 
                            flex items-center justify-center text-blue-600 mb-10
                            group-hover:scale-110 group-hover:bg-blue-600 
                            group-hover:text-white transition-all duration-500"
                                    >
                                        <sector.icon size={36} />
                                    </div>

                                    <h3 className="text-2xl font-black text-brand-primary mb-6">
                                        {sector.title}
                                    </h3>

                                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                        {sector.desc}
                                    </p>

                                    <div
                                        className="text-blue-600 font-black text-sm flex items-center gap-2 cursor-pointer 
                            group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                                    >
                                        {t('home_sectors.view_details')}
                                        <ArrowRight size={18} className="rtl:rotate-180" />
                                    </div>
                                </div>

                                {/* Background Number */}
                                <div
                                    className="
                        absolute -bottom-6 
                        ltr:-right-6 rtl:-left-6
                        text-9xl font-black text-slate-200/40 
                        select-none pointer-events-none
                        group-hover:text-blue-100 transition-colors
                        z-0
                        "
                                >
                                    0{i + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy - Minimalist Text Grid (No Photos) */}
            <section id="about" className="py-40 bg-brand-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 translate-x-1/2 -skew-x-12"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                {t('home_about.title')}
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                                {t('home_about.desc')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { label: t('home_about.stats.import'), val: t('home_about.stats.import_val') },
                                    { label: t('home_about.stats.quality'), val: t('home_about.stats.quality_val') },
                                    { label: t('home_about.stats.distribution'), val: t('home_about.stats.distribution_val') },
                                    { label: t('home_about.stats.support'), val: t('home_about.stats.support_val') }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                                        <div className="text-blue-400 font-black text-xl mb-1">{stat.val}</div>
                                        <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Minimalist Graphic Element Instead of Photo */}
                        <div className="relative aspect-square flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300">
                            <div className="absolute inset-0 border border-white/[0.05] rounded-full scale-125"></div>
                            <div className="absolute inset-0 border border-white/[0.1] rounded-full scale-110"></div>
                            <div className="w-80 h-80 bg-blue-600/10 backdrop-blur-3xl rounded-[4rem] border border-white/[0.1] p-12 flex flex-col justify-between group hover:bg-blue-600/20 transition-all duration-700 shadow-3xl shadow-blue-600/10">
                                <Star size={48} className="text-blue-500" fill="currentColor" />
                                <div className="space-y-4">
                                    <div className="text-4xl font-black text-white">{t('home_about.card_title')}</div>
                                    <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{t('home_about.card_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA - Extreme Minimalist Impact */}
            <section className="py-40 container mx-auto px-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-3xl shadow-blue-900/30">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none select-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-black leading-none">AL</div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
                            {t('home_footer_cta.title')}
                        </h2>
                        <div className="flex justify-center flex-wrap gap-6">
                            <a
                                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 px-16 py-6 rounded-[2.5rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4"
                            >
                                <MessageCircle size={36} fill="currentColor" />
                                {t('home_footer_cta.button')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
