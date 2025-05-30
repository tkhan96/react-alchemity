import React from 'react';
import styles from './ProfileCard.module.css';

function ProfileCard({ name, title, imageUrl, onClick, linkedInUrl, blurb, isAdvisor, isEric, id }) {
  return (
    <div 
      className={`${styles.founderContainer} ${isAdvisor ? styles.advisorContainer : ''} ${isEric ? styles.ericContainer : ''}`}
      data-id={id}
    >
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.founderImage} />
      </div>
      <div className={styles.founderInfo}>
        <h3 className={styles.founderName}>{name}</h3>
        <p className={`${styles.founderTitle} ${isAdvisor ? styles.advisorTitle : ''}`}>{title}</p>
        <p className={`${styles.founderBlurb} ${isEric ? styles.ericBlurb : ''}`}>{blurb}</p>
        <div className={styles.buttonContainer}>
          <button onClick={onClick} className={styles.detailsButton}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;