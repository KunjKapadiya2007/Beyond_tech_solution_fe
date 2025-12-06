'use client';
import React from 'react';
import Image from 'next/image';
import sampleImage from '../../../public/assets/images/service/project.png';

const Project = () => {
    return (
        <div className="flex items-center justify-center bg-[#1A1818] px-4 pb-8">
            <div className="container mx-auto relative aspect-video max-w-7xl rounded-2xl overflow-hidden">
                <Image
                    src={sampleImage}
                    alt="Project"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                />
            </div>
        </div>
    );
};

export default Project;
