import React from 'react';
import { useTranslation } from 'react-i18next';
import headingImage from '../assets/cookie.gif';
import headingImage2 from '../assets/cookies.gif';

function Cookies() {
    const { t } = useTranslation();
    return (
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h1>{t('cookies')}</h1>
    <p>{t('cookies1')} 😊</p>
    <img
      src={headingImage}
      alt="Heading Icon"
      style={{ width: '180px', height: '180px' }}
    />
    <br/>
    <br/>
    <p>{t('cookies2')} 😅</p>
    <br/>
    <p>{t('cookies3')}</p>
    <br/>
    <img
      src={headingImage2}
      alt="Heading Icon"
      style={{ width: '165px', height: '160px' }}
    />
  </div>
    );
};

export default Cookies;