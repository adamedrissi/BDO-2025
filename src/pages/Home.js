import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ballondor from '../assets/ballondor2.png';
import kopa from '../assets/kopa.png';
import yashin from '../assets/yachine.png';
import johancruyff  from '../assets/johancruyff.png';
import gerdmuller from '../assets/muller.png';
import worldxi from '../assets/worldxi.png';
import superballondor from '../assets/superballondor.png';
import ballondorf from '../assets/feminin.png';
import kopaf from '../assets/feminin.png';
import yashinf from '../assets/feminin.png';
import johancruyfff  from '../assets/feminin.png';
import gerdmullerf from '../assets/feminin.png';
import worldxif from '../assets/feminin.png';
import superballondorf from '../assets/feminin.png';

function Home() {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>{t('BDO')} 2025</h1>
      <p>{t('Dates')}</p>
      <p>{t('Dates2')}13 {t('July')} 2025</p>

      <h2>{t('Men')}</h2>

      <div style={{ margin: '20px 0' }}>
        <Link to="/Ballon d'Or/masculin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={ballondor} alt="Heading Icon" style={{ width: '50px', height: '62.5px' }}/><br/>{t('BDO')}</Link>
        <p>{t('vote1')}</p>
      </div>

      <div style={{ margin: '20px 0' }}>        
        <Link to="/Trophée Kopa/masculin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={kopa} alt="Heading Icon" style={{ width: '36px', height: '45px' }}/><br/>{t('Kopa')}</Link>
        <p>{t('vote2')}</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Link to="/Trophée Yachine/masculin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={yashin} alt="Heading Icon" style={{ width: '36px', height: '45px' }}/><br/>{t('Yashin')}</Link>
        <p>{t('vote3')}</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Link to="/Trophée Johan Cruyff/masculin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={johancruyff} alt="Heading Icon" style={{ width: '36px', height: '45px' }}/><br/>{t('JCTrophy')}</Link>
        <p>{t('vote4')}</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Link to="/Trophée Gerd Müller/masculin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={gerdmuller} alt="Heading Icon" style={{ width: '36px', height: '45px' }}/><br/>{t('Muller')}</Link>
        <p>{t('vote5')}</p>
      </div>

      <div style={{ margin: '20px 0' }}>      
        <Link to="/World XI/masculin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={worldxi} alt="Heading Icon" style={{ width: '35.28px', height: '53.55px' }}/><br/>{t('Best11')}</Link>
        <p>{t('vote6')} *</p>
      </div>

      <div style={{ margin: '20px 0' }}>      
        <Link to="/Super Ballon d'Or/masculin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={superballondor} alt="Heading Icon" style={{ width: '35.28px', height: '35.28px' }}/><br/>{t('superBallonDor')}</Link>
        <p>{t('vote7')} ***</p>
      </div>      

      <h2>{t('Women')}</h2>

      <div style={{ margin: '20px 0' }}>
        <Link to="/Ballon d'Or/feminin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={ballondor} alt="Heading Icon" style={{ width: '50px', height: '62.5px' }}/> <img src={ballondorf} alt="Heading Icon" style={{ width: '40px', height: '40px' }}/><br/>{t('BDO')}</Link>
        <p>{t('vote1f')}</p>
      </div>

      <div style={{ margin: '20px 0' }}>        
        <Link to="/Trophée Kopa/feminin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={kopa} alt="Heading Icon" style={{ width: '36px', height: '45px' }}/> <img src={kopaf} alt="Heading Icon" style={{ width: '40px', height: '40px' }}/><br/>{t('Kopa')}</Link>
        <p>{t('vote2f')} **</p>
      </div>

      <div style={{ margin: '20px 0' }}> 
        <Link to="/Trophée Yachine/feminin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={yashin} alt="Heading Icon" style={{ width: '36px', height: '45px' }}/> <img src={yashinf} alt="Heading Icon" style={{ width: '40px', height: '40px' }}/><br/>{t('Yashin')}</Link>
        <p>{t('vote3f')} **</p>
      </div>

      <div style={{ margin: '20px 0' }}>       
        <Link to="/Trophée Johan Cruyff/feminin" style={{ fontSize: '1.2em', textDecoration: 'none' }}> <img src={johancruyff} alt="Heading Icon" style={{ width: '36px', height: '45px' }}/> <img src={johancruyfff} alt="Heading Icon" style={{ width: '40px', height: '40px' }}/><br/>{t('JCTrophy')}</Link>
        <p>{t('vote4f')}</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Link to="/Trophée Gerd Müller/feminin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={gerdmuller} alt="Heading Icon" style={{ width: '36px', height: '45px' }}/> <img src={gerdmullerf} alt="Heading Icon" style={{ width: '40px', height: '40px' }}/><br/>{t('Muller')}</Link>
        <p>{t('vote5f')} **</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Link to="/World XI/feminin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={worldxi} alt="Heading Icon" style={{ width: '35.28px', height: '53.55px' }}/> <img src={worldxif} alt="Heading Icon" style={{ width: '40px', height: '40px' }}/><br/>{t('Best11')}</Link>
        <p>{t('vote6f')} *</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Link to="/Super Ballon d'Or/feminin" style={{ fontSize: '1.2em', textDecoration: 'none' }}><img src={superballondor} alt="Heading Icon" style={{ width: '35.28px', height: '35.28px' }}/> <img src={superballondorf} alt="Heading Icon" style={{ width: '40px', height: '40px' }}/><br/>{t('superBallonDor')}</Link>
        <p>{t('vote7f')} ***</p>
      </div>

      <br/>
      <p>{t('ceremony')}</p>
      <p>{t('judgingCriteria')}</p>
      <br/>
      <p style={{ fontWeight: 'bold'}}>{t('BIC')}</p>
      <br/>
      <p style={{ fontWeight: 'bold'}}>{t('TATH')}</p>
      <br/>
      <p style={{ fontWeight: 'bold'}}>{t('SAATFP')}</p>
      <br/>
      <p>* {t('m1')}</p>
      <p>** {t('m2')}</p>
      <p>*** {t('m3')}</p>
    </div>
  );
}

export default Home;