import React from 'react';
import styles from './Careers.module.css';
import PageHero from '../components/PageHero'; // Import PageHero
import careersBg from '../components/images/careers-hero.png'; // Placeholder background image  
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
      <PageHero backgroundImageUrl={careersBg} />

      {/* Full-width wrapper with light green background */}
      <div style={{ backgroundColor: '#e8f5e9', minHeight: '100vh' }}>
        <div className={styles.careersPage}>
          <p className={styles.introText}>
            We're looking for passionate innovators to help us shape the future. 
            Explore our open positions below.
          </p>

          {jobPostings.length > 0 ? (
            <div className={styles.jobList}>
              {jobPostings.map((job) => (
                <div key={job.id} className={styles.jobPosting}>
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
    </>
  );
}

export default Careers;