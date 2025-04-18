import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import styles from './Hero.module.css'; // Import CSS module

function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Video */}
      <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
        <source
          src="https://videos.pexels.com/video-files/2924583/2924583-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay and Content */}
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>Alchemity: Revolutionizing Clean Chemicals</h1>
        <p className={styles.subHeadline}>
          Scaling carbon-negative, cost-competitive chemical production with modular reactor systems.
        </p>
        {/* Use Link to navigate to the Technology page */}
        <Link to="/technology" className={styles.ctaButton}>Explore Our Technology</Link>
      </div>
    </section>
  );
}

export default Hero;