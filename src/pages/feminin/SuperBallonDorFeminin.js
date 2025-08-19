import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/superballondor.png';
import femenin from '../../assets/feminin.png';
import brasil from '../../assets/bra.png';
import deutschland from '../../assets/deu.png';
import españa from '../../assets/esp.png';
import usa from '../../assets/usa.png';
import vascodagama from '../../assets/vascodagama.png';
import santacruz from '../../assets/santacruz.png';
import umea from '../../assets/umea.png';
import sol from '../../assets/lasol.png';
import santos from '../../assets/santos.png';
import goldpride from '../../assets/goldpride.png';
import wnyflash from '../../assets/westernnyflash.png';
import tyreso from '../../assets/tyreso.png';
import rosengard from '../../assets/rosengard.png';
import orlando from '../../assets/orlandopride.png';
import fsvfrankfurt from '../../assets/fsvfrankfurt.png';
import frankfurt from '../../assets/frankfurt.png';
import carolina from '../../assets/carolinacourage.png';
import espanyol from '../../assets/espanyol.png';
import levante from '../../assets/levante.png';
import barcelona from '../../assets/barcelona.png';
import washington from '../../assets/washingtonfreedom.png';
import marta from '../../assets/marta.png';
import prinz from '../../assets/prinz.png';
import alexia from '../../assets/alexia.png';
import aitana from '../../assets/aitana.png';
import hamm from '../../assets/hamm.png';
import marta2 from '../../assets/marta2.png';
import prinz2 from '../../assets/prinz2.png';
import alexia2 from '../../assets/alexia3.png';
import aitana2 from '../../assets/aitana2.png';
import hamm2 from '../../assets/hamm2.png';
import ballondor from '../../assets/ballondor2.png';
import thebest from '../../assets/thebest.png';
import fifapoty from '../../assets/fifapoty.png';

