// components/nav/nav-item.tsx
import React from 'react';
import { NavItem } from '../../types/navigation';

interface NavItemProps {
  item: NavItem;
  isActive: boolean;
  onClick?: (item: NavItem) => void;
  className?: string;
}

export const NavigationItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  onClick,
  className = ''
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.(item);
  };

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className={`
        flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
        hover:bg-gray-100 dark:hover:bg-gray-800 group
        ${isActive 
          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600' 
          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
        }
        ${className}
      `}
    >
      {item.icon && (
        <span className={`
          transition-colors duration-200
          ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}
          group-hover:text-blue-600 dark:group-hover:text-blue-400
        `}>
          {item.icon}
        </span>
      )}
      <span className="font-medium">{item.label}</span>
      {item.badge && (
        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {item.badge}
        </span>
      )}
    </a>
  );
};