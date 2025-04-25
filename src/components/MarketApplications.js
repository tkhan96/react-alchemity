import React from 'react';
import styles from './MarketApplications.module.css'; // Import the CSS module

// Import images for each industry
import financeImage from './images/finance-icon.png'; // Replace with the actual path to your image
import healthcareImage from './images/health-icon.png'; // Replace with the actual path to your image
import manufacturingImage from './images/manufacturing-icon.png'; // Replace with the actual path to your image
import retailImage from './images/shopping-icon.png'; // Replace with the actual path to your image

function MarketApplications() {
  return (
    <section className={styles.marketApplicationsSection}>
      <div className={styles.container}>
        {/* Left Side: Text */}
        <div className={styles.textContainer}>
          <h2>Industries We Serve</h2>
          <p>
            Our solutions are tailored to meet the unique needs of various industries, driving innovation and efficiency across the board.
          </p>
        </div>

        {/* Right Side: Industry Boxes */}
        <div className={styles.industriesGrid}>
          <div className={styles.industryBox}>
            <img
              src={financeImage}
              alt="Finance"
              className={styles.industryImage}
            />
          </div>
          <div className={styles.industryBox}>
            <img
              src={healthcareImage}
              alt="Healthcare"
              className={styles.industryImage}
            />
          </div>
          <div className={styles.industryBox}>
            <img
              src={manufacturingImage}
              alt="Manufacturing"
              className={styles.industryImage}
            />
          </div>
          <div className={styles.industryBox}>
            <img
              src={retailImage}
              alt="Retail"
              className={styles.industryImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketApplications;