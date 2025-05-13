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
          <motion.div className={styles.textContent}>
            <motion.h2 className={styles.title} variants={itemVariants}>
              <span style={{ color: '#fff' }}>Problem</span> Opportunity
            </motion.h2>
            <motion.p className={styles.text} variants={itemVariants}>
              Chemical production is capital intensive,
              requires large facilities and massive
              production volumes.
            </motion.p>
            <motion.p className={styles.text} variants={itemVariants}>
              Global chemical and oil & gas industry
              account for six giga tons
              of CO<sub>2</sub> emissions annually.
            </motion.p>
            <motion.p className={styles.highlightText} variants={itemVariants}>
              Lower Cost and CO<sub>2</sub> Emissions Gamechanger is Needed…
            </motion.p>
            <motion.p className={styles.highlightText} variants={itemVariants}>
              Our Platform Technology provides Clean Chemicals with Lower Capital Risk and Higher Efficiency!
            </motion.p>
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