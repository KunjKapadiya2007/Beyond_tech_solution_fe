import React from 'react';
import logo from '../../../public/assets/images/logo2.png';
import { Mail, Phone, MapPin, ChevronRight,Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

const WavyUnderlineTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-white font-semibold mb-5 relative inline-block w-fit pb-1">
      {children}
      <span
          className="absolute left-0 -bottom-2 w-full h-[6px] bg-no-repeat bg-bottom bg-[length:100%_6px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,3 Q2,6 4,3 T8,3 T12,3 T16,3 T20,3 T24,3 T28,3 T32,3 T36,3 T40,3 T44,3 T48,3 T52,3 T56,3 T60,3 T64,3 T68,3 T72,3 T76,3 T80,3 T84,3 T88,3 T92,3 T96,3 T100,3' fill='none' stroke='%23EE2A6D' stroke-width='1.5'/%3E%3C/svg%3E")`,
          }}
      ></span>
    </h3>
);

export const Footer: React.FC<FooterProps> = () => {

  return (
      <footer className="bg-[#0D0D0D] py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-white max-w-xs md:mx-auto">
              <div className={"mb-2"}>
                  <Image src={logo} alt="Logo" height={60} width={60}/>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 pr-5">
                The proper Footer on proper time can preserve you protection. We assist you make sure everybody forward.
              </p>
              <div className="flex space-x-4">
                <div
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#EE2A6D] cursor-pointer hover:scale-105 transition-transform">
                  <Facebook size={16}/>
                </div>
                <div
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#EE2A6D] cursor-pointer hover:scale-105 transition-transform">
                  <Twitter size={16}/>
                </div>
                <div
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#EE2A6D] cursor-pointer hover:scale-105 transition-transform">
                  <Instagram size={16}/>
                </div>
                <div
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#EE2A6D] cursor-pointer hover:scale-105 transition-transform">
                  <Youtube size={16}/>
                </div>
              </div>
            </div>

            {/* Second Column - Quick Links */}
            <div className="md:mx-auto">
              <h3 className="text-white font-semibold mb-2 relative inline-block">
                <WavyUnderlineTitle>Quick Links</WavyUnderlineTitle>
              </h3>
              <ul className="space-y-3 text-white">
                {[
                  { label: 'Services', href: '/services' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'About', href: '/about' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Blog', href: '/blogDetails' },
                ].map(({ label, href }) => (
                    <li key={label} className="flex items-center space-x-2">
                      <ChevronRight size={18} className="text-[#EE2A6D]" />
                      <Link href={href} className="hover:text-[#EE2A6D] transition-colors">
                        {label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Third Column - Contact */}
            <div className="md:mx-auto">
              <h3 className="text-white font-semibold mb-2 relative inline-block">
                <WavyUnderlineTitle>Contact</WavyUnderlineTitle>
              </h3>
              <ul className="space-y-3 tracking-wide text-white">
                <li className="flex items-center space-x-2">
                  <Mail size={20} className="text-[#EE2A6D]"/>
                  <span>hello@beyondtech.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={20} className="text-[#EE2A6D]"/>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={20} className="text-[#EE2A6D]"/>
                  <span>123 Tech Street, Digital City</span>
                </li>
              </ul>
            </div>
          </div>


          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Beyond Tech Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};
