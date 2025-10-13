import Image from "next/image";

import Container from "@/components/Container";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const SelectedCompanies = () => {
  return (
    <Container size="sm1" className="pb-10 md:pb-11">
      <h2 className="mb-3 text-sm font-bold md:mb-4 md:text-base"> شرکت‌‌های منتخب </h2>

      <Carousel
        opts={{
          direction: "rtl",
          align: "center",
        }}
      >
        <CarouselContent className="-ml-12 md:-ml-20">
          {Array.from({ length: 9 }).map((_, i) => {
            return (
              <CarouselItem
                key={i}
                className="xs:basis-[38%] basis-[65%] px-2 pb-2 pl-2 sm:basis-1/3 sm:pl-10 md:basis-[27%] md:pl-3 lg:basis-[21%]"
              >
                <div className="w-auto overflow-hidden rounded-xl border border-gray-200 p-2 text-center shadow-md shadow-gray-400 select-none md:w-[204px]">
                  <div className="relative h-[120px] w-auto overflow-hidden rounded-lg bg-gray-200 p-6 md:h-[188px] md:w-[188px]">
                    <Image
                      src={`/svgs/logo.svg`}
                      alt={`Slide `}
                      fill
                      className="cursor-pointer"
                      priority
                      quality={100}
                    />
                  </div>
                  <div className="pt-2 pb-3 text-gray-400">اسم بیزینس همکار اینجا</div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </Container>
  );
};

export default SelectedCompanies;
