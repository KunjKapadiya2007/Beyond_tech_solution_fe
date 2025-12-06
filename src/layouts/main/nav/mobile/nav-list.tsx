import React from 'react';
import { NavigationItem } from './nav-item';
import { NavigationProps } from '../../types/navigation';

export const NavigationList: React.FC<NavigationProps> = ({
  items,
  currentPath,
  onItemClick
}) => {
  return (
    <nav className="space-y-2">
      {items.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
          isActive={currentPath === item.href}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
};