import React from 'react';
import { useTranslation } from 'react-i18next';

function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '40px 20px', lineHeight: '1.6' }}>
      <h1>{t('privacyPolicy')}</h1>

      <p>
        {t('pp1')} <strong>{t('pp2')}</strong> {t('pp3')} <strong>{t('pp4')}</strong>.
      </p>

      <h2>{t('pp5')}</h2>
      <p>
        {t('pp6')}
      </p>

      <h2>{t('pp7')}</h2>
      <p>
        {t('pp8')}
      </p>

      <h2>{t('pp9')}</h2>
      <p>
        {t('pp10')}
      </p>

      <h2>{t('pp11')}</h2>
      <p>
        {t('pp12')}
      </p>

      <h2>{t('pp13')}</h2>
      <p>
        {t('pp14')}
      </p>

      <h2>{t('pp15')}</h2>
      <p>
        {t('pp16')}
      </p>

      <h2>{t('pp17')}</h2>
      <p>
        {t('pp18')}
      </p>
    </div>
  );
}

export default PrivacyPolicy;