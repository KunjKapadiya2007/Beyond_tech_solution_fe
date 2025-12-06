'use client';

import React, { useEffect, useRef, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface FloatingShape {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

const useCanvasAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const shapesRef = useRef<FloatingShape[]>([]);

    const initializeCanvas = useCallback((canvas: HTMLCanvasElement) => {
        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = document.body.scrollHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext("2d");
        if (ctx) ctx.scale(dpr, dpr);

        return { width, height };
    }, []);

    const createShape = useCallback(({ width, height }: { width: number; height: number }): FloatingShape => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.8 + 0.2,
    }), []);

    const createShapes = useCallback((dims: { width: number; height: number }) => {
        shapesRef.current = Array.from({ length: 100 }, () => createShape(dims));
    }, [createShape]);

    const drawShape = useCallback((ctx: CanvasRenderingContext2D, shape: FloatingShape) => {
        const gradient = ctx.createRadialGradient(shape.x, shape.y, 0, shape.x, shape.y, shape.size * 2);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${shape.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${shape.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
        ctx.fill();
    }, []);

    const animate = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        const dims = { width: canvas.width, height: canvas.height };
        ctx.fillStyle = "#1a1818";
        ctx.fillRect(0, 0, dims.width, dims.height);

        shapesRef.current.forEach(shape => {
            shape.x += shape.speedX;
            shape.y += shape.speedY;

            if (shape.x < -shape.size) shape.x = dims.width + shape.size;
            if (shape.x > dims.width + shape.size) shape.x = -shape.size;
            if (shape.y < -shape.size) shape.y = dims.height + shape.size;
            if (shape.y > dims.height + shape.size) shape.y = -shape.size;

            drawShape(ctx, shape);
        });

        animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));
    }, [drawShape]);

    const start = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dims = initializeCanvas(canvas);
        createShapes(dims);
        animate(canvas, ctx);
    }, [initializeCanvas, createShapes, animate]);

    const stop = useCallback(() => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    }, []);

    const resize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dims = initializeCanvas(canvas);
        createShapes(dims);
    }, [initializeCanvas, createShapes]);

    return { canvasRef, start, stop, resize };
};

type Project = {
    title: string;
    client: string;
    work: string;
    imageUrl: string;
    navigate: string;
};

const projects: Project[] = [
    {
        title: "Brand Journey Improvements",
        client: "Organc",
        work: "Website Development",
        imageUrl: "/assets/images/portfolio/BrandJourney.jpg",
        navigate: "/portfolio/organc"
    },
    {
        title: "Brand Grouping",
        client: "FR",
        work: "App Development",
        imageUrl: "/assets/images/portfolio/Brand Grouping.jpg",
        navigate: "/portfolio/fr"
    },
    {
        title: "NFT Glimps",
        client: "Rumanda",
        work: "Custom Software Development",
        imageUrl: "/assets/images/portfolio/NFT Glimps.jpg",
        navigate: "/portfolio/rumanda"
    },
    {
        title: "Brand Suggestions",
        client: "T3d",
        work: "App Development",
        imageUrl: "/assets/images/portfolio/Brand Suggestions.jpg",
        navigate: "/portfolio/t3d"
    }
];

const ProjectShowcase: React.FC = () => {
    const router = useRouter();
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const ctaRef = useRef<HTMLDivElement>(null);

    const { canvasRef, start, stop, resize } = useCanvasAnimation();
    const [canvasHeight, setCanvasHeight] = useState(0);

    useEffect(() => {
        if (typeof document !== "undefined") {
            setCanvasHeight(document.body.scrollHeight);
        }
    }, []);

    useEffect(() => {
        start();
        window.addEventListener("resize", resize);
        return () => {
            stop();
            window.removeEventListener("resize", resize);
        };
    }, [start, stop, resize]);

    useEffect(() => {
        projectRefs.current.forEach((el, i) => {
            if (!el) return;
            const fromDirection = i % 2 === 0 ? -100 : 100;

            gsap.fromTo(
                el,
                { opacity: 0, x: fromDirection },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        if (ctaRef.current) {
            gsap.fromTo(
                ctaRef.current,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 2.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <div className="relative bg-[#1A1818] min-h-screen overflow-hidden">
            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full"
                style={{ height: `${canvasHeight}px`, zIndex: 1 }}
                aria-hidden="true"
            />

            {/* Optional background stars */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ zIndex: 2 }}>
                <Image src="/assets/images/home/Star 2 (1).png" alt="Star" width={100} height={100} className="absolute left-[1%] top-[20%]" />
                <Image src="/assets/images/home/Star 2 (1).png" alt="Star" width={100} height={100} className="absolute right-[4%] top-[36%]" />
                <Image src="/assets/images/home/Star 2 (1).png" alt="Star" width={100} height={100} className="absolute left-[3%] top-[60%]" />
                <Image src="/assets/images/home/Star 2 (1).png" alt="Star" width={100} height={100} className="absolute right-[14%] top-[78%]" />
            </div>

            {/* Main Content */}
            <section className="relative z-10 text-white pb-5 px-4 sm:px-6 lg:px-12 lg:pt-30 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 container mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => { projectRefs.current[index] = el; }}
                            className="space-y-4 cursor-pointer opacity-0 transform"
                            onClick={() => router.push(project.navigate)}
                        >
                            <div className="relative w-full h-[620px] rounded-xl overflow-hidden md:mt-6 mt-2">
                                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                            </div>
                            <div>
                                <div className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white leading-[32px] flex items-center gap-5">
                                    {project.title}
                                    <span>
                    <Image src="/assets/images/portfolio/Line 3.png" alt="Line" width={60} height={50} />
                  </span>
                                </div>
                                <div className="mt-5">
                                    <p><span className="text-[#606060]">Client:</span> <span className="text-white">{project.client}</span></p>
                                    <p className="mt-2"><span className="text-[#606060]">Work:</span> <span className="text-white">{project.work}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div
                    ref={ctaRef}
                    className="lg:my-15 my-13 bg-[#302d2d] rounded-2xl py-15 px-6 sm:px-12 container mx-auto text-white border border-white opacity-0 transform"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center sm:text-left">
                        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold">
                            Hire the best developers and designers around!
                        </h2>
                        <div className="sm:justify-self-end flex flex-col items-center">
                            <Image src="/assets/images/portfolio/Group 38.png" alt="Top Decoration" width={100} height={50} className="sm:mb-5" />
                            <Link href="/contact">
                                <button
                                    className="mt-4 sm:mt-0 text-white font-bold py-[14px] px-[65px] rounded-full shadow-lg transition cursor-pointer"
                                    style={{ backgroundImage: 'linear-gradient(to left, #EE2A6D, #F2682F)' }}
                                >
                                    Contact Us
                                </button>
                            </Link>

                            <Image src="/assets/images/portfolio/Group 39.png" alt="Bottom Decoration" width={100} height={50} className="mt-5" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectShowcase;
