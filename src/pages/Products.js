import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import productsBg from '../components/images/plant3.png';
import styled from 'styled-components';
import single1 from '../components/images/single1.png';
import single2 from '../components/images/single2.png';
import bundle1 from '../components/images/bundle1.png';
import bundle2 from '../components/images/bundle2.png';
import benchtop1 from '../components/images/benchtop1.png';
import benchtop2 from '../components/images/benchtop2.png';
import skid1 from '../components/images/skid1.png';
import skid2 from '../components/images/skid2.png';
import plant1 from '../components/images/plant1.png';
import plant22 from '../components/images/plant22.jpg';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #141414;
  padding: 2rem;
  border-radius: 8px;
  color: #ffffff;
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 1rem;
    color: #25abe0;
    font-weight: 600;
    font-size: 1.7rem;
  }

  p {
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const RoadmapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const RoadmapTitle = styled.h2`
  font-size: 40px;
  color: #25abe0;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 500;
`;

const RoadmapDescription = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: -1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;
`;

const TimelineArrow = styled.div`
  position: absolute;
  top: 320px;
  left: 0;
  right: 0;
  height: 2px;
  background: #25abe0;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 12px solid #25abe0;
  }
`;

const TimelineSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding: 0 1rem;
  z-index: 2;
`;

const TimelineImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  filter: drop-shadow(0 0 0 rgba(37, 171, 224, 0));

  &:hover {
    filter: drop-shadow(0 0 10px rgba(37, 171, 224, 0.6)) drop-shadow(0 0 16px rgba(37, 171, 224, 0.3));
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(20, 20, 20, 0.95);
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  z-index: 1000;
  display: ${props => props.show ? 'block' : 'none'};
  color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: center;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: ${props => props.show ? 'block' : 'none'};
`;

const TimelineTitle = styled.h3`
  color: #25abe0;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  text-align: center;
  margin-top: 2.5rem;
  font-weight: 600;
`;

const TimelineYear = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const TimelineTRL = styled.p`
  color: #25abe0;
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  text-align: center;
  font-weight: 600;
  position: absolute;
  top: 310px;
  left: 50%;
  transform: translateX(-50%);
  background: #000000;
  padding: 0 0.5rem;
  z-index: 2;
`;

const TimelineSections = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

function Products() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <PageHero title={'Products'} backgroundImageUrl={productsBg}/>
      <div style={{ padding: 'var(--section-padding)', minHeight: '60vh', backgroundColor: '#000000' }}>
        <h2 style={{
          fontSize: '40px',
          color: '#25abe0',
          marginBottom: '1.2rem',
          textAlign: 'center',
          fontWeight: '500'
        }}>Value Proposition</h2>
        <CardContainer>
          <Card>
            <h3>Reduced Capital Risk</h3>
            <p>Simplified design reduces capital risk and extends life expectancy of plants due for decommissioning or repower.</p>
          </Card>
          <Card>
            <h3>Efficient & Cost-Effective</h3>
            <p>Modular skid systems, 400% lower CO<sub>2</sub> emissions, 300% lower lifetime cost.</p>
          </Card>
          <Card>
            <h3>Domestic Impact</h3>
            <p>Alchemity provides domestic jobs and energy security leveraging existing downstream processes.</p>
          </Card>
        </CardContainer>

        <RoadmapContainer>
          <RoadmapTitle>Product Development Roadmap</RoadmapTitle>
          <RoadmapDescription>
            Alchemity will scale to modular turnkey demo units for customer buy-in prior to large plant deployment.
          </RoadmapDescription>
          
          <TimelineContainer>
            <TimelineSections>
              <TimelineSection>
                <TimelineTRL>TRL 3</TimelineTRL>
                <TimelineImage 
                  image={single1}
                  onClick={() => handleImageClick({
                    image: single2,
                    title: 'Single Tube',
                    year: '2024',
                    description: 'Single 20 cm tube tests'
                  })}
                />
                <TimelineTitle>Single Tube</TimelineTitle>
                <TimelineYear>2024</TimelineYear>
              </TimelineSection>
              
              <TimelineSection>
                <TimelineTRL>TRL 4</TimelineTRL>
                <TimelineImage 
                  image={bundle1}
                  onClick={() => handleImageClick({
                    image: bundle2,
                    title: 'Tube Bundle',
                    year: '2025',
                    description: 'First working 4-tube bundle prototype to optimize reactor core conditions'
                  })}
                />
                <TimelineTitle>Tube Bundle</TimelineTitle>
                <TimelineYear>2025</TimelineYear>
              </TimelineSection>
              
              <TimelineSection>
                <TimelineTRL>TRL 5</TimelineTRL>
                <TimelineImage 
                  image={benchtop1}
                  onClick={() => handleImageClick({
                    image: benchtop2,
                    title: 'Benchtop System',
                    year: '2025-2026',
                    description: 'Second working prototype to optimize bundle integration with SS vessel and balance of plant (HEX, blower, pump, heaters, controls)'
                  })}
                />
                <TimelineTitle>Benchtop System</TimelineTitle>
                <TimelineYear>2025-2026</TimelineYear>
              </TimelineSection>
              
              <TimelineSection>
                <TimelineTRL>TRL 6/7</TimelineTRL>
                <TimelineImage 
                  image={skid1}
                  onClick={() => handleImageClick({
                    image: skid2,
                    title: 'Modular Skid System',
                    year: '2027+',
                    description: "20' Modular turnkey skid system capable of 1-5 TPD feed throughput leveraging core + SS reactor assembly with BOP; 1 m reactor tubes"
                  })}
                />
                <TimelineTitle>Modular Skid System</TimelineTitle>
                <TimelineYear>2027+</TimelineYear>
              </TimelineSection>
              
              <TimelineSection>
                <TimelineTRL>TRL 8/9</TimelineTRL>
                <TimelineImage 
                  image={plant1}
                  onClick={() => handleImageClick({
                    image: plant22,
                    title: 'Plant',
                    year: '2030+',
                    description: '30+ TPD natural gas throughput plant building block leveraging scaled core + SS reactor assembly validated in modular skids; 10 m reactor tubes'
                  })}
                />
                <TimelineTitle>Plant</TimelineTitle>
                <TimelineYear>2030+</TimelineYear>
              </TimelineSection>
            </TimelineSections>
            <TimelineArrow />
          </TimelineContainer>
        </RoadmapContainer>

        <Overlay show={selectedItem !== null} onClick={handleClosePopup} />
        <Popup show={selectedItem !== null}>
          {selectedItem && (
            <>
              <img src={selectedItem.image} alt={selectedItem.title} />
              <h3 style={{ color: '#25abe0', textAlign: 'center', marginBottom: '0.5rem' }}>
                {selectedItem.title} ({selectedItem.year})
              </h3>
              <p>{selectedItem.description}</p>
            </>
          )}
        </Popup>
      </div>
    </>
  );
}

export default Products; 