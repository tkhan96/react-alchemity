import React from 'react';
import styles from './Manufacturing.module.css'; // Import CSS module

function Manufacturing() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Global Operations</h2>
      <h3 className={styles.subTitle}>State-of-the-art Infrastructure</h3>
      <p className={styles.description}>
        Alchemity operates a network of secure, high-performance data centers and operational hubs, ensuring reliability and scalability for our clients across the globe. Our teams leverage proven methodologies from leading industries to deliver consistent, high-quality results.
      </p>
    </section>
  );
}

export default Manufacturing; 