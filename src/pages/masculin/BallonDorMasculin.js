import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/ballondor2.png';

const categories = {
  GK: [
    "Ahmed EL-SHENAWY",
    "Alex MERET",
    "Álex REMIRO",
    "ALISSON Becker",
    "Augusto BATALLA",
    "Bernd LENO",
    "David RAYA",
    "David SORIA",
    "Dean HENDERSON",
    "'DIBU' Martínez",
    "Diogo COSTA",
    "Djordje PETROVIĆ",
    "EDERSON De Moraes",
    "Finn DAHMEN",
    "Franco ARMANI",
    "Gianluigi DONNARUMMA",
    "Jan OBLAK",
    "Joan GARCÍA",
    "JOHN Victor",
    "Jordan PICKFORD",
    "KEPA Arrizabalaga",
    "Lucas CHEVALIER",
    "Lukáš HORNÍČEK",
    "Manuel NEUER",
    "Marco CARNESECCHI",
    "Mark FLEKKEN",
    "Matz SELS",
    "Mike MAIGNAN",
    "Mile SVILAR",
    "Nick POPE",
    "Noah ATUBOLU",
    "Robert SÁNCHEZ",
    "Rui SILVA",
    "Sergio HERRERA",
    "Thibaut COURTOIS",
    "Unai SIMÓN",
    "Vanja MILINKOVIĆ-SAVIĆ",
    "Wojciech SZCZĘSNY",
    "Yann SOMMER",
    "Yassine BOUNOU"
    ],
  DEF: [
    "Achraf HAKIMI",
    "Alejandro BALDE",
    "Alessandro BASTONI",
    "Alessandro BUONGIORNO",
    "Alexis SAELEMAEKERS",
    "Alphonso DAVIES",
    "Álvaro CARRERAS",
    "Amir RRAHMANI",
    "Andrei RAŢIU",
    "Antonee ROBINSON",
    "Antonio RÜDIGER",
    "Dani VIVIAN",
    "Davide ZAPPACOSTA",
    "Dean HUIJSEN",
    "Denzel DUMFRIES",
    "Federico DIMARCO",
    "Francisco MOURA",
    "GABRIEL Magalhães",
    "Gonçalo INÁCIO",
    "Ibrahima KONATÉ",
    "Iñigo MARTÍNEZ",
    "Jeremie FRIMPONG",
    "Josema GIMÉNEZ",
    "Joško GVARDIOL",
    "Jules KOUNDÉ",
    "Jurrien TIMBER",
    "Leonardo BALERDI",
    "Manuel AKANJI",
    "Marc GUÉHI",
    "MARQUINHOS Corrêa",
    "Milos KERKEZ",
    "MURILLO Santiago",
    "Myles LEWIS-SKELLY",
    "Nico SCHLOTTERBECK",
    "Nicolás OTAMENDI",
    "Nuno MENDES",
    "Óscar MINGUEZA",
    "Pau CUBARSÍ",
    "Pedro PORRO",
    "Sergi CARDONA",
    "Theo HERNÁNDEZ",
    "Thiago SILVA",
    "Virgil VAN DIJK",
    "William SALIBA",
    "Willian PACHO"
    ],
  MID: [
    "Adrien RABIOT",
    "Alex BAENA",
    "Alexis MAC ALLISTER",
    "Andrey SANTOS",
    "Aurélien TCHOUAMÉNI",
    "AYOZE Pérez",
    "Bernardo SILVA",
    "Bruno FERNANDES",
    "Bruno GUIMARÃES",
    "Charles DE KETELAERE",
    "Cole PALMER",
    "Dani OLMO",
    "Declan RICE",
    "Dominik SZOBOSZLAI",
    "ÉDERSON José",
    "Eduardo CAMAVINGA",
    "Enzo FERNÁNDEZ",
    "FABIÁN Ruiz",
    "Fede VALVERDE",
    "Florian WIRTZ",
    "Frenkie DE JONG",
    "Granit XHAKA",
    "Halkan ÇALHANOĞLU",
    "'ISCO' Alarcón",
    "Jamal MUSIALA",
    "João NEVES",
    "JOHNNY Cardoso",
    "Joshua KIMMICH",
    "Jude BELLINGHAM",
    "Julian BRANDT",
    "Marc CASADÓ",
    "Marcos LLORENTE",
    "Martin ØDEGAARD",
    "Mateo KOVAČIĆ",
    "Mauro ARAMBARRI",
    "Mikel JAUREGIZAR",
    "Moisés CAICEDO",
    "Morgan ROGERS",
    "Morten HJULMAND",
    "Nico PAZ",
    "Nicolo BARELLA",
    "Oihan SANCET",
    "Orkun KÖKÇÜ",
    "Pape GUEYE",
    "Patrick BERG",
    "'PEDRI' González",
    "Rayan CHERKI",
    "Rodrigo DE PAUL",
    "Ryan GRAVENBERCH",
    "Scott MCTOMINAY",
    "Thomas PARTEY",
    "Tijjani REIJNDERS",
    "'VITINHA' Machado",
    "Xavi SIMONS",
    "Youri TIELEMANS"
    ],
  FW: [
    "Ademola LOOKMAN",
    "Alexander ISAK",
    "Alexander SØRLOTH",
    "AMAD Diallo",
    "Ante BUDIMIR",
    "Anthony ELANGA",
    "Antoine GRIEZMANN",
    "Bradley BARCOLA",
    "Brennan JOHNSON",
    "Bryan MBEUMO",
    "Bukayo SAKA",
    "Chris WOOD",
    "Christian PULISIC",
    "CRISTIANO RONALDO dos Santos",
    "Desiré DOUÉ",
    "Dominik SOLANKE",
    "Eberechi EZE",
    "Erling HAALAND",
    "Ferran TORRES",
    "Harry KANE",
    "Heung-min SON",
    "Iñaki WILLAMS",
    "Jacob MURPHY",
    "Jarrod BOWEN",
    "Jhon ARIAS",
    "Jonathan DAVID",
    "Julián ÁLVAREZ",
    "Kerem AKTÜRKOĞLU",
    "Khvicha KVARATSKHELIA",
    "Kylian MBAPPÉ",
    "LAMINE YAMAL Nasraoui",
    "LAUTARO Martínez",
    "Lionel MESSI",
    "Luis DÍAZ",
    "Marcus THURAM",
    "Mason GREENWOOD",
    "Mateo RETEGUI",
    "Matheus CUNHA",
    "Matias SOULÉ",
    "Mattia ZACCAGNI",
    "Michael OLISE",
    "Mohamed SALAH",
    "Moise KEAN",
    "Nicholas 'NICO' WILLIAMS",
    "Ollie WATKINS",
    "Omar MARMOUSH",
    "Ousmane DEMBÉLÉ",
    "Paulo DYBALA",
    "Raoul BELLANOVA",
    "'RAPHINHA' Dias",
    "Robert LEWANDOWSKI",
    "RODRYGO Goes",
    "Romelu LUKAKU",
    "SAMU Aghehowa",
    "Serhou GUIRASSY",
    "Vangelis PAVLIDIS",
    "Victor OSIMHEN",
    "Viktor GYÖKERES",
    "VINÍCIUS Júnior",
    "Yoane WISSA"
    ],
};

function BallonDorMasculin() {
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
    const saved = localStorage.getItem('ballonDorSelected');
    if (saved) {
      setSelectedItems(JSON.parse(saved));
   }
  }, []);

  useEffect(() => {
    localStorage.setItem('ballonDorSelected', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleSubmit = () => {
    if (selectedItems.length === 30) {
      navigate('/order1', { state: { selectedItems } });
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

      <h1>{t('BDO')} 2025</h1>

      <p>{t('Dates')}</p>
      <p>{t('Dates2')}13 {t('July')} 2025</p>

      <h2>{t('selectPlayers')}</h2>

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
        <p>{t('selected')}{selectedItems.length} / 30</p>
      </div>

      <button
        onClick={() => {
        if (window.confirm(t('sureSelection'))) {
        localStorage.removeItem('ballonDorSelected');
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
          {t('submit')}
        </button>
      )}
    </div>
  );
}

export default BallonDorMasculin;