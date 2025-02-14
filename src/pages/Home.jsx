import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const [lang, setLang] = useState('uz');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);  // `lang` o‘zgarganda `i18n.changeLanguage` ishlaydi

  return (
    <div>
      <h3>{t('hello world')}</h3>

      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="uz">Uzbek</option>
        <option value="ru">Russian</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default Home;
