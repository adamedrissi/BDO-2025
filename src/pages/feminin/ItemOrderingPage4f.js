import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PlayerAwardImage4 from '../../components/PlayerAwardImage4';

function ItemOrderingPage4f() {
  const { state } = useLocation();
  const { t } = useTranslation();
  const [items, setItems] = useState(state?.selectedItems || []);

  const [showResult, setShowResult] = useState(false);
  const [finalTop6, setFinalTop6] = useState([]);

  const moveUp = (index) => {
    if (index === 0) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setItems(newItems);
  };

  const moveDown = (index) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    setItems(newItems);
  };

  /*useEffect(() => {
    const savedTop6 = localStorage.getItem('jcTrophyFTop6');
    if (savedTop6) {
      setItems(JSON.parse(savedTop6));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('jcTrophyFTop6', JSON.stringify(items));
  }, [items]);*/

  const handleSubmit = () => {
    const formattedList = items
    .map((item, index) => `${index + 1}. ${item}`)
    .join('\n');
    alert(`TROPHÉE JOHAN CRUYFF 2025:\n${formattedList}`);
      
    const top6Names = items.map(item => ({ name: item }));;

    setFinalTop6(top6Names);
    setShowResult(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{t('Order')}</h1>
      {items.map((item, index) => (
        <div key={item} style={{ margin: '4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Figtree' }}>
          <span style={{ width: '200px' }}>{index + 1}. {item}</span>
          <button onClick={() => moveUp(index)} disabled={index === 0}>⬆</button>
          <button onClick={() => moveDown(index)} disabled={index === items.length - 1}>⬇</button>
        </div>
      ))}

      <div className="back-button-container">
        <button className="back-button">
          <Link to="/Trophée Johan Cruyff/feminin">{t('back')}</Link>
        </button>
      </div> 

      <button onClick={handleSubmit} style={{ marginTop: '20px', fontFamily: 'Figtree' }}>{t('submitOrder')}</button>
            
      {showResult && (
        <PlayerAwardImage4 top6={finalTop6}/>
      )}

      {showResult && (
        <>
          <br/>
          <button style={{ marginTop: '10px', fontFamily: 'Figtree' }}>
            <Link to="/World XI/feminin">{t('next')}</Link>
          </button>
        </>
      )}

    </div>
  );
}

export default ItemOrderingPage4f;