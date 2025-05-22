import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import NewsArticle from '../components/NewsArticle';
import productVideo from '../components/images/product.mov';
import newsImage1 from '../components/images/1.jpeg';
import newsImage2 from '../components/images/2.png';
import newsImage3 from '../components/images/3.png';
import newsImage4 from '../components/images/4.png';
import newsImage5 from '../components/images/5.webp';
import newsImage6 from '../components/images/6.webp';
import newsImage7 from '../components/images/7.jpg';

const sectionStyle = {
  padding: '0 0 calc(var(--section-padding) + 4rem) 0',
  margin: '0 auto',
  backgroundColor: '#000000',
  textAlign: 'left',
  maxWidth: '100%',
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
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  padding: '0 2rem',
  maxWidth: '1800px',
  margin: '-1rem auto 4rem',
};

const lastArticleStyle = {
  gridColumn: '2',
  margin: '0 auto',
};

const newsArticles = [
  {
    title: "Reactor Turns Methane to Hydrocarbons Without CO₂",
    summary: "A scaled up version of the process could help to curb methane venting and flaring at remote oil sites. The new reactor uses a process called direct nonoxidative methane conversion (DNMC) to convert methane into more valuable compounds without generating CO2.",
    image: newsImage1,
    link: "https://cen.acs.org/environment/climate-change/Reactor-converts-methane-heavier-hydrocarbons/99/web/2021/11",
    source: "Chemical & Engineering News"
  },
  {
    title: "Alchemity Receives Shell GameChanger Funding",
    summary: "Alchemity has been selected to receive funding from Shell GameChanger, a program that supports innovative technologies with the potential to transform the energy industry.",
    image: newsImage2,
    link: "https://mage.umd.edu/news/story/alchemity-receives-shell-gamechanger-funding",
    source: "Maryland Applied Graduate Engineering"
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
  },
  {
    title: "Direct Nonoxidative Methane Conversion in an Autothermal Hydrogen-Permeable Membrane Reactor",
    summary: "Research paper authored by Eric Wachsman, published in Wiley Advanced, detailing the breakthrough technology in methane conversion and its potential impact on clean energy production.",
    image: newsImage7,
    link: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/aenm.202102782",
    source: "Wiley Advanced"
  },
  {
    title: "USM Climbs in List of Nation's Top 10 Patent-Producing Universities",
    summary: "The University System of Maryland has been recognized for its innovative research, with Alchemity's methane conversion technology being one of the notable patents contributing to this achievement.",
    image: newsImage6,
    link: "https://www.mdcleanenergy.org/news/usm-climbs-in-list-of-nations-top-10-patent-producing-universities/",
    source: "Maryland Clean Energy Center"
  },
  {
    title: "Alchemity Wins $1000 Prize from Maryland Department of Commerce",
    summary: "Alchemity has been recognized by the Maryland Department of Commerce for its innovative technology in converting methane to valuable chemicals, winning a $1000 prize for their groundbreaking work.",
    image: newsImage5,
    link: "https://mdeia.org/blog/f/alchemity-wins-1000-prize-from-maryland-department-of-commerce?blogcategory=News",
    source: "Maryland Energy Innovation Accelerator"
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
            <div key={index} style={index === newsArticles.length - 1 ? lastArticleStyle : {}}>
              <NewsArticle
                index={index}
                {...article}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News; 