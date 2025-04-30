import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './MarketApplications.module.css'; // Import the CSS module

// Import images for each industry
import financeImage from './images/finance-icon.png'; // Replace with the actual path to your image
import healthcareImage from './images/health-icon.png'; // Replace with the actual path to your image
import manufacturingImage from './images/manufacturing-icon.png'; // Replace with the actual path to your image
import retailImage from './images/shopping-icon.png'; // Replace with the actual path to your image

function MarketApplications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Industry data with descriptions
  const industries = [
    {
      name: "Finance",
      image: financeImage,
      description: "Enabling financial institutions to meet sustainability targets while maintaining competitive operations."
    },
    {
      name: "Healthcare",
      image: healthcareImage,
      description: "Providing pharmaceutical companies with green chemical processes for medication production."
    },
    {
      name: "Manufacturing",
      image: manufacturingImage,
      description: "Transforming industrial manufacturing with carbon-negative chemical production solutions."
    },
    {
      name: "Retail",
      image: retailImage,
      description: "Supporting consumer product companies with sustainable ingredients for everyday products."
    }
  ];

  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.marketApplicationsSection} ref={ref}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left Side: Text */}
        <motion.div className={styles.textContainer} variants={itemVariants}>
          <h2>Industries We Serve</h2>
          <p>
            Our solutions are tailored to meet the unique needs of various industries, driving innovation and efficiency across the board.
          </p>
        </motion.div>

        {/* Right Side: Industry Boxes */}
        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className={styles.industryBox}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)"
              }}
            >
              <div className={styles.industryContent}>
                <img
                  src={industry.image}
                  alt={industry.name}
                  className={styles.industryImage}
                />
                <h3>{industry.name}</h3>
                <div className={styles.industryDescriptionContainer}>
                  <p className={styles.industryDescription}>
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default MarketApplications;