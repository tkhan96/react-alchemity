import React from 'react';
import styles from './News.module.css'; // Import CSS module

function News() {
  const newsItems = [
    {
      title: 'Alchemity partners with TechCorp to enhance cloud offerings',
      date: 'October 26, 2023',
      link: '#news-techcorp'
    },
    {
      title: 'Alchemity recognized as a leader in digital transformation by Giga Insights',
      date: 'September 15, 2023',
      link: '#news-giga'
    },
    {
      title: 'Alchemity announces successful deployment for major retail client',
      date: 'August 01, 2023',
      link: '#news-retail'
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Latest News</h2>
      <div className={styles.newsList}>
        {newsItems.map((item) => (
          <div key={item.title} className={styles.newsItem}>
            <h4 className={styles.itemTitle}>{item.title}</h4>
            <p className={styles.itemDate}><small>{item.date}</small></p>
            <a href={item.link} className={styles.itemLink}>Read more</a>
          </div>
        ))}
      </div>
      <p className={styles.visitLinkWrapper}>
        <a href="/media" className={styles.visitLink}>Visit Newsroom</a>
      </p>
    </section>
  );
}

export default News; 