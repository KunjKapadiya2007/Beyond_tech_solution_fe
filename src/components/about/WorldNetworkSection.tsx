'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import worldMap from '../../../public/assets/images/about/map.png';
import Bangladesh from '../../../public/assets/images/about/emojione_flag-for-bangladesh.png';
import US from '../../../public/assets/images/about/emojione_flag-for-bangladesh (1).png';
import Australia from '../../../public/assets/images/about/emojione_flag-for-bangladesh (2).png';
import China from '../../../public/assets/images/about/emojione_flag-for-bangladesh (3).png';

gsap.registerPlugin(ScrollTrigger);

const countries = [
    {
        name: 'Bangladesh',
        flag: Bangladesh,
        description: 'Event madness gathering innovators, & tech enthusiasts in Speed.',
    },
    {
        name: 'United States',
        flag: US,
        description: 'Event madness gathering innovators, & tech enthusiasts in Speed.',
    },
    {
        name: 'Australia',
        flag: Australia,
        description: 'Event madness gathering innovators, & tech enthusiasts in Speed.',
    },
    {
        name: 'China',
        flag: China,
        description: 'Event madness gathering innovators, & tech enthusiasts in Speed.',
    },
];

export default function WorldNetworkSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.from(titleRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                },
            });

            // Map Animation
            gsap.from(mapRef.current, {
                scale: 0.95,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: mapRef.current,
                    start: 'top 85%',
                },
            });

            // Grid Cards Animation
            gsap.from(cardsRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="text-white pt-30 pb-20 px-4"
            style={{ backgroundColor: '#262525' }}
        >
            {/* Title */}
            <div className="text-center mb-10">
                <h2
                    ref={titleRef}
                    className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold mb-18 leading-tight text-center"
                >
                    Our network & world <br /> work details.
                </h2>
            </div>

            {/* World Map */}
            <div ref={mapRef} className="flex justify-center mb-10">
                <div className="max-w-5xl w-full">
                    <Image
                        src={worldMap}
                        alt="World map network"
                        className="w-full h-auto mx-auto"
                        placeholder="blur"
                    />
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {countries.map((country, index) => (
                    <div
                        key={index}
                        ref={(el) => {cardsRef.current[index] = el!}}
                        className="bg-white text-black rounded-xl p-5 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-x-2 mb-3 pb-3 border-b-[2px] border-b-[#C4C4C4A6]">
                            <Image
                                src={country.flag}
                                alt={`${country.name} Flag`}
                                width={60}
                                height={60}
                                className="rounded-sm w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px]"
                            />
                            <h3 className="text-[#183B56] text-[16px] sm:text-[20px] md:text-[22px] font-medium">
                                {country.name}
                            </h3>
                        </div>
                        <p className="text-[#7C8F9E] text-left text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] font-normal">
                            {country.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
