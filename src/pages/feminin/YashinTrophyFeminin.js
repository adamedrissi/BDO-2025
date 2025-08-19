import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/yachine.png';
import femenin from '../../assets/feminin.png';

const confederations = {
  UEFA: [
      "Adriana NANCLARES",
      "Ayaka YAMASHITA",
      "Cata COLL",
      "Chiamaka NNADOZIE",
      "Christiane ENDLER",
      "Daphne VAN DOMSELAAR",
      "Hannah HAMPTON",
      "Inês PEREIRA",
      "Jennifer FALK",
      "Laura GIULIANI",
      "Lola GALLARDO",
      "Maria Luisa GROHS",
      "Misa RODRÍGUEZ",
      "Pauline PEYRAUD-MAGNIN",
      "Phallon TULLIS-JOYCE"
    ],
  OtherConfederations: [
      "Alyssa NAEHER",
      "Anna MOORHOUSE",
      "Ann-Katrin BERGER",
      "Aubrey KINGSBURY",
      "Habiba EMAD SABRY",
      "Jane CAMPBELL",
      "Kaelin SHERIDAN",
      "Khadija ER-RMICHI",
      "LORENA Leite",
      "Mandy MCGLYNN",
    ],
};

function YashinTrophyFemenin() {
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
    const saved = localStorage.getItem('YashinFSelected');
    if (saved) {
      setSelectedItems(JSON.parse(saved));
   }
  }, []);

  useEffect(() => {
    localStorage.setItem('YashinFSelected', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleSubmit = () => {
    if (selectedItems.length === 5) {
      navigate('/order3f', { state: { selectedItems } });
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
      <img
        src={femenin}
        alt="Heading Icon"
        style={{ width: '120px', height: '120px' }}
      />
      <h1>{t('YashinF')} 2025</h1>

      <p>{t('DatesF')}</p>
      <p>{t('Dates2')}30 {t('July')} 2025</p>

      <h2>{t('selectPlayers4')}</h2>

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
        <p>{t('selected2')}{selectedItems.length} / 5</p>
      </div>

      <button
        onClick={() => {
        if (window.confirm(t('sureSelection'))) {
        localStorage.removeItem('YashinFSelected');
        setSelectedItems([]);
        }
       }}
      style={{ marginTop: '10px', backgroundColor: '#e74c3c', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer',  fontFamily: 'Figtree' }}
      >
        {t('clearSelection')}
      </button>

      <br />

      {selectedItems.length === 5 && (
        <button onClick={handleSubmit} style={{ marginTop: '20px', fontFamily: 'Figtree' }}>
          {t('submit2')}
        </button>
      )}
    </div>
  );
}

export default YashinTrophyFemenin;