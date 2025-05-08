import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Sponsors.module.css';

import shell from './images/shell.png';
import mil from './images/mil.png';
import tedco from './images/tedco.png';
import umd from './images/umd.jpg';
import arpa from './images/arpa.png';

function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sponsors = [
    { name: "Shell", logo: shell },
    { name: "MIL", logo: mil },
    { name: "TEDCO", logo: tedco },
    { name: "University of Maryland", logo: umd },
    { name: "ARPA-E", logo: arpa },
    { name: "Shell", logo: shell },
    { name: "MIL", logo: mil },
    { name: "TEDCO", logo: tedco },
    { name: "University of Maryland", logo: umd },
    { name: "ARPA-E", logo: arpa },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.sponsorsSection} ref={ref}>
      <div className={styles.backgroundPattern}></div>
      
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 
          className={styles.sponsorsTitle}
          variants={itemVariants}
        >
          Our Sponsors and Investors
        </motion.h2>
        
        <motion.p 
          className={styles.sponsorsSubtitle}
          variants={itemVariants}
        >
          Partnering with industry leaders to accelerate the production of clean chemicals
        </motion.p>
        
        <motion.div 
          className={styles.sponsorsCarousel}
          variants={itemVariants}
        >
          <div className={styles.carouselTrack}>
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className={styles.sponsorCard}
              >
                <img src={sponsor.logo} alt={sponsor.name} className={styles.sponsorLogo} />
              </div>
            ))}
            {/* Duplicate sponsors for continuous loop effect */}
            {sponsors.map((sponsor, index) => (
              <div 
                key={`duplicate-${index}`}
                className={styles.sponsorCard}
              >
                <img src={sponsor.logo} alt={sponsor.name} className={styles.sponsorLogo} />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Sponsors;