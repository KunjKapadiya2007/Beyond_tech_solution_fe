'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Image imports
import html from '../../../public/assets/images/service/html.png';
import css from '../../../public/assets/images/service/css.png';
import javascript from '../../../public/assets/images/service/javascript.png';
import angular from '../../../public/assets/images/service/angular.png';
import vue from '../../../public/assets/images/service/vue.png';
import react from '../../../public/assets/images/service/react.png';
import node from '../../../public/assets/images/service/node.png';
import php from '../../../public/assets/images/service/php.png';
import python from '../../../public/assets/images/service/python.png';
import mongodb from '../../../public/assets/images/service/mongodb.png';

const techLogos = [
    { src: html, alt: 'HTML5' },
    { src: css, alt: 'CSS3' },
    { src: javascript, alt: 'JavaScript' },
    { src: angular, alt: 'Angular' },
    { src: vue, alt: 'Vue.js' },
    { src: react, alt: 'React' },
    { src: node, alt: 'Node.js' },
    { src: php, alt: 'PHP' },
    { src: python, alt: 'Python' },
    { src: mongodb, alt: 'MongoDB' },
];

const TechnicalProficiency: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title
            gsap.from(titleRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 90%',
                },
            });

            // Animate logos
            gsap.from('.tech-logo', {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
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
        <section
            ref={sectionRef}
            className="bg-[#1A1818] py-16 px-4 text-white text-center"
        >
            <h2
                ref={titleRef}
                className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold mb-16 leading-tight"
            >
                Our Technical Proficiency
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center max-w-6xl mx-auto">
                {techLogos?.map((tech, index) => (
                    <div
                        key={index}
                        className="tech-logo w-16 h-16 sm:w-20 sm:h-20 relative"
                    >
                        <Image
                            src={tech.src}
                            alt={tech.alt}
                            fill
                            className="object-contain pb-6"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalProficiency;
