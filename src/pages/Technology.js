import React from 'react';
import PageHero from '../components/PageHero';
import Modal from '../components/Modal';
import reactor from '../components/images/Reactor.png';
import rd from '../components/images/rd.png';
import validated from '../components/images/ExtEval.png';
import scalable from '../components/images/scalable.png';
import placeholder from '../components/images/placeholder.webp';
import animationTech from '../components/images/animation tech.MOV';

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
  width: '100%',
  height: 'auto',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'block',
};

const videoStyle = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'block',
};

function Technology() {
  return (
    <>
      <PageHero 
        backgroundImageUrl={reactor}
        title="Technology"
      />
      <div style={sectionStyle}>
        <div style={cardsContainerStyle}>
          {/* R&D Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>35 Years of R&D<br />$20M in Funding</h3>
            <img src={rd} alt="R&D" style={imageStyle} />
            <p style={cardTextStyle}>
              Alchemity holds exclusive license to 32 patents (additional 7 pending) on ion conducting ceramics and non-oxidative catalyst.
            </p>
          </div>

          {/* Validated Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Extensively Validated</h3>
            <img src={validated} alt="Extensively Validated" style={{...imageStyle, marginTop: '2.2rem'}} />
            <p style={cardTextStyle}>
              Technology validated in labs, via industrial, federal/state and investment committes, and publications.
            </p>
          </div>

          {/* Scalable Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Scalable</h3>
            <img src={scalable} alt="Scalable" style={{...imageStyle, marginTop: '2.2rem'}} />
            <p style={cardTextStyle}>
              Technology successfully transferred to Alchemity, TRL 4 system demonstrated. TRL 5 system design completed and TRL6/7 design ongoing.
            </p>
          </div>
        </div>

        <h1 style={{...titleStyle, marginTop: '4rem'}}>From Natural Gas To Chemicals</h1>
        <video 
          src={animationTech} 
          style={videoStyle} 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <h1 style={{...titleStyle, marginTop: '4rem'}}>Multifunctional <span style={{ fontStyle: 'italic' }}>GTChem</span> Platform</h1>
        <div style={{ position: 'relative' }}>
          <img src={placeholder} alt="Placeholder" style={reactorImageStyle} />
          <p style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#25abe0',
            fontSize: '32px',
            fontWeight: '600',
            textAlign: 'center',
            width: '100%',
            padding: '0 20px'
          }}>
            Placeholder for a close up 3d image of the reactor
          </p>
        </div>
      </div>
    </>
  );
}

export default Technology;

