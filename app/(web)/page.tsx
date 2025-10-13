import Banner from "@/components/screens/home/Banner";
import BusinessCollaborate from "@/components/screens/home/Business";
import Features from "@/components/screens/home/Features";
import HeroCarousel from "@/components/screens/home/HeroCarousel";
import InfoSection from "@/components/screens/home/InfoSection";
import MostVisitedCarousel from "@/components/screens/home/MostVisited";
import ProductCarousel from "@/components/screens/home/ProductCarousel";
import SelectedCompanies from "@/components/screens/home/SelectedCompanies";

const slidesTest = [
  {
    image: "/images/slider2.png",
  },
  {
    image: "/images/slider2.png",
  },
  {
    image: "/images/slider2.png",
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel slides={slidesTest} />
      <InfoSection />
      <SelectedCompanies />
      <ProductCarousel />
      <Features />
      <ProductCarousel />
      <MostVisitedCarousel />
      <Banner />
      <BusinessCollaborate />
    </>
  );
}
