import React from "react";

// Company logos with their names
const logos = [
  { src: `${import.meta.env.BASE_URL}logo/instagram.svg`, alt: "Instagram" },
  { src: `${import.meta.env.BASE_URL}logo/google.png`, alt: "google" },
  { src: `${import.meta.env.BASE_URL}logo/amazon.png`, alt: "amazon" },
  { src: `${import.meta.env.BASE_URL}logo/apple_pay.png`, alt: "apple pay" },
  { src: `${import.meta.env.BASE_URL}logo/linkedin-plain-wordmark logo.svg`, alt: "LinkedIn" },
  { src: `${import.meta.env.BASE_URL}logo/metalb.svg`, alt: "MetalLB" },
  { src: `${import.meta.env.BASE_URL}logo/microsoft logo.svg`, alt: "Microsoft" },
];


const LogoCarousel: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-4 px-2 md:py-6 md:px-8 group" style={{ backgroundColor: '#0D0D12' }}>
      {/* Left fade edge - responsive width */}
      <div className="absolute left-0 top-0 w-8 md:w-16 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0D0D12, rgba(13, 13, 18, 0.9), transparent)' }}></div>
      {/* Right fade edge - responsive width */}
      <div className="absolute right-0 top-0 w-8 md:w-16 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0D0D12, rgba(13, 13, 18, 0.9), transparent)' }}></div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-8 md:gap-20 animate-scroll-horizontal w-max">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-12 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
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
                className="h-8 md:h-12 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;