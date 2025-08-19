import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/johancruyff.png';

const managers = {
  ClubManagers: [
      "LUIS ENRIQUE",
      "Ange POSTECOGLU",
      "Antonio CONTE",
      "Arne SLOT",
      "ARTUR JORGE",
      "BRUNO LAGE",
      "Carlo ANCELOTTI",
      "Carlos CORBERÁN",
      "Cesc FÀBREGAS",
      "Claudio GIRÁLDEZ",
      "Claudio RANIERI",
      "Diego SIMEONE",
      "Dino TOPPMÖLLER",
      "Eddie HOWE",
      "Enzo MARESCA",
      "Ernesto VALVERDE",
      "Gian Piero GASPERINI",
      "Gustavo QUINTEROS",
      "Hansi FLICK",
      "Iñigo PÉREZ",
      "Manuel PELLEGRINI",
      "MARCELINO",
      "Mikel ARTETA",
      "Nicky HAYEN",
      "Niko KOVAČ",
      "Nuno ESPÍRITO SANTO",
      "Oliver GLASNER",
      "Pep GUARDIOLA",
      "Petr BOSZ",
      "Rafael PALLADINO",
      "Ruben AMORIM",
      "Rui BORGES",
      "Sebastian HOENESS",
      "Sérgio CONCEIÇÃO",
      "Sergio GÓMEZ",
      "Simone INZAGHI",
      "Unai EMERY",
      "Vincent KOMPANY",
      "Vincenzo ITALIANO",
      "Xabi ALONSO",
  ],
  InternationalManagers: [
      "Didier DESCHAMPS",
      "Javier AGUIRRE",
      "Julian NAGELSMANN",
      "Lionel SCALONI",
      "Luis DE LA FUENTE",
      "Mauricio POCHETTINO",
      "Roberto MARTÍNEZ",
      "Sebastian BECCACECE",
      "Thomas CHRISTIANSEN",
      "Walid REGRAGUI"],
};

function JohanCruyffTrophy() {
  const { t } = useTranslation();
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const toggleSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else if (selectedItems.length < 5) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('JCTrophySelected');
    if (saved) {
      setSelectedItems(JSON.parse(saved));
   }
  }, []);

  useEffect(() => {
    localStorage.setItem('JCTrophySelected', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleSubmit = () => {
    if (selectedItems.length === 5) {
      navigate('/order4', { state: { selectedItems } });
    } else {
      alert('Please select exactly 5 items.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={headingImage}
        alt="Heading Icon"
        style={{ width: '120px', height: '150px' }}
      />
      <h1>{t('JCTrophy')} 2025</h1>

      <p>{t('Dates')}</p>
      <p>{t('Dates2')}13 {t('July')} 2025</p>

      <h2>{t('selectManagers')}</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.entries(managers).map(([categoryKey, items]) => (
          <div key={categoryKey} style={{ margin: '20px 0', width: '300px' }}>
            <h2>{t(`managers.${categoryKey}`)}</h2>
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
        <p>{t('selected')}{selectedItems.length} / 5</p>
      </div>

      <button
        onClick={() => {
        if (window.confirm(t('sureSelection'))) {
        localStorage.removeItem('JCTrophySelected');
        setSelectedItems([]);
        }
       }}
      style={{ marginTop: '10px', backgroundColor: '#e74c3c', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'Figtree' }}
      >
        {t('clearSelection')}
      </button>

      <br />

      {selectedItems.length === 5 && (
        <button onClick={handleSubmit} style={{ marginTop: '20px', fontFamily: 'Figtree' }}>
          {t('submit')}
        </button>
      )}
    </div>
  );
}

export default JohanCruyffTrophy;