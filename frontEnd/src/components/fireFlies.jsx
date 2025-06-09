import React, { useEffect, useRef } from "react";

const NUM_FIREFLIES = 28;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const Fireflies = () => {
  const containerRef = useRef();

  useEffect(() => {
    const fireflies = containerRef.current.querySelectorAll('.firefly');
    fireflies.forEach(firefly => {
      const animate = () => {
        firefly.style.transition = "transform 6s cubic-bezier(.5,0,.5,1)";
        firefly.style.transform = `translate(${random(-40, 100)}vw, ${random(-10, 100)}vh) scale(${random(0.5, 1.2)})`;
        setTimeout(animate, random(4000, 7000));
      };
      animate();
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 5,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {[...Array(NUM_FIREFLIES)].map((_, i) => (
        <div
          key={i}
          className="firefly"
          style={{
            position: "absolute",
            left: `${random(0, 100)}vw`,
            top: `${random(0, 100)}vh`,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "radial-gradient(circle, #fff700 60%, #00ffb0 100%)",
            boxShadow: "0 0 16px 6px #fff70088, 0 0 32px 12px #00ffb088",
            opacity: random(0.5, 1),
            filter: "blur(0.5px)",
            transition: "transform 6s cubic-bezier(.5,0,.5,1)",
            willChange: "transform",
            mixBlendMode: "screen",
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;