const logos = ["ADA", "Kois Center", "AGD", "Seattle Study Club"];

export function TrustStrip() {
  return (
    <section
      aria-label="Professional affiliations"
      className="border-y border-gray-200/70 bg-gray-50/80 py-8 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/80"
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 sm:gap-x-12 lg:gap-x-16 lg:px-6">
        {logos.map((logo) => (
          <span
            key={logo}
            className="text-center font-serif text-sm font-semibold uppercase tracking-[0.28em] text-gray-500 grayscale opacity-80 transition-colors duration-300 dark:text-gray-400 sm:text-base"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
