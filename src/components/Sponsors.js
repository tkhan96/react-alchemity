import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Sponsors.module.css';

import shellLogo from './images/shell-logo.png';
import umdLogo from './images/umd-logo.png';

function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sponsors = [
    { name: "Shell", logo: shellLogo },
    { name: "University of Maryland", logo: umdLogo },
    { name: "Shell", logo: shellLogo },
    { name: "University of Maryland", logo: umdLogo },
    { name: "Shell", logo: shellLogo },
    { name: "University of Maryland", logo: umdLogo },
  ];

  const [position, setPosition] = useState(0);
  const visibleSponsors = 4;
  const totalSponsors = sponsors.length;

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setPosition((prevPosition) => 
          prevPosition === totalSponsors - visibleSponsors ? 0 : prevPosition + 1
        );
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [inView, totalSponsors, visibleSponsors]);

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
          Partnering with industry leaders to accelerate the transition to sustainable chemical production
        </motion.p>
        
        <motion.div 
          className={styles.sponsorsCarousel}
          variants={itemVariants}
        >
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${position * 25}%)` }}>
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className={styles.sponsorCard}
              >
                <img src={sponsor.logo} alt={sponsor.name} className={styles.sponsorLogo} />
              </div>
            ))}
          </div>
          
          <div className={styles.carouselIndicators}>
            {Array.from({ length: totalSponsors - visibleSponsors + 1 }).map((_, index) => (
              <div 
                key={index} 
                className={`${styles.indicator} ${position === index ? styles.activeIndicator : ''}`}
                onClick={() => setPosition(index)}
              />
            ))}
      </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Sponsors;