const goals = [
  {
    rank: <h
    style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '30px' }}>
      1
    </h>,
    image: <img
        src={marta}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={brasil}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      MARTA
    </h>,
    image3: <img
      src={vascodagama}
      alt="Heading Icon"
      style={{ width: '26.07px', height: '32.22px' }}
    />,
    image31: <img
      src={santacruz}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image32: <img
      src={umea}
      alt="Heading Icon"
      style={{ width: '24.18px', height: '32.22px' }}
    />,
    image33: <img
      src={sol}
      alt="Heading Icon"
      style={{ width: '42.03px', height: '32.22px' }}
    />,
    image34: <img
      src={santos}
      alt="Heading Icon"
      style={{ width: '34.93px', height: '32.22px' }}
    />,
    image35: <img
      src={goldpride}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image36: <img
      src={wnyflash}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image37: <img
      src={tyreso}
      alt="Heading Icon"
      style={{ width: '47.13px', height: '32.22px' }}
    />,
    image38: <img
      src={rosengard}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image39: <img
      src={orlando}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    club: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      Vasco da Gama/Santa Cruz/Umeå/Sol/Santos/Gold Pride/Flash/Tyresö/Rosengård/Orlando Pride
    </h>,
    goals: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      309
    </h>,
    assists: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      N/A
    </h>,
    appearances: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      539 *
    </h>,
    image5: <img
      src={thebest}
      alt="Heading Icon"
      style={{ width: '47.35px', height: '32.22px' }}
    />,
    image51: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,
    image52: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,    
    image53: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,
    image54: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,
    image55: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,        
    image4: <img
      src={marta2}
      alt="Heading Icon"
      style={{ width: '161px', height: '350px' }}
    />,
    position: "positionRoles2.ST",
    position2: "positionRoles2.CAM",
    header: "MARTA Vieira da Silva - 1x The Best FIFA Women's Player & 5x FIFA Women's World Player of the Year - 19/02/1986 (39)",
    detail: {
    club: {
      name: "teams.CLUB",
      stats: [
        { competition: "2000-2002 VASCO DA GAMA", goals: 4, assists: "N/A", appearances: 16 },
        { competition: "2002-2004 SANTA CRUZ", goals: 16, assists: "N/A", appearances: 38 },
        { competition: "2004-2008 UMEÅ IK", goals: 111, assists: "N/A", appearances: 103 },
        { competition: "2009 LOS ANGELES SOL", goals: 10, assists: "N/A", appearances: 19 },
        { competition: "2009-2010 SANTOS", goals: 26, assists: "N/A", appearances: 14 },
        { competition: "2010 GOLD PRIDE", goals: 19, assists: "N/A", appearances: 24 },
        { competition: "2011 SANTOS", goals: 13, assists: "N/A", appearances: 12 },
        { competition: "2011 WESTERN NEW YORK FLASH", goals: 10, assists: "N/A", appearances: 14 },
        { competition: "2012-2014 TYRESÖ", goals: 27, assists: "N/A", appearances: 38 },
        { competition: "2014-2017 ROSENGÅRD", goals: 23, assists: "N/A", appearances: 43 },
        { competition: "2017- ORLANDO PRIDE", goals: 40, assists: "N/A", appearances: 118 },
      ],
      total: { goals: 189, assists: "N/A", appearances: 334 }
    },
    country: {
      name: "teams.BRAZIL",
      stats: [
        { competition: "2002 SUB-19", goals: "N/A", assists: "N/A", appearances: "N/A" },
        { competition: "2002-2025 ABSOLUTA", goals: 120, assists: "N/A", appearances: 205 }
      ],
      total: { goals: 120, assists: "N/A", appearances: 205 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold', fontSize: '30px' }}>
      2
    </h>,
    image: <img
        src={prinz}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={deutschland}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#C0C0C0' }}>
      BIRGIT
    </h>,
    name: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      PRINZ
    </h>,
    image3: <img
      src={fsvfrankfurt}
      alt="Heading Icon"
      style={{ width: '27.27px', height: '32.22px' }}
    />,  
    image31: <img
      src={frankfurt}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image32: <img
      src={carolina}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    club: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      FSV Frankfurt/Eintracht Frankfurt/Carolina Courage
    </h>,
    goals: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      410
    </h>,
    assists: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      N/A
    </h>,
    appearances: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      496
    </h>,
    image5: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,
    image51: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,
    image52: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,
    image4: <img
      src={prinz2}
      alt="Heading Icon"
      style={{ width: '252.72px', height: '350px' }}
    />,
    position: "positionRoles2.ST",
    header: "BIRGIT PRINZ - 3x FIFA Women's World Player of the Year - 25/10/1977 (47)",
    detail: {
    club: {
      name: "teams.CLUB",
      stats: [
        { competition: "1993-1998 FSV FRANKFURT", goals: 45, assists: "N/A", appearances: 57 },
        { competition: "1998-2002 EINTRACHT FRANKFURT", goals: 78, assists: "N/A", appearances: 76 },
        { competition: "2002-2003 CAROLINA COURAGE", goals: 23, assists: "N/A", appearances: 35 },
        { competition: "2003-2011 EINTRACHT FRANKFURT", goals: 136, assists: "N/A", appearances: 114 }
      ],
      total: { goals: 282, assists: "N/A", appearances: 282 }
    },
    country: {
      name: "teams.GERMANY",
      stats: [
        { competition: "1994-2011 FRAUENTEAM", goals: 128, assists: "N/A", appearances: 214 }
      ],
      total: { goals: 128, assists: "N/A", appearances: 214 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#CD7F32', fontWeight: 'bold', fontSize: '30px' }}>
      =3
    </h>,
    image: <img
        src={alexia}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={españa}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h 
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      ALEXIA
    </h>,
    name: <h
    style={{ color: '#CD7F32' }}>
      PUTELLAS
    </h>,
    image3: <img
      src={espanyol}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image31: <img
      src={levante}
      alt="Heading Icon"
      style={{ width: '26.5px', height: '32.22px' }}
    />,
    image32: <img
      src={barcelona}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    club: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      RCD Espanyol/Levante UD/FC Barcelona
    </h>,
    goals: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      278
    </h>,
    assists: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      N/A
    </h>,
    appearances: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      676 *
    </h>,
    image5: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image51: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image52: <img
      src={thebest}
      alt="Heading Icon"
      style={{ width: '47.35px', height: '32.22px' }}
    />,
    image53: <img
      src={thebest}
      alt="Heading Icon"
      style={{ width: '47.35px', height: '32.22px' }}
    />,
    image4: <img
      src={alexia2}
      alt="Heading Icon"
      style={{ width: '248.13px', height: '350px' }}
    />,
    position: "positionRoles2.CM",
    position2: "positionRoles2.LW",
    header: "ALEXIA PUTELLAS Segura - 2x Ballon d'Or & 2x The Best FIFA Women's Player - 04/02/1994 (31)",
    detail: {
    club: {
      name: "teams.CLUB",
      stats: [
        { competition: "2008-2010 ESPANYOL B", goals: "N/A", assists: "N/A", appearances: "N/A" },
        { competition: "2010-2011 ESPANYOL", goals: 4, assists: "N/A", appearances: 30 },
        { competition: "2011-2012 LEVANTE", goals: 15, assists: "N/A", appearances: 34 },
        { competition: "2012- FC BARCELONA", goals: 207, assists: "N/A", appearances: 451 }
      ],
      total: { goals: 226, assists: "N/A", appearances: 515 }
    },
    country: {
      name: "teams.SPAIN",
      stats: [
        { competition: "2013-2015 SUB-17", goals: 1, assists: "N/A", appearances: 4 },
        { competition: "2015-2017 SUB-19", goals: 13, assists: "N/A", appearances: 20 },
        { competition: "2013- ABSOLUTA", goals: 37, assists: "N/A", appearances: 134 },
        { competition: "2014- CATALUNYA", goals: 1, assists: "N/A", appearances: 3 }
      ],
      total: { goals: 52, assists: "N/A", appearances: 161 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#CD7F32', fontWeight: 'bold', fontSize: '30px' }}>
      =3
    </h>,
    image: <img
        src={aitana}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={españa}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#CD7F32' }}>
      AITANA
    </h>,
    name: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
       BONMATÍ
    </h>,
    image3: <img
        src={barcelona}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      FC Barcelona
    </h>,
    goals: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      153
    </h>,
    assists: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      N/A
    </h>,
    appearances: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      428 *
    </h>,
    image5: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image51: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image52: <img
      src={thebest}
      alt="Heading Icon"
      style={{ width: '47.35px', height: '32.22px' }}
    />,
    image53: <img
      src={thebest}
      alt="Heading Icon"
      style={{ width: '47.35px', height: '32.22px' }}
    />,    
    image4: <img
      src={aitana2}
      alt="Heading Icon"
      style={{ width: '252.39px', height: '350px' }}
    />,
    position: "positionRoles2.CM",
    header: "AITANA BONMATÍ Conca - 2x Ballon d'Or & 2x The Best FIFA Women's Player - 27/01/1998 (27)",
    detail: {
    club: {
      name: "teams.CLUB",
      stats: [
        { competition: "2014-2016 FC BARCELONA B", goals:"N/A", assists: "N/A", appearances: "N/A" },
        { competition: "2016- FC BARCELONA", goals: 110, assists: "N/A", appearances: 311 }
      ],
      total: { goals: 110, assists: "N/A", appearances: 311 }
    },
    country: {
      name: "teams.SPAIN",
      stats: [
        { competition: "2013-2015 SUB-17", goals: 3, assists: "N/A", appearances: 13 },
        { competition: "2015-2017 SUB-19", goals: 6, assists: "N/A", appearances: 15 },
        { competition: "2016-2018 SUB-20", goals: 2, assists: "N/A", appearances: 9 },
        { competition: "2017- CATALUNYA", goals: 1, assists: "N/A", appearances: 2 },
        { competition: "2018- ABSOLUTA", goals: 31, assists: "N/A", appearances: 83 }
      ],
      total: { goals: 43, assists: "N/A", appearances: 117 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#CD7F32', fontWeight: 'bold', fontSize: '30px' }}>
      =3
    </h>,
    image: <img
        src={hamm}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={usa}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#CD7F32' }}>
      MIA
    </h>,
    name: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      HAMM
    </h>,
    image3: <img
        src={washington}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      Washington Freedom
    </h>,
    goals: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      186
    </h>,
    assists: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      N/A
    </h>,
    appearances: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      325
    </h>,
    image5: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,
    image51: <img
      src={fifapoty}
      alt="Heading Icon"
      style={{ width: '17.9px', height: '32.22px' }}
    />,  
    image4: <img
        src={hamm2}
        alt="Heading Icon"
        style={{ width: '175.5px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "MIA HAMM - 2x FIFA Women's World Player of the Year - 17/03/1972 (53)",
    detail: {
    club: {
      name: "teams.CLUB",
      stats: [
        { competition: "2001-2003 WASHINGTON FREEDOM", goals: 28, assists: "N/A", appearances: 49 }
      ],
      total: { goals: 28, assists: "N/A", appearances: 49 }
    },
    country: {
      name: "teams.USA",
      stats: [
        { competition: "1987-2004 SENIOR", goals: 158, assists: "N/A", appearances: 276 }
      ],
      total: { goals: 158, assists: "N/A", appearances: 276 }
      }
    }
  },  
];

function SuperBallonDorFeminin() {
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
        style={{ width: '120px', height: '120px' }}
      />
      <img
        src={femenin}
        alt="Heading Icon"
        style={{ width: '120px', height: '120px' }}
      />      
      <h1>{t('superBallonDorF')} 2029</h1>
      <p>{t('sBallonDor2')}</p>
      <p>{t('DatesSBD2')}</p>
      <p>{t('Dates2')}30 {t('July')} 2025</p>
      <br />
      <h3>{t('sBDOR')}</h3>
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
              {goal.rank} {goal.image} - {goal.image2} {goal.name1} {goal.name} - {goal.image3} {goal.image31} {goal.image32} {goal.image33} {goal.image34} {goal.image35} {goal.image36} {goal.image37} {goal.image38} {goal.image39} {goal.club} - {goal.goals} - {goal.assists} - {goal.appearances} {goal.image5} {goal.image51} {goal.image52} {goal.image53} {goal.image54} {goal.image55}
            </button>
            {openIndex === index && (
              <div style={{ padding: '10px 0' }}>
                <p style={{ marginBottom: '10px' }}>
                  {goal.header} - {t(goal.position)} {t(goal.position2)}
                </p>
              <div style={{ display: 'flex', gap: '20px', padding: '20px 0' }}>
                <div style={{ minWidth: '160px' }}>{goal.image4}</div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {goal.detail?.club && (
                      <table style={tableStyle}>
                        <thead>
                          <tr><th colSpan="2" style={sectionHeader}>{t(goal.detail.club.name)}</th></tr>
                          <tr><th style={subHeader}>{t('SeasonTeam')}</th><th style={subHeader}>{t('goalsAssistsAppearances')}</th></tr>
                        </thead>
                        <tbody>
                          {goal.detail.club.stats.map((row, i) => (
                            <tr key={i}>
                              <td style={tdStyle}>{t(row.competition)}</td>
                              <td style={tdStyle}>{row.goals} - {row.assists} - {row.appearances}</td>
                            </tr>
                          ))}
                          <tr style={totalRow}><td>{t('total')}</td><td>{goal.detail.club.total.goals} - {goal.detail.club.total.assists} - {goal.detail.club.total.appearances}</td></tr>
                        </tbody>
                      </table>
                    )}
                    {goal.detail?.country && (
                      <table style={tableStyle}>
                        <thead>
                          <tr><th colSpan="2" style={sectionHeader}>{t(goal.detail.country.name)}</th></tr>
                          <tr><th style={subHeader}>{t('SeasonTeam')}</th><th style={subHeader}>{t('goalsAssistsAppearances')}</th></tr>
                        </thead>
                        <tbody>
                          {goal.detail.country.stats.map((row, i) => (
                            <tr key={i}>
                              <td style={tdStyle}>{t(row.competition)}</td>
                              <td style={tdStyle}>{row.goals} - {row.assists} - {row.appearances}</td>
                            </tr>
                          ))}
                          <tr style={totalRow}><td>{t('total')}</td><td>{goal.detail.country.total.goals} - {goal.detail.country.total.assists} - {goal.detail.country.total.appearances}</td></tr>
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
      <p>*{t('stillActive')}</p>
    </div>
  );
}

export default SuperBallonDorFeminin;