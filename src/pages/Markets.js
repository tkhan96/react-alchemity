import React, { useState, useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';
import Modal from '../components/Modal';

import marketVideo from '../components/images/market.mp4';

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
  fontSize: '36px',
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
  fontSize: '48px',
  fontWeight: '600',
  color: '#25abe0',
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
  fontSize: '26px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '0.5rem',
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
  padding: '0',
  cursor: 'pointer'
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
  gap: '1.5rem',
  border: '2px solid #25abe0',
  borderRadius: '16px',
  padding: '0',
  margin: '0',
  backgroundColor: 'transparent',
  zIndex: 1,
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
  fontSize: '40px',
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

const additionalStyles = `
  .market-image-container {
    transition: all 0.3s ease;
  }
  .market-image-container:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(37, 171, 224, 0.4);
    background: rgba(37, 171, 224, 0.05);
    border-radius: 8px;
  }
`;

function Markets() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    { 
      src: waste, 
      title: 'Waste Gas', 
      isFirstMarket: true,
      marketSize: '$120B',
      futureMarketSize: '$180B by 2030',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    { 
      src: saf, 
      title: 'SAF', 
      isFirstMarket: true,
      marketSize: '$150B',
      futureMarketSize: '$250B by 2030',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    { 
      src: hydrogen, 
      title: 'Hydrogen', 
      isFirstMarket: true,
      marketSize: '$200B',
      futureMarketSize: '$300B by 2030',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    { 
      src: biogas, 
      title: 'RNG, Biogas', 
      isFirstMarket: false,
      marketSize: '$80B',
      futureMarketSize: '$120B by 2030',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    },
    { 
      src: ethylene, 
      title: 'Ethylene', 
      isFirstMarket: false,
      marketSize: '$100B',
      futureMarketSize: '$150B by 2030',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
    },
    { 
      src: ethane, 
      title: 'Ethane', 
      isFirstMarket: false,
      marketSize: '$90B',
      futureMarketSize: '$130B by 2030',
      description: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.'
    },
    { 
      src: syngas, 
      title: 'Syngas', 
      isFirstMarket: false,
      marketSize: '$70B',
      futureMarketSize: '$100B by 2030',
      description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.'
    },
    { 
      src: benzene, 
      title: 'Benzene', 
      isFirstMarket: false,
      marketSize: '$60B',
      futureMarketSize: '$90B by 2030',
      description: 'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
    }
  ];

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      const style = window.getComputedStyle(carouselRef.current);
      const matrix = new DOMMatrix(style.transform);
      setCurrentPosition(matrix.m41);
    }
    setIsHovered(true);
  };

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

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const deltaX = Math.abs(e.clientX - startX);
    if (deltaX < 5) {
      const clickedElement = e.target.closest('[data-market]');
      if (clickedElement) {
        const marketIndex = parseInt(clickedElement.dataset.market);
        handleMarketClick(images[marketIndex % images.length]);
      }
    }
  };

  const handleMarketClick = (market) => {
    setSelectedMarket(market);
    setShowModal(true);
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
          Alchemity Serves Major Chemical Markets With A Single Platform Reactor Design
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
          </div>

          {/* Market 3 Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>$18B</h3>
            <p style={cardTextStyle}>Serviceable obtainable market</p>
            <p style={cardTextStyle}>Modular skids, 1-5 tons/day</p>
          </div>
        </div>

        <h2 style={marketBreakdownTitleStyle}>Market Breakdown</h2>
        <div 
          ref={carouselRef}
          className="carousel-container"
          style={carouselContainerStyle}
          onWheel={handleWheel}
        >
          <div style={carouselTrackStyle}>
            <div style={firstMarketsContainerStyle}>
              {images.slice(0, 3).map((item, index) => (
                <div 
                  key={index} 
                  data-market={index}
                  style={{
                    ...imageContainerStyle,
                    userSelect: 'none',
                  }}
                  onClick={() => handleMarketClick(item)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="market-image"
                    style={carouselImageStyle}
                  />
                  <p style={imageTitleStyle}>{item.title}</p>
                </div>
              ))}
            </div>
            {images.slice(3).map((item, index) => (
              <div 
                key={index + 3} 
                data-market={index + 3}
                style={{
                  ...imageContainerStyle,
                  userSelect: 'none',
                }}
                onClick={() => handleMarketClick(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="market-image"
                  style={carouselImageStyle}
                />
                <p style={imageTitleStyle}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={keySectionStyle}>
          <div style={keyTextStyle}>
            <span style={{ color: '#25abe0', fontWeight: '600', fontSize: '24px' }}>First Markets</span>
          </div>
        </div>

        {selectedMarket && (
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            title={`${selectedMarket.title} Market`}
          >
            <p>{selectedMarket.description}</p>
            <p style={{ marginTop: '1rem' }}>Current Market Size: {selectedMarket.marketSize}</p>
            <p>Projected Market Size by 2030: {selectedMarket.futureMarketSize}</p>
          </Modal>
        )}
      </div>
    </>
  );
}

export default Markets;