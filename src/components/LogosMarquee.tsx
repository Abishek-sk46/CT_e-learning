import React from "react";

// Company logos with their names
const logos = [
  { src: "logo/LOGOS/apple-seeklogo.svg", alt: "Apple" },
  { src: "logo/LOGOS/google-black-seeklogo.svg", alt: "Google" },
  { src: "logo/LOGOS/instagram-seeklogo.svg", alt: "Instagram" },
  { src: "logo/LOGOS/linkedin-black-seeklogo.png", alt: "LinkedIn" },
  { src: "logo/LOGOS/meta-seeklogo.svg", alt: "Meta" },
  { src: "logo/LOGOS/microsoft-seeklogo.png", alt: "Microsoft" },
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 px-4 md:py-10 md:px-16 bg-gray-900 group">
      {/* Left fade edge - responsive width */}
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none"></div>
      {/* Right fade edge - responsive width */}
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none"></div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-6 md:gap-16 animate-scroll-horizontal w-max">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-20 h-14 md:w-32 md:h-20 bg-white rounded-lg md:rounded-xl p-2 md:p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-8 max-w-16 md:max-h-12 md:max-w-22 object-contain opacity-80 grayscale-[20%] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-20 h-14 md:w-32 md:h-20 bg-white rounded-lg md:rounded-xl p-2 md:p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={logo.src}
                alt={`${logo.alt} Copy`}
                className="max-h-8 max-w-16 md:max-h-12 md:max-w-22 object-contain opacity-80 grayscale-[20%] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;