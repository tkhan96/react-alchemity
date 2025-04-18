import React from 'react';
import styles from './Modal.module.css';

function Modal({ show, onClose, title, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}> {/* Prevent closing when clicking content */}
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{title}</h4>
          <button onClick={onClose} className={styles.closeButton}>&times;</button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
        <div className={styles.modalFooter}>
          <button onClick={onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal; 