import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { siteConfig } from "@/config/site";

export function ContactFormBottleneckFix() {
  return (
    <section
      id="book-now"
      className="border-t border-primary-100 bg-gradient-to-b from-primary-50/60 to-white py-20 transition-colors duration-300 dark:border-primary-950 dark:from-primary-950/20 dark:to-gray-950"
    >
      <div className="mx-auto grid max-w-screen-xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:px-6">
        <div id="services" className="space-y-6">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-900 dark:bg-primary-950/70 dark:text-primary-200">
            Concierge Dental Care
          </span>
          <h2 data-aos="fade-up" className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Request a visit with a team that treats speed, comfort, and clarity as part of the care.
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            Use the form to share your goals and we&apos;ll follow up with scheduling options, treatment fit, and next
            steps.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
                Restorative
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Crowns, implants, bridges, and full-smile rehabilitation.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
                Cosmetic
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Whitening, veneers, and natural-looking smile design planning.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
                Consults
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Second opinions, treatment roadmaps, and financing guidance.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Reach us directly</p>
            <div className="mt-3 space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-500">
                  <path d="M5.5 3.5h2l1 3-1.25 1.25a11 11 0 0 0 5 5L13.5 11l3 1v2a1.5 1.5 0 0 1-1.5 1.5A11.5 11.5 0 0 1 3.5 5A1.5 1.5 0 0 1 5 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                  Phone: <a className="font-medium text-primary-700 underline underline-offset-4 dark:text-primary-300" href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-500">
                  <path d="M3.5 5.5h13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="m4 6 6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                  Email: <a className="font-medium text-primary-700 underline underline-offset-4 dark:text-primary-300" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-500">
                  <path d="M10 17s4.5-4.03 4.5-8a4.5 4.5 0 1 0-9 0c0 3.97 4.5 8 4.5 8Z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="9" r="1.5" fill="currentColor" />
                </svg>
                <span>{siteConfig.contact.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20 sm:p-8">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className="mb-2 block">
                  Full name
                </Label>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="Jordan Smith"
                  required
                  sizing="lg"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2 block">
                  Phone number
                </Label>
                <TextInput
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  required
                  sizing="lg"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="mb-2 block">
                Email address
              </Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                sizing="lg"
              />
            </div>

            <div>
              <Label htmlFor="message" className="mb-2 block">
                What would you like help with?
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about the treatment you are considering, any urgency, and your preferred appointment timing."
                required
              />
            </div>

            <Button
              data-aos="fade-up"
              data-aos-delay="200"
              type="submit"
              color="primary"
              size="xl"
              className="w-full justify-center bg-primary-600 font-semibold text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              Request Appointment
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export { ContactFormBottleneckFix as ContactForm };
