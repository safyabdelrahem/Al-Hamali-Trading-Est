import React from 'react'
import { useTranslation } from 'react-i18next'
import { ShieldCheck, RefreshCw, ShoppingBag, Info, CheckCircle2 } from 'lucide-react'

const Policy = () => {
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const isAr = lang === 'ar'

    return (
        <div className="bg-white min-h-screen pt-40 pb-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <header className="text-center mb-32">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-muted text-brand-accent rounded-[2rem] premium-shadow mb-10">
                        <ShieldCheck size={48} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-primary mb-8 font-display leading-tight">{t('nav.policy')}</h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">{t('sections.why_desc')}</p>
                    <div className="w-24 h-2 bg-brand-accent mx-auto mt-12 rounded-full"></div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Purchase Policy */}
                    <section className="bg-brand-muted p-12 rounded-[3.5rem] border border-slate-100 flex flex-col h-full card-hover">
                        <div className="w-16 h-16 bg-white text-brand-accent rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                            <ShoppingBag size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-brand-primary mb-8 font-display">
                            {t('policy_page.purchase_title')}
                        </h2>
                        <div className="text-lg text-slate-600 leading-relaxed space-y-6 flex-grow">
                            <p>
                                {t('policy_page.purchase_desc')}
                            </p>
                            <div className="space-y-4">
                                {t('policy_page.purchase_points', { returnObjects: true }).map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <CheckCircle2 size={24} className="text-brand-accent flex-shrink-0" />
                                        <span className="font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Return Policy */}
                    <section className="bg-brand-primary p-12 rounded-[3.5rem] text-white flex flex-col h-full card-hover">
                        <div className="w-16 h-16 bg-white/10 text-brand-accent rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                            <RefreshCw size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-8 font-display">
                            {t('policy_page.return_title')}
                        </h2>
                        <div className="text-lg text-slate-300 leading-relaxed space-y-6 flex-grow">
                            <p>
                                {t('policy_page.return_desc')}
                            </p>
                            <div className="space-y-4">
                                {t('policy_page.return_points', { returnObjects: true }).map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <ShieldCheck size={24} className="text-brand-accent flex-shrink-0" />
                                        <span className="font-semibold text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-24 text-center glass-morphism p-10 rounded-[3rem] max-w-3xl mx-auto">
                    <p className="text-xl font-semibold text-brand-primary flex items-center justify-center gap-4">
                        <Info size={28} className="text-brand-accent" />
                        {t('policy_page.legal_info')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Policy
