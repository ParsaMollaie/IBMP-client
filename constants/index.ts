import Ads from '../public/svgs/ads.svg';
import Article from '../public/svgs/article.svg';
import Category from '../public/svgs/category.svg';
import Home from '../public/svgs/home.svg';
import User from '../public/svgs/user.svg';

export type MobileNavItem = {
  name: string;
  icon: string;
  path?: string;
  action?: () => void;
};

export const mobileBottomNav: MobileNavItem[] = [
  {
    name: 'خانه',
    path: '/',
    icon: Home,
  },
  {
    name: 'دسته‌بندی',
    icon: Category,
  },
  {
    name: 'تبلیغات',
    path: '/ads',
    icon: Ads,
  },
  {
    name: 'مقالات',
    path: '/article',
    icon: Article,
  },
  {
    name: 'حساب کاربری',
    path: '/login',
    icon: User,
  },
];
