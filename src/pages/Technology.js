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
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
  marginTop: '0',
  padding: '0 2rem',
};

const cardStyle = {
  flex: 1,
  padding: '2rem 2rem 1rem',
  backgroundColor: 'transparent',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  marginBottom: '1rem',
  borderRadius: '8px',
};

const cardTitleStyle = {
  fontSize: '28px',
  fontWeight: '600',
  color: '#25abe0',
  marginBottom: '1rem',
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

const reactorImageStyle = {
  width: '50%',
  height: 'auto',
  objectFit: 'contain',
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
  marginBottom: '2rem',
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
  gap: '3rem',
  alignItems: 'flex-start',
  marginBottom: '2rem',
};

const contentStyle = {
  flex: 1,
  marginTop: '5rem',
};

const graphStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  marginBottom: '1.5rem',
  minHeight: '200px',
  maxHeight: '300px',
};

const modalContentStyle = {
  display: 'flex',
  gap: '3rem',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
};

const modalColumnStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minWidth: '600px',
};

const modalTextStyle = {
  color: '#ffffff',
  fontSize: '18px',
  lineHeight: '1.8',
  marginTop: '1.5rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

const modalSubtitleStyle = {
  color: '#25abe0',
  fontSize: '24px',
  fontWeight: '600',
  marginBottom: '1rem',
  textAlign: 'center',
};

const modalTextStyle2 = {
  ...modalTextStyle,
  marginTop: '-0.5rem',
};

function Technology() {
  const [showModal, setShowModal] = useState(false);
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

  return (
    <>
      <PageHero 
        backgroundVideoUrl={herotech}
        title="Technology"
        videoRef={heroVideoRef}
      />
      <div style={sectionStyle}>
        <div style={cardsContainerStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>35 Years of R&D<br />$20M in Funding</h3>
            <img src={rd} alt="R&D" style={imageStyle} />
            <p style={cardTextStyle}>
              Alchemity holds exclusive license to 32 patents (additional 7 pending) on ion conducting ceramics and non-oxidative catalyst.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Extensively Validated</h3>
            <img src={validated} alt="Extensively Validated" style={{...imageStyle, marginTop: '2.2rem'}} />
            <p style={cardTextStyle}>
              Technology validated in labs, via industrial, federal/state and investment committes, and publications.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Scalable</h3>
            <img 
              src={scalable} 
              alt="Scalable" 
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'contain',
                marginBottom: '1rem',
                borderRadius: '8px',
                marginTop: '2.2rem'
              }} 
            />
            <p style={cardTextStyle}>
              Technology successfully transferred to Alchemity, TRL 4 system demonstrated. TRL 5 system design completed and TRL6/7 design ongoing.
            </p>
          </div>
        </div>

        <h1 style={{...titleStyle, marginTop: '2rem'}}>From Natural Gas To Chemicals</h1>
        <video 
          ref={animationVideoRef}
          src={animationTech} 
          style={videoStyle} 
          muted 
          playsInline
        />
        <h1 style={{...titleStyle, marginTop: '4rem'}}>Multifunctional <span style={{ fontStyle: 'italic' }}>GTChem</span> Platform</h1>
        
        <div style={platformContainerStyle}>
          <video 
            ref={reactorVideoRef}
            src={reactorAnim} 
            style={reactorImageStyle} 
            muted 
            playsInline
          />
          <div style={contentStyle}>
            <div style={bulletPointsStyle}>
              <div style={bulletPointStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div style={bulletPointStyle}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              <div style={bulletPointStyle}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
              <div style={bulletPointStyle}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <button 
              style={learnMoreButtonStyle}
              onClick={handleOpenModal}
            >
              Learn More
            </button>
          </div>
        </div>

        <Modal
          show={showModal}
          onClose={handleCloseModal}
          title="GTChem Platform Details"
          size="large"
          showCloseButton={true}
        >
          <div style={modalContentStyle}>
            <div style={modalColumnStyle}>
              <img src={graph1} alt="Graph 1" style={{...graphStyle, marginTop: '1rem'}} />
              <h3 style={{...modalSubtitleStyle, marginBottom: '0.25rem', marginTop: '3rem'}}>Placeholder Subtitle 1</h3>
              <div style={{...modalTextStyle, marginTop: '0.25rem'}}>
                <div style={bulletPointStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div style={bulletPointStyle}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              </div>
            </div>
            <div style={modalColumnStyle}>
              <img src={graph2} alt="Graph 2" style={{...graphStyle, marginTop: '0.625rem'}} />
              <h3 style={{...modalSubtitleStyle, marginBottom: '0.5rem', marginTop: '0.375rem'}}>Placeholder Subtitle 2</h3>
              <div style={{...modalTextStyle, marginTop: '0.125rem'}}>
                <div style={bulletPointStyle}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                <div style={bulletPointStyle}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Technology;

