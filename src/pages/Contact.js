import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from './Contact.module.css'; // Create this CSS module
import PageHero from '../components/PageHero'; // Import PageHero
import contactBg from '../components/images/contact-hero.png'; // Placeholder for background image
function Contact() {
  // Placeholder URL for LinkedIn to satisfy linting
  const linkedInUrl = 'https://www.linkedin.com/company/alchemity/'; 

  return (
    <>
      <PageHero backgroundImageUrl={contactBg}  // Placeholder for background image
/>
      <div className={styles.contactPage}>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>Have questions or want to discuss a project? Reach out to us.</p>
            
            <div className={styles.infoBlock}>
              <h3>Address</h3>
              <p>
              9469 Lovat Road <br />
              Fulton, Maryland, 20759, <br />
              United States <br />
              <a href="https://goo.gl/maps/4tq8g4J6v2s" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Email</h3>
              <a href="mailto:resources@alchemity.tech">resources@alchemity.tech</a>
            </div>

            <div className={styles.infoBlock}>
               <h3>Connect</h3>
               <p>Follow us on LinkedIn (our primary social channel):</p>
               <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Alchemity on LinkedIn</a> {/* Use valid URL */} 
             </div>

          </div>
          <div className={styles.formWrapper}>
             <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact; 