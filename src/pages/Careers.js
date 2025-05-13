import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from './Contact.module.css';
import PageHero from '../components/PageHero';
import careersVideo from '../components/images/careers.mov';

function Careers() {
  return (
    <>
      <PageHero 
        backgroundVideoUrl={careersVideo}
        title="Careers"
      />
      <div className={styles.contactPage}>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <h2>We're Hiring!</h2>
            <p style={{ color: '#ffffff' }}>
              If you're interested in one of our open positions, start by applying here and attaching your resume.
            </p>
          </div>
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;