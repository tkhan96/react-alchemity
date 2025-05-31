import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHero from '../components/PageHero';
import Modal from '../components/Modal';
import styled from 'styled-components';
import styles from './Markets.module.css';

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
  justifyContent: 'center',
  gap: '3rem',
  marginTop: '2rem',
  padding: '0 -2rem',
};

const MarketCard = styled.div`
  flex: 0 1 350px;
  padding: 1rem 1rem 1rem 1rem;
  background-color: #141414;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(37, 171, 224, 0.6);
  }
`;

const imageStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  marginBottom: '1rem',
};

const cardTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#25abe0',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginBottom: '0.5rem',
};

const cardTextStyle = {
  color: '#ffffff',
  fontSize: '1.4rem',
  lineHeight: '1.4',
  textAlign: 'center',
  fontWeight: '400',
  marginBottom: '0',
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
  padding: '0 1rem 0 5rem',
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
  marginTop: '-0.4rem',
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

const firstMarketsTitleCenteredStyle = {
  color: '#25abe0',
  fontSize: '36px',
  fontWeight: '600',
  textAlign: 'center',
  margin: '0 0 1rem 0',
  width: '100%'
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
  fontSize: '36px',
  color: '#25abe0',
  marginBottom: '3rem',
  marginTop: '3rem',
  textAlign: 'center',
  fontWeight: '600',
};

const instructionTextStyle = {
  fontSize: '20px',
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
  fontSize: '14px',
  lineHeight: '1.2',
  marginBottom: '0.35rem',
};

const marketHoverSizeStyle = {
  color: '#25abe0',
  fontSize: '14px',
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

const heroCarouselStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '80%',
  height: '120%',
  overflow: 'hidden',
  clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 20% 100%)',
  zIndex: 0,
  marginTop: '-29px',
  display: 'flex',
  alignItems: 'center'
};

const heroCarouselTrackStyle = {
  display: 'flex',
  gap: '0',
  animation: 'slide 40s linear infinite',
  alignItems: 'center',
  margin: 0,
  padding: '0 2rem',
  width: 'max-content',
  height: '100%'
};

const heroImageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '0',
  marginTop: '40px',
  paddingBottom: '40px'
};

const heroCarouselImageStyle = {
  width: '300px',
  height: '300px',
  objectFit: 'contain',
  flexShrink: 0,
  marginBottom: '0.5rem',
  opacity: 1
};

const heroImageTitleStyle = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '0',
  whiteSpace: 'nowrap'
};

