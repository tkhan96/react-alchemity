import React from 'react';
import styles from './Footer.module.css'; 

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.companyName}>
        Alchemity
      </div>
      <div className={styles.copyright}>
        Copyright © {new Date().getFullYear()} · Alchemity
      </div>
      <div className={styles.trademarks}>
        Alchemity and the Alchemity logo are trademarks of Alchemity LLC.
      </div>
      <div className={styles.links}>
        <a href="#terms">Terms & Conditions</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="https://www.linkedin.com/company/alchemity/" target="_blank" rel="noopener noreferrer">Follow us on Linkedin</a>
      </div>
    </footer>
  );
}

export default Footer; 