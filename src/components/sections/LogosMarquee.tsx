import React from "react";

// Company logos with their names
const logos = [
  { src: `${import.meta.env.BASE_URL}logo/instagram.svg`, alt: "Amazon" },
  { src: `${import.meta.env.BASE_URL}logo/Frame2.svg`, alt: "Frame 2" },
  { src: `${import.meta.env.BASE_URL}logo/Frame 3.svg`, alt: "Frame 3" },
  { src: `${import.meta.env.BASE_URL}logo/googleplus logo.svg`, alt: "Google Plus" },
  { src: `${import.meta.env.BASE_URL}logo/linkedin-plain-wordmark logo.svg`, alt: "LinkedIn" },
  { src: `${import.meta.env.BASE_URL}logo/metalb.svg`, alt: "MetalLB" },
  { src: `${import.meta.env.BASE_URL}logo/microsoft logo.svg`, alt: "Microsoft" },
];


const LogoCarousel: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 px-4 md:py-10 md:px-16 group" style={{ backgroundColor: '#0D0D12' }}>
      {/* Left fade edge - responsive width */}
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0D0D12, rgba(13, 13, 18, 0.9), transparent)' }}></div>
      {/* Right fade edge - responsive width */}
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0D0D12, rgba(13, 13, 18, 0.9), transparent)' }}></div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-6 md:gap-16 animate-scroll-horizontal w-max">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={`${logo.alt} Copy`}
                className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;