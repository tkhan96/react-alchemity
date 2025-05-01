import React from 'react';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection'; // Import the new VideoSection component
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
      {/* <Hero backgroundImageUrl={heroBackground} /> */}
      
      {/* With video background (default): */}
      
      {/* Video Section with controllable video */}
      <VideoSection />
      
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