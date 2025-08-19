import React, {useState} from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdHome, MdLanguage } from 'react-icons/md';
import './styles/App.css';
import BallonDorMasculin from './pages/masculin/BallonDorMasculin';
import BallonDorFeminin from './pages/feminin/BallonDorFeminin';
import KopaTrophy from './pages/masculin/KopaTrophy';
import KopaTrophyFeminin from './pages/feminin/KopaTrophyFeminin';
import YashinTrophy from './pages/masculin/YashinTrophy';
import YashinTrophyFeminin from './pages/feminin/YashinTrophyFeminin';
import JohanCruyffTrophy from './pages/masculin/JohanCruyffTrophy';
import JohanCruyffTrophyFeminin from './pages/feminin/JohanCruyffTrophyFeminin';
import GerdMullerTrophy from './pages/masculin/GerdMuller';
import GerdMullerTrophyFeminin from './pages/feminin/GerdMullerFeminin';
import WorldXI from './pages/masculin/Best11';
import WorldXIFeminin from './pages/feminin/Best11Feminin';
import SuperBallonDor from './pages/masculin/SuperBallonDor';
import SuperBallonDorFeminin from './pages/feminin/SuperBallonDorFeminin';
import Home from './pages/Home';
import ItemOrderingPage1 from './pages/masculin/ItemOrderingPage1';
import ItemOrderingPage1f from './pages/feminin/ItemOrderingPage1f';
import ItemOrderingPage2 from './pages/masculin/ItemOrderingPage2';
import ItemOrderingPage2f from './pages/feminin/ItemOrderingPage2f';
import ItemOrderingPage3 from './pages/masculin/ItemOrderingPage3';
import ItemOrderingPage3f from './pages/feminin/ItemOrderingPage3f';
import ItemOrderingPage4 from './pages/masculin/ItemOrderingPage4';
import ItemOrderingPage4f from './pages/feminin/ItemOrderingPage4f';
import headingImage from './assets/uk.png';
import headingImage2 from './assets/esp.png';
import headingImage3 from './assets/fra.png';
import headingImage4 from './assets/deu.png';
import headingImage5 from './assets/ita.png';
import headingImage6 from './assets/ned.png'
import headingImage7 from './assets/cat.png';
import NotFound from './pages/404';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LegalTerms from './pages/legalterms';
import PrivacyPolicy from './pages/privacypolicy';
import Cookies from './pages/cookies';
import ContactUs from './pages/contactus';
import SupportFAQs from './pages/supportFAQs';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const categories = ["Ballon d'Or", 'Trophée Kopa', 'Trophée Yachine', 'Trophée Johan Cruyff', 'Trophée Gerd Müller', 'World XI', "Super Ballon d'Or"]
  const scrollToBottom = () => {
   const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <button className="nav-button"><Link to="/"><MdHome /> {t('home')}</Link></button>
      {categories.map((category) => (
        <div
          key={category}
          className="nav-item"
          onMouseEnter={() => setHoveredMenu(category)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <button className="nav-button">{category.charAt(0).toUpperCase() + category.slice(1)}</button>
          {hoveredMenu === category && (
            <div className="dropdown">
              <Link to={`/${category}/masculin`}>{t('Masculin')}</Link>
              <Link to={`/${category}/feminin`}>{t('Feminin')}</Link>
            </div>
          )}
        </div>
      ))}

    <div
        className="language-container"
        onMouseEnter={() => setShowLanguages(true)}
        onMouseLeave={() => setShowLanguages(false)}
      >
        <button><MdLanguage /> {t('language')}</button>
        {showLanguages && (
          <div className="language-menu">
            <button onClick={() => changeLanguage('en')}>
              <img
                src={headingImage}
                alt="Heading Icon"
                style={{ width: '16.5px', height: '8.25px' }}/>  English</button>
            <button onClick={() => changeLanguage('es')}>
              <img
                src={headingImage2}
                alt="Heading Icon"
                style={{ width: '15px', height: '10px' }}/>  Español</button>
            <button onClick={() => changeLanguage('fr')}>
              <img
                src={headingImage3}
                alt="Heading Icon"
                style={{ width: '15px', height: '10px' }}/>  Français</button>
            <button onClick={() => changeLanguage('de')}>
              <img
                src={headingImage4}
                alt="Heading Icon"
                style={{ width: '15px', height: '10px' }}/>  Deutsch</button>
            <button onClick={() => changeLanguage('it')}>
              <img
                src={headingImage5}
                alt="Heading Icon"
                style={{ width: '15px', height: '10px' }}/>  Italiano</button>
            <button onClick={() => changeLanguage('nl')}>
              <img
                src={headingImage6}
                alt="Heading Icon"
                style={{ width: '15px', height: '10px' }}/>  Nederlands</button>
            <button onClick={() => changeLanguage('ca')}>
              <img
                src={headingImage7}
                alt="Heading Icon"
                style={{ width: '15px', height: '10px' }}/>  Català</button>
          </div>
        )}
      </div>
      <button className="nav-button" onClick={scrollToBottom}>
        ↓ {t('scrollBottom')}
      </button>
    </nav>
  );
}

