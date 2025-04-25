import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './Header.module.css'; // Import CSS module
import logo from './images/alchemity_logo_w_text.png'; // Updated path to the logo

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