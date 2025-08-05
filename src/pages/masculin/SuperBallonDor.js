import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/superballondor.png';
import argentina from '../../assets/arg.png';
import portugal from '../../assets/por.png';
import brasil from '../../assets/bra.png';
import nederland from '../../assets/ned.png';
import barcelona from '../../assets/barcelona.png';
import psg from '../../assets/psg.png';
import intermiami from '../../assets/intermiami.png';
import sporting from '../../assets/sportingcp.png';
import manutd from '../../assets/manutd.png';
import madrid from '../../assets/madrid.png';
import juventus from '../../assets/juventus.png';
import alnassr from '../../assets/alnassr.png';
import cruzeiro from '../../assets/cruzeiro.png';
import psv from '../../assets/psv.png';
import intermilan from '../../assets/intermilan.png';
import corinthians from '../../assets/corinthians.png';
import ajax from '../../assets/ajax.png';
import milan from '../../assets/milan.png';
import messi from '../../assets/messi.png';
import cr7 from '../../assets/cr7.png';
import ronaldo from '../../assets/ronaldo.png';
import vanbasten from '../../assets/vanbasten.png';
import messi2 from '../../assets/messi2.png';
import cr72 from '../../assets/cr72.png';
import ronaldo2 from '../../assets/ronaldo2.png';
import vanbasten2 from '../../assets/vanbasten2.png';
import ballondor from '../../assets/ballondor2.png';

