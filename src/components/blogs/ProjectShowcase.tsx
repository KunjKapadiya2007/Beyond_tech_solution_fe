'use client';

import React from 'react';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import { User, Calendar } from 'lucide-react';
import blog from '../../../public/assets/images/home/14691e8a22d50a0dcf5678bd417decd638fa3c8e.jpg'
import css from '../../../public/assets/images/home/cb46ff02792fff313747138b10278c509b291bf2.jpg'
import seo from '../../../public/assets/images/home/e43a82dd679ad55522a5ad66a7f513733c0a680f.jpg'

interface Blog {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    image: StaticImageData;
}

const blogData: Blog[] = [
    {
        slug: "build-a-next-blog",
        title: "Build a Blog with Next.js",
        excerpt: "Learn how to create a modern blog using Next.js and Tailwind CSS.",
        content: "Full blog content here...",
        author: "John Doe",
        date: "June 30, 2025",
        image: blog,
    },
    {
        slug: "tailwind-best-practices",
        title: "Tailwind CSS Best Practices",
        excerpt: "Master Tailwind CSS with these expert techniques and design patterns.",
        content: "Full blog content here...",
        author: "Jane Smith",
        date: "June 28, 2025",
        image: css,
    },
    {
        slug: "seo-nextjs-tips",
        title: "Boost SEO in Next.js",
        excerpt: "Improve your website’s visibility with these Next.js SEO strategies.",
        content: "Full blog content here...",
        author: "Alex Roy",
        date: "June 25, 2025",
        image: seo,
    },
];

const ProjectShowcase: React.FC = () => {
    return (
        <div className="bg-[#1a1818] py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="container mx-auto">
                <div className="text-[14px] text-white text-center">INSIGHT BLOGS</div>
                <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[100%] mb-6 text-center mt-4">
                    Latest Blogs
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                    {blogData.map((blog) => (
                        <Link href={`/blogDetails`} key={blog.slug}>
                            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group cursor-pointer">
                                {/* Image */}
                                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="px-6 sm:px-8 pt-6 pb-10">
                                    <div className="flex items-center gap-4 text-sm text-[#707070] mb-3">
                                        <div className="flex items-center gap-1">
                                            <User size={14} className="text-[#707070]" />
                                            <span>{blog.author || 'Unknown'}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} className="text-[#707070]" />
                                            <span>{blog.date || 'Unknown date'}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-[#121212] text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[26px] tracking-[0.3px] group-hover:text-[#101828]">
                                        {blog.title}
                                    </h3>

                                    <p className="text-[#6e6e6e] text-sm mt-2 line-clamp-3">{blog.excerpt}</p>

                                    <div className="flex items-center gap-2 mt-5 text-sm text-[#9F9F9F] tracking-widest uppercase font-medium group-hover:text-[#6e6e6e] transition-colors duration-200">
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
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
