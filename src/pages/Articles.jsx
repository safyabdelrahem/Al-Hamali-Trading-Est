import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react'

const Articles = () => {
    const { t, i18n } = useTranslation()
    const lang = i18n.language

    const dummyArticles = [
        {
            id: 1,
            title: { en: 'Top 5 Office Decor Trends for 2026', ar: 'أفضل 5 صيحات لتنسيق المكاتب في 2026' },
            date: '2025-12-25',
            author: 'Ahmali Team',
            desc: { en: 'Discover how to transform your workspace with these modern decor tips.', ar: 'اكتشف كيف تحول مساحة عملك باستخدام هذه النصائح العصرية للديكور.' },
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 2,
            title: { en: 'Choosing the Right Tech for Performance', ar: 'كيفية اختيار التقنية المناسبة لزيادة الأداء' },
            date: '2025-12-20',
            author: 'Tech Dept',
            desc: { en: 'A guide on selecting the best gadgets to boost your productivity.', ar: 'دليل لاختيار أفضل الأجهزة لزيادة إنتاجيتك.' },
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
        }
    ]

    return (
        <div className="bg-brand-muted min-h-screen pt-40 pb-24">
            <div className="container mx-auto px-4">
                <header className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-brand-accent mb-8 font-bold tracking-widest uppercase text-xs">
                        <BookOpen size={16} />
                        {t('nav.articles')}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-primary mb-6 font-display leading-tight">{t('nav.articles')}</h1>
                    <div className="w-24 h-2 bg-brand-accent mx-auto rounded-full"></div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {dummyArticles.map(article => (
                        <article key={article.id} className="bg-white rounded-[3rem] border border-slate-100 card-hover shadow-sm overflow-hidden flex flex-col h-full">
                            <div className="aspect-video overflow-hidden">
                                <img src={article.image} alt={article.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-6 text-slate-400 text-sm mb-6 font-semibold">
                                    <span className="flex items-center gap-2"><Calendar size={18} className="text-brand-accent" /> {article.date}</span>
                                    <span className="flex items-center gap-2"><User size={18} className="text-brand-accent" /> {article.author}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-brand-primary mb-6 leading-tight font-display">
                                    {article.title[lang] || article.title.ar}
                                </h2>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed flex-grow">
                                    {article.desc[lang] || article.desc.ar}
                                </p>
                                <button className="btn-primary w-fit inline-flex items-center gap-3 group">
                                    {t('articles.read_more')}
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

const isAr = false; // Not used anymore directly

export default Articles
