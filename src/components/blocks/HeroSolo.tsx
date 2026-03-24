import { Button } from "flowbite-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export function HeroSolo() {
  return (
    <section className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        
        {/* Left Column: Copy & CTA */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-semibold text-gray-900 dark:text-white mb-4">
            {siteConfig.hero.badge}
          </span>
          
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {siteConfig.hero.headline}
          </h1>
          
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {siteConfig.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="xl" href={siteConfig.contact.bookingLink} color="dark" className="dark:bg-white dark:text-black">
              {siteConfig.hero.ctaText}
            </Button>
            <Button size="xl" outline color="dark" href="#gallery">
              View Smile Gallery
            </Button>
          </div>
        </div>
        
        {/* Right Column: Hero Image */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
          {/* <Image width={200} height={200}
            src={siteConfig.hero.image} 
            alt={`${siteConfig.client.name} office`} 
            className="object-cover w-full h-full"
          /> */}
          {/* Subtle gradient overlay for luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent mix-blend-multiply"></div>
        </div>
        
      </div>
    </section>
  );
}