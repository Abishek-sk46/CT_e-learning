import React from "react";0
import {Carousel } from "../ui";
// import { TwoPeekCarousel } from "../ui";

const FieldsSection: React.FC = () => {
    return (
        <section
            className="container mx-auto px-4 sm:px-6 lg:px-20 py-24 sm:py-32 lg:py-20"
            role="region"
            aria-label="Fields Section"
        >
            {/* Mobile-first: Stack vertically, then side-by-side on larger screens */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
                {/* Text Section - Always first on mobile */}
                <div className="lg:col-span-7 xl:col-span-6">
                    <div className="max-w-[680px] mx-auto lg:mx-0">
                        {/* Section Label */}
                        <span
                            className="text-[#FD50A3] font-semibold text-[36px] sm:text-[40px] leading-[1.25] font-['Bricolage_Grotesque'] mb-[24px] block"
                            style={{ alignSelf: "stretch", fontStyle: "normal", lineHeight: "125.168%" }}
                        >
                            FIELDS
                        </span>

                        {/* Responsive Heading */}
                        <h2
                            className="
                            text-white 
                            font-['Plus_Jakarta_Sans'] 
                            text-[44px] 
                            font-semibold 
                            leading-[55px] 
                            self-stretch
                            mb-[24px]
                        "
                        >
                            Your Path to Becoming a Software Developer
                        </h2>

                        {/* Description */}
                        <p
                            className="
                            text-white 
                            font-['Plus_Jakarta_Sans'] 
                            text-[16px] 
                            font-normal 
                            leading-normal 
                            max-w-[575px]
                        "
                        >
                            Hear from our students as they share their learning experiences and
                            career growth. Real impact—from beginners to professionals.
                        </p>

                    </div>
                </div>

                {/* Cards Section - Second on mobile, side-by-side on desktop */}
                <div className="lg:col-span-5 xl:col-span-6 mt-12 lg:mt-0">
                    {/* <TwoPeekCarousel cards={[
                        {
                            title: "LEARN",
                            description: "Grasp the fundamentals and understand core development concepts",
                            icon: "/icons/learn.svg"
                        },
                        {
                            title: "PLAN",
                            description: "Build structured strategies for your growth and career path",
                            icon: "/icons/plan.svg"
                        },
                        {
                            title: "EXECUTE",
                            description: "Apply your skills in real-world projects and challenges",
                            icon: "/icons/execute.svg"
                        },
                        {
                            title: "BUILD",
                            description: "Create impressive portfolio projects that showcase your abilities",
                            icon: "/icons/build.svg"
                        },
                        {
                            title: "GROW",
                            description: "Advance your career and expand your professional network",
                            icon: "/icons/grow.svg"
                        }
                    ]} /> */}
                    <Carousel></Carousel>
                </div>
            </div>
        </section>
    );
};

export default FieldsSection;
