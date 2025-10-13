import Link from "next/link";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import Container from "@/components/Container";

const socialItems = [
  { href: "#", label: "telegram", icon: <FaTelegramPlane size={24} /> },
  { href: "#", label: "instagram", icon: <FaInstagram size={24} /> },
  { href: "#", label: "whatsapp", icon: <IoLogoWhatsapp size={24} /> },
];

const navColumns: { title?: string; items: { href: string; label: string }[] }[] = [
  {
    items: [
      { href: "#", label: "خانه" },
      { href: "#", label: "مقالات" },
      { href: "#", label: "ثبت رایگان کالا و خدمات" },
    ],
  },
  {
    items: [
      { href: "#", label: "تبلیغات" },
      { href: "#", label: "تماس با ما" },
      { href: "#", label: "درباره ما" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary-600 text-secondary-foreground mt-10">
        <Container className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:gap-44">
            <div className="">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  {socialItems.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="inline-flex text-white hover:text-white/20"
                    >
                      {s.icon}
                    </Link>
                  ))}
                </div>
                <span>ما را در شبکه‌های اجتماعی دنبال کنید!</span>
                <div className="w-full flex-1 border-b border-b-white/20 py-2" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {navColumns.map((col, idx) => (
                  <ul key={idx} className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-white transition hover:text-white/60"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-6 border-y border-y-white/20 py-8 md:border-none">
              <div className="flex gap-3">
                <span className="min-w-12">آدرس:</span>
                <p className="leading-7">
                  تهران، بزرگراه ستاری (جنوب)، بلوار فردوس غرب، نرسیده به چهارراه شقایق، ساختمان
                  پرنیا (پلاک ۴۵۳)، بلوک B، ورودی ۲، طبقه ۲، واحد ۳۳
                </p>
              </div>
              <div className="flex justify-between gap-3">
                <span className="min-w-12">کد پستی:</span>
                <span>۱۴۸۳۷۶۳۹۹۶</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="min-w-12">تلفن:</span>
                <span>۵ الی ۴۴۱۵۲۹۴۰-۰۲۱</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="min-w-12">موبایل:</span>
                <span>۰۹۱۲۲۲۲۲۲۲۲</span>
              </div>
            </div>
          </div>
          <p className="pt-12 text-center text-xs text-white/70">
            کلیه حقوق این وب‌سایت متعلق به ibmp.ir است.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
