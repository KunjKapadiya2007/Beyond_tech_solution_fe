'use client';

import React, { useState } from 'react';
import { DesktopNavigation } from './nav/desktop/index';
import { NavItem } from './types/navigation';
import { Header } from './header';
import { Footer } from './footer';

// Sample navigation items for website
const navigationItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/'
  },
  {
    id: 'about',
    label: 'About',
    href: '/about'
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services'
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    href: '/portfolio'
  },
  {
    id: 'blogs',
    label: 'Blog',
    href: '/blogs'
  },
  {
    id: 'career',
    label: 'Career',
    href: '/career'
  }
];

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavItemClick = (item: NavItem) => {
    setCurrentPath(item.href);
    // Handle navigation logic here (e.g., router.push, window.location, etc.)
    console.log(`Navigating to: ${item.href}`);
  };

  const navProps = {
    items: navigationItems,
    currentPath,
    onItemClick: handleNavItemClick
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Desktop Navigation - Horizontal Header */}
      <DesktopNavigation {...navProps} />

      {/* Mobile Header - Shows only on mobile/tablet */}
      <Header {...navProps} />

      {/* Main Content - No left padding needed now */}
      <main className="flex-1">
        <div>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
