import React from 'react';
import styles from './Sponsors.module.css';

import shellLogo from './images/shell-logo.png';
import umdLogo from './images/umd-logo.png';
function Sponsors() {
  return (
    <section className={styles.sponsorsSection}>
      <h2 className={styles.sponsorsTitle}>Our Sponsors and Investors</h2>
      <div className={styles.sponsorsGrid}>
        <img src={shellLogo} alt="Sponsor 1" className={styles.sponsorLogo} />
        <img src={umdLogo} alt="Sponsor 2" className={styles.sponsorLogo} />
      </div>
    </section>
  );
}

export default Sponsors;