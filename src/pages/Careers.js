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

      {/* Job Postings Section */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '-2rem auto 4rem auto', 
        padding: '0 2rem',
        backgroundColor: '#000000'
      }}>
        <h2 style={{ 
          fontSize: '40px',
          color: '#25abe0',
          marginBottom: '3rem',
          marginTop: '0',
          textAlign: 'center',
          fontWeight: '500'
        }}>
          Job Postings
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {/* Engineer Position Card */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            padding: '2rem',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#ffffff', fontSize: '1.5rem' }}>
              Engineer Position Description
              <br />
              (multiple levels)
              <br />
              (pdf)
            </h3>
            <button 
              onClick={() => window.open('/path-to-engineer-pdf', '_blank')}
              style={{
                backgroundColor: '#25abe0',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                marginTop: 'auto',
                transition: 'background-color 0.3s ease',
                alignSelf: 'center'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1a8bc0'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#25abe0'}
            >
              Download
            </button>
          </div>

          {/* Technician Position Card */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            padding: '2rem',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#ffffff', fontSize: '1.5rem' }}>
              Technician (multiple levels) - Intern - Co-Op
              <br />
              Position Description
              <br />
              (pdf)
            </h3>
            <button 
              onClick={() => window.open('/path-to-technician-pdf', '_blank')}
              style={{
                backgroundColor: '#25abe0',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                marginTop: 'auto',
                transition: 'background-color 0.3s ease',
                alignSelf: 'center'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1a8bc0'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#25abe0'}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;