import React, { useState } from 'react';

const Portfolio = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [clickedElement, setClickedElement] = useState(null);

  const handleElementHover = (elementId) => {
    
  };

  const handleElementLeave = () => {
    
  };

  const handleElementClick = (elementId) => {
    
  };

  return (
    <div className="   " 
        >
      <svg 
        className="w-full h-full"
        version="1.1" 
        viewBox="0 0 4096 2304"
        xmlns="http://www.w3.org/2000/svg"
        style={{
         backgroundImage: `url('background.jpeg')`,
         backgroundSize: 'cover',
          zIndex: 1
        }}
      >
        <defs>
          <linearGradient id="linearGradient58">
            <stop className="stop-color-yellow-100" style={{stopOpacity:1}} offset="0" />
            <stop className="stop-color-yellow-100" style={{stopOpacity:0}} offset="1" />
          </linearGradient>
          <linearGradient 
            id="linearGradient61"
            x1="1161.5406" 
            y1="1417.0116" 
            x2="1326.9885" 
            y2="1573.7003" 
            gradientUnits="userSpaceOnUse"
          >
            <stop style={{stopColor:'#fdedb6', stopOpacity:1}} offset="0" />
            <stop style={{stopColor:'#fdedb6', stopOpacity:0}} offset="1" />
          </linearGradient>
          <linearGradient 
            id="linearGradient62"
            x1="1161.5406" 
            y1="1417.0116" 
            x2="1326.9885" 
            y2="1573.7003" 
            gradientUnits="userSpaceOnUse"
          >
            <stop style={{stopColor:'#fdedb6', stopOpacity:1}} offset="0" />
            <stop style={{stopColor:'#fdedb6', stopOpacity:0}} offset="1" />
          </linearGradient>
          <linearGradient 
            id="linearGradient67"
            x1="1161.5406" 
            y1="1417.0116" 
            x2="1326.9885" 
            y2="1573.7003" 
            gradientUnits="userSpaceOnUse"
          >
            <stop style={{stopColor:'#fdedb6', stopOpacity:1}} offset="0" />
            <stop style={{stopColor:'#fdedb6', stopOpacity:0}} offset="1" />
          </linearGradient>
        </defs>

        <g>
          {/* Work Experience Section */}
          <path 
            className={`fill-green-500 cursor-pointer transition-opacity duration-200 ${
              hoveredElement === 'work' ? 'opacity-80' : 'opacity-60'
            }`}
            d="m 2336.2831,1650.5269 1.3763,-369.5484 -348.9032,95.6559 -8.1432,330.9398 z"
            onMouseEnter={() => handleElementHover('work')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('work')}
          >
            <title>Work Experience</title>
          </path>

          {/* Education Section */}
          <path 
            className={`fill-green-500 cursor-pointer transition-opacity duration-200 ${
              hoveredElement === 'education' ? 'opacity-80' : 'opacity-60'
            }`}
            d="m 2584.3579,1670.4782 -1.3763,-369.5484 348.9032,95.6559 8.1432,330.9398 z"
            onMouseEnter={() => handleElementHover('education')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('education')}
          >
            <title>Education</title>
          </path>

          {/* Profile Picture */}
          <path 
            className={`fill-black cursor-pointer transition-transform duration-200 origin-center ${
              hoveredElement === 'profile' ? 'scale-105' : 'scale-100'
            }`}
            d="m 1729.1726,850.10963 0.1217,-32.7246 c 0,0 1.4598,-24.33056 26.0337,-29.31832 24.5738,-4.98777 29.4399,11.43536 29.4399,11.43536 l 0.365,55.71697 0.6083,72.26175 0.8515,40.02377 c 0,0 -2.433,33.69784 -31.3864,39.29384 -28.9534,5.596 -25.1821,-49.39102 -25.1821,-49.39102 z"
            onMouseEnter={() => handleElementHover('profile')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('profile')}
          />

          {/* Cat Picture */}
          <path 
            className="fill-black"
            d="m 2028.6452,758.96774 18.7527,5.5914 0.4301,38.7957 -18.4947,-2.66667 z"
          />

          {/* Skills Section */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <path
              key={`skill${num}`}
              className={`fill-black cursor-pointer transition-opacity duration-200 ${
                hoveredElement === `skill${num}` ? 'opacity-80' : 'opacity-100'
              }`}
              d={getSkillPath(num)}
              onMouseEnter={() => handleElementHover(`skill${num}`)}
              onMouseLeave={handleElementLeave}
              onClick={() => handleElementClick(`skill${num}`)}
            />
          ))}

          {/* Work Experience Logo */}
          <path 
            className={`fill-black cursor-pointer transition-transform duration-200 origin-center ${
              hoveredElement === 'workLogo' ? 'scale-110' : 'scale-100'
            }`}
            d="m 2398.5062,1422.2426 -0.6083,-52.3106 c 0,0 -1.2165,-15.085 4.3795,-15.5716 5.5961,-0.4866 53.8922,4.7445 53.8922,4.7445 0,0 3.0413,-2.1898 2.798,10.2188 -0.2433,12.4086 -0.3649,80.5341 -0.3649,80.5341 0,0 -17.883,0.365 -25.3038,-5.8393 -7.4208,-6.2043 -6.2043,-31.7514 -6.2043,-31.7514 0,0 -18.7345,-1.2165 -19.2211,-0.9732 -0.4866,0.2433 -1.5815,4.2578 -1.8248,8.394 -0.2433,4.1362 -7.5425,2.5547 -7.5425,2.5547 z"
            onMouseEnter={() => handleElementHover('workLogo')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('workLogo')}
          >
            <title>Work Experience Logo</title>
          </path>

          {/* Education Logo */}
          <path 
            className={`fill-black cursor-pointer transition-transform duration-200 origin-center ${
              hoveredElement === 'eduLogo' ? 'scale-110' : 'scale-100'
            }`}
            d="m 2471.9845,1361.2946 19.4644,1.4598 c 0,0 17.7613,2.9197 20.681,21.6542 2.9197,18.7346 2.4331,49.3911 2.4331,49.3911 0,0 -15.3283,3.1629 -15.3283,7.2991 0,4.1362 -14.1117,-5.596 -15.5715,-10.7054 -1.4599,-5.1094 -9.489,-6.326 -9.7323,0.2433 -0.2433,6.5692 -1.9464,-69.3421 -1.9464,-69.3421 z"
            onMouseEnter={() => handleElementHover('eduLogo')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('eduLogo')}
          >
            <title>Education Logo</title>
          </path>

          {/* Extra sections */}
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <path
              key={`extra${num}`}
              className={`fill-black cursor-pointer transition-opacity duration-200 ${
                hoveredElement === `extra${num}` ? 'opacity-80' : 'opacity-100'
              }`}
              d={getExtraPath(num)}
              onMouseEnter={() => handleElementHover(`extra${num}`)}
              onMouseLeave={handleElementLeave}
              onClick={() => handleElementClick(`extra${num}`)}
            />
          ))}

          {/* Bye Section */}
          <path 
            className="fill-black"
            d="m 1812.5048,1735.1336 42.4568,0.4866 -0.2433,-33.4545 c 0,0 -5.3527,-20.4377 -21.8975,-17.6397 -16.5448,2.7981 -20.1944,19.4645 -20.1944,19.4645 z"
          />

          {/* Interactive arrows and banners */}
          <path 
            className={`fill-green-500 opacity-80 cursor-pointer transition-transform duration-200 ${
              hoveredElement === 'downArrow' ? 'translate-y-1' : 'translate-y-0'
            }`}
            d="m 1671.7525,1441.8287 42.5784,-4.8661 0.2433,22.3841 -42.0918,1.2165 z"
            onMouseEnter={() => handleElementHover('downArrow')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('downArrow')}
          />

          <path 
            className={`fill-green-500 cursor-pointer transition-transform duration-200 ${
              hoveredElement === 'upArrow' ? '-translate-y-1' : 'translate-y-0'
            }`}
            d="m 1686.7157,1220.664 c 0,0 -14.9632,3.1629 -5.8393,-11.8004 9.124,-14.9633 9.124,-14.9633 9.124,-14.9633 0,0 -0.8516,-7.0558 20.6809,-9.6105 21.5326,-2.5547 31.3865,-6.326 25.5471,2.1897 -5.8393,8.5157 -11.9219,20.5593 -11.9219,20.5593 0,0 -0.9733,8.0291 -10.0972,9.2457 -9.124,1.2165 -27.4936,4.3795 -27.4936,4.3795 z"
            onMouseEnter={() => handleElementHover('upArrow')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('upArrow')}
          />

          {/* Project Banner */}
          <path 
            className="fill-green-500"
            d="m 1867.1268,1283.1935 -0.2433,102.9182 27.9801,1.9465 2.1898,-102.675 c 0,0 -3.8929,-11.192 -13.3818,-11.4353 -9.4889,-0.2433 -11.4354,-0.7299 -16.5448,9.2456 z"
          />

          {/* Explainer sections with gradients */}
          <path 
            className="opacity-100"
            style={{fill: 'url(#linearGradient62)', fillOpacity: 1}}
            d="m 1177.4623,1531.1828 0.1721,-73.8065 32.6882,1.3764 0.172,72.4301 z"
          />
          <path 
            className="opacity-95"
            style={{fill: 'url(#linearGradient61)', fillOpacity: 1}}
            d="m 1220.8172,1457.7204 40.9462,3.4409 -0.8602,71.0537 -38.7097,0.5161 z"
          />
          <path 
            className="opacity-100"
            style={{fill: 'url(#linearGradient67)', fillOpacity: 1}}
            d="m 1277.2473,1465.9785 c 36.4731,2.5806 36.4731,2.5806 36.4731,2.5806 v 60.3871 c 0,0 0.6882,3.7849 -4.3011,4.3011 -4.9892,0.5161 -31.4838,0.6881 -31.4838,0.6881 z"
          />

          {/* Other elements */}
          <path className="opacity-100 fill-black" d="m 1680.1465,1367.3772 61.5563,-3.5279 0.4866,31.3864 -62.1646,4.9878 z" />
          <path className="opacity-100 fill-black" d="m 1805.8138,1791.4588 53.0406,4.1362 0.9732,39.1722 -54.7437,-3.163 z" />
          <path className="opacity-100 fill-black" d="m 1701.9223,1716.2774 c 35.036,-0.4866 35.036,-0.4866 35.036,-0.4866 l 0.73,67.6389 c -35.036,0.2433 -35.036,0.2433 -35.036,0.2433 z" />

          {/* Project Details Rectangle */}
          <rect 
            className={`fill-green-500 cursor-pointer transition-opacity duration-200 rounded-lg ${
              hoveredElement === 'projectDetails' ? 'opacity-50' : 'opacity-30'
            }`}
            width="179.99475" 
            height="268.04272" 
            x="1374.5583" 
            y="1271.0021" 
            ry="19.595598"
            rx="19.595598"
            onMouseEnter={() => handleElementHover('projectDetails')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('projectDetails')}
          />

          {/* Skill Banner */}
          <path 
            className={`fill-green-500 cursor-pointer transition-opacity duration-200 ${
              hoveredElement === 'skillBanner' ? 'opacity-80' : 'opacity-60'
            }`}
            d="m 2160.172,578.75267 v 128 l 290.4086,68.12903 3.4408,-116.30107 z"
            onMouseEnter={() => handleElementHover('skillBanner')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('skillBanner')}
          >
            <title>Skills Banner</title>
          </path>

          {/* Adaptive Text */}
          <path 
            className={`fill-green-500 cursor-pointer transition-opacity duration-200 ${
              hoveredElement === 'adaptiveText' ? 'opacity-80' : 'opacity-60'
            }`}
            d="m 2570.3713,1152.7923 -1.4251,-381.35146 361.2665,98.71108 8.4318,341.50968 z"
            onMouseEnter={() => handleElementHover('adaptiveText')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('adaptiveText')}
          >
            <title>Adaptive Text</title>
          </path>

          {/* Click Education/Work */}
          <path 
            className={`fill-green-500 cursor-pointer transition-opacity duration-200 ${
              hoveredElement === 'clickEduWork' ? 'opacity-80' : 'opacity-60'
            }`}
            d="m 2445.4193,1507.7849 c 0,0 -2.4086,-9.9785 6.5376,-9.2903 8.9463,0.6882 48.5162,-1.3764 50.9248,2.7527 2.4086,4.129 2.4086,10.6666 2.4086,10.6666 l -3.785,15.828 -4.129,6.5376 -57.4624,-0.3441 4.129,-9.9784 z"
            onMouseEnter={() => handleElementHover('clickEduWork')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('clickEduWork')}
          />

          {/* Project Window */}
          <path 
            className={`fill-green-500 cursor-pointer transition-opacity duration-200 ${
              hoveredElement === 'projectWindow' ? 'opacity-80' : 'opacity-60'
            }`}
            d="m 1637.5053,1378.4086 -0.3441,-55.3979 c 0,0 -5.1612,-48.5161 19.613,-52.3011 24.7741,-3.7849 84.9892,-11.0107 84.9892,-11.0107 l 28.5591,-3.4409 c 0,0 20.3011,-2.0645 20.3011,18.9248 0,20.9892 -1.0322,87.3978 -1.0322,87.3978 0,0 -5.5054,10.6667 -23.0538,11.3548 -17.5484,0.6882 -17.5484,-0.344 -17.5484,-0.344 l -0.6882,-11.699 -26.1505,1.3764 c 0,0 -6.8817,-34.7527 -20.6452,-33.0323 -13.7634,1.7205 -19.2688,19.6129 -19.2688,19.6129 l -2.4086,15.828 -1.3763,9.9785 -5.5054,2.4086 -3.785,7.5699 -11.3548,2.4086 c 0,0 -9.9785,-12.043 -20.3011,-9.6344 z"
            onMouseEnter={() => handleElementHover('projectWindow')}
            onMouseLeave={handleElementLeave}
            onClick={() => handleElementClick('projectWindow')}
          />
        </g>
      </svg>

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

