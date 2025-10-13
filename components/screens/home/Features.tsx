import Image from "next/image";

import Container from "@/components/Container";

const items = [
  {
    title: "اسکلت و سازه",
    image: "/images/bricks.png",
  },
  {
    title: "مصالح پایه",
    image: "/images/tool.png",
  },
  {
    title: "دکوراسیون داخلی",
    image: "/images/paint.png",
  },
  {
    title: "نما و فضای باز",
    image: "/images/shovel.png",
  },
  {
    title: "تاسیسات برقی",
    image: "/images/helmet.png",
  },
  {
    title: "تاسیسات مکانیکی",
    image: "/images/wrench.png",
  },
  {
    title: "ابزار و ماشین آلات",
    image: "/images/saw.png",
  },
  {
    title: "مهندسین و مجریان",
    image: "/images/cover.png",
  },
];

const Features = () => {
  return (
    <Container size="sm1" className="py-10">
      <div className="xs:grid-cols-2 grid grid-cols-1 justify-center gap-x-5 gap-y-5 sm:grid-cols-3 md:grid-cols-4 md:gap-y-10 lg:gap-x-14">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex h-[120px] flex-col items-center rounded-lg border border-gray-200 py-4 shadow-md shadow-gray-400"
            >
              <Image
                alt="img"
                src={item.image}
                sizes="100vw"
                style={{
                  width: 80,
                  height: 80,
                }}
                width={80}
                height={80}
              />
              <div className="mt-2 text-center text-[11px] font-bold md:text-base">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Features;
