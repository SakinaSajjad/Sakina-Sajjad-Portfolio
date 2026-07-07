import React from 'react';
import Style from './ThemeToggle.module.scss';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            className={`${Style.toggle} ${className}`}
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Light mode' : 'Dark mode'}
        >
            <i className={darkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'} />
        </button>
    );
}
