"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const PaymentFailedContent: React.FC = () => {
  const router = useRouter();
  return (
    <>
      {/* Logo Header - Only visible on mobile */}
      <div className="border-stroke-2 border-b p-4 md:hidden">
        <div className="flex justify-center">
          {/* IBMP Logo */}
          <Image src="/svgs/logo.svg" alt="logo" width={40} height={40} />
        </div>
      </div>

      {/* Main Content Container */}
      <Container className="flex min-h-[calc(100vh-100px)] items-center justify-center md:min-h-screen">
        <div className="flex w-full max-w-md flex-col items-center justify-center text-center md:min-h-screen">
          <Image src="/svgs/payment-failed.svg" alt="payment-success" width={140} height={140} />

          {/* failed Message */}
          <h1 className="text-text-5 mt-16 text-2xl font-normal md:text-3xl">پرداخت ناموفق بود </h1>

          <p className="text-text-3 mt-5 text-lg">دوباره تلاش کنید </p>

          <Button className="mt-16 w-full p-6 font-bold" onClick={() => router.push("/")}>
            بازگشت به آگهی ها
          </Button>
        </div>
      </Container>
    </>
  );
};

export default PaymentFailedContent;
