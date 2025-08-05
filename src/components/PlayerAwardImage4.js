import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaXTwitter, FaFacebookF } from 'react-icons/fa6';

function PlayerAwardImage4({ top6 }) {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const backgroundImage = process.env.PUBLIC_URL + '/results4.png';
  const shareText = `TROPHÉE JOHAN CRUYFF 2025 - Top 6\n\n` + top6.map((name, index) => `${index + 1}. ${typeof name === 'string' ? name : name.name}`).join('\n') + `\n\nhttps://ballondor2025.netlify.app/Troph%C3%A9e%20Johan%20Cruyff/masculin`;
  const yourURL = "https://ballondor2025.netlify.app/Troph%C3%A9e%20Johan%20Cruyff/masculin";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = backgroundImage;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const topCoords = [
        [90, 138], [105, 295], [120, 415], [125, 502], [125, 576], [125, 657]
      ];

      top6.forEach(({ name }, i) => {
        const [x, y] = topCoords[i];

        let fontSize;
        if (i === 0) fontSize = 28;
        else if (i === 1) fontSize = 24;
        else if (i === 2) fontSize = 20;
        else fontSize = 19;

        ctx.font = `bold ${fontSize}px Arial`;
        ctx.fillStyle = '#000';
        ctx.fillText(name, x, y);
      });
    };
  }, [backgroundImage, top6]);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = 'johancruyff2025.png';
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <canvas ref={canvasRef} width={1225} height={699} style={{ border: '1px solid #ccc' }} />
      <br />
      <button onClick={downloadImage} style={{ marginTop: '10px', fontFamily: 'Figtree' }}>
        {t('download')}
      </button>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <a href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={40} style={{ color: '#25D366' }} />
      </a>
    </button>
    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer">
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
  );
}

export default PlayerAwardImage4;