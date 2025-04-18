import React from 'react';
import PageHero from '../components/PageHero'; // Import PageHero

// Import the technology image
import technologyImage from '../components/images/technology.png'; // Adjust the path as needed
import technologyBg from '../components/images/technology-hero.png'; // Adjust the path as needed
// Inline styles consistent with the Home page
const sectionStyle = {
  padding: 'var(--section-padding)',
  margin: '0 auto',
  backgroundColor: '#e8f5e9',
  textAlign: 'center',
};

const gridStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '2rem',
  marginTop: '2rem',
};

const cardStyle = {
  flex: '1',
  minWidth: '300px',
  maxWidth: '400px',
  padding: '1.5rem',
  backgroundColor: 'var(--background-light)',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
};

const fullWidthImageStyle = {
  width: '100%', // Make the image span the full width of the page
  height: 'auto',
  display: 'block',
  marginTop: '2rem',
};

const imageSectionStyle = {
  backgroundColor: '#e8f5e9', // Light green background
  padding: '2rem 0', // Add padding around the image
};

function Technology() {
  return (
    <>
      <PageHero backgroundImageUrl={technologyBg} /> {/* Add PageHero */}
      <div style={sectionStyle}>
        {/* Heather Technology Section */}
        <section>
          <h2>Heather Technology</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
            Our modular, scalable reactor system reduces installation cost by 60% and enables carbon-negative chemical production at scale. Minimal on-site integration means faster deployment and lower project risk.
          </p>
        </section>

        {/* Technology Image Section */}
        <section style={imageSectionStyle}>
          <img
            src={technologyImage}
            alt="Technology Overview"
            style={fullWidthImageStyle}
          />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '1rem' }}>
            Note: The image above showcases the core technology powering Alchemity's solutions.
          </p>
        </section>

        {/* Bullet Points as Cards */}
        <section style={{ marginTop: '4rem' }}>
          <h2>Key Features</h2>
          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3>Fast On-Site Assembly</h3>
              <p>
                Our modular design allows for rapid on-site assembly, reducing installation time and project risk.
              </p>
            </div>
            <div style={cardStyle}>
              <h3>World's Most Powerful PEM Electrolysis Stack</h3>
              <p>
                Harness the power of the most advanced PEM electrolysis stack for efficient hydrogen production.
              </p>
            </div>
            <div style={cardStyle}>
              <h3>Low-Cost Hydrogen Production</h3>
              <p>
                Fully integrated systems ensure cost-effective hydrogen production at scale.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Technology;