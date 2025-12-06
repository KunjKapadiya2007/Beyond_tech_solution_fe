'use client';
import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import star from '../../../public/assets/images/about/Star 1.png'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(headingRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                },
            });

            // Paragraph animation
            gsap.from(paragraphRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: paragraphRef.current,
                    start: 'top 85%',
                },
            });

            // Animate each dot (float effect)
            dotRefs.current.forEach((dot, i) => {
                if (dot) {
                    const direction = i % 2 === 0 ? -10 : 10;
                    gsap.to(dot, {
                        y: direction,
                        duration: 2 + Math.random() * 2,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                    });
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#1A1818] relative overflow-hidden lg:pt-30 pt-10">
            {/* Floating dots */}
            {[...Array(40)].map((_, i) => {
                const size = 4 + Math.random() * 6;
                return (
                    <div
                        key={i}
                        ref={(el) => {
                            dotRefs.current[i] = el
                        }}
                        className="absolute bg-white"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            borderRadius: '50%',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.05 + Math.random() * 0.2,
                            zIndex: 1,
                        }}
                    />
                );
            })}

            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center min-h-[40vh] py-16 overflow-hidden">
                <div className="absolute top-20 left-100 w-20 h-20">
                    <Image
                        src={star}
                        alt="star"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="absolute bottom-20 right-100 w-20 h-20">
                    <Image
                        src={star}
                        alt="star"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <h1 ref={headingRef}
                        className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[56px] leading-[110%] font-semibold text-white text-center mb-4">
                        Work That Speaks Beyond Words
                    </h1>
                    <p ref={paragraphRef}
                       className="text-[18px] sm:text-[22px] md:text-[24px] leading-[110%] font-normal text-gray-300 text-center max-w-2xl mx-auto">
                        Explore our digital solutions that redefine user experience, technology, and impact.
                    </p>
                </div>
            </div>
        </div>
    );
}
