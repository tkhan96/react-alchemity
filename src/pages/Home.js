import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Hero from '../components/Hero';
import ProductFocus from '../components/ProductFocus';
import Manufacturing from '../components/Manufacturing';
import MarketApplications from '../components/MarketApplications';
import Sponsors from '../components/Sponsors';

// Import the plant image
import plantImage from '../components/images/plant4.png'; // Adjust the path as needed

// Import icons (replace with actual icons or images)
import missionIcon from '../components/images/mission-icon.png'; // Replace with your mission icon
import visionIcon from '../components/images/vision-icon.png'; // Replace with your vision icon

function Home() {
  // State to track whether the Mission and Vision icons are clicked
  const [isMissionClicked, setIsMissionClicked] = useState(false);
  const [isVisionClicked, setIsVisionClicked] = useState(false);

  const cardContainerStyle = {
    perspective: '1000px', // Add perspective for 3D effect
    width: '700px',
    height: '400px',
  };

  const cardStyle = (isFlipped) => ({
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  });

  const cardFaceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '20px',
  };

  const frontFaceStyle = {
    ...cardFaceStyle,
  };

  const backFaceStyle = {
    ...cardFaceStyle,
    transform: 'rotateY(180deg)',
    backgroundColor: 'var(--background-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '1rem',
    border: '1px solid var(--border-color)',
  };

  const ctaSectionStyle = {
    backgroundColor: 'var(--primary-color)', // Use your primary color
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
  };

  const ctaButtonStyle = {
    backgroundColor: 'white',
    color: 'var(--primary-color)',
    padding: '0.75rem 1.5rem',
    fontSize: '150px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <>
      <Hero />

      {/* Mission and Vision Section */}
      <section style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--background-light)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {/* Mission */}
          <div style={cardContainerStyle} onClick={() => setIsMissionClicked(!isMissionClicked)}>
            <div style={cardStyle(isMissionClicked)}>
              {/* Front Face */}
              <div style={frontFaceStyle}>
                <img src={missionIcon} alt="Mission Icon" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
              </div>
              {/* Back Face */}
              <div style={backFaceStyle}>
                <div>
                  <h1>
                    To empower businesses through innovative technology solutions, driving growth and efficiency.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div style={cardContainerStyle} onClick={() => setIsVisionClicked(!isVisionClicked)}>
            <div style={cardStyle(isVisionClicked)}>
              {/* Front Face */}
              <div style={frontFaceStyle}>
                <img src={visionIcon} alt="Vision Icon" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
              </div>
              {/* Back Face */}
              <div style={backFaceStyle}>
                <div>
                  <h1>
                    To be the leading catalyst for digital transformation, creating a future where technology seamlessly
                    integrates with business potential.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Design and Reactor Image Section */}
      <section style={{ padding: '0' }}>
        <img src={plantImage} alt="3D Design of the Plant" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </section>

      <ProductFocus />

      <MarketApplications />


      <Sponsors />
      
    </>
  );
}

export default Home;