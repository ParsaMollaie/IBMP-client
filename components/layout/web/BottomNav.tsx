"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Ads from "@/components/icons/Ads";
import Article from "@/components/icons/Article";
import Category from "@/components/icons/Category";
import Home from "@/components/icons/Home";
import User from "@/components/icons/User";
import MobileMenuBar from "@/components/layout/web/MobileMenuBar";
import { menuData } from "@/constants/menubar";
import { useDisclosure } from "@/hooks/shared/Disclosure";
import { cn } from "@/lib/utils";

const mobileBottomNav = [
  {
    name: "خانه",
    path: "/",
    icon: Home,
  },
  {
    name: "دسته‌بندی",
    icon: Category,
    component: MobileMenuBar,
  },
  {
    name: "تبلیغات",
    path: "/ads",
    icon: Ads,
  },
  {
    name: "مقالات",
    path: "/article",
    icon: Article,
  },
  {
    name: "حساب کاربری",
    path: "/login",
    icon: User,
  },
];

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed right-0 bottom-0 left-0 z-50 flex h-16 border-t border-t-gray-300 bg-white shadow-sm md:hidden">
        <ul className="flex w-full items-center justify-around">
          {mobileBottomNav.map((item) => {
            const isActive = item.path && pathname === item.path;

            return item.component ? (
              <item.component key={item.name} />
            ) : (
              <Link key={item.name} href={item.path}>
                <div
                  className={cn(
                    "flex flex-col items-center justify-center font-medium select-none",
                    isActive ? "text-text-5" : "text-text-3"
                  )}
                >
                  <item.icon className="mb-1 size-6" />
                  <span className="text-[10px] font-medium text-inherit">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default BottomNav;
