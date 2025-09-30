import React from "react";
import LogosMarquee from "./LogosMarquee";

const HeroSection: React.FC = () => {
  return (
    <section
      className="text-center text-white px-6 py-20 pt-32"
      style={{
        backgroundImage: "url('/Vector_1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Headings */}
      <h1
        className="mb-4"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 600,
          fontSize: '64px',
          color: '#FFFFFF'
        }}
      >
        Education Reimagined
      </h1>
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Loomed with Purpose
      </h2>

      {/* Subtext */}
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
        Gain practical, job-ready skills through expert-led courses and
        real-world projects. <br />
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
      <button className="bg-white text-gray-900 font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
        Start Learning Now
      </button>

      {/* Company Logos Carousel */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-12">
          Where do our looms{" "}
          <br />
          <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
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
