import React from 'react'
import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { COMPANY_INFO } from '../data/mockData'
import { motion, AnimatePresence } from 'framer-motion'

const WhatsAppButton = () => {
    const { t, i18n } = useTranslation()
    const isAr = i18n.language === 'ar'
    const [showLabel, setShowLabel] = React.useState(false)

    React.useEffect(() => {
        const timer = setTimeout(() => setShowLabel(true), 3000)
        const hideTimer = setTimeout(() => setShowLabel(false), 8000)
        return () => {
            clearTimeout(timer)
            clearTimeout(hideTimer)
        }
    }, [])

    return (
        <div className={`fixed bottom-8 ${isAr ? 'left-8' : 'right-8'} z-[100] flex items-center gap-4`}>
            <AnimatePresence>
                {showLabel && (
                    <motion.div
                        initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isAr ? -20 : 20 }}
                        className="bg-white text-brand-primary px-4 py-2 rounded-xl shadow-2xl border border-black/5 font-bold text-sm hidden md:block"
                    >
                        {t('nav.whatsapp_support')}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-brand-whatsapp text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-brand-whatsapp/40 transition-shadow relative group"
            >
                <div className="absolute inset-0 rounded-full bg-brand-whatsapp animate-ping opacity-20 group-hover:hidden"></div>
                <MessageCircle size={32} />
            </motion.a>
        </div>
    )
}

export default WhatsAppButton
