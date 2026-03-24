// src/config/site.ts

export const siteConfig = {
  client: {
    name: "Jim Rutledge DDS",
    shortName: "Rutledge Dental",
    archetype: "solo", // 'solo' | 'agency' | 'spa'
  },
  theme: {
    // We will map this to Tailwind in the next step
    primary: "blue", 
  },
  contact: {
    phone: "(123) 456-7890",
    address: "123 Premium Dental Way, Suite 100",
    email: "hello@rutledgedds.com",
    bookingLink: "#book-now",
  },
  hero: {
    badge: "Top Rated Restorative Dentistry",
    headline: "World-Class Dental Artistry, Right Here in Town.",
    subheadline: "Experience premium, frictionless care. Book your consultation today and transform your smile.",
    ctaText: "Book Your Consultation",
    image: "https://youtube.com", // Placeholder luxury clinic image
  },
  trustBadges: [
    { name: "ADA", url: "/badges/ada.png" },
    { name: "Kois Center", url: "/badges/kois.png" },
    { name: "AGD", url: "/badges/agd.png" },
  ]
};