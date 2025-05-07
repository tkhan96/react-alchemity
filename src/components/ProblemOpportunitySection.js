import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ProblemOpportunitySection.module.css';
import problemImage from './images/problem.png';

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
              account for six giga tons
              of CO<sub>2</sub> emissions annually.
            </p>
            <p className={styles.highlightText}>
              Lower Cost and CO<sub>2</sub> Emissions Gamechanger is Needed…
            </p>
            <p className={styles.highlightText}>
              Our Platform Technology provides Clean Chemicals with Lower Capital Risk and Higher Efficiency!
            </p>
          </motion.div>

          <motion.div 
            className={styles.imageContainer}
            variants={itemVariants}
          >
            <img 
              src={problemImage} 
              alt="Problem Illustration" 
              className={styles.image}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemOpportunitySection; 