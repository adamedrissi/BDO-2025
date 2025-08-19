import React, { /*useEffect, */useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PlayerAwardImage from '../../components/PlayerAwardImage';
import playerClubs from '../../components/playerClubs2';

function ItemOrderingPage1f() {
  const { state } = useLocation();
  const { t } = useTranslation();
  const items = state?.selectedItems || [];

  const [showResult, setShowResult] = useState(false);
  const [finalTop10, setFinalTop10] = useState([]);
  const [finalBottom20, setFinalBottom20] = useState([]);

  const [clubOfTheYear, setClubOfTheYear] = useState(null);
  const [clubNominees, setClubNominees] = useState(0);
  const [clubPoints, setClubPoints] = useState(0);  

  const pointValues = [15, 12, 10, 8, 7, 5, 4, 3, 2, 1];
  const positionValues = Array.from({ length: 20 }, (_, i) => i + 11);

  const [pointAssignments, setPointAssignments] = useState(
    pointValues.reduce((acc, pt) => ({ ...acc, [pt]: '' }), {})
  );

  const [positionAssignments, setPositionAssignments] = useState(
    items.reduce((acc, item) => ({ ...acc, [item]: '' }), {})
  );

  const usedInPoints = Object.values(pointAssignments).filter(Boolean);

  const usedPositions = Object.values(positionAssignments).filter(Boolean);

  /*useEffect(() => {
    const savedPoints = localStorage.getItem('ballonDorFPoints');
    const savedPositions = localStorage.getItem('ballonDorFPositions');

    if (savedPoints) {
      setPointAssignments(JSON.parse(savedPoints));
    }
    if (savedPositions) {
     setPositionAssignments(JSON.parse(savedPositions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ballonDorFPoints', JSON.stringify(pointAssignments));
  }, [pointAssignments]);

  useEffect(() => {
    localStorage.setItem('ballonDorFPositions', JSON.stringify(positionAssignments));
  }, [positionAssignments]);*/

  const handlePointChange = (point, item) => {
    const updatedPoints = { ...pointAssignments};
    const updatedPositions = { ...positionAssignments };

    for (let key in updatedPoints) {
      if (updatedPoints[key] === item) updatedPoints[key] = '';
    }

    if (updatedPositions[item]) {
      updatedPositions[item] = '';
    }

    updatedPoints[point] = item;

    setPointAssignments(updatedPoints);
    setPositionAssignments(updatedPositions);
  };

  const handlePositionChange = (item, position) => {
    const updatedPositions = { ...positionAssignments };
    const updatedPoints = { ...pointAssignments };

    for (let key in updatedPositions) {
      if (updatedPositions[key] === position) updatedPositions[key] = '';
    }

    for (let key in updatedPoints) {
      if (updatedPoints[key] === item) updatedPoints[key] = '';
    }

    updatedPositions[item] = position;

    setPositionAssignments(updatedPositions);
    setPointAssignments(updatedPoints);
  };

  const handleSubmit = () => {
    const allPointsAssigned = Object.values(pointAssignments).every(v => v !== '');
    const remainingItems = items.filter(item => !Object.values(pointAssignments).includes(item));
    const allPositionsAssigned = remainingItems.every(item => positionAssignments[item]);

    if (!allPointsAssigned || !allPositionsAssigned) {
      alert(t('selectError2'));
      return;
    }

    const formattedPoints = pointValues
      .map((pt, i) => `${i + 1}. ${pointAssignments[pt]} (${pt} pts)`)
      .join('\n');

    const formattedPositions = Object.entries(positionAssignments)
      .filter(([item]) => !usedInPoints.includes(item))
      .sort(([, posA], [, posB]) => posA - posB)
      .map(([item, pos]) => `${pos}. ${item}`)
      .join('\n');

    const top10Names = pointValues.map(pt => pointAssignments[pt]);

    const bottom20Names = remainingItems.map(item => ({
      name: item,
      position: Number(positionAssignments[item])
    }));

    const fullTop30 = [...top10Names, ...bottom20Names.map(p => p.name)];

    const clubCount = {};
    const clubPoints = {};

    fullTop30.forEach((player) => {
      const clubs = playerClubs[player] || [];
      const points = pointValues.find(pt => pointAssignments[pt] === player) || 0;

      clubs.forEach((club) => {
        clubCount[club] = (clubCount[club] || 0) + 1;
        clubPoints[club] = (clubPoints[club] || 0) + points;
      });
    });

    const maxNominees = Math.max(...Object.values(clubCount));

    const tiedClubs = Object.entries(clubCount)
    .filter(([_, count]) => count === maxNominees);

    tiedClubs.sort((a, b) => {
      const [clubA] = a;
      const [clubB] = b;
      return (clubPoints[clubB] || 0) - (clubPoints[clubA] || 0);
    });

    const clubOfTheYear = tiedClubs[0]?.[0] || null;

    const clubOfTheYearText = clubOfTheYear? `CLUB OF THE YEAR: ${clubOfTheYear} (${clubCount[clubOfTheYear]} noms, ${clubPoints[clubOfTheYear]} pts)`: '';

    alert(`BALLON D'OR FÉMENIN 2025 - Top 10:\n${formattedPoints}\n\n${clubOfTheYearText}\n\n11–30:\n${formattedPositions}`);    

    setFinalTop10(top10Names);
    setFinalBottom20(bottom20Names);

    if (clubOfTheYear) {
      setClubOfTheYear(clubOfTheYear);
      setClubNominees(clubCount[clubOfTheYear]);
      setClubPoints(clubPoints[clubOfTheYear]);
    }    
    
    setShowResult(true);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{t('Order')}</h1>

      <h2>TOP 10 - {t('Apointsf')}</h2>
      {pointValues.map((pt) => (
        <div key={pt} style={{ margin: '8px 0' }}>
          <label style={{ fontWeight: 'bold' }}>{pt} pts: </label>
          <select
            value={pointAssignments[pt]}
            onChange={(e) => handlePointChange(pt, e.target.value)}
          >
            <option value="" style={{ fontFamily: 'Figtree', textAlign: 'center' }}>-- {t('selectPlayer2')} --</option>
            {items.map((item) => (
              <option style={{ fontFamily: 'Figtree', textAlign: 'center' }}
                key={item}
                value={item}
                disabled={
                  usedInPoints.includes(item) && pointAssignments[pt] !== item
                }
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      ))}

      <h2 style={{ marginTop: '30px' }}>{t('Apoints2f')}</h2>
      {items
        .filter((item) => !usedInPoints.includes(item))
        .map((item) => (
          <div key={item} style={{ margin: '8px 0' }}>
            <label>{item}: </label>
            <select
              value={positionAssignments[item]}
              onChange={(e) =>
                handlePositionChange(item, parseInt(e.target.value))
              }
            >
              <option value="" style={{ fontFamily: 'Figtree', textAlign: 'center' }}>-- {t('selectPosition')} --</option>
              {positionValues.map((pos) => (
                <option style={{ fontFamily: 'Figtree', textAlign: 'center' }}
                  key={pos}
                  value={pos}
                  disabled={
                    usedPositions.includes(pos) &&
                    positionAssignments[item] !== pos
                  }
                >
                  {pos}
                </option>
              ))}
            </select>
          </div>
        ))}

      <div className="back-button-container">
        <button className="back-button">
          <Link to="/Ballon d'Or/feminin">{t('back')}</Link>
        </button>
      </div>

      <button onClick={handleSubmit} style={{ marginTop: '30px', fontFamily: 'Figtree' }}>
        {t('submitOrder')}
      </button>

      {showResult && (
        <PlayerAwardImage top10={finalTop10} bottom20={finalBottom20} clubOfTheYear={clubOfTheYear ? { name: clubOfTheYear, nominees: clubNominees, points: clubPoints } : null}
        />
      )}

      {showResult && (
        <>
          <br/>
          <button style={{ marginTop: '10px', fontFamily: 'Figtree' }}>
            <Link to="/Trophée Kopa/feminin">{t('next')}</Link>
          </button>
        </>
      )}

    </div>
  );
}

export default ItemOrderingPage1f;