const heroKeyframes = `
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Update the Second Markets title style to match First Markets style
const secondMarketsTitleStyle = {
  color: '#000000',
  fontSize: '36px',
  fontWeight: '600',
  textAlign: 'center',
  margin: '0 0 1rem 0',
  width: '100%'
};

// Add a style to adjust the gap between market sections
const marketSectionsStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem' // Reduced gap between the sections (was 3rem by default)
};

function Markets() {
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { 
      src: saf, 
      title: 'SAF', 
      isFirstMarket: true,
      marketSize: '$1.1B',
      futureMarketSize: '$62B by 2030',
      description: 'Conventional Gas-to-Liquids (GTL) and Fischer-Tropsch technologies, can produce fuels such as SAF at scale but require high capital and produce significant CO₂ without expensive capture systems. Our Platform Reactor System offers beyond zero-emission & cost-effective alternative suitable for co-located greenfield sites (SAF at the point of use), or integration with existing infrastructure - ideal for brownfield applications.'
    },
    { 
      src: hydrogen, 
      title: 'Hydrogen', 
      isFirstMarket: true,
      marketSize: '$243B',
      futureMarketSize: '$411B by 2030',
      description: 'Current dominant hydrogen production method, steam methane reforming (SMR), emits ~9.4 kg CO₂/kg H₂, while grid-powered electrolysis can reach up to 22 kg CO₂/kg H₂. With energy use driving over 70% of lifetime costs, scaling hydrogen without raising emissions is difficult until the grid is decarbonized. Our Platform Reactor System offers a cleaner alternative—producing hydrogen from methane via a non-oxidative process while converting carbon into valuable chemicals, strengthening U.S. energy and economic security.'
    },
    { 
      src: syngas, 
      title: 'Syngas', 
      isFirstMarket: true,
      marketSize: '$59B',
      futureMarketSize: '$105B by 2030',
      description: 'Synthetic gas (syngas)—a mixture of hydrogen and carbon monoxide—is a critical feedstock for producing methanol (used in formaldehyde, acetic acid, and plastics), ammonia (for fertilizers), Fischer-Tropsch liquids (waxes, lubricants, fuels), and higher alcohols and acids in solvents and polymers. Traditional syngas methods like steam methane reforming and coal gasification are highly carbon-intensive, emitting 9–12 kg of CO₂ per kg of hydrogen. Alchemity’s Platform Reactor System offers a carbon-negative alternative, producing syngas in a single, non-oxidative step using waste biogas from biomass—delivering a cleaner, more sustainable solution.'
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
      src: benzene, 
      title: 'Benzene', 
      isFirstMarket: false,
      marketSize: '$40B',
      futureMarketSize: '$71B by 2030',
      description: 'Placeholder.....'
    }
  ];

  const heroImages = [
    { 
      src: benzene, 
      title: 'Benzene'
    },
    { 
      src: saf, 
      title: 'SAF'
    },
    { 
      src: hydrogen, 
      title: 'Hydrogen'
    },
    { 
      src: syngas, 
      title: 'Syngas'
    },
    { 
      src: biogas, 
      title: 'RNG, Biogas'
    },
    { 
      src: ethylene, 
      title: 'Ethylene'
    },
    { 
      src: ethane, 
      title: 'Ethane'
    }
  ];

  const handleWheel = (e) => {
    if (carouselRef.current) {
      e.preventDefault();
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className={styles.responsiveContainer}>
      <style>{heroKeyframes}</style>
      <style>{keyframes}</style>
      <style>{scrollbarStyles}</style>
      <style>{additionalStyles}</style>
      <div style={{ position: 'relative' }}>
        <PageHero 
          title="Markets"
          style={{ marginTop: '-300px' }}
        />
        <div style={heroCarouselStyle} className={styles.heroCarouselContainer}>
          <div style={heroCarouselTrackStyle}>
            {heroImages.map((item, index) => (
              <div key={index} style={heroImageContainerStyle}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={heroCarouselImageStyle}
                  className={styles.heroImage}
                />
                <p style={heroImageTitleStyle} className={styles.heroImageTitle}>{item.title}</p>
              </div>
            ))}
            {heroImages.map((item, index) => (
              <div key={`duplicate-${index}`} style={heroImageContainerStyle}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={heroCarouselImageStyle}
                  className={styles.heroImage}
                />
                <p style={heroImageTitleStyle} className={styles.heroImageTitle}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={sectionStyle} className={styles.sectionContainer}>
        <p style={highlightTextStyle} className={styles.highlightText}>
          Alchemity Enables Chemical & Fuel Markets With A Single Platform Design
        </p>
        
        <h2 style={marketBreakdownTitleStyle} className={styles.marketBreakdownTitle}></h2>
        <p style={{
          fontSize: '1.6rem',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '1rem',
          marginTop: '-2rem',
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }} className={styles.marketDescription}>
          We strategically target first markets suitable for a turnkey Modular Platform System integration prior to scaled chemical production facilities.
        </p>
        <p style={{
          fontSize: '1.5rem',
          color: '#25abe0',
          textAlign: 'center',
          marginBottom: '2rem',
          fontWeight: 'bold'
        }} className={styles.marketInstructions}>
          Click over each market card to learn how Alchemity contributes.
        </p>
        <div 
          ref={carouselRef}
          className={`carousel-container ${styles.carouselContainer}`}
          style={carouselContainerStyle} 
          onWheel={handleWheel}
        >
          <div style={carouselTrackStyle}>
            <div style={marketSectionsStyle} className={styles.marketSectionsContainer}>
              <div className={styles.marketSection}>
                <h3 style={firstMarketsTitleCenteredStyle} className={styles.marketTitle}>First Markets</h3>
                <div style={firstMarketsContainerStyle} className={styles.firstMarketsContainer}>
                  <div style={firstMarketsContentStyle} className={styles.firstMarketsContentStyle}>
                    {images.slice(0, 3).map((item, index) => (
                      <motion.div 
                        key={index} 
                        className={`market-image-container ${styles.firstMarketBoxStyle}`}
                        style={{
                          ...imageContainerStyle,
                          userSelect: 'none',
                        }}
                        onClick={() => setSelectedMarket(item)}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className={`market-image ${styles.carouselImage}`}
                          style={carouselImageStyle}
                        />
                        <p style={imageTitleStyle} className={styles.imageTitle}>{item.title}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={styles.marketSection}>
                <h3 style={secondMarketsTitleStyle} className={styles.marketTitle}>Second Markets</h3>
                <div className={styles.secondMarketsContainer}>
                  <div className={styles.secondMarketsGrid}>
                    {images.slice(3).map((item, index) => (
                      <motion.div 
                        key={index + 3} 
                        className="market-image-container"
                        style={{
                          ...imageContainerStyle,
                          userSelect: 'none',
                        }}
                        onClick={() => setSelectedMarket(item)}
                        custom={index + 3}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className={`market-image ${styles.carouselImage}`}
                          style={carouselImageStyle}
                        />
                        <p style={imageTitleStyle} className={styles.imageTitle}>{item.title}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={selectedMarket !== null}
        onClose={() => setSelectedMarket(null)}
        title={selectedMarket?.title}
        size="xlarge"
        showCloseButton={true}
      >
        <div style={{
          color: '#ffffff',
          fontSize: '18px',
          lineHeight: '1.8',
          marginBottom: '0',
          paddingLeft: '0',
          listStyle: 'none',
        }}>
          <div style={{ marginBottom: '1rem' }}>{selectedMarket?.description}</div>
          <div style={{ color: '#25abe0', marginTop: '1rem', fontWeight: '600' }}>
            Current Market Size: {selectedMarket?.marketSize}
          </div>
          <div style={{ color: '#25abe0', marginTop: '0.5rem', fontWeight: '600' }}>
            Projected: {selectedMarket?.futureMarketSize}
          </div>
          <div style={{ color: '#cccccc', marginTop: '1rem', fontStyle: 'italic', fontSize: '1.2rem' }}>
            Source: Market research and industry analysis
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Markets;