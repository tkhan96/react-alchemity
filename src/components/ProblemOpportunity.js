import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ProblemOpportunity.module.css';
import { FaIndustry, FaGlobe, FaLightbulb, FaFlask, FaArrowRight } from 'react-icons/fa';

const ProblemOpportunity = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [problemRef, problemInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [transitionRef, transitionInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  
  const [opportunityRef, opportunityInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Control the sequential animation
  useEffect(() => {
    // This effect manages the sequential animation timing
    if (sectionInView) {
      // Animation is handled by the Framer Motion components and CSS
    }
  }, [sectionInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const transitionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1
      }
    },
    bounce: {
      x: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  // Problem data
  const problems = [
    {
      icon: <FaIndustry />,
      title: "Capital Intensive",
      description: "Chemical production is capital intensive, requires large facilities and massive production volumes."
    },
    {
      icon: <FaGlobe />,
      title: "Environmental Impact",
      description: "Global chemical and oil & gas industry account for 6 billion metric tons (6 GtCO2) of CO2 emissions annually."
    }
  ];
  
  // Opportunity data
  const opportunities = [
    {
      icon: <FaLightbulb />,
      title: "Solution Needed",
      description: "Clean and Lower Cost Gamechanger is needed..."
    },
    {
      icon: <FaFlask />,
      title: "Our Approach",
      description: "Swiss Army Knife for Production of Clean Chemicals!"
    }
  ];

  return (
    <section className={styles.problemSection} ref={sectionRef}>
      <div className={styles.sideBySideContainer}>
        {/* The Problem Section */}
        <motion.div 
          className={styles.problemContainer} 
          ref={problemRef}
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            The Problem
          </motion.h2>
          
          <motion.div 
            className={styles.boxesGrid}
            variants={containerVariants}
            initial="hidden"
            animate={problemInView ? "visible" : "hidden"}
          >
            {problems.map((problem, index) => (
              <motion.div 
                key={index} 
                className={`${styles.box} ${styles.problemBox}`}
                variants={itemVariants}
              >
                <div className={`${styles.iconContainer} ${styles.problemIcon}`}>
                  {problem.icon}
                </div>
                <h3 className={styles.boxTitle}>{problem.title}</h3>
                <p className={styles.boxDescription}>{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Transition Element */}
        <motion.div 
          className={styles.transitionContainer} 
          ref={transitionRef}
          initial={{ opacity: 0 }}
          animate={problemInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className={styles.transitionElement}
            variants={transitionVariants}
            initial="hidden"
            animate={transitionInView ? "visible" : "hidden"}
          >
            <motion.div 
              className={styles.arrowContainer}
              variants={arrowVariants}
              initial="hidden"
              animate={transitionInView ? ["visible", "bounce"] : "hidden"}
            >
              <FaArrowRight className={styles.arrowIcon} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Our Opportunity Section */}
        <motion.div 
          className={styles.opportunityContainer} 
          ref={opportunityRef}
          initial={{ opacity: 0 }}
          animate={problemInView && transitionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h2 
            className={`${styles.sectionTitle} ${styles.opportunityTitle}`}
            initial={{ opacity: 0, y: 20 }}
            animate={opportunityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Opportunity
          </motion.h2>
          
          <motion.div 
            className={styles.boxesGrid}
            variants={containerVariants}
            initial="hidden"
            animate={opportunityInView ? "visible" : "hidden"}
          >
            {opportunities.map((opportunity, index) => (
              <motion.div 
                key={index} 
                className={`${styles.box} ${styles.opportunityBox}`}
                variants={itemVariants}
              >
                <div className={`${styles.iconContainer} ${styles.opportunityIcon}`}>
                  {opportunity.icon}
                </div>
                <h3 className={styles.boxTitle}>{opportunity.title}</h3>
                <p className={styles.boxDescription}>{opportunity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemOpportunity; 