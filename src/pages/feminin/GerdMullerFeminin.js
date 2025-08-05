import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/muller.png';
import femenin from '../../assets/feminin.png';
import españa from '../../assets/esp.png';
//import france from '../../assets/fra.png';
import polska from '../../assets/pol.png';
import danmark from '../../assets/dan.png';
import deutschland from '../../assets/deu.png';
import haiti from '../../assets/hai.png';
import italia from '../../assets/ita.png';
//import nederland from '../../assets/ned.png';
import england from '../../assets/eng.png';
import bayern from '../../assets/bayern.png';
import barcelona from '../../assets/barcelona.png';
import frankfurt from '../../assets/frankfurt.png';
import ol from '../../assets/ol.png';
import gotham from '../../assets/gotham.png';
import juventus from '../../assets/juventus.png';
//import wolfsburg from '../../assets/wolfsburg.png';
//import hoffenheim from '../../assets/hoffenheim.png';
//import paris from '../../assets/paris.png';
import arsenal from '../../assets/arsenal.png';
import benfica from '../../assets/benfica.png';
import pajor from '../../assets/pajor.png';
import pina from '../../assets/pina.png';
import harder from '../../assets/harder.png';
import freigang from '../../assets/freigang.png';
import dumornay from '../../assets/dumornay.png';
import esther from '../../assets/esther.png';
//import beerensteyn from '../../assets/beerensteyn.png';
import alexia from '../../assets/alexia.png';
import schuller from '../../assets/schuller.png'
//import cerci from '../../assets/cerci.png';
//import mateo from '../../assets/mateo.png';
import martinprieto from '../../assets/martinprieto.png';
import girelli from '../../assets/girelli.png';
import russo from '../../assets/russo.png';
import pajor2 from '../../assets/pajor2.png';
import pina2 from '../../assets/pina2.png';
import dumornay2 from '../../assets/dumornay2.png';
import harder2 from '../../assets/harder2.png';
import freigang2 from '../../assets/freigang2.png';
import esther2 from '../../assets/esther2.png';
//import beerensteyn2 from '../../assets/beerensteyn2.png';
import alexia2 from '../../assets/alexia2.png';
import schuller2 from '../../assets/schuller2.png'
//import cerci2 from '../../assets/cerci2.png';
//import mateo2 from '../../assets/mateo2.png';
import martinprieto2 from '../../assets/martinprieto2.png';
import girelli2 from '../../assets/girelli2.png';
import russo2 from '../../assets/russo2.png'

