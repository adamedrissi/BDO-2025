import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/yachine.png';

const confederations = {
  UEFA: [
      "Alex MERET",
      "Álex REMIRO",
      "ALISSON Becker",
      "Augusto BATALLA",
      "Bernd LENO",
      "David RAYA",
      "David SORIA",
      "Dean HENDERSON",
      "'Dibu' MARTÍNEZ",
      "Diogo COSTA",
      "Djordje PETROVIĆ",
      "EDERSON de Moraes",
      "Finn DAHMEN",
      "Gianluigi DONNARUMMA",
      "Jan OBLAK",
      "Joan GARCÍA",
      "Jordan PICKFORD",
      "KEPA Arrizabalaga",
      "Lucas PERRI",
      "Lukáš HORNÍČEK",
      "Manuel NEUER",
      "Marco CARNESECCHI",
      "Mark FLEKKEN",
      "Matz SELS",
      "Michele DI GREGORIO",
      "Mike MAIGNAN",
      "Mile SVILAR",
      "Moritz NICOLAS",
      "Nick POPE",
      "Noah ATUBOLU",
      "Robert SÁNCHEZ",
      "Robin ZENTNER",
      "Rui SILVA",
      "Sergio HERRERA",
      "Stanislav AGKATSEV",
      "Thibaut COURTOIS",
      "Unai SIMÓN",
      "Vanja MILINKOVIĆ-SAVIĆ",
      "Wojciech SZCZĘSNY",
      "Yann SOMMER"
    ],
  OtherConfederations: [
      "Ahmed EL SHENAWY",
      "Franco ARMANI",
      "João RICARDO",
      "JOHN Victor",
      "Koen CASTEELS",
      "Predrag RAJKOVIĆ",
      "RAFAEL Pires",
      "Sipho CHAINE",
      "WEVERTON Pereira",
      "Yassine BOUNOU"
    ],
};

function YashinTrophy() {
  const { t } = useTranslation();
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const toggleSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else if (selectedItems.length < 10) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('YashinSelected');
    if (saved) {
      setSelectedItems(JSON.parse(saved));
   }
  }, []);

  useEffect(() => {
    localStorage.setItem('YashinSelected', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleSubmit = () => {
    if (selectedItems.length === 10) {
      navigate('/order3', { state: { selectedItems } });
    } else {
      alert('Please select exactly 10 items.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={headingImage}
        alt="Heading Icon"
        style={{ width: '120px', height: '150px' }}
      />
      <h1>{t('Yashin')} 2025</h1>

      <p>{t('Dates')}</p>
      <p>{t('Dates2')}13 {t('July')} 2025</p>

      <h2>{t('selectPlayers3')}</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.entries(confederations).map(([categoryKey, items]) => (
          <div key={categoryKey} style={{ margin: '20px 0', width: '300px' }}>
            <h2>{t(`confederations.${categoryKey}`)}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {items.map((item) => (
                <div
                  key={item}
                  onClick={() => toggleSelect(item)}
                  style={{
                    margin: '4px 0',
                    padding: '8px',
                    width: '100%',
                    border: selectedItems.includes(item) ? '2px solid green' : '1px solid #ccc',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    background: selectedItems.includes(item) ? '#e0ffe0' : '#fff',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
        <p>{t('selected')}{selectedItems.length} / 10</p>
      </div>

      <button
        onClick={() => {
        if (window.confirm(t('sureSelection'))) {
        localStorage.removeItem('YashinSelected');
        setSelectedItems([]);
        }
       }}
      style={{ marginTop: '10px', backgroundColor: '#e74c3c', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'Figtree' }}
      >
        {t('clearSelection')}
      </button>

      <br />

      {selectedItems.length === 10 && (
        <button onClick={handleSubmit} style={{ marginTop: '20px', fontFamily: 'Figtree' }}>
          {t('submit')}
        </button>
      )}
    </div>
  );
}

export default YashinTrophy;