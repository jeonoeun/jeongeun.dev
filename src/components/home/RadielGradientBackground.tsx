"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const RadialGradientBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);
      setMousePosition({ x: mouseXpercentage, y: mouseYpercentage });
    };

    const handleMouseEnter = () => {
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

    const containerElement = containerRef.current;

    document.addEventListener("mousemove", handleMouseMove);

    if (containerElement) {
      containerElement.addEventListener("mouseenter", handleMouseEnter);
      containerElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("mouseenter", handleMouseEnter);
        containerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 left-0 w-full z-10 font-lato"
    >
      <motion.div
        animate={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              #fcc33c 5%, #ff8c42 15%, #00c9c2 40%, #fdb100 100%)
          `,
          backgroundColor: "#fdb100",
          backgroundSize: "150% 150%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default RadialGradientBackground;
