"use client";

import { useMemo, useState } from "react";
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

function BrandLogo() {
  return (
    <NavbarBrand href="/" className="gap-3">
      <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 bg-clip-text text-xl font-semibold tracking-tight text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] sm:text-2xl">
        {siteConfig.client.shortName}
      </span>
    </NavbarBrand>
  );
}

function MenuToggle({
  open,
  onClick,
  label = "Menu",
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
      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-primary-700 dark:hover:text-primary-400"
    >
      <span>{label}</span>
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
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/85 px-4 py-3 backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/80"
      >
        <div className="mx-auto grid w-full max-w-screen-xl grid-cols-[auto_1fr_auto] items-center gap-6">
          <div className="flex items-center">
            <BrandLogo />
          </div>

          <DesktopLinks links={links} align="center" />

          <div className="flex items-center justify-end gap-2">
            <DarkThemeToggle className="border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800" />
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

  return (
    <>
      <Navbar
        fluid
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/85 px-4 py-3 backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/80"
      >
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4">
          <BrandLogo />

          <div className="flex items-center gap-2">
            <DarkThemeToggle className="border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800" />
            <MenuToggle
              open={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              label="Menu"
            />
          </div>
        </div>
      </Navbar>

      {menuOpen ? (
        <div className="border-b border-gray-200 bg-white/95 px-4 py-5 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-2">
            {links.map((link) => (
              <a
                key={`${link.href}-${link.label}`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-600 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-primary-400"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={siteConfig.contact.bookingLink}
              color="primary"
              pill
              className="mt-3 w-full bg-primary-600 font-semibold text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              {getBookingLabel()}
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

// ==========================================
// NAVBAR SWAP ENGINE (Uncomment to export)
// ==========================================
export function TopNav() { return <TopNavClassic />;}
// export function TopNav() { return <TopNavCentered />; }
// export function TopNav() { return <TopNavMinimal />; }
