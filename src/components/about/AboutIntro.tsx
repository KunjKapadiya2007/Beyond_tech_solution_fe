'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import logoThumbnail from '../../../public/assets/images/about/video-thumbnail.png';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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

            gsap.from(leftRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });

            gsap.from(rightRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
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
        <section ref={sectionRef} className="bg-[#111010] pt-30 pb-10 px-4 text-white">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="container mx-auto px-4" ref={titleRef}>
                    <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold mb-13 leading-tight text-center">
                        We are Beyond Tech Solution
                    </h2>
                </div>

                {/* Content */}
                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
                    {/* Left - Thumbnail */}
                    <div
                        ref={leftRef}
                        className="relative rounded-[24px] overflow-hidden w-full max-w-[380px]"
                    >
                        <Image
                            src={logoThumbnail}
                            alt="Beyond Tech Video Thumbnail"
                            width={400}
                            height={250}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center shadow-md cursor-pointer">
                                <Play className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    {/* Right - Paragraphs */}
                    <div
                        ref={rightRef}
                        className="max-w-2xl w-full text-center lg:text-left space-y-5 text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed font-normal"
                    >
                        <p>
                            Founded with a belief that tech should be human–first, we started Beyond Tech with one goal — to deliver
                            solutions that feel intelligent, seamless, and global.
                        </p>
                        <p>
                            What began as a small team of passionate builders has grown into a full–stack IT powerhouse — trusted by
                            clients across industries and continents.
                        </p>
                        <p>
                            We aren’t just a service provider — we’re a tech partner on your journey to digital growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
