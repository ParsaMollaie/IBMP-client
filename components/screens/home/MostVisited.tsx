"use client";

import Image from "next/image";

import Container from "@/components/Container";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const MostVisitedCarousel = () => {
  return (
    <Container size="sm1" className="py-10">
      <h2 className="mb-3 text-lg font-bold"> پر بازدیدترین‌ها </h2>

      <Carousel
        opts={{
          direction: "rtl",
          align: "start",
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-3">
          {Array.from({ length: 9 }).map((_, i) => {
            return (
              <CarouselItem
                key={i}
                className="xs:basis-1/3 basis-2/5 px-2 pb-2 pl-2 sm:basis-1/3 md:basis-1/4 md:pl-3 lg:basis-[18%]"
              >
                <div className="flex flex-col items-center">
                  <div className="xs:size-32 relative size-20 overflow-hidden rounded-full bg-gray-200 p-3 md:size-40">
                    <Image
                      src={`/svgs/logo.svg`}
                      alt={`Slide `}
                      fill
                      className="cursor-pointer"
                      priority
                      quality={100}
                    />
                  </div>
                  <div className="py-2 text-center font-bold">اسم بیزینس </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </Container>
  );
};

export default MostVisitedCarousel;
