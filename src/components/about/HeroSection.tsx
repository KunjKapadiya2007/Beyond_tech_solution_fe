'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-[#1A1818] text-white py-20 px-4 lg:pt-50 pt-10">
            <div className="container mx-auto text-center">
                <h1
                    ref={headingRef}
                    className="text-[32px] sm:text-[40px] md:text-[56px] font-bold leading-tight mb-3"
                >
                    We Build What’s Beyond.
                </h1>
                <p
                    ref={paragraphRef}
                    className="text-white text-[16px] sm:text-[18px] font-normal md:text-[20px] max-w-3xl mx-auto leading-relaxed"
                >
                    Technology isn’t just tools — it’s transformation. At Beyond Tech Solution, we craft digital experiences that help businesses scale, adapt, and lead.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