function App() {
  const knownRoutes = [
    '/',
    '/order1',
    '/order1f',
    '/order2',
    '/order2f',
    '/order3',
    '/order3f',
    '/order4',
    '/order4f',
    "/Ballon%20d'Or/masculin",
    "/Ballon%20d'Or/feminin",
    '/Troph%C3%A9e%20Kopa/masculin',
    '/Troph%C3%A9e%20Kopa/feminin',
    '/Troph%C3%A9e%20Yachine/masculin',
    '/Troph%C3%A9e%20Yachine/feminin',
    '/Troph%C3%A9e%20Johan%20Cruyff/masculin',
    '/Troph%C3%A9e%20Johan%20Cruyff/feminin',
    '/Troph%C3%A9e%20Gerd%20M%C3%BCller/masculin',
    '/Troph%C3%A9e%20Gerd%20M%C3%BCller/feminin',
    '/World%20XI/masculin',
    '/World%20XI/feminin',
    "/Super%20Ballon%20d'Or/masculin",
    "/Super%20Ballon%20d'Or/feminin",    
    '/LegalTerms',
    '/PrivacyPolicy',
    '/Cookies',
    '/ContactUs',
    '/SupportFAQs'
  ];

  const location = useLocation();
  const hideNavbar = !knownRoutes.includes(location.pathname);
  const hideFooter = !knownRoutes.includes(location.pathname);


  return (
    <>
    <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order1" element={<ItemOrderingPage1 />} />
          <Route path="/order1f" element={<ItemOrderingPage1f />} />
          <Route path="/order2" element={<ItemOrderingPage2 />} />
          <Route path="/order2f" element={<ItemOrderingPage2f />} />
          <Route path="/order3" element={<ItemOrderingPage3 />} />
          <Route path="/order3f" element={<ItemOrderingPage3f />} />
          <Route path="/order4" element={<ItemOrderingPage4 />} />
          <Route path="/order4f" element={<ItemOrderingPage4f />} />
          <Route path="/Ballon d'Or/masculin" element={<BallonDorMasculin />} />
          <Route path="/Ballon d'Or/feminin" element={<BallonDorFeminin />} />
          <Route path="/Trophée Kopa/masculin" element={<KopaTrophy />} />
          <Route path="/Trophée Kopa/feminin" element={<KopaTrophyFeminin />} />
          <Route path="/Trophée Yachine/masculin" element={<YashinTrophy />} />
          <Route path="/Trophée Yachine/feminin" element={<YashinTrophyFeminin />} />
          <Route path="/Trophée Johan Cruyff/masculin" element={<JohanCruyffTrophy />} />
          <Route path="/Trophée Johan Cruyff/feminin" element={<JohanCruyffTrophyFeminin />} />
          <Route path="/Trophée Gerd Müller/masculin" element={<GerdMullerTrophy />} />
          <Route path="/Trophée Gerd Müller/feminin" element={<GerdMullerTrophyFeminin />} />
          <Route path="/World XI/masculin" element={<WorldXI />} />
          <Route path="/World XI/feminin" element={<WorldXIFeminin />} />
          <Route path="/Super Ballon d'Or/masculin" element={<SuperBallonDor />} />
          <Route path="/Super Ballon d'Or/feminin" element={<SuperBallonDorFeminin />} />          
          <Route path="/LegalTerms" element={<LegalTerms />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Cookies" element={<Cookies />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/SupportFAQs" element={<SupportFAQs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        {!hideFooter && <Footer />}
    </>
  );
}

export default App;

//customise background
//gerd muller goal ratio
//add assists statistics to super ballon dor s
//improve stylising and button positions
//colour the list buttons (up-green, down-red)
//cluboftheyear.png
//search option
//connect to a backend
//user account/log in/register
//register results/leaderboard
//?local storage order and nominations saving clash issue?
//?dark mode and light mode?