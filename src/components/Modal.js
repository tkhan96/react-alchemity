import React from 'react';
import styles from './Modal.module.css';

function Modal({ show, onClose, title, children, linkedInUrl }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{title}</h4>
        </div>
        <div className={styles.modalBody}>
          {children}
          {linkedInUrl && (
            <div className={styles.linkedInButtonContainer}>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedInButton}
              >
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal; 