const goals = [
  {
    rank: <h
    style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '30px' }}>
      1
    </h>,
    image: <img
        src={pajor}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={polska}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#FFD700' }}>
      EWA
    </h>,
    name: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      PAJOR
    </h>,
    image3: <img
        src={barcelona}
        alt="Heading Icon"
        style={{ width: '31.76px', height: '32.22px' }}
      />,
    club: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      FC Barcelona
    </h>,
    goals: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      52
    </h>,
    appearances: <h
    style={{ color: '#FFD700', fontWeight: 'bold' }}>
      59
    </h>,
    image4: <img
        src={pajor2}
        alt="Heading Icon"
        style={{ width: '350px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "EWA Barbara PAJOR - Fútbol Club Barcelona - 	03/12/1996 (28)",
    detail: {
    club: {
      name: "FC BARCELONA",
      stats: [
        { competition: "Liga F", goals: 25, appearances: 28 },
        { competition: "competitions.wChampionsLeague", goals: 7, appearances: 11 },
        { competition: "Copa de la Reina", goals: 9, appearances: 7 },
        { competition: "Supercopa de España Femenina", goals: 2, appearances: 2 }
      ],
      total: { goals: 43, appearances: 46 }
    },
    country: {
      name: "teams.POLAND",
      stats: [
        { competition: "competitions.wNationsLeagueB", goals: 4, appearances: 6 },
        { competition: "competitions.wQualificationEuro", goals: 4, appearances: 4 },
        { competition: "competitions.InternationalFrendlies", goals: 0, appearances: 0 },
        { competition: "competitions.wEuros", goals: 1, appearances: 3 }
      ],
      total: { goals: 9, appearances: 13 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold', fontSize: '30px' }}>
      2
    </h>,
    image: <img
        src={martinprieto}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={españa}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h 
    style={{ color: '#C0C0C0'}}>
      CRISTINA
    </h>,
    name: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      MARTÍN-PRIETO
    </h>,
    image3: <img
        src={benfica}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      Benfica
    </h>,
    goals: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      33
    </h>,
    appearances: <h
    style={{ color: '#C0C0C0', fontWeight: 'bold' }}>
      45
    </h>,
    image4: <img
        src={martinprieto2}
        alt="Heading Icon"
        style={{ width: '272.55px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "CRISTINA MARTÍN-PRIETO Gutiérrez - Sport Lisboa e Benfica - 	14/03/1993 (32)",
    detail: {
    club: {
      name: "BENFICA",
      stats: [
        { competition: "Liga BPI", goals: 19, appearances: 22 },
        { competition: "competitions.wChampionsLeague", goals: 4, appearances: 4 },
        { competition: "Taça de Portugal Feminina", goals: 1, appearances: 5 },
        { competition: "Taça da Liga Feminina", goals: 4, appearances: 4 },
        { competition: "Supertaça Feminina", goals: 2, appearances: 2 }
      ],
      total: { goals: 30, appearances: 37 }
    },
    country: {
      name: "teams.SPAIN",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 1, appearances: 2 },
        { competition: "competitions.InternationalFrendlies", goals: 1, appearances: 3 },
        { competition: "competitions.wEuros", goals: 1, appearances: 3 }
      ],
      total: { goals: 3, appearances: 8 }
      }
    }
  },
  {
    rank: <h
    style={{ color: '#CD7F32', fontWeight: 'bold', fontSize: '30px' }}>
      3
    </h>,
    image: <img
        src={pina}
        alt="Heading Icon"
        style={{ width: '31.2px', height: '40px' }}
      />,
    image2: <img
        src={españa}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ color: '#CD7F32' }}>
      CLÀUDIA
    </h>,
    name: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      PINA
    </h>,
    image3: <img
        src={barcelona}
        alt="Heading Icon"
        style={{ width: '31.76px', height: '32.22px' }}
      />,
    club: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      FC Barcelona
    </h>,
    goals: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      33
    </h>,
    appearances: <h
    style={{ color: '#CD7F32', fontWeight: 'bold' }}>
      57
    </h>,
    image4: <img
        src={pina2}
        alt="Heading Icon"
        style={{ width: '350px', height: '350px' }}
      />,
    position: "positionRoles2.LW",
    header: "CLÀUDIA PINA Medina - Fútbol Club Barcelona - 	12/08/2001 (23)",
    detail: {
    club: {
      name: "FC BARCELONA",
      stats: [
        { competition: "Liga F", goals: 10, appearances: 27 },
        { competition: "competitions.wChampionsLeague", goals: 10, appearances: 9 },
        { competition: "Copa de la Reina", goals: 2, appearances: 4 },
        { competition: "Supercopa de España Femenina", goals: 2, appearances: 2 }
      ],
      total: { goals: 24, appearances: 42 }
    },
    country: {
      name: "teams.SPAIN",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 4, appearances: 6 },
        { competition: "competitions.InternationalFrendlies", goals: 3, appearances: 3 },
        { competition: "competitions.wEuros", goals: 2, appearances: 6 }
      ],
      total: { goals: 9, appearances: 15 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      4
    </h>,
    image: <img
        src={esther}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={españa}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h
    style={{ fontWeight: 'bold' }}>
      ESTHER
    </h>,
    name: <h>
      GONZÁLEZ
    </h>,
    image3: <img
        src={gotham}
        alt="Heading Icon"
        style={{ width: '22.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      NJ/NY Gotham
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      28
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      41
    </h>,
    image4: <img
        src={esther2}
        alt="Heading Icon"
        style={{ width: '262.5px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "ESTHER GONZÁLEZ Rodríguez - New Jersey/New York Gotham Football Club - 8/12/1992 (32)",
    detail: {
    club: {
      name: "NJ/NY GOTHAM",
      stats: [
        { competition: "NWSL", goals: 17, appearances: 24 },
        { competition: "CONCACAF W Champions Cup", goals: 3, appearances: 6 }
      ],
      total: { goals: 20, appearances: 30 }
    },
    country: {
      name: "teams.SPAIN",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 4, appearances: 4 },
        { competition: "competitions.InternationalFrendlies", goals: 0, appearances: 1 },
        { competition: "competitions.wEuros", goals: 4, appearances: 6 }
      ],
      total: { goals: 8, appearances: 11 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      5
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
    style={{ fontWeight: 'bold' }}>
      ALEXIA
    </h>,
    name: <h>
      PUTELLAS
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
      27
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      52
    </h>,
    image4: <img
        src={alexia2}
        alt="Heading Icon"
        style={{ width: '350px', height: '350px' }}
      />,
    position: "positionRoles2.CM",
    header: "ALEXIA PUTELLAS Segura - Fútbol Club Barcelona - 04/02/1994 (31)",
    detail: {
    club: {
      name: "FC BARCELONA",
      stats: [
        { competition: "Liga F", goals: 16, appearances: 24 },
        { competition: "competitions.wChampionsLeague", goals: 3, appearances: 10 },
        { competition: "Copa de la Reina", goals: 2, appearances: 3 },
        { competition: "Supercopa de España Femenina", goals: 1, appearances: 2 }
      ],
      total: { goals: 22, appearances: 39 }
    },
    country: {
      name: "teams.SPAIN",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 2, appearances: 4 },
        { competition: "competitions.InternationalFrendlies", goals: 0, appearances: 3 },
        { competition: "competitions.wEuros", goals: 3, appearances: 6 }
      ],
      total: { goals: 5, appearances: 13 }
      }
    }
  },  
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =6
    </h>,
    image: <img
      src={dumornay}
      alt="Heading Icon"
      style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
      src={haiti}
      alt="Heading Icon"
      style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      MELCHIE
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      DUMORNAY
    </h>,
    image3: <img
        src={ol}
        alt="Heading Icon"
        style={{ width: '24.84px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      OL Lyonnes
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      26
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      36
    </h>,
    image4: <img
        src={dumornay2}
        alt="Heading Icon"
        style={{ width: '350px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "MELCHIE Daëlle DUMORNAY - Olympique Lyonnais Lyonnes - 17/08/2003 (21)",
    detail: {
    club: {
      name: "OL LYONNES",
      stats: [
        { competition: "Première Ligue", goals: 16, appearances: 19 },
        { competition: "competitions.wChampionsLeague", goals: 6, appearances: 9 }
      ],
      total: { goals: 22, appearances: 28 }
    },
    country: {
      name: "teams.HAITI",
      stats: [
        { competition: "competitions.InternationalFrendlies", goals: 4, appearances: 8 }
      ],
      total: { goals: 4, appearances: 8 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =6
    </h>,
    image: <img
        src={girelli}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={italia}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      CRISTIANA
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      GIRELLI
    </h>,
    image3: <img
        src={juventus}
        alt="Heading Icon"
        style={{ width: '16.11px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Juventus FC
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      26
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      41
    </h>,
    image4: <img
        src={girelli2}
        alt="Heading Icon"
        style={{ width: '350px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "CRISTIANA GIRELLI - Juventus Football Club - 23/04/1990 (35)",
    detail: {
    club: {
      name: "JUVENTUS FC",
      stats: [
        { competition: "Serie A Femminile", goals: 19, appearances: 24 },
        { competition: "competitions.wChampionsLeague", goals: 0, appearances: 5 }
      ],
      total: { goals: 19, appearances: 29 }
    },
    country: {
      name: "teams.ITALY",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 3, appearances: 4 },
        { competition: "competitions.InternationalFrendlies", goals: 1, appearances: 3 },
        { competition: "competitions.wEuros", goals: 3, appearances: 5 }
      ],
      total: { goals: 7, appearances: 13 }
      }
    }    
  },  
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =6
    </h>,
    image: <img
        src={harder}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={danmark}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      PERNILLE
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      HARDER
    </h>,
    image3: <img
        src={bayern}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Bayern München
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      26
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      48
    </h>,
    image4: <img
        src={harder2}
        alt="Heading Icon"
        style={{ width: '350px', height: '350px' }}
      />,
    position: "positionRoles2.CAM",
    header: "PERNILLE Mosegaard HARDER - Fußball-Club Bayern München - 15/11/1992 (32)",
    detail: {
    club: {
      name: "BAYERN MÜNCHEN",
      stats: [
        { competition: "Frauen-Bundesliga", goals: 14, appearances: 22 },
        { competition: "competitions.wChampionsLeague", goals: 6, appearances: 8 },
        { competition: "DFB Pokal Frauen", goals: 3, appearances: 5 },
        { competition: "Supercup der Frauen", goals: 0, appearances: 1 }
      ],
      total: { goals: 23, appearances: 36 }
    },
    country: {
      name: "teams.DENMARK",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 2, appearances: 6 },
        { competition: "competitions.InternationalFrendlies", goals: 1, appearances: 3 },
        { competition: "competitions.wEuros", goals: 0, appearances: 3 }
      ],
      total: { goals: 3, appearances: 12 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =9
    </h>,
    image: <img
        src={freigang}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={deutschland}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      LAURA
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      FREIGANG
    </h>,
    image3: <img
        src={frankfurt}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Eintracht Frankfurt
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      25
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      37
    </h>,
    image4: <img
        src={freigang2}
        alt="Heading Icon"
        style={{ width: '222.59px', height: '350px' }}
      />,
    position: "positionRoles2.CAM",
    header: "LAURA FREIGANG - Eintracht Frankfurt - 01/02/1998 (27)",
    detail: {
    club: {
      name: "EINTRACHT FRANKFURT",
      stats: [
        { competition: "Frauen-Bundesliga", goals: 14, appearances: 22 },
        { competition: "UEFA Champions League", goals: 3, appearances: 2 },
        { competition: "DFB Pokal Frauen", goals: 3, appearances: 3 }
      ],
      total: { goals: 22, appearances: 27 }
    },
    country: {
      name: "teams.GERMANY",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 3, appearances: 5 },
        { competition: "competitions.InternationalFrendlies", goals: 2, appearances: 2 },
        { competition: "competitions.wEuros", goals: 0, appearances: 3 }
      ],
      total: { goals: 5, appearances: 10 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =9
    </h>,
    image: <img
        src={schuller}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={deutschland}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      LEA
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      SCHÜLLER
    </h>,
    image3: <img
        src={bayern}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Bayern München
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      25
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      48
    </h>,
    image4: <img
        src={schuller2}
        alt="Heading Icon"
        style={{ width: '215px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "LEA SCHÜLLER - Fußball-Club Bayern München - 12/11/1997 (27)",
    detail: {
    club: {
      name: "BAYERN MÜNCHEN",
      stats: [
        { competition: "Frauen-Bundesliga", goals: 11, appearances: 22 },
        { competition: "competitions.wChampionsLeague", goals: 0, appearances: 7 },
        { competition: "DFB Pokal Frauen", goals: 5, appearances: 5 },
        { competition: "Supercup der Frauen", goals: 0, appearances: 1 }
      ],
      total: { goals: 16, appearances: 35 }
    },
    country: {
      name: "teams.GERMANY",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 5, appearances: 6 },
        { competition: "competitions.InternationalFrendlies", goals: 2, appearances: 2},
        { competition: "competitions.wEuros", goals: 2, appearances: 5 }
      ],
      total: { goals: 9, appearances: 13 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =9
    </h>,
    image: <img
        src={russo}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={england}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      ALESSIA
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      RUSSO
    </h>,
    image3: <img
        src={arsenal}
        alt="Heading Icon"
        style={{ width: '27.39px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Arsenal FC
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      25
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      52
    </h>,
    image4: <img
        src={russo2}
        alt="Heading Icon"
        style={{ width: '350px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "ALESSIA Mia Teresa RUSSO - Arsenal Football Club - 08/02/1999 (26)",
    detail: {
    club: {
      name: "ARSENAL FC",
      stats: [
        { competition: "WSL", goals: 12, appearances: 21 },
        { competition: "competitions.wChampionsLeague", goals: 8, appearances: 15 },
        { competition: "Women's League Cup", goals: 0, appearances: 3 },
        { competition: "Women's FA Cup", goals: 0, appearances: 3 }
      ],
      total: { goals: 20, appearances: 41 }
    },
    country: {
      name: "teams.ENGLAND",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 2, appearances: 4 },
        { competition: "competitions.InternationalFrendlies", goals: 1, appearances: 2},
        { competition: "competitions.wEuros", goals: 2, appearances: 6 }
      ],
      total: { goals: 5, appearances: 11 }
      }
    }
  }
  /*  
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =12
    </h>,
    image: <img
        src={mateo}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={france}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      CLARA
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      MATEO
    </h>,
    image3: <img
        src={paris}
        alt="Heading Icon"
        style={{ width: '27.13px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Paris FC
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      24
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      40
    </h>,
    image4: <img
        src={mateo2}
        alt="Heading Icon"
        style={{ width: '350px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "CLARA Coline Mona MATEO - Paris Football Club - 28/11/1997 (27)",
    detail: {
    club: {
      name: "PARIS FC",
      stats: [
        { competition: "Première Ligue", goals: 18, appearances: 20 },
        { competition: "competitions.wChampionsLeague", goals: 1, appearances: 4 },
        { competition: "Coupe de France Féminine", goals: 1, appearances: 4 }
      ],
      total: { goals: 20, appearances: 28 }
    },
    country: {
      name: "teams.FRANCE",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 2, appearances: 4 },
        { competition: "competitions.InternationalFrendlies", goals: 1, appearances: 4 },
        { competition: "competitions.wEuros", goals: 1, appearances: 4 }
      ],
      total: { goals: 4, appearances: 12 }
      }
    }
  },  
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =12
    </h>,
    image: <img
        src={beerensteyn}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={nederland}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      LINETH
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      BEERENSTEYN
    </h>,
    image3: <img
        src={wolfsburg}
        alt="Heading Icon"
        style={{ width: '32.22px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Wolfsburg
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      24
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      41
    </h>,
    image4: <img
      src={beerensteyn2}
      alt="Heading Icon"
      style={{ width: '238.28px', height: '350px' }}
    />,
    position: "positionRoles2.RW",
    header: "LINETH Enid Fabienne BEERENSTEYN - Verein für Leibesübungen Wolfsburg - 11/10/1996 (28)",
    detail: {
    club: {
      name: "WOLFSBURG",
      stats: [
        { competition: "Frauen-Bundesliga", goals: 17, appearances: 20 },
        { competition: "competitions.wChampionsLeague", goals: 2, appearances: 8 },
        { competition: "DFB Pokal Frauen", goals: 1, appearances: 3 },
        { competition: "Supercup der Frauen", goals: 0, appearances: 1 }
      ],
      total: { goals: 20, appearances: 32 }
    },
    country: {
      name: "teams.NETHERLANDS",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 3, appearances: 4 },
        { competition: "competitions.InternationalFrendlies", goals: 1, appearances: 2 },
        { competition: "competitions.wEuros", goals: 0, appearances: 3 }
      ],
      total: { goals: 4, appearances: 9 }
      }
    }
  },
  {
    rank: <h
    style={{ fontWeight: 'bold', fontSize: '30px' }}>
      =14
    </h>,
    image: <img
        src={cerci}
        alt="Heading Icon"
        style={{ width: '40px', height: '40px' }}
      />,
    image2: <img
        src={deutschland}
        alt="Heading Icon"
        style={{ width: '25.6px', height: '16px', borderTop: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}
      />,
    name1: <h>
      SELINA
    </h>,
    name: <h
    style={{ fontWeight: 'bold' }}>
      CERCI
    </h>,
    image3: <img
        src={hoffenheim}
        alt="Heading Icon"
        style={{ width: '26.96px', height: '32.22px' }}
      />,
    club: <h
    style={{ fontWeight: 'bold' }}>
      Hoffenheim
    </h>,
    goals: <h
    style={{ fontWeight: 'bold' }}>
      23
    </h>,
    appearances: <h
    style={{ fontWeight: 'bold' }}>
      34
    </h>,
    image4: <img
        src={cerci2}
        alt="Heading Icon"
        style={{ width: '215px', height: '350px' }}
      />,
    position: "positionRoles2.ST",
    header: "SELINA CERCI - Turn-und Sportgemeinschaft 1899 Hoffenheim - 31/05/2000 (25)",
    detail: {
    club: {
      name: "HOFFENHEIM",
      stats: [
        { competition: "Frauen-Bundesliga", goals: 16, appearances: 20 },
        { competition: "DFB Pokal Frauen", goals: 2, appearances: 3 }
      ],
      total: { goals: 18, appearances: 23 }
    },
    country: {
      name: "teams.GERMANY",
      stats: [
        { competition: "competitions.wNationsLeagueA", goals: 4, appearances: 4 },
        { competition: "competitions.InternationalFrendlies", goals: 1, appearances: 3},
        { competition: "competitions.wEuros", goals: 0, appearances: 4 }
      ],
      total: { goals: 5, appearances: 11 }
      }
    }
  },
  {
    header: "=14 - MARIONA CALDENTEY - ARSENAL - 23 - 55 *",
    detail: "ARSENAL 19/41 - SPAIN 4/14"
  },
  {
    header: "16 - KHADIJA SHAW - MAN CITY - 21 - 24",
    detail: "MAN CITY 19/22 - JAMAICA 2/2"
  }*/
];

function GerdMullerFemenin() {
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
      <img
        src={femenin}
        alt="Heading Icon"
        style={{ width: '120px', height: '120px' }}
      />
      <h1>{t('MullerF')} 2025</h1>
      <p>{t('muller2')}</p>
      <p>{t('DatesF')}</p>
      <p>{t('Dates2')}27 {t('July')} 2025</p>
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
      {/*<p>*{t('wEuro')}</p>*/}
    </div>
  );
}

export default GerdMullerFemenin;