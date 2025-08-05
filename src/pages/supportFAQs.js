import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SupportFAQs() {
  const { t } = useTranslation();
  const faqs = t('questions', { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '40px 20px' }}>
      <h1>{t('supportFAQs')}</h1>
      <p>{t('cu1')} <a href="/ContactUs">{t('contactUs')}</a>.</p>

      <div style={{ marginTop: '30px' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc' }}>
            <button
              onClick={() => toggle(index)}
              style={{
                background: 'none',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                padding: '10px 0',
                fontSize: '18px',
                fontWeight: 'bold',
                fontFamily: 'Figtree',
                cursor: 'pointer'
              }}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <p style={{ padding: '10px 0', margin: 0 }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportFAQs;