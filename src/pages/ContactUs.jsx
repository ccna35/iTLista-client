import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_atojmcs",
        "template_kd8b2h6",
        form.current,
        "Uzj8ArR_zCJwam5PN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <main className="py-8 px-4 md:px-0 h-screen grid place-items-center">
      <div className="container m-auto">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl text-dark-blue-itlista text-center">
            تواصل معنا
          </h2>
          <h3 className="text-3xl text-orange-itlista text-center">
            الخطوة الأولى دائما ما تكون الأصعب
          </h3>
          <p className="text-xl text-dark-grey-itlista text-center">
            لا تتردد.. اترك لنا استفسارك أو طلبك واجعله بادرة مشروع عظيم! تذكر
            أننا متواجدون لخدمتكم وتحقيق أهدافكم.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full grid grid-cols-2 py-8 gap-4 max-w-lg mx-auto"
        >
          <div>
            <input
              className="border focus:border-orange-itlista transition-colors duration-300 rounded-md py-2 px-4 focus:outline-0 w-full"
              type="text"
              name="user_name"
              placeholder="اسمك"
            />
          </div>
          <div>
            <input
              className="border focus:border-orange-itlista transition-colors duration-300 rounded-md py-2 px-4 focus:outline-0 w-full"
              type="email"
              name="user_email"
              placeholder="بريدك الالكتروني"
            />
          </div>
          <div className="col-span-2">
            <textarea
              name="message"
              className="border focus:border-orange-itlista transition-colors duration-300 rounded-md py-2 px-4 focus:outline-0 w-full"
              placeholder="اكتب رسالتك هنا..."
            />
          </div>
          <input
            className="py-2 px-4 rounded-md bg-dark-blue-itlista text-white transition-colors duration-300 hover:bg-medium-blue-itlista cursor-pointer"
            type="submit"
            value="ارسال"
          />
        </form>
      </div>
    </main>
  );
};

export default ContactUs;
