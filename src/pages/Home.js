import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Hero from '../components/Hero';
import ProblemOpportunity from '../components/ProblemOpportunity'; // Import new component
import ProductFocus from '../components/ProductFocus';
import Manufacturing from '../components/Manufacturing';
import MarketApplications from '../components/MarketApplications';
import Sponsors from '../components/Sponsors';
import PlantInfoSection from '../components/PlantInfoSection'; // New component

// Import a hero background image from existing images
import heroBackground from '../components/images/technology-bg-2.jpg';

// No longer need to import the plant image directly here
// import plantImage from '../components/images/plant4.png'; // Adjust the path as needed

function Home() {
  return (
    <>
      {/* You can toggle between using a background image or video by uncommenting one of these lines */}
      {/* With background image: */}
      <Hero backgroundImageUrl={heroBackground} />
      
      {/* With video background (default): */}
      {/* <Hero /> */}
      
      {/* New Problem/Opportunity Section */}
      <ProblemOpportunity />

      {/* Replaced simple image with interactive PlantInfoSection */}
      <PlantInfoSection />

      <ProductFocus />

      <MarketApplications />

      <Sponsors />
      
    </>
  );
}

export default Home;