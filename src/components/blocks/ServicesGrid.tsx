import type { ComponentProps, JSX } from "react";

type Service = {
  name: string;
  description: string;
  eyebrow: string;
  icon: (props: ComponentProps<"svg">) => JSX.Element;
  className: string;
};

function VeneersIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 8.5C8 6.567 9.567 5 11.5 5h9C22.433 5 24 6.567 24 8.5V12c0 6.627-3.582 12-8 12s-8-5.373-8-12V8.5Z"
        className="stroke-current"
        strokeWidth="1.6"
      />
      <path
        d="M12.5 10.5h7M11.5 14.5h9"
        className="stroke-current"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function RestorationIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect
        x="6"
        y="7"
        width="20"
        height="18"
        rx="6"
        className="stroke-current"
        strokeWidth="1.6"
      />
      <path
        d="M11 16h10M16 11v10"
        className="stroke-current"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ImplantIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 5v8"
        className="stroke-current"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <path
        d="M12.5 13.5h7"
        className="stroke-current"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <path
        d="M12.5 17h7"
        className="stroke-current"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <path
        d="M13 9.5h6v13.25c0 2.347-1.343 4.25-3 4.25s-3-1.903-3-4.25V9.5Z"
        className="stroke-current"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function WhiteningIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 8.5C10 6.567 11.567 5 13.5 5h5C20.433 5 22 6.567 22 8.5v3.75c0 5.937-2.686 10.75-6 10.75s-6-4.813-6-10.75V8.5Z"
        className="stroke-current"
        strokeWidth="1.6"
      />
      <path
        d="m24 7 .9 1.9L27 9.8l-1.9.9-.9 1.8-.9-1.8-1.8-.9 1.8-.9L24 7Z"
        className="fill-current"
      />
    </svg>
  );
}

const services: Service[] = [
  {
    name: "Porcelain Veneers",
    eyebrow: "Smile Design",
    description:
      "Ultra-refined veneer cases planned for symmetry, luminosity, and natural facial harmony.",
    icon: VeneersIcon,
    className: "lg:col-span-2 bg-white dark:bg-gray-900",
  },
  {
    name: "Full Mouth Restoration",
    eyebrow: "Comprehensive Care",
    description:
      "A phased restorative strategy that rebuilds function, comfort, bite balance, and confidence.",
    icon: RestorationIcon,
    className: "bg-white dark:bg-gray-900",
  },
  {
    name: "Dental Implants",
    eyebrow: "Precision Treatment",
    description:
      "Surgically guided implant planning with long-term stability and aesthetics in mind.",
    icon: ImplantIcon,
    className: "bg-white dark:bg-gray-900",
  },
  {
    name: "Professional Whitening",
    eyebrow: "Finishing Touch",
    description:
      "A polished brightening protocol designed to elevate photographs, first impressions, and everyday confidence.",
    icon: WhiteningIcon,
    className: "lg:col-span-2 bg-white dark:bg-gray-900",
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="bg-white py-20 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-800 dark:bg-primary-950/70 dark:text-primary-200">
            Signature Services
          </span>
          <h2 data-aos="fade-up" className="mt-4 font-serif text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
            A curated treatment menu designed for high-trust, high-touch dentistry.
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            Every service is presented with the same priorities: discreet luxury,
            clinical precision, and results that feel as natural as they look.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                className={[
                  "group relative overflow-hidden rounded-[28px] border border-gray-200 p-6 shadow-[0_12px_40px_rgba(15,46,74,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-[0_22px_60px_rgba(15,46,74,0.12)] dark:border-gray-800 dark:shadow-[0_16px_40px_rgba(0,0,0,0.28)] dark:hover:border-primary-500/30 dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.38)] sm:p-8",
                  service.className,
                ].join(" ")}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300/70 to-transparent dark:via-primary-700/60" />
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-700 dark:text-primary-300">
                      {service.eyebrow}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white text-primary-600 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-gray-800 dark:bg-gray-800 dark:text-primary-500">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <h3 className="max-w-xs font-serif text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                  {service.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary-700 dark:text-primary-300">
                  <span>Private consultation</span>
                  <span className="h-1 w-1 rounded-full bg-primary-500" />
                  <span>Tailored plan</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
