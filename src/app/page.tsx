import { HeroSolo } from "@/components/blocks/HeroSolo";
import { ContactFormBottleneckFix } from "@/components/blocks/ContactForm";
import { BeforeAfterSlider } from "@/components/blocks/BeforeAfterSlider";
import { TopNav } from "@/components/layout/TopNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { FaqSection } from "@/components/blocks/FaqSection";
import { TestimonialWall } from "@/components/blocks/TestimonialWall";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 selection:bg-primary-700 selection:text-white dark:bg-gray-900 dark:text-white dark:selection:bg-primary-300 dark:selection:text-gray-950">
      <TopNav />
      <main className="flex-grow">
        <HeroSolo />
        <TrustStrip />
        <BeforeAfterSlider />
      </main>
      <TestimonialWall />
      <FaqSection /> {/* <-- Drops in right here */}
      <SiteFooter />
    </div>
  );
}
