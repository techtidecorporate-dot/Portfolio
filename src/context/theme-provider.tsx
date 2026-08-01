import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'nadir-portfolio-theme';

interface ThemeContextValue {
    dark: boolean;
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState<boolean>(() => {
        // 1. Respect stored user preference
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored !== null) return stored === 'dark';
        // 2. Fall back to OS preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Apply / remove the `.dark` class on <html> whenever dark changes
    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
    }, [dark]);

    const toggle = () => setDark(prev => !prev);

    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used inside <ThemeProvider>');
    }
    return ctx;
}
