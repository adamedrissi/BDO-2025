import React, { /*useEffect, */useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PlayerAwardImage2f from '../../components/PlayerAwardImage2f';

function ItemOrderingPage2f() {
  const { state } = useLocation();
  const { t } = useTranslation();
  const [items, setItems] = useState(state?.selectedItems || []);

  const [showResult, setShowResult] = useState(false);
  const [finalTop5, setFinalTop5] = useState([]);

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
    const savedTop5 = localStorage.getItem('kopaFTop5');
    if (savedTop5) {
      setItems(JSON.parse(savedTop5));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('kopaFTop5', JSON.stringify(items));
  }, [items]);*/

  const handleSubmit = () => {
    const formattedList = items
    .map((item, index) => `${index + 1}. ${item}`)
    .join('\n');
    alert(`TROPHÉE KOPA FÉMENIN 2025:\n${formattedList}`);

    const top5Names = items.map(item => ({ name: item }));;

    setFinalTop5(top5Names);
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
          <Link to="/Trophée Kopa/feminin">{t('back')}</Link>
        </button>
      </div>

      <button onClick={handleSubmit} style={{ marginTop: '20px', fontFamily: 'Figtree' }}>{t('submitOrder')}</button>

      {showResult && (
        <PlayerAwardImage2f top5={finalTop5}/>
      )}

      {showResult && (
        <>
          <br/>
          <button style={{ marginTop: '10px', fontFamily: 'Figtree' }}>
            <Link to="/Trophée Yachine/feminin">{t('next')}</Link>
          </button>
        </>
      )}

    </div>
  );
}

export default ItemOrderingPage2f;