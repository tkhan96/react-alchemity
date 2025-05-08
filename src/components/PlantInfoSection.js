import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import styles from './PlantInfoSection.module.css';
import plantImage from './images/30tpd.jpg';  
import { FaRecycle, FaLeaf, FaIndustry, FaFlask, FaArrowRight, FaCloud, FaDollarSign, FaShieldAlt, FaSeedling } from 'react-icons/fa';

const PlantInfoSection = () => {
  const [selectedHotspot, setSelectedHotspot] = useState(null);
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
      value: "> 400%",
      label: "Lower CO₂ Emission",
      description: "Reduced emissions by at least 400% on today's grid. The process is carbon-negative with renewables."
    },
    {
      icon: <FaDollarSign />,
      value: "300%",
      label: "Lower Lifetime Cost",
      description: "Scales down cost effectively even to remote sites and consumes less energy to operate entire system."
    },
    {
      icon: <FaShieldAlt />,
      value: "Energy",
      label: "Security",
      description: "Provides energy security and protects domestic workforce by extending the lifetime for plants undergoing repower or decomissioning."
    },
    {
      icon: <FaSeedling />,
      value: "All",
      label: "Site Types",
      description: "Clean chemical (including drop-in fuels) production for brownfield and greenfield sites; leveraging existing downstream processes."
    }
  ];

  const hotspotDetails = {
    0: {
      title: "Feedstock",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    1: {
      title: "GTChem Skid",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    2: {
      title: "Liquid Fuel Tank",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    }
  };

  const handleHotspotClick = (index) => {
    setSelectedHotspot(selectedHotspot === index ? null : index);
  };

  return (
    <section className={styles.plantSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.headerContainer}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <h2 className={styles.statsTitle} style={{ color: '#25abe0' }}>Serving the Community</h2>
          <p className={styles.statsSubtitle}>
            Transforming industrial operations with scaled-down modular solutions that reduce costs, lower emissions, and strengthen domestic energy security.
          </p>
        </motion.div>

        <motion.div 
          className={styles.statsContainer}
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
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
        </motion.div>

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
              onClick={() => handleHotspotClick(0)}
            >
              <div className={styles.hotspotDot}></div>
              <div className={styles.hotspotTooltip}>
                <h4>{hotspotDetails[0].title}</h4>
              </div>
            </motion.div>
            <motion.div 
              className={styles.hotspot}
              style={{ top: '40%', left: '75%' }}
              whileHover={{ scale: 1.2 }}
              onClick={() => handleHotspotClick(1)}
            >
              <div className={styles.hotspotDot}></div>
              <div className={styles.hotspotTooltip}>
                <h4>{hotspotDetails[1].title}</h4>
              </div>
            </motion.div>
            <motion.div 
              className={styles.hotspot}
              style={{ top: '70%', left: '40%' }}
              whileHover={{ scale: 1.2 }}
              onClick={() => handleHotspotClick(2)}
            >
              <div className={styles.hotspotDot}></div>
              <div className={styles.hotspotTooltip}>
                <h4>{hotspotDetails[2].title}</h4>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {selectedHotspot !== null && (
          <motion.div 
            className={styles.detailedPopup}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedHotspot(null);
              }
            }}
          >
            <div className={styles.detailedPopupContent} style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem' }}>{hotspotDetails[selectedHotspot].title}</h3>
              <p className={styles.description} style={{ textAlign: 'center', lineHeight: '1.6' }}>
                {hotspotDetails[selectedHotspot].description}
              </p>
            </div>
          </motion.div>
        )}

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
      </div>
    </section>
  );
};

export default PlantInfoSection; 