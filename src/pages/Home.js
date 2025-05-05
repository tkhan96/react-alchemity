import React from 'react';
import VideoSection from '../components/VideoSection';
import ProblemOpportunity from '../components/ProblemOpportunitySection';
import MarketApplications from '../components/MarketApplications';
import Sponsors from '../components/Sponsors';
import PlantInfoSection from '../components/PlantInfoSection'; 

function Home() {
  return (
    <>
      <VideoSection />
      <ProblemOpportunity />
      <PlantInfoSection />
      <MarketApplications />
      <Sponsors />
    </>
  );
}

export default Home;