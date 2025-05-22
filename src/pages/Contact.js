import React from 'react';
import ContactForm from '../components/ContactForm1';
import styles from './Contact.module.css';
import PageHero from '../components/PageHero';
import contactBg from '../components/images/contact-us-bg-2.jpg';
import contactVideo from '../components/images/contact.mov';

function Contact() {
  const linkedInUrl = 'https://www.linkedin.com/company/alchemity/';

  return (
    <>
      <PageHero 
        backgroundVideoUrl={contactVideo}
        title="Contact Us"
      />
      <div className={styles.contactPage}>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <h2 style={{ 
              fontSize: '40px',
              color: '#25abe0',
              fontWeight: '500'
            }}>
              Contact Us
            </h2>
            <p style={{ 
              color: '#ffffff',
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              maxWidth: '800px'
            }}>
              Have questions about our technology or interested in learning more? We'd love to hear from you.
            </p>
            
            <div className={styles.infoBlock}>
              <h2 style={{ 
                fontSize: '40px',
                color: '#25abe0',
                fontWeight: '500',
                marginBottom: '1rem'
              }}>
                Address
              </h2>
              <p style={{ 
                color: '#ffffff',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                maxWidth: '800px'
              }}>
                4467 Technology Drive <br/>
                Alchemity LLC, Suite 2116 <br/>
                College Park, MD 20742 <br/>
                United States
              </p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6201.998091617533!2d-76.94109592408!3d38.99251814108605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6a3aab7487b%3A0x2058439c34831633!2sMaryland%20Technology%20Enterprise%20Institute%20(Mtech)!5e0!3m2!1sen!2sus!4v1746684090265!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0, marginTop: '1rem', borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className={styles.infoBlock}>
              <h2 style={{ 
                fontSize: '40px',
                color: '#25abe0',
                fontWeight: '500',
                marginBottom: '1rem'
              }}>
                Connect
              </h2>
              <p style={{ 
                color: '#ffffff',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                marginBottom: '0.5rem',
                maxWidth: '800px'
              }}>
                Follow us on LinkedIn (our primary social channel):
              </p>
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