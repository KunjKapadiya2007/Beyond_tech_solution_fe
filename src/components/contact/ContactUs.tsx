'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mans from '../../../public/assets/images/contact/man.png';

gsap.registerPlugin(ScrollTrigger);

const countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
const interests = ['Web Development', 'App Development', 'UI/UX Design', 'Consulting', 'Other'];

const ContactUs = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const leftImageRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });

            gsap.from(leftImageRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });

            gsap.from(formRef.current, {
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
        <div ref={sectionRef} className="w-full bg-[#1A1818] py-16 px-4">
            <div className="container mx-auto">
                {/* Heading */}
                <h2
                    ref={headingRef}
                    className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[110%] text-white mb-12 text-center relative"
                >
                    <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-20 h-8 bg-gradient-to-r from-[#FF6A3D] to-[#FF2A68] opacity-30 blur-lg rounded-full" />
                    Let&apos;s Get in Touch
                </h2>

                {/* Content Block */}
                <div className="flex flex-col md:flex-row items-center justify-center mx-auto rounded-[32px] overflow-hidden max-w-7xl">
                    {/* Left Image */}
                    <div ref={leftImageRef} className="relative w-full md:w-[45%] h-[320px] md:h-[505px]">
                        <Image
                            src={mans}
                            alt="Contact"
                            fill
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>

                    {/* Right Form */}
                    <div
                        ref={formRef}
                        className="w-full md:w-[55%] p-4 md:p-10 text-white bg-[#1A1818] flex flex-col justify-center"
                    >
                        <form className="flex flex-col gap-6">
                            {/* Input Grid 6-6 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Your Name" className={inputClass} />
                                <input type="email" placeholder="Your Email" className={inputClass} />
                                <input type="text" placeholder="Phone Number" className={inputClass} />
                                <select className={inputClass} defaultValue="">
                                    <option value="" disabled>
                                        Country
                                    </option>
                                    {countries.map((c) => (
                                        <option key={c} className="bg-black" value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                                <input type="text" placeholder="Company Name" className={inputClass} />
                                <select className={inputClass} defaultValue="">
                                    <option value="" disabled>
                                        Interested in
                                    </option>
                                    {interests.map((i) => (
                                        <option key={i} className="bg-black" value={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Message"
                                className={inputClass + ' min-h-[70px] resize-vertical'}
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-[262px] h-[57px] mt-10 cursor-pointer rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#FF2A68] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const inputClass =
    'w-full px-4 py-3 bg-transparent border-b border-[#444] text-white text-base outline-none placeholder-gray-400 focus:border-[#FF6A3D] transition-colors duration-200';

export default ContactUs;
