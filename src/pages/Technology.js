import React from 'react';
import PageHero from '../components/PageHero'; // Import PageHero

// Import the technology image
import technologyImage from '../components/images/technology.png'; // Adjust the path as needed
import technologyBg from '../components/images/technology-hero.png'; // Adjust the path as needed
// Inline styles consistent with the Home page
const sectionStyle = {
  padding: 'var(--section-padding)',
  margin: '0 auto',
  backgroundColor: '#e8f5e9', // Light green background
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
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            padding: '2rem 1rem',
          }}
        >
          {/* Text Content on the Left */}
          <div
            style={{
              flex: '1',
              minWidth: '500px',
              maxWidth: '600px',
              textAlign: 'left',
              paddingLeft: '10rem', // Add padding to move text further from the edge
            }}
          >
            <h1 style={{ fontSize: '100px', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Heather™
            </h1>
          </div>

          {/* Image on the Right */}
          <div>
            <img
              src={technologyImage}
              alt="Technology Overview"
              style={{
                width: '1000px', // Adjust the width (e.g., 80% of the container)
                height: 'auto', // Maintain aspect ratio
                display: 'block', // Ensure the image is treated as a block element
                backgroundColor: "#d0edd3"
              }
              } // Use the full-width image style
            />
          </div>
        </section>

        {/* Bullet Points as Cards */}
        <section style={{ marginTop: '4rem' }}>
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