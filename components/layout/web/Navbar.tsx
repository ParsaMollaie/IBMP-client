'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const Navbar = () => {
  return (
    <header className="py-7 lg:px-18 px-4">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center justify-start gap-4 w-full">
          {/* Right side: Logo */}
          <Image src="/svgs/logo.svg" alt="IBMP Logo" width={40} height={40} />

          {/* Middle: Search */}
          <div className="relative md:w-2/3 lg:w-3/4 w-full">
            <div className=" border border-[#252A3C61] relative flex min-h-[46px] items-center gap-1 rounded-md px-3">
              <IoIosSearch size={20} className="cursor-pointer" />
              <Input
                type="text"
                placeholder="جستجو در خدمات، شرکت ها و ..."
                className="bg-transparent shadow-none border-0 focus:outline-none focus:ring-0 focus:border-0 focus-visible:ring-transparent text-sm font-medium placeholder:text-secondary-300"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="contained" color="primary" className="font-bold">
            ثبت رایگان کالا و خدمات
          </Button>
          <Button variant="outline" color="primary" className="font-bold">
            ورود به حساب کاربری
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
