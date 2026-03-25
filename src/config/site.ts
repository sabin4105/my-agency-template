// src/config/site.ts

type FooterNavLink = {
  name: string;
  href: string;
};

type FooterNavCategory = {
  title: string;
  links?: FooterNavLink[];
};

type FaqItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  client: {
    name: "Jim Rutledge DDS",
    shortName: "Rutledge Dental",
    archetype: "solo", // 'solo' | 'agency' | 'spa'
    brandlogo: ""
  },
  theme: {
    primary: "blue",
  },
  contact: {
    phone: "(123) 456-7890",
    address: "123 Premium Dental Way, Suite 100",
    email: "hello@rutledgedds.com",
    bookingLink: "#book-now",
  },
  hero: {
    badge: "Private Luxury Dentistry",
    headline: "Refined smiles designed with precision, comfort, & discretion.",
    subheadline:
      "From cosmetic artistry to full restorative care, every treatment plan is tailored for patients who expect exceptional detail and a calm, high-touch experience.",
    primaryCtaText: "Book A Private Consultation",
    primaryCtaLink: "#book-now",
    secondaryCtaText: "View Smile Gallery",
    secondaryCtaLink: "#gallery",
  },
  trustBadges: [
    { name: "ADA", url: "/badges/ada.png" },
    { name: "Kois Center", url: "/badges/kois.png" },
    { name: "AGD", url: "/badges/agd.png" },
    { name: "Seattle Study Club", url: "/badges/ssc.png" },
  ],
  faqs: [
    {
      question: "Will treatment be painful?",
      answer:
        "Most patients are surprised by how comfortable modern cosmetic and restorative dentistry can feel. We use precise planning, gentle techniques, and appropriate anesthetic support to keep treatment calm and manageable from start to finish.",
    },
    {
      question: "How long is the recovery after veneers or implants?",
      answer:
        "Recovery depends on the procedure, but many veneer cases involve minimal downtime, while implant treatment typically includes a short healing phase followed by a carefully staged restoration timeline. We walk you through every milestone in advance so there are no surprises.",
    },
    {
      question: "Do you offer financing for larger treatment plans?",
      answer:
        "Yes. For comprehensive or high-investment care, we can discuss phased treatment scheduling and financing pathways that make exceptional dentistry more accessible without compromising the outcome.",
    },
    {
      question: "How long do veneers and implants typically last?",
      answer:
        "With thoughtful planning, high-quality materials, and excellent home care, veneers can look beautiful for many years and implants are designed as a long-term restorative solution. Longevity always depends on bite balance, maintenance, and regular professional care.",
    },
  ] satisfies FaqItem[],
  footerNav: {
    services: {
      title: "Services",
      links: [
        { name: "Porcelain Veneers", href: "#services" },
        { name: "Dental Implants", href: "#services" },
        { name: "Full Mouth Restoration", href: "#services" },
        { name: "Professional Whitening", href: "#services" },
      ],
    } satisfies FooterNavCategory,
    company: {
      title: "Company",
      links: [
        { name: "Smile Gallery", href: "#gallery" },
        { name: "Patient Reviews", href: "#testimonials" },
        { name: "Book Consultation", href: "#book-now" },
      ],
    } satisfies FooterNavCategory,
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    } satisfies FooterNavCategory,
  },
};
