import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import femenin from '../../assets/feminin.png';
import headingImage from '../../assets/kopa.png';

const categories2 = {
  GK: [
      "Akane OKUMA",
      "Evan O'STEEN",
      "Femke LIEFTING",
      "Habiba EMAD SABRY",
      "Hope MCSHEFFREY",
      "Laia LÓPEZ",
      "Luisa AGUDELO",
      "Pak Ju GYONG",
      "Teagan WY",
      "Un-Gyong CHAE"
      ],
  DEF: [
      "Aiara AGIRREZABALA",
      "Emilia SZYMCZAK",
      "Hwang YU-YONG",
      "Judit PUJOLS",
      "Kim KANG-MI",
      "Miracle USANI",
      "Ri Kuk HYANG",
      "Shinomi KOYAMA",
      "Tara ELIMBI GILBERT",
      "Tōko KOGA",
      "Veerle BUURMAN"
      ],
  MID: [
      "Ainhoa ALGUACIL",
      "Alara ŞEHITLER",
      "Celia SEGURA",
      "Claire HUTTON",
      "Daniela GALIC",
      "Giulia DRAGONI",
      "Lily YOHANNES",
      "Maeline MENDY",
      "Momoko TANIKAWA",
      "Paula COMENDADOR",
      "Sheika SCOTT",
      "Sydney SCHERTENLEIB",
      "VICKY López",
      "Wieke KAPTEIN"
      ],
  FW: [
      "Alice SOTO",
      "Alyssa THOMPSON",
      "Choe IL-SON",
      "Claudia MARTÍNEZ",
      "Fridah MUKOMA",
      "Iman BENEY",
      "Jaedyn SHAW",
      "Juju HARRIS",
      "Karla TORRES",
      "Kishi NÚÑEZ",
      "Linda CAICEDO",
      "Michelle AGYEMANG",
      "Montserrat SALDIVAR",
      "Nina MATEJIĆ",
      "Olivia SMITH"
      ],
};

function KopaTrophyFemenin() {
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
    const saved = localStorage.getItem('KopaFSelected');
    if (saved) {
      setSelectedItems(JSON.parse(saved));
   }
  }, []);

  useEffect(() => {
    localStorage.setItem('KopaFSelected', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleSubmit = () => {
    if (selectedItems.length === 5) {
      navigate('/order2f', { state: { selectedItems } });
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
      <h1>{t('KopaF')} 2025</h1>

      <p>{t('KopaInfo2')}</p>
      <p>{t('DatesF')}</p>
      <p>{t('Dates2')}30 {t('July')} 2025</p>

      <h2>{t('selectPlayers4')}</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.entries(categories2).map(([categoryKey, items]) => (
          <div key={categoryKey} style={{ margin: '20px 0', width: '300px' }}>
            <h2>{t(`categories2.${categoryKey}`)}</h2>
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
        localStorage.removeItem('KopaFSelected');
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
          {t('submit2')}
        </button>
      )}
    </div>
  );
}

export default KopaTrophyFemenin;