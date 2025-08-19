import React, { useState, useEffect, useRef } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import headingImage from '../../assets/worldxi.png';
import femenin from '../../assets/feminin.png';
import { FaWhatsapp, FaXTwitter, FaFacebookF } from 'react-icons/fa6';

const players2 = {
  GK: [
      "A.NANCLARES",
      "BERGER",
      "C.COLL",
      "EMAD SABRY",
      "ENDLER",
      "ER-RMICHI",
      "GIULIANI",
      "GROHS",
      "H.HAMPTON",
      "I.PEREIRA",
      "KINGSBURY",
      "L.GALLARDO",
      "LORENA.L",
      "M.RODRÍGUEZ",
      "MOORHOUSE",
      "NNADOZIE",
      "SHERIDAN",
      "TULLIS-JOYCE",
      "VAN DOMSELAAR",
      "YAMASHITA",
      ],
  DEF: [
      "A.FERNÁNDEZ",
      "BJÖRN",
      "CATLEY",
      "E.BRUGTS",
      "E.CARPENTER",
      "E.FOX",
      "E.SAMS",
      "ELIMBI GILBERT",
      "GIRMA",
      "KRUEGER",
      "KURTZ",
      "L.BRONZE",
      "L.WILLIAMSON",
      "LAKRAR",
      "M.BRIGHT",
      "MAPI LEÓN",
      "O.BATLLE",
      "S.BACHA",
      "S.BALTIMORE",
      "S.KARCHAOUI",
      "V.GILLES",
      "W.RENARD"
      ],
  MID: [
      "AITANA.B",
      "ALEXIA.P",
      "BRAND",
      "C.PINA",
      "C.WEIR",
      "DEBINHA",
      "DIBERNARDO",
      "DUMORNAY",
      "EGURROLA",
      "G.CLINTON",
      "GEYORO",
      "HARDER",
      "HERSHFELT",
      "KANERYD",
      "KIKA.N",
      "K.GORRY",
      "K.LITTLE",
      "K.MCCABE",
      "K.WALSH",
      "L.HEAPS",
      "L.JAMES",
      "LABONTA",
      "LAVOGEZ",
      "MAANUM",
      "MARIONA.C",
      "MARTA",
      "PATRI.G",
      "VICKY.L",
      ],
  FW: [
      "A.POPP",
      "A.REDONDO",
      "A.RUSSO",
      "A.THOMPSON",
      "B.BANDA",
      "BEERENSTEYN",
      "BLACKSTENIUS",
      "BRUUN",
      "BÜHL",
      "CANTORE",
      "CASCARINO",
      "CHAWINGA",
      "C.KELLY",
      "C.MATEO",
      "DIANI",
      "ESTHER.G",
      "FREIGANG",
      "GIRELLI",
      "GRAHAM HANSEN",
      "IMADE",
      "JÓNSDÓTTIR",
      "K.SHAW",
      "L.CAICEDO",
      "M.FOWLER",
      "MARTÍN-PRIETO",
      "O.SMITH",
      "PAJOR",
      "REITEN",
      "S.WILSON",
      "T.RODMAN"
      ],
};

const formations = {
  '3-3-4': { DEF: 3, MID: 3, FW: 4, image: '/334.png'},
  '3-4-3': { DEF: 3, MID: 4, FW: 3, image: '/343.png'},
  '3-5-2': { DEF: 3, MID: 5, FW: 2, image: '/352.png'},
  '3-6-1': { DEF: 3, MID: 6, FW: 1, image: '/361.png'},
  '4-1-4-1': { DEF: 4, MID: 5, FW: 1, image: '/4141.png'},
  '4-2-3-1': { DEF: 4, MID: 5, FW: 1, image: '/4231.png'},
  '4-3-2-1': { DEF: 4, MID: 5, FW: 1, image: '/4321.png'},
  '4-3-3(1)': { DEF: 4, MID: 3, FW: 3, image: '/433_1.png'},
  '4-3-3(2)': { DEF: 4, MID: 3, FW: 3, image: '/433_2.png'},
  '4-4-1-1': { DEF: 4, MID: 4, FW: 2, image: '/4411.png'},
  '4-4-2': { DEF: 4, MID: 4, FW: 2, image: '/442.png'},
  '4-5-1': { DEF: 4, MID: 5, FW: 1, image: '/451.png'},
  '5-2-3': { DEF: 5, MID: 2, FW: 3, image: '/523.png'},
  '5-3-2': { DEF: 5, MID: 3, FW: 2, image: '/532.png'},
  '5-4-1': { DEF: 5, MID: 4, FW: 1, image: '/541.png'}
};

