/* eslint-disable no-unused-vars */
// components/SceneSVG.jsx
import React from 'react';
import { SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiMysql, SiSocketdotio, SiWebrtc, SiAndroidstudio } from "react-icons/si";
import { motion } from 'framer-motion';
import { SiGithub, SiTwitter, SiLinkedin, SiGmail, SiInstagram } from "react-icons/si";
import { AnimatePresence } from "framer-motion";

const contactIcons = [
    SiGithub,
    SiTwitter,
    SiLinkedin,
    SiGmail,
    SiInstagram,
    // Add more if you have more paths
  ];
  
  const contactIconPositions = [
    { x: 2508, y: 1600 }, // adjust these to match your contact paths visually
    { x: 2334, y: 1651 },
    { x: 2389, y: 1652 },
    { x: 2300, y: 1707 },
    { x: 2334, y: 1707 },
    { x: 2389, y: 1706 },
  ];

const skillIconPositions = [
    { x: 2345, y: 915 }, //mongoDB
    { x: 2390, y: 920 }, // JavaScript
    { x: 2430, y: 930 }, // React
    { x: 2343, y: 962 }, // Node.js
    { x: 2390, y: 970 }, // socket.io
    { x: 2434, y: 975 }, // MySQL
    { x: 2342, y: 1017 }, // html
    { x: 2390, y: 1024 }, // WebRTC
    { x: 2432, y: 1030 }, // Android Studio
];

