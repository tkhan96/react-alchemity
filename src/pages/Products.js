import React, { useState, useRef, useEffect } from 'react';
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
import productVideo from '../components/images/producthero.mov';
import placeholder from '../components/images/AI.png';
import plantImage from '../components/images/30tpd.jpg';

import gtchem11Video from '../components/images/gtchem11.mov';
import gtchem12Video from '../components/images/gtchem12.mov';
import gtchem21Image from '../components/images/gtchem21.png';
import gtchem22Image from '../components/images/gtchem22.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import companim from '../components/images/companim.mov';
import { FaArrowRight, FaShieldAlt, FaChartLine, FaIndustry, FaDollarSign } from 'react-icons/fa';
import Modal from '../components/Modal';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #141414;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-radius: 8px;
  color: #ffffff;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(37, 171, 224, 0.6);
  }

  .icon {
    font-size: 2.5rem;
    color: #25abe0;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    color: #25abe0;
    font-weight: 600;
    font-size: 1.7rem;
  }

  p {
    line-height: 1.6;
    font-size: 1.4rem;
    margin-bottom: 0;
  }
`;

const RoadmapContainer = styled.div`
  max-width: 1200px;
  margin: -4rem auto 3rem auto;
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
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const ClickToLearnMore = styled.p`
  color: #25abe0;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: -3.5rem;
`;