const goals = [
  {
    rank: <h
    style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '30px' }}>
      1
    </h>,
    image: <img
        src={messi}
        alt="Heading Icon"
        style={{ width: '55.12px', height: '40px' }}
      />,
    image2: <img
        src={argentina}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#FFD700' }}>
      LIONEL
    </h>,
    name: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      MESSI
    </h>,
    image3: <img
      src={barcelona}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image31: <img
      src={psg}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image32: <img
      src={intermiami}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    club: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      FC Barcelona/PSG/Inter Miami
    </h>,
    goals: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      901
    </h>,
    assists: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      N/A
    </h>,
    appearances: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      1169 *
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
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image53: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image54: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image55: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image56: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image57: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image4: <img
      src={messi2}
      alt="Heading Icon"
      style={{ width: '207.12px', height: '350px' }}
    />,
    position: "positionRoles.RW",
    position2: "positionRoles.CAM",
    header: "LIONEL Andrés MESSI Cuccittini - 8x Ballon d'Or (2009-2012,2015,2019,2021,2023) - 24/06/1987 (38)",
    detail: {
    club: {
      name: "teams.CLUB",
      stats: [
        { competition: "2003-2004 FC BARCELONA C", goals: 5, assists: "N/A", appearances: 10 },
        { competition: "2004-2005 FC BARCELONA B", goals: 6, assists: "N/A", appearances: 22 },
        { competition: "2004-2021 FC BARCELONA", goals: 672, assists: "N/A", appearances: 778 },
        { competition: "2021-2023 PSG", goals: 32, assists: "N/A", appearances: 75 },
        { competition: "2023- INTER MIAMI", goals: 58, assists: "N/A", appearances: 68 }
      ],
      total: { goals: 773, assists: "N/A", appearances: 953 }
    },
    country: {
      name: "teams.ARGENTINA",
      stats: [
        { competition: "2004-2005 SUB-20", goals: 14, assists: "N/A", appearances: 18 },
        { competition: "2008 SUB-23", goals: 2, assists: "N/A", appearances: 5 },    
        { competition: "2005- ABSOLUTA", goals: 112, assists: "N/A",appearances: 193 }
      ],
      total: { goals: 128, assists: "N/A", appearances: 216 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold', fontSize: '30px' }}>
      2
    </h>,
    image: <img
        src={cr7}
        alt="Heading Icon"
        style={{ width: '32.95px', height: '40px' }}
      />,
    image2: <img
        src={portugal}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      CRISTIANO RONALDO
    </h>,
    image3: <img
      src={sporting}
      alt="Heading Icon"
      style={{ width: '24px', height: '32.22px' }}
    />,
    image31: <img
      src={manutd}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image32: <img
      src={madrid}
      alt="Heading Icon"
      style={{ width: '23.07px', height: '32.22px' }}
    />,
    image33: <img
      src={juventus}
      alt="Heading Icon"
      style={{ width: '16.11px', height: '32.22px' }}
    />,
    image34: <img
      src={alnassr}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    club: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      Sporting CP/Man United/Real Madrid/Juventus/Al-Nassr
    </h>,
    goals: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      956
    </h>,
    assists: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      N/A
    </h>,    
    appearances: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      1317 *
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
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image53: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image54: <img
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image4: <img
      src={cr72}
      alt="Heading Icon"
      style={{ width: '319.9px', height: '350px' }}
    />,
    position: "positionRoles.ST",
    position2: "positionRoles.LW",
    header: "CRISTIANO RONALDO dos Santos Aveiro - 5x Ballon d'Or (2008,2013-2014,2016-2017) - 05/02/1985 (40)",
    detail: {
    club: {
      name: "teams.CLUB",
      stats: [
        { competition: "2002-2003 SPORTING CP B", goals: 0, assists: "N/A", appearances: 2 },
        { competition: "2002-2003 SPORTING CP", goals: 5, assists: "N/A", appearances: 31 },
        { competition: "2003-2009 MANCHESTER UNITED", goals: 118, assists: "N/A", appearances: 292 },
        { competition: "2009-2018 REAL MADRID", goals: 450, assists: "N/A", appearances: 438 },
        { competition: "2018-2021 JUVENTUS", goals: 101, assists: "N/A", appearances: 134 },
        { competition: "2021-2022 MANCHESTER UNITED", goals: 27, assists: "N/A", appearances: 54 },
        { competition: "2023- AL-NASSR", goals: 99, assists: "N/A", appearances: 111 }
      ],
      total: { goals: 800, assists: "N/A", appearances: 1062 }
    },
    country: {
      name: "teams.PORTUGAL",
      stats: [
        { competition: "2001 SUB-15", goals: 7, assists: "N/A", appearances: 9 },
        { competition: "2001-2002 SUB-17", goals: 5, assists: "N/A", appearances: 7 },
        { competition: "2003 SUB-20", goals: 1, assists: "N/A", appearances: 5 },
        { competition: "2002-2003 SUB-21", goals: 3, assists: "N/A", appearances: 10 },
        { competition: "2004 SUB-23", goals: 2, assists: "N/A", appearances: 3 },
        { competition: "2003- ABSOLUTA", goals: 138, assists: "N/A", appearances: 221 }
      ],
      total: { goals: 156, assists: "N/A", appearances: 255 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#CD7F32', fontWeight: 'bold', fontSize: '30px' }}>
      3
    </h>,
    image: <img
        src={vanbasten}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={nederland}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#CD7F32' }}>
      MARCO
    </h>,
    name: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      VAN BASTEN
    </h>,
    image3: <img
      src={ajax}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image31: <img
      src={milan}
      alt="Heading Icon"
      style={{ width: '20.54px', height: '32.22px' }}
    />,
    club: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      Ajax/AC Milan
    </h>,
    goals: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      320
    </h>,
    assists: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      N/A
    </h>,     
    appearances: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      452
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
      src={ballondor}
      alt="Heading Icon"
      style={{ width: '25.27px', height: '32.22px' }}
    />,
    image4: <img
      src={vanbasten2}
      alt="Heading Icon"
      style={{ width: '276.56px', height: '350px' }}
    />,
    position: "positionRoles.ST",
    header: "Marcel 'Marco' van Basten - 3x Ballon d'Or (1988-1989,1992) - 31/10/1964 (60)",
    detail: {
    club: {
      name: "teams.CLUB",
      stats: [
        { competition: "1981-1987 AJAX", goals: 154, assists: "N/A", appearances: 174 },
        { competition: "1987-1995 AC MILAN", goals: 129, assists: "N/A", appearances: 205 }
      ],
      total: { goals: 283, assists: "N/A", appearances: 379 }
    },
    country: {
      name: "teams.NETHERLANDS",
      stats: [
        { competition: "1981-1983 ONDER 21", goals: 13, assists: "N/A", appearances: 15 },
        { competition: "1983-1992 VOETBALELFTAL", goals: 24, assists: "N/A", appearances: 58 }
      ],
      total: { goals: 37, assists: "N/A", appearances: 73 }
      }
    }
  },  
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      4
    </h>,
    image: <img
        src={ronaldo}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={brasil}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h 
    style={{ fontWeight: 'bold' }}>
      RONALDO
    </h>,
    name: <h>
      NAZÁRIO
    </h>,
    image3: <img
      src={cruzeiro}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image31: <img
      src={psv}
      alt="Heading Icon"
      style={{ width: '39.05px', height: '32.22px' }}
    />,
    image32: <img
      src={barcelona}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image33: <img
      src={intermilan}
      alt="Heading Icon"
      style={{ width: '32.22px', height: '32.22px' }}
    />,
    image34: <img
      src={madrid}
      alt="Heading Icon"
      style={{ width: '23.07px', height: '32.22px' }}
    />,
    image35: <img
      src={milan}
      alt="Heading Icon"
      style={{ width: '20.54px', height: '32.22px' }}
    />,
    image36: <img
      src={corinthians}
      alt="Heading Icon"
      style={{ width: '25.4px', height: '32.22px' }}
    />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Cruzeiro/PSV/FC Barcelona/Inter Milan/Real Madrid/AC Milan/Corinthians
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      425
    </h>,
    assists: <h
    style={{ fontWeight: 'bold' }}>
      N/A
    </h>,    
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      633
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
    image4: <img
      src={ronaldo2}
      alt="Heading Icon"
      style={{ width: '280px', height: '350px' }}
    />,
    position: "positionRoles.ST",
    header: "RONALDO Luís NAZÁRIO de Lima - 2x Ballon d'Or (1997,2002) - 18/09/1976 (48)",
    detail: {
    club: {
      name: "INTER MILAN",
      stats: [
        { competition: "1993-1994 CRUZEIRO", goals: 44, appearances: 47 },
        { competition: "1994-1996 PSV", goals: 54, assists: "N/A", appearances: 57 },
        { competition: "1996-1997 FC BARCELONA", goals: 47, assists: "N/A", appearances: 49 },
        { competition: "1997-2002 INTER MILAN", goals: 59, assists: "N/A", appearances: 99 },
        { competition: "2002-2007 REAL MADRID", goals: 104, assists: "N/A", appearances: 177 },
        { competition: "2007-2008 AC MILAN", goals: 9, assists: "N/A", appearances: 20 },
        { competition: "2009-2011 CORINTHIANS", goals: 35, assists: "N/A", appearances: 69 },
      ],
      total: { goals: 352, assists: "N/A", appearances: 518 }
    },
    country: {
      name: "teams.BRAZIL",
      stats: [
        { competition: "1993 SUB-17", goals: 5, assists: "N/A", appearances: 7 },
        { competition: "1996 SUB-23", goals: 6, assists: "N/A", appearances: 8 },
        { competition: "1994-2011 ABSOLUTA", goals: 62, assists: "N/A", appearances: 98 }
      ],
      total: { goals: 73, assists: "N/A", appearances: 115 }
      }
    }
  }
];

function SuperBallonDor() {
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
      <h1>{t('superBallonDor')} 2029</h1>
      <p>{t('sBallonDor')}</p>
      <p>{t('DatesSBD')}</p>
      <p>{t('Dates2')}20 {t('July')} 2025</p>
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
              {goal.rank} {goal.image} - {goal.image2} {goal.name1} {goal.name} - {goal.image3} {goal.image31} {goal.image32} {goal.image33} {goal.image34} {goal.image35} {goal.club} - {goal.goals} - {goal.assists} - {goal.appearances} {goal.image5} {goal.image51} {goal.image52} {goal.image53} {goal.image54} {goal.image55} {goal.image56} {goal.image57}
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

export default SuperBallonDor;