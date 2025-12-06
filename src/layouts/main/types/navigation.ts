export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
}

export interface NavigationProps {
  items: NavItem[];
  currentPath: string;
  onItemClick?: (item: NavItem) => void;
}