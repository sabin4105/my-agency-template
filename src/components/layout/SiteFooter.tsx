// src/components/layout/SiteFooter.tsx
"use client";

import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const footerColumns = Object.values(siteConfig.footerNav).filter(
    (category) => category?.links && category.links.length > 0,
  );

  return (
    <Footer
      container
      className="rounded-none border-t border-primary-100 bg-white transition-colors duration-300 dark:border-primary-950 dark:bg-gray-900"
    >
      <div className="mx-auto w-full">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start lg:justify-between">
          <div className="mb-8 max-w-sm sm:mb-0">
            <span className="mb-4 block text-2xl font-bold tracking-tighter text-primary-900 dark:text-primary-100">
              {siteConfig.client.name}
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Delivering world-class restorative and cosmetic dentistry. Experience a frictionless approach to your oral health and aesthetic goals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-left sm:grid-cols-3 lg:gap-12">
            {footerColumns.map((category) => (
              <div key={category.title}>
                <FooterTitle title={category.title} className="text-base font-semibold text-gray-900 dark:text-white" />
                <FooterLinkGroup col>
                  {category.links?.map((link) => (
                    <FooterLink
                      key={`${category.title}-${link.name}`}
                      className="text-sm text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-300"
                      href={link.href}
                    >
                      {link.name}
                    </FooterLink>
                  ))}
                </FooterLinkGroup>
              </div>
            ))}

            <div className="overflow-hidden">
              <FooterTitle title="Contact" className="text-base font-semibold text-gray-900 dark:text-white" />
              <FooterLinkGroup col>
                <FooterLink className="text-sm text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-300" href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</FooterLink>
                <FooterLink className="text-sm text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-300" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</FooterLink>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block w-40">
                  {siteConfig.contact.address}
                </span>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider className="border-primary-100 dark:border-primary-950" />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by={siteConfig.client.name} year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-sm text-gray-500 dark:text-gray-400">
            Powered by modern web architecture.
          </div>
        </div>
      </div>
    </Footer>
  );
}
