import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css'; 

function Footer() {
  const [selectedPopup, setSelectedPopup] = useState(null);

  const popupContent = {
    terms: {
      title: "Terms & Conditions",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    privacy: {
      title: "Privacy Policy",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  };

  const handleLinkClick = (e, type) => {
    e.preventDefault();
    setSelectedPopup(type);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.companyName}>
        Alchemity
      </div>
      <div className={styles.copyright}>
      Alchemity and the Alchemity logo are trademarks of Alchemity LLC. 
      </div>
      <div className={styles.links}>
        <a href="#terms" onClick={(e) => handleLinkClick(e, 'terms')}>Terms & Conditions</a>
        <a href="#privacy" onClick={(e) => handleLinkClick(e, 'privacy')}>Privacy Policy</a>
        <a href="https://www.linkedin.com/company/alchemity/" target="_blank" rel="noopener noreferrer">Follow us on Linkedin</a>
      </div>

      {selectedPopup && (
        <motion.div 
          className={styles.popupOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPopup(null)}
        >
          <motion.div 
            className={styles.popupContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ color: '#25abe0', fontSize: '28px', marginBottom: '1.5rem', fontWeight: '600' }}>
              {popupContent[selectedPopup].title}
            </h3>
            <p style={{ color: '#ffffff', fontSize: '16px', lineHeight: '1.6' }}>
              {popupContent[selectedPopup].content}
            </p>
          </motion.div>
        </motion.div>
      )}
    </footer>
  );
}

export default Footer; 