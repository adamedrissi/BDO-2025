import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '40px 20px', lineHeight: '1.6' }}>
      <h1>{t('contactUs')}</h1>
      <p>{t('fillForm')}</p>

      {submitted ? (
        <p style={{ color: 'green' }}>{t('thankYou')}</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label htmlFor="name">{t('yourName')}</label><br />
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            />
          </div>

          <div>
            <label htmlFor="email">{t('yourEmail')}</label><br />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            />
          </div>

          <div>
            <label htmlFor="message">{t('message')}</label><br />
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            />
          </div>

          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', fontFamily: 'figtree' }}>
            {t('sendMessage')}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactUs;