"use client";

import {
  Button,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#gallery", label: "Smile Gallery" },
  { href: "#services", label: "Services" },
  { href: "#book-now", label: "Contact" },
];

export function TopNav() {
  return (
    <Navbar
      fluid
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/85 px-4 py-3 backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/80"
    >
      <NavbarBrand href="/" className="gap-3">
        <span className="text-xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-2xl">
          {siteConfig.client.shortName}
        </span>
      </NavbarBrand>

      <div className="flex items-center gap-2 md:order-2">
        <DarkThemeToggle className="border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800" />
        <Button
          href={siteConfig.contact.bookingLink}
          color="dark"
          pill
          className="hidden font-semibold sm:inline-flex dark:bg-white dark:text-black"
        >
          Book Now
        </Button>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        {navLinks.map(({ href, label }) => (
          <NavbarLink key={href} href={href} active={href === "/"}>
            {label}
          </NavbarLink>
        ))}
        <Button
          href={siteConfig.contact.bookingLink}
          color="dark"
          pill
          className="mt-3 w-full font-semibold sm:hidden"
        >
          Book Now
        </Button>
      </NavbarCollapse>
    </Navbar>
  );
}
