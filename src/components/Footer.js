import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram, FaTiktok} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import headingImage from '../assets/ballondorlogo.png';
import edx from '../assets/3dx.png'
import ballondor from '../assets/ballondor2.png';
import kopa from '../assets/kopa.png';
import yashin from '../assets/yachine.png';
import johancruyff  from '../assets/johancruyff.png';
import gerdmuller from '../assets/muller.png';
import worldxi from '../assets/worldxi.png';
import superballondor from '../assets/superballondor.png';
import ballondorf from '../assets/feminin2.png';
import kopaf from '../assets/feminin2.png';
import yashinf from '../assets/feminin2.png';
import johancruyfff  from '../assets/feminin2.png';
import gerdmullerf from '../assets/feminin2.png';
import worldxif from '../assets/feminin2.png';
import superballondorf from '../assets/feminin2.png';

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/ballondor/', bg: '#3b5998', handle: '@ballondor' },
  { name: 'X', icon: <FaXTwitter />, url: 'https://x.com/ballondor', bg: '#55acee', handle: '@ballondor' },
  { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@lequipe', bg: '#cd201f', handle: '@lequipe' },
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/ballondorofficial/#', bg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', handle: '@ballondorofficial' },
  { name: 'TikTok', icon: <FaTiktok />, url: 'https://www.tiktok.com/@ballondor', bg: '#000000', handle: '@ballondor' },
];

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer" footer id="footer">
        <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
            marginTop: '10px',
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontFamily: 'Figtree',
            backgroundColor: '#f5f5f5'
        }} >↑ {t('backToTop')}</button>
      <h3>{t('footer1')}</h3>
    <div className="social-container">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-box"
          style={{ background: link.bg }}
        >
          <div className="icon">{link.icon}</div>
          <div className="text">
            <strong>Ballon d'Or</strong>
            <br />
            <span>{link.handle}</span>
          </div>
        </a>
      ))}
      </div>
      <br/>
      <img
        src={headingImage}
        alt="Heading Icon"
        style={{ width: '200px', height: '200px' }}
        />
      <br/>
      <h2>{t('footer2')}</h2>
      <div style={{ margin: '20px 0' }}>
              <Link to="https://www.uefa.com/ballondor/" style={{ fontSize: '1.2em', textDecoration: 'none' }}>{t('creditUEFA')} </Link>  · 
              <Link to="https://www.francefootball.fr/ballon-d-or/" style={{ fontSize: '1.2em', textDecoration: 'none' }}> {t('creditFranceFootball')}</Link>
      </div>
      <br/>
      <Link to="/Ballon d'Or/masculin"><img src={ballondor} alt="Heading Icon" style={{ width: '50px', height: '62.5px' }}/></Link>
      <Link to="/Trophée Kopa/masculin"><img src={kopa} alt="Heading Icon" style={{ width: '50px', height: '62.5px' }}/></Link>
      <Link to="/Trophée Yachine/masculin"><img src={yashin} alt="Heading Icon" style={{ width: '50px', height: '62.5px' }}/></Link>
      <Link to="/Trophée Johan Cruyff/masculin"><img src={johancruyff} alt="Heading Icon" style={{ width: '50px', height: '62.5px' }}/></Link>
      <Link to="/Trophée Gerd Müller/masculin"><img src={gerdmuller} alt="Heading Icon" style={{ width: '50px', height: '62.5px' }}/></Link>
      <Link to="/World XI/masculin"><img src={worldxi} alt="Heading Icon" style={{ width: '50px', height: '76px' }}/></Link>
      <Link to="/Super Ballon d'Or/masculin"><img src={superballondor} alt="Heading Icon" style={{ width: '50px', height: '50px' }}/></Link>
      <br/>
      <br/>
      <Link to="/Ballon d'Or/feminin"><img src={ballondor} alt="Heading Icon" style={{ width: '25px', height: '31.25px' }}/><img src={ballondorf} alt="Heading Icon" style={{ width: '25px', height: '25px' }}/></Link>
      <Link to="/Trophée Kopa/feminin"><img src={kopa} alt="Heading Icon" style={{ width: '25px', height: '31.25px' }}/><img src={kopaf} alt="Heading Icon" style={{ width: '25px', height: '25px' }}/></Link>
      <Link to="/Trophée Yachine/feminin"><img src={yashin} alt="Heading Icon" style={{ width: '25px', height: '31.25px' }}/><img src={yashinf} alt="Heading Icon" style={{ width: '25px', height: '25px' }}/></Link>
      <Link to="/Trophée Johan Cruyff/feminin"><img src={johancruyff} alt="Heading Icon" style={{ width: '25px', height: '31.25px' }}/><img src={johancruyfff} alt="Heading Icon" style={{ width: '25px', height: '25px' }}/></Link>
      <Link to="/Trophée Gerd Müller/feminin"><img src={gerdmuller} alt="Heading Icon" style={{ width: '25px', height: '31.25px' }}/><img src={gerdmullerf} alt="Heading Icon" style={{ width: '25px', height: '25px' }}/></Link>
      <Link to="/World XI/feminin"><img src={worldxi} alt="Heading Icon" style={{ width: '25px', height: '38px' }}/><img src={worldxif} alt="Heading Icon" style={{ width: '25px', height: '25px' }}/></Link>
      <Link to="/Super Ballon d'Or/feminin"><img src={superballondor} alt="Heading Icon" style={{ width: '25px', height: '25px' }}/><img src={superballondorf} alt="Heading Icon" style={{ width: '25px', height: '25px' }}/></Link>
      <br/>
      <br/>
      <p><Link to="/LegalTerms" style={{ fontSize: '1.2em', textDecoration: 'none' }}>{t('legalTerms')} </Link> | <Link to="/PrivacyPolicy" style={{ fontSize: '1.2em', textDecoration: 'none' }}>{t('privacyPolicy')} </Link> | <Link to="/Cookies" style={{ fontSize: '1.2em', textDecoration: 'none' }}>{t('cookies')} </Link> | <Link to="/ContactUs" style={{ fontSize: '1.2em', textDecoration: 'none' }}>{t('contactUs')} </Link> | <Link to="/SupportFAQs" style={{ fontSize: '1.2em', textDecoration: 'none' }}>{t('supportFAQs')} </Link></p>
      <h2>© 2025 Copyright Adam3D · All Rights Reserved</h2>
      <img
        src={edx}
        alt="Heading Icon"
        style={{ width: '100px', height: '100px' }}
        />
    </footer>
  );
}

export default Footer;