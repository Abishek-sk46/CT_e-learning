import React, { useState, useEffect } from "react";
import { Button } from "../ui";
import LogosMarquee from "./LogosMarquee";

const HeroSection: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Hide scroll indicator when user scrolls down more than 50% of viewport height
      if (scrollY > windowHeight * 0.5) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="text-center text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-20 pt-24 sm:pt-40 w-full relative"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}Vector_1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* Scroll Down Indicator - Only visible when needed */}
      {showScrollIndicator && (
        <div className="fixed right-6 top-2/3 -translate-y-1/2 z-50 flex flex-col items-center gap-4 transition-opacity duration-300">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}scroll.svg`}
              alt="Scroll down arrow"
              className="w-10 h-70"
            />
          </div>
          <div>
            <span
              className="text-sm font-medium whitespace-nowrap"
              style={{
                fontFamily: 'Inter, sans-serif',
                writingMode: 'vertical-lr',
                textOrientation: 'mixed',
                background: 'linear-gradient(to bottom, #FFFFFF, #404040)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              Scroll Down
            </span>
          </div>
        </div>
      )}


      {/* Headings */}
      <div className="w-full max-w-5xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 600,
            color: '#FFFFFF',
            lineHeight: '0.9'
          }}
        >
          Education Reimagined
        </h1>
        <div className="relative flex justify-center w-full" style={{ marginTop: '0px' }}>
          <div className="relative inline-block">
            <h2
              className="absolute inset-0 text-transparent bg-clip-text blur-sm opacity-40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{
                backgroundImage: "linear-gradient(to right, #BC60DA, #DF5780, #FF4F5A)",
                fontWeight: 600,
                fontFamily: '"Bricolage Grotesque"',
                lineHeight: '0.9',
                marginTop: '0',
                marginBottom: '0'
              }}
            >
              Loomed with Purpose
            </h2>

            <h2
              className="relative text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{
                backgroundImage: "linear-gradient(to right, #BC60DA, #DF5780, #FF4F5A)",
                fontWeight: 600,
                fontFamily: '"Bricolage Grotesque"',
                lineHeight: '0.9',
                marginTop: '0',
                marginBottom: '0'
              }}
            >
              Loomed with Purpose
            </h2>
          </div>
        </div>
      </div>

      {/* Subtext */}
      <div className="w-full max-w-4xl mx-auto mt-8 sm:mt-6">
        <p
          className="text-base sm:text-lg mb-10 text-center font-['Plus_Jakarta_Sans'] text-[#DCDCDC] font-medium leading-[150%] max-w-full sm:max-w-3xl mx-auto px-2 sm:px-0"
        >
          Gain practical, job-ready skills through expert-led courses and real-world projects. We help you to weave knowledge into meaningful career growth.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 mb-10 w-full max-w-2xl mx-auto">
        <div className="flex -space-x-2 sm:-space-x-3 justify-center">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="user1"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-[#0D0D12]"
          />
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="user2"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-[#0D0D12]"
          />
          <img
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="user3"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-[#0D0D12]"
          />
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="user4"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-[#0D0D12]"
          />
          <img
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt="user5"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-[#0D0D12]"
          />
        </div>

        {/* Review text */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="font-semibold text-base sm:text-lg text-white">
            500+ reviews
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="#EC4899"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-base sm:text-lg text-white">
            (4.9 of 5)
          </span>
        </div>
      </div>

      <div className="flex justify-center w-full max-w-md mx-auto">
        <Button
          variant="primary"
          size="lg"
          className="w-2/3 max-w-xs sm:max-w-sm text-base sm:text-lg md:text-xl !rounded-lg"
          style={{
            height: '60px',
            fontFamily: '"Plus Jakarta Sans"',
            fontWeight: 600,
          }}
        >
          Start Learning Now
        </Button>
      </div>

      {/* Company Logos Carousel */}
      <div className="mt-20 sm:mt-24 w-full">
        <div className="max-w-3xl mx-auto">
          <h3
            className="mb-16 sm:mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              textAlign: "center",
              fontFamily: '"Bricolage Grotesque"',
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "107%",
              color: "#FFF",
            }}
          >
            Where do our looms <br />
            <span
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{
                background: "linear-gradient(91deg, #BC60DA -1.84%, #DF5780 34.96%, #FF4F5A 103.21%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Bricolage Grotesque"',
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "107%",
              }}
            >
              work?
            </span>
          </h3>
        </div>

        <div className="mt-12 w-full">
          <LogosMarquee />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;