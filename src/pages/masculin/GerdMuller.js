import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/muller.png';
import sverige from '../../assets/sve.png';
import england from '../../assets/eng.png';
import france from '../../assets/fra.png';
import polska from '../../assets/pol.png';
import nigeria from '../../assets/nig.png';
import norge from '../../assets/nor.png';
import guinea from '../../assets/gui.png';
import brasil from '../../assets/bra.png';
import egypt from '../../assets/egy.png';
import sporting from '../../assets/sportingcp.png';
import bayern from '../../assets/bayern.png';
import madrid from '../../assets/madrid.png';
import barcelona from '../../assets/barcelona.png';
import galatasaray from '../../assets/galatasaray.png';
import mancity from '../../assets/mancity.png';
import dortmund from '../../assets/dortmund.png';
import liverpool from '../../assets/liverpool.png';
import psg from '../../assets/psg.png';
import gyokeres from '../../assets/gyokeres.png';
import kane from '../../assets/kane.png';
import mbappe from '../../assets/mbappe.png';
import lewandowski from '../../assets/lewandowski.png';
import osimhen from '../../assets/osimhen.png';
import haaland from '../../assets/haaland.png';
import guirassy from '../../assets/guirassy.png';
import raphinha from '../../assets/raphinha.png';
import salah from '../../assets/salah.png';
import dembele from '../../assets/dembele.png';
import gyokeres2 from '../../assets/gyokeres2.png';
import kane2 from '../../assets/kane2.png';
import mbappe2 from '../../assets/mbappe2.png';
import lewandowski2 from '../../assets/lewandowski2.png';
import osimhen2 from '../../assets/osimhen2.png';
import haaland2 from '../../assets/haaland2.png';
import guirassy2 from '../../assets/guirassy2.png';
import raphinha2 from '../../assets/raphinha2.png';
import salah2 from '../../assets/salah2.png';
import dembele2 from '../../assets/dembele2.png';

