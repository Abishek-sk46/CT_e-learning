import React from "react";
import LogosMarquee from "./LogosMarquee";

const HeroSection: React.FC = () => {
  return (
    <section
      className="text-center text-white px-6 py-20 pt-32"
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
          color: '#FFFFFF'
        }}
      >
        Education Reimagined
      </h1>
      <div className="relative inline-block">
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
        className="text-lg max-w-3xl mx-auto mb-10"
        style={{
          alignSelf: 'stretch',
          color: '#DCDCDC',
          textAlign: 'center',
          fontFamily: '"Plus Jakarta Sans"',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '150%',
        }}
      >
        Gain practical, job-ready skills through expert-led courses and
        real-world projects.
        We help you to weave knowledge into meaningful career growth.
      </p>

      {/* Reviews */}
      <div className="flex flex-col items-center gap-4 mb-10">
        {/* Avatars */}
        <div className="flex -space-x-3">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="user1"
            className="w-10 h-10 rounded-full border-2 border-gray-900"
          />
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="user2"
            className="w-10 h-10 rounded-full border-2 border-gray-900"
          />
          <img
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="user3"
            className="w-10 h-10 rounded-full border-2 border-gray-900"
          />
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="user4"
            className="w-10 h-10 rounded-full border-2 border-gray-900"
          />
          <img
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt="user5"
            className="w-10 h-10 rounded-full border-2 border-gray-900"
          />
        </div>

        {/* Review text */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">500+ reviews</span>
          <span className="text-pink-500 text-lg">★★★★★</span>
          <span className="text-gray-300">(4.9 of 5)</span>
        </div>
      </div>

      {/* CTA button */}
      <div className="flex justify-center">
        <button
          className="shadow-md hover:shadow-lg transition"
          style={{
            width: '224px',
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
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
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
