"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";

import { cn } from "@/lib/utils";
import Container from "../../Container";
import { Button } from "../../ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../../ui/carousel";

type Slide = {
  image: string;
};

type HeroSliderProps = {
  slides: Slide[];
};

const HeroCarousel: React.FC<HeroSliderProps> = ({ slides }) => {
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
    <div className="relative mt-[18px] w-full overflow-hidden md:mt-[30px]">
      <Carousel
        opts={{
          direction: "rtl",
          loop: true,
          align: "center",
        }}
        setApi={setApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {slides.map((slide, i) => {
            return (
              <CarouselItem key={i} className="xs:basis-1/1 basis-11/12 pl-2 md:pl-4">
                <div className="xs:rounded-none s relative h-[264px] overflow-hidden rounded-lg sm:h-[300px] md:h-[384px]">
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

      <Container className="xs:bottom-6 absolute right-0 bottom-2 left-0 z-30 flex w-full items-center justify-center md:justify-between">
        <Button
          size="icon"
          className="hidden size-12 rounded-xl bg-white/70 hover:bg-white/90 md:block"
          onClick={() => api?.scrollPrev()}
        >
          <GrNext size={20} className="m-auto text-gray-800" />
        </Button>

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

        <Button
          size="icon"
          className="hidden size-12 rounded-xl bg-white/70 hover:bg-white/90 md:block"
          onClick={() => api?.scrollNext()}
        >
          <GrPrevious size={20} className="m-auto text-gray-800" />
        </Button>
      </Container>
    </div>
  );
};

export default HeroCarousel;
