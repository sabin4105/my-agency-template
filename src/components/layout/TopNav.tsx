"use client";

import { useEffect, useMemo, useState } from "react";
import { Button, DarkThemeToggle, Navbar, NavbarBrand } from "flowbite-react";
import { siteConfig } from "@/config/site";

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

function BrandLogo({ href = "/" }: { href?: string }) {
  return (
    <NavbarBrand href={href} className="gap-3">
      <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 bg-clip-text text-xl font-semibold tracking-tight text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] sm:text-2xl">
        {siteConfig.client.shortName}
      </span>
    </NavbarBrand>
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
      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-primary-700 dark:hover:text-primary-400"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`}
      >
        <path
          d="M3 5h14M3 10h14M3 15h14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
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
      <Navbar
        fluid
        className="sticky top-0 z-50 bg-white/85 px-4 py-3 backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/80"
      >
        <div className=" grid w-full max-w-screen-xl grid-cols-[auto_1fr_auto] items-center">
          <div className="flex items-center">
            <BrandLogo />
          </div>

          <DesktopLinks links={links} align="center" />

          <div className="flex items-center justify-end gap-2">
            <DarkThemeToggle className=" text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800" />
            <DesktopBookingButton />
            <div className="md:hidden">
              <MenuToggle
                open={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
              />
            </div>
          </div>
        </div>
      </Navbar>

      <MobileMenuPanel
        open={menuOpen}
        links={links}
        onNavigate={() => setMenuOpen(false)}
      />
    </>
  );
}

function TopNavCentered() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = useMemo(() => getNavLinks(), []);
  const splitIndex = Math.ceil(links.length / 2);
  const leftLinks = links.slice(0, splitIndex);
  const rightLinks = links.slice(splitIndex);

  return (
    <>
      <Navbar
        fluid
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/85 px-4 py-3 backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/80"
      >
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr]">
          <div className="hidden md:block">
            <DesktopLinks links={leftLinks} align="right" />
          </div>

          <div className="flex justify-start md:justify-center">
            <BrandLogo />
          </div>

          <div className="flex items-center justify-end gap-2">
            <div className="hidden md:block">
              <DesktopLinks links={rightLinks} align="left" />
            </div>
            <DarkThemeToggle className="border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800" />
            <div className="md:hidden">
              <MenuToggle
                open={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
              />
            </div>
          </div>
        </div>
      </Navbar>

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
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
<>
  {/* NAVBAR ROOT (real glass layer) */}
  <Navbar className="fixed inset-x-0 top-0 z-50 w-full">
    
    {/* GLASS BACKDROP (always full width) */}
    <div className="absolute inset-0 backdrop-blur-xl bg-white/10 dark:bg-transparent" />

    {/* CONTENT WRAPPER */}
    <div
      className={`relative w-full h-fit flex items-center justify-between transition-all duration-500 ${
        isScrolled
          ? "max-w-full mt-3 px-6 py-2 rounded-full bg-white/10 dark:bg-black/10 shadow-lg border border-black/10 dark:border-white/10"
          : "max-w-screen-xl px-8"
      }`}
    >
      {/* LEFT */}
      <div className="flex items-center gap-8">
        <BrandLogo />

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm rounded-full font-medium text-gray-700 dark:text-gray-300 transition-all hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <DarkThemeToggle className="rounded-full hover:bg-black/5 dark:hover:bg-white/10" />

        <Button
          href={siteConfig.contact.bookingLink}
          className={`
            hidden sm:inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 relative overflow-hidden group
            ${
              isScrolled
                ? "bg-primary-600 text-white px-5 py-2 text-sm shadow-md hover:shadow-primary-500/25"
                : "bg-slate-950 text-white dark:bg-white dark:text-slate-950 px-6 py-2.5 text-sm shadow-xl"
            }
            hover:scale-105 active:scale-95 hover:shadow-2xl
          `}
        >
          {/* The "Shiny" Shimmer Effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          
          {/* The Text Content */}
          <span className="relative z-10 flex items-center gap-2">
            {getBookingLabel()}
          </span>

          {/* Subtle Border Glow (Dark Mode specific) */}
          <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-colors" />
        </Button>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <MenuToggle open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>
    </div>
  </Navbar>

  {/* MOBILE MENU (TRUE SHEET STYLE) */}
  <div
    className={`fixed inset-0 z-100 mt-14 transition-all duration-500 md:hidden ${
      menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
  >
    {/* BACKDROP */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-md"
      onClick={() => setMenuOpen(false)}
    />

    {/* SLIDE PANEL */}
    <div
      className={`absolute top-0 left-0 right-0 mx-auto w-full max-w-md transform transition-all duration-500 ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="m-4 rounded-3xl bg-white dark:bg-gray-900 shadow-2xl border border-black/10 dark:border-white/10 p-6">
        
        <div className="flex flex-col gap-6 text-center mt-4">
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
            className="mt-4 rounded-full bg-primary-600 py-3 text-white"
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
// export function TopNav() {
//   return <TopNavClassic />;
// }
// export function TopNav() { return <TopNavCentered />; }
export function TopNav() { return <TopNavMinimal />; }
