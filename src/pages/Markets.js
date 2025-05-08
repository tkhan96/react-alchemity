import React, { useState, useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';
import Modal from '../components/Modal';

import marketVideo from '../components/images/market.mov';

import marketsBg from '../components/images/market.avif';

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
  fontSize: '34px',
  color: '#25abe0',
  textAlign: 'center',
  marginBottom: '3rem',
  fontWeight: '600',
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
  fontSize: '34px',
  fontWeight: '600',
  color: '#25abe0',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  textAlign: 'center',
};

const cardTextStyle = {
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '1.5',
  textAlign: 'center',
  marginTop: '0',
  fontWeight: '500',
};

const carouselContainerStyle = {
  width: '100%',
  overflowX: 'auto',
  marginTop: '4rem',
  position: 'relative',
  paddingBottom: '1rem',
};

const scrollbarStyles = `
  .carousel-container {
    scrollbar-width: thin;
    scrollbar-color: #25abe0 #141414;
  }
  .carousel-container::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  .carousel-container::-webkit-scrollbar-track {
    background: #141414;
    border-radius: 5px;
  }
  .carousel-container::-webkit-scrollbar-thumb {
    background: #25abe0;
    border-radius: 5px;
    border: 2px solid #141414;
  }
  .carousel-container::-webkit-scrollbar-thumb:hover {
    background: #0077b5;
  }

  .market-image {
    transition: all 0.3s ease;
    border-radius: 12px;
  }
  .market-image:hover {
    filter: drop-shadow(0 0 10px rgba(37, 171, 224, 0.6)) drop-shadow(0 0 16px rgba(37, 171, 224, 0.3));
    transform: scale(1.015);
  }
`;

const carouselTrackStyle = {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
  margin: '0',
  padding: '0 1rem',
  width: 'max-content',
};

const carouselImageStyle = {
  width: '300px',
  height: '300px',
  objectFit: 'contain',
  flexShrink: 0,
  marginBottom: '0',
  cursor: 'pointer',
  borderRadius: '12px'
};

const imageTitleStyle = {
  color: '#ffffff',
  fontSize: '30px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '0.5rem',
};

const marketSizeStyle = {
  color: '#ffffff',
  fontSize: '30px',
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
  padding: '10px',
  cursor: 'pointer',
  position: 'relative'
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

const firstMarketsContainerStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  border: '2px solid #25abe0',
  borderRadius: '16px',
  padding: '0',
  margin: '0',
  backgroundColor: 'transparent',
  zIndex: 1,
};

const firstMarketsTitleStyle = {
  color: '#25abe0',
  fontSize: '24px',
  fontWeight: '600',
  textAlign: 'center',
  margin: '0.5rem 0 0.25rem 0',
};

const firstMarketsContentStyle = {
  display: 'flex',
  gap: '1.5rem',
  marginTop: '0.25rem',
};

const firstMarketBoxStyle = (index) => ({
  border: '2px solid #25abe0',
  borderLeft: index === 0 ? '2px solid #25abe0' : 'none',
  borderRight: index === 2 ? '2px solid #25abe0' : 'none',
  borderTop: '2px solid #25abe0',
  borderBottom: '2px solid #25abe0',
  borderTopLeftRadius: index === 0 ? '16px' : '0',
  borderBottomLeftRadius: index === 0 ? '16px' : '0',
  borderTopRightRadius: index === 2 ? '16px' : '0',
  borderBottomRightRadius: index === 2 ? '16px' : '0',
  padding: '0',
  margin: '0',
  marginLeft: index === 0 ? '0' : '-2px',
  marginRight: index === 2 ? '0' : '-2px',
  backgroundColor: '#000000',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '300px'
});

const borderOverlayStyle = {
  position: 'absolute',
  top: '-2px',
  bottom: '-2px',
  width: '2px',
  backgroundColor: '#25abe0',
  zIndex: 2
};

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

const marketBreakdownTitleStyle = {
  fontSize: '60px',
  color: '#25abe0',
  marginBottom: '3rem',
  marginTop: '3rem',
  textAlign: 'center',
  fontWeight: '400',
};

