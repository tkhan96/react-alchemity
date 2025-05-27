import React, { useState, useRef, useEffect } from 'react';
import PageHero from '../components/PageHero';
import Modal from '../components/Modal';
import reactorAnim from '../components/images/reactoranim.mov';
import rd from '../components/images/rd.png';
import validated from '../components/images/ExtEval.png';
import scalable from '../components/images/scalable.png';
import graph1 from '../components/images/graph1.png';
import graph2 from '../components/images/graph2.png';
import animationTech from '../components/images/techanim.mov';
import herotech from '../components/images/headeranim.mov';
import membrane1 from '../components/images/membrane.png';
import membrane2 from '../components/images/membrane2.png';
import styles from '../components/ProfileCard.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionStyle = {
  padding: 'var(--section-padding)',
  margin: '0 auto',
  backgroundColor: '#000000',
  textAlign: 'left',
};

const titleStyle = {
  fontSize: '40px',
  color: '#25abe0',
  marginBottom: '3rem',
  textAlign: 'center',
  fontWeight: '500',
};

const cardsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  padding: '2rem 0.5rem',
  maxWidth: '1200px',
  margin: '0 auto',
  
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
  },
  
  '@media (min-width: 2560px)': {
    maxWidth: '2000px',
    gap: '3rem',
  }
};

const cardStyle = {
  background: '#000000',
  padding: '1.5rem 1.5rem 1rem 1.5rem',
  borderRadius: '8px',
  color: '#ffffff',
  transition: 'all 0.3s ease',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 0 20px rgba(37, 171, 224, 0.6)',
  }
};

const cardTitleStyle = {
  fontSize: '1.7rem',
  fontWeight: '600',
  color: '#25abe0',
  marginBottom: '1rem',
  textAlign: 'center',
  minHeight: '4.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};

const imageContainerStyle = {
  width: '100%',
  height: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
  backgroundColor: 'transparent',
  overflow: 'hidden',
  position: 'relative'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 0,
  left: 0
};

const rdImageStyle = {
  ...imageStyle,
  objectPosition: 'center 30%',
  objectFit: 'cover',
};

const cardTextStyle = {
  color: '#ffffff',
  fontSize: '1.4rem',
  lineHeight: '1.6',
  textAlign: 'center',
  marginTop: '0',
  fontWeight: '500',
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
};

const videoStyle = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'block',
};

const bulletPointsStyle = {
  color: '#ffffff',
  fontSize: '18px',
  lineHeight: '1.8',
  marginBottom: '0',
  paddingLeft: '0',
  listStyle: 'none',
};

const bulletPointStyle = {
  marginBottom: '1rem',
};

const learnMoreButtonStyle = {
  backgroundColor: '#25abe0',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'background-color 0.3s ease',
};

const platformContainerStyle = {
  display: 'flex',
  gap: '-5rem',
  alignItems: 'center',
  marginBottom: '2rem',
  justifyContent: 'center',
  maxWidth: '1400px',
  margin: '0 auto',
  paddingLeft: '4rem',
};

const membraneContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '0',
};

const contentStyle = {
  flex: 1,
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
};

const graphStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  marginBottom: '1rem',
  minHeight: '150px',
  maxHeight: '250px',
};

const modalContentStyle = {
  display: 'flex',
  gap: '3rem',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '3000px',
  margin: '0 auto',
  padding: '0',
};

const modalColumnStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
};

const modalTextStyle = {
  color: '#ffffff',
  fontSize: '18px',
  lineHeight: '1.6',
  marginTop: '1rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

const modalSubtitleStyle = {
  color: '#25abe0',
  fontSize: '24px',
  fontWeight: '600',
  marginBottom: '0.5rem',
  textAlign: 'center',
};

const modalTextStyle2 = {
  ...modalTextStyle,
  marginTop: '-0.5rem',
};

const descriptionTextStyle = {
  color: '#ffffff',
  fontSize: '1.2rem',
  textAlign: 'center',
  margin: '-2rem auto 1rem auto',
  maxWidth: '800px',
  lineHeight: '1.6',
};

const gridStyle = {
  display: 'grid',
  gap: '0.5rem',
  maxWidth: '1400px',
  margin: '1rem auto',
};

const founderGridStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
};

const advisorGridStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
};

