import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ProductFocus.module.css';
import { FaCode, FaNetworkWired, FaProjectDiagram, FaTasks } from 'react-icons/fa';

function ProductFocus() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Product features data with icons
  const features = [
    {
      icon: <FaCode />,
      title: "Cutting-Edge Technology",
      description: "Leverage cutting-edge technology stacks for optimal performance with our fully integrated modular design.",
      benefits: [
        "Advanced catalytic processes",
        "Real-time monitoring systems",
        "Modular, scalable architecture"
      ]
    },
    {
      icon: <FaNetworkWired />,
      title: "Integrated Solutions",
      description: "Fully integrated solutions tailored to your specific business needs, ensuring seamless operations.",
      benefits: [
        "End-to-end process optimization",
        "Customizable configurations",
        "Seamless industrial integration"
      ]
    },
    {
      icon: <FaProjectDiagram />,
      title: "Rapid Deployment",
      description: "Standardized modules and rapid deployment methodologies ensure quick time-to-value for your operations.",
      benefits: [
        "Pre-fabricated components",
        "Quick installation protocols",
        "Minimal production disruption"
      ]
    },
    {
      icon: <FaTasks />,
      title: "End-to-End Management",
      description: "Comprehensive project management minimizes risk and ensures successful outcomes at every stage.",
      benefits: [
        "Dedicated support teams",
        "Continuous performance monitoring",
        "Regular maintenance and upgrades"
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Our Approach to Solutions
        </motion.h2>
        <motion.p className={styles.subTitle} variants={itemVariants}>
          Alchemity's integrated platform delivers measurable results and accelerates your business transformation.
        </motion.p>

        {/* Tabs Navigation */}
        <motion.div className={styles.tabsContainer} variants={itemVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${styles.tab} ${activeTab === index ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.tabIcon}>{feature.icon}</div>
              <span>{feature.title}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className={styles.contentWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className={styles.tabContent}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className={styles.featureContent}>
                <div className={styles.featureIconLarge}>
                  {features[activeTab].icon}
                </div>
                <h3>{features[activeTab].title}</h3>
                <p>{features[activeTab].description}</p>
                <div className={styles.benefitsList}>
                  {features[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefitItem}>
                      <div className={styles.benefitDot}></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default ProductFocus;