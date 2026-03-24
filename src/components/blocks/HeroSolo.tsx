import { Button } from "flowbite-react";
import { siteConfig } from "@/config/site";

export function HeroSolo() {
  const { badge, headline, subheadline, primaryCtaText, primaryCtaLink, secondaryCtaText, secondaryCtaLink } =
    siteConfig.hero;

  return (
    <section className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100 dark:bg-primary-900/30 dark:text-primary-400 dark:ring-primary-900/60">
            {badge}
          </span>

          <h1 data-aos="fade-up" className="mb-4 max-w-2xl font-serif text-4xl font-extrabold leading-none tracking-tight text-gray-950 md:text-5xl dark:text-white xl:text-6xl">
            {headline}
          </h1>

          <p data-aos="fade-up" data-aos-delay="100" className="mb-6 max-w-2xl font-light text-gray-600 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-300">
            {subheadline}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              data-aos="fade-up"
              data-aos-delay="200"
              size="xl"
              href={primaryCtaLink}
              color="primary"
              className="bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              {primaryCtaText}
            </Button>
            <Button
              data-aos="fade-up"
              data-aos-delay="200"
              size="xl"
              outline
              color="primary"
              href={secondaryCtaLink}
              className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500 dark:border-primary-500 dark:text-primary-500 dark:hover:bg-primary-600 dark:hover:text-white"
            >
              {secondaryCtaText}
            </Button>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000" className="hidden lg:mt-0 lg:col-span-5 lg:flex relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
          {/* <Image width={200} height={200}
            src={siteConfig.hero.image} 
            alt={`${siteConfig.client.name} office`} 
            className="object-cover w-full h-full"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/25 via-primary-800/10 to-transparent mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
}