const formationRoles = {
  '3-3-4': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'CB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'MID', label: 'LCM' },
    { pos: 'MID', label: 'CDM' },
    { pos: 'MID', label: 'RCM' },
    { pos: 'FW', label: 'LW' },
    { pos: 'FW', label: 'LS' },
    { pos: 'FW', label: 'RS' },
    { pos: 'FW', label: 'RW' }
  ],
  '3-4-3': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'CB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'MID', label: 'LM' },
    { pos: 'MID', label: 'LCDM' },
    { pos: 'MID', label: 'RCDM' },
    { pos: 'MID', label: 'RM' },
    { pos: 'FW', label: 'LW' },
    { pos: 'FW', label: 'ST' },
    { pos: 'FW', label: 'RW' }
  ],
  '3-5-2': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'CB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'MID', label: 'LM' },
    { pos: 'MID', label: 'LCDM' },
    { pos: 'MID', label: 'CAM' },
    { pos: 'MID', label: 'RCDM' },
    { pos: 'MID', label: 'RM' },
    { pos: 'FW', label: 'LS' },
    { pos: 'FW', label: 'RS' }
  ],
  '3-6-1': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'CB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'MID', label: 'LCDM' },
    { pos: 'MID', label: 'RCDM' },
    { pos: 'MID', label: 'LM' },
    { pos: 'MID', label: 'LAM' },
    { pos: 'MID', label: 'RAM' },
    { pos: 'MID', label: 'RM' },
    { pos: 'FW', label: 'ST' }
  ],
  '4-1-4-1': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RB' },
    { pos: 'MID', label: 'CDM' },
    { pos: 'MID', label: 'LM' },
    { pos: 'MID', label: 'LAM' },
    { pos: 'MID', label: 'RAM' },
    { pos: 'MID', label: 'RM' },
    { pos: 'FW', label: 'ST' }
  ],
  '4-2-3-1': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RB' },
    { pos: 'MID', label: 'LCDM' },
    { pos: 'MID', label: 'RCDM' },
    { pos: 'MID', label: 'LAM' },
    { pos: 'MID', label: 'CAM' },
    { pos: 'MID', label: 'RAM' },
    { pos: 'FW', label: 'ST' }
  ],
  '4-3-2-1': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RB' },
    { pos: 'MID', label: 'LCM' },
    { pos: 'MID', label: 'CDM' },
    { pos: 'MID', label: 'RCM' },
    { pos: 'MID', label: 'LAM' },
    { pos: 'MID', label: 'RAM' },
    { pos: 'FW', label: 'ST' }
  ],
  '4-3-3(1)': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RB' },
    { pos: 'MID', label: 'LCM' },
    { pos: 'MID', label: 'CDM' },
    { pos: 'MID', label: 'RCM' },
    { pos: 'FW', label: 'LW' },
    { pos: 'FW', label: 'ST' },
    { pos: 'FW', label: 'RW' }
  ],
  '4-3-3(2)': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RB' },
    { pos: 'MID', label: 'LCM' },
    { pos: 'MID', label: 'CAM' },
    { pos: 'MID', label: 'RCM' },
    { pos: 'FW', label: 'LW' },
    { pos: 'FW', label: 'ST' },
    { pos: 'FW', label: 'RW' }
  ],
  '4-4-1-1': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RB' },
    { pos: 'MID', label: 'LM' },
    { pos: 'MID', label: 'LCDM' },
    { pos: 'MID', label: 'RCDM' },
    { pos: 'MID', label: 'RM' },
    { pos: 'FW', label: 'SS' },
    { pos: 'FW', label: 'ST' }
  ],
  '4-4-2': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RB' },
    { pos: 'MID', label: 'LM' },
    { pos: 'MID', label: 'LCM' },
    { pos: 'MID', label: 'RCM' },
    { pos: 'MID', label: 'RM' },
    { pos: 'FW', label: 'LS' },
    { pos: 'FW', label: 'RS' }
  ],
  '4-5-1': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RB' },
    { pos: 'MID', label: 'LM' },
    { pos: 'MID', label: 'LCM' },
    { pos: 'MID', label: 'CDM' },
    { pos: 'MID', label: 'RCM' },
    { pos: 'MID', label: 'RM' },
    { pos: 'FW', label: 'ST' }
  ],
  '5-2-3': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LWB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'CB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RWB' },
    { pos: 'MID', label: 'LCM' },
    { pos: 'MID', label: 'RCM' },
    { pos: 'FW', label: 'LW' },
    { pos: 'FW', label: 'ST' },
    { pos: 'FW', label: 'RW' }
  ],
  '5-3-2': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LWB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'CB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RWB' },
    { pos: 'MID', label: 'LCM' },
    { pos: 'MID', label: 'CDM' },
    { pos: 'MID', label: 'RCM' },
    { pos: 'FW', label: 'LS' },
    { pos: 'FW', label: 'RS' }
  ],
  '5-4-1': [
    { pos: 'GK', label: 'GK' },
    { pos: 'DEF', label: 'LWB' },
    { pos: 'DEF', label: 'LCB' },
    { pos: 'DEF', label: 'CB' },
    { pos: 'DEF', label: 'RCB' },
    { pos: 'DEF', label: 'RWB' },
    { pos: 'MID', label: 'LM' },
    { pos: 'MID', label: 'LCM' },
    { pos: 'MID', label: 'RCM' },
    { pos: 'MID', label: 'RM' },
    { pos: 'FW', label: 'ST' }
  ]
};

