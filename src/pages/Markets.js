import React, { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';

// Import the background image
import marketsBg from '../components/images/market.avif';

// Import chemical images
import waste from '../components/images/waste.png';
import saf from '../components/images/saf.png';
import hydrogen from '../components/images/hydrogen.png';
import biogas from '../components/images/biogas.png';
import ethylene from '../components/images/ethylene.png';
import ethane from '../components/images/ethane.png';
import syngas from '../components/images/syngas.png';
import benzene from '../components/images/benzene.png';

const sectionStyle = {
  padding: 'var(--section-padding)',
  margin: '0 auto',
  backgroundColor: '#000000',
  textAlign: 'left',
};

const titleStyle = {
  fontSize: '40px',
  color: '#0077b5',
  marginBottom: '3rem',
  textAlign: 'center',
  fontWeight: '400',
};

const highlightTextStyle = {
  fontSize: '32px',
  color: '#0077b5',
  textAlign: 'center',
  marginBottom: '3rem',
  textTransform: 'uppercase',
  fontWeight: '300',
};

const cardsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
  marginTop: '2rem',
  padding: '0 2rem',
};

const cardStyle = {
  flex: 1,
  padding: '2rem 2rem 1rem',
  backgroundColor: '#141414',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  marginBottom: '1rem',
};

const cardTitleStyle = {
  fontSize: '48px',
  fontWeight: '600',
  color: '#0077b5',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  textAlign: 'center',
};

const cardTextStyle = {
  color: '#ffffff',
  fontSize: '18px',
  lineHeight: '1.5',
  textAlign: 'center',
  marginTop: '0',
  fontWeight: '500',
};

const carouselContainerStyle = {
  width: '100%',
  overflow: 'hidden',
  marginTop: '4rem',
  position: 'relative',
};

const carouselTrackStyle = {
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  gap: '0',
  animation: 'slide 20s linear infinite',
  alignItems: 'center',
  margin: '0',
  padding: '0',
};

const carouselImageStyle = {
  width: '350px',
  height: '350px',
  objectFit: 'contain',
  flexShrink: 0,
  marginBottom: '0',
};

const imageTitleStyle = {
  color: '#ffffff',
  fontSize: '26px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '-1.8rem',
};

const marketSizeStyle = {
  color: '#ffffff',
  fontSize: '23px',
  fontWeight: 'normal',
  textAlign: 'center',
  marginTop: '0',
  marginBottom: '0.5rem',
  lineHeight: '1',
};

const futureMarketSizeStyle = {
  color: '#0077b5',
  fontSize: '23px',
  fontWeight: 'normal',
  textAlign: 'center',
  marginTop: '0',
  lineHeight: '1',
};

const imageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
};

const keySectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '2rem',
  fontSize: '20px',
};

const keyTextStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const firstMarketBoxStyle = (index) => ({
  border: '2px solid #45a10f',
  borderLeft: index === 0 ? '2px solid #45a10f' : 'none',
  borderRight: index === 2 ? '2px solid #45a10f' : 'none',
  borderTop: '2px solid #45a10f',
  borderBottom: '2px solid #45a10f',
  borderTopLeftRadius: index === 0 ? '16px' : '0',
  borderBottomLeftRadius: index === 0 ? '16px' : '0',
  borderTopRightRadius: index === 2 ? '16px' : '0',
  borderBottomRightRadius: index === 2 ? '16px' : '0',
  padding: '0',
  margin: '0',
  marginLeft: index === 0 ? '0' : '-2px',
  marginRight: index === 2 ? '0' : '-2px',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

const keyframes = `
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

function Markets() {
  const images = [
    { src: waste, title: 'Waste Gas', size: '$7.5B', futureSize: '$9.5B', isFirstMarket: true },
    { src: saf, title: 'SAF', size: '$1.1B', futureSize: '$62B', isFirstMarket: true },
    { src: hydrogen, title: 'Hydrogen', size: '$243B', futureSize: '$411B', isFirstMarket: true },
    { src: biogas, title: 'RNG, Biogas', size: '$24B, $65B', futureSize: '$127B, $88B', isFirstMarket: false },
    { src: ethylene, title: 'Ethylene', size: '$195B', futureSize: '$300B', isFirstMarket: false },
    { src: ethane, title: 'Ethane', size: '$14B', futureSize: '$19B', isFirstMarket: false },
    { src: syngas, title: 'Syngas', size: '$59B', futureSize: '$105B', isFirstMarket: false },
    { src: benzene, title: 'Benzene', size: '$40B', futureSize: '$71B', isFirstMarket: false }
  ];

  return (
    <>
      <style>{keyframes}</style>
      <PageHero 
        backgroundImageUrl={marketsBg}
        title="Markets"
        titleStyle={{
          color: '#ffffff',
          fontSize: '64px',
          fontWeight: '400',
          textAlign: 'left',
          marginBottom: '1rem',
          paddingLeft: '4rem',
          position: 'relative',
          zIndex: 2,
        }}
        imageStyle={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000000',
        }}
      />
      <div style={sectionStyle}>
        <h1 style={titleStyle}>Market Overview</h1>
        <p style={highlightTextStyle}>
          Alchemity SERVES Major chemical markets with a single Reactor DESIGN
        </p>
        
        <div style={cardsContainerStyle}>
          {/* Market 1 Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>$1,200B</h3>
            <p style={cardTextStyle}>Total addressable market</p>
            <p style={cardTextStyle}>Can be served with TRL 8/9</p>
          </div>

          {/* Market 2 Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>$120B</h3>
            <p style={cardTextStyle}>Serviceable available market</p>
            <p style={cardTextStyle}>Can be served with TRL 6/7</p>
            <p style={cardTextStyle}>10% share of TAM</p>
          </div>

          {/* Market 3 Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>$18B</h3>
            <p style={cardTextStyle}>Serviceable obtainable market</p>
            <p style={cardTextStyle}>Modular skids, 1-5 tons/day</p>
            <p style={cardTextStyle}>15% share of SAM</p>
          </div>
        </div>

        <div style={carouselContainerStyle}>
          <div style={carouselTrackStyle}>
            {images.map((item, index) => (
              <div key={index} style={{...imageContainerStyle, ...(item.isFirstMarket ? firstMarketBoxStyle(index) : {})}}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={carouselImageStyle}
                />
                <p style={imageTitleStyle}>{item.title}</p>
                <p style={marketSizeStyle}>{item.size}</p>
                <p style={futureMarketSizeStyle}>{item.futureSize}</p>
              </div>
            ))}
            {/* Duplicate images for seamless loop */}
            {images.map((item, index) => (
              <div key={`duplicate-${index}`} style={{...imageContainerStyle, ...(item.isFirstMarket ? firstMarketBoxStyle(index) : {})}}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={carouselImageStyle}
                />
                <p style={imageTitleStyle}>{item.title}</p>
                <p style={marketSizeStyle}>{item.size}</p>
                <p style={futureMarketSizeStyle}>{item.futureSize}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={keySectionStyle}>
          <div style={keyTextStyle}>
            <span style={{ color: '#ffffff' }}>2025</span>
          </div>
          <div style={keyTextStyle}>
            <span style={{ color: '#0077b5' }}>2030</span>
          </div>
          <div style={keyTextStyle}>
            <span style={{ color: '#45a10f' }}>First Markets</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Markets;