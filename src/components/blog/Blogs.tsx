'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import img1 from '../../../public/assets/images/blogDetails/blog/blogimg1.png';
import img2 from '../../../public/assets/images/blogDetails/blog/author.png';
import img3 from '../../../public/assets/images/blogDetails/blog/linkedin.png';
import img4 from '../../../public/assets/images/blogDetails/blog/facebook.png';
import img5 from '../../../public/assets/images/blogDetails/blog/twitter.png';
import img6 from '../../../public/assets/images/blogDetails/blog/linkedin1.png';
import img7 from '../../../public/assets/images/blogDetails/blog/blogimg2.png';

interface ContentSection {
    heading: string;
    content: string[];
    image?: StaticImageData;
}

interface BlogData {
    coverImage: StaticImageData;
    category: string;
    title: string;
    date: string;
    readTime: string;
    contentSections: ContentSection[];
    sectionsList: string[];
}

interface Author {
    image: StaticImageData;
    name: string;
    title: string;
    description: string;
    linkedinBadge: StaticImageData;
}

interface SocialIcon {
    src: StaticImageData;
    alt: string;
}

const highlightPhrases = (text: string) => {
    return text
        .replace(
            /written by humans or created using artificial intelligence/g,
            '<span class="text-orange-400 font-semibold">$&</span>'
        )
        .replace(/E-E-A-T principles/g, '<span class="text-orange-400 font-semibold">$&.</span>')
        .replace(/\bChatGPT\b/g, '<span class="text-orange-400 font-semibold">$&</span>')
        .replace(/in accordance with TechTarget/g, '<span class="text-orange-400 font-semibold">$&</span>')
        .replace(/Trust me on this/g, '<span class="text-orange-400 font-semibold">$&</span>')
};

