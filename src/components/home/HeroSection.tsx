// components/HeroSection.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Beyond Just{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Code
            </span>
            {' '}—<br />
            We Build Impact.
          </h1>
          
          {/* Subtitle */}
          <p ref={subheadingRef} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We design, develop, and deploy IT services that empower startups to enterprises—across industries and borders.
          </p>
          
          {/* CTA Button */}
          <div className="pt-1">
            <button ref={buttonRef} className="cursor-hover group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium cursor-pointer text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105">
              <span className="relative z-10 flex items-center">
                Let&apos;s Started
                <svg 
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-orange-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-red-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-32 w-1 h-1 bg-orange-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* 3D Wireframe Shape */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path 
            d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z" 
            stroke="url(#gradient)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M100 20 L100 180 M20 60 L180 140 M180 60 L20 140" 
            stroke="url(#gradient)" 
            strokeWidth="0.5" 
            opacity="0.5"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};