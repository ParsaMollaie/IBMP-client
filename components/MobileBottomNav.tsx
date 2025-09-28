'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mobileBottomNav, MobileNavItem } from '@/constants';

type MobileBottomNavProps = {
  onCategoryClick?: () => void;
};

const MobileBottomNav = ({ onCategoryClick }: MobileBottomNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-surface-1 shadow-sm md:hidden">
      <ul className="flex justify-around items-center h-16">
        {mobileBottomNav.map((item: MobileNavItem) => {
          const isActive = item.path ? pathname === item.path : false;

          const content = (
            <>
              <Image
                src={item.icon}
                alt={item.name}
                width={22}
                height={22}
                className={`mb-1 ${isActive ? 'opacity-100' : 'opacity-60'}`}
              />
              <span
                className={`${
                  isActive ? 'text-text-5 font-bold' : 'text-text-3 font-normal'
                }`}
              >
                {item.name}
              </span>
            </>
          );

          return (
            <li key={item.name} className="flex-1">
              {item.path ? (
                <Link
                  href={item.path}
                  className={`flex flex-col items-center justify-center w-full py-2 text-xs leading-5 ${
                    isActive
                      ? 'text-text-5 font-bold'
                      : 'text-text-3 font-normal'
                  }`}
                >
                  {content}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={onCategoryClick}
                  className="flex flex-col items-center justify-center w-full py-2 text-xs leading-5 text-text-3 font-normal"
                >
                  {content}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