const contactPositions= [

]
const skillIcons = [
    SiMongodb,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiSocketdotio,
    SiMysql,
    SiHtml5,
    SiWebrtc,
    SiAndroidstudio,
];
const catImages = [
    '/cat/relexing.png',
    '/cat/surprised.png',
    '/cat/judging.png',
    '/cat/myGod.png',
    '/cat/run.png',
    // Add more cat images if you want
];
const catImageStyles = [
    //relexing
    { x: 1571.78, y: 995.88, width: 84.19, height: 100.17 },
    // For /cat/surprised
    { x: 1571.78, y: 989.88, width: 84.19, height: 90.17 },
    // For /cat/judging.png (move down and smaller)
    { x: 1571.78, y: 976, width: 120, height: 135 },
    // For /cat/myGod.png (move right)
    { x: 1571, y: 980.88, width: 84, height: 101.17 },
    //run
    { x: 1571.78, y: 1015.88, width: 84.19, height: 100.17 },
];
const SceneSVG = ({ transformValues, hoveredElement, sectionIndex, selectedNumber, setSelectedNumber }) => {
    const [catImageIndex, setCatImageIndex] = React.useState(0);
    const prevNumber = React.useRef(selectedNumber);
    React.useEffect(() => {
        prevNumber.current = selectedNumber;
    }, [selectedNumber]);
    const handleArrowUp = () => {
        setSelectedNumber(prev => prev > 1 ? prev - 1 : prev);
    };
    const handleArrowDown = () => {
        setSelectedNumber(prev => prev < 3 ? prev + 1 : prev);
    };
    const handleCatRectClick = () => {
        setCatImageIndex((prev) => (prev + 1) % catImages.length);
    };
    const { scale = 1, x = 0, y = 0 } = transformValues || {};
    return (
        <svg
            className="w-full h-full"
            version="1.1"
            viewBox="0 0 4096 2304"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                backgroundSize: 'cover',
                zIndex: 1
            }}
        >
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <pattern
                    id="bgPattern"
                    patternUnits="userSpaceOnUse"
                    width="4096"
                    height="2304"
                >
                    <image
                        href="extendedBack.png"
                        x="0"
                        y="0"
                        width="4096"
                        height="2304"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </pattern>

                <linearGradient id="linearGradient58">
                    <stop className="stop-color-yellow-100" style={{ stopOpacity: 1 }} offset="0" />
                    <stop className="stop-color-yellow-100" style={{ stopOpacity: 0 }} offset="1" />
                </linearGradient>
                <linearGradient
                    id="linearGradient61"
                    x1="1161.5406"
                    y1="1417.0116"
                    x2="1326.9885"
                    y2="1573.7003"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop style={{ stopColor: '#fdedb6', stopOpacity: 1 }} offset="0" />
                    <stop style={{ stopColor: '#fdedb6', stopOpacity: 0 }} offset="1" />
                </linearGradient>
                <linearGradient
                    id="linearGradient62"
                    x1="1161.5406"
                    y1="1417.0116"
                    x2="1326.9885"
                    y2="1573.7003"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop style={{ stopColor: '#fdedb6', stopOpacity: 1 }} offset="0" />
                    <stop style={{ stopColor: '#fdedb6', stopOpacity: 0 }} offset="1" />
                </linearGradient>
                <linearGradient
                    id="linearGradient67"
                    x1="1161.5406"
                    y1="1417.0116"
                    x2="1326.9885"
                    y2="1573.7003"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop style={{ stopColor: '#fdedb6', stopOpacity: 1 }} offset="0" />
                    <stop style={{ stopColor: '#fdedb6', stopOpacity: 0 }} offset="1" />
                </linearGradient>
            </defs>


            <motion.g
                animate={{ scale, x, y }}
                transformOrigin="0 0"
                transition={{
                    duration: 1,
                    ease: [0.5, 0, 0.18, 1],
                }}
            >
                {/* Background as a rect so it zooms too */}
                <rect
                    x="0"
                    y="0"
                    width="4096"
                    height="2304"
                    fill="url(#bgPattern)"
                />

                {/* section 1 */}
                {/* Profile Picture */}
                {
                    sectionIndex === 0 ? (
                        <>
                            <defs>
                                <clipPath id='clipProfile'>

                                    <path
                                        rx="20" ry="20"
                                        className={`fill-transparent cursor-pointer transition-transform duration-200 origin-center ${hoveredElement === 'profile' ? 'scale-105' : 'scale-100'}`}
                                        d="m 1773.6975,764.95267
                                           c 0,0 17.2747,2.91966 18.2479,15.08494 0.9732,12.16528 0,142.57706 0,142.57706
                                           l 0.2433,37.95566
                                           c 0,0 2.4331,30.4132 -17.0314,42.33517 -19.4644,11.922 -60.0964,16.0582 -61.7996,-50.12095 -1.7031,-66.17911 -2.433,-136.73772 -2.433,-136.73772 0,0 6.3259,-65.20589 62.7728,-51.09416
                                           z"
                                    />


                                </clipPath>
                            </defs>

                            <g className="opacity-0 animate-fade-in delay-[1000ms]  ">
                                <image

                                    href="/portfolioimage.jpg"
                                    x="1700"
                                    y="740"
                                    width="110"
                                    height='320'
                                    clipPath="url(#clipProfile)"
                                    preserveAspectRatio="xMidYMid slice"

                                />
                            </g>
                            <rect
                                id="cat-rect"
                                width="134.19354"
                                height="112.17204"
                                x="1571.7849"
                                y="966.88171"
                                className="cursor-pointer"
                                fill='transparent'
                                onClick={handleCatRectClick}
                            />
                            <image
                                href={catImages[catImageIndex]}
                                x={catImageStyles[catImageIndex].x}
                                y={catImageStyles[catImageIndex].y}
                                width={catImageStyles[catImageIndex].width}
                                height={catImageStyles[catImageIndex].height}
                                preserveAspectRatio="xMidYMid slice"
                                style={{ pointerEvents: 'none' }}
                            >
                                <title>cat png</title>
                            </image>

                        </>
                    ) : (
                        <>
                            <path
                                className={`fill-transparent cursor-pointer transition-transform duration-200 origin-center ${hoveredElement === 'profile' ? 'scale-105' : 'scale-100'}`}
                                d="m 1773.6975,764.95267 c 0,0 17.2747,2.91966 18.2479,15.08494 0.9732,12.16528 0,142.57706 0,142.57706 l 0.2433,37.95566 c 0,0 2.4331,30.4132 -17.0314,42.33517 -19.4644,11.922 -60.0964,16.0582 -61.7996,-50.12095 -1.7031,-66.17911 -2.433,-136.73772 -2.433,-136.73772 0,0 6.3259,-65.20589 62.7728,-51.09416 z"

                            />
                        </>
                    )
                }
                {/* Cat Picture */}
                <path
                    className="fill-black"
                    d="m 2028.6452,758.96774 18.7527,5.5914 0.4301,38.7957 -18.4947,-2.66667 z"
                />



                {/* section 2 skill section */}

                {/* Skill Banner */}

                <motion.path
                    className={`cursor-pointer transition-opacity duration-200 ${sectionIndex === 1
                        ? `fill-green-500 ${hoveredElement === 'skillBanner' ? 'opacity-80' : 'opacity-60'}`
                        : 'fill-transparent opacity-0'
                        }`}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 1
                    }}
                    d="m 2160.172,578.75267 v 128 l 290.4086,68.12903 3.4408,-116.30107 z"
                >
                    <title>Skills Banner</title>
                </motion.path>
                {/* Adaptive Text */}
                <motion.path
                    className={`cursor-pointer transition-opacity duration-200 ${sectionIndex === 1
                        ? `fill-green-500 ${hoveredElement === 'skillBanner' ? 'opacity-80' : 'opacity-60'}`
                        : 'fill-transparent opacity-0'
                        }`}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 1
                    }}
                    d="m 2568.9462,768.68817 367.4839,100.47312 0.9979,337.87761 -367.4495,-78.0927
