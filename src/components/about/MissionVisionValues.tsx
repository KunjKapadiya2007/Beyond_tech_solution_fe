'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hands from '../../../public/assets/images/about/hands.png';
import visionImg from '../../../public/assets/images/about/hiker-top 1.png';
import valuesImg from '../../../public/assets/images/about/business.png';

gsap.registerPlugin(ScrollTrigger);

const contentData = {
    mission: {
        heading: 'Our Mission',
        text: 'To empower businesses with innovative IT solutions that blend strategy, design, and technology for impactful, future-ready experiences.',
        image: hands,
    },
    vision: {
        heading: 'Our Vision',
        text: 'To be a globally trusted tech partner, crafting scalable, human-centric solutions that drive progress for businesses and society.',
        image: visionImg,
    },
    values: {
        heading: 'Our Values',
        text: 'Innovation First People-Centric Approach Simplicity with Purpose Quality & Craftsmanship Long-Term Partnerships',
        image: valuesImg,
    },
};

const MissionVisionValues = () => {
    const [activeTab, setActiveTab] = useState('mission');
    const { heading, text, image } = contentData[activeTab as keyof typeof contentData];

    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });

            gsap.from(contentRef.current, {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-[#1A1818] py-10" ref={sectionRef}>
            <div className="container mx-auto px-4 relative z-10">
                {/* Gradient Glow */}
                <div className="absolute inset-0 z-0 flex justify-center items-center w-full">
                    <div className="w-full h-full rounded-[200px] bg-[#EF3A65] blur-[100px] opacity-40"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full bg-[#111010] rounded-[60px] sm:rounded-[120px] lg:rounded-[220px] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-10 xl:px-10 py-10 shadow-xl gap-y-10 lg:gap-y-0">
                    {/* Left - Image */}
                    <div ref={imageRef}>
                        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden">
                            <Image
                                src={image}
                                alt={heading}
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Center - Tabs */}
                    <div className="flex flex-col justify-center text-center lg:text-left min-w-[200px] lg:mx-6 gap-2">
                        {['mission', 'vision', 'values'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[45px] cursor-pointer font-semibold transition-colors ${
                                    activeTab === tab ? 'text-white font-bold' : 'text-[#888888]'
                                }`}
                            >
                                {contentData[tab as keyof typeof contentData].heading}
                            </button>
                        ))}
                    </div>

                    {/* Right - Description */}
                    <div
                        ref={contentRef}
                        className="lg:ml-4 max-w-sm text-center lg:text-left px-3 lg:px-0"
                    >
                        <p className="text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] leading-relaxed tracking-wide">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;
