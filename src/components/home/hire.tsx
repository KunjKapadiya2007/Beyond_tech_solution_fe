'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Hire() {
    return (
        <div className='bg-[#1A1818] py-28 px-4'>
            <div className='container mx-auto '>
                <div
                    className=" bg-[#302d2d] rounded-2xl py-15 px-6  sm:px-12 text-white border border-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center sm:text-left">
                        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold">
                            Hire the best developers and designers around!
                        </h2>
                        <div className="sm:justify-self-end flex flex-col items-center">
                            {/* Top Image */}
                            <Image
                                src="/assets/images/portfolio/Group 38.png"         // Replace with your actual image path
                                alt="Top Decoration"
                                width={100}                  // Adjust width/height as needed
                                height={50}
                                className="sm:mb-5"
                            />

                            {/* Contact Button */}
                            <Link href="/contact">
                                <button
                                    className="mt-4 sm:mt-0 text-white font-bold py-[14px] px-[65px] rounded-full shadow-lg transition cursor-pointer"
                                    style={{ backgroundImage: 'linear-gradient(to left, #EE2A6D, #F2682F)' }}
                                >
                                    Contact Us
                                </button>
                            </Link>


                            {/* Bottom Image */}
                            <Image
                                src="/assets/images/portfolio/Group 39.png"      // Replace with your actual image path
                                alt="Bottom Decoration"
                                width={100}
                                height={50}
                                className="mt-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hire;