import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MessageCircle, Menu, X, Globe, Sun, Moon, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { COMPANY_INFO } from '../data/mockData'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { t, i18n } = useTranslation()
    const { theme, setTheme } = useTheme()
    const location = useLocation()
    const lang = i18n.language
    const isAr = lang === 'ar'
    const isHome = location.pathname === '/'

    const themes = [
        { id: 'day', icon: Sun, label: isAr ? 'نهاري' : 'Day' },
        { id: 'reading', icon: BookOpen, label: isAr ? 'قراءة' : 'Read' },
        { id: 'night', icon: Moon, label: isAr ? 'ليلي' : 'Night' },
    ]

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleLanguage = () => {
        const newLang = isAr ? 'en' : 'ar'
        i18n.changeLanguage(newLang)
    }

    const currentLangName = isAr ? 'English' : 'العربية'

    const navLinks = [
        { to: '/', label: isAr ? 'الرئيسية' : 'Home' },
        { to: '/category/cars', label: isAr ? 'السيارات' : 'Cars' },
        { to: '/articles', label: isAr ? 'المقالات' : 'Articles' },
        { to: '/category/cameras', label: isAr ? 'الكاميرات' : 'Cameras' },
        { to: '/category/computers', label: isAr ? 'الكمبيوترات' : 'Computers' },
        { to: '/policy', label: isAr ? 'سياسة الشراء والاسترجاع' : 'Policy' },
    ]

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="container mx-auto px-6">
                <div
                    className={`flex justify-between items-center px-8 py-3 rounded-2xl transition-all duration-500 animate-in fade-in slide-in-from-top-4 duration-1000 ${scrolled || !isHome
                        ? 'bg-brand-surface/95 backdrop-blur-xl shadow-lg border border-brand-slate/10'
                        : 'bg-brand-muted/80 backdrop-blur-md border border-brand-slate/20 shadow-sm'
                        }`}
                >
                    <Link to="/" className={`text-xl md:text-2xl font-extrabold tracking-tight transition-colors text-brand-text`}>
                        {COMPANY_INFO.name[lang] || COMPANY_INFO.name.ar}
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-6">
                        <div className="flex items-center gap-5">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `text-[13px] font-semibold transition-all relative py-1 hover:-translate-y-0.5 whitespace-nowrap ${isActive
                                            ? 'text-brand-accent'
                                            : 'text-brand-slate hover:text-brand-accent'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.label}
                                            {isActive && (
                                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-brand-accent`}></span>
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>

                        <div className="flex items-center bg-brand-muted/50 p-1 rounded-xl border border-brand-slate/10">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setTheme(t.id)}
                                    className={`p-2 rounded-lg transition-all ${theme === t.id
                                        ? 'bg-brand-surface text-brand-accent shadow-sm'
                                        : 'text-brand-slate hover:text-brand-text'
                                        }`}
                                    title={t.label}
                                >
                                    <t.icon size={16} />
                                </button>
                            ))}
                        </div>

                        <div className={`h-4 w-px mx-1 bg-brand-slate/20`}></div>

                        <button
                            onClick={toggleLanguage}
                            className={`flex items-center gap-2 font-bold text-xs px-3 py-2 rounded-lg transition-all text-brand-text hover:bg-brand-muted`}
                        >
                            <Globe size={16} />
                            {currentLangName}
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-3 xl:hidden">
                        <button
                            className={`p-2 rounded-xl transition-colors text-brand-text hover:bg-brand-muted`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="xl:hidden fixed inset-0 z-50 bg-brand-primary p-12 flex flex-col justify-between animate-in fade-in zoom-in-95 duration-500">
                    <button className="absolute top-10 right-8 text-white" onClick={() => setIsOpen(false)}>
                        <X size={32} />
                    </button>
                    <div className="flex flex-col gap-8 mt-12 overflow-y-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-3xl font-bold text-white hover:text-brand-accent transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-8 space-y-4">
                        {/* Theme Switcher Mobile */}
                        <div className="grid grid-cols-3 gap-3">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setTheme(t.id)}
                                    className={`flex flex-col items-center gap-2 py-4 rounded-xl border transition-all ${theme === t.id
                                        ? 'bg-brand-accent text-white border-brand-accent'
                                        : 'bg-white/5 text-white/60 border-white/10'
                                        }`}
                                >
                                    <t.icon size={20} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">{t.label}</span>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                toggleLanguage();
                                setIsOpen(false);
                            }}
                            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-white/10 text-white font-bold"
                        >
                            <Globe size={20} />
                            {currentLangName}
                        </button>
                        <a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-brand-accent text-white font-bold"
                        >
                            <MessageCircle size={24} />
                            {t('nav.whatsapp_support')}
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
