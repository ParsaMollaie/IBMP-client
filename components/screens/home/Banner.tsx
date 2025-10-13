import Image from "next/image";

import Container from "@/components/Container";

const Banner = () => {
  return (
    <Container size="sm1">
      <div className="relative h-40 w-full overflow-hidden rounded-lg md:h-60 lg:h-72">
        <Image
          src={`/images/slider1.png`}
          alt="Slide"
          fill
          className="cursor-pointer"
          priority
          quality={100}
        />
      </div>
    </Container>
  );
};

export default Banner;
