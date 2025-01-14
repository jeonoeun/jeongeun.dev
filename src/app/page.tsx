"use client";

import { useEffect, useRef, useState } from "react";
import Card from "@/components/Card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import projects from "@/data/projects";
import IntroSection from "@/components/home/IntroSection";

export default function Home() {
  const target = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (target.current) {
        const y = target.current.getBoundingClientRect().y;
        setIsScrolled(y <= 80);
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
          <div className="max-w-[1024px] mx-auto px-4 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
              {projects.map((project, index) => (
                <Card key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
