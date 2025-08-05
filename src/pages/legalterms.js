import React from 'react';
import { useTranslation } from 'react-i18next';

function LegalTerms() {
  const { t } = useTranslation();
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '40px 20px', lineHeight: '1.6' }}>
      <h1>{t('lt1')}</h1>

      <p>
        {t('lt2')}
      </p>

      <h2>{t('lt3')}</h2>
      <p>
        {t('lt4')}
      </p>

      <h2>{t('lt5')}</h2>
      <p>
        {t('lt6')}
      </p>
      <ul>
        <li>
          <strong>{t('lt7')}</strong> {t('lt71')} <em>{t('lt72')}</em>{t('lt73')}
        </li>
        <li>
          <strong>{t('lt8')}</strong> {t('lt81')} <em>{t('lt82')}</em>{t('lt83')}
        </li>
      </ul>
      <p>
        {t('lt9')}
      </p>

      <h2>{t('lt10')}</h2>
      <p>
        {t('lt11')}
      </p>

      <h2>{t('lt12')}</h2>
      <p>
        {t('lt13')}
      </p>

      <h2>{t('lt14')}</h2>
      <p>
        {t('lt15')}
      </p>

      <p>
        {t('lt16')}
      </p>

      <h2>{t('lt17')}</h2>
      <p>
        {t('lt18')}
      </p>

      <h2>{t('lt19')}</h2>
      <p>
        {t('lt20')}
      </p>

      <h2>{t('lt21')}</h2>
      <p>
        {t('lt22')}
      </p>
    </div>
  );
}

export default LegalTerms;