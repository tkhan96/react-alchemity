import React from 'react';
import VideoSection from '../components/VideoSection';
import ProblemOpportunity from '../components/ProblemOpportunitySection';
import ProductFocus from '../components/ProductFocus';
import MarketApplications from '../components/MarketApplications';
import Sponsors from '../components/Sponsors';
import PlantInfoSection from '../components/PlantInfoSection'; 

function Home() {
  return (
    <>
      <VideoSection />
      <ProblemOpportunity />
      <PlantInfoSection />
      <ProductFocus />
      <MarketApplications />
      <Sponsors />
    </>
  );
}

export default Home;