const membraneImageStyle = {
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
  objectFit: 'contain',
  marginBottom: '2rem',
};

const reactorImageStyle = {
  width: '50%',
  height: 'auto',
  objectFit: 'contain',
  margin: '0 auto',
  marginRight: '-2rem',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2rem',
};

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  padding: '1rem 2rem',
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  fontSize: '1.1rem',
  fontWeight: '600',
  textDecoration: 'none',
  borderRadius: '50px',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  border: '2px solid transparent',
  cursor: 'pointer',
  minWidth: '120px',
};

const buttonHoverStyle = {
  backgroundColor: 'var(--secondary-color)',
  boxShadow: '0 15px 25px rgba(0, 0, 0, 0.4)',
  transform: 'translateY(-2px)',
};

// Add animation variants after imports
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

function Technology() {
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const heroVideoRef = useRef(null);
  const animationVideoRef = useRef(null);
  const reactorVideoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play();
          video.addEventListener('timeupdate', () => {
            if (video.currentTime >= video.duration - 0.1) {
              video.pause();
            }
          });
        }
      });
    }, { threshold: 0.5 });

    if (heroVideoRef.current) observer.observe(heroVideoRef.current);
    if (animationVideoRef.current) observer.observe(animationVideoRef.current);
    if (reactorVideoRef.current) observer.observe(reactorVideoRef.current);

    return () => {
      if (heroVideoRef.current) observer.unobserve(heroVideoRef.current);
      if (animationVideoRef.current) observer.unobserve(animationVideoRef.current);
      if (reactorVideoRef.current) observer.unobserve(reactorVideoRef.current);
    };
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenDetailsModal = () => {
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
  };

  return (
    <>
      <PageHero 
        backgroundVideoUrl={herotech}
        title="Technology"
        videoRef={heroVideoRef}
      />
      <div style={sectionStyle}>
        <div style={cardsContainerStyle}>
          {[
            {
              title: "35 Years of R&D\n$20M in Funding",
              image: rd,
              text: "Technology successfully transfered to Alchemity. Reactor membrane (core) production validated. Alchemity holds exclusive license to 32 patents (additional 7 pending) on ion conducting ceramics and non-oxidative catalyst.",
              imageStyle: {
                ...imageStyle,
                objectFit: 'cover',
                objectPosition: 'center 60%'
              }
            },
            {
              title: "Extensively Validated",
              image: validated,
              text: "Technology validated at Alchemity and TRL 4 system demonstrated. Core reactor further validated in research labs, through publications, via industrial, federal, state and investment committes.",
              imageStyle: imageStyle
            },
            {
              title: "Scalable",
              image: scalable,
              text: "TRL 5 system design completed and redy for fabrication. Preliminary TRL 6/7 design conceptualized to build a modular turnkey skid solutions for brownfield and greenfield sites.",
              imageStyle: imageStyle
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              style={cardStyle}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 style={cardTitleStyle}>{card.title}</h3>
              <div style={imageContainerStyle}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={card.imageStyle} 
                />
              </div>
              <p style={cardTextStyle}>{card.text}</p>
            </motion.div>
          ))}
        </div>

        <h1 style={{...titleStyle, marginTop: '2rem'}}>From Natural Gas To Chemicals</h1>
        <video 
          ref={animationVideoRef}
          src={animationTech} 
          style={videoStyle} 
          muted 
          playsInline
        />
        <h1 style={{...titleStyle, marginTop: '4rem'}}>Multifunctional <span style={{ fontStyle: 'italic' }}>Gas to Chemicals</span> Platform</h1>
        <p style={{
          fontSize: '1.6rem',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '1rem',
          marginTop: '-2.5rem'
        }}>
          Placeholder Text
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '2rem',
          alignItems: 'flex-start',
          marginBottom: '2rem',
          marginTop: '-1rem',
          marginLeft: '4rem',
          maxWidth: '1400px'
        }}>
          <video 
            ref={reactorVideoRef}
            src={reactorAnim} 
            style={{
              width: '60%',
              height: 'auto',
              margin: '0',
              display: 'block',
              marginTop: '0'
            }} 
            muted 
            playsInline
          />

          <img 
            src={membrane1} 
            alt="Membrane" 
            style={{
              width: '25%',
              height: 'auto',
              margin: '0',
              display: 'block',
              marginTop: '1rem',
              objectFit: 'contain'
            }} 
          />
        </div>

        <div style={{
          position: 'relative',
          height: '100px',
          marginTop: '-2rem',
          marginLeft: '4rem'
        }}>
          <button 
            className={styles.detailsButton}
            onClick={handleOpenDetailsModal}
            style={{ 
              position: 'absolute',
              left: '23.25%',
              transform: 'translateX(-50%)'
            }}
          >
            View Details
          </button>
          <button 
            className={styles.detailsButton}
            onClick={handleOpenModal}
            style={{ 
              position: 'absolute',
              left: '76%',
              transform: 'translateX(-50%)'
            }}
          >
            Learn More
          </button>
        </div>

        <Modal
          show={showModal}
          onClose={handleCloseModal}
          title="GTChem Platform Details"
          size="xxlarge"
          showCloseButton={true}
        >
          <div style={modalContentStyle}>
            <div style={modalColumnStyle}>
              <img src={graph1} alt="Graph 1" style={{...graphStyle, marginTop: '1rem'}} />
              <h3 style={{...modalSubtitleStyle, marginBottom: '0.25rem', marginTop: '1.95rem'}}>Example of a Stable Reactor Operation</h3>
              <div style={{...modalTextStyle, marginTop: '0.25rem'}}>
                <div style={bulletPointStyle}>Platform reactor was tasked to demonstrate stable conversion of Shell's natural gas (97% CH4, 3% C3H8) with air sweep (space velocity 3200 mL/g∙h).
                </div>
                <div style={bulletPointStyle}>Single pass operation demonstrated stable natural gas conversion of 21% over 375 hours without any coking (carbon deposition on the catalyst). Stable selectivity for ethylene and benzene was demonstrated.</div>
              </div>
            </div>
            <div style={modalColumnStyle}>
              <img src={graph2} alt="Graph 2" style={{...graphStyle, marginTop: '0.625rem'}} />
              <h3 style={{...modalSubtitleStyle, marginBottom: '0.5rem', marginTop: '0.375rem'}}>Wide Product Selectivity</h3>
              <div style={{...modalTextStyle, marginTop: '0.125rem'}}>
                <div style={bulletPointStyle}>Example of a wide product selectivity that can be achieved with the platform technology. Selectivity can be adjusted by change in reactor operating temperature.</div>
                <div style={bulletPointStyle}>Any CO from membrane oxide-ion transport can be minimized to prevent coking via adjustment in air sweep gas flow rate.</div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          show={showDetailsModal}
          onClose={handleCloseDetailsModal}
          title="Platform Details"
          size="xxlarge"
          showCloseButton={true}
        >
          <div style={{...modalContentStyle, flexDirection: 'column'}}>
            <div style={bulletPointsStyle}>
              <div style={bulletPointStyle}>The process is non-oxidative single step conversion of methane from various feedstock (conventional natural gas, renewable natural gas, biogas) to clean chemicals and fuels with zero CO2 emissions. The patented ceramic membrane reactor (made from strontimum cerate) is filled with a non-oxidative catalyst (low-cost iron-silica) and the patented assembly is housed within a reactor vessel. Methane (feed gas) is introduced through a central delivery tube, while the exterior of the reactor is exposed to a circulating sweep gas, air in this case.</div>
              <div style={bulletPointStyle}>Within the catalyst bed, direct non-oxidative methane conversion occurs as hydrogen is extracted from methane. The mixed-conducting ceramic membrane selectively transports hydrogen ions to the sweep side, driven by Le Chatelier's Principle. There, hydrogen reacts with oxygen in the air, producing water and heat, enabling autothermal operation and high overall energy efficiency.</div>
              <div style={bulletPointStyle}>The membrane's ability to conduct both hydrogen and oxygen ions also enables small amounts of oxygen to diffuse inward. These oxygen ions react with carbon from methane, forming trace amounts of CO. This mechanism suppresses carbon deposition (coking) and extends catalyst life and reactor durability.</div>
              <div style={bulletPointStyle}>The primary products on the feed side include C2+ hydrocarbons and unconverted methane (within a single pass), while the sweep side yields water and hydrogen. By adjusting parameters such as temperature, pressure, number of recycles, and sweep gas composition, the system can be tailored to produce specific chemical products, offering flexibility to meet diverse customer needs.</div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Technology;

