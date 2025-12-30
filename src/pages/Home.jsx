import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Monitor, Camera, Car, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { COMPANY_INFO } from '../data/mockData'


const Home = () => {
    const { t, i18n } = useTranslation()
    const isAr = i18n.language === 'ar'

    // Animation Variants
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    }

    return (
        <div className="overflow-x-hidden font-sans selection:bg-brand-accent selection:text-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-muted transition-colors duration-700">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        {/* Elite Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-brand-surface/50 border border-brand-slate/20 text-brand-slate font-bold uppercase tracking-widest text-[10px]"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                            {t('home_hero.elite_tag')}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-6xl md:text-9xl font-black text-brand-text leading-[1] tracking-tight"
                        >
                            {t('home_hero.title_1')} <br />
                            <span className="text-brand-accent">
                                {t('home_hero.title_2')}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl text-brand-slate max-w-2xl mx-auto leading-relaxed"
                        >
                            {t('home_hero.subtitle')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                        >
                            <Link to="/contact" className="btn-primary px-16 py-6 rounded-[2.5rem] font-black text-2xl transition-all shadow-xl flex items-center justify-center gap-4 group">
                                {t('home_hero.cta_primary')}
                                <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trading Ecosystem */}
            <section id="sectors" className="py-40 bg-brand-surface transition-colors duration-700">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        className="max-w-4xl mx-auto text-center mb-32 space-y-8"
                        {...fadeInUp}
                    >
                        <div className="inline-block text-brand-slate font-black tracking-[0.4em] uppercase text-xs">
                            {t('home_sectors.tag')}
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-brand-text leading-tight tracking-tighter">
                            {t('home_sectors.title')}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: t('home_sectors.auto.title'), icon: Car, desc: t('home_sectors.auto.desc') },
                            { title: t('home_sectors.tech.title'), icon: Monitor, desc: t('home_sectors.tech.desc') },
                            { title: t('home_sectors.imaging.title'), icon: Camera, desc: t('home_sectors.imaging.desc') }
                        ].map((sector, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                className="group p-12 rounded-[3.5rem] bg-brand-muted/30 border border-brand-slate/5 hover:bg-brand-surface hover:shadow-2xl transition-all duration-700"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-brand-surface shadow-xl flex items-center justify-center text-brand-text mb-10 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                                    <sector.icon size={36} />
                                </div>
                                <h3 className="text-3xl font-black text-brand-text mb-6">{sector.title}</h3>
                                <p className="text-brand-slate text-xl leading-relaxed mb-10">{sector.desc}</p>
                                <Link to={`/category/${sector.title.toLowerCase()}`} className="text-brand-accent font-black flex items-center gap-2 group/link">
                                    {t('home_sectors.view_details')}
                                    <ArrowRight size={20} className="group-hover/link:translate-x-1 rtl:rotate-180 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy - About */}
            <section id="about" className="py-40 bg-brand-muted transition-colors duration-700">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div {...fadeInUp} className="space-y-12">
                            <h2 className="text-5xl md:text-7xl font-black text-brand-text leading-tight">
                                {t('home_about.title')}
                            </h2>
                            <p className="text-2xl text-brand-slate leading-relaxed font-medium">
                                {t('home_about.desc')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { label: t('home_about.stats.import'), val: t('home_about.stats.import_val') },
                                    { label: t('home_about.stats.quality'), val: t('home_about.stats.quality_val') },
                                    { label: t('home_about.stats.distribution'), val: t('home_about.stats.distribution_val') },
                                    { label: t('home_about.stats.support'), val: t('home_about.stats.support_val') }
                                ].map((stat, i) => (
                                    <div key={i} className="p-8 rounded-[2rem] bg-brand-surface border border-brand-slate/10 hover:shadow-lg transition-all">
                                        <div className="text-brand-text font-black text-2xl mb-1">{stat.val}</div>
                                        <div className="text-brand-slate font-bold uppercase tracking-widest text-[11px]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            className="aspect-square bg-brand-surface rounded-[4rem] border border-brand-slate/10 p-16 flex items-center justify-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none"></div>
                            <div className="text-center space-y-8 relative z-10">
                                <div className="w-32 h-32 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                                    <Star size={64} className="text-brand-accent" fill="currentColor" />
                                </div>
                                <div className="text-4xl font-black text-brand-text uppercase tracking-tight">
                                    {t('home_about.card_title')}
                                </div>
                                <div className="text-brand-slate font-bold text-lg leading-relaxed max-w-xs mx-auto">
                                    {t('home_about.card_desc')}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 container mx-auto px-6 text-center">
                <motion.div {...fadeInUp} className="space-y-16">
                    <h2 className="text-6xl md:text-9xl font-black text-brand-text leading-tight tracking-tighter">
                        {t('home_footer_cta.title')}
                    </h2>
                    <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex bg-brand-primary text-white px-20 py-8 rounded-[3rem] font-black text-3xl hover:scale-105 transition-all shadow-3xl items-center gap-6"
                    >
                        <MessageCircle size={44} fill="currentColor" />
                        {t('home_footer_cta.button')}
                    </a>
                </motion.div>
            </section>
        </div>
    )
}

export default Home
