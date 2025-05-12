import React from 'react';
import styles from './PageHero.module.css';

function PageHero({ title, backgroundImageUrl, backgroundVideoUrl, videoRef, videoStyle }) {
  const sectionClass = (title === 'About Us' || title === 'Markets' || title === 'Technology' || title === 'Careers' || title === 'Contact Us' || title === 'Products' || title === 'News') ? styles.aboutHeroSection : styles.heroSection;
  const pageType = title === 'Markets' ? 'markets' : 
                  title === 'Technology' ? 'technology' : 
                  title === 'Products' ? 'products' :
                  title === 'News' ? 'news' : '';

  // Only add ref and remove loop for Technology and Products pages
  const shouldUseRef = title === 'Technology' || title === 'Products';
  const shouldLoop = !shouldUseRef;

  return (
    <section className={sectionClass} data-page={pageType}>
      {backgroundVideoUrl ? (
        <video 
          ref={shouldUseRef ? videoRef : null}
          autoPlay
          muted 
          loop={shouldLoop}
          playsInline
          className={styles.backgroundVideo}
          style={videoStyle}
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