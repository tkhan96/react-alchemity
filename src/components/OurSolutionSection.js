import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ProblemOpportunitySection.module.css';
import gtchem11 from './images/gtchem11.mov';

const OurSolutionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Reset video to start when it's not in view
      if (!inView) {
        video.currentTime = 0;
        video.pause();
      } else {
        // Play video when it comes into view
        video.play();
      }
    }
  }, [inView]);

  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (video) {
      // Pause on the last frame
      video.pause();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className={styles.imageContainer}
            variants={itemVariants}
          >
            <video 
              ref={videoRef}
              src={gtchem11} 
              muted
              playsInline
              className={styles.video}
              onEnded={handleVideoEnded}
            />
          </motion.div>

          <motion.div className={styles.textContent}>
            <motion.h2 className={styles.title} variants={itemVariants}>
              Our Technology: Engineered for Carbon Reversal.
            </motion.h2>
            <motion.p className={styles.highlightText} variants={itemVariants}>
              Platform technology with simplified design, on-site modularity, higher efficiency and reduced capital risk.
            </motion.p>
            <motion.p className={styles.text} variants={itemVariants}>
              Paradigm shift – no premium for clean chemical & fuel production from biomass, biogass, landfill gas and waste gas. 
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSolutionSection; 