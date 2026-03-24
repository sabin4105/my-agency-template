import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { siteConfig } from "@/config/site";

export function ContactFormBottleneckFix() {
  return (
    <section
      id="book-now"
      className="border-t border-gray-200 bg-gray-50 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-screen-xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:px-6">
        <div id="services" className="space-y-6">
          <span className="inline-flex rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100">
            Concierge Dental Care
          </span>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Request a visit with a team that treats speed, comfort, and clarity as part of the care.
          </h2>
          <p className="max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            Use the form to share your goals and we&apos;ll follow up with scheduling options, treatment fit, and next
            steps.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Restorative
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Crowns, implants, bridges, and full-smile rehabilitation.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Cosmetic
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Whitening, veneers, and natural-looking smile design planning.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Consults
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Second opinions, treatment roadmaps, and financing guidance.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Reach us directly</p>
            <div className="mt-3 space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>
                Phone: <a className="font-medium underline underline-offset-4" href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
              </p>
              <p>
                Email: <a className="font-medium underline underline-offset-4" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </p>
              <p>{siteConfig.contact.address}</p>
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
                <TextInput id="name" name="name" placeholder="Jordan Smith" required sizing="lg" />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2 block">
                  Phone number
                </Label>
                <TextInput id="phone" name="phone" type="tel" placeholder="(123) 456-7890" required sizing="lg" />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="mb-2 block">
                Email address
              </Label>
              <TextInput id="email" name="email" type="email" placeholder="you@example.com" required sizing="lg" />
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

            <Button type="submit" color="dark" size="xl" className="w-full justify-center font-semibold dark:bg-white dark:text-black">
              Request Appointment
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export { ContactFormBottleneckFix as ContactForm };
