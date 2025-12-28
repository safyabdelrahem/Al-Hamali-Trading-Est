import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { MessageCircle, ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { categories, products, COMPANY_INFO } from '../data/mockData'

const CategoryDetail = () => {
    const { slug } = useParams();
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const category = categories.find(c => c.slug === slug);
    const categoryProducts = products.filter(p => p.categorySlug === slug);

    if (!category) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">{t('labels.not_found')}</h2>
                <Link to="/" className="text-brand-accent hover:underline">{t('buttons.back_home')}</Link>
            </div>
        );
    }

    return (
        <div className="bg-brand-surface min-h-screen pt-32 pb-12">
            <div className="container mx-auto px-4">

                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">{category.name[lang] || category.name.ar}</h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">{category.description[lang] || category.description.ar}</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryProducts.map((prod) => (
                        <div key={prod.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover flex flex-col h-full shadow-sm">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img src={prod.image} alt={prod.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-bold text-xl mb-3 text-brand-primary">{prod.name[lang] || prod.name.ar}</h3>
                                <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{prod.description[lang] || prod.description.ar}</p>
                                <div className="mt-auto">
                                    <div className="mb-6">
                                        <span className="text-brand-accent font-bold text-3xl">{prod.price}</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <Link to={`/product/${prod.id}`} className="bg-slate-50 text-slate-700 text-center py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors text-sm">
                                            {t('buttons.order_details')}
                                        </Link>
                                        <a
                                            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=${t('labels.interested_in')} ${prod.name[lang] || prod.name.ar}`}
                                            className="btn-whatsapp justify-center text-sm py-3"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <MessageCircle size={18} />
                                            {t('buttons.order_whatsapp')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {categoryProducts.length === 0 && (
                    <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-200">
                        <p className="text-slate-400 text-lg">{t('labels.no_products')}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoryDetail
