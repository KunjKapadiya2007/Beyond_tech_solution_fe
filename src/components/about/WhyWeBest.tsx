'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import personImage from '../../../public/assets/images/about/mockup.png';
import checkIcon from '../../../public/assets/images/about/checkmark.png';

gsap.registerPlugin(ScrollTrigger);

const WhyWeBest = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const pointsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left text animation
            gsap.from(leftRef.current, {
                x: -80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: 'top 80%',
                },
            });

            // Right image animation
            gsap.from(rightRef.current, {
                x: 80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: 'top 80%',
                },
            });

            // Checkpoints animation
            gsap.from(pointsRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const points = [
        {
            title: 'Uncompromised Quality',
            desc: 'We deliver top-tier solutions with precision, performance, and long-term reliability.',
        },
        {
            title: 'Reliable Support',
            desc: 'Our team is with you every step of the way — before, during, and after project delivery.',
        },
        {
            title: 'Innovation-Driven',
            desc: 'We stay ahead of the curve, using cutting-edge technology to future-proof your business.',
        },
    ];

    return (
        <section ref={sectionRef} className="bg-[#1A1818] text-white py-20 px-4">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
                {/* Left - Text Content */}
                <div ref={leftRef} className="w-full lg:w-1/2 space-y-6 flex justify-center">
                    <div>
                        <h2 className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[55px] leading-[48px] sm:leading-[60px] md:leading-[70px] lg:leading-[81px] font-semibold mb-3">
                            Why we best?
                        </h2>
                        <p className="text-[#CCCCCC] text-[16px] sm:text-[17px] md:text-[18px] leading-[28px] sm:leading-[30px] md:leading-[33px] font-normal max-w-lg mb-14">
                            At Beyond Tech Solution, we don’t just build products — we build partnerships. Here’s why
                            businesses trust us:
                        </p>

                        {/* Points */}
                        <div className="space-y-6">
                            {points.map((item, idx) => (
                                <div
                                    key={idx}
                                    ref={(el) => {pointsRef.current[idx] = el!}}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-[32px] sm:w-[36px] md:w-[40px] h-[32px] sm:h-[36px] md:h-[40px] min-w-[24px] mt-1">
                                        <Image src={checkIcon} alt="check" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="max-w-md mb-1">
                                        <h4 className="text-white text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[30px] md:leading-[36px]">
                                            {item.title}
                                        </h4>
                                        <p className="text-[#CCCCCC] text-[16px] sm:text-[17px] md:text-[18px] leading-[28px] md:leading-[33px] font-normal mt-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right - Image */}
                <div ref={rightRef} className="w-full lg:w-1/2 flex justify-center">
                    <div className="rounded-3xl bg-[#F2682F1A] px-5 sm:px-8 relative">
                        <Image
                            src={personImage}
                            alt="person"
                            className="w-full h-auto object-contain rounded-2xl"
                            width={400}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeBest;
