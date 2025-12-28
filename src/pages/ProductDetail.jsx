import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { MessageCircle, ArrowLeft, CheckCircle2, Truck, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { products, COMPANY_INFO } from '../data/mockData'

const ProductDetail = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">{t('labels.not_found')}</h2>
                <Link to="/" className="text-brand-accent hover:underline">{t('buttons.back_home')}</Link>
            </div>
        );
    }

    const whatsappMessage = encodeURIComponent(t('labels.prefilled_message', { name: product.name[lang] || product.name.ar, id: product.id }));

    return (
        <div className="bg-white min-h-screen pt-32 pb-12 lg:pb-20">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Image Side */}
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-brand-surface aspect-[4/5] relative group">
                        <img
                            src={product.image}
                            alt={product.name[lang]}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Effort Side */}
                    <div className="flex flex-col pt-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary mb-6 leading-[1.1]">
                            {product.name[lang] || product.name.ar}
                        </h1>
                        <div className="text-4xl font-bold text-brand-accent mb-10">
                            {product.price}
                        </div>

                        <div className="prose prose-slate max-w-none mb-12">
                            <p className="text-xl text-slate-600 leading-relaxed">
                                {product.details[lang] || product.details.ar}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 bg-slate-50 p-8 rounded-3xl">
                            <div className="flex items-center gap-3 text-slate-700">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span className="font-semibold">{t('labels.stock')}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-700">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Truck size={20} />
                                </div>
                                <span className="font-semibold">{t('labels.handling')}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-700 sm:col-span-2">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
                                    <ShieldCheck size={20} />
                                </div>
                                <span className="font-semibold">{t('labels.quality')}</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <a
                                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp py-5 text-xl justify-center gap-4 shadow-xl shadow-green-500/10"
                            >
                                <MessageCircle size={28} />
                                {t('buttons.order_whatsapp')}
                            </a>

                            <p className="text-slate-400 text-sm md:text-base text-center italic">
                                {t('nav.whatsapp_support')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
