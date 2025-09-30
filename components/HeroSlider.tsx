'use client';

import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import { Button } from './ui/button';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Image from 'next/image';

type Slide = {
  image: string;
};

type HeroSliderProps = {
  slides: Slide[];
};

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full my-8 overflow-hidden">
      <Carousel
        className="relative w-full"
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem
              key={idx}
              className="relative w-full h-[70vh] md:h-[75vh]"
            >
              <Image
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover object-center w-full h-full cursor-pointer"
                priority={idx === 0}
                quality={100}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Left Navigation Button - Hidden on mobile */}
        <Button
          size="icon"
          className="absolute left-6 bottom-6 z-30 h-12 w-12 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition shadow-lg hidden md:flex"
          onClick={() => api?.scrollPrev()}
        >
          <GrPrevious size={20} className="text-gray-800" />
        </Button>

        {/* Right Navigation Button - Hidden on mobile */}
        <Button
          size="icon"
          className="absolute right-6 bottom-6 z-30 h-12 w-12 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition shadow-lg hidden md:flex"
          onClick={() => api?.scrollNext()}
        >
          <GrNext size={20} className="text-gray-800" />
        </Button>

        {/* Dot Indicators (Bottom Center) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-white/40 p-[6px] rounded-full">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`transition-all cursor-pointer ${
                idx === current
                  ? 'w-3 h-3 bg-[#575757] rounded-full'
                  : 'w-2.5 h-2.5 bg-white rounded-full'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
