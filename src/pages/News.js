import React from 'react';
import PageHero from '../components/PageHero';
import productVideo from '../components/images/product.mov';

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

function News() {
  return (
    <>
      <PageHero 
        backgroundVideoUrl={productVideo}
        title="News"
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
        <h2 style={titleStyle}>Latest Updates</h2>
        {/* Content will be added here */}
      </div>
    </>
  );
}

export default News; 