import React from 'react';
import styles from './ProfileCard.module.css'; // Import CSS module

function ProfileCard({ name, title, imageUrl, onClick, linkedInUrl }) {
  return (
    <div className={styles.profileCard}>
      <img src={imageUrl} alt={name} className={styles.profileImage} />
      <h3 className={styles.profileName}>{name}</h3>
      <p className={styles.profileTitle}>{title}</p>
      <div className={styles.buttonContainer}>
        <button onClick={onClick} className={styles.detailsButton}>
          View Details
        </button>
        {linkedInUrl && (
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedInButton}
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;