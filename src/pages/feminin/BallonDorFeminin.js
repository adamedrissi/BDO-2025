import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/ballondor2.png';
import femenin from '../../assets/feminin.png';

const categories2 = {
  GK: [
      "Adriana NANCLARES",
      "Ann-Katrin BERGER",
      "Anna MOORHOUSE",
      "Aubrey KINGSBURY",
      "Ayaka YAMASHITA",
      "Cata COLL",
      "Chiamaka NNADOZIE",
      "Christiane ENDLER",
      "Daphne VAN DOMSELAAR",
      "Habiba EMAD SABRY",
      "Hannah HAMPTON",
      "Inês PEREIRA",
      "Kaelin SHERIDAN",
      "Khadija ER-RMICHI",
      "Laura GIULIANI",
      "Lola GALLARDO",
      "LORENA Leite",
      "Maria Luisa GROHS",
      "Misa RODRÍGUEZ",
      "Phallon TULLIS-JOYCE"
      ],
  DEF: [
      "Alexia FERNÁNDEZ",
      "Casey KRUEGER",
      "Ellie CARPENTER",
      "Emily FOX",
      "Emily SAMS",
      "Esmee BRUGTS",
      "Jenna NIGHSWONGER",
      "Kaleigh KURTZ",
      "Leah WILLIAMSON",
      "Lucy BRONZE",
      "Maëlle LAKRAR",
      "María Pilar 'MAPI' LEÓN",
      "Millie BRIGHT",
      "Nathalie BJÖRN",
      "Naomi GIRMA",
      "Ona BATLLE",
      "Sakina KARCHAOUI",
      "Sandy BALTIMORE",
      "Selma BACHA",
      "Tara ELIMBI GILBERT",
      "Vanessa GILLES",
      "Wendie RENARD"
      ],
  MID: [
      "AITANA Bonmatí",
      "ALEXIA Putellas",
      "Caroline WEIR",
      "Claire LAVOGEZ",
      "Clàudia PINA",
      "Croix BETHUNE",
      "Damaris EGURROLA",
      "'DEBINHA Miri'",
      "Frida MAANUM",
      "Grace CLINTON",
      "Grace GEYORO",
      "Hal HERSHFELT",
      "Jule BRAND",
      "Katie MCCABE",
      "Katrina GORRY",
      "Keira WALSH",
      "Kessya BUSSY",
      "Kim LITTLE",
      "'KIKA' Nazareth",
      "Lauren JAMES",
      "Lindsey HEAPS (Horan)",
      "Lo'eau LABONTA",
      "MARIONA Caldentey",
      "Melchie DUMORNAY",
      "'PATRI' Guijarro",
      "Vanessa DIBERNARDO",
      "VICKY López",
      "Vilde BØE RISA"
      ],
  FW: [
      "Alba REDONDO",
      "Alessia RUSSO",
      "Alexandra POPP",
      "Alyssa THOMPSON",
      "Barbra BANDA",
      "Caroline GRAHAM HANSEN",
      "Chloe KELLY",
      "Clara MATEO",
      "Cristiana GIRELLI",
      "Cristina MARTÍN-PRIETO",
      "Delphine CASCARINO",
      "Edna IMADE",
      "Ewa PAJOR",
      "Gift MONDAY",
      "Guro REITEN",
      "Kadidiatou DIANI",
      "Khadija SHAW",
      "Laura FREIGANG",
      "Lineth BEERENSTEYN",
      "Linda CAICEDO",
      "Mary FOWLER",
      "Salma PARALLUELO",
      "Signe BRUUN",
      "Olivia SMITH",
      "Pernille HARDER",
      "Sophia WILSON (Smith)",
      "Stina BLACKSTENIUS",
      "Sveindís JÓNSDÓTTIR",
      "Tabitha CHAWINGA",
      "Trinity RODMAN"
      ],
};

function BallonDorFemenin() {
  const { t } = useTranslation();
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const toggleSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else if (selectedItems.length < 30) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('ballonDorFSelected');
    if (saved) {
      setSelectedItems(JSON.parse(saved));
   }
  }, []);

  useEffect(() => {
    localStorage.setItem('ballonDorFSelected', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleSubmit = () => {
    if (selectedItems.length === 30) {
      navigate('/order1f', { state: { selectedItems } });
    } else {
      alert('Please select exactly 30 items.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
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

      <h1>{t('BDOF')} 2025</h1>

      <p>{t('DatesF')}</p>
      <p>{t('Dates2')}27 {t('July')} 2025</p>

      <h2>{t('selectPlayers2')}</h2>

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
        <p>{t('selected2')}{selectedItems.length} / 30</p>
      </div>

      <button
        onClick={() => {
        if (window.confirm(t('sureSelection'))) {
        localStorage.removeItem('ballonDorFSelected');
        setSelectedItems([]);
        }
       }}
      style={{ marginTop: '10px', backgroundColor: '#e74c3c', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'Figtree' }}
      >
        {t('clearSelection')}
      </button>

      <br />

      {selectedItems.length === 30 && (
        <button onClick={handleSubmit} style={{ marginTop: '20px', fontFamily: 'Figtree' }}>
          {t('submit2')}
        </button>
      )}
    </div>
  );
}

export default BallonDorFemenin;