// Helper functions for path data
const getSkillPath = (num) => {
  const paths = {
    1: "m 2325.2473,930.83871 34.5807,6.45162 -0.1721,-43.09678 c 0,0 -29.3333,10.15054 -34.4086,36.64516 z",
    2: "m 2363.8979,893.07527 0.253,45.24731 47.6341,9.11828 -0.3372,-46.45161 c 0,0 -26.6414,-16.94624 -47.5499,-7.91398 z",
    3: "m 2413.9355,900.81721 0.6882,46.62365 32.4301,6.7957 c 0,0 -0.4301,-20.55914 -33.1183,-53.41935 z",
    4: "m 2323.3548,934.88172 36.2151,6.7957 1.2043,50.66667 -38.1793,-6.95657 z",
    5: "m 2362.497,941.59251 48.84,10.26893 2.2541,49.34096 -49.8418,-7.01294 z",
    6: "m 2413.7128,951.933 c 1.2247,49.922 1.7146,49.922 1.7146,49.922 l 34.5379,5.9166 -2.327,-50.04519 z",
    7: "m 2321.865,991.71346 c 37.9556,6.32595 37.9556,6.32595 37.9556,6.32595 l 1.2166,59.97479 -37.9557,0.6083 z",
    8: "m 2363.5919,997.7961 c 0.4866,48.6611 0.4866,48.6611 0.4866,48.6611 l 8.6373,-4.7444 0.7299,20.1943 7.1775,1.2165 0.365,-10.7054 11.4354,-1.3382 6.6909,-6.9342 10.3405,5.8393 2.6763,-0.7299 -0.7299,-44.0383 z",
    9: "m 2414.4427,1006.0685 c 34.6711,5.961 34.6711,5.961 34.6711,5.961 l 0.3649,46.593 -34.671,-4.3795 z"
  };
  return paths[num] || "";
};

const getExtraPath = (num) => {
  const paths = {
    1: "m 2298.8387,1703.2258 29.4194,-0.3441 v -51.4408 c 0,0 -33.2245,-5.0617 -29.4194,51.7849 z",
    2: "m 2334.4516,1651.2688 c 0,51.0968 0,51.0968 0,51.0968 l 45.5914,0.3441 v -50.7527 z",
    3: "m 2389.3333,1652.4731 -0.172,49.3764 34.2366,-0.3441 c 0,0 9.6344,-50.2366 -34.0646,-49.0323 z",
    4: "m 2300.2151,1707.3548 h 26.4946 l 0.3441,25.1183 c 0,0 -8.6022,-7.2258 -10.3226,9.9785 -1.7204,17.2043 -15.1398,-7.2258 -17.2043,-7.914 -2.0645,-0.6881 0.6882,-27.1828 0.6882,-27.1828 z",
    5: "m 2334.6237,1707.3548 c 45.0752,-0.344 45.0752,-0.344 45.0752,-0.344 l -0.3441,56.086 -46.1075,1.0322 z",
    6: "m 2389.6774,1706.6667 33.7205,-1.7205 v 54.0215 l -32.6882,5.1613 z"
  };
  return paths[num] || "";
};

export default Portfolio;