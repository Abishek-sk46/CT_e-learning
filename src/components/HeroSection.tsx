import React from "react";
import LogosMarquee from "./LogosMarquee";

const HeroSection: React.FC = () => {
  return (
    <section
      className="text-center text-white px-6 py-20 pt-40"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}Vector_1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Headings */}
      <h1
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 600,
          fontSize: '64px',
          color: '#FFFFFF',
          marginBottom: '0',
          lineHeight: '1'
        }}
      >
        Education Reimagined
      </h1>
      <div className="relative inline-block" style={{ marginTop: '-10px' }}>
        {/* Glow Layer */}
        <h2
          className="absolute inset-0 text-transparent bg-clip-text blur-sm opacity-40"
          style={{
            backgroundImage: "linear-gradient(to right, #BC60DA, #DF5780, #FF4F5A)",
            fontSize: "82px",
            fontWeight: 600,
            fontFamily: '"Bricolage Grotesque"',
          }}
        >
          Loomed with Purpose
        </h2>

        {/* Main Text */}
        <h2
          className="relative text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #BC60DA, #DF5780, #FF4F5A)",
            fontSize: "82px",
            fontWeight: 600,
            fontFamily: '"Bricolage Grotesque"',
          }}
        >
          Loomed with Purpose
        </h2>

      </div>

      {/* Subtext */}
      <p
        className="text-lg max-w-3xl mx-auto mb-10 text-center font-['Plus_Jakarta_Sans'] text-[#DCDCDC] font-medium leading-[150%]"
      >
        Gain practical, job-ready skills through expert-led courses and real-world projects. <br />
        We help you to&nbsp;<span className="whitespace-nowrap">weave knowledge into meaningful career growth.</span>
      </p>


      {/* Reviews */}
      <div className="flex flex-col items-center gap-4 mb-10">
        {/* Avatars */}
        <div className="flex -space-x-3">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="user1"
            style={{
              width: '50px',
              height: '50px',
              aspectRatio: '1/1',
              borderRadius: '45px',
              border: '4px solid var(--BG-color, #0D0D12)',
              background: 'url(https://randomuser.me/api/portraits/women/1.jpg) lightgray 50% / cover no-repeat'
            }}
          />
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="user2"
            style={{
              width: '50px',
              height: '50px',
              aspectRatio: '1/1',
              borderRadius: '45px',
              border: '4px solid var(--BG-color, #0D0D12)',
              background: 'url(https://randomuser.me/api/portraits/women/2.jpg) lightgray 50% / cover no-repeat'
            }}
          />
          <img
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="user3"
            style={{
              width: '50px',
              height: '50px',
              aspectRatio: '1/1',
              borderRadius: '45px',
              border: '4px solid var(--BG-color, #0D0D12)',
              background: 'url(https://randomuser.me/api/portraits/women/3.jpg) lightgray 50% / cover no-repeat'
            }}
          />
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="user4"
            style={{
              width: '50px',
              height: '50px',
              aspectRatio: '1/1',
              borderRadius: '45px',
              border: '4px solid var(--BG-color, #0D0D12)',
              background: 'url(https://randomuser.me/api/portraits/men/4.jpg) lightgray 50% / cover no-repeat'
            }}
          />
          <img
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt="user5"
            style={{
              width: '50px',
              height: '50px',
              aspectRatio: '1/1',
              borderRadius: '45px',
              border: '4px solid var(--BG-color, #0D0D12)',
              background: 'url(https://randomuser.me/api/portraits/men/5.jpg) lightgray 50% / cover no-repeat'
            }}
          />
        </div>

        {/* Review text */}
        <div className="flex items-center gap-2">
          <span
            className="font-semibold"
            style={{
              color: "#FCFCFC",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "121.101%",
            }}
          >
            500+ reviews
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                style={{
                  width: '22px',
                  height: '22px',
                  transform: 'rotate(72.728deg)',
                  aspectRatio: '18.00/17.19'
                }}
                viewBox="0 0 24 24"
                fill="#EC4899"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span
            style={{
              color: "#FCFCFC",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "121.101%",
              letterSpacing: "-1px"
            }}
          >
            (4.9 of 5)
          </span>
        </div>
      </div>


      {/* CTA button */}
      <div className="flex justify-center">
        <button
          className="cta-button shadow-md hover:shadow-lg transition-all duration-300"
          style={{
            width: '250px',
            height: '60px',
            borderRadius: '12px',
            padding: '14px 20px',
            gap: '10px',
            backgroundColor: '#451AF5',
            color: 'white',
            fontFamily: '"Plus Jakarta Sans"',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '0%',
            border: '2px solid transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap'
          }}
        >
          Start Learning Now
        </button>
      </div>

      {/* Company Logos Carousel */}
      <div className="mt-12">
        <h3
          className="mx-auto mb-12"
          style={{
            width: "460px",
            textAlign: "center",
            fontFamily: '"Bricolage Grotesque"',
            fontSize: "42px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "107%", // ~44.94px
            color: "#FFF",
          }}
        >
          Where do our looms <br />
          <span
            style={{
              background: "linear-gradient(91deg, #BC60DA -1.84%, #DF5780 34.96%, #FF4F5A 103.21%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: '"Bricolage Grotesque"',
              fontSize: "42px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "107%",
            }}
          >
            work?
          </span>
        </h3>


        <div className="mt-12">
          <LogosMarquee />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
