import React from 'react';
import styles from './PageHero.module.css';

function PageHero({ title, backgroundImageUrl }) {
  // Use aboutHeroSection class for About, Markets, and Technology pages
  const sectionClass = (title === 'About Us' || title === 'Markets' || title === 'Technology') ? styles.aboutHeroSection : styles.heroSection;
  const pageType = title === 'Markets' ? 'markets' : title === 'Technology' ? 'technology' : '';

  return (
    <section className={sectionClass} data-page={pageType}>
      <div 
        className={styles.backgroundImage}
        style={backgroundImageUrl ? {
          backgroundImage: `url(${backgroundImageUrl})`
        } : {}}
      />
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
}

export default PageHero; 