const HoverDescription = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
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

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: #25abe0;
    border-radius: 50%;
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
    margin-bottom: 0.5rem;
    align-items: center;
  }

  img {
    width: ${props => props.show && props.selectedItem?.images && props.selectedItem?.title !== 'Plant' ? '45%' : '60%'};
    height: auto;
    max-height: 350px;
    object-fit: contain;
  }

  h3 {
    color: #25abe0;
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
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
  max-width: 1200px;
  margin: 0 auto 1rem auto;
  padding: 2rem;
  background: #000;
`;

const CompetitiveTitle = styled.h2`
  font-size: 40px;
  color: #25abe0;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 500;
`;

const CompetitiveDescription = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CompetitiveHoverText = styled.p`
  color: #25abe0;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: -3.5rem;
`;

const QuadrantContainer = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  background: #000;
  border-radius: 16px;
  margin-top: 10rem;
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

const PlantInfoSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 1rem;
  background: #000;
`;

const PlantInfoTitle = styled.h2`
  font-size: 40px;
  color: #25abe0;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 500;
`;

const PlantInfoDescription = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 4rem;
`;

const PlantImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Hotspot = styled(motion.div)`
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  pointer-events: auto;
`;

const HotspotDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #25abe0;
  position: relative;
  box-shadow: 0 0 0 4px rgba(37, 171, 224, 0.3);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 171, 224, 0.6);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(37, 171, 224, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 171, 224, 0);
    }
  }
`;

const HotspotTooltip = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #25abe0;
  min-width: 120px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 10;
  pointer-events: none;
  text-align: center;

  h4 {
    color: #25abe0;
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
  }

  ${Hotspot}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const AISection = styled.section`
  max-width: 1200px;
  margin: 0 auto 6rem auto;
  padding: 1rem;
  background: #000;
`;

const AITitle = styled.h2`
  font-size: 40px;
  color: #25abe0;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 500;
`;

const AIDescription = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const AIImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 8px;
`;

const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background-color: #25abe0;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  width: fit-content;
  min-width: 200px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover {
    background-color: #0077b5;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  &:hover::before {
    left: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  grid-column: 1 / -1;
`;

const DescriptionText = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  text-align: center;
  margin: -2rem auto 3rem auto;
  line-height: 1.6;
`;

const Subtitle = styled.h3`
  color: #25abe0;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SectionSpacing = styled.div`
  margin: 4rem auto;
  max-width: 1200px;
  padding: 0 2rem;
`;

function Products() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: null, y: null, label: null });
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [gtchem1Popup, setGtchem1Popup] = useState(false);
  const [gtchem2Popup, setGtchem2Popup] = useState(false);
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const heroVideoRef = useRef(null);
  const gtchem11VideoRef = useRef(null);
  const gtchem12VideoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play();
          video.addEventListener('timeupdate', () => {
            if (video.currentTime >= video.duration - 0.1) {
              video.pause();
            }
          });
        }
      });
    }, { threshold: 0.5 });

    if (heroVideoRef.current) observer.observe(heroVideoRef.current);
    if (gtchem11VideoRef.current) observer.observe(gtchem11VideoRef.current);
    if (gtchem12VideoRef.current) observer.observe(gtchem12VideoRef.current);

    return () => {
      if (heroVideoRef.current) observer.unobserve(heroVideoRef.current);
      if (gtchem11VideoRef.current) observer.unobserve(gtchem11VideoRef.current);
      if (gtchem12VideoRef.current) observer.unobserve(gtchem12VideoRef.current);
    };
  }, []);

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const hotspotDetails = {
    0: {
      title: "Feedstock",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    1: {
      title: "GTChem Skid",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    2: {
      title: "Liquid Fuel Tank",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    3: {
      title: "Station",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    4: {
      title: "Pipe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
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

  // Add your hover text here
  const hoverTextData = {
    'Electrolyzers on grid': 'Electrolyzers on grid produce ~22 kg CO₂/kg H₂ due to the energy intensive process to split water and operate balance of plant (60-65 kWh/kg at a system level).',
    'Ethylene Steam Crackers': 'Add text here',
    'Steam Methane Reforming (SMRs)': 'Add text here',
    'Smaller GTL Facilities': 'Add text here',
    'Biomass Gasification': 'Add text here',
    'Photo-catalytic Reactors': 'Add text here',
    'Pyrolysis': 'Add text here',
    'Electrolyzers with renewables': 'Add text here',
    'Plasma assisted reactions': 'Add text here'
  };

  // Helper to get box by index
  const getBoxByIdx = idx => boxes[idx];

  const handleHotspotClick = (index) => {
    setSelectedHotspot(selectedHotspot === index ? null : index);
  };

  return (
    <>
      <PageHero 
        backgroundVideoUrl={productVideo}
        title="Products"
        videoRef={heroVideoRef}
      />
      <div style={{ padding: 'var(--section-padding)', minHeight: '60vh', backgroundColor: '#000000' }}>
        <SectionSpacing style={{ marginTop: '1rem' }}>
          <h2 style={{
            fontSize: '40px',
            color: '#25abe0',
            marginBottom: '0.5rem',
            textAlign: 'center',
            fontWeight: '500'
          }}>Value Proposition</h2>
          <CardContainer>
            <Card>
              <FaShieldAlt className="icon" />
              <h3>Reduced Capital Risk</h3>
              <p>Simplified design reduces capital risk and extends life expectancy of plants due for decommissioning or repower.</p>
            </Card>
            <Card>
              <FaDollarSign className="icon" />
              <h3>Efficient & Cost-Effective</h3>
              <p>Modular skid systems, 400% lower CO<sub>2</sub> emissions, 300% lower lifetime cost. Producing gaseous and liquid chemicals.</p>
            </Card>
            <Card>
              <FaChartLine className="icon" />
              <h3>Domestic Impact</h3>
              <p>Enables growth of domestic workforce and provides energy security leveraging existing downstream processes.</p>
            </Card>
          </CardContainer>
        </SectionSpacing>

        <SectionSpacing>
          <h2 style={{
            fontSize: '40px',
            color: '#25abe0',
            marginBottom: '2.5rem',
            textAlign: 'center',
            fontWeight: '500'
          }}>Gas to Chemicals (GTChem) Modular System Offerings</h2>
          
          <DescriptionText style={{ marginBottom: '0rem' }}>
            Placeholder Text
          </DescriptionText>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem'
          }}>
            {/* Left Side */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                marginBottom: '1rem',
                marginTop: '50px',
                height: '400px',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#000000'
              }}>
                <video 
                  ref={gtchem11VideoRef}
                  src={gtchem11Video}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '20px'
                  }}
                  muted
                  playsInline
                />
              </div>
              <Subtitle>GTChem-1</Subtitle>
              <p style={{ 
                color: '#ffffff', 
                fontSize: '1.35rem',
                marginBottom: '1rem',
                lineHeight: '1.6',
                flex: 1
              }}>
                GTChem-1 is Alchemity's first flagship product—a modular, turnkey skid-mounted platform designed to produce clean, drop-in chemicals and fuels with zero CO₂ emissions. GTChem-1 enables flexible deployment through a series of integrated modular skids, making it ideal for both greenfield and brownfield installations producing chemicals at quantities between 1 to 30 tons per day (TPD).
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                <button 
                  onClick={() => setGtchem1Popup(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#25abe0',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '2px solid transparent',
                    cursor: 'pointer',
                    width: 'fit-content',
                    minWidth: '200px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0077b5';
                    e.target.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.4)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.backgroundImage = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)';
                    e.target.style.backgroundPosition = '200% center';
                    e.target.style.backgroundSize = '200% 100%';
                    e.target.style.animation = 'gradientMove 1.5s ease infinite';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#25abe0';
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.backgroundImage = 'none';
                    e.target.style.animation = 'none';
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                marginBottom: '-2.1rem',
                height: '500px',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={gtchem21Image}
                  style={{ 
                    width: '90%',
                    height: '90%',
                    objectFit: 'contain',
                    borderRadius: '20px',
                    backgroundColor: 'transparent'
                  }}
                  alt="GTChem-2"
                />
              </div>
              <Subtitle>GTChem-2</Subtitle>
              <p style={{ 
                color: '#ffffff', 
                fontSize: '1.35rem',
                marginBottom: '1rem',
                lineHeight: '1.6',
                flex: 1
              }}>
                GTChem-2: Scaled Platform for Large-Volume, Zero CO₂ Emissions Chemical Production.
                GTChem-2 is designed for high-throughput operation of 5+ TPD per skid. As a building block for 100+ TPD production facilities, GTChem-2 enables deployment for all target markets. 
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                <button 
                  onClick={() => setGtchem2Popup(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#25abe0',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '2px solid transparent',
                    cursor: 'pointer',
                    width: 'fit-content',
                    minWidth: '200px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0077b5';
                    e.target.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.4)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.backgroundImage = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)';
                    e.target.style.backgroundPosition = '200% center';
                    e.target.style.backgroundSize = '200% 100%';
                    e.target.style.animation = 'gradientMove 1.5s ease infinite';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#25abe0';
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.backgroundImage = 'none';
                    e.target.style.animation = 'none';
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SectionSpacing>

        <SectionSpacing>
          <AITitle>Alchemity's Generative AI</AITitle>
          <AIImage 
            src={placeholder} 
            alt="AI Technology" 
          />
          <AIDescription>
            Tens of Thousands Variables Screened in Minutes to Project the Lowest Cost of Produced chemicals (LCOChem) while Simulating the Lowest Lifetime Cost of Plants (Capex and Opex).
          </AIDescription>
          <AIDescription>
            Ability to predict optimal system operation (and downtime/maintenance) to meet customer offtake requirements whilst minimizing the LCOChem.
          </AIDescription>
        </SectionSpacing>

        <SectionSpacing>
          <PlantInfoTitle>GTChem Facility at Scale</PlantInfoTitle>
          <PlantInfoDescription>
            Transforming complex chemical operations with modular solutions that reduce costs, lower emissions, and strengthen domestic energy security.
          </PlantInfoDescription>
          <PlantInfoDescription>
            Placeholder Text
          </PlantInfoDescription>
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageContainer>
              <PlantImage src={plantImage} alt="3D Design of our Chemical Plant" />
              <ImageOverlay>
                <Hotspot
                  style={{ bottom: '45%', left: '32%' }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleHotspotClick(0)}
                >
                  <HotspotDot />
                  <HotspotTooltip>
                    <h4>{hotspotDetails[0].title}</h4>
                  </HotspotTooltip>
                </Hotspot>
                <Hotspot
                  style={{ bottom: '38%', left: '18%' }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleHotspotClick(3)}
                >
                  <HotspotDot />
                  <HotspotTooltip>
                    <h4>{hotspotDetails[3].title}</h4>
                  </HotspotTooltip>
                </Hotspot>
                <Hotspot
                  style={{ bottom: '52%', left: '20%' }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleHotspotClick(4)}
                >
                  <HotspotDot />
                  <HotspotTooltip>
                    <h4>{hotspotDetails[4].title}</h4>
                  </HotspotTooltip>
                </Hotspot>
                <Hotspot
                  style={{ top: '40%', left: '75%' }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleHotspotClick(1)}
                >
                  <HotspotDot />
                  <HotspotTooltip>
                    <h4>{hotspotDetails[1].title}</h4>
                  </HotspotTooltip>
                </Hotspot>
                <Hotspot
                  style={{ top: '70%', left: '40%' }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleHotspotClick(2)}
                >
                  <HotspotDot />
                  <HotspotTooltip>
                    <h4>{hotspotDetails[2].title}</h4>
                  </HotspotTooltip>
                </Hotspot>
              </ImageOverlay>
            </ImageContainer>
          </motion.div>
        </SectionSpacing>

        <SectionSpacing>
          <RoadmapTitle>Product Development Roadmap</RoadmapTitle>
          <RoadmapDescription>
            Deploying modular turnkey systems followed by large integrated facilities.
          </RoadmapDescription>
          <ClickToLearnMore>Click on each TRL card to learn more.</ClickToLearnMore>
          
          <TimelineContainer>
            <TimelineSections>
              <TimelineSection>
                <TimelineImage 
                  onClick={() => handleImageClick({
                    image: single2,
                    title: 'Produced Reactor Tubes',
                    year: '2024',
                    description: 'Batches of 20 cm long reactor membranes.'
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
                    description: 'First working 4-tube bundle prototype to optimize reactor core conditions.'
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
                    description: 'Second working prototype to optimize reactor bundle integration with steel vessel and BOP.'
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
                    description: "20' modular turnkey skid system producing clean drop-in chemicals and fuels, enabling 1-30 tons per day facilities."
                  })}
                >
                  <span>TRL 6/7</span>
                </TimelineImage>
                <TimelineTitle>Modular Skids</TimelineTitle>
                <TimelineYear>2027+</TimelineYear>
              </TimelineSection>
              
              <TimelineSection>
                <TimelineImage 
                  onClick={() => handleImageClick({
                    images: [plant1, plant22],
                    title: 'Plant',
                    year: '2030+',
                    description: 'Large-scale plant building block to enable 100+ ton per day facilities.'
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
        </SectionSpacing>

        <SectionSpacing>
          <CompetitiveTitle>Competitive Analysis</CompetitiveTitle>
          <CompetitiveDescription>
            Autothermal operation (reactor generates its own heat), low energy consumption, chemical production flexibility, and modular design provide unique value proposition.
          </CompetitiveDescription>
          <CompetitiveHoverText>
            Hover to learn more
          </CompetitiveHoverText>
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
                Absence of direct competitors due to chemical flexibility and low-cost modular nature of <b>Alchemity's Platform System.</b>
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
                <span>
                  {hoverTextData[popupPos.label] || 'Placeholder Text'}
                </span>
              </CompetitivePopup>
            )}
          </QuadrantContainer>
        </SectionSpacing>

        <Overlay show={selectedItem !== null} onClick={handleClosePopup} />
        <Modal
          show={selectedItem !== null}
          onClose={handleClosePopup}
          title={selectedItem ? `${selectedItem.title} (${selectedItem.year})` : ''}
          size="xlarge"
          showCloseButton={true}
        >
          <div style={{ 
            marginBottom: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}>
            <div style={{ 
              display: 'flex',
              flexDirection: selectedItem?.title === 'Plant' ? 'column' : (selectedItem?.images ? 'row' : 'column'),
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '0rem',
              alignItems: 'center',
              width: '100%'
            }}>
              {selectedItem?.images ? (
                selectedItem.images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`${selectedItem.title} ${index + 1}`}
                    style={{
                      width: selectedItem?.title === 'Plant' ? '60%' : '45%',
                      maxHeight: '350px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      margin: '0 auto'
                    }}
                  />
                ))
              ) : (
                <img 
                  src={selectedItem?.image} 
                  alt={selectedItem?.title}
                  style={{
                    width: '60%',
                    maxHeight: '350px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    margin: '0 auto'
                  }}
                />
              )}
            </div>
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <p style={{ 
                color: '#ffffff', 
                fontSize: '1.4rem',
                lineHeight: '1.6',
                marginBottom: '0',
                textAlign: 'center',
                maxWidth: '800px',
                width: '100%'
              }}>
                {selectedItem?.description}
              </p>
            </div>
          </div>
        </Modal>

        {selectedHotspot !== null && (
          <Modal
            show={selectedHotspot !== null}
            onClose={() => setSelectedHotspot(null)}
            title={hotspotDetails[selectedHotspot].title}
            size="medium"
            showCloseButton={true}
          >
            <div style={{
              color: '#ffffff',
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '0',
              paddingLeft: '0',
              listStyle: 'none',
            }}>
              {hotspotDetails[selectedHotspot].description}
            </div>
          </Modal>
        )}

        {/* GTChem-1 Popup */}
        <Modal
          show={gtchem1Popup}
          onClose={() => {
            setGtchem1Popup(false);
            if (gtchem12VideoRef.current) {
              gtchem12VideoRef.current.pause();
              gtchem12VideoRef.current.currentTime = 0;
            }
          }}
          title="GTChem-1 Details"
          size="xlarge"
          showCloseButton={true}
        >
          <div style={{ marginBottom: '0' }}>
            <video 
              ref={gtchem12VideoRef}
              src={gtchem12Video}
              style={{ 
                width: '100%',
                maxHeight: '350px',
                objectFit: 'contain',
                borderRadius: '8px',
                marginBottom: '-1rem'
              }}
              muted
              playsInline
              autoPlay
              onEnded={(e) => {
                e.target.pause();
                e.target.currentTime = e.target.duration - 0.1;
              }}
            />
            <p style={{ 
              color: '#ffffff', 
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              The platform delivers high operational efficiency with up to 95% system availability and is engineered with multiple layers of safety and redundancy. GTChem-1 offers product flexibility, low maintenance requirements, and streamlined module augmentation to meet evolving production needs.
              Alchemity is now accepting orders for GTChem-1.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ContactButton onClick={() => window.location.href = '/contact'}>
                Place Order
                <FaArrowRight style={{ fontSize: '0.9rem', transition: 'transform 0.3s ease' }} />
              </ContactButton>
            </div>
          </div>
        </Modal>

        {/* GTChem-2 Popup */}
        <Modal
          show={gtchem2Popup}
          onClose={() => setGtchem2Popup(false)}
          title="GTChem-2 Details"
          size="xlarge"
          showCloseButton={true}
        >
          <div style={{ marginBottom: '0' }}>
            <img 
              src={gtchem22Image}
              style={{ 
                width: '100%',
                maxHeight: '350px',
                objectFit: 'contain',
                borderRadius: '8px',
                marginBottom: '-1rem'
              }}
              alt="GTChem-2 Details"
            />
            <p style={{ 
              color: '#ffffff', 
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Engineered for industrial-scale deployment, the GTChem-2 platform maintains 95% system availability and incorporates multiple layers of safety and operational redundancy. It is optimized for seamless installation at both brownfield and greenfield sites, supporting flexible and efficient plant development.
              Alchemity is now accepting capacity reservation orders for GTChem-2.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ContactButton onClick={() => window.location.href = '/contact'}>
                Capacity Reservation Orders
                <FaArrowRight style={{ fontSize: '0.9rem', transition: 'transform 0.3s ease' }} />
              </ContactButton>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Products; 