z"
                >
                    <title>Adaptive Text</title>
                </motion.path>
                <path
                    className={`cursor-pointer transition-opacity duration-200 ${sectionIndex === 1
                        ? `fill-green-700 ${hoveredElement === 'skillBanner' ? 'opacity-80' : 'opacity-60'}`
                        : 'fill-transparent opacity-0'
                        }`}
                    d="m 2568.9462,768.68817 367.4839,100.47312 0.9979,337.87761 -367.4495,-78.0927
z"
                >
                    <title>Adaptive Text</title>
                </path>


                {sectionIndex === 1 && (
                    <g transform="skewY(15)">
                        <motion.text
                            x={2630}
                            y={120}
                            fontSize="28"
                            fontWeight="bold"
                            fill="#fff"
                            style={{
                                fontFamily: "Segoe UI, Arial, sans-serif",
                                textTransform: "uppercase",
                                userSelect: "none",
                                pointerEvents: "none",
                                textShadow: "2px 2px 8px #000a"
                            }}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeIn",
                                delay: 1.2
                            }}
                        >
                            agile & adaptive
                        </motion.text>
                        <motion.text
                            x={2580}
                            y={160}
                            fontSize="20"
                            fill="#fff"
                            style={{
                                fontFamily: "Segoe UI, Arial, sans-serif",
                                userSelect: "none",
                                pointerEvents: "none",
                                textShadow: "2px 2px 8px #000a"
                            }}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeIn",
                                delay: 1.3
                            }}
                        >
                            I can work with different tech stacks
                        </motion.text>
                        <motion.text
                            x={2600}
                            y={200}
                            fontSize="20"
                            fill="#fff"
                            style={{
                                fontFamily: "Segoe UI, Arial, sans-serif",
                                userSelect: "none",
                                pointerEvents: "none",
                                textShadow: "2px 2px 8px #000a"
                            }}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeIn",
                                delay: 1.4
                            }}
                        >
                            <tspan x={2580} dy="0">•I have worked with various tech stack</tspan>
                            <tspan x={2589} dy="28">based on the term project </tspan>
                            <tspan x={2580} dy="28">•right now stuck with MERN </tspan>
                            <tspan x={2580} dy="28">•leader in every hackathon+project</tspan>
                            <tspan x={2580} dy="28">•led the project to success</tspan>
                            <tspan x={2580} dy="28">•currently working on building</tspan>
                            <tspan x={2589} dy="28">my own 2D-metaverse with phaser</tspan>


                        </motion.text>
                    </g>
                )}

                {sectionIndex === 1 && (
                    <g

                        transform=' skewY(15) translate(-40,-10)'
                    >
                        <motion.text
                            x={2220}
                            y={55}
                            fontSize="30"
                            fontWeight="bold"
                            fill="#fff"
                            style={{
                                fontFamily: "Segoe UI, Arial, sans-serif",
                                textTransform: "uppercase",
                                userSelect: "none",
                                pointerEvents: "none",
                                textShadow: "2px 2px 8px #000a"
                            }}

                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeIn",
                                delay: 0.5
                            }}
                        >
                            technologies &
                        </motion.text>
                        <motion.text
                            x={2220}
                            y={105}
                            fontSize="25"
                            fontWeight="bold"
                            fill="#fff"
                            style={{
                                fontFamily: "Segoe UI, Arial, sans-serif",
                                textTransform: "uppercase",
                                userSelect: "none",
                                pointerEvents: "none",
                                textShadow: "2px 2px 8px #000a"
                            }}
                            transform="skewY(15) translate(-40,-10)"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeIn",
                                delay: 0.6 // slightly after the first line
                            }}
                        >
                            skills i work with
                        </motion.text>
                    </g>
                )}


                {/* Skills Section */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, idx) => {
                    const Icon = skillIcons[idx];
                    return (
                        <React.Fragment key={`skill${num}`}>
                            <path
                                className={`fill-transparent cursor-pointer transition-opacity duration-200 ${hoveredElement === `skill${num}` ? 'opacity-80' : 'opacity-100'}`}
                                d={getSkillPath(num)}
                            />
                            {sectionIndex === 1 && Icon && (
                                <g
                                    transform={`
                        translate(${skillIconPositions[idx].x - 16}, ${skillIconPositions[idx].y - 18})
                        skewY(15)
                        scale(1)
                    `}
                                    style={{ pointerEvents: 'none' }}
                                >
                                    <motion.g
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            delay: 0.1 + idx * 0.08
                                        }}
                                    >
                                        {/* Render the icon as SVG path */}
                                        <Icon

                                            size={32} color="#000" style={{ filter: "drop-shadow(0 0 0px #aaffaa) drop-shadow(0 0 16px #eedc5a)" }} />
                                    </motion.g>
                                </g>
                            )}
                        </React.Fragment>
                    );
                })}

                {/* section 3 project section */}

                {/* Explainer sections with gradients */}
                <path
                    className="opacity-100"
                    style={{ fill: 'url(#linearGradient62)', fillOpacity: 1 }}
                    d="m 1177.4623,1531.1828 0.1721,-73.8065 32.6882,1.3764 0.172,72.4301 z"
                />
                <path
                    className="opacity-95"
                    style={{ fill: 'url(#linearGradient61)', fillOpacity: 1 }}
                    d="m 1220.8172,1457.7204 40.9462,3.4409 -0.8602,71.0537 -38.7097,0.5161 z"
                />
                <path
                    className="opacity-100"
                    style={{ fill: 'url(#linearGradient67)', fillOpacity: 1 }}
                    d="m 1277.2473,1465.9785 c 36.4731,2.5806 36.4731,2.5806 36.4731,2.5806 v 60.3871 c 0,0 0.6882,3.7849 -4.3011,4.3011 -4.9892,0.5161 -31.4838,0.6881 -31.4838,0.6881 z"
                />

                <path className="opacity-100 fill-transparent" d="m 1680.1465,1367.3772 61.5563,-3.5279 0.4866,31.3864 -62.1646,4.9878 z" rx='2' ry='2'  >
                    <title>click me </title>
                </path>

                {/* Project Details Rectangle */}

                {/* Project Window */}
                <path
                    className={`fill-black cursor-pointer transition-opacity duration-200 ${hoveredElement === 'projectWindow' ? 'opacity-80' : 'opacity-60'
                        }`}
                    d="m 1637.6897,1378.0827 -1.7031,-67.8823
