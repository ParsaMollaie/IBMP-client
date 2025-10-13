"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "@/components/Container";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/images/slider1.png",
  },
  {
    image: "/images/slider1.png",
  },
  {
    image: "/images/slider1.png",
  },
];

const ProductCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Container size="sm1" className="relative">
      <Carousel
        opts={{
          direction: "rtl",
        }}
        setApi={setApi}
      >
        <CarouselContent className="-ml-2 md:-ml-6">
          {slides.map((slide, i) => {
            return (
              <CarouselItem key={i} className="basis-9/12 pl-2 md:pl-6">
                <div className="xs:rounded-none relative h-[128px] overflow-hidden rounded-lg sm:h-[300px]">
                  <Image
                    src={slide.image}
                    alt={`Slide `}
                    fill
                    className="cursor-pointer"
                    priority
                    quality={100}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="xs:bottom-6 absolute right-0 bottom-2 left-0 z-30 flex w-full justify-center">
        <div className="flex h-fit w-fit items-center gap-1.5 rounded-full bg-white/40 p-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "size-2 cursor-pointer rounded-full transition-all",
                i === current ? "bg-[#575757]" : "bg-white"
              )}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductCarousel;
