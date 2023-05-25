import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Accordion({ accordionQuestions }) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full rounded-2xl bg-white p-2">
        {accordionQuestions.map((question) => {
          return (
            <Disclosure as="div" className="mb-4" key={question.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-light-blue-itlista bg-opacity-25 px-4 py-2 text-left text-sm font-medium text-dark-blue-itlista focus:outline-none focus-visible:ring focus-visible:ring-dark-blue-itlista focus-visible:ring-opacity-75">
                    <span className="text-lg">{question.heading}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-dark-blue-itlista`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-dark-grey-itlista">
                      {question.body}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
