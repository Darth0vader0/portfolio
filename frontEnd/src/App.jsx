/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SceneSVG from './svgs/mainSvg';
const SECTION_TRANSFORMS = [
  // Section 1: Profile & Cat
  'scale(3.7) translate(-1100, -600)',
  // Section 2: Skills
  'scale(2.8) translate(-1800, -500)',
  // Section 3: Projects
  'scale(3.7) translate(-1000, -1000)',
  // Section 4: Work Experience
  'scale(3.5) translate(-1800, -1100)',
  // Section 5: Education
  'scale(5.5) translate(-2000, -1500)',
  // Bye Section
  'scale(4.5) translate(-1200, -1500)',
];
const NUM_SECTIONS = SECTION_TRANSFORMS.length;


const Portfolio = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [clickedElement, setClickedElement] = useState(null);
 const [sectionIndex, setSectionIndex] = useState(-1); // -1 = no zoom, 0 = section 1, etc.

    useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        setSectionIndex(0); // Always go to section 1
        
        
      }
      if (e.key === 'ArrowDown') {
        setSectionIndex((prev) => {
          if (prev < NUM_SECTIONS - 1) return prev + 1;
          return prev; // Stay at last section
        });
        
      }
      if (e.key === 'ArrowLeft') {
        setSectionIndex((prev) => {
          if (prev > 0) return prev - 1;
          return prev;
        });
       
      }
      if (e.key === 'Escape') {
        setSectionIndex(-1); // Reset zoom
        
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const transform =
    sectionIndex >= 0 && sectionIndex < SECTION_TRANSFORMS.length
      ? SECTION_TRANSFORMS[sectionIndex]
      : '';
  // Listen for up arrow key

  return (
    <div className="   "
    >
     <SceneSVG
     transform={transform}
        hoveredElement={hoveredElement}
        setHoveredElement={setHoveredElement}
        sectionIndex={sectionIndex}
      />
      
      {sectionIndex === 0 && (
        <div className="fixed top-1/4 left-10 max-w-md  text-white rounded-xl p-8 z-20 shadow-2xl animate-slide-fade-in transition-opacity duration-2000">
          <h1 className="text-3xl font-bold mb-2 text-green-400">Hi, I'm Kamal Singh</h1>
          <h2 className="text-xl font-semibold mb-4">Frontend Developer from India 🇮🇳</h2>
          <p className="text-base leading-relaxed">
            I love building beautiful, interactive web experiences.<br />
            Passionate about React, SVG animations, and creative coding.<br />
            Always learning, always curious.<br />
            Let's create something amazing together!
          </p>
        </div>
      )}
      {/* Status displays with Tailwind classes */}
      {hoveredElement && (
        <div className="fixed top-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg z-10 font-medium shadow-lg backdrop-blur-sm">
          <span className="text-sm">Hovering:</span>
          <span className="text-green-400 ml-1 font-semibold">{hoveredElement}</span>
        </div>
      )}

      {clickedElement && (
        <div className="fixed bottom-4 right-4 bg-green-500 bg-opacity-90 text-white px-4 py-2 rounded-lg z-10 font-medium shadow-lg backdrop-blur-sm animate-pulse">
          <span className="text-sm">Last clicked:</span>
          <span className="font-semibold ml-1">{clickedElement}</span>
        </div>
      )}
    </div>
  );
};



export default Portfolio;