'use client';

import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
}

const services: ServiceCardProps[] = [
    {
        title: 'WEB DEVELOPMENT',
        description:
            'From dynamic websites to full-stack web applications, we craft responsive, secure, and scalable digital platforms that drive real business results.',
        image: '/assets/images/home/programming-background-collage 1.png',
    },
    {
        title: 'APP DEVELOPMENT',
        description:
            'We build high-performing mobile apps for iOS and Android that are fast, scalable, and intuitive — designed to deliver seamless user experiences on every device.',
        image: '/assets/images/home/programming-background-with-person-working-with-codes-computer 1.png',
    },
    {
        title: 'UI/UX Design',
        description:
            'We design user experiences that are not just beautiful — but purposeful. Our UI/UX process blends creativity with usability to create interfaces that engage, convert, and retain users.',
        image: '/assets/images/home/ui-ux-representations-with-laptop 1.png',
    },
    {
        title: 'CUSTOM SOFTWARE DEVELOPMENT',
        description:
            'We design and build tailored software solutions that fit your unique business needs — scalable, secure, and user-focused. From concept to deployment, our team ensures seamless performance and long-term value.',
        image: '/assets/images/home/representation-user-experience-interface-design 1.png',
    },
];

const ServiceCard: React.FC<ServiceCardProps> = ({title, description, image}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative rounded-xl overflow-hidden w-full  h-[340px] md:h-[440px] transition-all duration-500 group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={image}
                alt={title}
                fill
                className={`object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
            />

            <div
                className={`absolute inset-0 bg-gradient-to-b from-[#000] to-[#70223C] text-white p-6 flex flex-col items-center justify-center text-center transition-opacity duration-500 ${
                    hovered ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <h3 className="sm:text-[32px] text-[26px] md:text-[36px] md:text-xl font-semibold mb-2">{title}</h3>
                <p className="text-[18px] md:text-[24px] sm:text-[20px] md:text-base font-light">{description}</p>
            </div>

            <div
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold sm:text-[32px] text-[26px] md:text-[36px] transition-opacity duration-500 ${
                    hovered ? 'opacity-0' : 'opacity-100'
                }`}
            >
                {title}
            </div>
        </div>
    );
};

const WhatWeDeliver: React.FC = () => {
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
        <section className="bg-[#1A1818] text-white py-16 px-4">
            <div className='container mx-auto'>
                <div className=" text-center">
                    <h2 ref={headingRef} className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-2">What We Deliver</h2>
                    <div className=' text-center flex justify-center items-center mb-20'>
                        <p ref={subheadingRef} className="text-[16px] md:text-[18px]  mb-12 max-w-[600px]">
                            Tailored digital solutions built to solve real-world challenges — fast, flexible, and
                            future-ready.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-18 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                ref={el => { cardRefs.current[index] = el; return undefined; }}
                            >
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDeliver;
