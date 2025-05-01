import React, { useRef, useState, useEffect } from 'react';
import styles from './VideoSection.module.css';
import videoFile from './images/homepage-hero.mp4';
import { FaCloud, FaDollarSign, FaShieldAlt, FaSeedling } from 'react-icons/fa';

function VideoSection() {
  const videoRef = useRef(null);
  const [videoPoster, setVideoPoster] = useState('');
  const [activePhrase, setActivePhrase] = useState(null);
  
  // Key phrases to animate between
  const keyPhrases = [
    "One Platform", 
    "Clean Chemicals", 
    "Zero CO2", 
    "Lower Capital Risk", 
    "Higher Efficiency"
  ];

  // Effect for video poster generation
  useEffect(() => {
    // Try to generate poster from the first frame of the video
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        try {
          // Create canvas for capturing the first frame
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          // Convert canvas to data URL for the poster
          const dataURL = canvas.toDataURL('image/jpeg');
          setVideoPoster(dataURL);
        } catch (err) {
          console.error('Error generating video poster:', err);
        }
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  // Effect for animating the key phrases
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setActivePhrase(currentIndex);
      
      // Reset after a short time
      setTimeout(() => {
        setActivePhrase(null);
      }, 1000); // Each phrase stays highlighted for 1 second
      
      currentIndex = (currentIndex + 1) % keyPhrases.length;
    }, 2500); // Next phrase every 2.5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Ensure video plays when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Explicitly try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('✅ Video playback started successfully');
          })
          .catch(error => {
            console.error('❌ Video playback was prevented:', error);
          });
      }
    }
  }, []);

  // Helper function to add emphasis to key phrases
  const emphasizeText = (text) => {
    if (!text) return null;
    
    // Determine which set of keywords to use based on content
    const isMission = text.toLowerCase().includes("empower") || text.toLowerCase().includes("planet");
    
    const missionKeywords = ["empower", "innovative", "sustainable", "growth"];
    const visionKeywords = ["lead", "clean", "sustainability", "profitability"];
    
    let keywords = isMission ? missionKeywords : visionKeywords;
    
    // Split the paragraph and highlight keywords
    return text.split(' ').map((word, index) => {
      const lowerWord = word.toLowerCase().replace(/[.,!]/g, '');
      const isKeyword = keywords.some(keyword => 
        lowerWord.includes(keyword.toLowerCase())
      );
      
      return isKeyword ? 
        <span key={index}>{word} </span> : 
        <span key={index}>{word} </span>;
    });
  };

  const stats = [
    {
      icon: <FaCloud />,
      value: "400%",
      label: "Lower CO₂ Emission",
      description: ""
    },
    {
      icon: <FaDollarSign />,
      value: "300%",
      label: "Lower Lifetime Cost",
      description: "Scales down cost effectively even to remote sites"
    },
    {
      icon: <FaShieldAlt />,
      value: "100%",
      label: "Energy Security",
      description: "Provides domestic job and energy security"
    },
    {
      icon: <FaSeedling />,
      value: "All",
      label: "Site Types",
      description: "Clean energy production in brown and green fields"
    }
  ];

  return (
    <section className={styles.videoSection}>
      {/* Background video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className={styles.styledVideo}
        ref={videoRef}
        poster={videoPoster}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient overlay for better text readability */}
      <div className={styles.videoOverlay}></div>
      
      {/* Content that sits on top of the video */}
      <div className={styles.contentOverlay}>
        <h2 className={styles.sectionHeading}>Revolutionizing Production of Clean Chemicals</h2>
        
        <p className={styles.videoDescription}>
        Scaling Carbon-Negative and Lowering Cost of Chemical Production with Modular Reactor Systems.
        </p>

        {/* Animated key phrases */}
        <div className={styles.keyPhrasesContainer}>
          <div className={styles.keyPhrasesLine}>
            {keyPhrases.map((phrase, index) => (
              <React.Fragment key={index}>
                <span 
                  className={`${styles.keyPhrase} ${activePhrase === index ? styles.active : ''}`}
                >
                  {phrase}
                </span>
                {index < keyPhrases.length - 1 && <span className={styles.phraseDot}>.</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Mission and Vision Cards */}
        <div className={styles.missionVisionContainer}>
          <div className={styles.mission}>
            <h2 className={styles.cardTitle}>Our Mission</h2>
            <p className={styles.cardText}>
              {emphasizeText("To offer lower cost and zero CO2 emissions chemicals via modular reactors.")}
            </p>
          </div>
          
          <div className={styles.vision}>
            <h2 className={styles.cardTitle}>Our Vision</h2>
            <p className={styles.cardText}>
              {emphasizeText("To transform current chemicals production with less capital-intensive process.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection; 