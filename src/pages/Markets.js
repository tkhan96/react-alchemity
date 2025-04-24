import React from 'react';
import PageHero from '../components/PageHero'; // Import PageHero

// Import the background image
import marketsBg from '../components/images/markets-bg.jpg'; // Adjust the path as needed

function Markets() {
  return (
    <>
      {/* Pass the background image to the PageHero component */}
      <PageHero title={'Placeholder'} backgroundImageUrl={marketsBg} />
      <div style={{ padding: 'var(--section-padding)', minHeight: '60vh', backgroundColor: '#e8f5e9'}}>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Explore the diverse markets we serve with our innovative solutions, tailored to meet the unique needs of each industry.
        </p>
        {/* Placeholder for market details */}
      </div>
    </>
  );
}

export default Markets;