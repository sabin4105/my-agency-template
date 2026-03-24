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
  return (
    <Footer
      container
      className="rounded-none border-t border-gray-100 bg-white transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-8 max-w-sm sm:mb-0">
            <span className="mb-4 block text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
              {siteConfig.client.name}
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Delivering world-class restorative and cosmetic dentistry. Experience a frictionless approach to your oral health and aesthetic goals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-left sm:mt-4 sm:grid-cols-2 sm:gap-16">
            <div>
              <FooterTitle title="Practice" className="text-gray-900 dark:text-white" />
              <FooterLinkGroup col>
                <FooterLink href="#gallery">Smile Gallery</FooterLink>
                <FooterLink href="#services">Treatments</FooterLink>
                <FooterLink href="#">Meet the Doctor</FooterLink>
                <FooterLink href="#book-now">Request Appointment</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Contact" className="text-gray-900 dark:text-white" />
              <FooterLinkGroup col>
                <FooterLink href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</FooterLink>
                <FooterLink href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</FooterLink>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block w-40">
                  {siteConfig.contact.address}
                </span>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider className="border-gray-200 dark:border-gray-800" />

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
