import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/kopa.png';

const categories = {
  GK: [
      "Alessandro NUNZIANTE",
      "André Nogueira GOMES",
      "Deniz DÖNMEZER",
      "Dennis SEIMEN",
      "Diego KOCHEN",
      "Elis BISHESARI",
      "Filip SIDKLEV",
      "Guillaume RESTES",
      "Jacopo SEGHETTI",
      "Max SCHMITT",
      "Mike PENDERS",
      "Matthieu EPOLO",
      "Onuralp ÇEVIKKAN",
      "Pablo Emiliano LARA",
      "Plamen ANDREEV",
      "Robin RISSER",
      "Theo SANDER",
      "Tiago PEREIRA-CARDOSO",
      "Tommaso MARTINELLI"
      ],
  DEF: [
      "Adam AZNOU",
      "Andreas CUENCA",
      "Christian MAWISSA",
      "Dean HUIJSEN",
      "El Chadaille BITSHIABU",
      "Finn JELTSCH",
      "Givairo READ",
      "Héctor FORT",
      "Joan MARTÍNEZ",
      "Jorrel HATO",
      "Josh ACHEAMPONG",
      "Leny YORO",
      "Lewis HALL",
      "Luka VUŠKOVIĆ",
      "Mamadou SARR",
      "Martim FERNANDES",
      "Myles LEWIS-SKELLY",
      "Pau CUBARSÍ",
      "Pietro COMUZZO",
      "Rico LEWIS",
      "Sergi DOMÍNGUEZ",
      "Vitor REIS"
      ],
  MID: [
      "Andrija MAKSIMOVIĆ",
      "Archie GRAY",
      "Arda GÜLER",
      "Assan OUÉDRAOGO",
      "Ayyoub BOUADDI",
      "Bilal EL KHANNOUSS",
      "Cavan SULLIVAN",
      "Chris RIGG", 
      "Claudio ECHEVERRI",
      "Ethan NWANERI",
      "Gilberto MORA",
      "João NEVES",
      "Jobe BELLINGHAM",
      "Kenan YILDIZ",
      "Kendry PÁEZ",
      "Konstantinos KARETSAS",
      "Kobbie MAINOO",
      "Lewis MILEY",
      "Lucas BERGVALL",
      "Malick FOFANA",
      "Marc BERNAL",
      "Nico PAZ",
      "Rodrigo MORA",
      "Senny MAYULU",
      "Sverre NYPAN",
      "Tom BISCHOF",
      "Vasilije ADŽIĆ",
      "Warren ZAÏRE-EMERY"
      ],
  FW: [
      "Agustín RUBERTO",
      "Amara DIOUF",
      "Charalampos KOSTOULAS",
      "Chido OBI",
      "Dani RODRÍGUEZ",
      "Désiré DOUÉ",
      "Eilesse BEN SEGHIR",
      "Eli Junior KROUPI",
      "ENDRICK Moreira",
      "ESTÊVÃO Willian",
      "Francesco CAMARDA",
      "Franco MASTANTUONO",
      "George ILENIKHENA",
      "Geovany QUENDA",
      "GUILHERME Gomes",
      "Guille FERNÁNDEZ",
      "Roony BARDGHJI",
      "Jamie GITTENS",
      "Julien DURANVILLE",
      "Marc GUIU",
      "Mathys TEL",
      "Mattia LIBERALI",
      "Mikey MOORE",
      "Rio NGUMOHA",
      "Santiago CASTRO",
      "Stefanos TZIMAS",
      "Toni FERNÁNDEZ",
      "Tyler DIBLING",
      "Vitor ROQUE",
      "Yang MIN-HYEOK"
      ],
};

function KopaTrophy() {
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
      const saved = localStorage.getItem('KopaSelected');
      if (saved) {
        setSelectedItems(JSON.parse(saved));
     }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('KopaSelected', JSON.stringify(selectedItems));
    }, [selectedItems]);

  const handleSubmit = () => {
    if (selectedItems.length === 10) {
      navigate('/order2', { state: { selectedItems } });
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
      <h1>{t('Kopa')} 2025</h1>

      <p>{t('KopaInfo')}</p>
      <p>{t('Dates')}</p>
      <p>{t('Dates2')}13 {t('July')} 2025</p>

      <h2>{t('selectPlayers3')}</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.entries(categories).map(([categoryKey, items]) => (
          <div key={categoryKey} style={{ margin: '20px 0', width: '300px' }}>
            <h2>{t(`categories.${categoryKey}`)}</h2>
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
        localStorage.removeItem('KopaSelected');
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

export default KopaTrophy;