import Image from "next/image";

import Container from "@/components/Container";

const items = [
  {
    height: 56,
    width: 152,
    image: "/images/most3.png",
  },
  {
    height: 56,
    width: 152,
    image: "/images/most2.png",
  },
  {
    height: 56,
    width: 56,
    image: "/images/most1.png",
  },
  {
    height: 56,
    width: 152,
    image: "/images/most3.png",
  },
  {
    height: 56,
    width: 152,
    image: "/images/most2.png",
  },
  {
    height: 56,
    width: 56,
    image: "/images/most1.png",
  },
  {
    height: 56,
    width: 152,
    image: "/images/most3.png",
  },
  {
    height: 56,
    width: 152,
    image: "/images/most2.png",
  },
];

const BusinessCollaborate = () => {
  return (
    <Container size="sm1" className="py-10">
      <h2 className="mb-3 text-lg font-bold"> همکاران تجاری </h2>
      <div className="flex items-center justify-center gap-5 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => {
          return (
            <div key={index} className="relative">
              <Image
                className="m-auto"
                src={item.image}
                alt="img"
                sizes="100vw"
                style={{
                  width: "auto",
                  minWidth: item.width,
                  height: item.height,
                }}
                width={item.width}
                height={item.height}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default BusinessCollaborate;
