import { Dialog, Transition } from "@headlessui/react";
import { useInView } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import CountUp from "react-countup";
import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="py-8 px-4 md:px-0">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            className="transition-colors duration-1000 flex flex-col gap-2 items-center"
            ref={ref}
          >
            <div className="text-9xl font-bold text-dark-blue-itlista">
              +{isInView && <CountUp end={10} start={0} duration={10} />}
            </div>
            <p className="text-2xl text-orange-itlista">سنوات خبرة</p>
          </div>
          <div className="flex flex-col gap-4 col-span-3">
            <h2 className="text-4xl text-orange-itlista">من نحن</h2>
            <p className="text-xl">
              نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا سجل حافل من
              العملاء حول العالم حيث اننا نحن نقدم جودة عالمية بافضل الخبرات
              والمطورين مع تكلفة مناسبة للجميع بداية من طلاب التخرج , مرورا
              باصحاب الشركات والافكار الناشئه , انتهاء بالشركات العملاقه وأنظمة
              الدفع والبنوك
            </p>
          </div>
        </div>
        <div className="relative rounded-lg w-3/4 aspect-video bg-videoBg bg-cover mx-auto my-20">
          <span
            className="absolute flex justify-center items-center h-10 w-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={openModal}
          >
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-10 w-10 bg-white"></span>
          </span>
          <BsFillPlayFill
            onClick={openModal}
            className="cursor-pointer text-3xl text-orange-itlista absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl text-orange-itlista">فى iTLista</h2>
          <p className="text-xl">
            نحن نقدر كل عميل وكل فكرة جديدة ، لأننا نعتقد أنها تجعل العالم أفضل
            ، لدينا أكثر من 200 عميل سعيد ، ونأمل أن تكون انت التالي
          </p>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl aspect-video transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/lh_yDCvMHn0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default AboutUs;
