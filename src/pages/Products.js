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
import styles from './Products.module.css';

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
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (min-width: 2560px) {
    max-width: 2000px;
    gap: 3rem;
  }
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
    text-align: center;
  }

  p {
    line-height: 1.6;
    font-size: 1.4rem;
    margin-bottom: 0;
    height: calc(1.6em * 5);
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left;
  }
`;

const RoadmapContainer = styled.div`
  max-width: 1200px;
  margin: -1rem auto 0 auto;
  padding: 2rem;
  
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    padding: 2rem 0;
    overflow: hidden;
  }
  
  @media (min-width: 1025px) and (max-width: 1440px) {
    max-width: 1200px;
    padding: 2rem 3rem;
  }
  
  @media (min-width: 1441px) and (max-width: 1920px) {
    max-width: 1400px;
    padding: 2rem 2rem;
  }
  
  @media (min-width: 1921px) and (max-width: 2560px) {
    max-width: 1600px;
    padding: 2rem 1rem;
  }
  
  @media (min-width: 2561px) {
    max-width: 1800px;
    padding: 2rem 0;
  }
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
  margin-top: 2rem;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    overflow-x: auto;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 1rem 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TimelineSections = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 4rem auto 0 auto;
  
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 1rem;
    justify-content: flex-start;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
    gap: 0;
    justify-content: center;
  }
  
  @media (min-width: 1025px) and (max-width: 1440px) {
    gap: 0.5rem;
    max-width: 1100px;
  }
  
  @media (min-width: 1441px) and (max-width: 1920px) {
    gap: 1rem;
    max-width: 1300px;
  }
  
  @media (min-width: 1921px) {
    gap: 1.5rem;
    max-width: 1600px;
  }
`;

const TimelineArrow = styled.div`
  position: relative;
  height: 2px;
  background: #25abe0;
  z-index: 1;
  margin: 1rem auto;
  width: 100%;

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
  
  @media (max-width: 768px) {
    min-width: 150px;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    min-width: 110px;
    width: auto;
    padding: 0;
  }
  
  @media (min-width: 1025px) and (max-width: 1440px) {
    min-width: 180px;
    width: 18%;
    padding: 0 0.5rem;
  }
  
  @media (min-width: 1441px) and (max-width: 1920px) {
    min-width: 220px;
    width: 20%;
    padding: 0 0.5rem;
  }
  
  @media (min-width: 1921px) {
    min-width: 250px;
    width: 20%;
    padding: 0 0.5rem;
  }
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
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 110px;
    height: 110px;
  }
  
  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 180px;
    height: 180px;
  }
  
  @media (min-width: 1441px) and (max-width: 1920px) {
    width: 220px;
    height: 220px;
  }
  
  @media (min-width: 1921px) {
    width: 250px;
    height: 250px;
  }

  span {
    color: #25abe0;
    font-size: 2rem;
    font-weight: 600;
    
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 1.4rem;
    }
    
    @media (min-width: 1025px) and (max-width: 1440px) {
      font-size: 2rem;
    }
    
    @media (min-width: 1441px) and (max-width: 1920px) {
      font-size: 2.2rem;
    }
    
    @media (min-width: 1921px) {
      font-size: 2.5rem;
    }
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
  
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1rem;
    margin: 1.5rem 0 0.2rem 0;
  }
`;

const TimelineYear = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin: 0.2rem 0 0 0;
  text-align: center;
  
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const CompetitiveSection = styled.section`
  max-width: 1000px;
  margin: 0 auto 1rem auto;
  padding: 2rem;
  background: #000;
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 90%;
    padding: 1rem;
    width: 90vw;
    overflow: hidden;
  }
  
  @media (min-width: 1025px) and (max-width: 1440px) {
    max-width: 95%;
  }
  
  @media (min-width: 2560px) {
    max-width: 1800px;
  }
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
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: -3.5rem;
  
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: -2rem;
  }
