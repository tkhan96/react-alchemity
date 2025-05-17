import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import styles from './NewsArticle.module.css';

function NewsArticle({ image, title, summary, link, source, index }) {
  const articleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      className={styles.articleCard}
      variants={articleVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.articleImage} />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.articleTitle}>{title}</h3>
        <p className={styles.articleSummary}>{summary}</p>
        <div className={styles.buttonContainer}>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.learnMoreButton}
            variants={buttonVariants}
            whileHover="hover"
          >
            Learn More
            <FaArrowRight className={styles.arrowIcon} />
          </motion.a>
          <p className={styles.articleSource}>{source}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default NewsArticle; 