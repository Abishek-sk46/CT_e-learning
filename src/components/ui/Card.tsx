import React, { useState } from "react";

interface CardData {
  title: string;
  description: string;
  imagePath: string;
}

const cards: CardData[] = [
  {
    title: "LEARN",
    description: "Grasp the fundamentals and understand core development concepts",
    imagePath: `${import.meta.env.BASE_URL}field_logos/learn.png`,
  },
  {
    title: "PLAN",
    description: "Build structured strategies for your growth and career path",
    imagePath: `${import.meta.env.BASE_URL}field_logos/plan.png`,
  },
  {
    title: "GROW",
    description: "Advance your career and expand your professional network",
    imagePath: `${import.meta.env.BASE_URL}field_logos/Grow.png`,
  },
  {
    title: "EXECUTE",
    description: "Apply your skills in real-world projects and challenges",
    imagePath: `${import.meta.env.BASE_URL}field_logos/Build.png`,
  },
];

const CARD_WIDTH = 280;
const GAP = 24;
const VIEWPORT_WIDTH = CARD_WIDTH + GAP + CARD_WIDTH / 2;

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    if (activeIndex < cards.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* Navigation */}
      <div className="flex justify-end items-center gap-3 mb-6">
        {/* First card → show right arrow only */}
        {activeIndex === 0 && (
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700"
            aria-label="Next slide"
          >
            <img
              src={`${import.meta.env.BASE_URL}arrow.svg`}
              alt="Next"
              className="w-5 h-5 rotate-180"
            />
          </button>
        )}

        {/* Middle cards → show both arrows */}
        {activeIndex > 0 && activeIndex < cards.length - 1 && (
          <>
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700"
              aria-label="Previous slide"
            >
              <img
                src={`${import.meta.env.BASE_URL}arrow.svg`}
                alt="Previous"
                className="w-5 h-5"
              />
            </button>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700"
              aria-label="Next slide"
            >
              <img
                src={`${import.meta.env.BASE_URL}arrow.svg`}
                alt="Next"
                className="w-5 h-5 rotate-180"
              />
            </button>
          </>
        )}

        {/* Last card → show left arrow only in the right position */}
        {activeIndex === cards.length - 1 && (
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700"
            aria-label="Previous slide"
          >
            <img
              src={`${import.meta.env.BASE_URL}arrow.svg`}
              alt="Previous"
              className="w-5 h-5"
            />
          </button>
        )}
      </div>


      {/* Carousel */}
      <div className="overflow-hidden" style={{ width: `${VIEWPORT_WIDTH}px` }}>
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            transform: `translateX(-${activeIndex * (CARD_WIDTH + GAP)}px)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[280px] h-[320px] flex flex-col items-center gap-[5px] cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
              style={{
                padding: "0 34px 35px 35px",
                borderRadius: "8px",
                border: "0.5px solid #FFF",
                background: "transparent",
              }}
            >
              {/* Image Wrapper */}
              <div
                className="relative flex flex-col justify-end items-center z-10"
                style={{
                  width: "236px",
                  height: "194px",
                  padding: "13px 65px",
                }}
              >
                {/* Image without background for transparent images */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg"
                  style={{
                    width: "105px",
                    height: "98px",
                    backgroundImage: `url(${card.imagePath})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                  role="img"
                  aria-label={`${card.title} icon`}
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2 tracking-wide uppercase z-10">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed z-10">
                {card.description}
              </p>
            </div>
          ))}

          {/* Start Now Button */}
          {activeIndex === cards.length - 1 && (
            <div className="flex-shrink-0 w-[280px] h-[320px] flex items-center justify-center">
              <button className="px-8 py-4 rounded-lg bg-pink-500 text-white font-semibold text-lg hover:bg-pink-600">
                Start Now
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === activeIndex
              ? "bg-pink-400 scale-110"
              : "bg-gray-600 hover:bg-gray-500"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
