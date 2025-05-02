import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from './Contact.module.css';
import PageHero from '../components/PageHero';
import contactBg from '../components/images/contact-us-bg-2.jpg';

function Contact() {
  const linkedInUrl = 'https://www.linkedin.com/company/alchemity/';

  return (
    <>
      <PageHero title={'Contact Us'} backgroundImageUrl={contactBg} />
      <div className={styles.contactPage}>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p style={{ color: '#ffffff' }}>Have questions or want to discuss a project? Reach out to us.</p>
            
            <div className={styles.infoBlock}>
              <h2>Address</h2>
              <p>
              4467 TECHNOLOGY DRIVE <br/>
              ALCHEMITY LLC, SUITE 2116 <br/>
              COLLEGE PARK, MD 20742 <br/>
              United States <br/>
              <a href="https://maps.app.goo.gl/sFJmy4VV6qE5qpDN9" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h2>Email</h2>
              <a href="mailto:resources@alchemity.tech">resources@alchemity.tech</a>
            </div>

            <div className={styles.infoBlock}>
               <h2>Connect</h2>
               <p>Follow us on LinkedIn (our primary social channel):</p>
               <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Alchemity on LinkedIn</a>
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