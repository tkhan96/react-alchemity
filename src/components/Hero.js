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
        <h1 className={styles.headline}>Revolutionizing Clean Chemicals</h1>
        <p className={styles.subHeadline}>
          Scaling carbon-negative, cost-competitive chemical production with modular reactor systems.
        </p>

        {/* Mission and Vision Section */}
        <div className={styles.missionVisionContainer}>
          <div className={styles.mission}>
            <h2>Our Mission</h2>
            <p>
              To empower industries with innovative, sustainable solutions that drive growth while protecting the planet.
            </p>
          </div>
          <div className={styles.vision}>
            <h2>Our Vision</h2>
            <p>
              To lead the global transition to clean chemical production, creating a future where sustainability and profitability coexist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;