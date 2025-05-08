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
    { name: "University of Maryland", logo: umd },
    { name: "Shell", logo: shell },
    { name: "ARPA-E", logo: arpa },
    { name: "MIL", logo: mil },
    { name: "TEDCO", logo: tedco },
    // Duplicate the first set to create seamless loop
    { name: "University of Maryland", logo: umd },
    { name: "Shell", logo: shell },
    { name: "ARPA-E", logo: arpa },
    { name: "MIL", logo: mil },
    { name: "TEDCO", logo: tedco }
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
          Our Sponsors
        </motion.h2>
        
        <motion.p 
          className={styles.sponsorsSubtitle}
          variants={itemVariants}
        >
          Partnering with industry leaders to accelerate clean chemical production.
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Sponsors;