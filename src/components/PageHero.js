import React from 'react';
import styles from './PageHero.module.css';

function PageHero({ title, backgroundImageUrl }) {
  // Apply background image style conditionally
  const heroStyles = {
    backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
  };

  return (
    <section className={styles.heroSection} style={heroStyles}>
      <div className={styles.overlay}></div> {/* Optional overlay for text readability */}
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
}

export default PageHero; 