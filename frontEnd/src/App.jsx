/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SceneSVG from './svgs/mainSvg';
import Fireflies from './components/fireFlies';
import DynamicGlassProjectCard from './components/project'
const SECTION_TRANSFORMS = [
  'scale(3.4) translate(1300, 800)',
  'scale(3.5) translate(-1800, 850)',
  'scale(4.5) translate(2000, -1100)',
  'scale(3.7) translate(-1400, -1200)',
  'scale(4.5) translate(-1500, -2500)',
  'scale(4.5) translate(900, -2500)',
];
const projects = [
  {
    title: "SoulSync",
    subtitle: "Just like Discord",
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'webRTC'],
    description: "A real-time chat and collaboration platform inspired by Discord. Features channels, DMs, voice, and more.",
    image: "/project/soulSync.png",
    github: 'https://github.com/Darth0vader0/SoulSync',
    projectLink: "https://soul-sync-omega.vercel.app/login"
  },
  {
    title: "Melodify",
    subtitle: "YouTube/Spotify Video & MP3 Downloader",
    techStack: ['React', 'Express', 'yt-dlp', 'Tailwind',],
    description: "Download music and videos from YouTube and Spotify as MP3 or MP4. Fast, clean, and easy to use.",
    image: "/project/melodify.png",
    github: "https://github.com/Darth0vader0/Melodify-mernStack",
    projectLink: "https://melodify-wine.vercel.app/login"
  },
  {
    title: "2D Metaverse",
    subtitle: "Office Environment",
    techStack: ['Phaser', 'React', 'Node.js', 'Socket.io', 'webRTC', "MongoDb"],
    description: "A 2D virtual office space for remote teams. Walk, chat, and collaborate in a pixel-art world.",
    image: "/project/2dMetaverse.png",
    github: 'https://github.com/Darth0vader0/2dMetaverse-mern',
    projectLink: "https://2d-metaverse-mern.vercel.app/home"
  }
];

const NUM_SECTIONS = SECTION_TRANSFORMS.length;

const Portfolio = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [clickedElement, setClickedElement] = useState(null);
  const [sectionIndex, setSectionIndex] = useState(-1); // -1 = no zoom
  const [navHint, setNavHint] = useState("Press ↑ (up arrow)");
  const [selectedNumber, setSelectedNumber] = React.useState(1); // default to 1
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
  useEffect(() => {
    if (sectionIndex === -1) {
      setNavHint("Press ↑ (up arrow)");
    } else if (sectionIndex >= 0 && sectionIndex < NUM_SECTIONS - 1) {
      setNavHint("Press ↓ (down arrow)");
    } else if (sectionIndex === NUM_SECTIONS - 1) {
      setNavHint("Press Esc");
    }
  }, [sectionIndex]);
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
      <div className="fixed  left-1/2 -translate-x-1/2 text-white/80 text-lg z-50 pointer-events-none select-none">
        {navHint}
      </div>
      {sectionIndex === 2 && (
        <div style={{
          transform: "rotate(-4deg)"
          , transformOrigin: "1310px 2585px"
        }} className="fixed mt-72 ml-40 left-1/2 -translate-x-1/2 text-white/80 text-lg z-50 pointer-events-none select-none">
          use these arrow to see other projects
        </div>
      )}

      <Fireflies />
      <SceneSVG
        transformValues={transformValues}
        hoveredElement={hoveredElement}
        setHoveredElement={setHoveredElement}
        sectionIndex={sectionIndex}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
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
            Open to work.
          </p>

          <div className="fade-up-4">
            <h3 className="mt-2">Say hello to my cat 🐱</h3>
          </div>
        </div>
      )}
      {/* Project Card (shows when sectionIndex === 2) */}
      {sectionIndex === 2 && (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">


          {sectionIndex === 2 && (
            <div className="fixed top-1/2 left-[30%] z-30 -translate-x-1/2 -translate-y-1/2">
              {projects.map((project, idx) =>
                selectedNumber === idx + 1 ? (
                  <div
                    key={project.title}
                    className="w-[300px] sm:w-[360px] glass-card rounded-3xl shadow-2xl shadow-black/20 p-8 fade-up-card relative"
                  >
                    {/* Sparkle Effects */}
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>

                    {/* Shimmer Effect */}
                    <div className="shimmer-overlay rounded-3xl"></div>

                    {/* Project Image */}
                    <div className="mb-6 image-container">
                      <img
                        src={project.image}
                        alt={project.title + " screenshot"}
                        className="rounded-xl border border-white/20 shadow-lg w-full object-cover h-40"
                      />
                    </div>

                    {/* Project Title */}
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">
                        {project.title}
                      </h2>
                      <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIdx) => (
                        <span
                          key={tech}
                          className="px-4 py-2 tech-tag rounded-full border border-white/20 text-white text-sm font-medium"
                          style={{ animationDelay: `${techIdx * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-white/90 text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <a href={project.projectLink} target='blank' className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all cursor-pointer duration-300 transform hover:scale-105 hover:shadow-lg">
                        View Project
                      </a>
                      <a href={project.github} target='blank' className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl border border-white/20 transition-all duration-300 transform hover:scale-105">
                        Source Code
                      </a>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
            {[1, 2, 3].map(num => (
              <button
                key={num}
                onClick={() => setSelectedNumber(num)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${selectedNumber === num
                    ? 'bg-white shadow-lg shadow-white/30'
                    : 'bg-white/30 hover:bg-white/50'
                  }`}
              />
            ))}
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