`;

const QuadrantContainer = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  background: #000;
  border-radius: 16px;
  margin-top: 10rem;
  overflow: visible;
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 550px;
    transform: scale(0.85);
    transform-origin: center center;
    margin-top: 7rem;
    width: 100%;
  }
  
  @media (min-width: 2560px) {
    height: 800px;
  }
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
  
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.9rem;
    ${({ position }) => {
      switch (position) {
        case 'left-center':
          return 'transform: translate(-80%, -50%);';
        case 'right-center':
          return 'transform: translate(80%, -50%);';
        case 'bottom-center':
          return 'transform: translate(-50%, 80%);';
        case 'top-center':
          return 'transform: translate(-50%, -80%);';
        default:
          return '';
      }
    }}
  }
`;

const Box = styled.div`
  position: absolute;
  min-width: 120px;
  max-width: 180px;
  padding: 0.6rem 0.7rem;
  background: #000;
  color: #fff;
  border: 2px solid #FFFF00;
  border-radius: 10px;
  font-size: 0.95rem;
  text-align: center;
  z-index: 3;
  cursor: pointer;
  transition: none;
  box-shadow: none;
  
  @media (max-width: 768px) {
    min-width: 100px;
    max-width: 150px;
    padding: 0.4rem 0.5rem;
    font-size: 0.85rem;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    min-width: 100px;
    max-width: 150px;
    font-size: 0.85rem;
    padding: 0.4rem 0.5rem;
  }
  
  @media (min-width: 2560px) {
    min-width: 150px;
    max-width: 220px;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
  }
  
  &:hover {
    box-shadow: none;
  }
`;

