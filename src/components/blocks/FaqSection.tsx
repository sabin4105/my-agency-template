import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { siteConfig } from "@/config/site";

const accordionTitleTheme = {
  base: "flex w-full items-center justify-between p-5 text-left text-base font-medium text-gray-700 first:rounded-t-lg last:rounded-b-lg dark:text-white",
  flush: {
    off: "hover:bg-gray-50 focus:ring-2 focus:ring-primary-200 dark:hover:bg-gray-800 dark:focus:ring-primary-900",
    on: "bg-transparent dark:bg-transparent",
  },
  heading: "",
  open: {
    off: "",
    on: "bg-gray-50 text-primary-600 dark:bg-gray-800 dark:text-primary-500",
  },
  arrow: {
    base: "h-5 w-5 shrink-0 transition-transform",
    open: {
      off: "",
      on: "rotate-180 text-primary-600 dark:text-primary-500",
    },
  },
} as const;

export function FaqSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2
            data-aos="fade-up"
            className="font-serif text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Common Questions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-4 text-base text-gray-600 dark:text-gray-300"
          >
            Clear answers for the questions patients ask before committing to premium restorative and cosmetic care.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mt-10">
          <Accordion
            collapseAll
            className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800"
          >
            {siteConfig.faqs.map((faq) => (
              <AccordionPanel key={faq.question}>
                <AccordionTitle
                  theme={accordionTitleTheme}
                  className="focus:text-primary-600 dark:focus:text-primary-500"
                >
                  {faq.question}
                </AccordionTitle>
                <AccordionContent className="bg-white text-sm leading-7 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionPanel>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
