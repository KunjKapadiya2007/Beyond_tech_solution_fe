'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface IndustryPair {
    parent: {
        title: string;
        icon: string;
    };
    child: {
        title: string;
        icon: string;
    };
}

const industryPairs: IndustryPair[] = [
    {
        parent: { title: 'Manufacture', icon: '/assets/images/home/Vector (3).png' },
        child: { title: 'Hospital', icon: '/assets/images/home/Vector (4).png' }
    },
    {
        parent: { title: 'Finance', icon: '/assets/images/home/Vector (5).png' },
        child: { title: 'Real Estate', icon: '/assets/images/home/Vector (6).png' }
    },
    {
        parent: { title: 'Education', icon: '/assets/images/home/tdesign_education-filled.png' },
        child: { title: 'Restaurant', icon: '/assets/images/home/Vector (7).png' }
    },
    {
        parent: { title: 'E-commerce', icon: '/assets/images/home/streamline-ultimate_e-commerce-apparel-bold.png' },
        child: { title: 'Furniture', icon: '/assets/images/home/maki_furniture.png' }
    },
    {
        parent: { title: 'Automobile', icon: '/assets/images/home/Vector (8).png' },
        child: { title: 'Cosmetics', icon: '/assets/images/home/solar_cosmetic-bold.png' }
    }
];

const IndustriesWeServe: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            if (headingRef.current) {
                gsap.from(headingRef.current, {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 80%",
                    },
                });
            }
            cardRefs.current.forEach((ref, idx) => {
                if (ref) {
                    gsap.from(ref, {
                        opacity: 0,
                        y: 60,
                        scale: 0.95,
                        duration: 0.8,
                        delay: 0.1 * idx,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ref,
                            start: "top 90%",
                        },
                    });
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-black min-h-screen py-16 px-4 text-white relative overflow-x-auto">
            <h2 ref={headingRef} className="text-center text-3xl md:text-4xl font-semibold mb-16">
                Industries We Serve
            </h2>
            {/* Central Logo and Top Vertical Line */}
            <div className="flex flex-col items-center relative z-20">
                <div className="bg-[#1F1F1F] p-6 rounded-2xl border border-[#333] flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-600 rounded-2xl flex items-center justify-center">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="url(#paint0_linear_1_1)"/>
                            <path d="M24 12V28" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M24 28C24 31.3137 21.3137 34 18 34C14.6863 34 12 31.3137 12 28C12 24.6863 14.6863 22 18 22C21.3137 22 24 24.6863 24 28Z" fill="#fff"/>
                            <defs>
                                <linearGradient id="paint0_linear_1_1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFA726"/>
                                    <stop offset="1" stopColor="#EC407A"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="w-[2px] h-16 bg-pink-600" />
            </div>
            {/* Horizontal Line with Connectors */}
            <div className="absolute left-1/2 top-[140px] -translate-x-1/2 w-[90vw] max-w-5xl h-[2px] bg-pink-600 z-10">
                {industryPairs.map((_, index) => (
                    <div
                        key={index}
                        className="absolute top-0 w-[2px] h-8 bg-pink-600"
                        style={{
                            left: `${(100 / (industryPairs.length - 1)) * index}%`,
                            transform: 'translateX(-50%)',
                        }}
                    />
                ))}
            </div>
            {/* Industry Boxes */}
            <div className="flex justify-between items-start gap-2 max-w-5xl mx-auto mt-24 relative z-20">
                {industryPairs.map((industry, idx) => (
                    <div
                        key={idx}
                        ref={el => {
                            cardRefs.current[idx] = el;
                            return undefined;
                        }}
                        className="flex flex-col items-center relative min-w-[120px]"
                    >
                        {/* Vertical line from horizontal to box */}
                        <div className="w-[2px] h-8 bg-pink-600" />
                        {/* Main Industry Box */}
                        <div className="bg-[#1F1F1F] px-4 py-3 mt-2 rounded-lg border border-[#333] text-center w-32 flex flex-col items-center">
                            <div className="mb-2 flex justify-center">
                                <Image src={industry.parent.icon} alt={industry.parent.title} width={32} height={32} />
                            </div>
                            <p className="text-sm font-medium">{industry.parent.title}</p>
                        </div>
                        {/* Child Industry, if any */}
                        {industry.child && (
                            <>
                                <div className="w-[2px] h-8 bg-pink-600 mt-2" />
                                <div className="bg-[#1F1F1F] px-4 py-3 mt-2 rounded-lg border border-[#333] text-center w-32 flex flex-col items-center">
                                    <div className="mb-2 flex justify-center">
                                        <Image
                                            src={industry.child.icon}
                                            alt={industry.child.title}
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <p className="text-sm font-medium">{industry.child.title}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustriesWeServe;