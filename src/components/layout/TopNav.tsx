"use client";

import { useEffect, useMemo, useState } from "react";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

function getNavLinks(): NavLink[] {
  const { archetype } = siteConfig.client;

  return [
    {
      href: "#gallery",
      label: archetype === "agency" ? "Portfolio" : "Smile Gallery",
    },
    {
      href: "#services",
      label: archetype === "spa" ? "Treatments" : "Services",
    },
    {
      href: siteConfig.contact.bookingLink,
      label: archetype === "agency" ? "Contact" : "Consultation",
    },
  ];
}

function getBookingLabel() {
  return siteConfig.client.archetype === "agency"
    ? "Book Strategy Call"
    : "Book Consultation";
}

import Image from "next/image";

function BrandLogo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-3">
      {/* Next.js Optimized Image */}
      {siteConfig.client.brandlogo && (
        <Image
          src={siteConfig.client.brandlogo}
          alt={`${siteConfig.client.shortName || "Brand"} Logo`}
          width={100}
          height={32}
          className="h-8 w-auto object-contain dark:brightness-110"
          priority // Add this if the logo is visible immediately on page load
        />
      )}

      {/* The 2-letter text logo */}
      <span className="from-primary-500 via-primary-400 to-primary-600 bg-gradient-to-r bg-clip-text text-xl font-semibold tracking-tight text-transparent uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
        {siteConfig.client.shortName?.slice(0, 2)}
      </span>
    </Link>
  );
}

