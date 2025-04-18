import React, { useState } from 'react';
import styles from './ProductFocus.module.css'; // Import CSS module

function ProductFocus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState(0); // Temporary state for the text to display
  const [direction, setDirection] = useState(''); // Track animation direction

  const features = [
    "Leverage cutting-edge technology stacks for optimal performance.",
    "Fully integrated solutions tailored to your specific business needs.",
    "Standardized modules and rapid deployment methodologies ensure quick time-to-value.",
    "End-to-end project management minimizes risk and ensures successful outcomes."
  ];

  const handleNext = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setDirection('next');
    const nextIndex = (currentIndex + 1) % features.length;
    setDisplayText(nextIndex); // Update the text immediately
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex); // Update the actual index after animation
      setIsAnimating(false);
    }, 500); // Match the animation duration
  };

  const handlePrev = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setDirection('prev');
    const prevIndex = (currentIndex - 1 + features.length) % features.length;
    setDisplayText(prevIndex); // Update the text immediately
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex); // Update the actual index after animation
      setIsAnimating(false);
    }, 500); // Match the animation duration
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Approach to Solutions</h2>
      <h3 className={styles.subTitle}>
        Alchemity's integrated platform delivers measurable results and accelerates your business transformation.
      </h3>
      <div className={styles.slider}>
        <button className={styles.navButton} onClick={handlePrev}>
          &#8592; {/* Left Arrow */}
        </button>
        <div className={styles.sliderContainer}>
          <div
            className={`${styles.featureItem} ${
              isAnimating ? (direction === 'next' ? styles.slideNext : styles.slidePrev) : ''
            }`}
          >
            {features[displayText]} {/* Display the updated text immediately */}
          </div>
        </div>
        <button className={styles.navButton} onClick={handleNext}>
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </section>
  );
}

export default ProductFocus;