const AlchemityText = styled.div`
  position: absolute;
  left: 54%;
  top: 18%;
  min-width: 300px;
  max-width: 400px;
  padding: 1rem 1.2rem;
  background: transparent;
  color: #25abe0;
  font-size: 1.4rem;
  font-family: 'Aptos', sans-serif;
  text-align: center;
  z-index: 3;
  
  @media (max-width: 768px) {
    min-width: 250px;
    max-width: 320px;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    min-width: 280px;
    max-width: 360px;
    padding: 0.7rem 1rem;
    font-size: 1.3rem;
  }
  
  @media (min-width: 2560px) {
    min-width: 400px;
    max-width: 500px;
    padding: 1.5rem 1.8rem;
    font-size: 1.8rem;
  }
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
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;

const AIImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    max-width: 90%;
    margin: 1rem auto;
  }
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
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: -1rem auto 2rem auto;
  }
  
  @media (min-width: 2560px) {
    font-size: 2rem;
  }
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
  
  @media (max-width: 768px) {
    margin: 3rem auto;
    padding: 0 1.5rem;
  }
  
  @media (min-width: 2560px) {
    max-width: 2000px;
    margin: 6rem auto;
  }
`;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const timelineItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

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
  // Animation refs for sections
  const [valueRef, valueInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [gtchemRef, gtchemInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [facilityRef, facilityInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aiRef, aiInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [roadmapRef, roadmapInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [competitiveRef, competitiveInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
    { label: 'Smaller GTL Facilities', x: 30, y: 32 },
    // Top right (lower cost, low CO2)
    { label: 'Biomass Gasification', x: 52, y: 54 },
    { label: 'Photo-catalytic Reactors', x: 85, y: 54 },
    { label: 'Pyrolysis', x: 90, y: 68 },
    { label: 'Electrolyzers with renewables', x: 78, y: 78 },
    { label: 'Plasma assisted reactions', x: 55, y: 65 },
    // Bottom left (higher cost, high CO2)
    { label: 'Electrolyzers on grid', x: -5, y: 90 },
    { label: 'Ethylene Steam Crackers', x: 10, y: 74 },
    { label: 'Steam Methane Reforming (SMRs)', x: 25, y: 84 },
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

  const GTChem1Popup = () => (
    <Modal 
      show={gtchem1Popup} 
      onClose={() => setGtchem1Popup(false)}
      title="GTChem Products"
      showCloseButton={true}
      size="xxlarge"
    >
      <div style={{ 
        padding: '0.5rem 1.5rem 0.5rem 1.5rem', 
        color: '#ffffff',
        maxHeight: '70vh',
        overflowY: 'auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'start'
        }}>
          <div>
            <h3 style={{ color: '#25abe0', fontSize: '1.4rem', marginBottom: '1rem', marginTop: '0' }}>GTChem-1</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.5', marginBottom: '1rem' }}>
              GTChem-1 is Alchemity's first flagship product—a modular, turnkey skid-mounted platform designed to produce clean, drop-in chemicals and fuels with zero CO₂ emissions. GTChem-1 enables flexible deployment through a series of integrated modular skids, making it ideal for both greenfield and brownfield installations producing chemicals at quantities between 1 to 30 tons per day (TPD).
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.5', marginBottom: '1rem' }}>
              The platform delivers high operational efficiency with up to 95% system availability and is engineered with multiple layers of safety and redundancy. GTChem-1 offers product flexibility, low maintenance requirements, and streamlined module augmentation to meet evolving production needs. Alchemity is now accepting orders for GTChem-1.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#25abe0', fontSize: '1.4rem', marginBottom: '1rem', marginTop: '0' }}>GTChem-2</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.5', marginBottom: '1rem' }}>
              GTChem-2: Scaled Platform for Large-Volume, Zero CO₂ Emissions Chemical Production. GTChem-2 is designed for high-throughput operation of 5+ TPD per skid. As a building block for 100+ TPD production facilities, GTChem-2 enables deployment for all target markets.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.5', marginBottom: '1rem' }}>
              Engineered for industrial-scale deployment, the GTChem-2 platform maintains 95% system availability and incorporates multiple layers of safety and operational redundancy. It is optimized for seamless installation at both brownfield and greenfield sites, supporting flexible and efficient plant development. Alchemity is now accepting capacity reservation orders for GTChem-2.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button 
            onClick={() => window.location.href = '/contact'}
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
            Pre-Order Now
          </button>
        </div>
      </div>
    </Modal>
  );

  // Responsive UI for GTChem videos
  const videoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className={styles.responsiveContainer}>
      <PageHero 
        backgroundVideoUrl={productVideo}
        title="Products"
        videoRef={heroVideoRef}
      />
      <div style={{ padding: 'var(--section-padding)', minHeight: '60vh', backgroundColor: '#000000' }}>
        <motion.div ref={valueRef} variants={sectionVariants} initial="hidden" animate={valueInView ? "visible" : "hidden"}>
          <SectionSpacing style={{ marginTop: '1rem' }}>
            <h2 style={{
              fontSize: '40px',
              color: '#25abe0',
              marginBottom: '0.5rem',
              textAlign: 'center',
              fontWeight: '500'
            }}>Value Proposition</h2>
            <div className={styles.valuePropositionContainer}>
              {[
                { icon: <FaShieldAlt className="icon" />, title:  "Reduced Capital Investment", description: "Simplified design reduces capital risk and extends life expectancy of plants due for decommissioning or repower." },
                { icon: <FaDollarSign className="icon" />, title: "Highly Efficient & Cost-Effective", description: "Modular skid systems, 400% lower CO₂ emissions, 300% lower lifetime cost. Producing gaseous and liquid chemicals." },
                { icon: <FaChartLine className="icon" />, title:  "Increased Domestic Growth", description: "Enables growth of domestic workforce and provides energy security leveraging existing downstream processes." }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={valueInView ? "visible" : "hidden"}
                >
                  <Card>
                    {card.icon}
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </SectionSpacing>
        </motion.div>
        <motion.div ref={gtchemRef} variants={sectionVariants} initial="hidden" animate={gtchemInView ? "visible" : "hidden"}>
          <SectionSpacing>
            <h2 style={{
              fontSize: '40px',
              color: '#25abe0',
              marginBottom: '2.5rem',
              textAlign: 'center',
              fontWeight: '500'
            }} className={styles.sectionTitle}>Gas to Chemicals (GTChem) Modular System Offerings</h2>
            
            <DescriptionText style={{ marginBottom: '0rem' }}>
              Placeholder Text
            </DescriptionText>

            <div className={styles.gtchemContainer}>
              {/* Left Side */}
              <div className={styles.gtchemLeftSide} style={videoContainerStyle}>
                <div className={styles.videoContainer} style={{ 
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
                    className={styles.gtchemVideo}
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className={styles.gtchemRightSide} style={videoContainerStyle}>
                <div className={styles.videoContainer} style={{ 
                  marginBottom: '1rem',
                  marginTop: '11px',
                  height: '450px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#000000'
                }}>
                  <video 
                    ref={gtchem12VideoRef}
                    src={gtchem12Video}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '20px'
                    }}
                    muted
                    playsInline
                    className={styles.gtchemVideo}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
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
                className={styles.preOrderButton}
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
                Pre-Order Now
              </button>
            </div>
          </SectionSpacing>
        </motion.div>

        <motion.div ref={facilityRef} variants={sectionVariants} initial="hidden" animate={facilityInView ? "visible" : "hidden"}>
          <SectionSpacing style={{ marginTop: '6rem' }}>
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
              <ImageContainer className={styles.plantImageContainer}>
                <PlantImage src={plantImage} alt="3D Design of our Chemical Plant" className={styles.plantImage} />
                <ImageOverlay>
                  <Hotspot
                    style={{ bottom: '45%', left: '32%' }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => handleHotspotClick(0)}
                    className={styles.hotspot}
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
                    className={styles.hotspot}
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
                    className={styles.hotspot}
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
                    className={styles.hotspot}
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
                    className={styles.hotspot}
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
        </motion.div>

        <motion.div ref={aiRef} variants={sectionVariants} initial="hidden" animate={aiInView ? "visible" : "hidden"}>
          <SectionSpacing style={{ marginTop: '6rem' }}>
            <div className={styles.aiSection}>
              <div className={styles.aiTextContainer}>
                <h2 style={{
                  fontSize: '40px',
                  color: '#25abe0',
                  marginBottom: '1.2rem',
                  textAlign: 'center',
                  fontWeight: '500'
                }} className={styles.sectionTitle}>Alchemity's Generative AI</h2>
                <AIDescription className={styles.aiDescription}>
                  Tens of Thousands Variables Screened in Minutes to Project the Lowest Cost of Produced chemicals (LCOChem) while Simulating the Lowest Lifetime Cost of Plants (Capex and Opex).
                </AIDescription>
                <AIDescription className={styles.aiDescription}>
                  Ability to predict optimal system operation (and downtime/maintenance) to meet customer offtake requirements whilst minimizing the LCOChem.
                </AIDescription>
              </div>
              <div className={styles.aiImageContainer}>
                <AIImage 
                  src={placeholder} 
                  alt="AI Technology" 
                  style={{ marginTop: '0.5rem' }}
                  className={styles.aiImage}
                />
              </div>
            </div>
          </SectionSpacing>
        </motion.div>

        <motion.div ref={roadmapRef} variants={sectionVariants} initial="hidden" animate={roadmapInView ? "visible" : "hidden"}>
          <RoadmapContainer>
            <RoadmapTitle>Product Development Roadmap</RoadmapTitle>
            <RoadmapDescription>
              Deploying modular turnkey systems followed by large integrated facilities.
            </RoadmapDescription>
            <ClickToLearnMore>Click on each TRL card to learn more.</ClickToLearnMore>
            
            <TimelineContainer>
              <TimelineSections>
                {[
                  { trl: "TRL 3", title: "Single Tube", year: "2024", image: single2, description: "Batches of 20 cm long reactor membranes." },
                  { trl: "TRL 4", title: "Tube Bundle", year: "2025", image: extEval, description: "First working 4-tube bundle prototype to optimize reactor core conditions." },
                  { trl: "TRL 5", title: "Benchtop System", year: "2025-2026", image: benchtop1, description: "Second working prototype to optimize reactor bundle integration with steel vessel and BOP." },
                  { trl: "TRL 6/7", title: "Modular Skids", year: "2027+", images: [skid1, skid2], description: "20' modular turnkey skid system producing clean drop-in chemicals and fuels, enabling 1-30 tons per day facilities." },
                  { trl: "TRL 8/9", title: "Plant", year: "2030+", images: [plant1, plant22], description: "Large-scale plant building block to enable 100+ ton per day facilities." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={timelineItemVariants}
                    initial="hidden"
                    animate={roadmapInView ? "visible" : "hidden"}
                  >
                    <TimelineSection>
                      <TimelineImage 
                        onClick={() => handleImageClick({
                          image: item.image,
                          images: item.images,
                          title: item.title,
                          year: item.year,
                          description: item.description
                        })}
                      >
                        <span>{item.trl}</span>
                      </TimelineImage>
                      <TimelineTitle>{item.title}</TimelineTitle>
                      <TimelineYear>{item.year}</TimelineYear>
                    </TimelineSection>
                  </motion.div>
                ))}
              </TimelineSections>
              <TimelineArrow />
            </TimelineContainer>
          </RoadmapContainer>
        </motion.div>

        <motion.div ref={competitiveRef} variants={sectionVariants} initial="hidden" animate={competitiveInView ? "visible" : "hidden"}>
          <div className={styles.competitiveSection}>
            <CompetitiveTitle>Competitive Analysis</CompetitiveTitle>
            <CompetitiveHoverText>
              Click/Hover to learn more
            </CompetitiveHoverText>
            <QuadrantContainer className={styles.quadrantContainer}>
              {/* Axes */}
              <Axis orientation="horizontal" color="#e53935" />
              <Axis orientation="vertical" color="#00B050" />
              <Axis orientation="vertical-negative" color="#e53935" />
              <Axis orientation="horizontal-positive" color="#00B050" />

              {/* Axis Labels */}
              <AxisLabel position="left-center" color="#e53935" offsetX={-2}>HIGH CO₂<br/>EMISSIONS</AxisLabel>
              <AxisLabel position="bottom-center" color="#e53935" offsetY={2}>HIGHER LIFETIME COST<br/>AND MASSIVE INFRASTRUCTURE</AxisLabel>
              <AxisLabel position="right-center" color="#00B050" offsetX={2}>LOW CO₂<br/>EMISSIONS</AxisLabel>
              <AxisLabel position="top-center" color="#00B050" offsetY={-2}>LOWER LIFETIME COST<br/>AND MODULAR SCALABILITY</AxisLabel>

              {/* Replace AlchemityBox with AlchemityText */}
              <AlchemityText>
                Platform Product: unique combination of chemical flexibility, low emissions and low-cost.
              </AlchemityText>

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
                      height: 60,
                      objectFit: 'contain',
                      background: 'none',
                      border: '2px solid #25abe0',
                      pointerEvents: 'auto',
                    }}
                    className={styles.alchemityLogo}
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
                          ? '#FFFF00'
                          : undefined,
                    }}
                    className={styles.quadrantBox}
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
                }} className={styles.competitivePopup}>
                  <span>
                    {hoverTextData[popupPos.label] || 'Placeholder Text'}
                  </span>
                </CompetitivePopup>
              )}
            </QuadrantContainer>
          </div>
        </motion.div>

        <Overlay show={selectedItem !== null} onClick={handleClosePopup} />
        <Modal
          show={selectedItem !== null}
          onClose={handleClosePopup}
          title={selectedItem ? `${selectedItem.title} (${selectedItem.year})` : ''}
          size={selectedItem?.title === 'Plant' ? "xlarge" : "xlarge"}
          showCloseButton={true}
        >
          <div style={{ 
            marginBottom: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }} className={styles.itemModal}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '0rem',
              alignItems: 'center',
              width: '100%'
            }} className={styles.modalImageContainer}>
              {selectedItem?.images ? (
                selectedItem.images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`${selectedItem.title} ${index + 1}`}
                    style={{
                      width: selectedItem?.title === 'Plant' ? '50%' : '45%',
                      maxHeight: '350px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      margin: '0 auto'
                    }}
                    className={styles.modalImage}
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
                  className={styles.modalImage}
                />
              )}
            </div>
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }} className={styles.modalTextContainer}>
              <p style={{ 
                color: '#ffffff', 
                fontSize: '1.4rem',
                lineHeight: '1.6',
                marginBottom: '0',
                textAlign: 'center',
                maxWidth: '800px',
                width: '100%'
              }} className={styles.modalDescription}>
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
            }} className={styles.hotspotModalContent}>
              {hotspotDetails[selectedHotspot].description}
            </div>
          </Modal>
        )}

        <GTChem1Popup />
      </div>
    </div>
  );
}

export default Products; 