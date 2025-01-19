"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
import IntroSection from "./IntroSection";

const ScrollingSection = () => {
  const target = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (target.current) {
        const y = target.current.getBoundingClientRect().y;
        setIsScrolled(y <= 65);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <IntroSection />
      <div ref={target} />
    </>
  );
};

export default ScrollingSection;
