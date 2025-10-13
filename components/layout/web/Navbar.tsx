"use client";

import React from "react";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <header className="flex h-[60px] items-center border-b border-b-gray-200 md:h-[88px] md:border-b-0">
      <Container className="flex w-full items-center justify-between gap-4 self-center">
        <div className="flex w-full items-center gap-4">
          {/* Right side: Logo */}
          <Image src="/svgs/logo.svg" alt="IBMP Logo" width={40} height={40} />

          {/* Middle: Search */}
          <div className="relative w-full md:w-2/3 lg:w-3/4">
            <div className="relative flex min-h-[40px] items-center gap-1 rounded-md border border-[#252A3C61] px-3 md:min-h-[46px]">
              <IoIosSearch size={20} className="cursor-pointer" />
              <Input
                type="text"
                placeholder="جستجو در خدمات، شرکت ها و ..."
                className="placeholder:text-secondary-300 border-0 bg-transparent text-sm font-medium shadow-none focus:border-0 focus:ring-0 focus:outline-none focus-visible:ring-transparent"
              />
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="contained" color="primary" className="font-bold">
            ثبت رایگان کالا و خدمات
          </Button>
          <Button variant="outline" color="primary" className="font-bold">
            ورود به حساب کاربری
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