const instructionTextStyle = {
  fontSize: '22px',
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '2rem',
  marginTop: '-1rem',
  fontStyle: 'italic',
};

const marketHoverInfoStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  padding: '1rem',
  borderRadius: '10px',
  width: '100%',
  maxWidth: '350px',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  pointerEvents: 'none',
  zIndex: 10,
  border: '1px solid #25abe0',
};

const marketHoverInfoVisibleStyle = {
  ...marketHoverInfoStyle,
  opacity: 1,
};

const marketHoverTitleStyle = {
  color: '#25abe0',
  fontSize: '19px',
  fontWeight: '1000',
  marginBottom: '0.5rem',
};

const marketHoverTextStyle = {
  color: '#ffffff',
  fontSize: '17px',
  lineHeight: '1.2',
  marginBottom: '0.35rem',
};

const marketHoverSizeStyle = {
  color: '#25abe0',
  fontSize: '15px',
  fontWeight: '1000',
  marginTop: '0.35rem',
};

const additionalStyles = `
  .market-image-container {
    transition: all 0.3s ease;
    position: relative;
    padding: 10px;
  }
  
  .market-image-container:hover {
    background: rgba(37, 171, 224, 0.05);
    border-radius: 8px;
  }

  .market-image-container:hover .market-hover-info {
    opacity: 1 !important;
    pointer-events: auto;
  }

  .market-hover-info {
    transition: opacity 0.3s ease;
  }
`;

