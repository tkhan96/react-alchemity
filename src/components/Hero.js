import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import styles from './Hero.module.css'; // Import CSS module
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Import icons
import { FaRocket, FaLightbulb } from 'react-icons/fa';

function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // State for controlling the animation sequence
  const [activePhrase, setActivePhrase] = useState(null);

  // Handle video loaded event
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      
      // Check if video is already loaded
      if (video.readyState >= 3) {
        setVideoLoaded(true);
      }
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  // Text animation variants
  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subHeadlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2 + 0.5,
        ease: "easeOut"
      }
    })
  };

  // Key messages with periods between them
  const keyMessages = [
    "One Platform",
    "Clean Chemicals", 
    "Zero CO2", 
    "Lower Capital Risk", 
    "Higher Efficiency"
  ];

  // Effect for sequentially bolding each phrase once on load
  useEffect(() => {
    if (inView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setActivePhrase(currentIndex);
        
        // Reset after a short time
        setTimeout(() => {
          setActivePhrase(null);
        }, 1000);  // Each phrase stays bold for 1 second
        
        currentIndex++;
        if (currentIndex >= keyMessages.length) {
          clearInterval(interval);
        }
      }, 1500);  // Move to next phrase every 1.5 seconds
      
      return () => clearInterval(interval);
    }
  }, [inView, keyMessages.length]);

  return (
    <section className={styles.heroSection} ref={ref}>
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        ref={videoRef}
        className={styles.backgroundVideo}
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source
          src="https://videos.pexels.com/video-files/2924583/2924583-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced Gradient Overlay - Only shown at full opacity when video is not loaded */}
      <div className={`${styles.heroOverlay} ${videoLoaded ? styles.videoLoaded : ''}`}></div>
      
      <div className={styles.heroContent}>
        <motion.h1 
          className={styles.headline}
          variants={headlineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Revolutionizing Clean Chemicals
        </motion.h1>
        
        <motion.p 
          className={styles.subHeadline}
          variants={subHeadlineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Scaling carbon-negative, cost-competitive chemical production with modular reactor systems.
        </motion.p>

        {/* Sleek Key Messaging Bar */}
        <motion.div
          className={styles.keyMessagesContainer}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.keyMessagesLine}>
            {keyMessages.map((message, index) => (
              <React.Fragment key={index}>
                <motion.span
                  className={`${styles.keyMessagePhrase} ${activePhrase === index ? styles.activeBold : ''}`}
                  whileHover={{ fontWeight: 700 }}
                >
                  {message}
                </motion.span>
                {index < keyMessages.length - 1 && <span className={styles.messageDot}>.</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Mission and Vision Section with Icons */}
        <div className={styles.missionVisionContainer}>
          <motion.div 
            className={styles.mission}
            variants={cardVariants}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className={styles.iconContainer}>
              <FaRocket className={styles.icon} />
            </div>
            <h2>Our Mission</h2>
            <p>
              To empower industries with innovative, sustainable solutions that drive growth while protecting the planet.
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.vision}
            variants={cardVariants}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className={styles.iconContainer}>
              <FaLightbulb className={styles.icon} />
            </div>
            <h2>Our Vision</h2>
            <p>
              To lead the global transition to clean chemical production, creating a future where sustainability and profitability coexist.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;