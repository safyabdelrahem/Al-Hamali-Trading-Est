import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react'

const Articles = () => {
    const { t, i18n } = useTranslation()
    const lang = i18n.language

    // Replace with API data later
    const articles = []

    return (
        <div className="bg-brand-muted min-h-screen pt-40 pb-24 transition-colors duration-700">
            <div className="container mx-auto px-4">
                <header className="text-center mb-24 transition-colors duration-700">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-surface border border-brand-slate/10 shadow-sm text-brand-accent mb-8 font-bold tracking-widest uppercase text-xs">
                        <BookOpen size={16} />
                        {t('nav.articles')}
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-brand-text mb-8 font-display tracking-tight leading-none">{t('nav.articles')}</h1>
                    <div className="w-24 h-2 bg-brand-accent mx-auto mt-12 rounded-full opacity-30"></div>
                </header>

                {articles.length === 0 ? (
                    // Empty State
                    <div className="bg-brand-surface rounded-[3rem] border border-brand-slate/10 shadow-sm p-16 text-center max-w-3xl mx-auto transition-colors duration-700">
                        <h2 className="text-3xl font-bold text-brand-text mb-6">
                            {lang === 'ar' ? 'قريبًا 🚀' : 'Coming Soon 🚀'}
                        </h2>

                        <p className="text-lg text-brand-slate leading-relaxed">
                            {lang === 'ar'
                                ? 'نعمل حاليًا على تجهيز مقالات مفيدة ومميزة، وسيتم إطلاق هذه الخدمة قريبًا.'
                                : 'We are currently preparing valuable and insightful articles. This service will be launched soon.'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {articles.map(article => (
                            <article
                                key={article.id}
                                className="bg-brand-surface rounded-[3rem] border border-brand-slate/10 card-hover shadow-sm overflow-hidden flex flex-col h-full transition-all duration-700 hover:shadow-2xl"
                            >
                                <div className="aspect-video overflow-hidden relative">
                                    <img
                                        src={article.image}
                                        alt={article.title[lang]}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-6 text-brand-slate text-sm mb-6 font-semibold opacity-70">
                                        <span className="flex items-center gap-2">
                                            <Calendar size={18} className="text-brand-accent" />
                                            {article.date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <User size={18} className="text-brand-accent" />
                                            {article.author}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl font-bold text-brand-text mb-6 leading-tight font-display">
                                        {article.title[lang] || article.title.ar}
                                    </h2>

                                    <p className="text-lg text-brand-slate mb-10 leading-relaxed flex-grow">
                                        {article.desc[lang] || article.desc.ar}
                                    </p>

                                    <button className="btn-primary w-fit inline-flex items-center gap-3 group">
                                        {t('articles.read_more')}
                                        <ArrowRight
                                            size={20}
                                            className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                                        />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Articles
