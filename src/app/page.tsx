"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntroSection from "@/components/home/IntroSection";

export default function Home() {
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
      <main>
        <IntroSection />
        <div ref={target} className="relative z-20 bg-white">
          <div className="max-w-[900px] mx-auto px-4 py-14">
            {/* <ProjectList /> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
