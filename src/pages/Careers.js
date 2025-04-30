import React from 'react';
import styles from './Careers.module.css';
import PageHero from '../components/PageHero';
import careersBg from '../components/images/careers-bg.png';

// Placeholder job data
const jobPostings = [
  {
    id: 1,
    title: 'Senior Software Engineer (Backend)',
    location: 'Remote / San Francisco, CA',
    description: 'Join our core engineering team to build and scale...',
    applyLink: '#'
  },
  {
    id: 2,
    title: 'Product Marketing Manager',
    location: 'New York, NY',
    description: 'Drive the go-to-market strategy for our innovative products...',
    applyLink: '#'
  },
  // Add more postings here
];

function Careers() {
  return (
    <>
      <PageHero 
        title={'Careers'} 
        backgroundImageUrl={careersBg}
      />

      {/* Full-width wrapper with black background */}
      <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
        <div className={styles.careersPage} style={{ backgroundColor: '#000000' }}>
          <div style={{ 
            backgroundColor: '#000000', 
            padding: '2rem', 
            borderRadius: '8px',
            margin: '0 auto',
            maxWidth: '1200px'
          }}>
            <p className={styles.introText} style={{ color: '#ffffff' }}>
              We're looking for passionate innovators to help us shape the future. 
              Explore our open positions below.
            </p>

            {jobPostings.length > 0 ? (
              <div className={styles.jobList}>
                {jobPostings.map((job, index) => (
                  <div 
                    key={job.id} 
                    className={styles.jobPosting} 
                    style={{ 
                      ...(index === 0 ? { 
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px'
                      } : {}),
                      ...(index === jobPostings.length - 1 ? {
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px'
                      } : {})
                    }}
                  >
                    <div className={styles.jobInfo}>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <p className={styles.jobLocation}>{job.location}</p>
                    </div>
                    <div className={styles.jobApply}>
                      <a href={job.applyLink} className={`${styles.applyButton} button`}>
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.noJobsText}>
                Currently, there are no open positions. Please check back later!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;