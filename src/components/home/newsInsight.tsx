'use client';

import React from 'react';
import Image from 'next/image';
import { User, Calendar } from 'lucide-react';
import type { StaticImageData } from 'next/image';

interface Article {
    id: number;
    title: string;
    author: string;
    date: string;
    image: string | StaticImageData;
}

interface RelatedArticlesProps {
    articles?: Article[];
}

const defaultArticles: Article[] = [
    {
        id: 1,
        title: "Designers are meant to be loved, not to be understood.",
        author: "John Doe",
        date: "July 29, 2022",
        image: '/assets/images/blogDetails/Article/Articlesimg1.jpg'
    },
    {
        id: 2,
        title: "Designers are meant to be loved, not to be understood.",
        author: "John Doe",
        date: "July 29, 2022",
        image: '/assets/images/blogDetails/Article/Articlesimg3.jpg'
    },
    {
        id: 3,
        title: "Designers are meant to be loved, not to be understood.",
        author: "John Doe",
        date: "July 29, 2022",
        image: '/assets/images/blogDetails/Article/Articlesimg2.jpg'
    }
];

const NewsInsight: React.FC<RelatedArticlesProps> = ({ articles = defaultArticles }) => {
    return (
        <div className="bg-[#1a1818] py-16 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="container mx-auto">
                <div className='text-[14px] text-white text-center'>LATEST NEWS</div>
                <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[100%] mb-6 text-center my-4 ">
                    Related Articles
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="px-6 sm:px-8 md:px-10 pt-6 sm:pt-7 md:pt-8 pb-10 sm:pb-12 md:pb-14">
                                <div className="flex flex-wrap items-center gap-4 text-sm text-[#707070] mb-3">
                                    <div className="flex items-center gap-1">
                                        <User size={14} className="text-[#707070]" />
                                        <span>{article.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} className="text-[#707070]" />
                                        <span>{article.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-[#121212] text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[26px] tracking-[0.3px] transition-colors duration-200 group-hover:text-[#101828]">
                                    {article.title}
                                </h3>

                                <div className="flex items-center gap-2 mt-4 text-sm text-[#9F9F9F] tracking-widest uppercase font-medium cursor-pointer hover:text-[#6e6e6e] transition-colors duration-200">
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsInsight;
