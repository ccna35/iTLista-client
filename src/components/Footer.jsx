import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-dark-grey-itlista border-t">
      <div className="container m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 px-4 md:px-0">
          <div className="flex flex-col gap-4 justify-start">
            <img
              src="./Logo/Vector Smart Object.png"
              className="w-40 grayscale"
              alt=""
            />
            <p>
              iTLista شركة تسويق الكتروني وخدمات في مجال تكنولوجيا المعلومات
              والانترنت جاءت لتكون إضافة إبداعية في العالم الرقمي ونمت بنجاح
              عملائها ورضاهم.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-right leading-none">أهم الروابط</h2>
            <div className="flex flex-col gap-2">
              <Link
                to="#"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                من نحن
              </Link>
              <Link
                to="#"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                خدماتنا
              </Link>
              <Link
                to="#"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                صفحة الهبوط
              </Link>
              <Link
                to="#"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                بروفايل الشركة
              </Link>
              <Link
                to="#"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                انضم الينا
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-right leading-none">السعودية</h2>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                <FaLocationArrow className="inline ml-2" />
                <span>
                  السعودية – الرياض – التخصصي – بنده العزيزة – المكتب رقم 9
                </span>
              </a>
              <a
                href="https://wa.me/966532594583"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                <FaPhone className="inline ml-2" />
                <span>966532594583</span>
              </a>
              <a
                href="mailto: info@afkars.net"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                <FaMailBulk className="inline ml-2" />
                <span>info@afkars.net</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-right leading-none">الإمارات</h2>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                <FaLocationArrow className="inline ml-2" />
                <span>
                  الإمارات العربية المتحدة – دبي برج بوليفارد بلازا 2 – الطابق
                  22
                </span>
              </a>
              <a
                href="https://wa.me/966532594583"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                <FaPhone className="inline ml-2" />
                <span>966532594583</span>
              </a>
              <a
                href="mailto: info@afkars.net"
                className="transition-colors duration-500 hover:text-orange-itlista"
              >
                <FaMailBulk className="inline ml-2" />
                <span>info@afkars.net</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 px-4 md:px-0 bg-dark-grey-itlista text-white">
        <div className="container mx-auto flex flex-wrap gap-4 justify-between items-center">
          <p>جميع الحقوق محفوظة ©2023 لموقعنا iTLista</p>
          <img
            src="./payment_icon_collection_222-1200x123.png"
            className="max-w-sm"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
