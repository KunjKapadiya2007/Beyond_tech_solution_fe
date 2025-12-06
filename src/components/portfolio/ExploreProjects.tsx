'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Breakpoint {
    [key: number]: {
        slidesPerView: number;
    };
}

interface SwiperProps {
    children: React.ReactNode;
    className?: string;
    onSlideChange?: (params: { activeIndex: number }) => void;
    slidesPerView?: number;
    breakpoints?: Breakpoint;
    navigation?: boolean;
    pagination?: { clickable: boolean };
    autoplay?: { delay: number };
}

const Swiper: React.FC<SwiperProps> = ({
                                           children,
                                           className = '',
                                           onSlideChange,
                                           slidesPerView = 3,
                                           breakpoints,
                                           pagination = { clickable: true },
                                           autoplay = { delay: 3000 },
                                       }) => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSlidesPerView, setCurrentSlidesPerView] = useState(slidesPerView);
    const childrenArray = React.Children.toArray(children);
    const childrenCount = childrenArray.length;

    // Function to get current slides per view based on screen width
    const getCurrentSlidesPerView = useCallback(() => {
        if (!breakpoints) return slidesPerView;

        const width = window.innerWidth;
        let currentSlides = slidesPerView;

        const sortedBreakpoints = Object.keys(breakpoints)
            .map(Number)
            .sort((a, b) => b - a);

        for (const breakpoint of sortedBreakpoints) {
            if (width >= breakpoint) {
                currentSlides = breakpoints[breakpoint].slidesPerView;
                break;
            }
        }

        return currentSlides;
    }, [breakpoints, slidesPerView]);

    useEffect(() => {
        const handleResize = () => {
            const newSlidesPerView = getCurrentSlidesPerView();
            if (newSlidesPerView !== currentSlidesPerView) {
                setCurrentSlidesPerView(newSlidesPerView);
                setCurrentIndex(0);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getCurrentSlidesPerView, currentSlidesPerView]);

    // Calculate total slides that can be shown (how many times we can slide)
    const totalSlides = Math.max(1, childrenCount - currentSlidesPerView + 1);

    // Each slide moves by one item width (100% / currentSlidesPerView)
    const slideStep = 100 / currentSlidesPerView;

    const handleSlideChange = (index: number) => {
        setCurrentIndex(index);
        onSlideChange?.({ activeIndex: index });
    };

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const newIndex = prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1;
                onSlideChange?.({ activeIndex: newIndex });
                return newIndex;
            });
        }, autoplay.delay);

        return () => clearInterval(interval);
    }, [autoplay, totalSlides, onSlideChange]);

    return (
        <div className={`relative ${className}`} ref={swiperRef}>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * slideStep}%)`,
                        width: '100%',
                    }}
                >
                    {childrenArray.map((child, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-2"
                            style={{ width: `${100 / currentSlidesPerView}%` }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {pagination?.clickable && totalSlides > 1 && (
                <div className="swiper-pagination flex justify-center mt-8 gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleSlideChange(index)}
                            className={`h-3 rounded-full transition-all duration-200 ${
                                currentIndex === index
                                    ? 'bg-orange-400 w-8'
                                    : 'bg-gray-600 hover:bg-gray-500 w-3'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

interface SwiperSlideProps {
    children: React.ReactNode;
    className?: string;
}

const SwiperSlide: React.FC<SwiperSlideProps> = ({ children, className = '' }) => {
    return <div className={className}>{children}</div>;
};

interface Project {
    image: string;
    title: string;
    tag: string;
    tagColor: string;
}

const projects: Project[] = [
    {
        image: '/assets/images/home/abed7b9f8ee20077f2fe29a31c7317aea892a5f1.jpg',
        title: 'Gleamy Portfolio',
        tag: 'UI/UX',
        tagColor: 'orange-400',
    },
    {
        image: '/assets/images/home/9a106a0f525cf4e36d11b8787968406ebce12d55.jpg',
        title: 'NFTs Dashboard',
        tag: 'App Development',
        tagColor: 'orange-400',
    },
    {
        image: '/assets/images/home/8296360675014f5c1e3c0c29bff3d0423578cec3.jpg',
        title: 'Luxe Catalog',
        tag: 'E-commerce',
        tagColor: 'orange-400',
    },
    {
        image: '/assets/images/home/8296360675014f5c1e3c0c29bff3d0423578cec3.jpg',
        title: 'Digital Marketing',
        tag: 'Marketing',
        tagColor: 'orange-400',
    },
    {
        image: '/assets/images/home/8296360675014f5c1e3c0c29bff3d0423578cec3.jpg',
        title: 'Mobile App',
        tag: 'Mobile',
        tagColor: 'orange-400',
    },
];

const ExploreProjects: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLParagraphElement>(null);
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
            if (subheadingRef.current) {
                gsap.from(subheadingRef.current, {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: subheadingRef.current,
                        start: "top 85%",
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
        <div className="relative bg-[#1A1818] py-16 px-4 overflow-hidden">
            <div className="absolute left-8 top-16 pointer-events-none leading-none z-0 hidden md:block opacity-20">
                <Image
                    src="/assets/images/home/B.png"
                    alt="logo"
                    width={307}
                    height={772}
                    className="object-contain"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    Our Client Success Gallery
                </h2>


                <Swiper
                    className="pb-12"
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    {projects.map((project, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                ref={el => {cardRefs.current[idx] = el}}
                                className="w-full rounded-2xl shadow-lg flex flex-col items-center"
                            >
                                <div className="max-w-[400px] w-full h-[300px] rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-[#f3ede6] relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="w-full flex flex-col items-center">
                                    <h3 className="md:text-[24px] sm:text-[20px] text-[18px] text-white mb-1">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="inline-block w-2 h-2 rounded-full bg-orange-400"></span>
                                        <span className="text-[#DDDDDD] sm:text-[16px] text-[14px]">
                      {project.tag}
                    </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ExploreProjects;