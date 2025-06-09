/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SceneSVG from './svgs/mainSvg';

const SECTION_TRANSFORMS = [
  'scale(3.4) translate(1300, 800)',
  'scale(3.5) translate(-1800, 1000)',
  'scale(3.7) translate(-1400, -1000)',
  'scale(4.5) translate(2000, -900)',
  'scale(4.5) translate(-1500, -2500)',
  'scale(4.5) translate(900, -2500)',
];

const NUM_SECTIONS = SECTION_TRANSFORMS.length;

const Portfolio = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [clickedElement, setClickedElement] = useState(null);
  const [sectionIndex, setSectionIndex] = useState(-1); // -1 = no zoom

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        setSectionIndex(0); // Go to section 1
      }
      if (e.key === 'ArrowDown') {
        setSectionIndex((prev) => (prev < NUM_SECTIONS - 1 ? prev + 1 : prev));
      }
      if (e.key === 'ArrowLeft') {
        setSectionIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
      if (e.key === 'Escape') {
        setSectionIndex(-1); // Reset zoom
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute transform values (scale, x, y) from string
  const transformString =
    sectionIndex >= 0 && sectionIndex < SECTION_TRANSFORMS.length
      ? SECTION_TRANSFORMS[sectionIndex]
      : '';

  const transformValues = {
    scale: 1,
    x: 0,
    y: 0,
  };

  if (transformString) {
    const scaleMatch = transformString.match(/scale\(([^)]+)\)/);
    const translateMatch = transformString.match(/translate\(([^)]+)\)/);
    if (scaleMatch && translateMatch) {
      transformValues.scale = parseFloat(scaleMatch[1]);
      const [x, y] = translateMatch[1].split(',').map(Number);
      transformValues.x = x;
      transformValues.y = y;
    }
  }

  return (
    <div className="">
      <SceneSVG
        transformValues={transformValues}
        hoveredElement={hoveredElement}
        setHoveredElement={setHoveredElement}
        sectionIndex={sectionIndex}
      />

      {sectionIndex === 0 && (
        <div className="fixed top-1/4 left-10 max-w-md text-white rounded-xl p-8 z-20 shadow-2xl">
          <style jsx>{`
            @keyframes fadeInUp {
              0% {
                transform: translateY(30px);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }

            .fade-up-1 {
              animation: fadeInUp 0.6s ease-out;
            }

            .fade-up-2 {
              animation: fadeInUp 0.6s ease-out 0.2s both;
            }

            .fade-up-3 {
              animation: fadeInUp 0.6s ease-out 0.4s both;
            }

            .fade-up-4 {
              animation: fadeInUp 0.6s ease-out 0.6s both;
            }
          `}</style>

          <h1 className="text-3xl font-bold mb-2 text-green-400 fade-up-1">
            Hi, I'm Kamal Majethiya
          </h1>

          <h2 className="text-xl font-semibold mb-4 fade-up-2">
            MERN Stack Developer from India 🇮🇳
          </h2>

          <p className="text-base leading-relaxed fade-up-3">
            I love building beautiful, interactive web experiences.
            <br />
            I create stunning projects that wow people.
            <br />
            Always learning, always curious.
            <br />
            Open to work opportunities.
          </p>

          <div className="fade-up-4">
            <h3 className="mt-2">Say hello to my cat 🐱</h3>
          </div>
        </div>
      )}

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
