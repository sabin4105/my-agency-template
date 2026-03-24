import { siteConfig } from "@/config/site";

export function TrustStrip() {
  return (
    <section
      aria-label="Professional affiliations"
      data-aos="fade-in"
      data-aos-delay="300"
      className="border-y border-primary-100 bg-primary-50/50 py-8 transition-colors duration-300 dark:border-primary-950 dark:bg-primary-950/20"
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 sm:gap-x-12 lg:gap-x-16 lg:px-6">
        {siteConfig.trustBadges.map((badge) => (
          <span
            key={badge.name}
            className="text-center font-serif text-sm font-semibold uppercase tracking-[0.28em] text-primary-900/55 grayscale opacity-80 transition-colors duration-300 dark:text-primary-100/45 sm:text-base"
          >
            {badge.name}
          </span>
        ))}
      </div>
    </section>
  );
}
