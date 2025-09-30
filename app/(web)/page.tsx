'use client';

import HeroSlider from '@/components/HeroSlider';
import Menu from '@/components/Menu';
import MobileBottomNav from '@/components/MobileBottomNav';
import MobileCategoryMenu from '@/components/MobileCategoryMenu';
import { useState } from 'react';

const menuData = [
  {
    title: 'مصالح پایه',
    children: [
      {
        title: 'اسکلت و سازه',
        items: ['قالب بتن', 'اسپیسر', 'جک', 'روغن قالب'],
      },
      {
        title: 'اتصالات',
        items: ['گل میخ', 'پیچ و مهره', 'بولت', 'فورجینگ'],
      },
    ],
  },
  {
    title: 'دکوراسیون داخلی',
    children: [
      {
        title: 'سازه',
        items: [
          'سازه ICF',
          'سازه LSF',
          'سازه‌های چوبی',
          'سازه‌های پیش ساخته',
          'سازه‌های فولادی',
        ],
      },
    ],
  },
  {
    title: 'نما و فضای باز',
    children: [
      {
        title: 'سقف سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
      {
        title: '22سقف سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
      {
        title: '44سقف سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
    ],
  },
  {
    title: 'تاسیسات برقی',
    children: [],
  },
  {
    title: 'تاسیسات مکانیکی',
    children: [],
  },
  {
    title: 'ابزار و یراق و ماشین آلات',
    children: [],
  },
  {
    title: 'مهندسین و مجریان',
    children: [
      {
        title: '43344سقف سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
      {
        title: '2323 سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
      {
        title: '4434سقف سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
      {
        title: '443سقف سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
      {
        title: '4774سقف سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
      {
        title: '40004سقف سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
      {
        title: 'as سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
      {
        title: 'fg سازه‌ای',
        items: [
          'سقف عرشه فولادی',
          'سقف شیب دار',
          'سقف بابل دک',
          'پانل ساندویچی',
          'سقف بام سبز',
        ],
      },
    ],
  },
];

const slidesTest = [
  {
    image: '/images/slider2.png',
  },
  {
    image: '/images/slider2.png',
  },
  {
    image: '/images/slider2.png',
  },
];

export default function Home() {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <>
      <Menu menuData={menuData} />
      <MobileBottomNav onCategoryClick={() => setCategoryOpen(!categoryOpen)} />
      <MobileCategoryMenu
        menuData={menuData}
        open={categoryOpen}
        onClose={() => setCategoryOpen(false)}
      />
      <HeroSlider slides={slidesTest} />
    </>
  );
}