c 0,0 -2.9197,-36.0092 22.3841,-39.4155 25.3038,-3.4062 110.4607,-14.1117 110.4607,-14.1117 0,0 22.3841,-5.1094 22.6274,20.1944 0.2433,25.3038 -1.7031,93.186 -1.7031,93.186
l -153.0392,12.6519
z"

                />


                {sectionIndex === 2 && (
                    <g style={{ transform: "rotate(-2deg)", transformOrigin: "1710px 1385px" }}>
                        <AnimatePresence initial={false} mode="wait">
                            <motion.text
                                key={selectedNumber}
                                x={1710}
                                y={1330}
                                fontSize="48"
                                fill="#fff"
                                fontWeight="bold"
                                textAnchor="middle"
                                style={{ textShadow: "0 5px 8px #000", pointerEvents: 'none' }}
                                initial={{ y: selectedNumber > prevNumber ? 60 : -60, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: selectedNumber > prevNumber ? -60 : 60, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {selectedNumber}
                            </motion.text>
                            {/* Green border */}

                        </AnimatePresence>
                    </g>
                )}


                <path
                    className={`fill-transparent  transition-transform duration-200 ${hoveredElement === 'upArrow' ? '-translate-y-1' : 'translate-y-0'
                        }`}
                    d="m 1686.7157,1220.664 c 0,0 -14.9632,3.1629 -5.8393,-11.8004 9.124,-14.9633 9.124,-14.9633 9.124,-14.9633 0,0 -0.8516,-7.0558 20.6809,-9.6105 21.5326,-2.5547 31.3865,-6.326 25.5471,2.1897 -5.8393,8.5157 -11.9219,20.5593 -11.9219,20.5593 0,0 -0.9733,8.0291 -10.0972,9.2457 -9.124,1.2165 -27.4936,4.3795 -27.4936,4.3795 z"

                >
                    <title>up arrow</title>
                </path>
                {/* Project Banner */}
                <path
                    className="fill-green-500"
                    d="m 1867.1268,1283.1935 -0.2433,102.9182 27.9801,1.9465 2.1898,-102.675 c 0,0 -3.8929,-11.192 -13.3818,-11.4353 -9.4889,-0.2433 -11.4354,-0.7299 -16.5448,9.2456 z"
                >
                    <title>project banner</title>
                </path>
                {/* Interactive arrows and banners */}
                <path
                    className={`fill-transparent opacity-80  transition-transform duration-200 ${hoveredElement === 'downArrow' ? 'translate-y-1' : 'translate-y-0'
                        }`}
                    d="m 1671.7525,1441.8287 42.5784,-4.8661 0.2433,22.3841 -42.0918,1.2165 z"

                >
                    <title>down arrow</title>
                </path>

                {sectionIndex === 2 && (
                    <>

                        {/* Animated Button Background */}
                        <motion.g
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 0.85, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}

                        >
                            {/* <rect
                                x={1685.1475 + 61.5566 / 2 - 38}
                                y={1370.3772 + 18 - 20}
                                width={65}
                                height={32}
                                rx={10}
                                fill="#222"
                                opacity={0.95}
                                style={{
                                    cursor: 'pointer',
                                    transform: "rotate(-3deg)", transformOrigin: "1710px 1385px"
                                }}
                            /> */}
                        </motion.g>
                     

                        {/* Up Arrow Folded Band */}
                        <g
                            className={`coming-up${sectionIndex === 2 ? ' active' : ''}`}
                            transform="translate(1682,1190) scale(1.5)"
                        >
                            <path
                                d="
                                        M -18,6
                                        L -10,-8
                                        Q 0,-16 10,-8
                                        L 18,6
                                        Q 0,2 -18,6
                                        Z
                                        "
                                fill="#61dafb"
                                opacity="0.22"
                                style={{
                                    filter: "blur(1.5px)"
                                }}
                            />
                            <polygon
                                points="2,14 18,-2 22,12"
                                fill="#00000"
                                stroke="#8cc84b"
                                strokeWidth="2"
                                onClick={handleArrowUp}
                                style={{
                                    cursor: 'pointer',
                                    filter: "drop-shadow(0 0 8px #61dafb88)"
                                }}
                            />
                        </g>

                        {/* Down Arrow Folded Band */}
                        <g
                            className={`coming-up${sectionIndex === 2 ? ' active' : ''}`}
                            transform="translate(1680,1440) scale(1.5)"
                        >
                            <polygon
                                points="-2,3 9 ,12 20,1"
                                fill="#000000"
                                stroke="#8cc84b"
                                strokeWidth="2"
                                onClick={handleArrowDown}
                                style={{
                                    cursor: 'pointer',
                                    filter: "drop-shadow(0 0 10px #61dafb88)"
                                }}
                            />
                        </g>
                    </>
                )}

                {/* section 4 work experience  */}
                {/* Work Experience Section */}
                <path
                    className={`${sectionIndex===3?'fill-green-500':'fill-transparent'} cursor-pointer transition-opacity duration-200 ${hoveredElement === 'work' ? 'opacity-80' : 'opacity-60'
                        }`}
                    d="m 2336.2831,1650.5269 1.3763,-369.5484 -348.9032,95.6559 -8.1432,330.9398 z"

                >
                    <title>Work Experience</title>
                </path>

                {/* Education Section */}
                <path
                    className={`${sectionIndex===3?'fill-green-500':'fill-transparent'} cursor-pointer transition-opacity duration-200 ${hoveredElement === 'education' ? 'opacity-80' : 'opacity-60'
                        }`}
                    d="m 2584.3579,1670.4782 -1.3763,-369.5484 348.9032,95.6559 8.1432,330.9398 z"

                >
                    <title>Education</title>
                </path>


                {sectionIndex === 3 && (
                    <>
                        {/* Work Experience Text (skewX) */}
                        <g transform="skewY(-15)">
                           
                            <motion.text
                                x={2000}
                                y={1940}
                                fontSize="30"
                                fontWeight="bold"
                                fill="#fff"
                                style={{
                                    fontFamily: "Segoe UI, Arial, sans-serif",
                                    textTransform: "uppercase",
                                    userSelect: "none",
                                    pointerEvents: "none",
                                    textShadow: "2px 2px 8px #000a"
                                }}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeIn",
                                    delay: 0.2
                                }}
                            >
                                Work Experience
                            </motion.text>
                            <motion.text
                                x={2000}
                                y={2010}
                                fontSize="18"
                                fill="#fff"
                                style={{
                                    fontFamily: "Segoe UI, Arial, sans-serif",
                                    userSelect: "none",
                                    pointerEvents: "none",

                                }}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeIn",
                                    delay: 0.6
                                }}
                            >

                                <tspan x={2000} y={1968}>•Full Stack Developer </tspan>
                                <tspan x={2000} dy="22"> at Semicolon Solution, Surat</tspan>

                                <tspan x={2000} y={2018}>•Part-time mathematics teacher  </tspan>
                                <tspan x={2000} dy="22"> dronacharya acedamy, ahmedabad</tspan>
                            </motion.text>
                        </g>
                        {/* Education Text (skewY) */}
                        <g transform="skewY(15)">
                            <image
                                href="/education.png" // <-- Replace with your logo path
                                x={2450}
                                y={695}
                                width={85}
                                height={100}
                                style={{ pointerEvents: "none" }}
                            />
                             <image
                                href="/workexperience.png" // <-- Replace with your logo path
                                x={2380}
                                y={700}
                                width={100}
                                height={100}
                                style={{ pointerEvents: "none" }}
                            />
                            <motion.text
                                x={2600}
                                y={640}
                                fontSize="30"
                                fontWeight="bold"
                                fill="#fff"
                                style={{
                                    fontFamily: "Segoe UI, Arial, sans-serif",
                                    textTransform: "uppercase",
                                    userSelect: "none",
                                    pointerEvents: "none",
                                    textShadow: "2px 2px 8px #000a"
                                }}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeIn",
                                    delay: 0.4
                                }}
                            >
                                Education
                            </motion.text>
                            <motion.text
                                x={2600}
                                y={680}
                                fontSize="18"
                                fill="#fff"
                                style={{
                                    fontFamily: "Segoe UI, Arial, sans-serif",
                                    userSelect: "none",
                                    pointerEvents: "none"
                                }}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeIn",
                                    delay: 0.7
                                }}
                            >
                                <tspan x={2600} y={680}>• HSC & SSC from Surat </tspan>


                                <tspan x={2600} y={712}>• Bechalor of Engineering from   </tspan>
                                <tspan x={2600} dy="22">vishwakarma govt engg college</tspan>
                                <tspan x={2600} y={757}>• CGPA : 7.41  </tspan>

                            </motion.text>
                        </g>
                    </>
                )}
                {/* Work Experience Logo */}
                <path
                    className={`fill-transparent cursor-pointer transition-transform duration-200 origin-center ${hoveredElement === 'workLogo' ? 'scale-110' : 'scale-100'
                        }`}
                    d="m 2398.5062,1422.2426 -0.6083,-52.3106 c 0,0 -1.2165,-15.085 4.3795,-15.5716 5.5961,-0.4866 53.8922,4.7445 53.8922,4.7445 0,0 3.0413,-2.1898 2.798,10.2188 -0.2433,12.4086 -0.3649,80.5341 -0.3649,80.5341 0,0 -17.883,0.365 -25.3038,-5.8393 -7.4208,-6.2043 -6.2043,-31.7514 -6.2043,-31.7514 0,0 -18.7345,-1.2165 -19.2211,-0.9732 -0.4866,0.2433 -1.5815,4.2578 -1.8248,8.394 -0.2433,4.1362 -7.5425,2.5547 -7.5425,2.5547 z"

                >
                    <title>Work Experience Logo</title>
                </path>
                {/* Click Education/Work */}
                <path
                    className={`fill-transparent cursor-pointer transition-opacity duration-200 ${hoveredElement === 'clickEduWork' ? 'opacity-80' : 'opacity-60'
                        }`}
                    d="m 2445.4193,1507.7849 c 0,0 -2.4086,-9.9785 6.5376,-9.2903 8.9463,0.6882 48.5162,-1.3764 50.9248,2.7527 2.4086,4.129 2.4086,10.6666 2.4086,10.6666 l -3.785,15.828 -4.129,6.5376 -57.4624,-0.3441 4.129,-9.9784 z"

                />

                {/* Education Logo */}
                <path
                    className={`fill-transparent cursor-pointer transition-transform duration-200 origin-center ${hoveredElement === 'eduLogo' ? 'scale-110' : 'scale-100'
                        }`}
                    d="m 2471.9845,1361.2946 19.4644,1.4598 c 0,0 17.7613,2.9197 20.681,21.6542 2.9197,18.7346 2.4331,49.3911 2.4331,49.3911 0,0 -15.3283,3.1629 -15.3283,7.2991 0,4.1362 -14.1117,-5.596 -15.5715,-10.7054 -1.4599,-5.1094 -9.489,-6.326 -9.7323,0.2433 -0.2433,6.5692 -1.9464,-69.3421 -1.9464,-69.3421 z"

                >
                    <title>Education Logo</title>
                </path>

                {/* section 5 */}

                {/* contect details */}
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <path
                        key={`extra${num}`}
                        className={`fill-black cursor-pointer transition-opacity duration-200 ${hoveredElement === `extra${num}` ? 'opacity-80' : 'opacity-100'
                            }`}
                        d={getExtraPath(num)}

                    />
                ))}
                {sectionIndex === 4 && contactIcons.map((Icon, idx) => (
  <g
    key={`contact-icon-${idx}`}
    transform={`
      translate(${contactIconPositions[idx].x - 16}, ${contactIconPositions[idx].y - 18})
      skewY(15)
      scale(1)
    `}
    style={{ pointerEvents: 'none' }}
  >
    <motion.g
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1 + idx * 0.08
      }}
    >
      <Icon size={32} color="#000" style={{ filter: "drop-shadow(0 0 0px #aaffaa) drop-shadow(0 0 16px #eedc5a)" }} />
    </motion.g>
  </g>
))}



                {/* Bye Section */}
                <path
                    className="fill-black"
                    d="m 1812.5048,1735.1336 42.4568,0.4866 -0.2433,-33.4545 c 0,0 -5.3527,-20.4377 -21.8975,-17.6397 -16.5448,2.7981 -20.1944,19.4645 -20.1944,19.4645 z"
                />


                <path className="opacity-100 fill-black" d="m 1805.8138,1791.4588 53.0406,4.1362 0.9732,39.1722 -54.7437,-3.163 z" />
                <path className="opacity-100 fill-black" d="m 1701.9223,1716.2774 c 35.036,-0.4866 35.036,-0.4866 35.036,-0.4866 l 0.73,67.6389 c -35.036,0.2433 -35.036,0.2433 -35.036,0.2433 z" />
            </motion.g>
        </svg>
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

export default SceneSVG;