function Markets() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    { 
      src: waste, 
      title: 'Waste Gas', 
      isFirstMarket: true,
      marketSize: '$7.5B',
      futureMarketSize: '$9.5B by 2030',
      description: 'Methane, the main component of natural gas, has 85 times the global warming potential of CO₂ over first 20 years. Flaring and venting waste valuable resources and now incur penalties under new EPA rules. Scaling down conventional, capital-intensive plants remains cost-prohibitive. The proposed Modular Platform Reactor System provides a cleaner alternative, converting methane into valuable liquid products suitable for blending with crude oil and transporting by truck—ideal for sites without pipeline access. Our Reactor operates autothermally, generating all required heat internally, enabling efficient, remote operation with zero CO2 emissions. Reactor modularity allows to integrate with existing infrastructure at smaller scales, offering cost-effective and environmentally sustainable solutions for brownfield applications.'
    },
    { 
      src: saf, 
      title: 'SAF', 
      isFirstMarket: true,
      marketSize: '$1.1B',
      futureMarketSize: '$62B by 2030',
      description: 'Gas-to-Liquids (GTL) and Fischer-Tropsch technologies, used by major players, can produce fuels such as SAF and syngas at industrial scales. GTL processes require significant capital investment and are only suited for large-scale facilities. While proven at scale, GTL technologies generate significant CO₂ emissions without costly carbon capture systems. Our Platform Reactor System provides a zero-emission alternative that can integrate with existing infrastructure at smaller scales, offering cost-effective and environmentally sustainable solutions for brownfield applications.'
    },
    { 
      src: hydrogen, 
      title: 'Hydrogen', 
      isFirstMarket: true,
      marketSize: '$243B',
      futureMarketSize: '$411B by 2030',
      description: 'Current hydrogen production methods, such as steam methane reforming (SMR), emit an average of 9.4 kg of CO₂ per kg of hydrogen, while electrolyzers powered by today’s carbon-intensive grid generate even higher emissions—up to 22 kg CO₂ per kg of hydrogen. Energy consumption over plant lifetime accouts for over 70% of the hydrogen cost. Scaling hydrogen production without increasing emissions remains a significant challenge until the U.S. grid is decarbonized. Our Reactor System offers a cleaner solution to produce clean hydrogen from methane (through non-oxidative approach) while sequestering carbon as commodity chemicals, thus enhancing U.S. economic and energy security. '
    },
    { 
      src: biogas, 
      title: 'RNG, Biogas', 
      isFirstMarket: false,
      marketSize: '$24B,$65B',
      futureMarketSize: '$127B,$88B by 2030',
      description: 'placeholder......'
    },
    { 
      src: ethylene, 
      title: 'Ethylene', 
      isFirstMarket: false,
      marketSize: '$195B',
      futureMarketSize: '$150B by 2030',
      description: 'placeholder......'
    },
    { 
      src: ethane, 
      title: 'Ethane', 
      isFirstMarket: false,
      marketSize: '$14B',
      futureMarketSize: '$19B by 2030',
      description: 'Placeholder......'
    },
    { 
      src: syngas, 
      title: 'Syngas', 
      isFirstMarket: true,
      marketSize: '$59B',
      futureMarketSize: '$105B by 2030',
      description: 'Placeholder.....'
    },
    { 
      src: benzene, 
      title: 'Benzene', 
      isFirstMarket: false,
      marketSize: '$40B',
      futureMarketSize: '$71B by 2030',
      description: 'Placeholder.....'
    }
  ];

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    if (carouselRef.current) {
      const style = window.getComputedStyle(carouselRef.current);
      const matrix = new DOMMatrix(style.transform);
      setCurrentPosition(matrix.m41);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${currentPosition + deltaX}px)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    if (carouselRef.current) {
      e.preventDefault();
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <>
      <style>{keyframes}</style>
      <style>{scrollbarStyles}</style>
      <style>{additionalStyles}</style>
      <PageHero 
        backgroundVideoUrl={marketVideo}
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
      />
      <div style={sectionStyle}>
        <p style={highlightTextStyle}>
          Alchemity Serves Major Chemical Markets With A Single Reactor Platform Design
        </p>
        
        <div style={cardsContainerStyle}>
          {/* Market Cards */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>$1,200B</h3>
            <p style={cardTextStyle}>Total addressable market</p>
            <p style={cardTextStyle}>Can be served with TRL 8/9 System</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>$120B</h3>
            <p style={cardTextStyle}>Serviceable available market</p>
            <p style={cardTextStyle}>Can be served with TRL 6/7 System</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>$18B</h3>
            <p style={cardTextStyle}>Serviceable obtainable market</p>
            <p style={cardTextStyle}>Served with First Modular Skids, 1-5 tons/day</p>
          </div>
        </div>

        <h2 style={marketBreakdownTitleStyle}>Market Breakdown</h2>
        <div 
          ref={carouselRef}
          className="carousel-container"
          style={carouselContainerStyle}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <h3 style={{
            color: '#25abe0',
            fontSize: '36px',
            fontWeight: '600',
            margin: '0 0 1rem -24rem',
            textAlign: 'center'
          }}>First Markets</h3>
          <div style={carouselTrackStyle}>
            <div style={firstMarketsContainerStyle}>
              <div style={firstMarketsContentStyle}>
                {images.slice(0, 3).map((item, index) => (
                  <div 
                    key={index} 
                    className="market-image-container"
                    style={{
                      ...imageContainerStyle,
                      userSelect: 'none',
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="market-image"
                      style={carouselImageStyle}
                    />
                    <p style={imageTitleStyle}>{item.title}</p>
                    <div className="market-hover-info" style={marketHoverInfoStyle}>
                      <p style={marketHoverTextStyle}>{item.description}</p>
                      <p style={marketHoverSizeStyle}>Current Market Size: {item.marketSize}</p>
                      <p style={marketHoverSizeStyle}>Projected: {item.futureMarketSize}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {images.slice(3).map((item, index) => (
              <div 
                key={index + 3} 
                className="market-image-container"
                style={{
                  ...imageContainerStyle,
                  userSelect: 'none',
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="market-image"
                  style={carouselImageStyle}
                />
                <p style={imageTitleStyle}>{item.title}</p>
                <div className="market-hover-info" style={marketHoverInfoStyle}>
                  <p style={marketHoverTextStyle}>{item.description}</p>
                  <p style={marketHoverSizeStyle}>Current Market Size: {item.marketSize}</p>
                  <p style={marketHoverSizeStyle}>Projected: {item.futureMarketSize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Markets;