const blogData: BlogData = {
    coverImage: img1,
    category: 'Artificial Intelligence',
    title: 'Mastering ChatGPT Blog Creation: Dos and Don’ts for Marketing Managers',
    date: 'Oct 19',
    readTime: '10 min read',
    contentSections: [
        {
            heading: 'Exploring Generative AI in Content Creation',
            content: [
                "Hello there! As a marketing manager in the SaaS industry, you might be looking for innovative ways to engage your audience. I bet generative AI has crossed your mind as an option for creating content. Well, let me share from my firsthand experience.",
                "Google encourages high-quality blogs regardless of whether they’re written by humans or created using artificial intelligence like ChatGPT. Here's what matters: producing original material with expertise and trustworthiness based on Google E-E-A-T principles",
                "This means focusing more on people-first writing rather than primarily employing AI tools to manipulate search rankings. There comes a time when many experienced professionals want to communicate their insights but get stuck due to limited writing skills – that’s where Generative AI can step in.",
                "So, together, we’re going explore how this technology could help us deliver valuable content without sounding robotic or defaulting into mere regurgitations of existing materials (spoiler alert – common pitfalls!). Hang tight - it’ll be a fun learning journey!",
            ]
        },
        {
            heading: 'Steering Clear of Common AI Writing Pitfalls',
            content: [
                "Jumping headfirst into using AI, like ChatGPT, without a content strategy can lead to some unfortunate results. One common pitfall I've seen is people opting for quantity over quality - they churn out blogs, but each one feels robotic and soulless, reading just like countless others on the internet.",
                "Another fault line lies in creating reproductions rather than delivering unique perspectives that offer value to readers; it often happens if you let an AI tool write your full blogDetails unrestrained! Trust me on this – Ask any experienced marketer or writer about their takeaways from using generative AI tools. They'll all agree that adding a human touch and following specific guidelines are key when implementing these tech pieces.",
                "Remember, our goal here isn’t merely satisfying search engines but, more importantly, knowledge-hungry humans seeking reliable information online. So keep your audience's needs at heart while leveraging technology’s assistance!",
            ]
        },
        {
            heading: 'Understanding ChatGPT Capabilities – Define Your Style',
            content: [
                "Welcome to the intriguing world of ChatGPT! Its ability and potential can truly be mind-boggling. I have learned from experience how capable it is in dealing with diverse content generation tasks, only that its text sounded slightly \"unnatural\" in accordance with TechTarget. However, fear not – there are ways around this!",
                "One strategic move I've seen work wonders is defining your unique writing style first before handing over the reins to AI; you treat it like a canvas whereupon our vision opens up. If we clearly instruct who we're targeting or what tone resonates more effectively, generative AI tools such as ChatGPT will comply remarkably well.",
                "In framing guidelines, remember to keep audience interests at heart while adopting technology’s benefits for efficient output – trust me on this because neglecting these aspects could backfire by generating unappealing robotic-like reads.",
                "Ultimately, aiming towards reader-focused driven creativity illuminated under authentically humanized narratives holds priority above all else when crafting blogs using auto-generation toolkits!",
            ]
        },
        {
            heading: 'Conclusion: Embracing AI in Blog Creation',
            content: [
                "As we wrap up, let’s remember the heart of blogDetails creation is serving our readers. Whether a post was drafted by experts or AI like ChatGPT doesn't matter to Google algorithms as long it's meaningful and high-quality.",
                "Through this valuable learning curve together, I hope you’ve seen how well-implemented strategies can guide generative tools in delivering content mirroring human quality. Yes! It often involves some trial & error phases, but trust me – persistence practiced alongside continuous improvements results in rewarding feats!",
                "Additionally, perhaps most importantly, proofreading every piece before publishing hugely influences audience perceptions, establishing professional credibility. Why? Well, even minor oversights could potentially undermine reader experiences, turning away prospective subscribers; hence, maintain meticulous checkpoints for flawless publications!",
                "So here goes my fellow SaaS marketing managers: Embrace technology enhancement aids responsibly, always keeping end-user perspectives focal while constantly striving towards better communication standards, offering insightful, pleasing read across widespread digital platforms!",
            ]
        },
        {
            heading: 'Afterword: The AI Behind This Article',
            image: img7,
            content: [
                "Let's be clear: ChatGPT wrote this article and generated the hero image. It combined my personal experience, knowledge, and research. From the initial notes to finish, it took just 37 minutes.",
                "Even though it was made by AI, no detection tools could tell. The only thing used was OpenAI's Chat API, no other external tools.",
                "It shows how AI can help in making content interesting and relevant. It's a new chapter in how we create and share information.",
            ]
        },
    ],
    sectionsList: [
        'Exploring Generative AI in Content Creation',
        'Steering Clear of Common AI Writing Pitfalls',
        'Understanding ChatGPT Capabilities – Define Your Style',
        'Conclusion: Embracing AI in Blog Creation',
        'Afterword: The AI Behind This Article'
    ]
};

const author: Author = {
    image: img2,
    name: 'Tamás Hám–Szabó',
    title: 'Founder of SAAS First – the Best AI and Data-Driven Customer Engagement Tool',
    description: "With 11 years in SaaS, I've built MillionVerifier and SAAS First. Passionate about SaaS, data, and AI. Let's connect if you share the same drive for success!",
    linkedinBadge: img3
};

const socialIcons: SocialIcon[] = [
    { src: img4, alt: 'Facebook' },
    { src: img5, alt: 'Twitter' },
    { src: img6, alt: 'LinkedIn' }
];

