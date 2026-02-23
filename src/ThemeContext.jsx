import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const accentThemes = [
    { name: 'Steel Blue', accent: '#2563eb', highlight: '#60a5fa', glow: 'rgba(37, 99, 235, 0.4)' },
    { name: 'Power Orange', accent: '#f97316', highlight: '#fb923c', glow: 'rgba(249, 115, 22, 0.4)' },
    { name: 'Safety Green', accent: '#22c55e', highlight: '#4ade80', glow: 'rgba(34, 197, 94, 0.4)' },
    { name: 'Industry Red', accent: '#dc2626', highlight: '#f87171', glow: 'rgba(220, 38, 38, 0.4)' },
    { name: 'Tech Purple', accent: '#8b5cf6', highlight: '#a78bfa', glow: 'rgba(139, 92, 246, 0.4)' },
];

export const ThemeProvider = ({ children }) => {
    const [currentAccent, setCurrentAccent] = useState(accentThemes[0]);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const root = document.documentElement;
        // Set Accent Colors
        root.style.setProperty('--accent-color', currentAccent.accent);
        root.style.setProperty('--highlight-color', currentAccent.highlight);
        root.style.setProperty('--glow-color', currentAccent.glow);

        // Set Background Theme
        root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [currentAccent, isDarkMode]);

    const toggleBackgroundTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <ThemeContext.Provider value={{
            currentAccent,
            setCurrentAccent,
            accentThemes,
            isDarkMode,
            toggleBackgroundTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
