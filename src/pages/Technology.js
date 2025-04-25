import React from 'react';
import PageHero from '../components/PageHero';
import Modal from '../components/Modal';
import reactor from '../components/images/Reactor.png';
import rd from '../components/images/rd.png';
import validated from '../components/images/ExtEval.png';
import scalable from '../components/images/scalable.png';
import placeholder from '../components/images/placeholder.webp';
import facility from '../components/images/facility.png';

const sectionStyle = {
  padding: 'var(--section-padding)',
  margin: '0 auto',
  backgroundColor: '#000000',
  textAlign: 'left',
};

const titleStyle = {
  fontSize: '40px',
  color: '#45a10f',
  marginBottom: '3rem',
  textAlign: 'center',
  fontWeight: '200',
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
  fontSize: '18px',
  fontWeight: '600',
  color: '#45a10f',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  textAlign: 'center',
};

const cardTextStyle = {
  color: '#ffffff',
  fontSize: '18px',
  lineHeight: '1.5',
  textAlign: 'left',
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

const facilityImageStyle = {
  width: '100%',
  height: 'auto',
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
        titleStyle={{
          color: '#ffffff',
          fontSize: '64px',
          fontWeight: '400',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
        imageStyle={{
          width: '80%',
          height: 'auto',
          margin: '0 auto',
          display: 'block',
        }}
      />
      <div style={sectionStyle}>
        <h1 style={titleStyle}>Underlying Magic</h1>
        
        <div style={cardsContainerStyle}>
          {/* R&D Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>35 YEARS OF R&D AND $20M IN FUNDING</h3>
            <img src={rd} alt="R&D" style={imageStyle} />
            <p style={cardTextStyle}>
              Alchemity holds exclusive license to 32 patents (additional 7 pending) on ion conducting ceramics and non-oxidative catalyst.
            </p>
          </div>

          {/* Validated Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>EXTENSIVELY VALIDATED</h3>
            <img src={validated} alt="Extensively Validated" style={imageStyle} />
            <p style={cardTextStyle}>
              Technology validated in labs, via industrial, federal/state and investment committes, and publications.
            </p>
          </div>

          {/* Scalable Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>SCALABLE</h3>
            <img src={scalable} alt="Scalable" style={imageStyle} />
            <p style={cardTextStyle}>
              Technology successfully transferred to Alchemity, TRL 4 system demonstrated. TRL 5 system design completed and TRL6/7 design ongoing.
            </p>
          </div>
        </div>

        <h1 style={{...titleStyle, marginTop: '4rem'}}>FROM NATURAL GAS TO CHEMICALS</h1>
        <img src={facility} alt="Facility" style={facilityImageStyle} />
        <h1 style={{...titleStyle, marginTop: '4rem'}}>MULTIFUNCTIONAL <span style={{ fontStyle: 'italic' }}>GTChem</span> PLATFORM</h1>
        <img src={placeholder} alt="Placeholder" style={reactorImageStyle} />
      </div>
    </>
  );
}

export default Technology;