import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { MVPGrid } from "@/components/MVPGrid";
import { Why } from "@/components/Why";
import { Process } from "@/components/Process";
import { Trust } from "@/components/Trust";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-950">
      <Hero />
      <CTA />
      <MVPGrid />
      <Why />
      <Process />
      <Trust />
      <Footer />
    </main>
  );
}