const getCoords = (formation) => {
    const base = {
      '3-3-4': {
        GK: [[216, 616]],
        DEF: [[123, 510], [214, 536], [309, 510]],
        MID: [[114, 293], [215, 369], [317, 293]],
        FW: [[74, 205], [141, 125], [287, 125], [350, 205]]
      },
      '3-4-3': {
        GK: [[214, 613]],
        DEF: [[115, 510], [210, 533], [305, 510]],
        MID: [[61, 272], [126, 365], [299, 365], [366, 272]],
        FW: [[74, 177], [212, 98], [357, 177]]
      },
      '3-5-2': {
        GK: [[211, 616]],
        DEF: [[118, 510], [210, 536], [300, 510]],
        MID: [[53, 278], [127, 368], [211, 222], [296, 368], [369, 278]],
        FW: [[138, 125], [282, 125]]
      },
      '3-6-1': {
        GK: [[214, 616]],
        DEF: [[120, 512], [214, 537], [305, 512]],
        MID: [[126, 370], [298, 370], [54, 278], [152, 222], [269, 222], [371, 278]],
        FW: [[214, 100]]
      },
      '4-1-4-1': {
        GK: [[212, 617]],
        DEF: [[69, 458], [127, 541], [290, 541], [356, 461]],
        MID: [[212, 367], [55, 223], [151, 223], [270, 223], [375, 223]],
        FW: [[212, 100]]
      },
      '4-2-3-1': {
        GK: [[213, 615]],
        DEF: [[69, 461], [126, 539], [290, 539], [357, 463]],
        MID: [[126, 368], [298, 368], [63, 223], [213, 223], [372, 223]],
        FW: [[213, 100]]
      },
      '4-3-2-1': {
        GK: [[215, 620]],
        DEF: [[71, 458], [139, 539], [295, 539], [361, 460]],
        MID: [[115, 292], [215, 370], [315, 292], [139, 205], [287, 205]],
        FW: [[215, 100]]
      },
      '4-3-3(1)': {
        GK: [[213, 615]],
        DEF: [[72, 460], [128, 539], [292, 539], [358, 460]],
        MID: [[118, 275], [213, 364], [303, 275]],
        FW: [[69, 185], [213, 100], [354, 185]]
      },
      '4-3-3(2)': {
        GK: [[213, 615]],
        DEF: [[72, 460], [128, 539], [292, 539], [358, 460]],
        MID: [[118, 364], [213, 275], [303, 364]],
        FW: [[69, 185], [213, 100], [354, 185]]
      },
      '4-4-1-1': {
        GK: [[214, 620]],
        DEF: [[77, 458], [130, 540], [295, 540], [362, 460]],
        MID: [[58, 285], [125, 365], [300, 365], [366, 285]],
        FW: [[214, 205], [214, 95]]
      },
      '4-4-2': {
        GK: [[212, 615]],
        DEF: [[72, 458], [135, 539], [293, 539], [358, 460]],
        MID: [[63, 280], [130, 368], [298, 368], [365, 280]],
        FW: [[140, 125], [283, 125]]
      },
      '4-5-1': {
        GK: [[214, 615]],
        DEF: [[80, 458], [133, 539], [295, 539], [357, 460]],
        MID: [[73, 190], [122, 275], [213, 369], [307, 275], [365, 190]],
        FW: [[214, 100]]
      },
      '5-2-3': {
        GK: [[212, 618]],
        DEF: [[78, 456], [129, 540], [211, 507], [293, 540], [355, 460]],
        MID: [[129, 368], [298, 368]],
        FW: [[72, 182], [212, 100], [353, 182]]
      },
      '5-3-2': {
        GK: [[212, 615]],
        DEF: [[76, 456], [131, 540], [212, 510], [292, 540], [358, 460]],
        MID: [[120, 275], [212, 368], [306, 275]],
        FW: [[141, 125], [284, 125]]
      },
      '5-4-1': {
        GK: [[214, 619]],
        DEF: [[74, 456], [136, 540], [216, 508], [296, 540], [362, 460]],
        MID: [[64, 278], [129, 368], [301, 368], [366, 278]],
        FW: [[214, 98]]
      },
    };
    return base[formation] || [];
  };

