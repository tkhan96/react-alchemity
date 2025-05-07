import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ProblemOpportunitySection.module.css';
import problemVideo from './images/prob_and_opp.mp4';

const ProblemOpportunitySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className={styles.textContent} variants={itemVariants}>
            <h2 className={styles.title}>Problem/Opportunity</h2>
            <p className={styles.text}>
              Chemical production is capital intensive,
              requires large facilities and massive
              production volumes.
            </p>
            <p className={styles.text}>
              Global chemical and oil & gas industry
              account for 6 billion metric tons (6 GtCO<sub>2</sub>)
              of CO<sub>2</sub> emissions annually.
            </p>
            <p className={styles.highlightText}>
              Clean and Lower Cost Gamechanger is needed…
            </p>
            <p className={styles.highlightText}>
              Swiss Army Knife for Production of Clean Chemicals!
            </p>
          </motion.div>

          <motion.div 
            className={styles.imageContainer}
            variants={itemVariants}
          >
            <video 
              src={problemVideo} 
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemOpportunitySection; 