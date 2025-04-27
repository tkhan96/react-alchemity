import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './Header.module.css'; // Import CSS module
import logo from './images/alchemity_logo_w_text.png'; // Updated path to the logo

const contactButtonStyle = {
  backgroundColor: '#0077b5',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease',
};

contactButtonStyle[':hover'] = {
  backgroundColor: '#005a8c',  // Darker shade of blue
};

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          {/* Placeholder for Logo */}
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Alchemity Logo" className={styles.logoImage} />
          </Link>
        </div>
        <ul className={styles.navList}>
          {/* Updated Nav Links */}
          <li className={styles.navItem}><Link to="/markets" className={styles.navLink}>Markets</Link></li>
          <li className={styles.navItem}><Link to="/products" className={styles.navLink}>Products</Link></li>
          <li className={styles.navItem}><Link to="/technology" className={styles.navLink}>Technology</Link></li>
          <li className={styles.navItem}><Link to="/about" className={styles.navLink}>About</Link></li>
          <li className={styles.navItem}><Link to="/careers" className={styles.navLink}>Careers</Link></li>
          <li className={styles.navItem}>
            <Link to="/contact" className={`${styles.navLink} ${styles.contactButton}`}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;