import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.scss';

/**
 * Language selector component for the navbar
 * Matches the visual style of other navbar elements
 */
const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles['language-selector']}>
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className={styles['language-select']}
        aria-label={t('common.language')}
      >
        <option value="en">{t('common.english')}</option>
        <option value="fr">{t('common.french')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
