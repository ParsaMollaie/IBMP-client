import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const InfoSection = () => {
  return (
    <Container className="py-10 md:py-11">
      <div className="mx-auto grid max-w-3xl gap-6 text-center">
        <h2 className="text-base font-bold md:text-lg">بانک اطلاعات مصالح و مجریان ساختمانی</h2>

        <p className="text-sm md:text-base">
          شما می‌توانید با ثبت اطلاعات خود، مشتریان و همکاران را از توانمندی‌ها، فعالیت‌ها و
          محصولاتتان آگاه کنید
        </p>

        <Button className="mx-auto w-fit">ثبت رایگان کالا و خدمات</Button>
      </div>
    </Container>
  );
};

export default InfoSection;
