import React from 'react';
import styles from './PageHero.module.css';

function PageHero({ title, backgroundImageUrl, backgroundVideoUrl }) {
  const sectionClass = (title === 'About Us' || title === 'Markets' || title === 'Technology' || title === 'Careers' || title === 'Contact Us' || title === 'Products') ? styles.aboutHeroSection : styles.heroSection;
  const pageType = title === 'Markets' ? 'markets' : 
                  title === 'Technology' ? 'technology' : 
                  title === 'Products' ? 'products' : '';

  return (
    <section className={sectionClass} data-page={pageType}>
      {backgroundVideoUrl ? (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className={styles.backgroundVideo}
        >
          <source src={backgroundVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
      <div 
        className={styles.backgroundImage}
        style={backgroundImageUrl ? {
          backgroundImage: `url(${backgroundImageUrl})`
        } : {}}
      />
      )}
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
}

export default PageHero; 