function Best11Femenin() {
  const { t } = useTranslation();
  const [formation, setFormation] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const canvasRef = useRef(null);
  const shareText = `WORLD XI 2024/25\nFormation: ${formation}\n\n` + selectedPlayers.map((name, index) => `${index + 1}. ${name}`).join('\n');
  const yourURL = "https://ballondor2025.netlify.app/World%20XI/feminin";  

  const roles = formationRoles[formation] || [];

  const handlePlayerChange = (index, value) => {
    const updated = [...selectedPlayers];
    updated[index] = value;
    setSelectedPlayers(updated);
  };

  const isValid =
    formation &&
    roles.length === selectedPlayers.length &&
    selectedPlayers.every((p) => p);

  const handleSubmit = () => {
    if (!isValid) {
      alert('Please complete all player selections.');
      return;
    }
    setSubmitted(true);
  };

  useEffect(() => {
    if (!submitted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = formations[formation]?.image || '';

    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      const coordGroups = getCoords(formation);
      const flatCoords = formationRoles[formation].map((role, index) => {
        const group = coordGroups[role.pos] || [];
        return group.filter(Boolean)[
          formationRoles[formation].slice(0, index).filter(r => r.pos === role.pos).length
        ];
      });

      selectedPlayers.forEach((name, idx) => {
        const [x, y] = flatCoords[idx] || [0, 0];
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name, x, y);
      });
    };
  }, [submitted, formation, selectedPlayers]);

    useEffect(() => {
      const data = {
        formation,
        selectedPlayers
      };
      localStorage.setItem('Best11Selection', JSON.stringify(data));
    }, [formation, selectedPlayers]);
  
    useEffect(() => {
    const saved = localStorage.getItem('Best11Selection');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.formation && formationRoles[data.formation]) {
        setFormation(data.formation);
        setSelectedPlayers(data.selectedPlayers || []);
      }
    }
  }, []);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = 'worldxif.png';
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <img
        src={headingImage}
        alt="Heading Icon"
        style={{ width: '117.6px', height: '178.5px' }}
      />
      <img
        src={femenin}
        alt="Heading Icon"
        style={{ width: '120px', height: '120px' }}
      />
      <h1>{t('Best11F')} 2024/25</h1>

      <p>{t('DatesF')}</p>
      <p>{t('Dates2')}30 {t('July')} 2025</p>

      <h2>{t('selectFormation')}</h2>
      <select value={formation} onChange={(e) => {
        setFormation(e.target.value);
        setSelectedPlayers([]);
        setSubmitted(false);
      }}>
        <option value="" style={{ fontFamily: 'Figtree', textAlign: 'center' }}>-- {t('selectFormations')} --</option>
        {Object.keys(formationRoles).map((f) => (
          <option key={f} value={f} style={{ fontFamily: 'Figtree', textAlign: 'center' }}>{f}</option>
        ))}
      </select>

      {roles.map((role, idx) => (
        <div key={idx} style={{ margin: '10px 0' }}>
          <label>{t(`positionRoles2.${role.label}`)}: </label>
          <select
            value={selectedPlayers[idx] || ''}
            onChange={(e) => handlePlayerChange(idx, e.target.value)}
          >
            <option value="" style={{ fontFamily: 'Figtree', textAlign: 'center' }}>-- {t('selectPlayer2')} --</option>
            {players2[role.pos].map((name) => (
              <option style={{ fontFamily: 'Figtree', textAlign: 'center' }}
                key={name}
                value={name}
                disabled={selectedPlayers.includes(name) && selectedPlayers[idx] !== name}
              >
                {name}
              </option>
            ))}
          </select>
        </div>
      ))}

      <br />

      <button
        onClick={() => {
          if (window.confirm(t('sureSelection'))) {
            setFormation('');
            setSelectedPlayers([]);
            setSubmitted(false);
            localStorage.removeItem('Best11Selection');
          }
        }}
        style={{ marginTop: '10px', backgroundColor: '#e74c3c', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'Figtree' }}
      >
        {t('clearSelection')}
      </button>

      <br />
      <br />

      <button disabled={!isValid} onClick={handleSubmit} style={{ fontFamily: 'Figtree'}}>
        {t('submit11')}
      </button>

      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <canvas ref={canvasRef} width={425} height={637} style={{ border: '1px solid #ccc' }}></canvas>
          <br />
          <button onClick={downloadImage} style={{ fontFamily: 'Figtree'}}>{t('download11')}</button>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <a href={`https://wa.me/?text=${encodeURIComponent(shareText+ ' ' + yourURL)}`} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={40} style={{ color: '#25D366' }} />
      </a>
    </button>
    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText+ ' ' + yourURL)}`} target="_blank" rel="noopener noreferrer">
      <FaXTwitter size={40} style={{ color: '#000' }} />
      </a>
    </button>
    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(yourURL)}`} target="_blank" rel="noopener noreferrer">
      <FaFacebookF size={40} style={{ color: '#1877F2' }} />
      </a>
    </button>
    </div>           
        </div>
      )}
    </div>
  );
}

export default Best11Femenin;