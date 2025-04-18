import React from 'react';
import styles from './ProfileCard.module.css';

function ProfileCard({ name, title, imageUrl, onClick, isAdvisor = false }) {
  return (
    <div className={`${styles.card} ${isAdvisor ? styles.advisorCard : styles.founderCard}`}>
      <img 
        src={imageUrl || 'https://via.placeholder.com/150/2E8B57/FFFFFF?text=Profile'} // Placeholder image 
        alt={`${name} profile`}
        className={styles.image}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.title}>{title}</p>
      {!isAdvisor && (
          <button onClick={onClick} className={styles.detailsButton}>
            View Details
          </button>
      )}
      {/* Add LinkedIn icon/link if available */}
    </div>
  );
}

export default ProfileCard; 