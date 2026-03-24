type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I smile in photos now without thinking twice. The result feels elegant, natural, and completely me.",
    name: "Sophia M.",
    detail: "Porcelain Veneers",
  },
  {
    quote:
      "After years of hiding my teeth, I finally feel like my confidence matches the way I want to show up in the world.",
    name: "Daniel R.",
    detail: "Full Mouth Restoration",
  },
  {
    quote:
      "The entire process felt calm, thoughtful, and deeply professional. My new smile changed more than my reflection.",
    name: "Alyssa K.",
    detail: "Implants + Whitening",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-1.5 text-primary-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 0 0-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 0 0 .95-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialWall() {
  return (
    <section className="bg-gray-50/80 py-20 transition-colors duration-300 dark:bg-gray-950">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-800 dark:bg-primary-950/70 dark:text-primary-200">
            Patient Trust
          </span>
          <h2 data-aos="fade-up" className="mt-4 font-serif text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
            Real stories from patients who wanted their smile to feel like their best self.
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            Calm experience, meticulous planning, and transformations that feel personal rather than overdone.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              className="relative flex h-full flex-col rounded-[26px] border border-primary-100 bg-white p-6 shadow-[0_12px_40px_rgba(15,46,74,0.06)] transition-colors duration-300 dark:border-primary-950 dark:bg-gray-900 dark:shadow-[0_16px_40px_rgba(0,0,0,0.28)] sm:p-8"
            >
              <div className="absolute right-6 top-6 text-primary-100 dark:text-primary-950">
                <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true" className="h-10 w-10">
                  <path d="M15.64 10C9.99 13.4 7 18.17 7 24.34c0 3.67 2.42 5.66 5.25 5.66 2.74 0 4.75-2.03 4.75-4.76 0-2.71-1.83-4.46-4.17-4.46-.39 0-.67.02-1.08.11.72-3.3 3.17-6.32 6.36-8.29L15.64 10Zm14 0C23.99 13.4 21 18.17 21 24.34c0 3.67 2.42 5.66 5.25 5.66 2.74 0 4.75-2.03 4.75-4.76 0-2.71-1.83-4.46-4.17-4.46-.39 0-.67.02-1.08.11.72-3.3 3.17-6.32 6.36-8.29L29.64 10Z" />
                </svg>
              </div>

              <StarRow />

              <blockquote className="mt-6 flex-grow text-lg leading-8 text-gray-800 dark:text-gray-200">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-8 border-t border-primary-100 pt-5 dark:border-primary-950">
                <p className="font-semibold tracking-tight text-gray-950 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
                  {testimonial.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
