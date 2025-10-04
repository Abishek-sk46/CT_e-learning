import React, { useState } from "react";

interface CardData {
    title: string;
    description: string;
    imagePath: string;
}

const cards: CardData[] = [
    {
        title: "LEARN",
        description: "Grasp the fundamentals and understand markets",
        imagePath: `${import.meta.env.BASE_URL}field_logos/learn.png`,
    },
    {
        title: "PLAN",
        description: "Grasp the fundamentals and understand markets",
        imagePath: `${import.meta.env.BASE_URL}field_logos/plan.png`,
    },
    {
        title: "GROW",
        description: "Grasp the fundamentals and understand markets",
        imagePath: `${import.meta.env.BASE_URL}field_logos/Grow.png`,
    },
    {
        title: "EXECUTE",
        description: "Grasp the fundamentals and understand markets",
        imagePath: `${import.meta.env.BASE_URL}field_logos/Execute.png`,
    },
];


const Carousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showGlow, setShowGlow] = useState(true);

    const nextSlide = () => {
        if (activeIndex < cards.length - 1 && !isTransitioning) {
            setIsTransitioning(true);
            setShowGlow(false); // Glow fades out instantly

            // Fade out content first
            setTimeout(() => {
                setActiveIndex((prev) => prev + 1);
                // Fade content back in
                setTimeout(() => {
                    setIsTransitioning(false);
                    // After ~400ms, start the glow fade in
                    setTimeout(() => {
                        setShowGlow(true);
                    }, 400);
                }, 50);
            }, 400);
        }
    };

    const prevSlide = () => {
        if (activeIndex > 0 && !isTransitioning) {
            setIsTransitioning(true);
            setShowGlow(false); // Glow fades out instantly

            // Fade out content first
            setTimeout(() => {
                setActiveIndex((prev) => prev - 1);
                // Fade content back in
                setTimeout(() => {
                    setIsTransitioning(false);
                    // After ~400ms, start the glow fade in
                    setTimeout(() => {
                        setShowGlow(true);
                    }, 400);
                }, 50);
            }, 400);
        }
    };

    return (
        <div className="relative w-full max-w-[520px] mx-auto">
            {/* Navigation */}
            <div className="flex justify-end items-center gap-3 mb-6">
                {/* First card → show right arrow only */}
                {activeIndex === 0 && (
                    <button
                        onClick={nextSlide}
                        className="p-2 text-white"
                        aria-label="Next slide"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}arrow.svg`}
                            alt="Next"
                            className="w-7 h-7 rotate-180"
                        />
                    </button>
                )}

                {/* Middle cards → show both arrows */}
                {activeIndex > 0 && activeIndex < cards.length - 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="p-2 text-white"
                            aria-label="Previous slide"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}arrow.svg`}
                                alt="Previous"
                                className="w-7 h-7"
                            />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="p-2 text-white"
                            aria-label="Next slide"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}arrow.svg`}
                                alt="Next"
                                className="w-7 h-7 rotate-180"
                            />
                        </button>
                    </>
                )}

                {/* Last card → show left arrow only */}
                {activeIndex === cards.length - 1 && (
                    <button
                        onClick={prevSlide}
                        className="p-2 text-white"
                        aria-label="Previous slide"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}arrow.svg`}
                            alt="Previous"
                            className="w-7 h-7"
                        />
                    </button>
                )}
            </div>

            {/* Static Cards with In-Place Content Changes */}
            <div className="flex gap-6">
                {/* Main Card - Content changes in place */}
                <div
                    className="relative w-[360px] h-[340px] flex flex-col items-center gap-[5px] cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
                    style={{
                        padding: "0 34px 35px 35px",
                        borderRadius: "8px",
                        border: "0.5px solid #FFF",
                        background: "rgba(255, 255, 255, 0.12)",
                    }}
                >
                    {/* 🔥 Torch light with fade animation */}
                    <div className={`absolute top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-[1500ms] ease-in-out ${showGlow ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Electric Bulb Element */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-10">
                            <div
                                className="relative w-8 h-4"
                                style={{
                                    background: '#ce0e43',
                                    boxShadow: '0 0 20px rgba(206,14,67,0.8), inset 0 0 10px rgba(255,255,255,0.3)',
                                    borderRadius: '4px',
                                }}
                            >
                            </div>
                        </div>

                        <div
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"
                            style={{
                                width: '0',
                                height: '0',
                                borderLeft: '45px solid transparent',
                                borderRight: '45px solid transparent',
                                borderBottom: '315px solid rgba(214,14,73,0.4)',
                                filter: 'blur(8px)',
                            }}
                        />
                        <div
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
                            style={{
                                width: '0',
                                height: '0',
                                borderLeft: '100px solid transparent',
                                borderRight: '100px solid transparent',
                                borderBottom: '340px solid rgba(214,14,73,0.2)',
                                filter: 'blur(16px)',
                            }}
                        />
                    </div>

                    {/* Content that changes in place */}
                    <div className={`relative w-full h-full flex flex-col items-center gap-[5px] z-10 transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        {/* Image Wrapper */}
                        <div
                            className="flex flex-col justify-end items-center"
                            style={{
                                width: "236px",
                                height: "194px",
                                padding: "13px 65px",
                            }}
                        >
                            <div
                                className="flex-shrink-0 flex items-center justify-center rounded-lg"
                                style={{
                                    width: "140px",
                                    height: "130px",
                                    backgroundImage: `url(${cards[activeIndex].imagePath})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}
                                role="img"
                                aria-label={`${cards[activeIndex].title} icon`}
                            />
                        </div>

                        {/* Title */}
                        <h3
                            className="text-white text-center uppercase mb-4"
                            style={{
                                alignSelf: 'stretch',
                                color: '#FFF',
                                textAlign: 'center',
                                fontFamily: '"Plus Jakarta Sans"',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: 'normal',
                            }}
                        >
                            {cards[activeIndex].title}
                        </h3>

                        {/* Description */}
                        <p
                            className="text-gray-400 text-center"
                            style={{
                                alignSelf: 'stretch',
                                color: '#AAA',
                                textAlign: 'center',
                                fontFamily: '"Plus Jakarta Sans"',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal',
                            }}
                        >
                            {cards[activeIndex].description}
                        </p>
                    </div>
                </div>

                {/* Half Preview Card - Full content but cropped to show only half */}
                {activeIndex < cards.length - 1 && (
                    <div
                        className="relative w-[210px] h-[340px] overflow-hidden opacity-40"
                        style={{
                            borderRadius: "8px 0 0 8px", // Only left corners rounded since right side is cut off
                        }}
                    >
                        {/* Full-sized card content but only half visible */}
                        <div
                            className="relative w-[350px] h-[340px] flex flex-col items-center gap-[5px] cursor-pointer transition-opacity duration-500 ease-in-out"
                            style={{
                                padding: "0 34px 35px 35px",
                                borderRadius: "8px",
                                border: "0.5px solid #FFF",
                                background: "rgba(255, 255, 255, 0.12)",
                            }}
                        >
                            {/* Content that changes in place - same as main card */}
                            <div className={`relative w-full h-full flex flex-col items-center gap-[5px] z-10 transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                {/* Image Wrapper - Same size as main card */}
                                <div
                                    className="flex flex-col justify-end items-center"
                                    style={{
                                        width: "236px",
                                        height: "194px",
                                        padding: "13px 65px",
                                    }}
                                >
                                    <div
                                        className="flex-shrink-0 flex items-center justify-center rounded-lg"
                                        style={{
                                            width: "140px",
                                            height: "130px",
                                            backgroundImage: `url(${cards[activeIndex + 1].imagePath})`,
                                            backgroundPosition: "center",
                                            backgroundSize: cards[activeIndex + 1].title === "GROW" ? "160px" : "contain",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                        role="img"
                                        aria-label={`${cards[activeIndex + 1].title} icon`}
                                    />
                                </div>

                                {/* Title - Same size as main card */}
                                <h3
                                    className="text-white text-center uppercase mb-4"
                                    style={{
                                        alignSelf: 'stretch',
                                        color: '#FFF',
                                        textAlign: 'center',
                                        fontFamily: '"Plus Jakarta Sans"',
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        lineHeight: 'normal',
                                    }}
                                >
                                    {cards[activeIndex + 1].title}
                                </h3>

                                {/* Description - Same size as main card */}
                                <p
                                    className="text-gray-400 text-sm leading-relaxed"
                                    style={{
                                        alignSelf: 'stretch',
                                        color: '#AAA',
                                        textAlign: 'center',
                                        fontFamily: '"Plus Jakarta Sans"',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        lineHeight: 'normal',
                                    }}
                                >
                                    {cards[activeIndex + 1].description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Start Now Button - Only on Last Card */}
                {activeIndex === cards.length - 1 && (
                    <div className="w-[175px] h-[340px] flex items-center justify-center transition-opacity duration-500 ease-in-out">
                        <button
                            className="flex justify-center items-center gap-[10px] text-white font-semibold text-lg"
                            style={{
                                display: 'flex',
                                width: '198px',
                                padding: '14px 20px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                borderRadius: '12px',
                                border: '0.5px solid #DADADA',
                                background: '#19191E'
                            }}
                            onClick={() => alert("Start Now clicked!")}
                        >
                            START NOW
                        </button>
                    </div>
                )}
            </div>

            {/* Pagination Dots */}
            <div className="relative flex justify-end gap-2 mt-6">
                {/* Static white/gray dots (still clickable) */}
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (index !== activeIndex && !isTransitioning) {
                                setIsTransitioning(true);
                                setShowGlow(false); // Glow fades out instantly

                                setTimeout(() => {
                                    setActiveIndex(index);
                                    setTimeout(() => {
                                        setIsTransitioning(false);
                                        // After ~400ms, start the glow fade in
                                        setTimeout(() => {
                                            setShowGlow(true);
                                        }, 400);
                                    }, 50);
                                }, 400);
                            }
                        }}
                        className="w-3 h-3 rounded-full bg-gray-400 opacity-70 focus:outline-none"
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}

                {/* Moving red active dot */}
                <div
                    className="absolute top-0 w-3 h-3 rounded-full bg-pink-500 transition-transform duration-500 ease-in-out"
                    style={{
                        // dot size (12px) + gap (8px) = 20px shift per index
                        transform: `translateX(${activeIndex * 20}px)`,
                        right: `${(cards.length - 1) * 20}px`, // keep alignment since you're using justify-end
                    }}
                />
            </div>

        </div>
    );
};

export default Carousel;
