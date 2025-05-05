import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import styles from './PlantInfoSection.module.css';
import plantImage from './images/30tpd.jpg';  
import { FaRecycle, FaLeaf, FaIndustry, FaFlask, FaArrowRight, FaCloud, FaDollarSign, FaShieldAlt, FaSeedling } from 'react-icons/fa';

const PlantInfoSection = () => {
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.8, 
        ease: "easeOut" 
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const stats = [
    {
      icon: <FaCloud />,
      value: "400%",
      label: "Lower CO₂ Emission",
      description: "Placeholder text"
    },
    {
      icon: <FaDollarSign />,
      value: "300%",
      label: "Lower Lifetime Cost",
      description: "Scales down cost effectively even to remote sites"
    },
    {
      icon: <FaShieldAlt />,
      value: "Energy",
      label: "Security",
      description: "Provides domestic job and energy security"
    },
    {
      icon: <FaSeedling />,
      value: "All",
      label: "Site Types",
      description: "Clean energy production in brown and green fields"
    }
  ];

  return (
    <section className={styles.plantSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <motion.div 
            className={styles.imageContainer}
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
          >
            <img 
              src={plantImage} 
              alt="3D Design of our Chemical Plant" 
              className={styles.plantImage}
            />
            <div className={styles.imageOverlay}>
              <motion.div 
                className={styles.hotspot}
                style={{ bottom: '45%', left: '32%' }}
                whileHover={{ scale: 1.2 }}
              >
                <div className={styles.hotspotDot}></div>
                <div className={styles.hotspotTooltip}>
                  <h4>Feedstock</h4>
                </div>
              </motion.div>
              <motion.div 
                className={styles.hotspot}
                style={{ top: '40%', left: '75%' }}
                whileHover={{ scale: 1.2 }}
              >
                <div className={styles.hotspotDot}></div>
                <div className={styles.hotspotTooltip}>
                  <h4>GTChem Skid</h4>
                </div>
              </motion.div>
              <motion.div 
                className={styles.hotspot}
                style={{ top: '70%', left: '40%' }}
                whileHover={{ scale: 1.2 }}
              >
                <div className={styles.hotspotDot}></div>
                <div className={styles.hotspotTooltip}>
                  <h4>Liquid Fuel Tank</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.statsContainer}
            ref={statsRef}
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            <h2 className={styles.statsTitle} style={{ color: '#25abe0' }}>Serving the Community</h2>
            <p className={styles.statsSubtitle}>
            Transforming industrial operations with solutions that reduce costs, lower emissions, and strengthen domestic energy security.
            </p>
            
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className={styles.statCard}
                  variants={itemVariants}
                >
                  <div className={styles.statIconContainer}>
                    {stat.icon}
                  </div>
                  <h3 className={styles.statValue}>{stat.value}</h3>
                  <h4 className={styles.statLabel}>{stat.label}</h4>
                  <p className={styles.statDescription}>{stat.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className={styles.learnMoreContainer}
              variants={buttonVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              whileHover="hover"
            >
              <Link 
                to="/technology" 
                className={styles.learnMoreButton}
                onClick={scrollToTop}
              >
                <span>Learn More About Our Technology</span>
                <FaArrowRight className={styles.arrowIcon} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlantInfoSection; 