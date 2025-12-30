import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Themes: 'night' (Dark Blue), 'reading' (Pure Grey), 'day' (Royal Blue/Light)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'reading';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);

        // Handle body background for smooth transitions
        if (theme === 'night') {
            document.body.classList.add('bg-slate-950');
            document.body.classList.remove('bg-white', 'bg-zinc-50');
        } else if (theme === 'reading') {
            document.body.classList.add('bg-zinc-50');
            document.body.classList.remove('bg-slate-950', 'bg-white');
        } else {
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-slate-950', 'bg-zinc-50');
        }
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
