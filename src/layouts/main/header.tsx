'use client';

import React, { useState } from 'react';
import { NavigationProps } from './types/navigation';
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from 'clsx';

interface HeaderProps extends NavigationProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({
                                                  items,
                                                  currentPath,
                                                  onItemClick,
                                              }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="lg:hidden bg-[#1A1818] text-white sticky top-0 z-50">
            {/* Top bar */}
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                <Image
                    src="/assets/images/logo.png"
                    alt="Beyond Solution Logo"
                    width={150}
                    height={44}
                    className="object-contain"
                    priority
                />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white transition-transform duration-300"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Animated Dropdown */}
            <div
                className={clsx(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    isOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                )}
            >
                <nav className="px-6 flex flex-col space-y-4 bg-[#1A1818]">
                    {items.map((item) => {
                        const isActive = currentPath === item.href;
                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsOpen(false);
                                    onItemClick?.(item);
                                }}
                                className={clsx(
                                    'text-base font-medium transition-colors duration-200',
                                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                )}
                            >
                                {item.label}
                            </a>
                        );
                    })}

                    <button className="w-full text-base mt-1 bg-gradient-to-r from-[#ff705b] to-[#e23375] text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:opacity-90">
                        Contact Us
                    </button>
                </nav>
            </div>
        </header>
    );
};
