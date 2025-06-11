import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const DynamicGlassProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Project Aurora",
      subtitle: "Web Application",
      techStack: ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Node.js'],
      description: "A modern, responsive web application built with cutting-edge technologies. Features include real-time data processing, intuitive user interface, and seamless performance optimization.",
      gradient: "from-purple-600 via-blue-600 to-indigo-800"
    },
    {
      id: 2,
      title: "Dashboard Pro",
      subtitle: "Analytics Platform",
      techStack: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      description: "Comprehensive analytics dashboard with real-time monitoring, advanced data visualization, and customizable reporting features for enterprise-level applications.",
      gradient: "from-emerald-600 via-teal-600 to-cyan-800"
    },
    {
      id: 3,
      title: "Mobile Connect",
      subtitle: "Mobile Application",
      techStack: ['React Native', 'Expo', 'Firebase', 'GraphQL', 'AWS'],
      description: "Cross-platform mobile application with seamless user experience, offline capabilities, and cloud synchronization for enhanced productivity.",
      gradient: "from-rose-600 via-pink-600 to-purple-800"
    },
    {
      id: 4,
      title: "AI Assistant",
      subtitle: "Machine Learning",
      techStack: ['Python', 'TensorFlow', 'Flask', 'Docker', 'Kubernetes'],
      description: "Intelligent chatbot powered by advanced machine learning algorithms, natural language processing, and contextual understanding capabilities.",
      gradient: "from-amber-600 via-orange-600 to-red-800"
    },
    {
      id: 5,
      title: "Blockchain Wallet",
      subtitle: "Cryptocurrency",
      techStack: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      description: "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and advanced security features for digital asset management.",
      gradient: "from-violet-600 via-purple-600 to-indigo-800"
    }
  ];

  useEffect(() => {
    setIsVisible(false);
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsTransitioning(false);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [selectedProject]);

  const currentProject = projects[selectedProject];

  const handleProjectChange = (index) => {
    if (index !== selectedProject) {
      setSelectedProject(index);
    }
  };

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentProject.gradient} flex items-center justify-center p-6 transition-all duration-700 ease-in-out`}>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevProject}
        className="fixed left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextProject}
        className="fixed right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Project Indicators */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleProjectChange(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300 border border-white/30
              ${index === selectedProject 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50 hover:scale-110'
              }
            `}
          />
        ))}
      </div>

      {/* Project Number Display */}
      <div className="fixed top-8 right-8 text-white/80 font-mono z-10">
        <span className="text-2xl font-bold">{String(selectedProject + 1).padStart(2, '0')}</span>
        <span className="text-sm">/{String(projects.length).padStart(2, '0')}</span>
      </div>

      {/* Main Card */}
      <div className={`
        relative w-full max-w-md p-8 
        bg-white/10 backdrop-blur-xl
        rounded-3xl border border-white/20
        shadow-2xl shadow-black/10
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-3xl hover:shadow-black/20
        hover:bg-white/15 hover:border-white/30
        group cursor-pointer
        ${isVisible && !isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      `}>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className={`
            absolute top-0 -left-full w-full h-full
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            transition-all duration-1000 ease-out
            ${isVisible ? 'left-full' : '-left-full'}
            group-hover:left-full group-hover:duration-500
          `} />
        </div>

        {/* Header */}
        <div className={`
          mb-6 transition-all duration-700 delay-100 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            {currentProject.title}
          </h2>
          <p className="text-white/70 text-sm font-medium uppercase tracking-wider">
            {currentProject.subtitle}
          </p>
        </div>

        {/* Tech Stack */}
        <div className={`
          mb-6 transition-all duration-700 delay-200 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-white/80 text-sm font-semibold">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentProject.techStack.map((tech, index) => (
              <span
                key={`${selectedProject}-${tech}`}
                className={`
                  px-3 py-1.5 bg-white/15 backdrop-blur-sm
                  rounded-full border border-white/20
                  text-white text-xs font-medium
                  transition-all duration-500 ease-out hover:scale-110
                  hover:bg-white/25 hover:-translate-y-1
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
                `}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className={`
          mb-8 transition-all duration-700 delay-600 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <p className="text-white/90 text-base leading-relaxed">
            {currentProject.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className={`
          flex gap-3 transition-all duration-700 delay-800 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <button className="
            flex-1 flex items-center justify-center gap-2 py-3 px-4
            bg-white/15 backdrop-blur-sm rounded-xl
            border border-white/20 text-white font-medium
            transition-all duration-300 ease-out
            hover:bg-white/25 hover:scale-105 hover:-translate-y-1
            hover:shadow-lg hover:shadow-white/10
            group/btn
          ">
            <Github className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
            <span>Code</span>
          </button>
          
          <button className="
            flex-1 flex items-center justify-center gap-2 py-3 px-4
            bg-gradient-to-r from-blue-500/20 to-purple-500/20 
            backdrop-blur-sm rounded-xl
            border border-white/30 text-white font-medium
            transition-all duration-300 ease-out
            hover:from-blue-500/30 hover:to-purple-500/30 
            hover:scale-105 hover:-translate-y-1
            hover:shadow-lg hover:shadow-blue-500/20
            group/btn
          ">
            <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
            <span>Demo</span>
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      </div>

      {/* Keyboard Hints */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm text-center">
        <p>Use arrow keys or click indicators to navigate</p>
      </div>
    </div>
  );
};

export default DynamicGlassProjectCard;