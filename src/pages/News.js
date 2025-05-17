import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import NewsArticle from '../components/NewsArticle';
import productVideo from '../components/images/product.mov';
import newsImage1 from '../components/images/1.jpeg';
import newsImage2 from '../components/images/2.png';
import newsImage3 from '../components/images/3.png';
import newsImage4 from '../components/images/4.png';

const sectionStyle = {
  padding: 'var(--section-padding)',
  margin: '0 auto',
  backgroundColor: '#000000',
  textAlign: 'left',
  maxWidth: 'var(--container-width)',
};

const titleStyle = {
  fontSize: '40px',
  color: '#0077b5',
  marginBottom: '3rem',
  textAlign: 'center',
  fontWeight: '400',
};

const videoStyle = {
  position: 'absolute',
  top: '-33%',
  right: 0,
  width: '65%',
  height: '160%',
  objectFit: 'contain',
  zIndex: 0
};

const articlesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem',
  padding: '0 1rem',
};

const newsArticles = [
  {
    title: "Reactor converts methane to heavier hydrocarbons without CO₂",
    summary: "A scaled up version of the process could help to curb methane venting and flaring at remote oil sites. The new reactor uses a process called direct nonoxidative methane conversion (DNMC) to convert methane into more valuable compounds without generating CO2.",
    image: newsImage1,
    link: "https://cen.acs.org/environment/climate-change/Reactor-converts-methane-heavier-hydrocarbons/99/web/2021/11",
    source: "Chemical & Engineering News (C&EN)"
  },
  {
    title: "Alchemity Receives Shell GameChanger Funding",
    summary: "Alchemity has been selected to receive funding from Shell GameChanger, a program that supports innovative technologies with the potential to transform the energy industry.",
    image: newsImage2,
    link: "https://mage.umd.edu/news/story/alchemity-receives-shell-gamechanger-funding",
    source: "Maryland Applied Graduate Engineering (MAGE)"
  },
  {
    title: "MTech Ventures Company Spotlight: Alchemity",
    summary: "Alchemity is developing a revolutionary technology to convert methane into valuable chemicals without CO2 emissions, potentially transforming the energy industry.",
    image: newsImage3,
    link: "https://energy.umd.edu/news/story/mtech-ventures-company-spotlight-alchemity",
    source: "Maryland Energy Innovation Institute"
  },
  {
    title: "UMD Scientists Convert Methane Without Greenhouse Gas Emissions",
    summary: "University of Maryland researchers have developed a new method to convert methane into valuable chemicals without producing greenhouse gas emissions, offering a potential solution to climate change.",
    image: newsImage4,
    link: "https://energy.umd.edu/news/story/umd-scientists-convert-methane-without-greenhouse-gas-emissions",
    source: "Maryland Energy Innovation Institute"
  }
];

function News() {
  return (
    <>
      <PageHero 
        backgroundVideoUrl={productVideo}
        title="News"
        titleStyle={{
          color: '#0077b5',
          fontSize: '64px',
          fontWeight: '400',
          textAlign: 'left',
          marginBottom: '1rem',
          paddingLeft: '4rem',
          position: 'relative',
          zIndex: 2,
        }}
        videoStyle={videoStyle}
      />
      <div style={sectionStyle}>
        <motion.h2 
          style={titleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
      
        </motion.h2>
        <div style={articlesGridStyle}>
          {newsArticles.map((article, index) => (
            <NewsArticle
              key={index}
              index={index}
              {...article}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default News; 