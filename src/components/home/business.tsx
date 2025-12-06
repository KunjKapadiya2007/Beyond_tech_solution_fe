'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingWireframeSphere from '@/components/home/RotatingWireframeSphere';

gsap.registerPlugin(ScrollTrigger);

const Business: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const designRef = useRef<HTMLDivElement>(null);
    const strategyRef = useRef<HTMLDivElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Scroll-based animations
            gsap.from('.stat-item', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });

            gsap.from('.globe-image', {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });

            gsap.from(headingRef.current, {
                y: 30,
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 90%',
                },
            });

            // Count-up animation
            gsap.utils.toArray<HTMLElement>('.count-up').forEach((el) => {
                const countText = el.dataset.count || '0';
                const suffix = countText.includes('+') ? '+' : countText.includes('x') ? 'x' : '';
                const finalValue = parseInt(countText.replace(/[^0-9]/g, ''), 10);

                gsap.fromTo(
                    el,
                    { innerText: 0 },
                    {
                        innerText: finalValue,
                        duration: 2,
                        ease: 'power1.out',
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                        onUpdate: function () {
                            el.innerText = Math.floor(Number(el.innerText)) + suffix;
                        },
                    }
                );
            });

            // ✨ Floating Animations
            gsap.to(designRef.current, {
                y: -10,
                duration: 2,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            });

            gsap.to(strategyRef.current, {
                x: 10,
                duration: 2.5,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            });

            gsap.to(resultsRef.current, {
                x: -10,
                duration: 2.2,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            });

            gsap.to(techRef.current, {
                y: -12,
                duration: 2.8,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            });
        }, sectionRef);

        return () => ctx.revert(); // cleanup
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#1A1818] text-white py-16 px-4">
            <div className="container mx-auto">
                {/* Heading */}
                <div ref={headingRef} className="flex items-center justify-center text-center mb-12 w-full">
                    <div className="max-w-[840px]">
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-light leading-snug">
                            Discover why clients entrust their business success to{' '}
                            <span className="text-orange-500 italic font-semibold">Beyond Tech Solution</span>
                        </h2>
                    </div>
                </div>

                {/* Stats & Globe */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-0">
                    {/* Left Stats */}
                    <div className="flex flex-col lg:flex-col sm:flex-row gap-12 text-center lg:text-left">
                        <div className="stat-item">
                            <h3 className="count-up text-[44px] sm:text-[54px] md:text-[64px] font-semibold" data-count="50+">0</h3>
                            <p className="text-[18px] sm:text-[20px] md:text-[24px] max-w-[240px] mx-auto lg:mx-0">
                                Projects Successfully Delivered
                            </p>
                        </div>
                        <div className="stat-item">
                            <h3 className="count-up text-[44px] sm:text-[54px] md:text-[64px] font-semibold" data-count="2x">0</h3>
                            <p className="text-[18px] sm:text-[20px] md:text-[24px] max-w-[240px] mx-auto lg:mx-0">
                                Growth Rate, Consistently Achieved
                            </p>
                        </div>
                    </div>

                    {/* Globe with Floating Boxes */}
                    <div
                        className="relative w-[320px] md:w-[480px] h-[320px] md:h-[480px] mx-auto mb-6 md:mb-8 globe-image">
                        <div
                            className="absolute inset-0 rounded-full bg-[#3a0a2a] opacity-10 blur-3xl animate-pulse"></div>
                        <div ref={designRef}
                            className="absolute top-[100px] left-[20px] md:top-30 md:left-10  w-[120px] h-10 bg-white text-black rounded-[10px] flex items-center justify-center shadow-md">
                            Design
                        </div>
                        <div ref={strategyRef}
                            className="absolute top-[60px] right-[20px] md:top-20 md:right-10 w-[120px] h-10 bg-white text-black rounded-[10px] flex items-center justify-center shadow-md">
                            Strategy
                        </div>
                        <div ref={resultsRef}
                            className="absolute bottom-[80px] left-[20px] md:bottom-40 md:left-25 w-[120px] h-10 bg-white text-black rounded-[10px] flex items-center justify-center shadow-md">
                            Results
                        </div>
                        <div ref={techRef}
                            className="absolute bottom-[40px] right-[20px] md:bottom-20 md:right-20 w-[120px] h-10 bg-white text-black rounded-[10px] flex items-center justify-center shadow-md">
                            Technology
                        </div>
                        <RotatingWireframeSphere/>
                    </div>

                    {/* Right Stats */}
                    <div className="flex flex-col lg:flex-col sm:flex-row gap-12 text-center lg:text-right">
                        <div className="stat-item">
                            <h3 className="count-up text-[44px] sm:text-[54px] md:text-[64px] font-semibold" data-count="5+">0</h3>
                            <p className="text-[18px] sm:text-[20px] md:text-[24px] max-w-[240px] mx-auto lg:mx-0">
                                Years of Experience
                            </p>
                        </div>
                        <div className="stat-item">
                            <h3 className="count-up text-[44px] sm:text-[54px] md:text-[64px] font-semibold" data-count="20+">0</h3>
                            <p className="text-[18px] sm:text-[20px] md:text-[24px] max-w-[240px] mx-auto lg:mx-0">
                                Creative Minds
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Business;
