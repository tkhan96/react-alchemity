import React from 'react';
import styles from './MarketApplications.module.css'; // Import the CSS module

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
            <h3 className={styles.industryTitle}>Finance</h3>
            <p className={styles.industryDescription}>
              Modernizing financial systems for security and efficiency...
            </p>
          </div>
          <div className={styles.industryBox}>
            <h3 className={styles.industryTitle}>Healthcare</h3>
            <p className={styles.industryDescription}>
              Enhancing patient care with innovative technology solutions...
            </p>
          </div>
          <div className={styles.industryBox}>
            <h3 className={styles.industryTitle}>Manufacturing</h3>
            <p className={styles.industryDescription}>
              Streamlining production processes for greater efficiency...
            </p>
          </div>
          <div className={styles.industryBox}>
            <h3 className={styles.industryTitle}>Retail</h3>
            <p className={styles.industryDescription}>
              Transforming the retail experience with cutting-edge tools...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketApplications;