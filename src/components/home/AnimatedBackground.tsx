'use client'

import React, { useEffect, useRef, useCallback } from 'react';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Types and Interfaces
interface FloatingShape {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

interface CanvasDimensions {
    width: number;
    height: number;
}

interface AnimationConfig {
    starCount: number;
    minStarSize: number;
    maxStarSize: number;
    minOpacity: number;
    maxOpacity: number;
    starSpeed: number;
    backgroundColor: string;
}

// Constants
const ANIMATION_CONFIG: AnimationConfig = {
    starCount: 100,
    minStarSize: 1,
    maxStarSize: 4,
    minOpacity: 0.2,
    maxOpacity: 1,
    starSpeed: 0.3,
    backgroundColor: '#1a1818',
} as const;

const GSAP_ANIMATION_CONFIG = {
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        start: "top 80%",
    },
} as const;

// Custom hooks
const useCanvasAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const shapesRef = useRef<FloatingShape[]>([]);

    const initializeCanvas = useCallback((canvas: HTMLCanvasElement): CanvasDimensions => {
        const dimensions = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        return dimensions;
    }, []);

    const createShape = useCallback((canvasDimensions: CanvasDimensions): FloatingShape => ({
        x: Math.random() * canvasDimensions.width,
        y: Math.random() * canvasDimensions.height,
        size: Math.random() * (ANIMATION_CONFIG.maxStarSize - ANIMATION_CONFIG.minStarSize) + ANIMATION_CONFIG.minStarSize,
        speedX: (Math.random() - 0.5) * ANIMATION_CONFIG.starSpeed,
        speedY: (Math.random() - 0.5) * ANIMATION_CONFIG.starSpeed,
        opacity: Math.random() * (ANIMATION_CONFIG.maxOpacity - ANIMATION_CONFIG.minOpacity) + ANIMATION_CONFIG.minOpacity,
    }), []);

    const createShapes = useCallback((canvasDimensions: CanvasDimensions): void => {
        const shapes: FloatingShape[] = Array.from(
            { length: ANIMATION_CONFIG.starCount },
            () => createShape(canvasDimensions)
        );
        shapesRef.current = shapes;
    }, [createShape]);

    const updateShapePosition = useCallback((shape: FloatingShape, canvasDimensions: CanvasDimensions): void => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;

        // Wrap around edges with boundary checking
        const { width, height } = canvasDimensions;

        if (shape.x < -shape.size) shape.x = width + shape.size;
        if (shape.x > width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = height + shape.size;
        if (shape.y > height + shape.size) shape.y = -shape.size;
    }, []);

    const drawStar = useCallback((ctx: CanvasRenderingContext2D, shape: FloatingShape): void => {
        const gradient = ctx.createRadialGradient(
            shape.x, shape.y, 0,
            shape.x, shape.y, shape.size * 2
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${shape.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${shape.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
        ctx.fill();
    }, []);

    const animate = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
        const canvasDimensions = { width: canvas.width, height: canvas.height };

        // Clear canvas
        ctx.fillStyle = ANIMATION_CONFIG.backgroundColor;
        ctx.fillRect(0, 0, canvasDimensions.width, canvasDimensions.height);

        // Update and draw shapes
        shapesRef.current.forEach((shape) => {
            updateShapePosition(shape, canvasDimensions);
            drawStar(ctx, shape);
        });

        animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));
    }, [updateShapePosition, drawStar]);

    const handleResize = useCallback((): void => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dimensions = initializeCanvas(canvas);
        createShapes(dimensions);
    }, [initializeCanvas, createShapes]);

    const startAnimation = useCallback((): void => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dimensions = initializeCanvas(canvas);
        createShapes(dimensions);
        animate(canvas, ctx);
    }, [initializeCanvas, createShapes, animate]);

    const stopAnimation = useCallback((): void => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    }, []);

    return {
        canvasRef,
        startAnimation,
        stopAnimation,
        handleResize,
    };
};

const useGSAPAnimations = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            const elements = [
                { ref: headingRef, delay: 0 },
                { ref: subheadingRef, delay: 0.2 },
                { ref: buttonRef, delay: 0.4 },
            ];

            elements.forEach(({ ref, delay }) => {
                if (ref.current) {
                    gsap.from(ref.current, {
                        opacity: 0,
                        y: 40,
                        duration: GSAP_ANIMATION_CONFIG.duration,
                        delay,
                        ease: GSAP_ANIMATION_CONFIG.ease,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: GSAP_ANIMATION_CONFIG.scrollTrigger.start,
                        },
                    });
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return { headingRef, subheadingRef, buttonRef };
};

// Main Component
export const AnimatedBackground: React.FC = () => {
    const { canvasRef, startAnimation, stopAnimation, handleResize } = useCanvasAnimation();
    const { headingRef, subheadingRef, buttonRef } = useGSAPAnimations();

    useEffect(() => {
        startAnimation();
        window.addEventListener('resize', handleResize);

        return () => {
            stopAnimation();
            window.removeEventListener('resize', handleResize);
        };
    }, [startAnimation, stopAnimation, handleResize]);

    return (
        <div className="relative bg-[#1a1818] h-screen overflow-hidden">
            {/* Animated Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 1 }}
                aria-hidden="true"
            />

            {/* Decorative Stars */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 19 }}>
                <Image
                    src="/assets/images/home/Star 2 (1).png"
                    alt=""
                    width={100}
                    height={100}
                    className="absolute left-20 top-25 object-cover"
                    priority
                />
                <Image
                    src="/assets/images/home/Star 2 (1).png"
                    alt=""
                    width={100}
                    height={100}
                    className="absolute right-[20%] top-[60%] object-cover"
                    priority
                />
            </div>

            {/* Main Content */}
            <main className="relative z-20 flex flex-col items-center justify-center h-screen h-[92vh] px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1
                        ref={headingRef}
                        className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-white leading-tight"
                    >
                        Beyond Just{' '}
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Code
            </span>{' '}
                        —<br />
                        We Build Impact.
                    </h1>

                    <p
                        ref={subheadingRef}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        We design, develop, and deploy IT services that empower startups to
                        enterprises—across industries and borders.
                    </p>

                    <button
                        ref={buttonRef}
                        type="button"
                        className="group cursor-pointer inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        aria-label="Get started with our services"
                    >
                        Let&apos;s Get Started
                        <svg
                            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </main>

            {/* Globe Illustration */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                <Image
                    src="/assets/images/home/globe-blue-tech-BfBV6GvzpM.png"
                    alt="Technology globe illustration"
                    width={148}
                    height={148}
                    className="drop-shadow-[0_0_100px_#B91C5C] drop-shadow-[0_0_20px_#B91C5C] drop-shadow-[0_0_60px_#991B1B]"
                    style={{
                        filter: 'drop-shadow(0 0 100px #B91C5C) drop-shadow(0 0 20px #B91C5C) drop-shadow(0 0 60px #991B1B)'
                    }}
                    priority
                />
            </div>
        </div>
    );
};

export default AnimatedBackground;