"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";

const CompanyInfoCentent = () => {
  return (
    <>
      {/* Mobile Header */}
      <div className="sticky top-0 z-20 border-b border-[#0000000D] bg-white lg:hidden">
        <div className="flex items-center justify-start gap-2 p-4">
          <Link href="/" className="p-2">
            <ChevronRight className="h-6 w-6" />
          </Link>
          <h1 className="text-text-5 text-lg font-medium">اطلاعات شرکت</h1>
        </div>
      </div>

      {/* Main Content */}
      <Container>
        {/* Company Info Card */}
        <div className="border-stroke-2 mt-10 flex w-full items-center gap-4 rounded-2xl border p-3 lg:w-[50%]">
          <Image src="/svgs/logo.svg" alt="logo" width={40} height={40} />
          <h2 className="text-text-5 text-lg font-medium">نام شرکت اینجا قرار میگیرد</h2>
        </div>

        {/* company description- only show in mobile view */}
        <div className="mt-5 block lg:hidden">
          <p className="text-sm text-black">
            توضیحات وارد شده حین تعریف شرکت یا کسب و کار اینجا قرار می‌گیرد.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-8 space-y-5">
          {/* Phone */}
          <div className="flex items-start gap-2">
            <span className="text-text-5 font-bold">تلفن تماس:</span>
            <span className="text-text-5 text-lg font-normal">۰۲۱-۲۲۲۳۲۳۴۴</span>
          </div>

          {/* Website */}
          <div className="flex items-start gap-2">
            <span className="text-text-5 font-bold">وب سایت:</span>
            <span className="text-text-5 cursor-pointer text-lg font-normal">
              URL goes here.com
            </span>
          </div>

          {/* Social Media */}
          <div className="flex items-start gap-2">
            <span className="text-text-5 font-bold">شبکه‌های اجتماعی:</span>
            <div className="flex gap-5">
              <Link href="/">
                <Image src="/svgs/instagram.svg" alt="instagram" width={24} height={24} />
              </Link>

              <Link href="/">
                <Image src="/svgs/whatsapp.svg" alt="whatsapp" width={24} height={24} />
              </Link>

              <Link href="/">
                <Image src="/svgs/telegram.svg" alt="telegram" width={24} height={24} />
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="border-stroke-2 flex w-full items-start gap-2 border-t-4 border-b-4 py-6 lg:w-[50%]">
            <span className="text-text-5 font-bold">نشانی:</span>
            <p className="text-text-5 text-lg font-normal">
              تهران، ولنجک، بلوار دانشجو، دانشگاه شهید بهشتی، پارک علم و فناوری، طبقه سوم.
            </p>
          </div>
        </div>

        {/* Services Section - Two Columns on Desktop */}
        <div className="mt-6">
          <h3 className="text-text-5 text-lg font-bold">کالاها و خدمات آگهی شده:</h3>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {/* Service Group 1 - Always visible, no dropdown */}
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-primary-600 fon">
                گروه کالا و خدمات: کنکوری سطح ۱ - کنکوری سطح ۳
              </h4>
              <div className="text-text-4 mt-4 space-y-2 text-sm">
                <p>شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات</p>
                <p>شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات</p>
                <p>شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات</p>
              </div>
              {/* Image came from API */}
              <Image src="/images/most2.png" alt="product image" width={400} height={40} />
            </div>

            {/* Service Group 2 - Always visible, no dropdown */}
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-primary-600 fon">
                گروه کالا و خدمات: کنکوری سطح ۱ - کنکوری سطح ۳
              </h4>
              <div className="text-text-4 mt-4 space-y-2 text-sm">
                <p>شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات</p>
                <p>شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات</p>
                <p>شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات شرح کالا و خدمات</p>
              </div>
              {/* Image came from API */}
              <Image src="/images/most2.png" alt="product image" width={400} height={40} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompanyInfoCentent;
