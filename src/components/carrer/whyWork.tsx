'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function WhyWorkWithUs() {
    const features: Feature[] = [
        {
            icon: (
                <svg className="w-[88px] h-[89px] text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    <circle cx="18" cy="8" r="2" />
                    <circle cx="6" cy="8" r="2" />
                </svg>
            ),
            title: 'People-First Culture',
            description: 'Respect, flexibility, and ownership.',
        },
        {
            icon: (
                <svg className="w-[88px] h-[89px] text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
                    <rect x="6" y="7" width="8" height="2" />
                    <rect x="6" y="10" width="8" height="2" />
                    <rect x="16" y="7" width="2" height="2" />
                    <rect x="16" y="10" width="2" height="2" />
                </svg>
            ),
            title: 'Challenging Projects',
            description: 'Real impact, global clients, modern tech.',
        },
        {
            icon: (
                <svg className="w-[88px] h-[89px] text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    <rect x="14" y="2" width="8" height="2" />
                </svg>
            ),
            title: 'Growth Mindset',
            description: 'Upskilling, mentorship, and career support.',
        },
        {
            icon: (
                <svg className="w-[88px] h-[89px] text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            ),
            title: 'Global Exposure',
            description: 'Work with clients across industries and countries.',
        },
    ];

    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                },
            });

            // Card animation
            gsap.from(cardsRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="bg-[#1A1818] py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div ref={titleRef} className="text-center mb-12">
                    <h2 className="text-[36px] sm:text-4xl md:text-5xl lg:text-[48px] font-[700] text-white mb-4 leading-tight">
                        Why Work With Us?
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="bg-[#101010] rounded-lg p-6 sm:p-7 lg:p-10 hover:bg-gray-750 transition-colors duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-start mb-6">{feature.icon}</div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">{feature.title}</h3>
                            <p className="text-[#5D5D5D] text-sm leading-relaxed mb-4">{feature.description}</p>
                            <div className="h-[1px] bg-[#2A2A2A] w-full mt-auto"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyWorkWithUs;