const Blogs: React.FC = () => {
    const [activeSection, setActiveSection] = useState(blogData.sectionsList[0]);

    return (
        <div className="bg-[#1a1818] text-white px-4 md:px-8 lg:px-24 lg:pt-30 pt-10">
            <div className="container mx-auto">
                <div
                    onClick={() => window.history.back()}
                    className="inline-flex items-center gap-2 bg-[#F6F6F6] text-[#0C2253] text-[14px] font-medium px-4 py-2 rounded-lg shadow-sm cursor-pointer w-fit mb-2"
                >
                    <span className="text-xl">{'>'}</span>
                    Blogs
                </div>
                <div className="flex flex-col xl:grid xl:grid-cols-[2fr_1fr] gap-10">
                    <div>
                        <div className="relative rounded-lg overflow-hidden">
                            <Image src={blogData.coverImage} alt="Blog Cover" className="w-full h-[250px] md:h-auto object-cover" />
                            <div className="absolute bottom-0 inset-x-0">
                                <div className="backdrop-blur-sm bg-black/30 md:bg-transparent rounded-t-md px-4 py-3 md:p-6">
                                    <div className="bg-[#DEE8FF] inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium text-[#0C1A3B] mb-3 md:mb-4">
                                        <span className="w-2.5 h-2.5 bg-[#0C1A3B] rounded-full"></span>
                                        {blogData.category}
                                    </div>
                                    <h1 className="font-bold text-[20px] md:text-[27px] leading-[130%] tracking-[0] mb-2 md:mb-4 text-white">
                                        {blogData.title}
                                    </h1>
                                    <p className="font-normal text-[13px] md:text-[14px] text-gray-300">
                                        {blogData.date} · {blogData.readTime}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 space-y-6">
                            {blogData.contentSections.map((section, idx) => (
                                <div key={idx}>
                                    <h2
                                        id={section.heading.replace(/\s+/g, '-').toLowerCase()}
                                        className="scroll-mt-32 text-[#fff] text-[27px] font-bold leading-[130%] mb-5 mt-10"
                                    >
                                        {section.heading}
                                    </h2>
                                    {section.image && (
                                        <div className="mb-4">
                                            <Image src={section.image} alt={section.heading} className="w-full h-auto rounded-lg border mb-10 border-white/10" />
                                        </div>
                                    )}
                                    {section.content.map((para, pIdx) => (
                                        <p
                                            key={pIdx}
                                            className="text-white mb-7 text-justify font-normal text-[18px] leading-[150%] tracking-[0%]"
                                            dangerouslySetInnerHTML={{__html: highlightPhrases(para)}}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div
                            className="mt-10 bg-gradient-to-r from-[#A2390D] to-[#BD4B1A] rounded-lg p-6 flex items-center justify-between flex-wrap gap-4">
                            <p className="text-white text-base font-semibold">Like what you see? Share with a friend.</p>
                            <div className="flex gap-4">
                                <Image src={img4} alt="Facebook" width={24} height={24} className="cursor-pointer" />
                                <Image src={img5} alt="Email" width={24} height={24} className="cursor-pointer" />
                                <Image src={img6} alt="LinkedIn" width={24} height={24} className="cursor-pointer" />
                            </div>
                        </div>

                        <hr className="border border-gray-600 border-opacity-20 mt-10" />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-[#A2390D] text-white rounded-xl p-6 sm:p-7">
                            <div className="relative w-[100px] h-[100px] mb-4">
                                <Image src={author.image} alt={author.name} className="rounded-md" />
                                <div className="absolute bottom-1 right-[-40px] sm:right-[-50px]">
                                    <Image src={author.linkedinBadge} alt="LinkedIn" width={30} height={30} />
                                </div>
                            </div>
                            <h3 className="text-[20px] font-semibold mb-3">{author.name}</h3>
                            <p className="text-[20px] font-normal text-white mb-4">{author.title}</p>
                            <hr className="border border-white/20 mb-4" />
                            <p className="text-[14px] text-white/90">{author.description}</p>
                        </div>

                        <div className="bg-[#A2390D] p-6 rounded-xl space-y-3">
                            <p className="font-semibold text-[16px]">Share with your community!</p>
                            <div className="flex space-x-4">
                                {socialIcons.map((icon, idx) => (
                                    <Image key={idx} src={icon.src} alt={icon.alt} width={30} height={30} className="rounded-md cursor-pointer" />
                                ))}
                            </div>
                        </div>

                        <div className="py-6">
                            <h4 className="text-white font-semibold text-[20px] mb-6">In this article</h4>
                            <ul className="space-y-4 text-[15px]">
                                {blogData.sectionsList.map((item, idx) => {
                                    const id = item.replace(/\s+/g, '-').toLowerCase();
                                    const isActive = activeSection === item;

                                    return (
                                        <li
                                            key={idx}
                                            onClick={() => {
                                                setActiveSection(item);
                                                const el = document.getElementById(id);
                                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className={`cursor-pointer break-words ${
                                                isActive
                                                    ? 'pl-3 border-l-2 border-orange-500 text-orange-400 font-semibold text-[16px] mb-6'
                                                    : 'text-white ml-3.5 font-normal text-[16px] mb-6'
                                            }`}
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
