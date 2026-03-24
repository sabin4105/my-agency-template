import { HeroSolo } from "@/components/blocks/HeroSolo";
import { ContactFormBottleneckFix } from "@/components/blocks/ContactForm";
import { BeforeAfterSlider } from "@/components/blocks/BeforeAfterSlider";
import { TopNav } from "@/components/layout/TopNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { TrustStrip } from "@/components/blocks/TrustStrip";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 selection:bg-gray-900 selection:text-white dark:bg-gray-900 dark:text-white dark:selection:bg-white dark:selection:text-black">
      <TopNav />
      <main className="flex-grow">
        <HeroSolo />
        <TrustStrip />
        <BeforeAfterSlider />
        <ContactFormBottleneckFix />
      </main>
      <SiteFooter />
    </div>
  );
}
