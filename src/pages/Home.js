import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Hero from '../components/Hero';
import ProductFocus from '../components/ProductFocus';
import Manufacturing from '../components/Manufacturing';
import MarketApplications from '../components/MarketApplications';
import Sponsors from '../components/Sponsors';
import PlantInfoSection from '../components/PlantInfoSection'; // New component

// No longer need to import the plant image directly here
// import plantImage from '../components/images/plant4.png'; // Adjust the path as needed

function Home() {
  return (
    <>
      <Hero />

      {/* Replaced simple image with interactive PlantInfoSection */}
      <PlantInfoSection />

      <ProductFocus />

      <MarketApplications />

      <Sponsors />
      
    </>
  );
}

export default Home;