function MenuToggle({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-label="Toggle navigation"
      className="hover:border-primary-300 hover:text-primary-600 dark:hover:border-primary-700 dark:hover:text-primary-400 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors dark:border-gray-700 dark:text-gray-200"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4"
      >
        {/* Top bar → becomes top-left to bottom-right diagonal */}
        <path
          d={open ? "M4 4 L16 16" : "M3 5h14"}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
          className="transition-all duration-300"
        />
        {/* Middle bar → fades out when open */}
        <path
          d="M3 10h14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
          className={`transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
        />
        {/* Bottom bar → becomes top-right to bottom-left diagonal */}
        <path
          d={open ? "M4 16 L16 4" : "M3 15h14"}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
          className="transition-all duration-300"
        />
      </svg>
    </button>
  );
}

function DesktopLinks({
  links,
  align = "center",
}: {
  links: NavLink[];
  align?: "left" | "center" | "right";
}) {
  const justifyClass =
    align === "left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  return (
    <nav className={`hidden items-center gap-8 md:flex ${justifyClass}`}>
      {links.map((link) => (
        <a
          key={`${link.href}-${link.label}`}
          href={link.href}
          className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function MobileMenuPanel({
  open,
  links,
  includeBookingButton = true,
  onNavigate,
}: {
  open: boolean;
  links: NavLink[];
  includeBookingButton?: boolean;
  onNavigate?: () => void;
}) {
  if (!open) return null;

  return (
    <div className="border-t border-gray-200 bg-white/95 px-4 py-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95 md:hidden">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-2">
        {links.map((link) => (
          <a
            key={`${link.href}-${link.label}`}
            href={link.href}
            onClick={onNavigate}
            className="rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-600 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-primary-400"
          >
            {link.label}
          </a>
        ))}
        {includeBookingButton ? (
          <Button
            href={siteConfig.contact.bookingLink}
            color="primary"
            pill
            className="mt-3 w-full bg-primary-600 font-semibold text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            {getBookingLabel()}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function DesktopBookingButton() {
  return (
    <Button
      href={siteConfig.contact.bookingLink}
      color="primary"
      pill
      className="hidden bg-primary-600 font-semibold text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700 sm:inline-flex"
    >
      {getBookingLabel()}
    </Button>
  );
}

function TopNavClassic() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = useMemo(() => getNavLinks(), []);

  return (
    <>
      {/* NATIVE HEADER ROOT */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300 dark:border-gray-800/80 dark:bg-black/80">
        {/* INNER CONTAINER */}
        {/* Added mx-auto to ensure the grid stays centered on ultrawide monitors */}
        <nav className="mx-auto grid w-full max-w-screen-xl grid-cols-[auto_1fr_auto] items-center px-4 py-3 dark:bg-stone-950">
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <BrandLogo />
          </div>

          {/* CENTER: Desktop Links */}
          <DesktopLinks links={links} align="center" />

          {/* RIGHT: Toggles & Action Button */}
          <div className="flex items-center justify-end gap-2">
            <DarkThemeToggle className="text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800" />

            <DesktopBookingButton />

            {/* MOBILE MENU BUTTON (Untouched) */}
            <div className="md:hidden">
              <MenuToggle
                open={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
              />
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU PANEL (Untouched) */}
      <MobileMenuPanel
        open={menuOpen}
        links={links}
        onNavigate={() => setMenuOpen(false)}
      />
    </>
  );
}
function TopNavMinimal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = useMemo(() => getNavLinks(), []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* CUSTOM ROOT WRAPPER */}
      {/* The header creates a full-width track, while flex and justify-center keep the inner nav perfectly centered */}
      <header className="fixed inset-x-0 top-0 z-50 flex w-full justify-center transition-all duration-500">
        {/* DYNAMIC INNER SHELL */}
        <nav
          className={`relative flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "mt-2 w-[95%] max-w-5xl rounded-full border border-gray-200/50 bg-white/60 px-6 py-2 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/50"
              : "mt-0 w-full max-w-full border-transparent bg-transparent px-6 py-4 md:px-12"
          }`}
        >
          {/* LEFT: Logo & Links */}
          <div className="flex items-center gap-10">
            <BrandLogo />
          </div>

          {/* DESKTOP NAV (Magazine Style Typography) */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary-600 dark:hover:text-primary-400 text-xs font-semibold tracking-[0.15em] text-gray-800 uppercase transition-colors dark:text-gray-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT: Toggles & Action Button */}
          <div className="flex items-center gap-3">
            <DarkThemeToggle className="rounded-full hover:bg-black/5 dark:hover:bg-white/10" />

            {/* UNTOUCHED DESKTOP BUTTON */}
            <Button
              href={siteConfig.contact.bookingLink}
              className={`group relative hidden items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 sm:inline-flex ${
                isScrolled
                  ? "bg-primary-600 hover:shadow-primary-500/25 px-5 py-2 text-sm text-white shadow-md"
                  : "bg-primary-600 dark:bg-primary-400 px-6 py-2.5 text-sm text-white shadow-xl dark:text-white"
              } dark:shadow-primary-400/30 dark:hover:shadow-primary-400/50 hover:scale-105 hover:shadow-2xl active:scale-95`}
            >
              <span
                className="pointer-events-none absolute inset-0 hidden dark:block"
                aria-hidden="true"
              >
                <span className="absolute inset-x-0 top-0 h-[45%] rounded-t-full bg-gradient-to-b from-white/30 to-transparent" />
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </span>
              <span className="relative z-10 flex items-center justify-center">
                {getBookingLabel()}
              </span>
            </Button>

            {/* MOBILE MENU BUTTON (Untouched) */}
            <div className="md:hidden">
              <MenuToggle
                open={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU (TRUE SHEET STYLE - UNTOUCHED) */}
      <div
        className={`fixed inset-0 z-[100] mt-14 transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 left-0 mx-auto w-full max-w-md transform transition-all duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-gray-900">
            <div className="mt-4 flex flex-col gap-6 text-center">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-semibold text-gray-900 dark:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={siteConfig.contact.bookingLink}
                className="bg-primary-600 mt-4 rounded-full py-3 text-white"
              >
                {getBookingLabel()}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ==========================================
// NAVBAR SWAP ENGINE (Uncomment to export)
// ==========================================
// export function TopNav() {return <TopNavClassic />; }
export function TopNav() { return <TopNavMinimal />; }
