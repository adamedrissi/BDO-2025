import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaXTwitter, FaFacebookF } from 'react-icons/fa6';

function PlayerAwardImage({ top10, bottom20, clubOfTheYear }) {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const backgroundImage = process.env.PUBLIC_URL + '/results.png';
  const shareText = `BALLON D'OR 2025 - Top 10\n\n` + top10.map((name, index) => `${index + 1}. ${typeof name === 'string' ? name : name.name}`).join('\n') + `\n\nhttps://ballondor2025.netlify.app/Ballon%20d'Or/masculin`;
  const yourURL = "https://ballondor2025.netlify.app/Ballon%20d'Or/masculin";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = backgroundImage;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const topCoords = [
        [90, 131], [105, 289], [120, 408], [90, 457], [90, 493],
        [90, 528], [90, 564], [90, 599], [90, 635], [90, 671]
      ];

      const bottomCoords = [
        [560, 459], [560, 483], [560, 507], [560, 531], [560, 556],
        [560, 581], [560, 605], [560, 630], [560, 654], [560, 679],
        [930, 459], [930, 483], [930, 507], [930, 531], [930, 556],
        [930, 581], [930, 605], [930, 630], [930, 654], [930, 679]
      ];

      top10.forEach((player, i) => {
        const [x, y] = topCoords[i];

        let fontSize;
        if (i === 0) fontSize = 28;
        else if (i === 1) fontSize = 24;
        else if (i === 2) fontSize = 20;
        else fontSize = 18;

        ctx.font = `bold ${fontSize}px Arial`;
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(player, x, y);
      });

      const sortedBottom = [...bottom20].sort((a, b) => a.position - b.position);

      sortedBottom.forEach(({ name }, i) => {
        const [x, y] = bottomCoords[i];
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(name, x, y);
      });

      if (clubOfTheYear?.name) {
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(
          `CLUB OF THE YEAR: ${clubOfTheYear.name} (${clubOfTheYear.nominees} noms, ${clubOfTheYear.points} pts)`,
          canvas.width / 3,
          30
        );
      }
    };
  }, [backgroundImage, top10, bottom20, clubOfTheYear]);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = 'ballondor2025.png';
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

export default PlayerAwardImage;