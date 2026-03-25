import { Button } from "flowbite-react";
import { siteConfig } from "@/config/site";

export function HeroSolo() {
  const { badge, headline, subheadline, primaryCtaText, primaryCtaLink, secondaryCtaText, secondaryCtaLink } =
    siteConfig.hero;

  return (
    <section className="relative overflow-hidden bg-white transition-colors duration-300 dark:bg-gray-950">
      {/* AMBIENT BACKGROUND GLOWS */}
      {/* Top Left Glow */}
      <div className="bg-primary-400/15 dark:bg-primary-900/30 pointer-events-none absolute -top-40 -left-40 -z-10 h-[40rem] w-[40rem] rounded-full blur-[120px] sm:top-0 sm:-left-20" />
      {/* Bottom Right Glow */}
      <div className="bg-primary-300/15 dark:bg-primary-800/20 pointer-events-none absolute -right-40 -bottom-40 -z-10 h-[40rem] w-[40rem] rounded-full blur-[100px] sm:-right-20 sm:bottom-0" />

      <div className="mx-auto grid max-w-screen-xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        {/* TEXT & CTA CONTENT */}
        <div className="flex flex-col items-center justify-center text-center lg:col-span-7 lg:items-start lg:text-left">
          <span className="bg-primary-50 text-primary-700 ring-primary-600/20 dark:bg-primary-500/10 dark:text-primary-300 dark:ring-primary-500/20 mb-6 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold ring-1 ring-inset">
            {badge}
          </span>

          <h1
            data-aos="fade-up"
            className="mb-6 max-w-3xl font-serif text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1] dark:text-white"
          >
            {headline}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-8 max-w-2xl text-lg font-light text-gray-600 sm:text-xl lg:text-2xl dark:text-gray-300"
          >
            {subheadline}
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
            <Button
              data-aos="fade-up"
              data-aos-delay="200"
              size="xl"
              href={primaryCtaLink}
              color="primary"
              className="bg-primary-600 shadow-primary-500/25 hover:bg-primary-700 hover:shadow-primary-500/40 dark:bg-primary-600 dark:hover:bg-primary-500 w-full text-white shadow-lg transition-all hover:-translate-y-1 sm:w-auto"
            >
              {primaryCtaText}
            </Button>
            <Button
              data-aos="fade-up"
              data-aos-delay="300"
              size="xl"
              outline
              color="primary"
              href={secondaryCtaLink}
              className="border-primary-600 text-primary-600 hover:bg-primary-600 dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-500 w-full border-2 transition-all hover:-translate-y-1 hover:text-white sm:w-auto dark:hover:text-white"
            >
              {secondaryCtaText}
            </Button>
          </div>
        </div>

        {/* HERO IMAGE CONTENT (Now Fully Responsive) */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative mx-auto mt-8 flex w-full max-w-2xl lg:col-span-5 lg:mt-0 lg:max-w-none"
        >
          {/* Specific tight glow behind the image frame to make it pop */}
          <div className="from-primary-400/40 to-primary-600/10 dark:from-primary-600/30 dark:to-primary-900/20 absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr blur-2xl" />

          {/* The Image Wrapper */}
          <div className="relative h-[350px] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5 sm:h-[450px] lg:h-[600px] dark:ring-white/10">
            {/* <Image 
          width={800} 
          height={800}
          src={siteConfig.hero.image} 
          alt={`${siteConfig.client.name} office`} 
          className="h-full w-full object-cover object-center"
          priority
        /> */}

            {/* Professional gradient overlay to enhance depth and ensure text/overlay readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/0 to-transparent mix-blend-multiply dark:from-black/60 dark:via-black/10"></div>
          </div>
        </div>
      </div>
    </section>  
  );
}
