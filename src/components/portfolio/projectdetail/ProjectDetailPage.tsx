'use client';

import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useParams} from 'next/navigation'; // used to get dynamic slug

gsap.registerPlugin(ScrollTrigger);

// ✅ Project Data
const projects = [
    {
        slug: 'organc',
        sections: {
            projectStory: {
                heading:'Brand Journey Improvements',
                title: 'Project Story',
                content: `The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. `,
                images: [
                    '/assets/images/portfolio/BrandJourney.jpg',
                    '/assets/images/portfolio/img1.jpg',
                    '/assets/images/portfolio/img2.jpg',
                ],
            },
            about: {
                title: 'About',
                content: `Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. 

And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills`,
            },
        },
    },
    {
        slug: 'fr',
        sections: {
            projectStory: {
                heading:'',
                title: 'Brand Grouping',
                content: `The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. 

We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.`,
                images: [
                    '/assets/images/portfolio/Brand Grouping.jpg',
                    '/assets/images/portfolio/img1.jpg',
                    '/assets/images/portfolio/img2.jpg',
                ],
            },
            about: {
                title: 'About',
                content: `Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. 

And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills`,
            },
        },
    },
    {
        slug: 'rumanda',
        sections: {
            projectStory: {
                heading:'NFT Glimps',
                title: 'Project Story',
                content: `The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. 

We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.`,
                images: [
                    '/assets/images/portfolio/NFT Glimps.jpg',
                    '/assets/images/portfolio/img1.jpg',
                    '/assets/images/portfolio/img2.jpg',
                ],
            },
            about: {
                title: 'About',
                content: `Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. 

And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills`,
            },
        },
    },
    {
        slug: 't3d',
        sections: {
            projectStory: {
                heading:'Brand Suggestions',
                title: 'Project Story',
                content: `The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. 

We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.`,
                images: [
                    '/assets/images/portfolio/Brand Suggestions.jpg',
                    '/assets/images/portfolio/img1.jpg',
                    '/assets/images/portfolio/img2.jpg',
                ],
            },
            about: {
                title: 'About',
                content: `Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. 

And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills`,
            },
        },
    },
];

export default function ProjectDetailPage() {
    const {id} = useParams(); // dynamic route param
    const project = projects.find((p) => p.slug === id);
    console.log(project, "fdgffjygfkj");
    console.log(id, "fhgrfhfhd")

    const img1Ref = useRef(null);
    const projectTitleRef = useRef(null);
    const textRef = useRef(null);
    const imgLeftRef = useRef(null);
    const imgRightRef = useRef(null);
    const aboutTitleRef = useRef(null);
    const aboutTextRef = useRef(null);

    useEffect(() => {
        if (
            !img1Ref.current ||
            !textRef.current ||
            !imgLeftRef.current ||
            !imgRightRef.current ||
            !aboutTextRef.current
        )
            return;

        gsap.fromTo(img1Ref.current, {y: 100, opacity: 0}, {
            y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {trigger: img1Ref.current, start: 'top 80%'}
        });

        gsap.fromTo(projectTitleRef.current, {y: 100, opacity: 0}, {
            y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {trigger: projectTitleRef.current, start: 'top 85%'}
        });

        gsap.fromTo(textRef.current, {y: 100, opacity: 0}, {
            y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {trigger: textRef.current, start: 'top 85%'}
        });

        gsap.fromTo(imgLeftRef.current, {x: -100, opacity: 0}, {
            x: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {trigger: imgLeftRef.current, start: 'top 85%'}
        });

        gsap.fromTo(imgRightRef.current, {x: 100, opacity: 0}, {
            x: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {trigger: imgRightRef.current, start: 'top 85%'}
        });

        gsap.fromTo(aboutTitleRef.current, {y: 100, opacity: 0}, {
            y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: {trigger: aboutTitleRef.current, start: 'top 85%'}
        });

        gsap.fromTo(aboutTextRef.current, {y: 100, opacity: 0}, {
            y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: {trigger: aboutTextRef.current, start: 'top 85%'}
        });
    }, []);

    if (!project) {
        return (
            <div className="text-center py-20 text-white text-xl">
                Project not found.
            </div>
        );
    }

    const {sections} = project;

    return (
        <div className="bg-[#1A1818] text-white py-5 px-4 sm:px-6 lg:px-12 lg:pt-30 pt-4">
            <div className="container mx-auto sm:space-y-16 space-y-9">
                {/* Header */}
                <header className="space-y-1">
                    <div className="md:text-[56px] sm:text-[52px] text-[34px] font-semibold">
                        {sections.projectStory.heading}
                    </div>
                    <p className="md:text-[18px] text-[16px] font-semibold text-[#949494]">
                        Details About The Project
                    </p>
                    <div className="mt-6 flex justify-center" ref={img1Ref}>
                        <Image
                            src={sections.projectStory.images[0]}
                            alt="Main Project Image"
                            width={1400}
                            height={636}
                            className="rounded-lg object-cover w-full lg:h-[800px] md:h-[700px] sm:h-[600px] h-[400]"
                        />
                    </div>
                </header>

                {/* Project Story */}
                <section className="space-y-6 container mx-auto">
                    <div
                        ref={projectTitleRef}
                        className="text-2xl md:text-[32px] sm:text-[28px] text-[24px] max-w-6xl mx-auto font-semibold"
                    >
                        {sections.projectStory.title}
                    </div>
                    <p
                        ref={textRef}
                        className="text-[#E0E0E0] font-normal md:text-[18px] text-[16px] max-w-6xl mx-auto whitespace-pre-line"
                    >
                        {sections.projectStory.content}
                    </p>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
                            <div ref={imgLeftRef}>
                                <Image
                                    src={sections.projectStory.images[1]}
                                    alt="Project image 1"
                                    width={555}
                                    height={600}
                                    className="w-[555px] h-[600px] object-cover rounded-[16px]"
                                />
                            </div>
                            <div ref={imgRightRef}>
                                <Image
                                    src={sections.projectStory.images[2]}
                                    alt="Project image 2"
                                    width={555}
                                    height={600}
                                    className="w-[555px] h-[600px] object-cover rounded-[16px]"
                                />
                            </div>
                        </div>
                    </div>


                </section>

                {/* About */}
                <section className="space-y-6 max-w-6xl mx-auto">
                    <h2
                        ref={aboutTitleRef}
                        className="text-[#FFFFFF] font-bold md:text-[32px] sm:text-[28px] text-[24px]"
                    >
                        {sections.about.title}
                    </h2>
                    <p
                        ref={aboutTextRef}
                        className="text-[#E0E0E0] md:text-[18px] text-[16px] font-normal whitespace-pre-line"
                    >
                        {sections.about.content}
                    </p>
                </section>
            </div>
        </div>
    );
}
