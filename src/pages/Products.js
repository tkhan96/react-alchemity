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
import alchemityLogo from '../components/images/alchemity_logo_w_text.png';
import extEval from '../components/images/ExtEval.png';
import productVideo from '../components/images/product.mp4';

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
  margin-top: 5rem;
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
  min-width: 200px;
  margin-top: 4.5rem;
`;

const TimelineImage = styled.div`
  width: 200px;
  height: 200px;
  background: #1a1a1a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(37, 171, 224, 0);
  margin: 0 auto;

  &:hover {
    box-shadow: 0 0 20px rgba(37, 171, 224, 0.6);
    transform: translateY(-5px);
  }

  span {
    color: #25abe0;
    font-size: 2rem;
    font-weight: 600;
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

  .image-container {
    display: flex;
    flex-direction: ${props => props.show && props.selectedItem?.title === 'Plant' ? 'column' : 'row'};
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1rem;
    align-items: center;
  }

  img {
    width: ${props => props.show && props.selectedItem?.images && props.selectedItem?.title !== 'Plant' ? '45%' : '60%'};
    height: auto;
    max-height: 300px;
    object-fit: contain;
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
  margin: 2rem 0 0.2rem 0;
  text-align: center;
  font-weight: 600;
`;

const TimelineYear = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin: 0.2rem 0 0 0;
  text-align: center;
`;

const TimelineSections = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const CompetitiveSection = styled.section`
  max-width: 1000px;
  margin: 0 auto 3rem auto;
  padding: 1.2rem;
  background: #000;
`;

const CompetitiveTitle = styled(RoadmapTitle)`
  margin-bottom: 7rem;
`;

const QuadrantContainer = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  background: #000;
  border-radius: 16px;
  margin-top: 2.2rem;
  overflow: visible;
`;

const Axis = styled.div`
  position: absolute;
  background: ${({ color }) => color};
  z-index: 1;
  ${({ orientation }) => {
    if (orientation === 'horizontal') {
      return 'top: 50%; left: 0; right: 0; height: 2px;';
    } else if (orientation === 'vertical') {
      return 'left: 50%; top: 0; bottom: 0; width: 2px;';
    } else if (orientation === 'vertical-negative') {
      return 'left: 50%; top: 50%; bottom: 0; width: 2px;';
    } else if (orientation === 'horizontal-positive') {
      return 'top: 50%; left: 50%; right: 0; height: 2px;';
    }
    return '';
  }}
`;

const AxisLabel = styled.div`
  position: absolute;
  color: ${({ color }) => color};
  font-size: 1.1rem;
  font-weight: 600;
  z-index: 2;
  text-align: center;
  ${({ position, offsetX = 0, offsetY = 0 }) => {
    switch (position) {
      case 'left-center':
        return `top: 50%; left: 0; transform: translate(-110%, -50%) translate(${offsetX}px, ${offsetY}px);`;
      case 'bottom-center':
        return `left: 50%; bottom: 0; transform: translate(-50%, 120%) translate(${offsetX}px, ${offsetY}px);`;
      case 'right-center':
        return `top: 50%; right: 0; transform: translate(110%, -50%) translate(${offsetX}px, ${offsetY}px);`;
      case 'top-center':
        return `left: 50%; top: 0; transform: translate(-50%, -120%) translate(${offsetX}px, ${offsetY}px);`;
      default:
        return '';
    }
  }}
`;

const Box = styled.div`
  position: absolute;
  min-width: 120px;
  max-width: 180px;
  padding: 0.6rem 0.7rem;
  background: #000;
  color: #fff;
  border: 2px solid #a16ffb;
  border-radius: 10px;
  font-size: 0.95rem;
  text-align: center;
  z-index: 3;
  cursor: pointer;
  transition: none;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
`;

const AlchemityBox = styled(Box)`
  min-width: 220px;
  max-width: 320px;
  padding: 1rem 1.2rem;
  border: 2px solid #25abe0;
  background: rgba(20,20,20,0.95);
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: #fff;
  box-shadow: 0 0 24px 2px rgba(37,171,224,0.25);
`;

const CompetitivePopup = styled.div`
  position: absolute;
  left: 50%;
  top: 110%;
  transform: translateX(-50%);
  background: #181818;
  color: #fff;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  font-size: 1.08rem;
  min-width: 260px;
  max-width: 380px;
  box-shadow: 0 12px 48px rgba(37,171,224,0.25);
  border: none;
  z-index: 100;
  pointer-events: none;
  text-align: center;
`;

function Products() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: null, y: null, label: null });

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  // Quadrant box data
  const boxes = [
    // Top left (lower cost, high CO2)
    { label: 'Alchemity', x: 86, y: 2, type: 'logo' },
    { label: 'Smaller GTL Facilities', x: 25, y: 32 },
    // Top right (lower cost, low CO2)
    { label: 'Biomass Gasification', x: 52, y: 54 },
    { label: 'Photo-catalytic Reactors', x: 85, y: 54 },
    { label: 'Pyrolysis', x: 95, y: 68 },
    { label: 'Electrolyzers with renewables', x: 73, y: 80 },
    { label: 'Plasma assisted reactions', x: 60, y: 67 },
    // Bottom left (higher cost, high CO2)
    { label: 'Electrolyzers on grid', x: -5, y: 61 },
    { label: 'Ethylene Steam Crackers', x: 10, y: 74 },
    { label: 'Steam Methane Reforming (SMRs)', x: 25, y: 86 },
  ];

  // Helper to get box by index
  const getBoxByIdx = idx => boxes[idx];

  return (
    <>
      <PageHero 
        backgroundVideoUrl={productVideo}
        title="Products"
      />
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

        {/* Competitive Analysis Section */}
        <CompetitiveSection>
          <CompetitiveTitle>Competitive Analysis</CompetitiveTitle>
          <QuadrantContainer>
            {/* Axes */}
            <Axis orientation="horizontal" color="#e53935" />
            <Axis orientation="vertical" color="#25abe0" />
            <Axis orientation="vertical-negative" color="#e53935" />
            <Axis orientation="horizontal-positive" color="#25abe0" />

            {/* Axis Labels */}
            <AxisLabel position="left-center" color="#e53935" offsetX={-2}>HIGH CO₂<br/>EMISSIONS</AxisLabel>
            <AxisLabel position="bottom-center" color="#e53935" offsetY={2}>HIGHER LIFETIME COST<br/>AND MASSIVE</AxisLabel>
            <AxisLabel position="right-center" color="#25abe0" offsetX={2}>LOW CO₂<br/>EMISSIONS</AxisLabel>
            <AxisLabel position="top-center" color="#25abe0" offsetY={-2}>LOWER LIFETIME COST<br/>AND MODULAR</AxisLabel>

            {/* Alchemity Box (no logo) */}
            <AlchemityBox style={{ left: '58%', top: '20%' }}>
              <span>
                Absence of direct competitors due to chemical flexibility and low-cost modular nature of <b>Alchemity's GTChem.</b>
              </span>
            </AlchemityBox>

            {/* Competitor Boxes */}
            {boxes.map((box, idx) => (
              box.type === 'logo' ? (
                <img
                  key={box.label}
                  src={alchemityLogo}
                  alt="Alchemity Logo"
                  style={{
                    position: 'absolute',
                    left: `${box.x}%`,
                    top: `${box.y}%`,
                    width: 200,
                    height: 100,
                    objectFit: 'contain',
                    background: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    pointerEvents: 'auto',
                  }}
                />
              ) : (
                <Box
                  key={box.label}
                  style={{
                    left: `${box.x}%`,
                    top: `${box.y}%`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: box.type === 'logo' ? 60 : undefined,
                    borderColor: [
                      'Electrolyzers on grid',
                      'Ethylene Steam Crackers',
                      'Steam Methane Reforming (SMRs)'
                    ].includes(box.label)
                      ? '#e53935'
                      : box.label === 'Smaller GTL Facilities'
                        ? '#a16ffb'
                        : undefined,
                  }}
                  onMouseEnter={() => {
                    setHoveredBox(idx);
                    setPopupPos({ x: box.x, y: box.y, label: box.label });
                  }}
                  onMouseLeave={() => {
                    setHoveredBox(null);
                    setPopupPos({ x: null, y: null, label: null });
                  }}
                >
                  {box.label}
                </Box>
              )
            ))}
            {/* Render popup absolutely at the end, above all boxes */}
            {hoveredBox !== null && popupPos.x !== null && popupPos.y !== null && (
              <CompetitivePopup style={{
                left: [
                  'Photo-catalytic Reactors',
                  'Pyrolysis'
                ].includes(popupPos.label)
                  ? `calc(${popupPos.x}% + 70px)`
                  : `calc(${popupPos.x}% + 100px)`,
                top: `calc(${popupPos.y}% - 20px)`,
                transform: 'translate(-50%, -100%)',
                position: 'absolute',
                zIndex: 1000,
                pointerEvents: 'none',
              }}>
                {popupPos.label === 'Electrolyzers on grid' ? (
                  <span>
                    Electrolyzers on grid produce 22 kg CO<sub>2</sub>/kg H<sub>2</sub> due to their energy intensive process (~60 kWh/kg at a system level).
                  </span>
                ) : (
                  'Placeholder Text'
                )}
              </CompetitivePopup>
            )}
          </QuadrantContainer>
        </CompetitiveSection>

        <RoadmapContainer>
          <RoadmapTitle>Product Development Roadmap</RoadmapTitle>
          <RoadmapDescription>
            Alchemity will scale to modular turnkey demo units for customer buy-in prior to large plant deployment.
          </RoadmapDescription>
          
          <TimelineContainer>
            <TimelineSections>
              <TimelineSection>
                <TimelineImage 
                  onClick={() => handleImageClick({
                    image: single2,
                    title: 'Single Tube',
                    year: '2024',
                    description: 'Single 20 cm tube tests'
                  })}
                >
                  <span>TRL 3</span>
                </TimelineImage>
                <TimelineTitle>Single Tube</TimelineTitle>
                <TimelineYear>2024</TimelineYear>
              </TimelineSection>
              
              <TimelineSection>
                <TimelineImage 
                  onClick={() => handleImageClick({
                    image: extEval,
                    title: 'Tube Bundle',
                    year: '2025',
                    description: 'First working 4-tube bundle prototype to optimize reactor core conditions'
                  })}
                >
                  <span>TRL 4</span>
                </TimelineImage>
                <TimelineTitle>Tube Bundle</TimelineTitle>
                <TimelineYear>2025</TimelineYear>
              </TimelineSection>
              
              <TimelineSection>
                <TimelineImage 
                  onClick={() => handleImageClick({
                    image: benchtop1,
                    title: 'Benchtop System',
                    year: '2025-2026',
                    description: 'Second working prototype to optimize bundle integration with SS vessel and balance of plant (HEX, blower, pump, heaters, controls)'
                  })}
                >
                  <span>TRL 5</span>
                </TimelineImage>
                <TimelineTitle>Benchtop System</TimelineTitle>
                <TimelineYear>2025-2026</TimelineYear>
              </TimelineSection>
              
              <TimelineSection>
                <TimelineImage 
                  onClick={() => handleImageClick({
                    images: [skid1, skid2],
                    title: 'Modular Skid System',
                    year: '2027+',
                    description: "20' Modular turnkey skid system capable of 1-5 TPD feed throughput leveraging core + SS reactor assembly with BOP; 1 m reactor tubes"
                  })}
                >
                  <span>TRL 6/7</span>
                </TimelineImage>
                <TimelineTitle>Modular Skid System</TimelineTitle>
                <TimelineYear>2027+</TimelineYear>
              </TimelineSection>
              
              <TimelineSection>
                <TimelineImage 
                  onClick={() => handleImageClick({
                    images: [plant1, plant22],
                    title: 'Plant',
                    year: '2030+',
                    description: '30+ TPD natural gas throughput plant building block leveraging scaled core + SS reactor assembly validated in modular skids; 10 m reactor tubes'
                  })}
                >
                  <span>TRL 8/9</span>
                </TimelineImage>
                <TimelineTitle>Plant</TimelineTitle>
                <TimelineYear>2030+</TimelineYear>
              </TimelineSection>
            </TimelineSections>
            <TimelineArrow />
          </TimelineContainer>
        </RoadmapContainer>

        <Overlay show={selectedItem !== null} onClick={handleClosePopup} />
        <Popup show={selectedItem !== null} selectedItem={selectedItem}>
          {selectedItem && (
            <>
              <div className="image-container">
                {selectedItem.images ? (
                  selectedItem.images.map((image, index) => (
                    <img key={index} src={image} alt={`${selectedItem.title} ${index + 1}`} />
                  ))
                ) : (
                  <img src={selectedItem.image} alt={selectedItem.title} />
                )}
              </div>
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