'use client';

import React, {useState, useRef, useEffect} from 'react';
import { MoveRight , MoveLeft} from 'lucide-react';
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
    id: number;
    name: string;
    company: string;
    text: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Romeena De Silva",
        company: "Janet Cosmetics",
        text: "Without any doubt I recommend Bolstersys LLP as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
        avatar: "/assets/images/home/5dbc1c46d1486c0fb72c5862b52c414eff45a662.png",
        rating: 5
    },
    {
        id: 2,
        name: "Romeena Silva",
        company: "Janet Cosmetics",
        text: "Exceptional service and outstanding results. The team delivered beyond our expectations and provided innovative solutions that transformed our digital presence.",
        avatar: "/assets/images/home/e9adccaef71c7c5ac22433b04c2da96d31a0bdcf.png",
        rating: 5
    },
    {
        id: 3,
        name: "Romeena De Silva",
        company: "Janet Cosmetics",
        text: "Professional, creative, and reliable. They understood our vision perfectly and brought it to life with remarkable attention to detail.",
        avatar: "/assets/images/home/1e5fb31fc0336221ceab7b3d7e32f85064455486.png",
        rating: 5
    },
    {
        id: 4,
        name: "Romeena De Silva",
        company: "Janet Cosmetics",
        text: "The best investment we made for our business. Their expertise in digital marketing has significantly boosted our online presence and customer engagement.",
        avatar: "/assets/images/home/816e55f6a9c5df90cf55132a114710192b094769.png",
        rating: 5
    },
    {
        id: 5,
        name: "Romeena De Silva",
        company: "Janet Cosmetics",
        text: "Highly recommend! Their strategic approach and creative solutions have helped us achieve remarkable growth in our digital marketing efforts.",
        avatar: "/assets/images/home/4de5ee43416a180e121b6d036b1ee22fdc94b647.png",
        rating: 5
    }
];

const WorkingWithUs: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleTestimonials] = useState(3);
    const [isAnimating, setIsAnimating] = useState(false);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const avatarRefs = useRef<(HTMLDivElement | null)[]>([]);
    const testimonialTextRef = useRef<HTMLParagraphElement>(null);
    const avatarContainerRef = useRef<HTMLDivElement>(null);

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
            avatarRefs.current.forEach((ref, idx) => {
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

    const animateTransition = (newIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentIndex(newIndex);
                setIsAnimating(false);
            }
        });

        // Animate text out
        if (testimonialTextRef.current) {
            tl.to(testimonialTextRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: "power2.out"
            });
        }

        // Animate avatars out
        if (avatarContainerRef.current) {
            tl.to(avatarContainerRef.current.children, {
                opacity: 0,
                y: 20,
                scale: 0.9,
                duration: 0.3,
                ease: "power2.out",
                stagger: 0.05
            }, "-=0.2");
        }

        // Update index in the middle of animation
        tl.call(() => {
            setCurrentIndex(newIndex);
        });

        // Animate text in
        if (testimonialTextRef.current) {
            tl.to(testimonialTextRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        }

        // Animate avatars in
        if (avatarContainerRef.current) {
            tl.to(avatarContainerRef.current.children, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.05
            }, "-=0.3");
        }
    };

    const nextSlide = () => {
        if (isAnimating) return;
        const newIndex = currentIndex + 1 >= testimonials.length ? 0 : currentIndex + 1;
        animateTransition(newIndex);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        const newIndex = currentIndex - 1 < 0 ? testimonials.length - 1 : currentIndex - 1;
        animateTransition(newIndex);
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < visibleTestimonials; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    const renderStars = (count: number) =>
        Array.from({length: 5}).map((_, i) => (
            <svg
                key={i}
                className={`w-4 h-4 ${
                    i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.188a1 1 0 00.95.69h4.41c.969 0 1.371 1.24.588 1.81l-3.572 2.59a1 1 0 00-.364 1.118l1.357 4.188c.3.921-.755 1.688-1.54 1.118l-3.572-2.59a1 1 0 00-1.176 0l-3.572 2.59c-.784.57-1.838-.197-1.539-1.118l1.357-4.188a1 1 0 00-.364-1.118l-3.572-2.59c-.783-.57-.38-1.81.588-1.81h4.41a1 1 0 00.95-.69l1.357-4.188z"/>
            </svg>
        ));

    return (
        <div className="bg-[#1A1818] text-white  px-4 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16 flex items-center justify-center">
                    <h2 ref={headingRef} className="text-[32px] md:text-[48px] sm:text-[40px] font-bold mb-8 max-w-[600px]">
                        WHY CUSTOMERS LOVE
                        WORKING WITH US
                    </h2>
                </div>

                <div className="relative">
                    <button
                        onClick={prevSlide}
                        disabled={isAnimating}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-white rounded-full p-3 transition-colors duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous testimonial"
                    >
                        <MoveLeft
                            className="w-6 h-6 text-white transition-colors duration-200 group-hover:text-[#EE2A6D]"/>
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={isAnimating}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-white rounded-full p-3 transition-colors duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next testimonial"
                    >
                        <MoveRight
                            className="w-6 h-6 text-white transition-colors duration-200 group-hover:text-[#EE2A6D]"/>
                    </button>

                    <div className="text-center mb-16 px-10 sm:px-16">
                        <div className="mb-8">
                            <div className="mb-4 flex justify-start">
                                <Image
                                    src="/assets/images/home/Vector (9).png"
                                    alt="vector"
                                    width={15}
                                    height={15}
                                />
                            </div>
                            <p
                                ref={testimonialTextRef}
                                className="text-[16px] sm:text-[18px] leading-relaxed max-w-4xl mx-auto"
                            >
                                {testimonials[currentIndex].text}
                            </p>
                            <div className="mb-4 flex justify-end">
                                <Image
                                    src="/assets/images/home/Vector (10).png"
                                    alt="vector"
                                    width={15}
                                    height={15}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={avatarContainerRef}
                        className="flex justify-center items-center gap-4 sm:gap-12 px-16 py-3"
                    >
                        {getVisibleTestimonials().map((testimonial, index) => {
                            const isCenter = index === Math.floor(visibleTestimonials / 2);
                            return (
                                <div
                                    key={`${testimonial.id}-${index}`}
                                    ref={el => {avatarRefs.current[index] = el}}
                                    className={`flex flex-col items-center transition-all duration-300 ${
                                        isCenter
                                            ? 'transform scale-110'
                                            : 'transform scale-90 opacity-70'
                                    }`}
                                >
                                    <div className="w-[100px] h-[100px] relative rounded-full overflow-hidden mb-4 border-2 border-gray-700">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex mb-1">{renderStars(testimonial.rating)}</div>

                                    <h3 className="font-semibold text-[16px] mb-1">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-[#CBD5E0] text-[14px]">
                                        {testimonial.company}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkingWithUs;