import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../../contexts/ThemeContext';
import styles from './ThemeToggle.module.scss';

/**
 * Theme toggle component for the navbar
 * Matches the visual style of other navbar elements
 */
const ThemeToggle: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${styles['theme-toggle']} ${
        theme === 'dark' ? styles['theme-toggle--dark'] : styles['theme-toggle--light']
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
