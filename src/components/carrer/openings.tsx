'use client'
import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface JobOpening {
    title: string;
    type: string;
    experience: string;
}

function Openings() {
    const jobOpenings: JobOpening[] = [
        { title: 'Front-end Developer', type: 'Full Time', experience: '+1 year Exp.' },
        { title: 'UI/UX Designer', type: 'Full Time', experience: '+1 year Exp.' },
        { title: 'Business Executive', type: 'Full Time', experience: '+1 year Exp.' },
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRefs.current, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[#1A1818] p-4 sm:p-6 lg:p-8 pt-10">
            <div className="container mx-auto">
                <div className="mb-6">
          <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium">
            Openings
          </span>
                </div>

                <div className="space-y-4">
                    {jobOpenings?.map((job, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardRefs.current[index] = el;
                            }}
                            className="bg-[#1A1818] border border-[#989898] rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row sm:items-left gap-4"
                        >
                            <div className="sm:w-1/3 text-white text-[20px] sm:text-[24px] font-medium text-left">
                                {job.title}
                            </div>
                            <div className="sm:w-1/3 text-gray-300 text-[18px] sm:text-[20px] text-left sm:text-center">
                                {job.type}
                            </div>
                            <div className="sm:w-1/3 text-gray-300 text-[18px] sm:text-[20px] text-left sm:text-right">
                                {job.experience}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Openings;