const goals = [
  {
    rank: <h
    style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '30px' }}>
      1
    </h>,
    image: <img
        src={gyokeres}
        alt="Heading Icon"
        style={{ width: '27.87px', height: '40px' }}
      />,
    image2: <img
        src={sverige}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#FFD700' }}>
      VIKTOR
    </h>,
    name: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      GYÖKERES
    </h>,
    image3: <img
        src={sporting}
        alt="Heading Icon"
        style={{ width: '24px', height: '32.22px' }}
      />,
    club: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      Sporting CP
    </h>,
    goals: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      63
    </h>,
    appearances: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      58
    </h>,
    image4: <img
        src={gyokeres2}
        alt="Heading Icon"
        style={{ width: '280px', height: '350px' }}
      />,
    position: "positionRoles.ST",
    header: "VIKTOR Einar GYÖKERES - Sporting Club de Portugal - 04/06/1998 (27)",
    detail: {
    club: {
      name: "SPORTING CP",
      stats: [
        { competition: "Liga Portugal", goals: 39, appearances: 33 },
        { competition: "UEFA Champions League", goals: 6, appearances: 8 },
        { competition: "Taça de Portugal", goals: 5, appearances: 7 },
        { competition: "Taça da Liga", goals: 4, appearances: 3 },
        { competition: "Supertaça de Portugal", goals: 0, appearances: 1 },
      ],
      total: { goals: 54, appearances: 52 }
    },
    country: {
      name: "teams.SWEDEN",
      stats: [
        { competition: "UEFA Nations League - C", goals: 9, appearances: 6 }
      ],
      total: { goals: 9, appearances: 6 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold', fontSize: '30px' }}>
      2
    </h>,
    image: <img
        src={kane}
        alt="Heading Icon"
        style={{ width: '27.86px', height: '40px' }}
      />,
    image2: <img
        src={england}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#C0C0C0' }}>
      HARRY
    </h>,
    name: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      KANE
    </h>,
    image3: <img
        src={bayern}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      Bayern München
    </h>,
    goals: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      48
    </h>,
    appearances: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      60
    </h>,
    image4: <img
        src={kane2}
        alt="Heading Icon"
        style={{ width: '280.04px', height: '350px' }}
      />,
    position: "positionRoles.ST",
    header: "HARRY Edward KANE - Fußball-Club Bayern München - 28/07/1993 (31)",
    detail: {
    club: {
      name: "BAYERN MÜNCHEN",
      stats: [
        { competition: "Bundesliga", goals: 26, appearances: 31 },
        { competition: "UEFA Champions League", goals: 11, appearances: 13 },
        { competition: "DFB Pokal", goals: 1, appearances: 2 },
        { competition: "competitions.FclubWorldCup", goals: 3, appearances: 5 }
      ],
      total: { goals: 41, appearances: 51 }
    },
    country: {
      name: "teams.ENGLAND",
      stats: [
        { competition: "UEFA Nations League - B", goals: 3, appearances: 5 },
        { competition: "competitions.QualificationUEFA", goals: 3, appearances: 3 },
        { competition: "competitions.InternationalFrendlies", goals: 1, appearances: 1 }
      ],
      total: { goals: 7, appearances: 9 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#CD7F32', fontWeight: 'bold', fontSize: '30px' }}>
      3
    </h>,
    image: <img
        src={mbappe}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={france}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h 
    style={{ color: '#CD7F32' }}>
      KYLIAN
    </h>,
    name: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      MBAPPÉ
    </h>,
    image3: <img
        src={madrid}
        alt="Heading Icon"
        style={{ width: '23.07px', height: '32.22px' }}
      />,
    club: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      Real Madrid
    </h>,
    goals: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      46
    </h>,
    appearances: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      65
    </h>,
    image4: <img
        src={mbappe2}
        alt="Heading Icon"
        style={{ width: '332.9px', height: '350px' }}
      />,
    position: "positionRoles.ST",
    header: "KYLIAN MBAPPÉ Lottin - Real Madrid Club de Fútbol - 20/12/1998 (26)",
    detail: {
    club: {
      name: "REAL MADRID",
      stats: [
        { competition: "LaLiga EA Sports", goals: 31, appearances: 34 },
        { competition: "UEFA Champions League", goals: 7, appearances: 14 },
        { competition: "Copa del Rey", goals: 2, appearances: 4 },
        { competition: "Supercopa de España", goals: 1, appearances: 2 },
        { competition: "competitions.UEFASuperCup", goals: 1, appearances: 1 },
        { competition: "competitions.InternationalCup", goals: 1, appearances: 1 },
        { competition: "competitions.FclubWorldCup", goals: 1, appearances: 3 },
      ],
      total: { goals: 44, appearances: 59 }
    },
    country: {
      name: "teams.FRANCE",
      stats: [
        { competition: "UEFA Nations League - A", goals: 2, appearances: 6 }
      ],
      total: { goals: 2, appearances: 6 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      4
    </h>,
    image: <img
        src={haaland}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={norge}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      ERLING
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      HAALAND
    </h>,
    image3: <img
        src={mancity}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Man City
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      45
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      58
    </h>,
    image4: <img
        src={haaland2}
        alt="Heading Icon"
        style={{ width: '170.52px', height: '350px' }}
      />,
    position: "positionRoles.ST",
    header: "ERLING Braut HAALAND - Manchester City Football Club - 21/07/2000 (24)",
    detail: {
    club: {
      name: "MAN CITY",
      stats: [
        { competition: "Premier League", goals: 22, appearances: 31 },
        { competition: "UEFA Champions League", goals: 8, appearances: 9 },
        { competition: "FA Cup", goals: 1, appearances: 3 },
        { competition: "FA Community Shield", goals: 0, appearances: 1 },
        { competition: "competitions.FclubWorldCup", goals: 3, appearances: 4 },
      ],
      total: { goals: 34, appearances: 48 }
    },
    country: {
      name: "teams.NORWAY",
      stats: [
        { competition: "UEFA Nations League - A", goals: 7, appearances: 6 },
        { competition: "competitions.QualificationUEFA", goals: 4, appearances: 4 }
      ],
      total: { goals: 11, appearances: 10 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =5
    </h>,
    image: <img
        src={guirassy}
        alt="Heading Icon"
        style={{ width: '31.33px', height: '40px' }}
      />,
    image2: <img
        src={guinea}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      SERHOU
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      GUIRASSY
    </h>,
    image3: <img
        src={dortmund}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Dortmund
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      44
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      56
    </h>,
    image4: <img
        src={guirassy2}
        alt="Heading Icon"
        style={{ width: '238.28px', height: '350px' }}
      />,
    position: "positionRoles.ST",
    header: "SERHOU Yadaly GUIRASSY - Borussia Dortmund 09 - 12/03/1996 (29)",
    detail: {
    club: {
      name: "DORTMUND",
      stats: [
        { competition: "Bundesliga", goals: 21, appearances: 30 },
        { competition: "UEFA Champions League", goals: 13, appearances: 14 },
        { competition: "DFB Pokal", goals: 0, appearances: 1 },
        { competition: "competitions.FclubWorldCup", goals: 4, appearances: 5 }
      ],
      total: { goals: 38, appearances: 50 }
    },
    country: {
      name: "teams.GUINEA",
      stats: [
        { competition: "competitions.QualificationCAF", goals: 0, appearances: 2 },
        { competition: "competitions.QualificationAFCON", goals: 6, appearances: 4 }
      ],
      total: { goals: 6, appearances: 6 }
      }
    }
  },   
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =5
    </h>,
    image: <img
        src={lewandowski}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={polska}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      ROBERT
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      LEWANDOWSKI
    </h>,
    image3: <img
        src={barcelona}
        alt="Heading Icon"
        style={{ width: '31.76px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      FC Barcelona
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      44
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      58
    </h>,
    image4: <img
        src={lewandowski2}
        alt="Heading Icon"
        style={{ width: '277.73px', height: '350px' }}
      />,
    position: "positionRoles.ST",
    header: "ROBERT LEWANDOWSKI - Fútbol Club Barcelona - 21/08/1988 (36)",
    detail: {
    club: {
      name: "FC BARCELONA",
      stats: [
        { competition: "LaLiga EA Sports", goals: 27, appearances: 34 },
        { competition: "UEFA Champions League", goals: 11, appearances: 13 },
        { competition: "Copa del Rey", goals: 3, appearances: 3 },
        { competition: "Supercopa de España", goals: 1, appearances: 2 },
      ],
      total: { goals: 42, appearances: 52 }
    },
    country: {
      name: "teams.POLAND",
      stats: [
        { competition: "UEFA Nations League - A", goals: 1, appearances: 4 },
        { competition: "competitions.QualificationUEFA", goals: 1, appearances: 2 }
      ],
      total: { goals: 2, appearances: 6 }
      }
    }
  }, 
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      7
    </h>,
    image: <img
        src={osimhen}
        alt="Heading Icon"
        style={{ width: '30.53px', height: '40px' }}
      />,
    image2: <img
        src={nigeria}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      VICTOR
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      OSIMHEN
    </h>,
    image3: <img
        src={galatasaray}
        alt="Heading Icon"
        style={{ width: '25.84px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Galatasaray
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      42
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      47
    </h>,
    image4: <img
        src={osimhen2}
        alt="Heading Icon"
        style={{ width: '407.278px', height: '350px' }}
      />,
    position: "positionRoles.ST",
    header: "VICTOR James OSIMHEN - Galatasaray Spor Kulübü - 29/12/1998 (26)",
    detail: {
    club: {
      name: "GALATASARAY",
      stats: [
        { competition: "Süper Lig", goals: 26, appearances: 30 },
        { competition: "competitions.TurkishCup", goals: 5, appearances: 4 },
        { competition: "UEFA Europa League", goals: 6, appearances: 7 }
      ],
      total: { goals: 37, appearances: 41 }
    },
    country: {
      name: "teams.NIGERIA",
      stats: [
        { competition: "competitions.QualificationCAF", goals: 3, appearances: 2 },
        { competition: "competitions.QualificationAFCON", goals: 2, appearances: 4 }
      ],
      total: { goals: 5, appearances: 6 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      8
    </h>,
    image: <img
        src={raphinha}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={brasil}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name: <h
    style={{ fontWeight: 'bold' }}>
      RAPHINHA
    </h>,
    image3: <img
        src={barcelona}
        alt="Heading Icon"
        style={{ width: '31.76px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      FC Barcelona
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      38
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      62
    </h>,
    image4: <img
        src={raphinha2}
        alt="Heading Icon"
        style={{ width: '162.24px', height: '350px' }}
      />,
    position: "positionRoles.LW",
    header: "Raphael Dias Belloli 'RAPHINHA' - Fútbol Club Barcelona - 14/12/1996 (28)",
    detail: {
    club: {
      name: "FC BARCELONA",
      stats: [
        { competition: "La Liga EA Sports", goals: 18, appearances: 36 },
        { competition: "UEFA Champions League", goals: 13, appearances: 14 },
        { competition: "Copa del Rey", goals: 1, appearances: 5 },
        { competition: "Supercopa de España", goals: 2, appearances: 2 }
      ],
      total: { goals: 34, appearances: 57 }
    },
    country: {
      name: "teams.BRAZIL",
      stats: [
        { competition: "competitions.QualificationCONMEBOL", goals: 4, appearances: 5 }
      ],
      total: { goals: 4, appearances: 5 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =9
    </h>,
    image: <img
        src={salah}
        alt="Heading Icon"
        style={{ width: '39.84px', height: '40px' }}
      />,
    image2: <img
        src={egypt}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      MOHAMED
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      SALAH
    </h>,
    image3: <img
        src={liverpool}
        alt="Heading Icon"
        style={{ width: '23.84px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Liverpool
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      37
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      57
    </h>,
    image4: <img
        src={salah2}
        alt="Heading Icon"
        style={{ width: '231.18px', height: '350px' }}
      />,
    position: "positionRoles.RW",
    header: "MOHAMED SALAH Hamed Mahrous Ghaly - Liverpool Football Club - 15/06/1992 (33)",
    detail: {
    club: {
      name: "LIVERPOOL",
      stats: [
        { competition: "Premier League", goals: 29, appearances: 38 },
        { competition: "UEFA Champions League", goals: 3, appearances: 9 },
        { competition: "EFL Cup", goals: 2, appearances: 5 }
      ],
      total: { goals: 34, appearances: 52 }
    },
    country: {
      name: "teams.EGYPT",
      stats: [
        { competition: "competitions.QualificationCAF", goals: 1, appearances: 2 },
        { competition: "competitions.QualificationAFCON", goals: 2, appearances: 3}
      ],
      total: { goals: 3, appearances: 5 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =9
    </h>,
    image: <img
        src={dembele}
        alt="Heading Icon"
        style={{ width: '32.39px', height: '40px' }}
      />,
    image2: <img
        src={france}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      OUSMANE
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      DEMBÉLÉ
    </h>,
    image3: <img
        src={psg}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      PSG
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      37
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      60
    </h>,
    image4: <img
        src={dembele2}
        alt="Heading Icon"
        style={{ width: '237.4px', height: '350px' }}
      />,
    position: "positionRoles.ST",
    header: "Masour OUSMANE DEMBÉLÉ - Paris Saint-Germain - 15/05/1997 (28)",
    detail: {
    club: {
      name: "PSG",
      stats: [
        { competition: "Ligue 1", goals: 21, appearances: 29 },
        { competition: "UEFA Champions League", goals: 8, appearances: 15 },
        { competition: "Coupe de France", goals: 3, appearances: 4 },
        { competition: "Trophée des Champions", goals: 1, appearances: 1 },
        { competition: "competitions.FclubWorldCup", goals: 2, appearances: 4 },
      ],
      total: { goals: 35, appearances: 53 }
    },
    country: {
      name: "teams.FRANCE",
      stats: [
        { competition: "UEFA Nations League - A", goals: 2, appearances: 7 }
      ],
      total: { goals: 2, appearances: 7 }
      }
    }
  },
];

function GerdMuller() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
    backgroundColor: '#f8f8f8'
  };

  const sectionHeader = {
    backgroundColor: '#dde6f2',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '8px'
  };

  const subHeader = {
    backgroundColor: '#002a5c',
    color: '#fff',
    fontWeight: 'bold',
    padding: '6px',
  };

  const tdStyle = {
    padding: '6px 10px',
    borderBottom: '1px solid #ccc',
  };

  const totalRow = {
    backgroundColor: '#e8e8e8',
    fontWeight: 'bold',
    //textAlign: 'center',
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '40px 20px' }}>
      <img
        src={headingImage}
        alt="Heading Icon"
        style={{ width: '120px', height: '150px' }}
      />
      <h1>{t('Muller')} 2025</h1>
      <p>{t('muller')}</p>
      <p>{t('Dates')}</p>
      <p>{t('Dates2')}13 {t('July')} 2025</p>
      <br />
      <h3>{t('mullerR')}</h3>
      <div style={{ marginTop: '30px' }}>
        {goals.map((goal, index) => (
          <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc' }}>
            <button
              onClick={() => toggle(index)}
              style={{
                background: 'none',
                border: 'none',
                width: '100%',
                textAlign: 'center',
                padding: '10px 0',
                fontSize: '18px',
                fontFamily: 'Figtree',
                cursor: 'pointer'
              }}
            >
              {goal.rank} {goal.image} - {goal.image2} {goal.name1} {goal.name} - {goal.image3} {goal.club} - {goal.goals} - {goal.appearances}
            </button>
            {openIndex === index && (
              <div style={{ padding: '10px 0' }}>
                <p style={{ marginBottom: '10px' }}>
                  {goal.header} - {t(goal.position)}
                </p>
              <div style={{ display: 'flex', gap: '20px', padding: '20px 0' }}>
                <div style={{ minWidth: '160px' }}>{goal.image4}</div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {goal.detail?.club && (
                      <table style={tableStyle}>
                        <thead>
                          <tr><th colSpan="2" style={sectionHeader}>{goal.detail.club.name}</th></tr>
                          <tr><th style={subHeader}>{t('competition')}</th><th style={subHeader}>{t('goalsAppearances')}</th></tr>
                        </thead>
                        <tbody>
                          {goal.detail.club.stats.map((row, i) => (
                            <tr key={i}>
                              <td style={tdStyle}>{t(row.competition)}</td>
                              <td style={tdStyle}>{row.goals} - {row.appearances}</td>
                            </tr>
                          ))}
                          <tr style={totalRow}><td>{t('total')}</td><td>{goal.detail.club.total.goals} - {goal.detail.club.total.appearances}</td></tr>
                        </tbody>
                      </table>
                    )}
                    {goal.detail?.country && (
                      <table style={tableStyle}>
                        <thead>
                          <tr><th colSpan="2" style={sectionHeader}>{t(goal.detail.country.name)}</th></tr>
                          <tr><th style={subHeader}>{t('competition')}</th><th style={subHeader}>{t('goalsAppearances')}</th></tr>
                        </thead>
                        <tbody>
                          {goal.detail.country.stats.map((row, i) => (
                            <tr key={i}>
                              <td style={tdStyle}>{t(row.competition)}</td>
                              <td style={tdStyle}>{row.goals} - {row.appearances}</td>
                            </tr>
                          ))}
                          <tr style={totalRow}><td>{t('total')}</td><td>{goal.detail.country.total.goals} - {goal.detail.country.total.appearances}</td></tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
                </div>
              )}
            </div>
          ))}
       </div>
      {/*<p>*{t('clubWorldCup')}</p>*/}
    </div>
  );
}

export default GerdMuller;